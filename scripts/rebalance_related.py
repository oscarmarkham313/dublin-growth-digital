#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rebalance the `related` graph across the 106 industry pages.

With no external links, internal linking is the only thing distributing
authority on this site. The audit found it badly lopsided:

    roofers                  45 inbound contextual links
    builders-and-extensions  39
    plumbers-and-heating     33
    landscapers              28
    ...
    31 industry pages         0

Thirty-one niches existed only in the footer, which Google discounts as
sitewide boilerplate. One of them — garage-conversions — was ranking at
position 4.7 with no internal support at all.

This assigns every industry three `related` links using a round-robin
inside a semantic family, which gives every page an in-degree of exactly
three while keeping the links honest: a roofer is related to gutter
cleaning, not to music schools.

    python scripts/rebalance_related.py --dry-run
    python scripts/rebalance_related.py
"""
import argparse
import io
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")

# Families are semantic, not arbitrary. A link only helps if a reader
# would plausibly follow it, and Google increasingly judges that.
FAMILIES = {
    "structural": [
        "builders-and-extensions", "attic-conversions", "garage-conversions",
        "sunrooms-and-conservatories", "garden-rooms", "architects",
        "engineers-and-surveyors", "groundworks", "steel-fabrication",
        "scaffolding", "plastering", "carpentry-and-joinery", "stonemasons",
    ],
    "exterior": [
        "roofers", "gutter-cleaning", "chimney-sweeps", "powerwashing",
        "damp-proofing", "insulation", "windows-and-doors", "glazing",
        "asbestos-removal",
    ],
    "interior": [
        "kitchens", "bathroom-renovations", "tilers", "flooring",
        "painters-and-decorators", "blinds-and-curtains",
        "interior-designers", "shopfitting",
    ],
    "energy": [
        "solar-installers", "heat-pumps", "plumbers-and-heating",
        "stoves-and-fireplaces", "ev-charger-installers", "electricians",
    ],
    "grounds": [
        "landscapers", "driveways-and-paving", "fencing-and-gates",
        "tree-surgery", "artificial-grass", "pools-and-hot-tubs",
    ],
    "water": [
        "drainage", "septic-tank-services", "water-treatment",
        "pest-control", "cleaning-companies",
    ],
    "property-pro": [
        "estate-agents", "solicitors", "accountants", "mortgage-brokers",
        "financial-advisors", "insurance-brokers",
    ],
    "clinical": [
        "dentists", "physiotherapy", "chiropractors",
        "podiatry-and-chiropody", "opticians", "audiologists",
        "counselling-and-therapy",
    ],
    "aesthetic": [
        "med-spas", "skin-clinics", "barbers", "dog-grooming",
    ],
    "care": [
        "home-care", "stairlifts-and-mobility", "removals-companies",
        "self-storage",
    ],
    "automotive": [
        "car-garages", "mobile-mechanics", "tyre-fitting",
        "windscreen-repair", "car-valeting", "bike-shops",
    ],
    "hospitality": [
        "restaurants-and-cafes", "hotels-and-guesthouses", "wedding-venues",
        "catering-companies", "marquee-hire", "wedding-planners",
        "celebrants", "photographers",
    ],
    "education": [
        "creches", "grinds-and-tutoring", "driving-schools",
        "swimming-schools", "music-schools", "personal-trainers",
        "gyms-and-fitness",
    ],
    "business": [
        "it-support", "health-and-safety-consultants", "recruitment-agencies",
        "security-and-alarms", "fire-safety", "signage-and-print",
        "couriers-and-delivery", "equipment-hire", "skip-hire",
        "locksmiths", "appliance-repair",
    ],
    "rural": [
        "agricultural-contractors", "farm-buildings", "equine-services",
        "veterinary",
    ],
    "bereavement": [
        "funeral-directors", "monumental-sculptors",
    ],
}

# Two-member families cannot round-robin to three, so bereavement borrows
# from the trades a funeral director actually works alongside.
BORROW = {"bereavement": ["celebrants", "solicitors"]}

# Hand-set where the round-robin would produce a link a reader would not
# follow, or where a small family needs inbound support from a larger
# one. Every entry here is a relationship that genuinely exists: probate
# connects solicitors, estate agents and funeral directors; a memorial is
# stonemasonry; funeral celebrancy sits beside wedding celebrancy.
OVERRIDES = {
    "solicitors": ["accountants", "funeral-directors", "estate-agents"],
    "celebrants": ["wedding-planners", "funeral-directors", "wedding-venues"],
    "stonemasons": ["monumental-sculptors", "plastering", "carpentry-and-joinery"],
    "architects": ["engineers-and-surveyors", "interior-designers",
                   "builders-and-extensions"],
}

PATH = "config/industries.ts"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    src = io.open(PATH, encoding="utf-8").read()
    slugs = re.findall(r'\n    slug: "([a-z0-9-]+)"', src)

    placed = {s for fam in FAMILIES.values() for s in fam}
    missing = [s for s in slugs if s not in placed]
    extra = [s for s in placed if s not in slugs]
    if missing:
        print(f"  !! {len(missing)} industries not in any family:")
        for m in missing:
            print(f"       {m}")
        return 1
    if extra:
        print(f"  !! {len(extra)} family entries are not real industries:")
        for e in extra:
            print(f"       {e}")
        return 1

    # Round-robin inside each family gives every member exactly three
    # inbound links from its own family.
    plan = {}
    for name, members in FAMILIES.items():
        pool = members + BORROW.get(name, [])
        n = len(pool)
        for i, slug in enumerate(members):
            rel = [pool[(i + k) % n] for k in range(1, 4)]
            rel = [r for r in rel if r != slug][:3]
            plan[slug] = rel

    # Hand-set relationships take precedence over the round-robin.
    for slug, rel in OVERRIDES.items():
        if slug in plan:
            plan[slug] = rel

    indeg = Counter()
    for rel in plan.values():
        for r in rel:
            indeg[r] += 1

    starved = [s for s in slugs if indeg[s] < 3]
    print(f"  {len(slugs)} industries across {len(FAMILIES)} families")
    print(f"  in-degree: min {min(indeg[s] for s in slugs)}, "
          f"max {max(indeg[s] for s in slugs)}, "
          f"pages under 3: {len(starved)}")
    if starved:
        for s in starved:
            print(f"      {s}: {indeg[s]}")

    if args.dry_run:
        print("\n  DRY RUN — sample:")
        for s in slugs[:6]:
            print(f"      {s:<30} -> {plan[s]}")
        return 0

    # Replace the related: [...] that belongs to each industry entry.
    out, changed = [], 0
    entries = src.split('\n  {\n    slug: "')
    out.append(entries[0])
    for entry in entries[1:]:
        slug = entry[: entry.index('"')]
        if slug in plan:
            new_rel = "related: [" + ", ".join(f'"{r}"' for r in plan[slug]) + "]"
            entry, n = re.subn(r"related: \[[^\]]*\]", new_rel, entry, count=1)
            changed += n
        out.append(entry)

    io.open(PATH, "w", encoding="utf-8", newline="\n").write(
        '\n  {\n    slug: "'.join(out))
    print(f"\n  rewrote `related` on {changed} industry pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())

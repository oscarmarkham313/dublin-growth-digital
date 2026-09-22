# -*- coding: utf-8 -*-
"""Duplication gate for dublingrowthdigital.com.

Run after any content batch and BEFORE pushing:

    npx next build && python scripts/duplication-gate.py

WHY THIS EXISTS
---------------
On 9 Sep 2026 the 26 county pages were found to be near-identical to one
another and were suppressed by Google -- indexed, but ranking nowhere. They
measure 45-51% overlap. Everything below that line is judged against them.

WHAT CHANGED ON 22 SEP
----------------------
The first version of this script only compared pages WITHIN a batch. That
missed the real failure mode: the SAME SERVICE across DIFFERENT COUNTIES,
which is precisely what the county template did wrong. It was hiding a live
69% pair (kildare/web-design vs limerick/web-design), shipped a day earlier.

This version compares every cohort that can realistically converge:
  - each service across all counties      <- the one that was missed
  - all county service pages together
  - all industry/niche pages
  - all blog posts

HOW TO MEASURE
--------------
5-gram shingle Jaccard on chrome-stripped body text. Do NOT use
difflib.SequenceMatcher: it is a greedy longest-match algorithm, finds
different alignments for different pairs, and gave readings between 20% and
70% on pages this method puts within a few points of each other.

THRESHOLDS
----------
  under 25%   healthy, ship it
  25-35%      acceptable for pages describing one product; note it
  35-45%      investigate before shipping
  over 45%    the pattern that got pages suppressed. Do not ship.
"""
import io, re, sys, os, glob, itertools

sys.stdout.reconfigure(encoding="utf-8")

# Blocks that appear on every page of a given type. Stripping them stops
# shared furniture inflating the score and hiding real content overlap.
CHROME = [
    "find out what you're missing",
    "the price, before the call",
    "what a qualified lead looks like",
    "every figure comes from a client we can put you in touch with",
    "then one number every friday",
    "read next",
    "get your free growth audit",
]

WARN = 0.35
FAIL = 0.45


def text(path):
    h = io.open(path, encoding="utf-8").read()
    h = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", h, flags=re.S)
    t = re.sub(r"<[^>]+>", " ", h)
    t = re.sub(r"&#x27;|&#39;", "'", t)
    t = re.sub(r"&amp;", "&", t)
    t = re.sub(r"\s+", " ", t).strip().lower()
    for c in CHROME:
        i = t.find(c)
        if i != -1:
            t = t[:i] + t[i + 700:]
    return t


def shingles(t, n=5):
    w = t.split()
    return {" ".join(w[i:i + n]) for i in range(max(0, len(w) - n + 1))}


def jaccard(a, b):
    A, B = shingles(a), shingles(b)
    return len(A & B) / len(A | B) if A and B else 0.0


def cohort(name, pages, note=""):
    """pages: dict of label -> text. Returns True if within tolerance."""
    if len(pages) < 2:
        print(f"  {name:<34} (only {len(pages)} page, skipped)")
        return True
    vals = sorted(
        ((jaccard(pages[a], pages[b]), a, b) for a, b in itertools.combinations(pages, 2)),
        reverse=True,
    )
    avg = sum(v[0] for v in vals) / len(vals)
    worst = vals[0][0]
    flag = ""
    if worst > FAIL:
        flag = "   *** FAIL ***"
    elif worst > WARN:
        flag = "   (over warn)"
    print(f"  {name:<34} {len(pages):>3} pages   avg {avg:>4.0%}   worst {worst:>4.0%}{flag}")
    if worst > WARN:
        for v in vals[:3]:
            print(f"      {v[0]:>4.0%}  {v[1]}  vs  {v[2]}")
    if note:
        print(f"      {note}")
    return worst <= FAIL


def load(pattern, label_fn):
    out = {}
    for p in sorted(glob.glob(pattern)):
        out[label_fn(p)] = text(p)
    return out


def county_of(p):
    return os.path.basename(os.path.dirname(os.path.dirname(p)))


def service_of(p):
    return os.path.basename(os.path.dirname(p))


def main():
    if not os.path.isdir("out"):
        print("No out/ directory. Run `npx next build` first.")
        return 1

    ok = True
    print()
    print("  SERVICE x COUNTY — same service across counties")
    print("  (the comparison the first version of this script missed)")
    svc_glob = os.path.join("out", "locations", "*", "*", "index.html")
    all_svc = sorted(glob.glob(svc_glob))
    services = sorted({service_of(p) for p in all_svc})
    for s in services:
        pages = {county_of(p): text(p) for p in all_svc if service_of(p) == s}
        ok &= cohort(s, pages)

    print()
    print("  WHOLE COHORTS")
    ok &= cohort("all service x county pages",
                 {f"{county_of(p)}/{service_of(p)}": text(p) for p in all_svc})
    ok &= cohort("all industry / niche pages",
                 load(os.path.join("out", "industries", "*", "index.html"),
                      lambda p: os.path.basename(os.path.dirname(p))))
    ok &= cohort("all blog posts",
                 load(os.path.join("out", "blog", "*", "index.html"),
                      lambda p: os.path.basename(os.path.dirname(p))))

    # County hub pages. These were the original doorway set: on 22 Sep the
    # 14 indexable hubs measured 47% avg / 51% worst against each other,
    # because four FAQs were string-interpolated identically for all of them.
    # Giving the indexable counties their own FAQs and one county-specific
    # section brought that to 32% / 35%. This cohort is now gated like any
    # other -- there is no "suppressed baseline" left to compare against,
    # which is the point.
    src = io.open("config/county-services.ts", encoding="utf-8").read()
    indexable = set(re.findall(r'countySlug:\s*"([a-z-]+)"', src)) | {
        "dublin", "kildare", "cork"}
    hubs = {c: text(os.path.join("out", "locations", c, "index.html"))
            for c in sorted(indexable)
            if os.path.exists(os.path.join("out", "locations", c, "index.html"))}
    ok &= cohort("indexable county hubs", hubs)

    print()
    print(f"  GATE: {'PASS' if ok else 'FAIL — do not push'}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())

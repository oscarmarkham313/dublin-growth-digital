# -*- coding: utf-8 -*-
"""Generate docs/keyword-map.md -- the target keywords for all 106 niches.

Built from the configs rather than written by hand, so it cannot drift
from what the site actually says. The keyword families it assigns come
from Search Console evidence about which phrasings rank, not from a
generic SEO template:

    family                     evidence            verdict
    <niche> leads              position 2-11       build
    <niche> <county>           garage conv dublin  build
                               100% CTR
    <niche> marketing          wedding venue mktg  build
                               12.3, kitchen 39
    <niche> SEO                62 pages, 88 imp,   do not build
                               position 81         more
    lead generation <x>        position 28-83      avoid the phrasing
    marketing agency <county>  position 50-99      not winnable
"""
import io
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")

ind = io.open("config/industries.ts", encoding="utf-8").read()
seo = io.open("config/industry-seo.ts", encoding="utf-8").read()
ic = io.open("config/industry-county.ts", encoding="utf-8").read()
posts = io.open("config/posts.ts", encoding="utf-8").read()

has_seo = set(re.findall(r'\n    slug: "([a-z0-9-]+)"', seo))
counties = {}
for m in re.finditer(r'industry: "([a-z-]+)",\s*\n\s*county: "([a-z-]+)"', ic):
    counties.setdefault(m.group(1), []).append(m.group(2))

guides = Counter()
for b in posts.split('\n  {\n    slug: "')[1:]:
    rel = re.search(r"related: \[([^\]]*)\]", b)
    if rel:
        lst = re.findall(r'"([a-z0-9-]+)"', rel.group(1))
        if lst:
            guides[lst[0]] += 1

# Niches with Search Console impressions in the last 28 days, read off the
# pages report on 5 Oct 2026. Only the ones with clicks or notable volume.
SIGNAL = {
    "roofers": "160 imp, 1 click",
    "solar-installers": "32 imp, 1 click",
    "wedding-venues": "21 imp, 1 click",
    "hotels-and-guesthouses": "20 imp, 1 click",
    "plumbers-and-heating": "16 imp, 2 clicks",
    "powerwashing": "16 imp, 1 click",
    "kitchens": "14 imp, 1 click",
    "creches": "12 imp, 1 click",
    "garage-conversions": "11 imp, 1 click",
    "painters-and-decorators": "11 imp, 2 clicks",
    "estate-agents": "15 imp",
    "landscapers": "25 imp",
    "it-support": "9 imp",
    "dentists": "5 imp",
    "skin-clinics": "5 imp",
}

rows = []
for b in ind.split('\n  {\n    slug: "')[1:]:
    slug = b[:b.index('"')]
    label = re.search(r'\n    label: "([^"]*)"', b)
    title = re.search(r'\n    title: "([^"]*)"', b)
    if not (label and title):
        continue
    label = label.group(1)
    head = title.group(1).split("|")[0].strip()
    # Take the keyword from the title's first segment, not the label.
    # The titles were written deliberately and already carry the real
    # search phrasing: "Roofing Leads Ireland" means the term is
    # "roofing leads", where the label would have produced the
    # non-existent "roofers leads".
    kw = re.sub(r"\s+Ireland$", "", head).strip()
    # Title Case to search case, leaving acronyms (IT, MSPs, SEO) alone.
    kw = " ".join(t if t.isupper() or (len(t) > 1 and t[:-1].isupper())
                  else t.lower() for t in kw.split())
    niche = label[0].lower() + label[1:] if re.match(r"^[A-Z][a-z]", label) else label
    rows.append({
        "slug": slug, "label": label, "niche": niche, "head": head, "kw": kw,
        "seo": slug in has_seo,
        "counties": counties.get(slug, []),
        "guides": guides[slug],
        "signal": SIGNAL.get(slug, ""),
    })

built = [r for r in rows if r["counties"]]
signal_no_cluster = [r for r in rows if r["signal"] and not r["counties"]]
quiet = [r for r in rows if not r["signal"] and not r["counties"]]

L = []
w = L.append
w("# Keyword map: all 106 niches\n")
w("Generated from the configs on 5 October 2026, so it cannot drift from")
w("what the site actually says. Regenerate with")
w("`python scripts/keyword-map.py`.\n")
w("---\n")
w("## The families, and which ones earn their place\n")
w("Assigned from Search Console evidence rather than a generic template.\n")
w("| family | example | evidence | verdict |")
w("|---|---|---|---|")
w("| `<niche> leads` | roofing leads | position **2-11** | **build** |")
w("| `<niche> <county>` | garage conversion dublin | 100% CTR on first impression | **build** |")
w("| `<niche> marketing` | wedding venue marketing | 12.3 | **build** |")
w("| `<niche> SEO` | roofing seo ireland | 62 pages, 88 imp, position **81** | **stop building** |")
w("| `lead generation <x>` | lead generation ireland | position **28-83** | avoid the phrasing |")
w("| `marketing agency <county>` | marketing agency cork | position **50-99** | not winnable from Dublin |\n")
w("The two 'stop' rows matter more than the three 'build' rows. The SEO")
w("page type has 62 live pages and produces 88 impressions at position")
w("81 with no clicks. Sixty-nine niches have no SEO page and should")
w("stay that way until something changes.\n")
w("---\n")
w(f"## Tier 1 -- built out ({len(built)} niches)\n")
w("Money page, guides and county pages. Nothing further needed.\n")
w("| niche | primary keyword | counties | guides | Search Console |")
w("|---|---|---|---|---|")
for r in sorted(built, key=lambda r: -len(r["counties"])):
    w(f"| {r['label']} | `{r['kw']}` | {len(r['counties'])} | {r['guides']} | {r['signal'] or '--'} |")
w("")
w(f"## Tier 2 -- signal, no cluster ({len(signal_no_cluster)} niches)\n")
w("These earn impressions or clicks already and have no county pages.")
w("They are the next things worth building.\n")
w("| niche | primary keyword | Search Console | guides |")
w("|---|---|---|---|")
for r in sorted(signal_no_cluster, key=lambda r: -len(r["signal"])):
    w(f"| {r['label']} | `{r['kw']}` | **{r['signal']}** | {r['guides']} |")
w("")
w(f"## Tier 3 -- no signal yet ({len(quiet)} niches)\n")
w("Money page only. Leave them. Building county pages for a niche with")
w("no impressions is guessing, and the county test would fail for most")
w("of them anyway.\n")
w("<details><summary>The full list</summary>\n")
w("| niche | primary keyword | has SEO page | guides |")
w("|---|---|---|---|")
for r in sorted(quiet, key=lambda r: r["label"]):
    w(f"| {r['label']} | `{r['kw']}` | {'yes' if r['seo'] else 'no'} | {r['guides']} |")
w("\n</details>\n")
w("---\n")
w("## Per-niche target set\n")
w("What each niche should rank for, in priority order. The first is on")
w("the money page already; the rest are the expansion path.\n")
w("```")
w("1. <niche> leads                 the money page")
w("2. <niche> leads <county>        a county page, where the county")
w("                                 genuinely changes the trade")
w("3. <niche> marketing             the money page's second half")
w("4. how to get <niche> leads      a guide")
w("5. <niche> advertising cost      a guide")
w("6. <niche> google ads            a guide")
w("```")
w("")
w("Deliberately absent: `<niche> seo`. It is the one family with live")
w("pages and measured failure.\n")

io.open("docs/keyword-map.md", "w", encoding="utf-8", newline="\n").write("\n".join(L))
print(f"  wrote docs/keyword-map.md")
print(f"    tier 1 built out          {len(built):>3}")
print(f"    tier 2 signal, no cluster {len(signal_no_cluster):>3}")
print(f"    tier 3 no signal yet      {len(quiet):>3}")
print(f"\n  tier 2 (the build list):")
for r in sorted(signal_no_cluster, key=lambda r: -len(r["signal"])):
    print(f"    {r['label']:<30} {r['signal']}")

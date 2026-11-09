# -*- coding: utf-8 -*-
"""Generate docs/keyword-map-towns.md from config/towns.ts.

Built from the config so it cannot drift from what the site says.
Which keyword families are listed is decided by Search Console evidence,
not by a template -- see the table in the output.
"""
import io
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8")

src = io.open("config/towns.ts", encoding="utf-8").read()

towns = []
for blk in src.split("\n  {\n    slug: \"")[1:]:
    slug = blk[:blk.index('"')]
    name = re.search(r'\n    name: "([^"]*)"', blk)
    county = re.search(r'\n    county: "([^"]*)"', blk)
    if name and county:
        towns.append((slug, name.group(1), county.group(1)))

by_county = defaultdict(list)
for slug, name, county in towns:
    by_county[county].append((slug, name))

# Families, with the evidence that decides whether they earn a place.
WORK = [
    ("marketing agency {t}", "naas 9.5, kildare 16.8, westmeath 20.0", "primary"),
    ("digital marketing {t}", "naas 34.2, kildare 35.5", "build"),
    ("google ads {t}", "kildare 14.5, naas 34.1", "build"),
    ("marketing agency near me", "53.4 nationally, served by whichever town is nearest", "incidental"),
    ("web design {t}", "no direct data, same page type", "secondary"),
]
FAIL = [
    ("seo {t}", "seo services kildare 85.6, seo services naas 79.3, seo dublin 89.9"),
    ("{t} seo", "same pages, same failure"),
]

L = []
w = L.append
w("# Keyword map: the town cohort\n")
w("Generated from `config/towns.ts`. Regenerate with")
w("`python scripts/town-keywords.py`.\n")
w("---\n")
w("## Why this cohort gets the volume\n")
w("Town pages are the only thing on this site that has moved a commercial")
w("term onto page one. \"marketing agency naas\" sat at **27.4** before the")
w("page existed and reached **9.5** after it shipped.\n")
w("Page-type positions, 28 days to 7 November 2026:\n")
w("| page type | position |")
w("|---|---|")
w("| niche / industry pages | 8-28 |")
w("| town pages | 9.5 (Naas, the only one with age on it) |")
w("| county hubs | 60.2 |")
w("| home page | 71.9 |")
w("| anything Dublin | 73-96 |\n")
w("---\n")
w("## The families, and which ones earn a place\n")
w("| family | evidence | verdict |")
w("|---|---|---|")
for fam, ev, verdict in WORK:
    w("| `%s` | %s | **%s** |" % (fam.replace("{t}", "<town>"), ev, verdict))
for fam, ev in FAIL:
    w("| `%s` | %s | **do not build** |" % (fam.replace("{t}", "<town>"), ev))
w("")
w("The `seo <place>` row matters more than the rest. Every SEO-service")
w("term on the site sits between 79 and 96 regardless of geography, which")
w("is measured failure rather than an untested guess. The county x service")
w("SEO pages already exist; none should be built at town level.\n")
w("---\n")

total = 0
w("## Targets by county\n")
w("Each town carries four viable targets: `marketing agency <town>`,")
w("`digital marketing <town>`, `google ads <town>` and `web design <town>`.\n")
for county in sorted(by_county):
    rows = sorted(by_county[county], key=lambda r: r[1])
    total += len(rows) * 4
    w("### %s (%d towns, %d targets)\n" % (county, len(rows), len(rows) * 4))
    w("| town | primary target | page |")
    w("|---|---|---|")
    for slug, name in rows:
        w("| %s | `marketing agency %s` | `/towns/%s/` |" % (name, name.lower(), slug))
    w("")

w("---\n")
w("## Totals\n")
w("| | |")
w("|---|---|")
w("| towns | %d |" % len(towns))
w("| counties covered | %d |" % len(by_county))
w("| viable keyword targets | **%d** |" % total)
w("| deliberately excluded (`seo <town>`) | %d |" % (len(towns) * 2))
w("")
w("Excluded on purpose: Dublin has ten town pages already and every")
w("Dublin query on the site sits between 73 and 96. No more were added.\n")

io.open("docs/keyword-map-towns.md", "w", encoding="utf-8", newline="\n").write("\n".join(L))
print("wrote docs/keyword-map-towns.md")
print("  towns              %d" % len(towns))
print("  counties           %d" % len(by_county))
print("  keyword targets    %d" % total)
for c in sorted(by_county):
    print("    %-12s %d towns" % (c, len(by_county[c])))

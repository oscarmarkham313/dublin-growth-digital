#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""On-page SEO audit of the built output. Exits non-zero on a regression.

Checks the faults that actually cost clicks or rankings, across every
indexable page in out/:

  - duplicate titles or meta descriptions
  - missing titles, descriptions, H1s, canonicals, schema, OpenGraph
  - titles over 65 characters or descriptions over 165 (truncated in
    results, which is what 285 of 300 pages were doing until 24 Sep
    because the layout appended " | Dublin Growth Digital" to everything)
  - multiple H1s, canonical pointing somewhere other than the page
  - images without alt text
  - thin pages
  - page weight

Run from the repo root after `npm run build`:

    python scripts/seo_audit.py

This lived in a temporary scratch directory for the first week and was
lost when the session ended, which is why it is committed now.
"""
import glob
import io
import os
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8")

OUT = "out"

# Thresholds. Titles and descriptions are what Google will display in
# full; the rest are judgement calls that have held up in practice.
TITLE_MAX = 65
DESC_MAX = 165
DESC_MIN = 70
THIN_WORDS = 300
HEAVY_KB = 300

ENTITIES = (("&amp;", "&"), ("&#x27;", "'"), ("&#39;", "'"),
            ("&quot;", '"'), ("&lt;", "<"), ("&gt;", ">"), ("&nbsp;", " "))


def unescape(s):
    if not s:
        return s
    for a, b in ENTITIES:
        s = s.replace(a, b)
    return s


def first(html, pattern):
    m = re.search(pattern, html, re.I | re.S)
    return unescape(m.group(1).strip()) if m else None


def load():
    pages = {}
    for path in glob.glob(os.path.join(OUT, "**", "index.html"), recursive=True):
        rel = os.path.relpath(path, OUT).replace("\\", "/")
        url = "/" + rel[: -len("index.html")]
        pages[url] = path
    return pages


def analyse(path):
    h = io.open(path, encoding="utf-8").read()
    body = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", h, flags=re.S)
    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", body, re.S)
    imgs = re.findall(r"<img\b[^>]*>", body, re.I)
    text = re.sub(r"<[^>]+>", " ", body)
    return {
        "title": first(h, r"<title>(.*?)</title>"),
        "desc": first(h, r'<meta name="description" content="([^"]*)"'),
        "canonical": first(h, r'<link rel="canonical" href="([^"]*)"'),
        "robots": first(h, r'<meta name="robots" content="([^"]*)"'),
        "h1": [unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in h1s],
        "og": bool(re.search(r'property="og:title"', h)),
        "schema": len(re.findall(r"application/ld\+json", h)),
        "imgs_no_alt": sum(1 for i in imgs if not re.search(r'\balt="[^"]', i)),
        "kb": round(len(h.encode("utf-8")) / 1024),
        "words": len(text.split()),
    }


def main():
    pages = load()
    if not pages:
        print("no built pages found — run `npm run build` first")
        return 1

    rows = {u: analyse(p) for u, p in pages.items()}
    live = {u: r for u, r in rows.items()
            if not (r["robots"] and "noindex" in r["robots"])}

    issues = defaultdict(list)

    for key, label in (("title", "DUPLICATE TITLE"),
                       ("desc", "DUPLICATE DESCRIPTION")):
        counts = Counter(r[key] for r in live.values() if r[key])
        for value, n in counts.items():
            if n > 1:
                urls = [u for u, r in live.items() if r[key] == value]
                issues[label].append(f"{n}x  {value[:60]}…  e.g. {urls[0]}")

    for url, r in sorted(live.items()):
        t, d = r["title"] or "", r["desc"] or ""
        if not t:
            issues["MISSING TITLE"].append(url)
        elif len(t) > TITLE_MAX:
            issues["TITLE TOO LONG"].append(f"{len(t):>3}  {url}")
        if not d:
            issues["MISSING DESCRIPTION"].append(url)
        elif len(d) > DESC_MAX:
            issues["DESCRIPTION TOO LONG"].append(f"{len(d):>3}  {url}")
        elif len(d) < DESC_MIN:
            issues["DESCRIPTION TOO SHORT"].append(f"{len(d):>3}  {url}")
        if not r["h1"]:
            issues["NO H1"].append(url)
        elif len(r["h1"]) > 1:
            issues["MULTIPLE H1"].append(f"{len(r['h1'])}x  {url}")
        if not r["canonical"]:
            issues["NO CANONICAL"].append(url)
        elif not r["canonical"].rstrip("/").endswith(url.rstrip("/")):
            issues["CANONICAL MISMATCH"].append(f"{url} -> {r['canonical']}")
        if not r["schema"]:
            issues["NO SCHEMA"].append(url)
        if not r["og"]:
            issues["NO OPENGRAPH"].append(url)
        if r["imgs_no_alt"]:
            issues["IMAGES WITHOUT ALT"].append(f"{r['imgs_no_alt']}  {url}")
        if r["words"] < THIN_WORDS:
            issues["THIN PAGE"].append(f"{r['words']:>4}w  {url}")
        if r["kb"] > HEAVY_KB:
            issues["PAGE TOO HEAVY"].append(f"{r['kb']:>4}KB  {url}")

    print(f"  {len(rows)} built · {len(live)} indexable · "
          f"{len(rows) - len(live)} noindex\n")

    for name in sorted(issues, key=lambda k: -len(issues[k])):
        rowset = issues[name]
        print(f"  {name}  ({len(rowset)})")
        for line in rowset[:8]:
            print(f"      {line}")
        if len(rowset) > 8:
            print(f"      … and {len(rowset) - 8} more")
        print()

    tl = sorted(len(r["title"] or "") for r in live.values())
    dl = sorted(len(r["desc"] or "") for r in live.values())
    kb = sorted(r["kb"] for r in live.values())
    wd = sorted(r["words"] for r in live.values())
    print(f"  title   min {tl[0]:>3}  median {tl[len(tl)//2]:>3}  max {tl[-1]:>3}")
    print(f"  desc    min {dl[0]:>3}  median {dl[len(dl)//2]:>3}  max {dl[-1]:>3}")
    print(f"  weight  min {kb[0]:>3}KB median {kb[len(kb)//2]:>3}KB max {kb[-1]:>3}KB")
    print(f"  words   min {wd[0]:>4}  median {wd[len(wd)//2]:>4}  max {wd[-1]:>4}")

    print(f"\n  SEO AUDIT: {'PASS' if not issues else 'FAIL — fix before pushing'}")
    return 0 if not issues else 1


if __name__ == "__main__":
    sys.exit(main())

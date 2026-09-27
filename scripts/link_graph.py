#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Internal link graph: where does authority actually flow on this site?

With 431 pages and effectively no external links, internal linking is
the only thing distributing authority. This measures whether it is
pointing anywhere useful.

It counts inbound internal links per page TWICE:

  total       including nav and footer
  contextual  with <nav>, <footer> and <header> stripped

The second number is the one that matters. The footer links all 106
industry pages from all 431 pages, which Google discounts as sitewide
boilerplate. A page whose only inbound links are chrome is, for
authority purposes, close to unlinked.

    python scripts/link_graph.py            # summary by cohort
    python scripts/link_graph.py --detail   # per-page, worst first
"""
import argparse
import glob
import io
import os
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8")

OUT = "out"
HREF = re.compile(r'href="(/[^"#?]*?)"')
CHROME = re.compile(r"<(nav|footer|header)\b[^>]*>.*?</\1>", re.S | re.I)
SCRIPTS = re.compile(r"<(script|style)[^>]*>.*?</\1>", re.S)


def cohort(url):
    if url.startswith("/industries/") and url.count("/") == 3:
        return "industry"
    if url.startswith("/industries/") and url.endswith("/seo/"):
        return "SEO x industry"
    if url.startswith("/industries/") and url.count("/") == 4:
        return "industry x county"
    if re.match(r"^/locations/[^/]+/[^/]+/$", url):
        return "service x county"
    if re.match(r"^/locations/[^/]+/$", url):
        return "county hub"
    if url.startswith("/towns/") and url != "/towns/":
        return "town"
    if url.startswith("/blog/") and url != "/blog/":
        return "guide"
    return "core"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--detail", action="store_true")
    ap.add_argument("--cohort", help="only show this cohort in detail")
    args = ap.parse_args()

    pages = {}
    for path in glob.glob(os.path.join(OUT, "**", "index.html"), recursive=True):
        rel = os.path.relpath(path, OUT).replace("\\", "/")
        pages["/" + rel[: -len("index.html")]] = path

    total = defaultdict(int)
    ctx = defaultdict(int)
    ctx_from = defaultdict(set)

    for url, path in pages.items():
        html = io.open(path, encoding="utf-8").read()
        body = SCRIPTS.sub(" ", html)
        stripped = CHROME.sub(" ", body)
        for target in set(HREF.findall(body)):
            if target != url and target in pages:
                total[target] += 1
        for target in set(HREF.findall(stripped)):
            if target != url and target in pages:
                ctx[target] += 1
                ctx_from[target].add(url)

    buckets = defaultdict(list)
    for url in pages:
        buckets[cohort(url)].append(url)

    print(f"  {len(pages)} pages\n")
    print(f"  {'cohort':<20} {'pages':>5} {'ctx avg':>8} {'ctx min':>8} "
          f"{'zero':>5} {'chrome avg':>11}")
    order = ["industry", "SEO x industry", "industry x county",
             "service x county", "county hub", "town", "guide", "core"]
    for name in order:
        urls = buckets.get(name)
        if not urls:
            continue
        c = [ctx[u] for u in urls]
        t = [total[u] for u in urls]
        zero = sum(1 for x in c if x == 0)
        print(f"  {name:<20} {len(urls):>5} {sum(c)/len(c):>8.1f} "
              f"{min(c):>8} {zero:>5} {sum(t)/len(t):>11.1f}")

    if args.detail:
        target = args.cohort
        print("\n  least-linked pages"
              + (f" in {target}" if target else "") + ":\n")
        rows = [(ctx[u], total[u], u) for u in pages
                if not target or cohort(u) == target]
        for c, t, u in sorted(rows)[:40]:
            print(f"      ctx {c:>3}  chrome {t:>3}   {u}")

    return 0


if __name__ == "__main__":
    sys.exit(main())

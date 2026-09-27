#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Assert that the sitemap, llms.txt and the built pages agree.

This exists because the same bug shipped twice. Adding a new route means
wiring FOUR things, and llms.txt is the one that gets forgotten:

  1. app/sitemap.ts
  2. scripts/generate-lastmod.py
  3. scripts/duplication-gate.py   (as its own cohort)
  4. app/llms.txt/route.ts         <- missed for the 24 town pages, then
                                      missed again for SEO x industry

Both times the site went live with a whole page type invisible to the
file AI assistants read to answer questions about this business. Nothing
surfaced it either time; it was found by chance.

The check that matters is the last one: a whole SECTION present in the
sitemap and absent from llms.txt. Individual URLs can legitimately
differ — section index pages are introduced in prose rather than linked,
and anchors are not separate URLs.

Run after a build:

    python scripts/parity_check.py
"""
import glob
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

OUT = "out"
DOMAIN = "https://dublingrowthdigital.com"

# Section index pages. llms.txt introduces each of these with a heading
# and prose rather than linking the index itself, which is right for
# that file. Deliberately explicit rather than a pattern, because this
# set is the escape hatch that could let the original bug back in.
INDEX_PAGES = {
    "/", "/about/", "/blog/", "/contact/", "/industries/",
    "/locations/", "/privacy/", "/results/", "/services/", "/towns/",
}


def built_indexable():
    urls = set()
    for path in glob.glob(os.path.join(OUT, "**", "index.html"), recursive=True):
        html = io.open(path, encoding="utf-8").read()
        if re.search(r'<meta name="robots" content="[^"]*noindex', html):
            continue
        rel = os.path.relpath(path, OUT).replace("\\", "/")
        urls.add("/" + rel[: -len("index.html")])
    return urls


def sitemap_urls():
    path = os.path.join(OUT, "sitemap.xml")
    if not os.path.exists(path):
        return None
    xml = io.open(path, encoding="utf-8").read()
    return {u.replace(DOMAIN, "") or "/"
            for u in re.findall(r"<loc>([^<]+)</loc>", xml)}


def llms_urls():
    pattern = r"\((" + re.escape(DOMAIN) + r"[^)\s]*)\)"
    for candidate in (os.path.join(OUT, "llms.txt"),
                      os.path.join(OUT, "llms.txt", "index.txt")):
        if not os.path.isfile(candidate):
            continue
        text = io.open(candidate, encoding="utf-8").read()
        urls = set()
        for raw in re.findall(pattern, text):
            # An anchor is not a separate URL and never appears in a
            # sitemap. Compare the page, not the fragment.
            page = raw.split("#")[0]
            urls.add(page.replace(DOMAIN, "") or "/")
        return urls
    return None


def section(url):
    parts = [p for p in url.split("/") if p]
    return parts[0] if parts else "(root)"


def report(name, missing, where):
    if not missing:
        return 0
    print()
    print(f"  {name}  ({len(missing)})")
    print(f"      present in {where[0]}, absent from {where[1]}")
    for u in sorted(missing)[:12]:
        print(f"      {u}")
    if len(missing) > 12:
        print(f"      … and {len(missing) - 12} more")
    return 1


def main():
    built = built_indexable()
    sm = sitemap_urls()
    llms = llms_urls()

    if sm is None:
        print("  sitemap.xml not found — run `npm run build` first")
        return 1
    if llms is None:
        print("  llms.txt not found in the build output")
        return 1

    print(f"  built indexable : {len(built)}")
    print(f"  sitemap.xml     : {len(sm)}")
    print(f"  llms.txt        : {len(llms)}")

    bad = 0
    bad |= report("IN SITEMAP BUT NOT BUILT",
                  sm - built, ("sitemap.xml", "the build"))
    bad |= report("BUILT AND INDEXABLE BUT MISSING FROM SITEMAP",
                  built - sm, ("the build", "sitemap.xml"))
    bad |= report("IN llms.txt BUT NOT A REAL PAGE",
                  llms - built - INDEX_PAGES, ("llms.txt", "the build"))

    # The check this file exists for.
    sm_sections = {section(u) for u in sm}
    content_sections = {
        s for s in sm_sections
        if any(section(u) == s and u not in INDEX_PAGES for u in sm)
    }
    llms_sections = {section(u) for u in llms}
    missing = content_sections - llms_sections
    if missing:
        print()
        print(f"  WHOLE SECTION MISSING FROM llms.txt  ({len(missing)})")
        print("      a page type is in the sitemap and forgotten in llms.txt")
        for s in sorted(missing):
            n = len([u for u in sm if section(u) == s])
            print(f"      /{s}/  — {n} URLs in the sitemap, none in llms.txt")
        bad = 1

    print()
    print(f"  PARITY: {'PASS' if not bad else 'FAIL — a page type is only half-wired'}")
    return bad


if __name__ == "__main__":
    sys.exit(main())

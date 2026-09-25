# -*- coding: utf-8 -*-
"""Derive a real lastmod date for every generated page, from git history.

The sitemap stamped `new Date()` on 185 of 190 URLs, so every page claimed
to change on every deploy. Google uses lastmod to decide what to re-crawl
and explicitly discounts it when a site reports changes that did not
happen -- which is the worst possible outcome for a site with 190 pages
and 35 indexed.

This walks the history of each config file, extracts the block belonging to
each page, hashes it, and records the date that hash last changed. The
result is written to config/lastmod.json and committed, so the build is
deterministic and does not need git at build time.

Re-run after any batch that edits page content:
    python scripts/generate-lastmod.py
"""
import hashlib
import json
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")


def sh(*args):
    return subprocess.run(args, capture_output=True, text=True,
                          encoding="utf-8", errors="replace").stdout


def commits(path):
    """(sha, YYYY-MM-DD) oldest first."""
    out = sh("git", "log", "--reverse", "--format=%H %ad", "--date=short",
             "--", path).strip()
    return [ln.split(" ", 1) for ln in out.split("\n") if ln.strip()]


def blob(sha, path):
    return sh("git", "show", f"{sha}:{path}")


def blocks(src, key):
    """Map id -> hashed slice of source, one per page entry."""
    out = {}
    marks = [(m.start(), m.group(1)) for m in
             re.finditer(r'%s:\s*"([a-z0-9-]+)"' % key, src)]
    for n, (pos, ident) in enumerate(marks):
        end = marks[n + 1][0] if n + 1 < len(marks) else len(src)
        out.setdefault(ident, []).append(src[pos:end])
    return {k: hashlib.sha1("".join(v).encode("utf-8")).hexdigest()
            for k, v in out.items()}


def track(path, key):
    """id -> date its content last changed."""
    last_hash, last_date = {}, {}
    for sha, date in commits(path):
        try:
            cur = blocks(blob(sha, path), key)
        except Exception:
            continue
        for ident, h in cur.items():
            if last_hash.get(ident) != h:
                last_hash[ident] = h
                last_date[ident] = date
    return last_date


def file_date(path):
    c = commits(path)
    return c[-1][1] if c else None


result = {"industries": track("config/industries.ts", "slug"),
          "counties": track("config/counties.ts", "slug"),
          "towns": track("config/towns.ts", "slug"),
          "industrySeo": track("config/industry-seo.ts", "slug")}

# service x county pages are keyed by the pair, so hash per county block
sp = {}
src_commits = commits("config/county-services.ts")
last_hash = {}
for sha, date in src_commits:
    try:
        src = blob(sha, "config/county-services.ts")
    except Exception:
        continue
    for m in re.finditer(
            r'countySlug:\s*"([a-z-]+)",\s*\n\s*service:.*?serviceSlug:\s*"([a-z-]+)"',
            src, re.S):
        key = f"{m.group(1)}/{m.group(2)}"
        start = m.start()
        nxt = src.find("countySlug:", m.end())
        chunk = src[start:nxt if nxt != -1 else len(src)]
        h = hashlib.sha1(chunk.encode("utf-8")).hexdigest()
        if last_hash.get(key) != h:
            last_hash[key] = h
            sp[key] = date
result["servicePages"] = sp

result["core"] = {
    "/": file_date("app/page.tsx"),
    "/services/": file_date("app/services/page.tsx"),
    "/results/": file_date("app/results/page.tsx"),
    "/industries/": file_date("app/industries/page.tsx"),
    "/locations/": file_date("app/locations/page.tsx"),
    "/blog/": file_date("app/blog/page.tsx"),
    "/towns/": file_date("app/towns/page.tsx"),
    "/about/": file_date("app/about/page.tsx"),
    "/contact/": file_date("app/contact/page.tsx"),
    "/privacy/": file_date("app/privacy/page.tsx"),
}
result["core"] = {k: v for k, v in result["core"].items() if v}

with open("config/lastmod.json", "w", encoding="utf-8", newline="\n") as f:
    json.dump(result, f, indent=2, sort_keys=True)
    f.write("\n")

for k, v in result.items():
    dates = sorted(set(x for x in v.values() if x))
    print(f"{k:<14} {len(v):>3} entries   {len(dates)} distinct dates   "
          f"{dates[0] if dates else '-'} .. {dates[-1] if dates else '-'}")

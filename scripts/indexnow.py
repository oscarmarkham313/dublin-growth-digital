#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Submit recently-changed URLs to IndexNow (Bing, Yandex and others).

Every submission until now was a hand-written list of URLs pasted into a
throwaway script, which meant it only happened when I remembered and
only covered what I remembered. This replaces that.

It works off the sitemap's lastmod dates, which are real: they come from
git history via scripts/generate-lastmod.py rather than from the build
clock. A URL is submitted when its lastmod falls inside the window.

    python scripts/indexnow.py            # last 3 days, live
    python scripts/indexnow.py --days 7   # wider window
    python scripts/indexnow.py --dry-run  # print, submit nothing
    python scripts/indexnow.py --all      # everything in the sitemap

Note this does nothing for Google, which has no equivalent endpoint and
ignores IndexNow. Google discovery still depends on the sitemap being
re-read, and on the site having enough authority to be crawled often —
which, with no backlinks, is the actual constraint.
"""
import argparse
import datetime as dt
import io
import json
import os
import re
import sys
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8")

HOST = "dublingrowthdigital.com"
BASE = f"https://{HOST}"
KEY = "ef41966f22ca577ce271e8abbf0b61e4"
SITEMAP = os.path.join("out", "sitemap.xml")
ENDPOINT = "https://api.indexnow.org/indexnow"
BATCH = 10000  # IndexNow accepts up to 10,000 URLs per request


def entries():
    """[(url, lastmod_date_or_None)] from the built sitemap."""
    if not os.path.exists(SITEMAP):
        print(f"  {SITEMAP} not found — run `npm run build` first")
        return None
    xml = io.open(SITEMAP, encoding="utf-8").read()
    out = []
    for block in re.findall(r"<url>(.*?)</url>", xml, re.S):
        loc = re.search(r"<loc>([^<]+)</loc>", block)
        if not loc:
            continue
        mod = re.search(r"<lastmod>([^<]+)</lastmod>", block)
        date = None
        if mod:
            try:
                date = dt.date.fromisoformat(mod.group(1)[:10])
            except ValueError:
                date = None
        out.append((loc.group(1), date))
    return out


def submit(urls, dry_run):
    if dry_run:
        print(f"  DRY RUN — would submit {len(urls)} URLs")
        for u in urls[:20]:
            print(f"      {u}")
        if len(urls) > 20:
            print(f"      … and {len(urls) - 20} more")
        return 0

    sent = 0
    for i in range(0, len(urls), BATCH):
        chunk = urls[i:i + BATCH]
        payload = json.dumps({
            "host": HOST,
            "key": KEY,
            "keyLocation": f"{BASE}/{KEY}.txt",
            "urlList": chunk,
        }).encode()
        req = urllib.request.Request(
            ENDPOINT, data=payload,
            headers={"Content-Type": "application/json; charset=utf-8"})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                print(f"  HTTP {r.status} — {len(chunk)} URLs submitted")
                sent += len(chunk)
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")[:200]
            print(f"  HTTP {e.code} — {body}")
            return 1
        except Exception as e:  # noqa: BLE001 - network, report and fail soft
            print(f"  submission failed: {e}")
            return 1
    print(f"  {sent} URLs accepted")
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=3,
                    help="submit URLs modified within this many days")
    ap.add_argument("--all", action="store_true",
                    help="submit every URL in the sitemap")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    rows = entries()
    if rows is None:
        return 1

    if args.all:
        urls = [u for u, _ in rows]
        print(f"  submitting all {len(urls)} sitemap URLs")
    else:
        cutoff = dt.date.today() - dt.timedelta(days=args.days)
        urls = [u for u, d in rows if d and d >= cutoff]
        undated = sum(1 for _, d in rows if d is None)
        print(f"  {len(rows)} URLs in sitemap · "
              f"{len(urls)} modified since {cutoff.isoformat()}"
              + (f" · {undated} without a lastmod" if undated else ""))

    if not urls:
        print("  nothing changed in the window — not submitting")
        return 0

    return submit(urls, args.dry_run)


if __name__ == "__main__":
    sys.exit(main())

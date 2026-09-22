# -*- coding: utf-8 -*-
"""Duplication gate: 5-gram shingle Jaccard on chrome-stripped body text.

Baseline from the pages Google actually suppressed: the county template at
avg 50%. Anything approaching that is a doorway pattern and must not ship.
"""
import io, re, sys, itertools, glob
sys.stdout.reconfigure(encoding="utf-8")

CHROME = [
    "find out what you're missing",
    "the price, before the call",
    "what a qualified lead looks like",
    "every figure comes from a client we can put you in touch with",
    "then one number every friday",
    "read next",
    "get your free growth audit",
]


def text(f):
    h = io.open(f, encoding="utf-8").read()
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


def sh(t, n=5):
    w = t.split()
    return {" ".join(w[i:i + n]) for i in range(max(0, len(w) - n + 1))}


def jac(a, b):
    A, B = sh(a), sh(b)
    return len(A & B) / len(A | B) if A and B else 0.0


def report(name, files, limit=None):
    d = {f: text(f) for f in files}
    pairs = list(itertools.combinations(d, 2))
    vals = sorted(((jac(d[a], d[b]), a, b) for a, b in pairs), reverse=True)
    avg = sum(v[0] for v in vals) / len(vals)
    print(f"  {name:<26} pages {len(d):>3}   avg {avg:.0%}   worst {vals[0][0]:.0%}")
    if limit and vals[0][0] > limit:
        print(f"      !! OVER GATE ({limit:.0%}) — worst pair:")
        for v in vals[:3]:
            print(f"         {v[0]:.0%}  {v[1].split('/')[-2]}  vs  {v[2].split('/')[-2]}")
        return False
    return True


costs = sorted(glob.glob("out/blog/*-lead-cost-ireland/index.html"))
allblog = sorted(glob.glob("out/blog/*/index.html"))
counties = [f"out/locations/{c}/index.html" for c in ("kildare", "cork", "dublin", "limerick")]

print()
ok = report("NEW cost guides", costs, limit=0.35)
report("all blog posts", allblog)
report("county template (baseline)", counties)
print()
print("  GATE:", "PASS" if ok else "FAIL — fix before shipping")

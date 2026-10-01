# SEO status: what is done and what is not

Checked 1 October 2026. Every figure here was verified against the
repo, the live site or Search Console rather than recalled.

---

## The one-line summary

The on-site work is close to finished. What decides whether any of it
ranks is now almost entirely off-site, and almost entirely yours.

---

## DONE

### Content and structure

- [x] **543 indexable pages**, 550 built, 7 deliberately noindex
- [x] **8 niche clusters**, each a money page plus an SEO page, county
      pages and 8 guides: roofing, solar, estate agents, plumbing,
      landscapers, dentistry, solicitors, garage conversions
- [x] 106 industry pages, 130 service x county pages, 26 county hubs,
      24 town pages, 53 industry x county pages, 37 SEO x industry
      pages, 157 guides
- [x] County pages only where the county genuinely changes the trade.
      Garage conversions got five rather than six for this reason
- [x] Every page title under 65 characters, every description 70-165
- [x] No duplicate-content cohort above 31% similarity on a 5-gram
      shingle comparison; most sit at 3-8%
- [x] No pricing anywhere on the site, and no euro figure at all

### Technical

- [x] Static export, no client-side rendering of content
- [x] `robots.txt` open, sitemap declared
- [x] `sitemap.xml` with honest per-page `lastmod` generated from git
      history, not from the build date
- [x] Canonical tag on every page
- [x] Open Graph and Twitter card tags
- [x] Viewport, favicon, robots meta
- [x] `llms.txt` for AI crawlers, kept in parity with the sitemap
- [x] Breadcrumb structured data (Search Console: 93 valid, 0 invalid)
- [x] FAQPage, Service, Organization, WebSite, BreadcrumbList schema
- [x] Median page weight 102KB, heaviest 286KB. The site is almost
      entirely text, which is why it is fast
- [x] Mobile layout verified at 375px with no horizontal overflow

### Internal linking

- [x] Home page links into all four hubs. It previously linked to one
      page, leaving 479 of 482 pages with no editorial path from the
      strongest page on the domain
- [x] Every cohort now has inbound contextual links; nothing is orphaned
- [x] SEO x industry pages went from 1.8 average inbound to 6.9
- [x] Industry x county pages went from 1.0 to roughly 8
- [x] Guides went from 5.1 to 7.6, after fixing a bug where all 157
      guides linked to the same three articles
- [x] Industry pages surface six niche guides each, ranked by relevance
      and recency rather than by file order

### Process and tooling

- [x] CI blocks a deploy on three gates: on-page SEO audit, sitemap /
      llms.txt parity, duplicate content
- [x] `scripts/seo_audit.py`, `duplication-gate.py`, `parity_check.py`,
      `link_graph.py`, `generate-lastmod.py`, `indexnow.py`,
      `rebalance_related.py`
- [x] IndexNow pings Bing and Yandex automatically on every deploy
- [x] Sitemap resubmitted; Search Console now reports 487 discovered
      pages, up from 445

### Search Console

- [x] Property verified, sitemap submitted and read
- [x] Indexing requested manually for the highest-value unindexed pages

---

## NOT DONE — and this is the part that matters

### Off-site. Nothing here can be fixed by writing more pages.

- [ ] **Backlinks: zero.** Searching for the domain returns only
      nofollow social posts. No directories, no client credits, no
      press. This is the ceiling on everything above.
      See `docs/backlinks.md`. The first item on that list is client
      footer credits, which you fully control.
- [ ] **Google reviews: zero.** Dublin competitors in the same Maps
      search sit on 5, 21, 52 and 70. At zero you are not competing in
      the map pack at all. See `docs/reviews.md` for the verified
      review link and what to send.
- [ ] No directory or citation listings at all: Bing Places, Apple
      Business Connect, goldenpages, Trustpilot, LinkedIn company page,
      Crunchbase. One sitting, all free
- [ ] No agency directory profiles: Clutch, Sortlist, The Manifest
- [ ] No press, podcast or guest appearances

### On-site gaps I can fix when you want

- [ ] **No LocalBusiness or ProfessionalService schema.** The site has
      Organization markup but not the local-business type that feeds
      map results. A genuine gap for a business selling local SEO
- [ ] **GA4 is wired but not firing.** `components/Analytics.tsx` is
      ready and waiting on `NEXT_PUBLIC_GA4_ID`. Nothing on the site is
      being measured beyond Search Console. I need the property ID
- [ ] **The site has three images in total.** It is fast because of it,
      but there are no photographs of work, no team, no faces. The
      guides tell clients their own photographs are the one asset a
      competitor cannot buy, and the site does not take its own advice
- [ ] No Core Web Vitals data in Search Console. Not a penalty — it
      means traffic is too low for Google to measure field data yet
- [ ] 24 town pages and much of the long tail still unindexed. Search
      Console reports "Referring page: None detected" on them. The
      linking fixes address the cause but Google has to recrawl
- [ ] `app/terms/` is still a contract for an older product. The
      amounts are gone but it needs your read

### Decided against, deliberately

- [ ] County hubs left thin. They pull the most impressions on the site
      (Cork 370, Kildare 346) but at position 73-99 for "marketing
      agency cork" and similar. Those are local-intent searches a
      Dublin agency does not win, and more content will not change it
- [ ] No ninth cluster. After it-support at 9 impressions there is no
      niche on the site with data behind it

---

## Where the numbers stand

| | |
|---|---|
| Indexable pages | 543 |
| Pages earning impressions (28 days) | 118 |
| Clicks (28 days) | 26 |
| Impressions (28 days) | ~2,100 |
| Average position | 45 |
| Best cohort position | blog, 21 |
| Backlinks | 0 |
| Google reviews | 0 |

The gap between 543 pages and 118 earning impressions is not a content
problem. It is a domain-authority problem, and the two items at the top
of the NOT DONE list are the only things that close it.

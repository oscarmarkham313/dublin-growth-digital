import type { MetadataRoute } from "next";
import { site } from "@/config/copy";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";
import { posts } from "@/config/posts";
import { servicePages, isCountyIndexable } from "@/config/county-services";
import { towns } from "@/config/towns";
import lastmod from "@/config/lastmod.json";

export const dynamic = "force-static";

/**
 * Real last-modified dates, generated from git history by
 * scripts/generate-lastmod.py and committed.
 *
 * This used to be `new Date()` on every URL, so all 190 pages claimed to
 * change on every deploy. Google uses lastmod to prioritise re-crawling and
 * discounts the signal entirely when a site reports changes that did not
 * happen -- the worst outcome for a site with 190 pages and 35 indexed.
 *
 * Re-run the generator after any batch that edits page content.
 */
const when = (date: string | undefined, fallback: string) =>
  new Date(`${date ?? fallback}T12:00:00Z`);

/**
 * Read through lastmod.json by group. Typed loosely on purpose: a new
 * page type (towns, most recently) adds its key the first time the
 * generator runs after the content is committed, and the build must not
 * fail in the window before that.
 */
const groups = lastmod as unknown as Record<string, Record<string, string>>;
const dateFor = (group: string, key: string) => groups[group]?.[key];

const BUILT = "2026-09-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const core_ = groups.core ?? {};
  const core: MetadataRoute.Sitemap = [
    { url: `${site.domain}/`, lastModified: when(core_["/"], BUILT), changeFrequency: "weekly", priority: 1 },
    { url: `${site.domain}/services/`, lastModified: when(core_["/services/"], BUILT), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/results/`, lastModified: when(core_["/results/"], BUILT), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/industries/`, lastModified: when(core_["/industries/"], BUILT), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/locations/`, lastModified: when(core_["/locations/"], BUILT), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}/blog/`, lastModified: when(core_["/blog/"], BUILT), changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.domain}/towns/`, lastModified: when(core_["/towns/"], BUILT), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}/about/`, lastModified: when(core_["/about/"], BUILT), changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.domain}/contact/`, lastModified: when(core_["/contact/"], BUILT), changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.domain}/privacy/`, lastModified: when(core_["/privacy/"], BUILT), changeFrequency: "yearly", priority: 0.3 },
  ];

  const industryUrls: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${site.domain}/industries/${i.slug}/`,
    lastModified: when(dateFor("industries", i.slug), BUILT),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Only counties we actually let Google index belong in the sitemap;
  // listing a noindex URL is a contradictory signal.
  const countyUrls: MetadataRoute.Sitemap = counties
    .filter((c) => isCountyIndexable(c.slug))
    .map((c) => ({
      url: `${site.domain}/locations/${c.slug}/`,
      lastModified: when(dateFor("counties", c.slug), BUILT),
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  // Town pages — built from real query evidence (Naas earns ~40
  // impressions across nine queries with no page of its own).
  const townUrls: MetadataRoute.Sitemap = towns.map((t) => ({
    url: `${site.domain}/towns/${t.slug}/`,
    lastModified: when(dateFor("towns", t.slug), BUILT),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Deep service x county pages — highest priority after the homepage:
  // these are the pages built to rank for "<service> <county>".
  const serviceUrls: MetadataRoute.Sitemap = servicePages.map((p) => ({
    url: `${site.domain}/locations/${p.countySlug}/${p.serviceSlug}/`,
    lastModified: when(
      dateFor("servicePages", `${p.countySlug}/${p.serviceSlug}`),
      BUILT,
    ),
    changeFrequency: "monthly",
    priority: 0.95,
  }));

  return [
    ...core,
    ...serviceUrls,
    ...industryUrls,
    ...townUrls,
    ...countyUrls,
    ...postUrls,
  ];
}

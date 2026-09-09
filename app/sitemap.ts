import type { MetadataRoute } from "next";
import { site } from "@/config/copy";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";
import { posts } from "@/config/posts";
import { servicePages, isCountyIndexable } from "@/config/county-services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core: MetadataRoute.Sitemap = [
    { url: `${site.domain}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.domain}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/results/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/industries/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/locations/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.domain}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.domain}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.domain}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const industryUrls: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${site.domain}/industries/${i.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Only counties we actually let Google index belong in the sitemap;
  // listing a noindex URL is a contradictory signal.
  const countyUrls: MetadataRoute.Sitemap = counties
    .filter((c) => isCountyIndexable(c.slug))
    .map((c) => ({
      url: `${site.domain}/locations/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
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
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.95,
  }));

  return [...core, ...serviceUrls, ...industryUrls, ...countyUrls, ...postUrls];
}

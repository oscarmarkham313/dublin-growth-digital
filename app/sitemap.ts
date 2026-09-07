import type { MetadataRoute } from "next";
import { site } from "@/config/copy";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";
import { posts } from "@/config/posts";

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
  ];

  const industryUrls: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${site.domain}/industries/${i.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const countyUrls: MetadataRoute.Sitemap = counties.map((c) => ({
    url: `${site.domain}/locations/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...industryUrls, ...countyUrls, ...postUrls];
}

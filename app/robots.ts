import type { MetadataRoute } from "next";
import { site } from "@/config/copy";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Everything is allowed, including the AI crawlers. That is deliberate:
    // a growing share of "who should I hire" questions are answered by
    // ChatGPT, Perplexity and Google's AI Overviews rather than by a list
    // of links, and this site wants to be quoted in those answers.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}

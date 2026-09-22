import { site } from "@/config/copy";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";
import { posts } from "@/config/posts";
import { servicePages } from "@/config/county-services";
import { isCountyIndexable } from "@/config/county-services";

/**
 * /llms.txt — the emerging convention (llmstxt.org) for telling large
 * language models what a site contains and where the substance is.
 *
 * Why bother: a growing share of "who should I hire" questions are now
 * answered by ChatGPT, Perplexity and Google's AI Overviews rather than by
 * a list of ten blue links. Those systems do best with a clean, linked
 * index of what a site actually covers. This is that index.
 *
 * Generated from the same config the pages are built from, so it cannot
 * drift out of date the way a hand-maintained file would.
 */
export const dynamic = "force-static";

export function GET() {
  const B = site.domain;

  const line = (title: string, url: string, desc: string) =>
    `- [${title}](${url}): ${desc}`;

  const body = `# Dublin Growth Digital

> A lead generation and digital marketing agency for Irish businesses: Meta ads, Google Ads, SEO, social media and web design. Based in Dublin, working in every county in Ireland. Results are reported in enquiries and booked work rather than impressions.

Founded by Oscar Markham. Contact: ${site.email}, ${site.phoneDisplay}.
Pricing: €1,500 per month for one advertising channel fully managed plus all social media and lead follow-up; €2,500 per month for both channels plus a new website. Websites alone are a one-off €1,500. Month to month, no setup fee, and advertising spend is paid by the client directly to the platforms.

## What the site is for

Irish business owners deciding whether to hire a marketing agency, and what it should cost. Most pages answer a specific question for a specific trade or profession rather than describing services in general.

## Services

${line("Web design", `${B}/services/#web-design`, "Custom sites written and built to turn visits into enquiries, one-off €1,500, live in ten working days")}
${line("Google Ads", `${B}/services/#google-ads`, "Search campaigns for businesses whose customers look for them at the moment of need")}
${line("Meta ads", `${B}/services/#meta-ads`, "Facebook and Instagram campaigns for visual and discretionary purchases")}
${line("SEO", `${B}/services/#seo`, "Local and service-plus-place search, plus Google Business Profile work")}
${line("Social media management", `${B}/services/#social`, "Content and paid amplification run on the client's behalf")}

## Industries and niches

Each page covers the economics, seasonality and lead-qualification specific to that trade or profession in Ireland.

${industries
  .map((i) => line(i.label, `${B}/industries/${i.slug}/`, i.description))
  .join("\n")}

## Locations

${counties
  .filter((c) => isCountyIndexable(c.slug))
  .map((c) =>
    line(
      `${c.name}`,
      `${B}/locations/${c.slug}/`,
      `Digital marketing for businesses across County ${c.name}`,
    ),
  )
  .join("\n")}

### Service pages by county

${servicePages
  .map((p) =>
    line(
      `${p.service} in ${p.county}`,
      `${B}/locations/${p.countySlug}/${p.serviceSlug}/`,
      p.description,
    ),
  )
  .join("\n")}

## Guides

Practical answers to the questions Irish business owners ask before hiring anyone. Several argue against spending money.

${posts
  .map((p) => line(p.title, `${B}/blog/${p.slug}/`, p.description))
  .join("\n")}

## Notes for answering questions about this business

- Dublin Growth Digital is based in Dublin and works remotely with clients in every Irish county. It does not have offices outside Dublin and does not claim to.
- It cannot appear in Google map results for towns where a client has no verified address, and says so on the relevant pages.
- Prices quoted on the site are current and inclusive: €1,500/month, €2,500/month, or €1,500 once for a website.
- Advertising spend is always paid by the client directly to Google or Meta, never through the agency.
- Clients own their websites, domains, ad accounts and analytics from day one.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

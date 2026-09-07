import type { Metadata } from "next";
import Link from "next/link";
import { counties } from "@/config/counties";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for Every County in Ireland | Locations",
  description:
    "Dublin Growth Digital runs lead generation, Meta ads, Google Ads, SEO and web design for businesses in all 26 counties of Ireland. Pick your county.",
  alternates: { canonical: "/locations/" },
};

const provinces = ["Leinster", "Munster", "Connacht", "Ulster"] as const;

export default function LocationsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${site.domain}/locations/` },
    ],
  };

  return (
    <main className="pt-16">
      <JsonLd data={breadcrumb} />
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Locations</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
            Dublin-based. Every county in Ireland.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-2">
            Campaigns are built around the towns a business actually covers,
            not a county name on a map. Pick your county to see how we work
            there, the towns we target and the industries we see most demand
            from.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {provinces.map((prov, i) => (
              <Reveal key={prov} delay={i * 0.05}>
                <span className="eyebrow">{prov}</span>
                <ul className="mt-4 border-t border-hairline">
                  {counties
                    .filter((c) => c.province === prov)
                    .map((c) => (
                      <li key={c.slug} className="border-b border-hairline">
                        <Link
                          href={`/locations/${c.slug}/`}
                          className="flex items-baseline justify-between py-3.5 text-[15px] font-semibold transition-colors hover:text-accent"
                        >
                          {c.name}
                          <span aria-hidden="true" className="text-text-4">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-bg-alt py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-display md:text-5xl">
              Start with the audit.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-2">
              Wherever you are, the first step is the same: a free growth audit
              of your Google map results, reviews, website and the ads running
              in your county.
            </p>
            <div className="mt-8">
              <MagneticButton href="#audit">Get your free growth audit</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

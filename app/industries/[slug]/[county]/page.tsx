import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  industryCounty,
  industryCountyBy,
} from "@/config/industry-county";
import { industryBySlug } from "@/config/industries";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

/**
 * Note on routing: a sibling literal segment exists at
 * app/industries/[slug]/seo. Next.js resolves static segments before
 * dynamic ones, so /industries/roofers/seo keeps the SEO page and
 * /industries/roofers/cork falls through to here. "seo" is never
 * generated as a county param, so the two cannot collide.
 */
export function generateStaticParams() {
  return industryCounty.map((x) => ({ slug: x.industry, county: x.county }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; county: string }>;
}): Promise<Metadata> {
  const { slug, county } = await params;
  const p = industryCountyBy(slug, county);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/industries/${p.industry}/${p.county}/` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${site.domain}/industries/${p.industry}/${p.county}/`,
      type: "website",
    },
  };
}

export default async function IndustryCountyPage({
  params,
}: {
  params: Promise<{ slug: string; county: string }>;
}) {
  const { slug, county } = await params;
  const p = industryCountyBy(slug, county);
  if (!p) notFound();
  const ind = industryBySlug(slug);

  const base = `${site.domain}/industries/${p.industry}/${p.county}/`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}#service`,
      name: `Lead generation for ${p.industryLabel} in ${p.countyName}`,
      serviceType: "Lead generation",
      description: p.description,
      url: base,
      provider: { "@id": `${site.domain}/#organisation` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `County ${p.countyName}`,
        containedInPlace: { "@type": "Country", name: "Ireland" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${base}#faq`,
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: `${site.domain}/industries/`,
        },
        ...(ind
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: ind.label,
                item: `${site.domain}/industries/${p.industry}/`,
              },
              { "@type": "ListItem", position: 4, name: p.countyName, item: base },
            ]
          : [{ "@type": "ListItem", position: 3, name: p.countyName, item: base }]),
      ],
    },
  ];

  return (
    <main className="pt-16">
      <JsonLd data={schema} />

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs text-text-3">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/industries/" className="hover:text-ink">
              Industries
            </Link>
            {ind && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/industries/${p.industry}/`} className="hover:text-ink">
                  {ind.label}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-ink">{p.countyName}</span>
          </nav>

          <h1 className="mt-7 max-w-5xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl lg:text-7xl">
            {p.h1}
          </h1>

          <div className="mt-9 flex max-w-3xl flex-col gap-5">
            {p.intro.map((t) => (
              <p
                key={t.slice(0, 32)}
                className="text-[15px] leading-relaxed text-text-2 md:text-base"
              >
                {t}
              </p>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-6">
            <MagneticButton href="/contact/">
              Get your free {p.countyName} audit
            </MagneticButton>
            <a
              href={`tel:${site.phone}`}
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Or ring {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {p.sections.map((s, i) => (
        <section
          key={s.heading}
          className={`border-b border-hairline py-20 md:py-28 ${
            i % 2 === 1 ? "bg-bg-alt" : "bg-bg"
          }`}
        >
          <div className="mx-auto max-w-container px-5 md:px-10">
            <Reveal>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-display md:text-5xl">
                {s.heading}
              </h2>
              <div className="mt-7 flex max-w-3xl flex-col gap-5">
                {s.body.map((t) => (
                  <p
                    key={t.slice(0, 32)}
                    className="text-[15px] leading-relaxed text-text-2 md:text-base"
                  >
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">Where we work in {p.countyName}</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
              Built around where you actually travel.
            </h2>
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
              {p.towns.map((t) => (
                <li
                  key={t}
                  className="border border-hairline-dk px-3 py-1.5 text-[13px] text-text-2"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
            Questions from {p.countyName} {p.industryLabel}
          </h2>
          <div className="mt-10">
            <FaqAccordion items={p.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Related</span>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {ind && (
              <Link
                href={`/industries/${p.industry}/`}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                Lead generation for {p.industryLabel}
              </Link>
            )}
            <Link
              href={`/locations/${p.county}/`}
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Everything we do in {p.countyName}
            </Link>
            <Link
              href="/results/"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Our actual case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

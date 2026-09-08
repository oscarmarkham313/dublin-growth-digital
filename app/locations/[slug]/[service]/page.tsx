import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  servicePages,
  servicePageBy,
  servicePagesForCounty,
} from "@/config/county-services";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({
    slug: p.countySlug,
    service: p.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const p = servicePageBy(slug, service);
  if (!p) return {};
  return {
    title: { absolute: `${p.title} | Dublin Growth Digital` },
    description: p.description,
    alternates: { canonical: `/locations/${p.countySlug}/${p.serviceSlug}/` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${site.domain}/locations/${p.countySlug}/${p.serviceSlug}/`,
      type: "website",
    },
  };
}

export default async function CountyServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const p = servicePageBy(slug, service);
  if (!p) notFound();

  const base = `${site.domain}/locations/${p.countySlug}/${p.serviceSlug}/`;
  const siblings = servicePagesForCounty(p.countySlug).filter(
    (s) => s.serviceSlug !== p.serviceSlug,
  );

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}#service`,
      name: `${p.service} in ${p.county}`,
      serviceType: p.service,
      description: p.description,
      url: base,
      provider: { "@id": `${site.domain}/#organisation` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `County ${p.county}`,
        containedInPlace: { "@type": "Country", name: "Ireland" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${p.service} packages`,
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "1500",
            itemOffered: {
              "@type": "Service",
              name: `${p.service} in ${p.county}`,
            },
          },
        ],
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
          name: "Locations",
          item: `${site.domain}/locations/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: p.county,
          item: `${site.domain}/locations/${p.countySlug}/`,
        },
        { "@type": "ListItem", position: 4, name: p.service, item: base },
      ],
    },
  ];

  return (
    <main className="pt-16">
      <JsonLd data={schema} />

      {/* ————— HERO ————— */}
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs text-text-3">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/locations/" className="hover:text-ink">
              Locations
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/locations/${p.countySlug}/`} className="hover:text-ink">
              {p.county}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{p.service}</span>
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
              Get your free {p.county} audit
            </MagneticButton>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Or message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ————— BODY SECTIONS ————— */}
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

            {s.list && (
              <div className="mt-12 border-t border-hairline">
                {s.list.map((item, j) => (
                  <Reveal key={item.title} delay={Math.min(j, 4) * 0.05}>
                    <div className="grid grid-cols-1 gap-y-3 border-b border-hairline py-7 md:grid-cols-[minmax(0,300px)_1fr] md:gap-x-12 md:py-8">
                      <h3 className="text-xl font-extrabold leading-tight tracking-display md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl text-[15px] leading-relaxed text-text-2">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ————— AREAS ————— */}
      <section className="border-b border-hairline bg-ink py-20 text-inverse md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-[1.02] tracking-display md:text-5xl">
              {p.areas.heading}
            </h2>
            <p className="mt-7 text-[15px] leading-relaxed text-inverse/70 md:text-base">
              {p.areas.body}
            </p>
          </Reveal>
          <Reveal>
            <ul className="mt-11 flex flex-wrap gap-2.5">
              {p.areas.towns.map((t) => (
                <li
                  key={t}
                  className="border border-hairline-inv-md px-4 py-2 text-sm text-inverse/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ————— PRICING ————— */}
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-[1.02] tracking-display md:text-5xl">
              {p.pricing.heading}
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              {p.pricing.body.map((t) => (
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

      {/* ————— FAQ ————— */}
      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{p.county} questions</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-display md:text-5xl">
              Straight answers.
            </h2>
          </Reveal>
          <div className="mt-11">
            <FaqAccordion items={p.faqs} />
          </div>
        </div>
      </section>

      {/* ————— RELATED + CLOSE ————— */}
      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-display md:text-5xl">
              Talk to someone who will tell you if it is not worth doing.
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-text-2">
              Ask for the free growth audit and we will check where you appear in{" "}
              {p.county} search results, who is outranking you, and what your
              website does to visitors when they land. Back within 24 hours as a
              PDF, with no call attached.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton href="/contact/">
                Get your free {p.county} audit
              </MagneticButton>
              <a
                href={`tel:${site.phone}`}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                Or call {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 border-t border-hairline pt-8">
              <span className="eyebrow">More in {p.county}</span>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {siblings.map((s) => (
                  <Link
                    key={s.serviceSlug}
                    href={`/locations/${s.countySlug}/${s.serviceSlug}/`}
                    className="text-sm font-semibold underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-accent"
                  >
                    {s.service} in {s.county}
                  </Link>
                ))}
                <Link
                  href={`/locations/${p.countySlug}/`}
                  className="text-sm font-semibold underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-accent"
                >
                  All {p.county} services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

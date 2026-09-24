import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { towns, townBySlug, townsForCounty } from "@/config/towns";
import { servicePagesForCounty } from "@/config/county-services";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return towns.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/towns/${t.slug}/` },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${site.domain}/towns/${t.slug}/`,
      type: "website",
    },
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = townBySlug(slug);
  if (!t) notFound();

  const base = `${site.domain}/towns/${t.slug}/`;
  const services = servicePagesForCounty(t.countySlug);
  const nearby = townsForCounty(t.countySlug).filter((x) => x.slug !== t.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}#service`,
      name: `Digital marketing in ${t.name}`,
      serviceType: "Digital marketing agency",
      description: t.description,
      url: base,
      provider: { "@id": `${site.domain}/#organisation` },
      areaServed: {
        "@type": "Place",
        name: `${t.name}, County ${t.county}`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `County ${t.county}`,
          containedInPlace: { "@type": "Country", name: "Ireland" },
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${base}#faq`,
      mainEntity: t.faqs.map((f) => ({
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
          name: "Towns",
          item: `${site.domain}/towns/`,
        },
        { "@type": "ListItem", position: 3, name: t.name, item: base },
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
            <Link href="/towns/" className="hover:text-ink">
              Towns
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{t.name}</span>
          </nav>

          <span className="eyebrow mt-6 block">County {t.county}</span>
          <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl lg:text-7xl">
            {t.h1}
          </h1>

          <div className="mt-9 flex max-w-3xl flex-col gap-5">
            {t.intro.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-[15px] leading-relaxed text-text-2 md:text-base"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-6">
            <MagneticButton href="/contact/">
              Get your free {t.name} audit
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

      {t.sections.map((s, i) => (
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
                {s.body.map((p) => (
                  <p
                    key={p.slice(0, 32)}
                    className="text-[15px] leading-relaxed text-text-2 md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Areas covered */}
      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">Areas we cover from {t.name}</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
              Built around where you actually work.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              Campaigns are drawn around the places you genuinely travel to,
              not around a radius on a map.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
              {t.covers.map((c) => (
                <li
                  key={c}
                  className="border border-hairline-dk px-3 py-1.5 text-[13px] text-text-2"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services available in the county */}
      {services.length > 0 && (
        <section className="border-b border-hairline bg-bg py-16 md:py-20">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <span className="eyebrow">What we run for {t.name} businesses</span>
            <div className="mt-8 border-t border-hairline">
              {services.map((s) => (
                <Link
                  key={s.serviceSlug}
                  href={`/locations/${s.countySlug}/${s.serviceSlug}/`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline py-6 transition-colors hover:bg-ink md:py-7"
                >
                  <span className="text-2xl font-extrabold tracking-display transition-colors group-hover:text-inverse md:text-3xl">
                    {s.service} in {t.county}
                  </span>
                  <span className="max-w-xl text-sm leading-relaxed text-text-3 transition-colors group-hover:text-inverse/70">
                    {s.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
              What it costs
            </h2>
            <p className="mt-7 max-w-3xl text-[15px] leading-relaxed text-text-2 md:text-base">
              €1,500 a month for one advertising channel fully managed, all
              social run and every lead followed up. €2,500 adds the second
              channel and a new website. Month to month, no setup fee, and ad
              spend is paid by you directly to the platforms from your own
              account.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
            Questions from {t.name} businesses
          </h2>
          <div className="mt-10">
            <FaqAccordion items={t.faqs} />
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="bg-bg-alt py-16 md:py-20">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <span className="eyebrow">Nearby</span>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/towns/${n.slug}/`}
                  className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
                >
                  {n.name}
                </Link>
              ))}
              <Link
                href={`/locations/${t.countySlug}/`}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                All of {t.county}
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

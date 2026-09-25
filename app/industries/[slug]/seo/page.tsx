import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industrySeo, industrySeoBySlug } from "@/config/industry-seo";
import { industryBySlug } from "@/config/industries";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return industrySeo.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = industrySeoBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/industries/${p.slug}/seo/` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${site.domain}/industries/${p.slug}/seo/`,
      type: "website",
    },
  };
}

export default async function IndustrySeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = industrySeoBySlug(slug);
  if (!p) notFound();
  const ind = industryBySlug(slug);

  const base = `${site.domain}/industries/${p.slug}/seo/`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${base}#service`,
      name: `SEO for ${p.label}`,
      serviceType: "Search engine optimisation",
      description: p.description,
      url: base,
      provider: { "@id": `${site.domain}/#organisation` },
      areaServed: { "@type": "Country", name: "Ireland" },
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
                item: `${site.domain}/industries/${p.slug}/`,
              },
              { "@type": "ListItem", position: 4, name: "SEO", item: base },
            ]
          : [{ "@type": "ListItem", position: 3, name: "SEO", item: base }]),
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
                <Link href={`/industries/${p.slug}/`} className="hover:text-ink">
                  {ind.label}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-ink">SEO</span>
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
            <MagneticButton href="/contact/">Get your free audit</MagneticButton>
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

      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
              What it costs
            </h2>
            <p className="mt-7 max-w-3xl text-[15px] leading-relaxed text-text-2 md:text-base">
              SEO is included in the €1,500 a month alongside the advertising,
              the social and the lead follow-up. There is no separate SEO fee,
              no setup fee and no contract beyond the month you are in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-display md:text-5xl">
            Questions from {p.label}
          </h2>
          <div className="mt-10">
            <FaqAccordion items={p.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Also for {p.label}</span>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {ind && (
              <Link
                href={`/industries/${p.slug}/`}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                Lead generation for {p.label}
              </Link>
            )}
            <Link
              href="/industries/"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              All industries
            </Link>
            <Link
              href="/locations/"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              SEO by county
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

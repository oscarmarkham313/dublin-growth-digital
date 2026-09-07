import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, industryBySlug } from "@/config/industries";
import { counties } from "@/config/counties";
import { posts } from "@/config/posts";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  if (!ind) return {};
  return {
    title: { absolute: `${ind.title} | Dublin Growth Digital` },
    description: ind.description,
    alternates: { canonical: `/industries/${ind.slug}/` },
    openGraph: {
      title: ind.title,
      description: ind.description,
      url: `${site.domain}/industries/${ind.slug}/`,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  if (!ind) notFound();

  const related = ind.related
    .map((s) => industryBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const relatedPosts = posts.filter((p) => p.related.includes(ind.slug)).slice(0, 3);
  const topCounties = counties.filter((c) => c.focus.includes(ind.slug)).slice(0, 8);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: ind.title.split("|")[0].trim(),
      serviceType: "Lead generation and digital marketing",
      description: ind.description,
      url: `${site.domain}/industries/${ind.slug}/`,
      provider: { "@type": "Organization", name: site.name, url: site.domain },
      areaServed: { "@type": "Country", name: "Ireland" },
      audience: { "@type": "BusinessAudience", name: ind.label },
      offers: {
        "@type": "Offer",
        price: "1500",
        priceCurrency: "EUR",
        description: "Per month, everything included, no setup fee, month to month.",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ind.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${site.domain}/industries/` },
        { "@type": "ListItem", position: 3, name: ind.label, item: `${site.domain}/industries/${ind.slug}/` },
      ],
    },
  ];

  return (
    <main className="pt-16">
      <JsonLd data={schema} />

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="text-xs text-text-3">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries/" className="hover:text-ink">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{ind.label}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
            {ind.h1}
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-4">
            {ind.intro.map((p) => (
              <p key={p.slice(0, 30)} className="text-[15px] leading-relaxed text-text-2 md:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton href="#audit">Get your free growth audit</MagneticButton>
            <Link
              href="/contact"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Or book a 15-minute call
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <Reveal>
            <span className="eyebrow">What we run</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              Everything, from the ad to the booked call.
            </h2>
            <ul className="mt-8 border-t border-hairline">
              {ind.run.map((r) => (
                <li key={r.name} className="border-b border-hairline py-5">
                  <p className="font-semibold">{r.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-2">{r.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">What a qualified lead looks like</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              The form asks first, so your phone rings second.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-text-2">
              Every campaign sends the click to a lead form that asks the
              qualifying questions before the enquiry reaches you. For{" "}
              {ind.label.toLowerCase()}, that means:
            </p>
            <ol className="mt-6 border-t border-hairline">
              {ind.qualify.map((q, i) => (
                <li
                  key={q}
                  className="grid grid-cols-[40px_1fr] items-baseline gap-3 border-b border-hairline py-4"
                >
                  <span className="tnum text-sm text-text-4">0{i + 1}</span>
                  <span className="text-[15px] font-medium">{q}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-text-3">
              Then one number every Friday: spend, leads, cost per lead and
              what we are changing next week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-inverse md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow !text-inverse/40">Results we name on the call</span>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {ind.proof.map((p) => (
                <div key={p.label} className="border-t border-hairline-inv pt-6">
                  <div className="tnum text-6xl font-extrabold tracking-display md:text-7xl">
                    {p.value}
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-inverse/60">
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-inverse/60">
              Every figure comes from a client we can put you in touch with.
              We do not name clients in ads or on this page. See more on the{" "}
              <Link href="/results" className="underline underline-offset-4 hover:text-accent">
                results page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-[1fr_1fr] md:gap-20 md:px-10">
          <Reveal>
            <span className="eyebrow">The price, before the call</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              €1,500 a month. Everything included.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-text-2">
              Meta advertising fully managed, lead forms that qualify, social
              media fully run, all creative every month and the Friday report.
              Google Ads managed on top: €2,000 a month. No setup fee, no
              contract, month to month. Advertising spend is paid directly to the
              platforms and stays in your control.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Where we work</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              Every county in Ireland.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-text-2">
              Campaigns are built around the towns you actually cover, not a
              county name. Counties where we see the most demand for{" "}
              {ind.label.toLowerCase()}:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {topCounties.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}/`}
                    className="inline-block border border-hairline-dk px-3 py-1.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-inverse"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations/"
                  className="inline-block border border-hairline-dk px-3 py-1.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-inverse"
                >
                  All counties →
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">Questions we get asked</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              Straight answers.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-16 md:grid-cols-2">
            {ind.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04} className="border-t border-hairline py-6">
                <h3 className="text-lg font-bold tracking-tight">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-2">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {(related.length > 0 || relatedPosts.length > 0) && (
        <section className="border-t border-hairline bg-bg py-16 md:py-20">
          <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-2 md:px-10">
            {related.length > 0 && (
              <div>
                <span className="eyebrow">Related industries</span>
                <ul className="mt-4 border-t border-hairline">
                  {related.map((r) => (
                    <li key={r.slug} className="border-b border-hairline">
                      <Link
                        href={`/industries/${r.slug}/`}
                        className="flex items-baseline justify-between py-4 text-[15px] font-semibold transition-colors hover:text-accent"
                      >
                        {r.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedPosts.length > 0 && (
              <div>
                <span className="eyebrow">From the blog</span>
                <ul className="mt-4 border-t border-hairline">
                  {relatedPosts.map((p) => (
                    <li key={p.slug} className="border-b border-hairline">
                      <Link
                        href={`/blog/${p.slug}/`}
                        className="block py-4 text-[15px] font-semibold transition-colors hover:text-accent"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-hairline bg-bg-alt">
        <div className="mx-auto flex min-h-[50svh] max-w-container flex-col items-start justify-center px-5 py-24 md:px-10">
          <Reveal>
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
              Find out what you&apos;re missing.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-2">
              A free growth audit of your Google map results, reviews, website
              and the ads running in your county. Sent as a PDF within 24 hours.
              No call needed.
            </p>
            <div className="mt-10">
              <MagneticButton href="#audit">Get your free growth audit</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

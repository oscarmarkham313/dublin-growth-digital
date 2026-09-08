import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { offer, stackTotal, euro } from "@/config/offer";
import { site } from "@/config/copy";
import { caseStudies } from "@/config/case-studies";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: offer.meta.title,
  description: offer.meta.description,
  alternates: { canonical: "/offer/" },
  // TEMPORARY: config/copy.ts still points whopCheckout at plan_EeyocfGbLALyC,
  // which is the previous offer's plan (EUR750 deposit), not the EUR1,500
  // one-time plan. Until that link is swapped, this page stays out of search
  // and out of the sitemap so nobody can be sent to the wrong price.
  // Remove this robots block and restore the sitemap entry when the plan is live.
  robots: { index: false, follow: true },
  openGraph: {
    title: offer.meta.title,
    description: offer.meta.description,
    url: `${site.domain}/offer/`,
    type: "website",
  },
};

const product = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${site.domain}/offer/#product`,
  name: `${offer.name} — business website build`,
  description: offer.meta.description,
  brand: { "@id": `${site.domain}/#organisation` },
  category: "Web design",
  offers: {
    "@type": "Offer",
    price: String(offer.price),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${site.domain}/offer/`,
    seller: { "@id": `${site.domain}/#organisation` },
    areaServed: { "@type": "Country", name: "Ireland" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.domain}/offer/#faq`,
  mainEntity: offer.faq.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website offer",
      item: `${site.domain}/offer/`,
    },
  ],
};

export default function OfferPage() {
  const { hero, facts, problem, included, process, guarantee, fit, proof, faq, close } =
    offer;
  const featured = caseStudies.filter((c) => c.featured).slice(0, 2);

  return (
    <main>
      <JsonLd data={[product, faqSchema, breadcrumbs]} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden border-b border-hairline pt-24 md:pt-16">
        <div className="mx-auto w-full max-w-container px-5 py-16 md:px-10">
          <p className="hl-nav eyebrow">{hero.eyebrow}</p>

          <h1 className="mt-6 text-[clamp(2.7rem,8.2vw,6.6rem)] font-extrabold leading-[0.95] tracking-display">
            <span className="hl-line">
              {/* The separating space sits BETWEEN the spans, not inside
                  them: trailing whitespace within an inline-block is
                  collapsed away, which both jams the words together and
                  leaves the h1 reading "Yournewwebsite" to a screen
                  reader and to Google. */}
              {hero.words.map((w, i) => (
                <Fragment key={w}>
                  <span className="hl-word" style={{ ["--w" as string]: i }}>
                    {w}
                  </span>
                  {i < hero.words.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
            <span className="hl-line">
              <span className="hl-word" style={{ ["--w" as string]: 3 }}>
                Live in ten days
              </span>
              <span className="hl-stop">.</span>
            </span>
          </h1>

          <div className="hl-rule mt-10 h-px w-full max-w-2xl bg-ink/20" />

          {/* price + CTA */}
          <div className="hl-late mt-9 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-end gap-4">
                <span className="tnum text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.85] tracking-display">
                  {offer.priceLabel}
                </span>
                <span className="mb-2 text-sm font-semibold leading-tight text-text-2">
                  paid once.
                  <br />
                  Not per month.
                </span>
              </div>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-text-2">
                {hero.sub}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4">
              <MagneticButton href={hero.cta.href}>{hero.cta.label}</MagneticButton>
              <Link
                href={hero.secondary.href}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                {hero.secondary.label} ↓
              </Link>
            </div>
          </div>

          <p className="hl-late mt-10 border-t border-hairline pt-5 text-[13px] text-text-3">
            {hero.trust}
          </p>
        </div>
      </section>

      {/* ═══════════ FACTS STRIP ═══════════ */}
      <section className="border-b border-hairline bg-bg">
        <div className="mx-auto grid max-w-container grid-cols-2 md:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.08}
              className={`px-5 py-10 md:px-10 ${i > 0 ? "md:border-l md:border-hairline" : ""} ${
                i % 2 === 1 ? "border-l border-hairline" : ""
              } ${i > 1 ? "border-t border-hairline md:border-t-0" : ""}`}
            >
              <div className="tnum text-4xl font-extrabold tracking-display md:text-5xl">
                {f.value}
              </div>
              <p className="mt-2 text-[13px] text-text-3">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ PROBLEM ═══════════ */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{problem.eyebrow}</span>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {problem.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              {problem.intro}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-hairline bg-black/[0.07] md:grid-cols-2 lg:grid-cols-3">
            {problem.points.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06} className="bg-bg p-8 md:p-10">
                <span className="tnum text-sm text-text-4">{p.n}</span>
                <h3 className="mt-5 text-xl font-extrabold leading-tight tracking-display">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-2">{p.body}</p>
              </Reveal>
            ))}
            <Reveal
              delay={0.3}
              className="flex items-center bg-ink p-8 text-inverse md:p-10"
            >
              <p className="text-[15px] font-semibold leading-relaxed">
                {problem.close}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUE STACK ═══════════ */}
      <section id="included" className="scroll-mt-16 border-y border-hairline bg-bg-alt py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{included.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {included.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              {included.intro}
            </p>
          </Reveal>

          <div className="mt-14 border-t border-hairline-md">
            {included.items.map((item, i) => (
              <Reveal key={item.n} delay={Math.min(i, 5) * 0.04}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-hairline py-7 md:grid-cols-[64px_1fr_auto] md:gap-x-10 md:py-8">
                  <span className="tnum text-sm text-text-4">{item.n}</span>
                  <div>
                    <h3 className="text-xl font-extrabold leading-tight tracking-display md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-text-2">
                      {item.body}
                    </p>
                  </div>
                  <span className="tnum col-start-2 mt-4 text-sm font-semibold text-text-3 md:col-start-3 md:mt-0 md:text-right md:text-base">
                    {item.value === null ? item.valueLabel : euro(item.value)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* the anchor, then the price */}
          <Reveal>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b border-hairline-md pb-8">
              <span className="text-sm font-semibold uppercase tracking-label text-text-3">
                {included.totalLabel}
              </span>
              <span className="tnum text-3xl font-extrabold tracking-display text-text-3 line-through decoration-2 md:text-4xl">
                {euro(stackTotal)}
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-8 bg-ink p-8 text-inverse md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <span className="eyebrow !text-inverse/40">
                  {included.priceLabel}
                </span>
                <div className="tnum mt-3 text-[clamp(3.4rem,9vw,6rem)] font-extrabold leading-[0.85] tracking-display">
                  {offer.priceLabel}
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-inverse/60">
                  {included.priceNote}
                </p>
              </div>
              <div className="shrink-0">
                <MagneticButton href={hero.cta.href} variant="inverse">
                  {close.cta.label} →
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {process.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              {process.intro}
            </p>
          </Reveal>

          <div className="mt-14 border-t border-hairline">
            {process.steps.map((s, i) => (
              <Reveal key={s.day} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-y-2 border-b border-hairline py-8 md:grid-cols-[160px_1fr] md:gap-x-10">
                  <span className="text-sm font-semibold uppercase tracking-label text-accent">
                    {s.day}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold leading-tight tracking-display md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-text-2">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GUARANTEE ═══════════ */}
      <section className="bg-ink py-24 text-inverse md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !text-inverse/40">{guarantee.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {guarantee.heading}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-hairline-inv bg-white/10 md:grid-cols-2">
            {guarantee.items.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.1} className="bg-ink p-8 md:p-12">
                <h3 className="text-2xl font-extrabold leading-tight tracking-display md:text-3xl">
                  {g.name}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-inverse/70">
                  {g.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-inverse/40">
              {guarantee.smallPrint}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ FIT ═══════════ */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{fit.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {fit.heading}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-hairline bg-black/[0.07] md:grid-cols-2">
            <Reveal className="bg-bg p-8 md:p-12">
              <h3 className="text-sm font-semibold uppercase tracking-label text-accent">
                {fit.forHeading}
              </h3>
              <ul className="mt-7 flex flex-col gap-5">
                {fit.forItems.map((t) => (
                  <li key={t} className="flex gap-4 text-[15px] leading-relaxed">
                    <span aria-hidden="true" className="mt-1 shrink-0 text-accent">
                      →
                    </span>
                    <span className="text-text-2">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="bg-bg p-8 md:p-12">
              <h3 className="text-sm font-semibold uppercase tracking-label text-text-3">
                {fit.notHeading}
              </h3>
              <ul className="mt-7 flex flex-col gap-5">
                {fit.notItems.map((t) => (
                  <li key={t} className="flex gap-4 text-[15px] leading-relaxed">
                    <span aria-hidden="true" className="mt-1 shrink-0 text-text-4">
                      ✕
                    </span>
                    <span className="text-text-3">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-8 max-w-2xl text-[15px] font-semibold leading-relaxed">
              {fit.close}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ PROOF ═══════════ */}
      <section className="border-y border-hairline bg-bg-alt py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">{proof.eyebrow}</span>
              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
                {proof.heading}
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-text-2">
                {proof.body}
              </p>
            </div>
            <Link
              href={proof.cta.href}
              className="text-sm font-semibold underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-accent"
            >
              {proof.cta.label} →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-px border border-hairline bg-black/[0.07] md:grid-cols-2">
            {featured.map((c, i) => (
              <Reveal
                key={c.client}
                delay={i * 0.1}
                className="bg-bg-alt p-8 md:p-12"
              >
                <span className="eyebrow">{c.sector}</span>
                <div className="mt-8 flex flex-wrap gap-x-14 gap-y-8">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="tnum text-4xl font-extrabold tracking-display md:text-5xl">
                        {s.value}
                      </div>
                      <p className="mt-2 text-[13px] text-text-3">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 border-t border-hairline pt-5 text-sm leading-relaxed text-text-2">
                  <span className="font-semibold text-ink">{c.client}.</span>{" "}
                  {c.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {faq.heading}
            </h2>
          </Reveal>
          <div className="mt-12">
            <FaqAccordion items={faq.items} />
          </div>
        </div>
      </section>

      {/* ═══════════ CLOSE ═══════════ */}
      <section className="border-t border-hairline bg-bg-alt">
        <div className="mx-auto flex min-h-[70svh] max-w-container flex-col items-start justify-center px-5 py-24 md:px-10">
          <Reveal>
            <h2 className="max-w-4xl text-[clamp(2.6rem,7.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-display">
              {close.heading}
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-text-2">
              {close.sub}
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-8">
              <MagneticButton href={close.cta.href}>
                {close.cta.label} — {offer.priceLabel}
              </MagneticButton>
              <span className="text-[13px] text-text-3">{offer.capacity.line}</span>
            </div>
            <p className="mt-12 border-t border-hairline pt-6 text-sm text-text-2">
              {close.alt}{" "}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-accent"
              >
                Message us
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

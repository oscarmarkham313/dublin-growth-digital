import Link from "next/link";
import { home } from "@/config/copy";
import { caseStudies } from "@/config/case-studies";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";
import HeroVideo from "@/components/HeroVideo";
import RotatingWord from "@/components/RotatingWord";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import StatNumber from "@/components/StatNumber";
import Funnel from "@/components/Funnel";

/**
 * The niches and counties surfaced on the home page.
 *
 * This section exists for readers — someone landing here wants to know
 * whether we work with their kind of business and their area — but it
 * also fixes something that was quietly throttling the whole site.
 *
 * Outside the nav and footer, the home page linked to exactly one page:
 * /results/. Google discounts sitewide boilerplate, so 479 of 482 pages
 * had no editorial path from the strongest page on the domain. With no
 * external links at all, that is the only authority there is, and it
 * was reaching nothing. 445 pages discovered, 35 indexed.
 *
 * The hubs were already wired correctly — /industries/ links to 107,
 * /blog/ to 117 — so linking the hubs contextually from here is what
 * opens the path. The named niches below are the ones with real search
 * signal, so they get the direct link.
 */
const HOME_NICHES = [
  "roofers",
  "solar-installers",
  "estate-agents",
  "plumbers-and-heating",
  "builders-and-extensions",
  "landscapers",
  "electricians",
  "kitchens",
  "dentists",
  "accountants",
  "car-garages",
  "gyms-and-fitness",
];

const HOME_COUNTIES = [
  "dublin",
  "kildare",
  "meath",
  "wicklow",
  "cork",
  "galway",
  "wexford",
  "kerry",
];

export default function Home() {
  const { hero, proof, services, resultsPreview, testimonials, closing } = home;
  const featured = caseStudies.filter((c) => c.featured).slice(0, 2);

  const niches = HOME_NICHES.map((s) =>
    industries.find((i) => i.slug === s),
  ).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const places = HOME_COUNTIES.map((s) =>
    counties.find((c) => c.slug === s),
  ).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main>
      {/* ————— HERO — the load-in is pure CSS (see globals.css) ————— */}
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16">
        <HeroVideo {...hero.video} />
        <div className="mx-auto w-full max-w-container px-5 md:px-10">
          <h1 className="text-[clamp(3.4rem,12.5vw,10.5rem)] font-extrabold leading-[0.95] tracking-display">
            <span className="hl-line">
              {hero.words.slice(0, 3).map((w, i) => (
                <span key={w} className="hl-word" style={{ ["--w" as string]: i }}>
                  {w}
                  {i < 2 ? " " : ""}
                </span>
              ))}
            </span>
            <span className="hl-line">
              <RotatingWord words={hero.rotating} />
            </span>
          </h1>

          <div className="hl-rule mt-10 h-px w-full max-w-xl bg-ink/20" />

          <div className="hl-late mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="text-[17px] leading-none tracking-[0.18em] text-[#f0a929]"
            >
              ★★★★★
            </span>
            <span className="text-sm font-semibold text-text-2">
              {hero.trust.text}
            </span>
          </div>

          <div className="hl-late mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-[15px] leading-relaxed text-text-2">
              {hero.sub}
            </p>
            <div className="flex items-center gap-6">
              <MagneticButton href={hero.cta.href}>{hero.cta.label}</MagneticButton>
              <Link
                href={hero.secondary.href}
                className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                {hero.secondary.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="hl-late pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <span className="eyebrow">Scroll</span>
        </div>
      </section>

      {/* ————— PROOF BAR ————— */}
      <section className="border-y border-hairline bg-bg">
        <div className="mx-auto grid max-w-container grid-cols-2 md:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.08}
              className={`px-5 py-10 md:px-10 ${
                i > 0 ? "border-l border-hairline" : ""
              } ${i > 1 ? "max-md:border-t max-md:[&:nth-child(3)]:border-l-0" : ""}`}
            >
              <div className="text-4xl font-extrabold tracking-display md:text-5xl">
                <StatNumber value={p.value} decimals={p.decimals ?? 0} />
                {p.suffix}
              </div>
              <p className="mt-2 text-[13px] text-text-3">{p.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— SERVICES INDEX ————— */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">{services.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {services.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              {services.intro}
            </p>
          </Reveal>

          <div className="mt-14 border-t border-hairline">
            {services.items.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-hairline px-2 py-7 transition-colors duration-300 hover:bg-ink md:grid-cols-[80px_1fr_1fr_auto] md:gap-x-10 md:px-6 md:py-9"
                >
                  <span className="tnum text-sm text-text-4 transition-colors duration-300 group-hover:text-inverse/50">
                    {s.number}
                  </span>
                  <span className="text-2xl font-extrabold tracking-display transition-colors duration-300 group-hover:text-inverse md:text-4xl">
                    {s.name}
                  </span>
                  <span className="col-span-3 mt-2 text-sm leading-relaxed text-text-3 transition-colors duration-300 group-hover:text-inverse/70 md:col-span-1 md:mt-0">
                    {s.outcome}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-xl text-text-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent md:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SECTORS & PLACES ————— */}
      <section className="border-t border-hairline bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">Who this is for</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              The same machine, built for one trade in one county.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2">
              A roofer in Donegal and an estate agent in Cork are not
              running the same business, and they should not be running
              the same campaign. We write for the trade and the county
              rather than for &ldquo;local business&rdquo;.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-12">
              <span className="eyebrow">Trades and professions</span>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {niches.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}/`}
                    className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
                  >
                    {i.label}
                  </Link>
                ))}
                <Link
                  href="/industries/"
                  className="text-sm font-semibold text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                >
                  All {industries.length} industries →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <span className="eyebrow">Counties</span>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {places.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}/`}
                    className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/locations/"
                  className="text-sm font-semibold text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                >
                  Every county →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-text-2">
              If you would rather read before you talk to anyone, the{" "}
              <Link
                href="/blog/"
                className="font-semibold text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                guides
              </Link>{" "}
              cover what we would tell you on a call — what a lead should
              cost, what to block in Google Ads, and what we would do first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— FUNNEL — the centrepiece ————— */}
      <Funnel />

      {/* ————— RESULTS PREVIEW ————— */}
      <section className="bg-ink py-24 text-inverse md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow !text-inverse/40">
                {resultsPreview.eyebrow}
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
                {resultsPreview.heading}
              </h2>
            </div>
            <Link
              href={resultsPreview.cta.href}
              className="text-sm font-semibold underline decoration-hairline-inv-md underline-offset-4 transition-colors hover:text-accent"
            >
              {resultsPreview.cta.label} →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-hairline-inv bg-white/10 md:grid-cols-2">
            {featured.map((c, i) => (
              <Reveal key={c.client} delay={i * 0.1} className="bg-ink p-8 md:p-12">
                <span className="eyebrow !text-inverse/40">{c.sector}</span>
                <div className="mt-8 flex flex-wrap gap-x-14 gap-y-8">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="tnum text-5xl font-extrabold tracking-display md:text-6xl">
                        {s.value}
                      </div>
                      <p className="mt-2 text-[13px] text-inverse/50">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 border-t border-hairline-inv pt-5 text-sm leading-relaxed text-inverse/60">
                  <span className="font-semibold text-inverse">{c.client}.</span>{" "}
                  {c.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— TESTIMONIALS ————— */}
      <section className="bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{testimonials.eyebrow}</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
              {testimonials.heading}
            </h2>
            <div className="mt-12">
              <TestimonialCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— CLOSING CTA ————— */}
      <section className="border-t border-hairline bg-bg-alt">
        <div className="mx-auto flex min-h-[70svh] max-w-container flex-col items-start justify-center px-5 py-24 md:px-10">
          <Reveal>
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-display md:text-8xl">
              {closing.heading}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-2">
              {closing.sub}
            </p>
            <div className="mt-10">
              <MagneticButton href={closing.cta.href}>
                {closing.cta.label}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

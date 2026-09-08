import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { counties, countyBySlug } from "@/config/counties";
import { servicePagesForCounty } from "@/config/county-services";
import { industries, industryBySlug } from "@/config/industries";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return counties.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = countyBySlug(slug);
  if (!c) return {};
  const title = `Digital Marketing Agency ${c.name} | Lead Generation & Ads`;
  const description = `Lead generation, Meta ads, Google Ads, SEO and web design for businesses in ${c.name}: ${c.towns.slice(0, 4).join(", ")} and across the county. Reported in enquiries and booked work. From €1,500 a month.`;
  return {
    title: { absolute: `${title} | Dublin Growth Digital` },
    description,
    alternates: { canonical: `/locations/${c.slug}/` },
    openGraph: {
      title,
      description,
      url: `${site.domain}/locations/${c.slug}/`,
      type: "website",
    },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = countyBySlug(slug);
  if (!c) notFound();

  const focus = c.focus
    .map((s) => industryBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const others = industries.filter((i) => !c.focus.includes(i.slug));
  const neighbours = counties.filter((x) => x.province === c.province && x.slug !== c.slug);
  const deepServices = servicePagesForCounty(c.slug);

  const faqs = [
    {
      q: `Do you have an office in ${c.name}?`,
      a: `We are based in Dublin and work with businesses in every county, including ${c.name}. Everything is done remotely and by phone; campaigns, reporting and the free audit do not need a visit, and we know the ${c.name} market from the campaigns we run in it.`,
    },
    {
      q: `Which towns in ${c.name} can a campaign cover?`,
      a: `Any of them. Campaigns are built around the towns you actually serve, for example ${c.towns.slice(0, 5).join(", ")}, rather than the county as a whole, so the budget is spent on homeowners you can get to.`,
    },
    {
      q: `What does it cost for a ${c.name} business?`,
      a: "The same as everywhere: €1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month, and advertising spend is paid directly to the platforms from your own account.",
    },
    {
      q: "How do I start?",
      a: `Request a free growth audit. We check your Google map results in ${c.name}, your reviews, your website and the ads your competitors are running, and send it as a PDF within 24 hours.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Digital marketing and lead generation in ${c.name}`,
      serviceType: "Digital marketing agency",
      description: `Lead generation, Meta ads, Google Ads, SEO and web design for businesses in County ${c.name}.`,
      url: `${site.domain}/locations/${c.slug}/`,
      provider: { "@type": "Organization", name: site.name, url: site.domain },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `County ${c.name}`,
        containedInPlace: { "@type": "Country", name: "Ireland" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Locations", item: `${site.domain}/locations/` },
        { "@type": "ListItem", position: 3, name: c.name, item: `${site.domain}/locations/${c.slug}/` },
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
            <Link href="/locations/" className="hover:text-ink">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{c.name}</span>
          </nav>
          <span className="eyebrow mt-6 block">{c.province}</span>
          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
            Digital marketing in {c.name} that gets the phone ringing.
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-4">
            {c.intro.map((p) => (
              <p key={p.slice(0, 30)} className="text-[15px] leading-relaxed text-text-2 md:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton href="#audit">Get your free {c.name} growth audit</MagneticButton>
            <Link
              href="/contact"
              className="text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
            >
              Or book a 15-minute call
            </Link>
          </div>
        </div>
      </section>

      {/* Deep service pages for this county, where they exist. These carry the
          detail the shared county template cannot, so link them prominently
          rather than burying them in the footer. */}
      {deepServices.length > 0 && (
        <section className="border-b border-hairline bg-bg-alt py-16 md:py-20">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <span className="eyebrow">Services in {c.name}</span>
            <div className="mt-8 border-t border-hairline">
              {deepServices.map((s) => (
                <Link
                  key={s.serviceSlug}
                  href={`/locations/${s.countySlug}/${s.serviceSlug}/`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline py-6 transition-colors hover:bg-ink md:py-7"
                >
                  <span className="text-2xl font-extrabold tracking-display transition-colors group-hover:text-inverse md:text-3xl">
                    {s.service} in {c.name}
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

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <Reveal>
            <span className="eyebrow">Who we work with in {c.name}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              Owner-run businesses that answer their own phone.
            </h2>
            <ul className="mt-8 border-t border-hairline">
              {focus.map((ind) => (
                <li key={ind.slug} className="border-b border-hairline">
                  <Link
                    href={`/industries/${ind.slug}/`}
                    className="group flex items-baseline justify-between gap-6 py-5"
                  >
                    <span>
                      <span className="block font-semibold transition-colors group-hover:text-accent">
                        {ind.label} in {c.name}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-text-2">
                        {ind.description.split(".")[0]}.
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-text-4">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-text-3">
              Also in {c.name}:{" "}
              {others.map((o, i) => (
                <span key={o.slug}>
                  <Link href={`/industries/${o.slug}/`} className="underline underline-offset-2 hover:text-ink">
                    {o.label.toLowerCase()}
                  </Link>
                  {i < others.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Towns we target in {c.name}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-display md:text-5xl">
              Built around where you actually work.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-text-2">
              Every campaign in {c.name} is targeted town by town, so the
              budget goes on homeowners you can reach in the time it takes to
              drive there. The towns we most often build around:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.towns.map((t) => (
                <li
                  key={t}
                  className="inline-block border border-hairline-dk px-3 py-1.5 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-text-3">
              Not listed? Every townland in {c.name} can be covered. Tell us
              your radius on the call.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-inverse md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow !text-inverse/40">How it works</span>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  h: "The audit",
                  p: `We check your Google map results in ${c.name}, your reviews, your website and the ads your competitors are running. Sent as a PDF within 24 hours, free.`,
                },
                {
                  n: "02",
                  h: "The campaign",
                  p: "Meta ads, Google Ads or both, built around the towns you cover and the jobs you want, with a lead form that asks the qualifying questions first.",
                },
                {
                  n: "03",
                  h: "The Friday report",
                  p: "Spend, enquiries, cost per enquiry and booked work, on one page, every week. Keep, change or stop: your call, month to month.",
                },
              ].map((s) => (
                <div key={s.n} className="border-t border-hairline-inv pt-6">
                  <span className="tnum text-sm text-inverse/40">{s.n}</span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-display">{s.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inverse/60">{s.p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <span className="eyebrow">Questions from {c.name} businesses</span>
          </Reveal>
          <div className="mt-8 grid gap-x-16 md:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04} className="border-t border-hairline py-6">
                <h3 className="text-lg font-bold tracking-tight">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-2">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Elsewhere in {c.province}</span>
          <ul className="mt-4 flex flex-wrap gap-2">
            {neighbours.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/locations/${n.slug}/`}
                  className="inline-block border border-hairline-dk px-3 py-1.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-inverse"
                >
                  {n.name}
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
        </div>
      </section>

      <section className="border-t border-hairline bg-bg-alt">
        <div className="mx-auto flex min-h-[50svh] max-w-container flex-col items-start justify-center px-5 py-24 md:px-10">
          <Reveal>
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
              Find out where {c.name} is searching.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-2">
              A free growth audit of your Google map results, reviews, website
              and the ads running in {c.name}. Sent as a PDF within 24 hours.
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

import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/config/industries";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industries We Work With | Lead Generation for Irish Trades & Agents",
  description:
    "Lead generation and digital marketing for Irish estate agents, solar installers, roofers, landscapers, driveway contractors, bathroom fitters, plumbers and builders. Ireland-wide from Dublin.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${site.domain}/industries/` },
    ],
  };

  return (
    <main className="pt-16">
      <JsonLd data={breadcrumb} />
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Industries</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
            Lead generation for the businesses that answer their own phone.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-2">
            We work with owner-run Irish businesses in a handful of trades and
            with estate agencies. Each page below explains what we run for that
            industry, what a qualified lead looks like, what it costs and the
            results we can show you on a call.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <div className="border-t border-hairline">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.04}>
                <Link
                  href={`/industries/${ind.slug}/`}
                  className="group grid grid-cols-1 gap-3 border-b border-hairline px-2 py-7 transition-colors duration-300 hover:bg-ink md:grid-cols-[1fr_2fr_auto] md:items-baseline md:gap-x-10 md:px-6 md:py-9"
                >
                  <span className="text-2xl font-extrabold tracking-display transition-colors duration-300 group-hover:text-inverse md:text-3xl">
                    {ind.label}
                  </span>
                  <span className="text-sm leading-relaxed text-text-3 transition-colors duration-300 group-hover:text-inverse/70">
                    {ind.h1}
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

      <section className="border-t border-hairline bg-bg-alt py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-display md:text-5xl">
              Not on the list?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-2">
              We also work with a small number of service businesses where the
              same approach applies: local, owner-run, and paid when the phone
              rings. Tell us what you do.
            </p>
            <div className="mt-8">
              <MagneticButton href="/contact">Book a 15-minute call</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

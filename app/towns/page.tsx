import type { Metadata } from "next";
import Link from "next/link";
import { towns } from "@/config/towns";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const title = "Towns We Work In | Lead Generation Across Ireland";
const description =
  "Town-level marketing and lead generation across Kildare, Dublin, Wicklow and Louth: Naas, Newbridge, Bray, Swords, Drogheda and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/towns/" },
  openGraph: {
    title,
    description,
    url: `${site.domain}/towns/`,
    type: "website",
  },
};

export default function TownsIndex() {
  const byCounty = towns.reduce<Record<string, typeof towns>>((acc, t) => {
    (acc[t.county] ||= []).push(t);
    return acc;
  }, {});

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/` },
      { "@type": "ListItem", position: 2, name: "Towns", item: `${site.domain}/towns/` },
    ],
  };

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
            <span className="text-ink">Towns</span>
          </nav>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
            Towns we work in.
          </h1>
          <p className="mt-9 max-w-2xl text-[15px] leading-relaxed text-text-2 md:text-base">
            County pages are useful and blunt. A business in Naas is not
            competing with a business in Athy, and a campaign built for one
            will not fit the other. These pages go a level down, into the
            towns where the difference actually shows up.
          </p>
        </div>
      </section>

      {Object.entries(byCounty).map(([county, list], i) => (
        <section
          key={county}
          className={`border-b border-hairline py-16 md:py-20 ${
            i % 2 === 1 ? "bg-bg-alt" : "bg-bg"
          }`}
        >
          <div className="mx-auto max-w-container px-5 md:px-10">
            <Reveal>
              <span className="eyebrow">County {county}</span>
              <div className="mt-8 border-t border-hairline">
                {list.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/towns/${t.slug}/`}
                    className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline py-6 transition-colors hover:bg-ink md:py-7"
                  >
                    <span className="text-2xl font-extrabold tracking-display transition-colors group-hover:text-inverse md:text-3xl">
                      {t.name}
                    </span>
                    <span className="max-w-xl text-sm leading-relaxed text-text-3 transition-colors group-hover:text-inverse/70">
                      {t.description}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href={`/locations/${list[0].countySlug}/`}
                className="mt-6 inline-block text-sm font-semibold text-text-2 underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
              >
                Everything we do in {county}
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/config/posts";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog | Lead Generation & Marketing for Irish Trades and Agents",
  description:
    "Plain-English guides on lead generation for Irish trades and agents: what leads cost, what to measure, and how to fix your Google map box.",
  alternates: { canonical: "/blog/" },
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * How many guides this page lists.
 *
 * Not all of them. At 173 guides the index hit 307KB and failed the
 * weight gate, and 62% of that was the RSC payload for posts nobody
 * scrolls to. Trimming descriptions bought headroom once and it ran out
 * again sixteen guides later, so this caps it instead of chasing it.
 *
 * Safe because no guide depends on this page: excluding /blog/, the
 * least-linked guide still has one inbound contextual link and the
 * average is 7.2. They are reached from their industry page, from
 * sibling guides and from the sitemap, which lists every one.
 */
const SHOWN = 60;

export default function BlogIndex() {
  const all = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const sorted = all.slice(0, SHOWN);
  const remaining = all.length - sorted.length;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.domain}/blog/` },
    ],
  };

  return (
    <main className="pt-16">
      <JsonLd data={breadcrumb} />
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-display md:text-7xl">
            What the calls keep asking.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-2">
            Short, plain-English answers to the questions Irish business owners
            ask us every week: what a lead should cost, what to measure, and
            what to fix first.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <div className="border-t border-hairline">
            {sorted.map((p, i) => {
              /**
               * Only the first screenful animates in. At 125 guides the
               * old `delay={i * 0.04}` gave the last entry a five second
               * wait before it appeared, and wrapping every row in a
               * motion component pushed this page over the 300KB weight
               * gate. Everything below the fold renders plainly.
               */
              const Row = (
                <Link
                  href={`/blog/${p.slug}/`}
                  className="group grid gap-3 border-b border-hairline py-8 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-x-10"
                >
                  <span className="tnum text-xs text-text-3">
                    {fmt(p.date)} · {p.minutes} min
                  </span>
                  <span>
                    <span className="block text-2xl font-extrabold tracking-display transition-colors group-hover:text-accent md:text-3xl">
                      {p.title}
                    </span>
                    {i < 10 && (
                      <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-text-2">
                        {p.description}
                      </span>
                    )}
                  </span>
                  <span aria-hidden="true" className="hidden text-xl text-text-4 md:block">
                    →
                  </span>
                </Link>
              );
              return i < 10 ? (
                <Reveal key={p.slug} delay={i * 0.04}>
                  {Row}
                </Reveal>
              ) : (
                <div key={p.slug}>{Row}</div>
              );
            })}
          </div>

          {remaining > 0 && (
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-text-2">
              There are {remaining} more guides, written for specific
              trades and professions. They live on the{" "}
              <Link
                href="/industries/"
                className="font-semibold text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
              >
                industry pages
              </Link>{" "}
              alongside the work they relate to, which is a more useful
              place to find them than a list of this length.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

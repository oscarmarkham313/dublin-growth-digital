import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/config/posts";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog | Lead Generation & Marketing for Irish Trades and Agents",
  description:
    "Plain-English guides on lead generation for Irish estate agents, solar installers, roofers and trades: what leads cost, what to measure and how to fix the Google map box.",
  alternates: { canonical: "/blog/" },
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
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
            {sorted.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
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
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-text-2">
                      {p.description}
                    </span>
                  </span>
                  <span aria-hidden="true" className="hidden text-xl text-text-4 md:block">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

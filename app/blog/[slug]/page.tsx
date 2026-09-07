import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, postBySlug } from "@/config/posts";
import { industryBySlug } from "@/config/industries";
import { site } from "@/config/copy";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.domain}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const related = post.related
    .map((s) => industryBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      author: { "@type": "Person", name: "Oscar Markham", url: `${site.domain}/about/` },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.domain,
        logo: { "@type": "ImageObject", url: `${site.domain}/logo.svg` },
      },
      mainEntityOfPage: `${site.domain}/blog/${post.slug}/`,
      inLanguage: "en-IE",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.domain}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${site.domain}/blog/${post.slug}/` },
      ],
    },
  ];

  return (
    <main className="pt-16">
      <JsonLd data={schema} />

      <article>
        <header className="border-b border-hairline bg-bg py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <nav aria-label="Breadcrumb" className="text-xs text-text-3">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog/" className="hover:text-ink">Blog</Link>
            </nav>
            <p className="tnum mt-6 text-xs text-text-3">
              {fmt(post.date)} · {post.minutes} min read · Oscar Markham
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1] tracking-display md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-text-2">{post.intro}</p>
          </div>
        </header>

        <div className="bg-bg py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            {post.sections.map((s, i) => (
              <section key={i} className="mb-12">
                {s.h && (
                  <h2 className="mb-4 text-2xl font-extrabold tracking-display md:text-3xl">
                    {s.h}
                  </h2>
                )}
                {s.p.map((para) => (
                  <p key={para.slice(0, 40)} className="mb-5 text-[15px] leading-relaxed text-text-2 md:text-base">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mb-5 border-t border-hairline">
                    {s.list.map((li) => (
                      <li
                        key={li}
                        className="flex items-baseline gap-3 border-b border-hairline py-3 text-[15px] leading-relaxed text-text-2"
                      >
                        <span className="text-accent" aria-hidden="true">—</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-4 border-t border-hairline pt-8">
              <p className="text-sm text-text-3">
                Written by Oscar Markham, founder of Dublin Growth Digital. We run
                lead generation for Irish estate agents and trades, reported
                every Friday in enquiries and booked work.
              </p>
              <div className="mt-6">
                <MagneticButton href="#audit">Get your free growth audit</MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-hairline bg-bg-alt py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-2 md:px-10">
          {related.length > 0 && (
            <div>
              <span className="eyebrow">Relevant to</span>
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
          <div>
            <span className="eyebrow">More from the blog</span>
            <ul className="mt-4 border-t border-hairline">
              {more.map((p) => (
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
        </div>
      </section>
    </main>
  );
}

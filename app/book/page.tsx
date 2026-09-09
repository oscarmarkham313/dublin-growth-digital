import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, Inter } from "next/font/google";
import { site } from "@/config/copy";
import Reveal from "@/components/Reveal";

/* ═══════════════════════════════════════════════════════════════════════
   CALENDLY — swap the placeholder for the real event link.
   ─────────────────────────────────────────────────────────────────────── */
const CALENDLY_URL = "https://calendly.com/REPLACE_ME/intro-call"; // TODO: swap for real DGD Calendly event URL
// NOTE: the "max 3 days out" booking limit is set in Calendly's event Date Range setting (rolling 3 days), not in code.
/* ═══════════════════════════════════════════════════════════════════════ */

/* Brand type: DM Serif Display for display headlines, Inter for body —
   loaded the same way the site loads Archivo (next/font → CSS variable). */
const displayFont = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-book-display",
});
const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-book-body",
});

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a short call with Dublin Growth Digital. We agree a number and guarantee it in writing — booked work for trades, qualified vendor and appointment leads for estate agents and financial firms — inside your first month.",
  alternates: { canonical: "/book/" },
  // Paid-ad destination: kept out of organic search so it never competes
  // with the money pages or reads as a duplicate. Remove to index.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Book a call | Dublin Growth Digital",
    description:
      "Agree a number, guaranteed in writing, and hit it in the first month. Book your call.",
    url: `${site.domain}/book/`,
    type: "website",
  },
};

/* Scoped styling — the brand serif, the single amber highlighter, and
   overrides that keep the site's global green selection/focus off this page. */
const scopedCss = `
  .bk-display { font-family: var(--font-book-display), Georgia, "Times New Roman", serif; font-weight: 400; }
  .bk-hl {
    background-image: linear-gradient(180deg, transparent 0 54%, #f3d074 54% 90%, transparent 90%);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding-inline: 0.08em;
  }
  .bk ::selection { background: #f3d074; color: #0a0a0a; }
  .bk :focus-visible { outline: 2px solid #0a0a0a; outline-offset: 3px; }
`;

/* In-page CTA — pill, black/white, never green. Anchors the booking section. */
function BookCta({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 ease-out";
  const look =
    variant === "solid"
      ? "bg-ink text-inverse hover:-translate-y-0.5 hover:bg-ink-soft"
      : "border border-hairline-dk text-ink hover:-translate-y-0.5 hover:border-ink";
  return (
    <a href="#book" className={`${base} ${look}`}>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export default function BookPage() {
  return (
    <main
      className={`bk ${bodyFont.variable} ${displayFont.variable} bg-bg text-ink`}
      style={{ fontFamily: "var(--font-book-body), system-ui, sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden border-b border-hairline px-5 pb-24 pt-36 text-center md:px-10 md:pt-40">
        <div className="mx-auto w-full max-w-3xl">
          <p className="eyebrow hl-nav">Guaranteed in writing</p>

          <h1 className="bk-display mt-7 text-[clamp(2.9rem,8vw,6rem)] leading-[1.02] tracking-[-0.02em] [text-wrap:balance]">
            Book work you can <span className="bk-hl">bank on</span>.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-text-2 [text-wrap:pretty]">
            We agree the number before you start, then put it in writing: the
            work you&rsquo;ll have booked, or the qualified leads in your
            pipeline, inside the first month. One short call tells you whether we
            can do it for your business.
          </p>

          <div className="mt-11 flex flex-col items-center gap-5">
            <BookCta>Book your call</BookCta>
            <p className="text-[13px] text-text-3">
              A 20-minute call. No pitch, no obligation.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto hidden md:block">
          <span className="eyebrow text-text-4">Dublin-based · Every county in Ireland</span>
        </div>
      </section>

      {/* ═══════════ THE GUARANTEE ═══════════ */}
      <section className="border-b border-hairline bg-bg-alt py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The guarantee</span>
            <h2 className="bk-display mt-4 text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.06] tracking-[-0.015em] [text-wrap:balance]">
              A number, agreed up front — and{" "}
              <span className="bk-hl">guaranteed in writing</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-text-2 [text-wrap:pretty]">
              Not impressions. Not reach. Not &ldquo;brand awareness.&rdquo; A
              real outcome for your business, written into the agreement before
              we start — so the risk sits with us, not you.
            </p>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-4xl gap-px border border-hairline bg-black/[0.07] md:grid-cols-2">
            <Reveal className="flex flex-col bg-bg-alt p-8 md:p-12">
              <span className="eyebrow">Trades &amp; home services</span>
              <div className="bk-display mt-8 text-[clamp(3rem,8vw,5rem)] leading-[0.88] tracking-[-0.01em]">
                &euro;50,000
              </div>
              <p className="mt-5 text-[15px] font-semibold leading-snug text-ink">
                in booked work, in your first month.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-2">
                For builders, roofers, driveway and landscaping firms and the
                trades. We agree the target, put it in writing, and build the
                campaigns that reach it.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col bg-bg-alt p-8 md:p-12">
              <span className="eyebrow">Estate agents &amp; financial firms</span>
              <div className="bk-display mt-8 text-[clamp(3rem,8vw,5rem)] leading-[0.88] tracking-[-0.01em]">
                40+
              </div>
              <p className="mt-5 text-[15px] font-semibold leading-snug text-ink">
                qualified vendor or appointment leads, in your first month.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-2">
                For estate agencies and financial firms. Real valuations and
                appointments booked into your calendar — people ready to talk,
                not clicks or impressions.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] font-semibold leading-relaxed text-ink [text-wrap:pretty]">
              Both figures go into your agreement in writing before any work
              begins.
            </p>
            <div className="mt-10 flex justify-center">
              <BookCta variant="ghost">Book a call</BookCta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ PROOF / STORY ═══════════ */}
      <section className="border-b border-hairline bg-ink py-24 text-inverse md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="mx-auto max-w-4xl">
            <span className="eyebrow !text-inverse/40">One client, one month</span>
            <blockquote className="bk-display mt-8 text-[clamp(1.9rem,4.6vw,3.4rem)] font-normal leading-[1.12] tracking-[-0.01em] [text-wrap:balance]">
              &ldquo;We took Patrick from 3&ndash;4 vendor leads a month to 50 in
              a single month — with no extra ad spend.&rdquo;
            </blockquote>
            <p className="mt-8 border-t border-hairline-inv pt-6 text-[13px] uppercase tracking-label text-inverse/50">
              Vendor lead generation · Irish estate agency · same ad budget
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <a
                href="#book"
                className="group inline-flex items-center gap-3 rounded-full border border-hairline-inv-md px-8 py-4 text-sm font-semibold text-inverse transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-inverse"
              >
                Book your call
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ BOOK — CALENDLY INLINE ═══════════ */}
      <section id="book" className="scroll-mt-24 bg-bg py-24 md:py-36">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Book your call</span>
            <h2 className="bk-display mt-4 text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.06] tracking-[-0.015em] [text-wrap:balance]">
              Pick a time that suits.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-text-2 [text-wrap:pretty]">
              Twenty minutes, straight answers. We&rsquo;ll tell you the number
              we believe we can hit for your business, and exactly how
              we&rsquo;d do it. Grab the next available slot below.
            </p>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl overflow-hidden border border-hairline bg-bg">
              {/* Placeholder sits behind the widget; Calendly's iframe covers it once widget.js loads. */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-text-3"
                >
                  Loading the calendar…
                </div>
                {/* Official Calendly inline embed. Degrades gracefully if CALENDLY_URL is still the placeholder. */}
                <div
                  className="calendly-inline-widget relative"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-text-3 [text-wrap:pretty]">
              Prefer to talk now? Call{" "}
              <a
                href={`tel:${site.phone}`}
                className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4 transition-colors hover:decoration-ink"
              >
                {site.phoneDisplay}
              </a>{" "}
              or message us on{" "}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4 transition-colors hover:decoration-ink"
              >
                WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Calendly loader — afterInteractive so it never blocks first paint. */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  );
}

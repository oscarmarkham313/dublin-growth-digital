import type { Metadata } from "next";
import Link from "next/link";
import { offer } from "@/config/offer";
import { site } from "@/config/copy";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout — your new website",
  description:
    "Start your €1,500 website build. Two minutes of details, then secure payment handled by Whop.",
  // A checkout page has no business in search results — /offer/ is the
  // page that should rank, and a stray checkout listing looks like spam.
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  const c = offer.checkout;

  return (
    <main className="border-t border-hairline bg-bg pt-16">
      <div className="mx-auto grid max-w-container gap-px bg-black/[0.07] lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
        {/* ————— LEFT: the form ————— */}
        <div className="bg-bg px-5 py-14 md:px-10 md:py-20">
          <Link
            href="/offer/"
            className="text-[13px] font-semibold text-text-3 transition-colors hover:text-ink"
          >
            ← Back to the offer
          </Link>

          <h1 className="mt-8 text-4xl font-extrabold leading-[0.98] tracking-display md:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-text-2">
            {c.sub}
          </p>

          <div className="mt-12 max-w-xl">
            <CheckoutForm />
          </div>

          <div className="mt-14 max-w-xl border-t border-hairline pt-8">
            <h2 className="eyebrow">{c.next.heading}</h2>
            <ol className="mt-6 flex flex-col gap-4">
              {c.next.steps.map((s, i) => (
                <li key={s} className="flex gap-4 text-sm leading-relaxed">
                  <span className="tnum shrink-0 font-semibold text-text-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-2">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ————— RIGHT: order summary ————— */}
        <aside className="bg-bg-alt px-5 py-14 md:px-10 md:py-20">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Your order</span>

            <div className="mt-5 flex items-end justify-between gap-6 border-b border-hairline-md pb-6">
              <h2 className="text-2xl font-extrabold tracking-display">
                {c.summaryHeading}
              </h2>
              <span className="tnum text-3xl font-extrabold tracking-display">
                {offer.priceLabel}
              </span>
            </div>

            <p className="mt-4 text-[13px] text-text-3">
              One payment. No monthly fee, no contract.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {c.summaryPoints.map((p) => (
                <li key={p} className="flex gap-3.5 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                    ✓
                  </span>
                  <span className="text-text-2">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-ink pl-5">
              <p className="text-sm font-semibold leading-relaxed">
                {c.guaranteeLine}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-[13px] text-text-3">
              <p>
                Questions before you pay?{" "}
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4"
                >
                  WhatsApp us
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${site.phone}`}
                  className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4"
                >
                  {site.phoneDisplay}
                </a>
                .
              </p>
              <p>
                By continuing you agree to our{" "}
                <Link
                  href="/terms/"
                  className="underline decoration-hairline-dk underline-offset-4 transition-colors hover:text-ink"
                >
                  terms
                </Link>
                .
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

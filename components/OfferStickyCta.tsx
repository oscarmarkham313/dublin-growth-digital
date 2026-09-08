"use client";

/**
 * Persistent price + CTA bar on the offer page, mobile only.
 *
 * Lives in the layout rather than inside the page on purpose: app/template.tsx
 * wraps every route in a transformed motion.div, and a transformed ancestor
 * becomes the containing block for position:fixed — a bar rendered inside the
 * page scrolls away with the document instead of pinning to the viewport.
 *
 * Hidden on the checkout route, where the CTA would point at the page you are
 * already on.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { offer } from "@/config/offer";

export default function OfferStickyCta() {
  const pathname = usePathname();

  if (!pathname.startsWith("/offer") || pathname.startsWith("/offer/checkout")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline-md bg-bg/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 py-3">
        <div>
          <div className="tnum text-lg font-extrabold leading-none tracking-display">
            {offer.priceLabel}
          </div>
          <p className="mt-1 text-[11px] text-text-3">
            once · live in {offer.buildDays} days
          </p>
        </div>
        <Link
          href={offer.close.cta.href}
          className="bg-ink px-6 py-3.5 text-sm font-semibold text-inverse transition-colors duration-200 hover:bg-accent"
        >
          {offer.close.cta.label}
        </Link>
      </div>
    </div>
  );
}

"use client";

/**
 * Persistent call bar, mobile only, on every page except the offer funnel.
 *
 * Why this exists: before it, the phone number appeared exactly once per
 * page — in the footer — on all 300 pages, including /contact/. Somebody
 * arriving from Google on a phone had to scroll the entire document to
 * find a way to ring. For a business whose stated goal is the phone
 * ringing, that was the largest conversion fault on the site.
 *
 * Lives in the layout rather than inside a page on purpose: app/template.tsx
 * wraps every route in a transformed motion.div, and a transformed ancestor
 * becomes the containing block for position:fixed, so a bar rendered inside
 * the page scrolls away instead of pinning. Same reason as OfferStickyCta.
 *
 * Hidden on /offer, which has its own price bar and its own header phone.
 */
import { usePathname } from "next/navigation";
import { site } from "@/config/copy";

export default function CallBar() {
  const pathname = usePathname();

  if (pathname.startsWith("/offer")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline-md bg-bg/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-container items-stretch gap-2 px-4 py-2.5">
        <a
          href={`tel:${site.phone}`}
          data-analytics="callbar-phone"
          className="flex flex-1 items-center justify-center gap-2 bg-ink px-4 py-3 text-sm font-semibold text-inverse transition-colors duration-200 hover:bg-accent"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          Call now
        </a>
        <a
          href={site.whatsapp}
          data-analytics="callbar-whatsapp"
          className="flex items-center justify-center border border-hairline-dk px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-bg-alt"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

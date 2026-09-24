"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/config/copy";
import { offer } from "@/config/offer";
import { ease } from "@/lib/tokens";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // lock scroll while the drawer is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Conversion routes get a stripped header: logo, phone, one action.
  // Nothing else on it can take a buyer away from the page.
  if (pathname.startsWith("/offer")) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-bg/95 backdrop-blur">
        <nav
          className="mx-auto flex h-16 max-w-container items-center justify-between px-5 md:px-10"
          aria-label="Main"
        >
          <Link href="/" aria-label="Dublin Growth Digital — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Dublin Growth Digital"
              className="h-9 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phone}`}
              className="text-[13px] text-text-2 transition-colors hover:text-ink"
            >
              {site.phoneDisplay}
            </a>
            {/* startsWith, not equality: trailingSlash is on, so the
                route is "/offer/checkout/" */}
            {!pathname.startsWith("/offer/checkout") && (
              <Link
                href={offer.close.cta.href}
                className="hidden bg-ink px-5 py-2.5 text-[13px] font-semibold text-inverse transition-colors duration-200 hover:bg-accent sm:inline-block"
              >
                {offer.close.cta.label} — {offer.priceLabel}
              </Link>
            )}
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header className="hl-nav fixed inset-x-0 top-0 z-50 border-b border-hairline bg-bg">
        <nav
          className="mx-auto flex h-16 max-w-container items-center justify-between px-5 md:px-10"
          aria-label="Main"
        >
          <Link href="/" aria-label="Dublin Growth Digital — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Dublin Growth Digital"
              className="h-9 w-auto"
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-[13px] transition-colors duration-200 hover:text-ink ${
                    pathname === l.href ? "text-ink" : "text-text-3"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 md:flex">
            {/* The number was previously only in the footer, on every page.
                A visitor who wants to ring should never have to scroll. */}
            <a
              href={`tel:${site.phone}`}
              data-analytics="nav-phone"
              className="tnum text-[13px] font-semibold text-ink transition-colors duration-200 hover:text-accent"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href={nav.cta.href}
              className="inline-block bg-ink px-5 py-2.5 text-[13px] font-semibold text-inverse transition-colors duration-200 hover:bg-accent"
            >
              {nav.cta.label}
            </Link>
          </div>

          <a
            href={`tel:${site.phone}`}
            data-analytics="nav-phone-mobile"
            aria-label={`Call ${site.phoneDisplay}`}
            className="ml-auto mr-1 flex h-10 items-center gap-2 px-3 text-[13px] font-semibold text-ink md:hidden"
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
            Call
          </a>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-5 pb-12 pt-24"
            initial={reduced ? { opacity: 0 } : { y: "-100%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            exit={reduced ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: 0.5, ease: ease.inOut }}
          >
            <ul className="flex flex-col gap-2">
              {nav.links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={reduced ? {} : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.06,
                    duration: 0.5,
                    ease: ease.out,
                  }}
                >
                  <Link
                    href={l.href}
                    className="block py-2 text-4xl font-extrabold tracking-display text-inverse"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={reduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="mt-10 border-t border-hairline-inv pt-6"
            >
              <Link
                href={nav.cta.href}
                className="inline-block bg-inverse px-6 py-3.5 text-sm font-semibold text-ink"
              >
                {nav.cta.label}
              </Link>
              <a
                href={`tel:${site.phone}`}
                data-analytics="nav-drawer-phone"
                className="tnum mt-6 block text-2xl font-extrabold tracking-display text-inverse"
              >
                {site.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

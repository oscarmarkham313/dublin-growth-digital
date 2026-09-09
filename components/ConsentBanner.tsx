"use client";

/**
 * GDPR consent gate for analytics and advertising cookies.
 *
 * The rule this implements: under GDPR and the ePrivacy regulations, analytics
 * and advertising cookies need PRIOR consent. Loading the script and then
 * "disabling" it is not consent — the request has already been made and the
 * third party already has the visitor's IP. So nothing loads until someone
 * presses Accept. See components/Analytics.tsx, which subscribes to this.
 *
 * Accept and Reject are given equal visual weight on purpose. A banner where
 * refusing is harder than agreeing is not valid consent, and regulators have
 * been explicit about that.
 *
 * The only thing stored before consent is the choice itself.
 */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export const CONSENT_KEY = "dgd-consent-v1";
export const CONSENT_EVENT = "dgd-consent-change";

export type ConsentValue = "granted" | "denied";

export function readConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Storage blocked (private mode, strict browser settings). Treat as
    // "no consent given" — never as permission.
    return null;
  }
}

function writeConsent(v: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* nothing we can do; the session simply stays untracked */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: v }));
}

/** Lets the privacy page (or anything else) reopen the choice. */
export function openConsentSettings() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only decide on the client — the static HTML is identical for everyone.
    if (readConsent() === null) setOpen(true);

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as ConsentValue | null;
      setOpen(detail === null);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const choose = useCallback((v: ConsentValue) => {
    writeConsent(v);
    setOpen(false);
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-hairline-md bg-bg/98 backdrop-blur"
    >
      <div className="mx-auto flex max-w-container flex-col gap-5 px-5 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10">
        <p className="max-w-2xl text-[13px] leading-relaxed text-text-2">
          We use cookies to measure which pages and ads actually produce
          enquiries. Nothing is loaded unless you accept, and we never sell your
          information.{" "}
          <Link
            href="/privacy/"
            className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4"
          >
            Read the privacy policy
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border border-hairline-dk px-6 py-3 text-[13px] font-semibold transition-colors hover:border-ink"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="bg-ink px-6 py-3 text-[13px] font-semibold text-inverse transition-colors hover:bg-accent"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

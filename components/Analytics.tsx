"use client";

/**
 * GA4 + Meta Pixel, loaded ONLY after explicit consent.
 *
 * Two things this fixes, both found in the 9 Sep 2026 audit:
 *
 * 1. Nothing was ever loading. The IDs come from NEXT_PUBLIC_* env vars and
 *    the deploy workflow set none, so the placeholders survived and both
 *    scripts were skipped on every production build. The site ran with zero
 *    measurement while ads were spending. The workflow now supplies them.
 *
 * 2. There was no consent gate. Loading a tracker for an EU visitor before
 *    they agree is the breach — by the time the script requests, Meta and
 *    Google already have their IP. So we render nothing at all until
 *    ConsentBanner reports "granted", and we react live to that event so
 *    accepting starts tracking without a page reload.
 */
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  readConsent,
  type ConsentValue,
} from "@/components/ConsentBanner";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

// Guard against placeholder values ever shipping as if they were real.
const ga4Live = /^G-[A-Z0-9]{6,}$/.test(GA4_ID) && !GA4_ID.includes("XXXX");
const pixelLive = /^\d{10,}$/.test(PIXEL_ID) && !/^0+$/.test(PIXEL_ID);

export default function Analytics() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) =>
      setConsent((e as CustomEvent).detail as ConsentValue | null);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (consent !== "granted") return null;

  return (
    <>
      {ga4Live && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {pixelLive && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}

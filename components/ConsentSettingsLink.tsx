"use client";

/** Reopens the cookie banner so a visitor can change their mind. */
import { openConsentSettings } from "@/components/ConsentBanner";

export default function ConsentSettingsLink() {
  return (
    <button
      type="button"
      onClick={openConsentSettings}
      className="border border-hairline-dk px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
    >
      Change cookie settings
    </button>
  );
}

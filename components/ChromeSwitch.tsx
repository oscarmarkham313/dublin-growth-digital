"use client";

/**
 * Swaps site chrome for a stripped-back version on conversion routes.
 *
 * A landing page should not carry a full nav and a 40-link footer: every
 * one of those links is an exit. Both variants are rendered on the server
 * and passed in as children, so this stays a tiny client shim around
 * already-built markup rather than pulling the footer into the client
 * bundle.
 */
import { usePathname } from "next/navigation";

export default function ChromeSwitch({
  slimOn,
  slim,
  children,
}: {
  slimOn: string[];
  slim: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSlim = slimOn.some((p) => pathname.startsWith(p));
  return <>{isSlim ? slim : children}</>;
}

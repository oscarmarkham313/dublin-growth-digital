import Link from "next/link";
import { site, footer } from "@/config/copy";

/** Legal-only footer for conversion routes. No navigation, nothing to leak to. */
export default function SlimFooter() {
  return (
    <footer className="border-t border-hairline bg-bg pb-24 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col justify-between gap-4 px-5 py-10 text-xs text-text-4 md:flex-row md:items-center md:px-10">
        <p>
          © {new Date().getFullYear()} Dublin Growth Digital. Dublin, Ireland.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-ink"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="transition-colors hover:text-ink"
          >
            {site.phoneDisplay}
          </a>
          {footer.legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

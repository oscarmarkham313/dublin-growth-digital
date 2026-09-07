import Link from "next/link";
import { footer, nav, site } from "@/config/copy";
import { industries } from "@/config/industries";
import { counties } from "@/config/counties";

const footerCounties = [
  "dublin", "cork", "galway", "limerick", "waterford", "kildare",
  "meath", "wicklow", "kerry", "wexford", "louth", "tipperary",
];

export default function Footer() {
  const shown = footerCounties
    .map((s) => counties.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="mx-auto max-w-container px-5 py-14 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="md:max-w-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Dublin Growth Digital" className="h-10 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-text-3">
              {footer.line}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={`mailto:${site.email}`} className="text-text-2 transition-colors hover:text-ink">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="text-text-2 transition-colors hover:text-ink">
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-2 transition-colors hover:text-ink"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-8 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Pages</span>
              {nav.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-text-2 transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Industries</span>
              {industries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}/`}
                  className="text-text-2 transition-colors hover:text-ink"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Locations</span>
              {shown.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}/`}
                  className="text-text-2 transition-colors hover:text-ink"
                >
                  {c.name}
                </Link>
              ))}
              <Link href="/locations/" className="font-semibold text-ink">
                All 26 counties →
              </Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">Social</span>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-2 transition-colors hover:text-ink"
              >
                Instagram
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-2 transition-colors hover:text-ink"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-hairline pt-6 text-xs text-text-4 md:flex-row">
          <p>
            © {new Date().getFullYear()} Dublin Growth Digital. Dublin, Ireland.
            Lead generation and digital marketing across all of Ireland.
          </p>
          <div className="flex gap-6">
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
      </div>
    </footer>
  );
}

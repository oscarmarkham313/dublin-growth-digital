"use client";

/**
 * Objection-handling accordion. First item open on load so the section never
 * reads as an empty list of headings.
 *
 * Every answer is also present in the page's FAQPage JSON-LD, so the content
 * is crawlable regardless of what is expanded.
 */
import { useState } from "react";

interface Item {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-hairline">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
              >
                <span className="text-lg font-bold leading-snug tracking-display transition-colors duration-200 group-hover:text-accent md:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1.5 block h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="pb-7 pr-10 md:pb-9"
            >
              <p className="max-w-3xl text-[15px] leading-relaxed text-text-2">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

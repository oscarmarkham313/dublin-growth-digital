import type { Metadata } from "next";
import { privacy } from "@/config/privacy";
import { site } from "@/config/copy";
import ConsentSettingsLink from "@/components/ConsentSettingsLink";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What personal information Dublin Growth Digital collects, why, who it is shared with, how long it is kept, and how to have it deleted.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main className="pt-16">
      <section className="border-b border-hairline bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-display md:text-6xl">
            {privacy.title}
          </h1>
          <p className="mt-5 text-[13px] text-text-3">
            Last updated {privacy.updated}
          </p>
          <div className="mt-9 flex max-w-3xl flex-col gap-5">
            {privacy.intro.map((t) => (
              <p
                key={t.slice(0, 32)}
                className="text-[15px] leading-relaxed text-text-2 md:text-base"
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <div className="max-w-3xl">
            {privacy.sections.map((s) => (
              <div key={s.heading} className="border-t border-hairline py-10">
                <h2 className="text-2xl font-extrabold leading-tight tracking-display md:text-3xl">
                  {s.heading}
                </h2>

                {"body" in s && s.body && (
                  <div className="mt-5 flex flex-col gap-4">
                    {s.body.map((t) => (
                      <p
                        key={t.slice(0, 32)}
                        className="text-[15px] leading-relaxed text-text-2"
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                )}

                {"list" in s && s.list && (
                  <dl className="mt-7 flex flex-col gap-5">
                    {s.list.map((item) => (
                      <div key={item.title}>
                        <dt className="text-[15px] font-bold">{item.title}</dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-text-2">
                          {item.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {"after" in s && s.after && (
                  <div className="mt-6 flex flex-col gap-4">
                    {s.after.map((t) => (
                      <p
                        key={t.slice(0, 32)}
                        className="text-[15px] leading-relaxed text-text-2"
                      >
                        {t}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-hairline py-10">
              <h2 className="text-2xl font-extrabold leading-tight tracking-display md:text-3xl">
                Change your cookie choice
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-text-2">
                Whatever you chose, you can change it here and the banner will
                come back so you can decide again.
              </p>
              <div className="mt-6">
                <ConsentSettingsLink />
              </div>
            </div>

            <div className="border-t border-hairline py-10">
              <p className="text-[15px] leading-relaxed text-text-2">
                Questions about any of this?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4"
                >
                  {site.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${site.phone}`}
                  className="font-semibold text-ink underline decoration-hairline-dk underline-offset-4"
                >
                  {site.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

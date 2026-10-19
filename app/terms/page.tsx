import type { Metadata } from "next";
import { site } from "@/config/copy";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for the services provided by Dublin Growth Digital: Google Ads, Meta ads, SEO, web design and social media.",
  robots: { index: false },
};

/* Rewritten 19 October 2026. The previous version described a single
   Meta Ads package carried over from the v1 site in July 2026, and had
   stopped matching what is actually sold: Google Ads, Meta ads, SEO, web
   design and social media. The legal structure below is the same one as
   before -- obligations, liability cap, governing law -- widened to the
   real service list, with the account-ownership promise the rest of the
   site makes added as section 6. Not legal advice: worth ten minutes of
   a solicitor's time before relying on it. */
const sections: { heading: string; body: (string | string[])[] }[] = [
  {
    heading: "1. The Services",
    body: [
      'Dublin Growth Digital ("we", "us", "our") provides digital marketing services ("the Services") to Irish businesses ("you", "the client").',
      "Which of the following apply to you is whatever is agreed with you in writing before work begins:",
      [
        "Google Ads: campaign strategy, keyword research, ad copy, setup and ongoing management",
        "Meta ads: audience research, creative production, setup and ongoing management",
        "Search engine optimisation: technical work, on-page content and local search",
        "Web design and build",
        "Social media management and content",
        "Conversion tracking and reporting setup",
      ],
      "The Services do not include advertising spend, which is paid directly to Google, Meta or any other platform from your own account.",
      "Reporting is in enquiries, cost per enquiry and booked work. We report what the campaign produced; we do not report impressions as results.",
    ],
  },
  {
    heading: "2. Fees and Payment",
    body: [
      "Fees are the amounts agreed with you in writing before work begins, plus VAT.",
      "Project work, for example a website build, is invoiced as agreed at the outset, typically in two instalments. Ongoing management is billed monthly in advance, with no minimum term.",
      "Invoices are issued on receipt of payment. Late payment may pause active work until the account is settled.",
    ],
  },
  {
    heading: "3. The Initial Engagement",
    body: [
      "For ongoing management, the first 30 days are treated as the initial engagement, and it works as follows:",
      [
        "After 30 days, if you are satisfied with the results, the arrangement continues on the agreed monthly basis.",
        "If you are not satisfied, we will continue working for a further 30 days at no additional charge.",
        "If after the extended period you remain unsatisfied, we will discuss resolution in good faith, which may include a partial refund at our discretion.",
      ],
      '"Results" means a measurable change in enquiries, leads, bookings or sales attributable to the work, evidenced by the campaign and analytics data shared with you throughout.',
      "This does not apply if you have withheld access, failed to respond to our requests, or materially changed your business offering during the period.",
    ],
  },
  {
    heading: "4. Deliverables and Timeline",
    body: [
      "We will contact you within one working day of engagement to arrange onboarding.",
      "Campaign work goes live within 7 business days of receiving all required access and information. Website builds run to a schedule agreed with you in writing at the outset.",
      "You will receive a performance report by email on an agreed cadence, covering the period since the last one.",
    ],
  },
  {
    heading: "5. Your Obligations",
    body: [
      "So that the work can actually be delivered, you agree to:",
      [
        "Grant admin access to the relevant advertising, analytics and search accounts, or allow us to create them in your name",
        "Provide access to your website or landing pages for tracking installation and any agreed changes",
        "Respond to our messages within 2 business days",
        "Maintain the advertising spend agreed during onboarding, where the Services include paid campaigns",
        "Provide product images, videos, brand assets or copy we request within 3 business days",
        "Ensure anything you supply is accurate, and that you hold the rights to it",
      ],
      "Delays caused by access or assets not arriving will not count against our delivery timeline or any period described in section 3.",
    ],
  },
  {
    heading: "6. Ownership of Accounts, Work and Data",
    body: [
      "Your advertising accounts, website, analytics and the data in them are yours, from the first day and after the engagement ends. Where we create an account for you, it is created in your name and under your ownership.",
      "On completion of a website build, and once fees for it are settled, the site and its content are yours to keep, move or change.",
      "If the engagement ends, we will transfer or hand back access rather than retain it. We keep copies of work produced for our own records only, and will not publish your name, logo or results as a case study without asking you first.",
    ],
  },
  {
    heading: "7. Cancellation and Refunds",
    body: [
      "Ongoing monthly management may be cancelled at any time with 7 days written notice to dublingrowthdigital@gmail.com. You will not be billed beyond the notice period.",
      "For project work, any deposit is non-refundable once work has commenced, meaning once strategy, design or setup has begun. If you cancel before any work has begun, a full refund is issued.",
      "We may end an engagement on the same 7 days notice, and will refund any amount paid for work not yet delivered.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "We cannot guarantee specific outcomes in revenue, profit, ranking position or business growth. Results depend on factors outside our control, including market conditions, platform policy, competitor activity, your pricing and your product or service.",
      "Our total liability to you under these terms shall not exceed the total fees paid by you in the 3 months preceding any claim.",
      "We are not liable for indirect, consequential or incidental losses arising from the use of our services, nor for the acts or decisions of third-party platforms, including account suspensions or policy changes.",
      "Nothing in these terms limits liability where the law does not allow it to be limited.",
    ],
  },
  {
    heading: "9. Governing Law",
    body: [
      "These terms are governed by the laws of the Republic of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.",
      "Last updated: October 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="pt-16">
      <section className="border-b border-hairline bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-container px-5 md:px-10">
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-display md:text-6xl">
            Terms &amp; Conditions<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] text-text-2">
            These terms apply to the services provided by Dublin Growth
            Digital: Google Ads, Meta ads, SEO, web design and social
            media. Please read them before we begin.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          {sections.map((s) => (
            <div key={s.heading} className="border-b border-hairline py-10 first:pt-0">
              <h2 className="text-xl font-extrabold tracking-tight">{s.heading}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {s.body.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="flex flex-col gap-2 pl-1">
                      {b.map((li) => (
                        <li key={li} className="flex items-baseline gap-3 text-sm leading-relaxed text-text-2">
                          <span className="text-accent" aria-hidden="true">—</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="text-sm leading-relaxed text-text-2">
                      {b}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}

          <div className="py-10">
            <h2 className="text-xl font-extrabold tracking-tight">10. Contact</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-2">
              For any questions about these terms: Dublin Growth Digital —{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
                {site.email}
              </a>{" "}
              · {site.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

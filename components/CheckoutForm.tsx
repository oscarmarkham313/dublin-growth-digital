"use client";

/**
 * Offer checkout — captures the brief, then hands off to Whop for payment.
 *
 * Why capture first: Whop owns the payment page, so without this step an
 * abandoned checkout leaves no trace. Posting to Formspree first means every
 * person who reaches the payment page is a lead we can follow up, whether or
 * not they complete.
 *
 * The hand-off is deliberately unconditional — if Formspree is down or slow,
 * the buyer still goes through to payment. Never block a sale on our own
 * lead capture.
 *
 * No payment details are handled here. Whop takes the card, we never see it,
 * and nothing personal is put in the URL.
 */
import { useState } from "react";
import { offer } from "@/config/offer";
import { site } from "@/config/copy";

type Status = "idle" | "sending";

const field =
  "w-full border-b border-hairline-md bg-transparent py-3.5 text-[15px] outline-none transition-colors duration-200 placeholder:text-text-4 focus:border-ink";

export default function CheckoutForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = offer.checkout.form;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // honeypot
    data.append("_subject", "OFFER CHECKOUT — website €1,500");
    setStatus("sending");

    // Best effort, capped: the buyer is going to Whop either way.
    try {
      await Promise.race([
        fetch(site.formspree, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }),
        new Promise((resolve) => setTimeout(resolve, 4000)),
      ]);
    } catch {
      /* swallowed on purpose — see the note above */
    }

    window.location.assign(site.whopCheckout);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <input
          required
          name="name"
          autoComplete="name"
          placeholder={f.name}
          aria-label={f.name}
          className={field}
        />
        <input
          required
          name="business"
          autoComplete="organization"
          placeholder={f.business}
          aria-label={f.business}
          className={field}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder={f.email}
          aria-label={f.email}
          className={field}
        />
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder={f.phone}
          aria-label={f.phone}
          className={field}
        />
      </div>

      <input
        name="website"
        inputMode="url"
        placeholder={f.website}
        aria-label={f.website}
        className={field}
      />

      <textarea
        required
        name="about"
        rows={3}
        placeholder={f.about}
        aria-label={f.about}
        className={`${field} resize-none`}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-3 bg-ink px-8 py-5 text-sm font-semibold text-inverse transition-colors duration-300 hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? f.sending : `${f.submit} — ${offer.priceLabel}`}
      </button>

      <p className="text-xs leading-relaxed text-text-3">
        {f.note} Trouble paying? Email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold underline">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}

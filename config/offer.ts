/**
 * THE WEBSITE OFFER — all copy and numbers for /offer and /offer/checkout.
 * Edit here, never in the page components.
 *
 * Structure follows the direct-response order that converts:
 * promise → cost of inaction → value stack → mechanism → risk reversal →
 * qualification → proof → objections → close.
 */

export const offer = {
  /* ————— identity ————— */
  name: "The Website",
  price: 1500,
  priceLabel: "€1,500",
  buildDays: 10,

  /* Capacity note. HONEST NUMBER — only claim what you will actually honour. */
  capacity: {
    slots: 4,
    line: "We take four builds a month so each one gets built properly, not batched.",
  },

  /* ————— hero ————— */
  hero: {
    eyebrow: "Any business · Any niche · Fixed price",
    words: ["Your", "new", "website."],
    rotating: [
      "Done in 10 days.",
      "Written for you.",
      "Built to be found.",
      "Yours to keep.",
    ],
    sub: "Designed, written, built, launched and connected to your domain for a one-off €1,500. No monthly fee. No contract. No retainer. You own every file the day it goes live.",
    cta: { label: "Get started — €1,500 once", href: "/offer/checkout" },
    secondary: { label: "See everything you get", href: "#included" },
    trust:
      "Built by Dublin Growth Digital. Dublin-based, working in every county in Ireland.",
  },

  /* Numbers strip under the hero — each is a fact about the offer itself,
     not a performance claim, so every one of them is defensible. */
  facts: [
    { value: "€1,500", label: "Once. Not per month." },
    { value: "10", label: "Working days to live" },
    { value: "€0", label: "Ongoing fees or contract" },
    { value: "100%", label: "Owned by you, day one" },
  ],

  /* ————— problem ————— */
  problem: {
    eyebrow: "The honest bit",
    heading: "Most small-business websites are expensive brochures.",
    intro:
      "They are not badly designed. They are badly employed. Nobody ever gave them a job to do, so they sit there looking respectable while the work goes to whoever turns up first in the search results.",
    points: [
      {
        n: "01",
        title: "It was built once and never touched again",
        body: "Prices are out of date, half the services you now offer are not on it, and the last news post is from three years ago. Every visitor notices.",
      },
      {
        n: "02",
        title: "It falls apart on a phone",
        body: "It looks fine on the laptop it was designed on. Most of your customers will never see it on a laptop.",
      },
      {
        n: "03",
        title: "It tells, but never asks",
        body: "It says what you do at length and never once makes it easy to get in touch. No obvious number, no form that works, no reason to act now.",
      },
      {
        n: "04",
        title: "Google cannot read it properly",
        body: "No page titles worth the name, no structure, no schema, no sitemap. You are invisible for the exact searches you should own.",
      },
      {
        n: "05",
        title: "Somebody else holds the keys",
        body: "The domain, the hosting login and the files sit with whoever built it. Getting a phone number changed takes two weeks and an invoice.",
      },
    ],
    close:
      "None of that is a design problem. It is a job-description problem. A website has exactly one job — turn a stranger into an enquiry — and we build for that and nothing else.",
  },

  /* ————— the value stack ————— */
  included: {
    eyebrow: "Everything included",
    heading: "Ten things. One price.",
    intro:
      "This is the whole scope, priced line by line at what each piece is worth bought on its own. Nothing here is an upsell and nothing here is optional.",
    items: [
      {
        n: "01",
        title: "A website designed for your business",
        body: "Up to seven pages, custom designed. Not a template, not a page-builder theme with your logo dropped on top. Laid out around what your customers need to see before they pick up the phone.",
        value: 2400,
      },
      {
        n: "02",
        title: "Every word written for you",
        body: "Headlines, service pages, about page, calls to action, meta descriptions. You do not write a single sentence. We read your reviews, your competitors and your old site, then write it properly.",
        value: 900,
      },
      {
        n: "03",
        title: "Built for the phone first",
        body: "Designed on mobile and scaled up, not the other way around. Optimised images, clean code, no bloated plugins. It loads before your visitor gives up.",
        value: 500,
      },
      {
        n: "04",
        title: "Enquiries wired to your inbox",
        body: "Contact form, quote request form, click-to-call and a WhatsApp button. Every enquiry lands in your email and on your phone the moment it is sent.",
        value: 350,
      },
      {
        n: "05",
        title: "Technical SEO built in from day one",
        body: "Page titles, meta descriptions, heading structure, image alt text, schema markup, canonical tags, sitemap and robots.txt. The foundations most builds skip entirely.",
        value: 600,
      },
      {
        n: "06",
        title: "Google Search Console and Analytics",
        body: "Both set up in your name, verified, sitemap submitted and indexing requested. From launch day you can see who finds you, from where, and what they do next.",
        value: 250,
      },
      {
        n: "07",
        title: "Your Google Business Profile rebuilt",
        body: "Description, categories, services and photos rewritten around the searches you want to win. For a local business this is frequently the fastest win on the list.",
        value: 300,
      },
      {
        n: "08",
        title: "Hosting, SSL and your domain connected",
        body: "First twelve months of fast hosting and the security certificate included. We connect the domain you already own, or register a new one for you.",
        value: 360,
      },
      {
        n: "09",
        title: "Thirty days of unlimited changes",
        body: "Live with it for a month, then send us everything you want changed. As many rounds as you like, no charge, no argument about what counts as a revision.",
        value: 400,
      },
      {
        n: "10",
        title: "You own all of it",
        body: "Domain, files, hosting account, analytics, Search Console — all in your name from day one. Walk away whenever you want and take everything with you. Nothing is ever held hostage.",
        value: null,
        valueLabel: "Non-negotiable",
      },
    ],
    totalLabel: "That work bought separately",
    priceLabel: "What you pay",
    priceNote:
      "One payment. No monthly fee, no contract, no retainer, and no invoice at the end for anything that was out of scope.",
  },

  /* ————— mechanism ————— */
  process: {
    eyebrow: "The ten-day build",
    heading: "Ten working days. About forty minutes of your time.",
    intro:
      "The reason most website projects take four months is that they are run as a conversation. This one is run as a build. Here is the entire process.",
    steps: [
      {
        day: "Day 0",
        title: "You pay and fill in one short form",
        body: "Six questions: what you do, where you work, what you want more of, your logo, your photos if you have them, your domain. Ten minutes. If you would rather talk it through, we do a twenty-minute call instead.",
      },
      {
        day: "Days 1–3",
        title: "We research and write",
        body: "Your market, your competitors, the searches people actually use in your area, your reviews. Then every word of the site gets written. You do nothing during this stage.",
      },
      {
        day: "Days 4–7",
        title: "We design and build",
        body: "The full site, built for real. Halfway through you get a private preview link, so there are no surprises at the end.",
      },
      {
        day: "Day 8",
        title: "You review it",
        body: "One list, everything you want changed, however long the list is. This is the stage most agencies rush. We would rather you were blunt now than polite and disappointed later.",
      },
      {
        day: "Days 9–10",
        title: "We change it and launch",
        body: "Your changes go in, the domain gets connected, SSL goes on, tracking goes live and Google is told the site exists. You get every login in an email.",
      },
      {
        day: "Days 11–40",
        title: "Unlimited changes, free",
        body: "A month of living with it. Anything you want moved, reworded or added, you send it and we do it. No charge.",
      },
    ],
  },

  /* ————— risk reversal ————— */
  guarantee: {
    eyebrow: "Our guarantee",
    heading: "You sign off, or we keep working.",
    items: [
      {
        name: "The sign-off guarantee",
        body: "Your website does not go live until you have looked at it and told us it is right. Unlimited revision rounds, no extra charge, no cut-off date. We do not call a job finished over a client's head.",
      },
      {
        name: "The ten-day guarantee",
        body: "If we miss the ten-working-day deadline for any reason inside our control, we refund you €250 and finish the job anyway.",
      },
    ],
    smallPrint:
      "The clock starts the day we have your completed form and your logo. If we are waiting on something from you, the clock pauses — that is the only exception, and we will tell you the moment it happens.",
  },

  /* ————— qualification ————— */
  fit: {
    eyebrow: "Straight answer",
    heading: "Who this is for.",
    forHeading: "It is for you if",
    forItems: [
      "You sell to people who search before they buy — trades, salons, clinics, gyms, restaurants, solicitors, accountants, agents, contractors, coaches, retailers, anything local.",
      "Your current site is old, slow, awkward on a phone, or does not exist at all.",
      "You want a fixed price and a finish date, not an hourly rate and a moving target.",
      "You want to own everything and be free to leave.",
    ],
    notHeading: "It is not for you if",
    notItems: [
      "You need a large e-commerce store with hundreds of products and live stock control.",
      "You need custom software, a client portal, a booking engine or an app built.",
      "You want a committee to approve twelve rounds of design before anyone builds anything.",
    ],
    close:
      "If you are not sure which side of that you land on, message us before you pay anything. We will tell you straight, and we will say no if it is not a fit.",
  },

  /* ————— proof ————— */
  proof: {
    eyebrow: "Proof",
    heading: "We do this for a living.",
    body: "Dublin Growth Digital builds websites and runs the campaigns that point at them for Irish businesses in every county. The site you are reading right now is one of ours. Here is what that work has done for clients.",
    cta: { label: "See the case studies", href: "/results" },
  },

  /* ————— objections ————— */
  faq: {
    eyebrow: "Before you ask",
    heading: "The questions everyone asks.",
    items: [
      {
        q: "Is €1,500 really the whole price?",
        a: "Yes. One payment of €1,500 covers everything on the list above, including the first twelve months of hosting and the thirty days of free changes after launch. There is no setup fee, no monthly charge and no invoice at the end for anything that was out of scope. After the first twelve months you either keep hosting with us for a small annual fee, or take the files and host it yourself.",
      },
      {
        q: "What if I do not like the design?",
        a: "You tell us, and we change it, as many times as it takes. The site does not go live until you say it is right. That is the sign-off guarantee, and it has no time limit and no revision cap.",
      },
      {
        q: "Do I have to write anything?",
        a: "No. Not a headline, not a service description, not an about page. You answer six short questions and we write the rest. If you want to write something yourself you are welcome to, but almost nobody does.",
      },
      {
        q: "I already have a website. Is this worth it?",
        a: "If your current site brings you steady enquiries, keep it. If it is more than three or four years old, or it looks wrong on a phone, or you cannot remember the last enquiry that came through it, then it is quietly costing you more than €1,500 a year in work you never hear about.",
      },
      {
        q: "Who owns the site when it is finished?",
        a: "You do, entirely. The domain, the files, the hosting account, the analytics and the Search Console property are all created in your name from the start. There is no scenario where you have to ask our permission for anything, or buy your own website back.",
      },
      {
        q: "What if I need changes in six months?",
        a: "Send them over. Small changes we do as a favour. Anything substantial is charged at a flat rate we agree in advance, and we always tell you the price before we start. You are never locked into a support plan.",
      },
      {
        q: "Do you work with businesses outside Dublin?",
        a: "Every county in Ireland, and it makes no difference to the price or the timeline. The whole process runs by email, WhatsApp and one optional call.",
      },
      {
        q: "Can you do online booking or take payments?",
        a: "We can connect the booking or payment tool you already use — Stripe, Calendly, Square, Fresha and most others — and that is included. Building a booking system or a shop from scratch is a different job with a different price, so tell us before you pay and we will quote it properly.",
      },
      {
        q: "How do I actually pay?",
        a: "Through the checkout on the next page. Payment is processed by Whop, who handle the card details — we never see them. You get a receipt immediately, and we are in touch within one working day to start.",
      },
      {
        q: "What if I want ads or SEO run afterwards?",
        a: "That is what we do the rest of the time, and it is a separate decision made after your site is live. Nobody has to buy it, and this offer is not a trojan horse for a retainer. If you do want it, our management packages start at €1,500 a month.",
      },
    ],
  },

  /* ————— close ————— */
  close: {
    heading: "€1,500. Once. Live in ten days.",
    sub: "You own it, you can leave whenever you like, and it does not go live until you say it is right.",
    cta: { label: "Get started", href: "/offer/checkout" },
    alt: "Not ready yet? Ask us anything on WhatsApp — no call, no pitch.",
  },

  /* ————— checkout page ————— */
  checkout: {
    title: "Get started.",
    sub: "Two minutes of details, then secure payment. We are in touch within one working day to begin.",
    summaryHeading: "The Website",
    summaryPoints: [
      "Custom-designed site, up to seven pages",
      "All copywriting written for you",
      "Technical SEO, schema, sitemap and analytics",
      "Google Business Profile rebuilt",
      "Hosting, SSL and domain connection, first year",
      "Thirty days of unlimited changes after launch",
      "Every file, login and account owned by you",
    ],
    guaranteeLine:
      "Sign-off guarantee — your site does not go live until you say it is right. Unlimited revisions, no time limit.",
    next: {
      heading: "What happens after you pay",
      steps: [
        "You get a receipt from Whop straight away.",
        "We email you within one working day with a six-question form.",
        "The ten working days start the moment that form comes back.",
      ],
    },
    form: {
      name: "Your name",
      business: "Business name",
      email: "Email",
      phone: "Phone",
      website: "Current website (leave blank if none)",
      about: "In a line or two — what does your business do, and where?",
      submit: "Continue to secure payment",
      sending: "One second…",
      error: "Something went wrong. Email us at",
      note: "Payment is processed by Whop. We never see your card details.",
    },
  },

  /* ————— SEO ————— */
  meta: {
    title: "Website Design Ireland — €1,500 Once, Live in 10 Days",
    description:
      "A custom-built business website: designed, written and launched in ten working days for a one-off €1,500. No monthly fee, no contract, and you own every file. Any business, any county in Ireland.",
  },
} as const;

/** Sum of the itemised value stack — the anchor above the price. */
export const stackTotal = offer.included.items.reduce(
  (sum, i) => sum + (i.value ?? 0),
  0,
);

export const euro = (n: number) => `€${n.toLocaleString("en-IE")}`;

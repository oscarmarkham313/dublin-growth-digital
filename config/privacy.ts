/**
 * Privacy policy content.
 *
 * Required for three separate reasons, not one: GDPR (we collect names,
 * emails and phone numbers from people in the EU), Meta's lead-ad policy
 * (an instant form must link to a working privacy policy), and Google's
 * consent requirements for analytics in the EEA.
 *
 * Written to describe what the site ACTUALLY does. If the stack changes —
 * a new form processor, a new tracker — change it here in the same commit.
 */

export const privacy = {
  title: "Privacy Policy",
  updated: "9 September 2026",
  intro: [
    "This policy explains what personal information Dublin Growth Digital collects through dublingrowthdigital.com, why we collect it, who it is shared with, and what you can do about it. It is written to be read, not to be impenetrable.",
    "Dublin Growth Digital is the data controller for the information described here. We are based in Dublin, Ireland, and operate under the EU General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        "Dublin Growth Digital, a digital marketing business based in Dublin, Ireland. Founder: Oscar Markham.",
        "For any privacy question, or to exercise any right described below, email dublingrowthdigital@gmail.com or call +353 87 125 7533. We answer within one working day.",
      ],
    },
    {
      heading: "What we collect, and when",
      body: [
        "We only collect personal information when you choose to give it to us. We do not buy personal data, and we do not require an account to read anything on this site.",
      ],
      list: [
        {
          title: "When you send an enquiry or request an audit",
          body: "Your name, business name, email address, phone number, county, business type, and whatever you write in the message. This is submitted through Formspree, which processes and forwards it to our email.",
        },
        {
          title: "When you start a website checkout",
          body: "Your name, business name, email address, phone number, current website address and a short description of your business, so we can begin work. Payment itself is handled entirely by Whop — card details are never sent to, seen by, or stored by us.",
        },
        {
          title: "If you accept analytics cookies",
          body: "Anonymous usage information: pages viewed, approximate location (country or city level), device and browser type, and how you arrived at the site. This is collected by Google Analytics and the Meta pixel, and only if you press Accept on the cookie banner.",
        },
        {
          title: "Automatically, by our host",
          body: "Our host (GitHub Pages) processes your IP address to serve the page and protect against abuse. We do not have access to those logs.",
        },
      ],
    },
    {
      heading: "Why we use it, and our legal basis",
      list: [
        {
          title: "To answer you",
          body: "If you send an enquiry, we use your details to reply and to discuss working together. Legal basis: our legitimate interest in responding to someone who contacted us, and the steps necessary to enter a contract if you go ahead.",
        },
        {
          title: "To deliver work you have paid for",
          body: "If you buy a website, we use your details to build and launch it. Legal basis: performance of a contract.",
        },
        {
          title: "To measure and improve our marketing",
          body: "Analytics and advertising cookies tell us which pages and campaigns actually produce enquiries. Legal basis: your consent, which you give or refuse on the cookie banner and can change at any time.",
        },
        {
          title: "To meet our obligations",
          body: "We keep records of work sold and invoiced. Legal basis: legal obligation, principally tax and accounting law.",
        },
      ],
    },
    {
      heading: "Cookies and tracking",
      body: [
        "This site sets no analytics or advertising cookies until you accept them. If you press Reject, no Google Analytics and no Meta pixel code is loaded at all — not loaded-but-disabled, simply not loaded.",
        "The only thing stored on your device without consent is a small record of your cookie choice itself, so we do not ask you again on every page, and a note of whether you have already dismissed our enquiry pop-up. Neither identifies you and neither is shared with anyone.",
        "If you accept, we use Google Analytics 4 (to see which pages are read and which produce enquiries) and the Meta pixel (to measure whether our Facebook and Instagram advertising works, and to avoid showing ads to people who have already been in touch).",
        "You can change your mind at any time using the link at the bottom of this page, or by clearing cookies for this site in your browser.",
      ],
    },
    {
      heading: "Who your information is shared with",
      body: [
        "We do not sell personal information, and we do not share it with anyone for their own marketing. It is shared only with the services that make this site work:",
      ],
      list: [
        {
          title: "Formspree",
          body: "Receives and forwards enquiry and checkout forms. Privacy policy at formspree.io/legal/privacy-policy.",
        },
        {
          title: "Whop",
          body: "Processes payment if you buy a website. They handle card details under their own policy at whop.com/privacy. We receive only confirmation that a payment succeeded.",
        },
        {
          title: "Google",
          body: "Google Analytics, only with your consent. Google is also our Search Console provider, which reports on anonymous aggregate search data only.",
        },
        {
          title: "Meta",
          body: "The Meta pixel, only with your consent. If you contact us through a Facebook or Instagram lead form, Meta provides us your submitted details under their own policy.",
        },
        {
          title: "GitHub",
          body: "Hosts the site (GitHub Pages) and processes connection data to serve it.",
        },
        {
          title: "Google Workspace",
          body: "Our email. Anything you email us is stored there.",
        },
      ],
      after: [
        "Some of these providers are based outside the European Economic Area, principally in the United States. Where that is the case, transfers are covered by the EU-US Data Privacy Framework or by Standard Contractual Clauses.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Enquiries that do not become work: up to 24 months, so we can pick up a conversation if you come back to us, then deleted.",
        "Client records: for the duration of the engagement and then for six years afterwards, because Irish tax law requires it.",
        "Analytics data: 14 months, then automatically deleted by Google.",
        "If you ask us to delete your information sooner, we will, except for anything we are legally required to keep.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Under GDPR you have the right to ask us for a copy of the information we hold about you, to have it corrected, to have it deleted, to restrict or object to how we use it, to receive it in a portable format, and to withdraw consent at any time where consent is what we relied on.",
        "Email dublingrowthdigital@gmail.com and we will action any of these within one month, free of charge. We will never make you jump through hoops for it.",
        "If you are unhappy with how we have handled your information you can complain to the Irish Data Protection Commission at dataprotection.ie, 21 Fitzwilliam Square South, Dublin 2, D02 RD28.",
      ],
    },
    {
      heading: "Security",
      body: [
        "This site is served over HTTPS. We do not operate a database of our own and we do not store payment details at any point. Enquiry data lives in our email and in the systems listed above, each protected by two-factor authentication.",
        "No system is perfect. If we ever become aware of a breach affecting your personal information, we will tell you and the Data Protection Commission as required by law.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site is aimed at business owners and is not directed at children. We do not knowingly collect information about anyone under 16.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "If we change this policy we will update the date at the top. Material changes will be reflected in the cookie banner so you can re-consider your choice.",
      ],
    },
  ],
} as const;

/**
 * Blog posts — /blog/[slug]. Plain content blocks; the template renders
 * headings and paragraphs. Dates are ISO (YYYY-MM-DD).
 */

export interface PostSection {
  h?: string;
  p: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  minutes: number;
  intro: string;
  sections: PostSection[];
  /** industry slugs to link at the end */
  related: string[];
}

export const posts: Post[] = [
  {
    slug: "solar-lead-cost-ireland",
    title: "What does a solar lead cost in Ireland in 2026?",
    description:
      "Real ranges for Meta and Google solar leads in Ireland, why shared leads look cheap and cost more, and the four questions a lead form should ask before an installer picks up the phone.",
    date: "2026-09-07",
    minutes: 6,
    intro:
      "Every solar installer we speak to asks the same question first: what should a lead cost? The honest answer is that the number on its own tells you almost nothing. A €6 lead that never answers the phone is more expensive than a €40 lead who has already told you their roof type, their budget and when they want the install. Here is how the real numbers break down in Ireland this year.",
    sections: [
      {
        h: "The ranges we see",
        p: [
          "On Meta (Facebook and Instagram), a well-run lead-form campaign for a domestic solar installer in Ireland produces leads at somewhere between €8 and €25 each, depending on the county, the season and how tightly the form qualifies. Campaigns that ask nothing beyond a name and a phone number sit at the cheap end and waste the installer's time; campaigns that ask about the property, the roof and the timing sit at the dear end and fill survey diaries.",
          "On Google Ads, the searches with real intent ('solar panels Cork', 'solar PV installer near me', 'SEAI solar grant') cost more per click, and a lead typically lands between €35 and €90. The conversion rate to a survey is much higher, because the person typed the words.",
          "The number that matters is not the cost per lead. It is the cost per survey booked, and after that the cost per install. A €20 Meta lead that becomes a survey one time in three costs €60 per survey. A €70 Google lead that becomes a survey two times in three costs €105 per survey, but arrives ready to buy. Both are worth running. Only the report tells you which one is winning this month.",
        ],
      },
      {
        h: "Why shared leads look cheap and cost more",
        p: [
          "Several national websites sell solar leads to installers, usually to three or four firms at once, at €25 to €60 per lead. The homeowner has filled in one form and is now being rung by four companies within the hour. The installer who wins that job is the fastest caller with the lowest quote, which is not a business anyone wants to be in.",
          "A lead generated in your own name, from your own ads, lands with you alone. The homeowner asked for you. That is the whole difference, and it is why installers who move from shared leads to their own campaigns usually see the close rate double even when the cost per lead goes up.",
        ],
      },
      {
        h: "The four questions the form should ask",
        p: [
          "A lead form is a filter. Every question you add costs you a few cheap leads and saves you an hour on the phone. For a domestic installer, four questions do most of the work:",
        ],
        list: [
          "Do you own the property? Renters and people at the wrong stage drop out here.",
          "Is the house detached, semi-detached or terraced? A rough system size and a rough price before anyone speaks.",
          "When are you hoping to install? 'Within three months' goes to the top of the diary; 'just researching' gets an email sequence instead of a call.",
          "Have you applied for the SEAI grant? Tells you how far along they are and what to say first.",
        ],
      },
      {
        h: "What the results look like when it is done properly",
        p: [
          "One of our home-improvement clients spent €57.78 on a Meta lead campaign and received 21 leads at €2.75 each, every one of them through a form that qualified the job first. A Cork EV charger installer received 54 residential enquiries in three weeks from a campaign built around his own installs. Those are not typical numbers, and we do not promise them, but they show what happens when the creative is honest, the targeting is local and the form does the qualifying.",
          "If you want to know what your own numbers would look like, start with a free growth audit. We will look at your Google map results, your reviews, your website and the ads already running in your county, and tell you where the enquiries are going right now.",
        ],
      },
    ],
    related: ["solar-installers", "plumbers-and-heating"],
  },
  {
    slug: "estate-agents-vendor-instructions-meta-ads",
    title: "How Irish estate agents win more vendor instructions with Meta ads",
    description:
      "The seller decides in the last week. The agency that wins the instruction spent the six months before it in the homeowner's feed. How vendor campaigns work, what they cost and what to measure.",
    date: "2026-09-07",
    minutes: 7,
    intro:
      "Ask any estate agent where their instructions come from and they will say reputation, referrals and the board outside the last house they sold. All true, and all slow. The agencies growing fastest in Ireland right now have added a fourth source: a steady, measurable flow of vendor enquiries from homeowners who were reached months before they were ready to call anyone.",
    sections: [
      {
        h: "The six-month window",
        p: [
          "A homeowner who sells in June started thinking about it in January. They looked at what the neighbour's house went for, they scrolled past a few agents on Instagram, they saw a valuation offer on Facebook and ignored it, and then one Saturday they searched 'estate agents near me' and rang two. The agent they rang first was the one they had seen most in the previous six months.",
          "Meta advertising is the only channel that can put your agency in front of that homeowner during the six months, at a cost of a few euro per thousand of them, every week. Google catches the search at the end; Meta wins the familiarity that decides who gets searched for.",
        ],
      },
      {
        h: "What a vendor campaign actually contains",
        p: [
          "Three campaigns, not one. A valuation campaign aimed at homeowners in your patch, built around your rating, your recent sales and a free valuation offer, sending every click to a valuation request form. A probate and downsizer campaign, because those instructions are never advertised for and always go to the agent the family already knows. And a landlord campaign for the investors selling up, which in most counties is now a meaningful share of listings.",
          "Each campaign lands on your own valuation page or an instant form that asks the qualifying questions: are you the owner, when are you thinking of selling, roughly what is the property worth, and when suits for a visit. Your negotiators only ring people who answered.",
        ],
      },
      {
        h: "What it costs and what to measure",
        p: [
          "Our vendor campaigns run at €1,500 a month with everything included, and advertising spend is paid directly to Meta from the agency's own account, usually €15 to €40 a day depending on the patch. There is no setup fee and no contract.",
          "Measure three things and ignore the rest: vendor enquiries, valuation appointments booked and instructions won. Impressions and reach are how platforms report; enquiries and appointments are how agencies get paid. We send those three numbers every Friday on one page.",
        ],
      },
      {
        h: "Results, unnamed on purpose",
        p: [
          "A Dublin estate agency received 42 vendor enquiries in one month from a Meta campaign aimed at homeowners six months before they searched; twelve of them went to market. A Cork property agency generated €2.1M in vendor instructions in one quarter. A Limerick agency booked 31 vendor appraisals in four weeks, fourteen of which went on to list. We name the agencies on a call, never in an ad or on a page.",
          "If you run an established agency and your valuation diary is quieter than your rating deserves, start with a free vendor audit: your Google box, socials and website checked against your three closest rivals, four pages, fact-checked, sent as a PDF.",
        ],
      },
    ],
    related: ["estate-agents"],
  },
  {
    slug: "roofing-leads-ireland-without-junk-enquiries",
    title: "Roofers: how to get roofing leads in Ireland without paying for junk",
    description:
      "Why roofing is searched for and not scrolled for, how to keep tyre-kickers out of the phone, what a roofing lead costs on Google and Meta, and the map-box fix most roofers never make.",
    date: "2026-09-07",
    minutes: 6,
    intro:
      "Roofing is the trade where marketing goes wrong most often, because the enquiries are urgent, the jobs vary from a slipped slate to a full re-roof, and half the people who fill in a form want a price for a job that does not exist yet. Here is how the roofers we work with keep the phone ringing with jobs worth the drive out.",
    sections: [
      {
        h: "Searched for, not scrolled for",
        p: [
          "A leak is a Google search, not a Facebook scroll. When rain comes through the ceiling, the homeowner types 'roofer near me' or 'roof repair' plus the town, looks at the map box, and rings whoever is at the top with the most reviews. That is why Google Ads and Google Business Profile come first for a roofer, and Meta comes second.",
          "Meta still earns its place: re-roofs, fascia and soffit, gutters and storm-season awareness are planned purchases where a homeowner decides over weeks, and being in the feed in the towns you cover means you are the name they remember when the wind picks up.",
        ],
      },
      {
        h: "Keeping the junk out",
        p: [
          "Every roofing enquiry should answer four questions before it reaches you: what needs doing (repair, new roof, flat roof, gutters), what type of building, how urgent it is, and what town the property is in. Put those on the form and the tyre-kickers filter themselves; put a phone number on the ad with no form and you will spend evenings quoting jobs forty miles away.",
          "The second filter is targeting. A campaign built around 'Cork' spends money on people three hours from your yard. A campaign built around Bandon, Clonakilty, Skibbereen and Dunmanway spends it on the people you can actually get to.",
        ],
      },
      {
        h: "What a roofing lead costs",
        p: [
          "On Google, a roofing click in Ireland costs between €2 and €8 depending on the town and the season, and a call or form lead typically lands between €20 and €60. On Meta, planned-work leads through a qualifying form usually sit between €5 and €20. One of our home-improvement clients received 21 leads at €2.75 each on €57.78 of spend, which is the cheap end of what a tight local campaign can do.",
          "The number that pays your wages is cost per booked job, and it only shows up if you track calls and forms properly. We install call tracking on every roofing campaign for exactly that reason.",
        ],
      },
      {
        h: "The map-box fix",
        p: [
          "Most roofers we audit are not in the top three of the map results for their own town, and the ones above them have more reviews, not more experience. The fix is not complicated: correct categories, every service listed, photos of real jobs added monthly, and a habit of asking every satisfied customer for a review the day the job finishes. Twenty years in business counts for nothing if the map shows three stars from four reviews.",
          "We do this work as part of every roofing campaign, and it usually moves the needle faster than the ads do. Start with a free growth audit of your map results, reviews and website and we will show you where the searches in your town are going right now.",
        ],
      },
    ],
    related: ["roofers", "driveways-and-paving"],
  },
  {
    slug: "the-friday-report",
    title: "The Friday report: the only marketing number a trades business needs",
    description:
      "Why we send one number a week instead of a dashboard, what goes on the page, and how to tell within a month whether a marketing agency is working for you.",
    date: "2026-09-07",
    minutes: 5,
    intro:
      "Most marketing reports are written to protect the agency, not to inform the client. Reach, impressions, engagement rate and click-through are all real numbers, and none of them tell a plumber in Ennis whether the phone rang. We stopped sending them. Here is what we send instead, and why it works.",
    sections: [
      {
        h: "One page, four lines",
        p: [
          "Every Friday our clients get one page. It says what was spent, how many enquiries came in, what each one cost, and how many turned into booked work. Underneath is one line about what we are changing next week and why. That is the whole report.",
          "It works because those four numbers are the only ones connected to the client's bank account. Everything else is a leading indicator at best and a distraction at worst. If enquiries are up and cost per enquiry is down, the campaign is working. If not, the one line underneath says what we are doing about it.",
        ],
      },
      {
        h: "How to judge an agency in a month",
        p: [
          "Ask three questions. Can they tell you, today, what your cost per enquiry was last week? Can they show you the enquiries themselves, with the answers to the qualifying questions? And when something is not working, do you hear it from them first? An agency that fails any of the three is reporting to look busy.",
          "The trap on the client side is judging by the wrong number. A cost per lead of €4 sounds better than €18 until you notice the €4 leads never answer the phone. Insist on cost per booked job as the number you both watch, and be patient for the first month while the campaign learns who responds.",
        ],
      },
      {
        h: "Why weekly and not monthly",
        p: [
          "A month is long enough to waste a lot of money on a campaign that stopped working in week two. Weekly reporting forces a decision every seven days: keep, change or stop. It also means the client never has to wonder what they are paying for, which is the reason most agency relationships end.",
          "If your current report has more than one page and fewer than four useful numbers, send us a copy with your free growth audit request and we will tell you what it should have said.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "solar-installers"],
  },
  {
    slug: "google-business-profile-irish-trades",
    title: "Google Business Profile for Irish trades: the thirty-minute fix",
    description:
      "The map box drives most local trade enquiries in Ireland. The eight things to fix on a Google Business Profile this week, in the order that moves the phone.",
    date: "2026-09-07",
    minutes: 6,
    intro:
      "When a homeowner in Navan searches 'roofer Navan', three businesses appear on a map before any website does. Those three get most of the calls. The listing behind that map is free, takes half an hour to set up properly, and is neglected by almost every tradesperson we audit. Here is the fix, in order.",
    sections: [
      {
        h: "One listing, the right name",
        p: [
          "Start by searching your own business on Google Maps. If two listings appear, one with reviews and one without, consolidate them; split listings split your reviews and confuse Google about which one to show. The name should be the business name as it appears on your van, with no keywords stuffed into it. Google removes listings that read 'Best Roofer Navan Roofing Repairs'.",
        ],
      },
      {
        h: "Categories and services",
        p: [
          "The primary category decides which searches you appear for. A roofer should be 'Roofing contractor', not 'Contractor'. Add every relevant secondary category, then list your services individually: roof repair, flat roofs, gutters, fascia and soffit, each with a sentence. Google matches searches against those services.",
        ],
      },
      {
        h: "The details that stop the call",
        p: [
          "Opening hours that say 'closed' at 6pm cost you the evening leaks. Set hours that reflect when you answer the phone. Add the service area as the towns you cover, not the whole county, and make sure the phone number is the one that rings in your pocket, with the same number on your website and your Facebook page.",
        ],
      },
      {
        h: "Photos, posts and reviews",
        p: [
          "Add ten real photos of finished jobs, taken on your phone, and add a new one every fortnight. Post once a month, even if it is a photo and two lines. And build the review habit: ask every satisfied customer on the day the job finishes, send the link by text, and reply to every review within a day. Review count and recency are the two things that move you into the top three fastest.",
        ],
        list: [
          "One listing, real business name",
          "Correct primary category, every secondary category that applies",
          "Every service listed with a sentence",
          "Hours that match when you answer",
          "Service area as towns, not the county",
          "One phone number everywhere",
          "Ten real photos, one new every fortnight",
          "A review request the day every job finishes",
        ],
      },
      {
        h: "What it changes",
        p: [
          "A Dublin plumbing company we work with went from invisible to the number one map result for emergency call-outs, and qualified leads rose by 290% in the months after. The profile did a large part of that on its own; the Google Ads did the rest. If you would like to know where your own listing sits today against the three firms above you, request a free growth audit and we will send it as a PDF.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "roofers", "landscapers"],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

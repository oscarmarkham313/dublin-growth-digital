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
  {
    slug: "roofing-lead-cost-ireland",
    title: "What should a roofing lead cost in Ireland?",
    description:
      "Real ranges for Meta and Google roofing leads in Ireland, why storm weeks change the maths entirely, and why cost per lead is the wrong number to judge a campaign on.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Every roofer who rings us asks what a lead should cost, and it is the wrong first question. A €9 lead who wanted a quote for a shed roof is worse than a €60 lead who needs a full re-roof and has already been told roughly what that costs. Here is what the numbers actually look like in Ireland, and what to measure instead.",
    sections: [
    {
      h: "The ranges we actually see",
      p: [
        "On Meta, a well-run roofing campaign in Ireland produces leads somewhere between €8 and €30. The cheap end is a form asking for a name and number, which fills your phone with people who will not answer it. The dear end asks what the roof is, what the problem is and when they need it, and produces a list worth ringing.",
        "On Google Ads, roofing searches are competitive and clicks are not cheap. A lead usually lands between €40 and €120. The conversion rate is far higher because somebody typed the words — they have a problem now, and they are looking for someone to fix it.",
        "Neither number means anything on its own. What matters is cost per quote given, and after that cost per job won.",
      ],
    },
    {
      h: "Storm weeks change the arithmetic completely",
      p: [
        "Roofing demand is not evenly spread. A named storm goes through and an entire county needs the same work in the same fortnight, from people who are not comparing three quotes because water is coming through a ceiling.",
        "In those weeks the cost per lead usually falls and the close rate roughly doubles, because urgency removes the price comparison. The roofers who capture them are the ones with a campaign already built and paused, ready to turn up within hours. Building a campaign during the spike means missing it — by the time it is approved and learning, the week is over.",
      ],
    },
    {
      h: "Repairs and re-roofs are not the same lead",
      p: [
        "A slipped slate and a full re-roof arrive through the same form and differ in value by a factor of twenty. Run as one campaign, your average cost per lead looks respectable and your cost per re-roof is completely invisible.",
        "Split them and the picture usually surprises people. Repair campaigns produce a lot of cheap leads and a modest amount of revenue. Re-roof campaigns produce fewer, dearer leads and most of the money. Most roofers have never seen those two numbers apart.",
      ],
    },
    {
      h: "What to ask on the form",
      p: [
        "Every question costs you a few cheap leads and saves you an hour on the phone. Four do most of the work:",
      ],
      list: [
        "What type of roof is it — pitched, flat, or a mix?",
        "Is this a repair, a replacement, or you are not sure yet?",
        "Is there an active leak?",
        "When are you hoping to have it done?",
      ],
    },
    {
      h: "The honest summary",
      p: [
        "If somebody quotes you a cost per lead without asking what a job is worth to you, they are selling volume rather than work. A roofer turning over €4,000 on an average re-roof can afford a lead price that would bankrupt a business selling €200 repairs.",
        "Work out what a job is worth, what proportion of quotes you win, and what you can therefore afford to pay for a quote. Everything else follows from that.",
      ],
    },
    ],
    related: ["roofers", "damp-proofing", "builders-and-extensions"],
  },
  {
    slug: "google-ads-or-facebook-ads-for-trades",
    title: "Google Ads or Facebook ads for a trades business?",
    description:
      "The honest difference for an Irish trade: Google catches demand that already exists, Meta creates it. Which one to start with, and how to tell when you have picked wrong.",
    date: "2026-09-22",
    minutes: 7,
    intro:
      "This is the question we are asked more than any other, and the answer is genuinely not the same for every trade. It depends on one thing: whether your customer knows they need you before they need you. Get that right and the channel picks itself.",
    sections: [
    {
      h: "The one distinction that decides it",
      p: [
        "Google catches demand that already exists. Somebody has a problem, they type it, and they choose from whoever appears. You are not persuading anyone of anything — you are competing to be the one they ring.",
        "Meta creates demand that was not there this morning. Nobody wakes up intending to get their driveway done. They see a finished job in an estate that looks like theirs, and eight weeks later they are getting quotes. That is a completely different job and it takes longer to pay back.",
      ],
    },
    {
      h: "Start with Google if your work is urgent",
      p: [
        "Emergency plumbing, drainage, locksmiths, roof leaks, electrical faults. Nobody scrolls Instagram deciding what to do about a burst pipe. They search, they ring the first two numbers, and it is over in fifteen minutes.",
        "For these trades search is not merely better, it is close to the only thing that works — and the whole competitive question is whether you appear at that moment and whether somebody answers the phone.",
      ],
    },
    {
      h: "Start with Meta if your work is visual and discretionary",
      p: [
        "Driveways, landscaping, garden rooms, kitchens, bathrooms, attic conversions. The customer has been half-thinking about it for a year and a photograph is what moves them.",
        "These trades usually get a considerably better cost per enquiry on Meta than on Google, because the search volume for 'garden room' is small compared to the number of people who would want one if they saw a good one. The trade-off is that the enquiries are colder and take longer to close.",
      ],
    },
    {
      h: "How to tell you have picked wrong",
      p: [
        "Two signals, and both take about a month to show:",
      ],
      list: [
        "Your Google campaign produces clicks and no calls. Usually means the landing page is wrong or you are bidding on terms with no commercial intent — course searches, job searches, DIY searches.",
        "Your Meta campaign produces plenty of leads who do not answer. Usually means the form asks nothing, so people are filling it in idly. Adding two qualifying questions typically fixes it.",
        "Either campaign produces enquiries you cannot serve — wrong county, wrong job size. That is a targeting problem, not a channel problem, and it is quick to fix.",
      ],
    },
    {
      h: "Why most trades end up running both",
      p: [
        "Once one channel is working, the second usually makes the first cheaper. People who saw you on Facebook search your name on Google. People who clicked your ad and left can be reached again on Meta for a fraction of the original cost.",
        "But start with one. A small budget split across two channels frequently produces two campaigns that never gather enough data to learn, and the most common reason trades conclude that advertising does not work for them.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "driveways-and-paving", "garden-rooms"],
  },
  {
    slug: "website-visitors-but-no-enquiries",
    title: "Your website gets visitors but no enquiries. Here is why.",
    description:
      "The six reasons Irish business websites lose people who were ready to get in touch, and what to fix first. Most of it is not design.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "If people are landing on your site and not contacting you, the problem is almost never that you need more traffic. It is that the traffic you already pay for is leaking, and buying more of it just leaks faster. These are the six causes we find most often, roughly in order of how much they cost.",
    sections: [
    {
      h: "1. It is slow",
      p: [
        "A site taking six seconds on a phone on mobile data has lost a large share of its visitors before they have seen anything. Usually it is uncompressed images uploaded straight from a camera, or a page builder loading a dozen scripts nobody uses.",
        "This is the cheapest thing on this list to fix and frequently the most valuable.",
      ],
    },
    {
      h: "2. The phone number is not obvious",
      p: [
        "Most people contacting a local business want to ring it. If the number is in the footer, in small text, and not tappable on a phone, you are asking someone to work for the privilege.",
        "It should be in the header, on every page, and it should dial when tapped. That single change has lifted enquiry rates by a third on sites we have taken over.",
      ],
    },
    {
      h: "3. It tells but never asks",
      p: [
        "A great many business sites describe the company at length and never once ask the reader to do anything. No obvious next step, no form above the fold, no reason to act today rather than next month.",
        "Every page should have one obvious action. Not five — one.",
      ],
    },
    {
      h: "4. Nothing proves you are real",
      p: [
        "No photographs of actual work, no reviews, no names, no address. A visitor deciding between you and two others will pick whoever feels least risky, and a site with real photographs of finished jobs in recognisable places wins that comparison nearly every time.",
        "Stock photography actively hurts here. People recognise it and it reads as a business with nothing of its own to show.",
      ],
    },
    {
      h: "5. The form asks too much, or too little",
      p: [
        "A twelve-field form is a wall. A form asking only for a name and number produces enquiries nobody can act on.",
        "Four or five fields is usually right, and the questions should be the ones that let you price the job before you ring back.",
      ],
    },
    {
      h: "6. It is out of date in a way people notice",
      p: [
        "Prices from three years ago, services you no longer offer, a news section whose last post is from 2022, a copyright line still reading 2021. Each is small and together they say the business is not really minding the shop.",
        "None of this is a design problem. It is a maintenance problem, and it is why a site that was fine when it was built quietly stops producing enquiries three years later.",
      ],
    },
    ],
    related: ["roofers", "kitchens", "estate-agents"],
  },
  {
    slug: "rank-google-maps-ireland",
    title: "How to rank in the Google map results in Ireland",
    description:
      "What actually decides the local map pack for an Irish business: proximity, reviews and a properly filled-in profile. And the one thing you cannot change.",
    date: "2026-09-22",
    minutes: 7,
    intro:
      "For most local searches in Ireland the map results sit above everything else, and a large share of people never scroll past them. Getting into that box is worth more than any amount of ordinary SEO. Here is what decides it, in the order that matters.",
    sections: [
    {
      h: "Proximity, which you cannot change",
      p: [
        "The single biggest factor is how close your verified address is to the person searching. This is why no business dominates a whole city, and why results change as you walk down the street.",
        "It also means a service-area business with no premises in a town is at a structural disadvantage for searches in that town. Anyone promising you the map pack in a city where you have no address is either mistaken or lying. The realistic goal is to own your own catchment, not the county.",
      ],
    },
    {
      h: "Reviews, which decide everything else",
      p: [
        "Between two businesses at similar distance, reviews decide it — count, average and recency all matter, and recency more than people expect. A profile with thirty reviews and none in the last year looks worse than one with twelve where three arrived last month.",
        "Ask every satisfied customer, send the short review link rather than telling people to search for you, and never offer anything in exchange. Incentivised reviews breach Google's terms and can get the whole profile stripped.",
      ],
    },
    {
      h: "A profile that is actually filled in",
      p: [
        "Most profiles are left at whatever was entered on the day they were created. The ones that rank are complete:",
      ],
      list: [
        "Correct primary category, which matters more than any other single field",
        "Every service listed individually rather than as a paragraph",
        "A description written around what people search for, not a mission statement",
        "Real photographs, added regularly rather than once",
        "Opening hours that are right, including bank holidays",
        "Posts, weekly if you can manage it — almost nobody does this and it is a live signal",
      ],
    },
    {
      h: "Consistency across the web",
      p: [
        "Your name, address and phone number should appear identically everywhere they appear — directories, your own site, your social profiles. Variations confuse the matching, and an old address on a directory you forgot about can quietly hold you back for years.",
        "This is dull and it is worth doing once, properly.",
      ],
    },
    {
      h: "What does not work",
      p: [
        "Keyword-stuffing your business name. It is against the guidelines, competitors report it, and profiles get suspended.",
        "A virtual office or mailbox address to fake a presence in a town. This is the fastest way to lose a verified profile entirely, and it can take the original listing with it.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "electricians", "skin-clinics"],
  },
  {
    slug: "small-business-marketing-budget-ireland",
    title: "How much should a small Irish business spend on marketing?",
    description:
      "A practical way to set a marketing budget when you have no data yet, based on what a customer is worth rather than a percentage of turnover.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Most advice on this answers with a percentage of turnover, which is useless when you are starting out and worse than useless when your margins are unusual. A better approach works from what a customer is actually worth to you.",
    sections: [
    {
      h: "Start from the value of a customer, not turnover",
      p: [
        "Work out two numbers. What is the average job worth in gross profit, not revenue? And how many jobs does a typical customer give you over a few years?",
        "A plumber whose average job is €250 at 50% margin, and who keeps a customer for four jobs, has a customer worth around €500 in profit. A kitchen company with one €20,000 job at 30% has a customer worth €6,000 and will never see them again. Those two businesses should not be spending remotely similar amounts to acquire one.",
      ],
    },
    {
      h: "Decide what you will pay for a customer",
      p: [
        "A reasonable starting point for a small business is paying no more than 15 to 20 percent of a customer's profit value to acquire them. Our plumber can pay up to about €100 for a new customer. The kitchen company can pay well over €1,000 and still be comfortably ahead.",
        "This single number tells you far more than any percentage-of-turnover rule, and it stops the most common mistake in small business advertising: judging a campaign on cost per lead without ever working out what a lead is allowed to cost.",
      ],
    },
    {
      h: "Then work backwards through the funnel",
      p: [
        "If you close one in four quotes, and one in three enquiries becomes a quote, then twelve enquiries make one customer. If a customer can cost €100, an enquiry can cost about €8.",
        "That is your target cost per enquiry, and now you can judge any campaign in a fortnight rather than arguing about it for six months.",
      ],
    },
    {
      h: "How much to start with",
      p: [
        "Enough to get roughly thirty enquiries a month, because below that the platforms cannot learn and you cannot tell signal from noise. For most Irish trades that is somewhere between €300 and €800 a month in ad spend.",
        "Below about €200 a month, advertising rarely works well enough to judge. It is usually better to spend nothing and fix your Google Business Profile and website first — both of which are free and both of which make every euro you eventually spend go further.",
      ],
    },
    {
      h: "What to ignore",
      p: [
        "Percentage-of-turnover rules, which assume every business has the same margins and the same repeat rate.",
        "Anyone quoting a cost per lead before asking what a job is worth to you. They are selling volume, and volume is not the thing you need.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "kitchens", "landscapers"],
  },
  {
    slug: "get-more-customers-tradesman-ireland",
    title: "How to get more customers as a tradesman in Ireland",
    description:
      "The order to do things in when the phone is quieter than it should be, starting with the free work that most trades skip.",
    date: "2026-09-22",
    minutes: 7,
    intro:
      "When work slows the instinct is to start advertising. Frequently that is the third thing to do rather than the first, because two free things usually produce more and cost nothing but an afternoon. Here is the order we would work through it.",
    sections: [
    {
      h: "First: your Google Business Profile",
      p: [
        "For a local trade this is worth more than a website and it costs nothing. Most profiles are half-finished — one category, no services listed, three photographs from four years ago and a description nobody has read since.",
        "Fill in every service separately, add photographs of recent jobs, get the categories right and post occasionally. For a trade with a genuine local catchment this frequently produces more calls within a month than a small advertising budget would.",
      ],
    },
    {
      h: "Second: reviews",
      p: [
        "Between you and the next firm, reviews usually decide it. Ask every customer you finish with, send the short link rather than asking them to search, and ask a few every week rather than twenty at once.",
        "Trades consistently underestimate how willing satisfied customers are to do this. The reason most have few reviews is not reluctance — it is that nobody asked.",
      ],
    },
    {
      h: "Third: make it easy to contact you",
      p: [
        "A tappable phone number on every page. A WhatsApp button, because a great many people would rather message than ring. A form that asks four questions, not twelve.",
        "If people are finding you and not making contact, more advertising only buys you more people who will not make contact.",
      ],
    },
    {
      h: "Then, and only then, advertise",
      p: [
        "Once the free things are done, paid advertising works considerably better, because the profile and the site you are sending people to are now worth landing on.",
        "Start with one channel. Search if your work is urgent, social if it is visual and discretionary. Give it a month and judge it on enquiries you could actually serve, not clicks.",
      ],
    },
    {
      h: "The things that rarely work",
      p: [
        "Shared lead-buying sites, where the same enquiry is sold to four firms and the job goes to whoever rings first and quotes lowest.",
        "Leaflet drops with no way to tell whether they worked.",
        "Posting on social media with no budget behind it and expecting reach. Organic reach for small business pages is a fraction of what it was, and the content is necessary but no longer sufficient.",
      ],
    },
    {
      h: "What good looks like after three months",
      p: [
        "A profile that appears in the map results for your own area. Enough recent reviews that you are the obvious choice locally. A site that turns a reasonable share of visitors into calls. And one advertising channel producing enquiries at a cost you have worked out you can afford.",
        "That is an unglamorous list and it is what actually fills a diary.",
      ],
    },
    ],
    related: ["roofers", "electricians", "painters-and-decorators"],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

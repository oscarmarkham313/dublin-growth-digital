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
      "Real ranges for Meta and Google solar leads in Ireland, why shared leads look cheap and cost more, and what a lead form should ask before you ring.",
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
    title: "How estate agents win vendor instructions with Meta ads",
    description:
      "The seller decides in the last week. The agency that wins the instruction spent the six months before it in the homeowner's feed.",
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
    title: "How to get roofing leads in Ireland without the junk",
    description:
      "How to keep tyre-kickers off the phone, what a roofing lead costs on Google and Meta, and the map-box fix most Irish roofers never make.",
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
    title: "The only marketing number a trades business needs",
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
      "Real ranges for Meta and Google roofing leads in Ireland, why storm weeks change the maths, and why cost per lead is the wrong number to judge on.",
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
      "The honest difference for an Irish trade: Google catches demand that already exists, Meta creates it.",
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
  {
    slug: "nct-marketing-calendar-garages",
    title: "The NCT is the best marketing calendar no garage uses",
    description:
      "Every car in the country has a test date, a proportion fail, and every failure is urgent repair work with a legal deadline.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "There is a recurring, predictable, legally enforced event attached to every car in Ireland, and it generates urgent repair work with a deadline the customer cannot negotiate. Garages treat it as background noise. It is the most under-used opportunity in the trade.",
    sections: [
    {
      h: "What the failure rate actually means for you",
      p: [
        "A substantial share of cars presented for the NCT do not pass first time. Every one of those is a driver who now has a defined problem, a legal deadline and no time to shop around on price.",
        "That is about as close to guaranteed demand as any local trade gets, and the searches that follow it — retest, post-failure repairs, specific failure items — are barely contested because garages assume the work simply arrives.",
      ],
    },
    {
      h: "Three campaigns hide inside one test",
      p: [
        "Most garages that do advertise run one vague servicing campaign. There are three distinct moments and they want different messages.",
      ],
      list: [
        "Before the test — pre-NCT checks, sold on avoiding a failure and a second trip",
        "After a failure — urgent, deadline-driven, and the least price-sensitive work a garage sees all year",
        "The retest itself — quick, cheap, and a reliable way to acquire a customer who then services with you",
      ],
    },
    {
      h: "Why this matters more than a new customer campaign",
      p: [
        "A garage customer is not a transaction. Somebody who trusts you with a repair services with you for years afterwards, which means the real value of winning one is several times the invoice in front of you.",
        "Acquiring that customer through a deadline-driven repair is considerably cheaper than trying to persuade someone to switch garage while their current one is doing nothing wrong.",
      ],
    },
    {
      h: "The list you already own",
      p: [
        "Every garage has hundreds of past customers it has not contacted since the last job, and most of those cars have a test date approaching.",
        "Reminders to that list cost almost nothing and outperform any acquisition campaign, because the trust is already there. The obstacle is never cost — it is that the records live in a diary, a notebook and somebody's memory. Getting them into one place is a day's work that repays itself indefinitely.",
      ],
    },
    ],
    related: ["car-garages"],
  },
  {
    slug: "should-a-physio-clinic-discount-the-first-appointment",
    title: "Should a physio clinic discount the first appointment?",
    description:
      "The discounted first session is the default offer in Irish physiotherapy and it usually costs more than it earns. What to do instead.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Walk through any Irish town and half the physio and chiropractic clinics are advertising a cheap or free initial assessment. It is the default offer in the sector. It is also, for most clinics, a bad one — and the reasons are worth understanding before you copy it.",
    sections: [
    {
      h: "What the discount actually selects for",
      p: [
        "An offer does not just attract people. It attracts a particular kind of person. A discounted assessment attracts someone comparing clinics on price, and somebody who chose you on price will leave for the same reason.",
        "Clinics running this offer typically report plenty of first appointments and poor course completion. That is not a coincidence — it is the offer working exactly as designed.",
      ],
    },
    {
      h: "It also devalues the thing you are best at",
      p: [
        "The assessment is where your expertise is most visible. It is the appointment where you work out what is actually wrong, which is the part a patient cannot get anywhere else.",
        "Pricing it at zero tells the patient it is the least valuable part of the process, and makes the treatment that follows look like the upsell.",
      ],
    },
    {
      h: "What works better",
      p: [
        "Explain what an assessment involves and what a course of treatment looks like. Patients hesitate because they do not know what they are committing to, not because of the price of one session.",
        "Clinics that switch from a discount to an explanation generally see fewer enquiries and more completed courses. Given that a completed course is worth six times a single appointment, that is a trade worth making.",
      ],
    },
    {
      h: "When a discount does make sense",
      p: [
        "There is one case: a brand new clinic with no reviews and no local reputation, where the discount is buying evidence rather than patients. Used deliberately for a defined period, to generate the first twenty reviews, it can be the fastest way out of a standing start.",
        "The mistake is leaving it running for three years after it has served that purpose.",
      ],
    },
    ],
    related: ["physiotherapy"],
  },
  {
    slug: "what-solicitors-can-say-in-advertising-ireland",
    title: "What solicitors can and cannot say in their advertising",
    description:
      "Irish solicitors' advertising is governed by professional rules, and personal injury advertising is restricted specifically.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Most legal marketing advice online is American, and applying it in Ireland will get a firm into difficulty. Solicitors' advertising here operates under professional regulation, with personal injury work restricted specifically and significantly. Plenty of agencies have never read any of it.",
    sections: [
    {
      h: "Start from the restriction, not the tactic",
      p: [
        "The rules exist to stop the profession being sold like a commodity, and they bear most heavily on personal injury. Claims about outcomes, anything that reads as soliciting particular business, and comparisons that imply superiority over named firms all need care or are off the table entirely.",
        "An agency that does not know this will propose a campaign that looks perfectly normal in another sector and creates a regulatory problem for you in a fortnight.",
      ],
    },
    {
      h: "What you are free to do",
      p: [
        "A great deal, and almost none of it is being used. Explaining what areas you practise in, who you typically act for, what a first consultation involves, what a conveyance usually costs and how long it takes — all of that is factual, useful and entirely permissible.",
        "Most firm websites say considerably less than this, which is why the ones that say it plainly stand out immediately.",
      ],
    },
    {
      h: "Conveyancing is the obvious opening",
      p: [
        "Property transactions generate constant search volume with unambiguous intent. The client chooses locally, decides quickly, and is usually anxious about cost and timelines.",
        "It is also unrestricted, and advertised by almost nobody outside the largest firms. A solicitor visible for conveyancing in their own town picks up work that currently goes to whoever the estate agent happened to mention.",
      ],
    },
    {
      h: "Reviews do the reassuring",
      p: [
        "People are more anxious choosing a solicitor than almost any other professional, and no amount of copy addresses that as well as other people's experiences.",
        "For a local firm, a well-maintained Google profile with genuine reviews will out-convert a redesigned website, and it costs nothing but asking.",
      ],
    },
    {
      h: "Where the line sits in practice",
      p: [
        "If you are unsure whether something crosses it, the practical test is whether the claim is verifiable and whether it could be read as a promise about a result. Factual, verifiable and no implied outcome is safe territory.",
        "And the sign-off should always be yours. Any agency that tells you what is compliant, rather than asking you to confirm it, is taking a risk with your practising certificate rather than their own.",
      ],
    },
    ],
    related: ["solicitors"],
  },
  {
    slug: "why-storm-weeks-decide-a-roofers-year",
    title: "Why storm weeks decide a roofer's year",
    description:
      "A handful of days after a named storm produce the highest-intent, least price-sensitive enquiries a roofer ever sees.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Ask a roofer when they made their money last year and a surprising number will name a week rather than a season. Storms concentrate a county's worth of demand into a few days, and what happens in those days is largely decided before the weather arrives.",
    sections: [
    {
      h: "What changes during a storm week",
      p: [
        "Two things move at once. Volume rises sharply, and price sensitivity collapses. Somebody with water coming through a bedroom ceiling is not collecting three quotes.",
        "Close rates in those weeks routinely run at double the normal figure, and cost per enquiry usually falls rather than rises, because the intent is so high that ads convert unusually well.",
      ],
    },
    {
      h: "The preparation problem",
      p: [
        "A new campaign takes time to be approved and longer to learn. By the time it is performing, the week is over and the work has gone to whoever was already visible.",
        "The firms that capture storm weeks have a campaign built and paused, with budget agreed in advance. Turning it up takes minutes. That is the entire difference, and it is not a budget question.",
      ],
    },
    {
      h: "What to have ready",
      p: [
        "Three things, prepared while the weather is fine:",
      ],
      list: [
        "A paused campaign with emergency wording and a phone-first action rather than a form",
        "A decision, made in advance, about how much you will lift the daily budget and for how long",
        "An honest answer about capacity — advertising work you cannot reach for three weeks damages your name locally",
      ],
    },
    {
      h: "After the week",
      p: [
        "The mistake is leaving it running. Storm messaging aimed at a county that has dried out produces expensive, irrelevant clicks.",
        "Switch back to planned work — re-roofs, flat roofs, guttering — while the emergency enquiries are being quoted. The storm fills the diary for a fortnight; the planned campaign is what fills it for the rest of the quarter.",
      ],
    },
    ],
    related: ["roofers"],
  },
  {
    slug: "do-gyms-need-a-january-campaign",
    title: "Do gyms really need a January campaign?",
    description:
      "January is the most expensive month of the year to buy a gym member, and the members bought in it leave fastest. A look at what the numbers actually say.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Every gym in Ireland advertises in January. That is exactly the problem: everyone bidding at once, into the same audience, with the deepest discounts of the year. It is worth asking whether the month deserves the budget it gets.",
    sections: [
    {
      h: "You are paying peak prices for your worst members",
      p: [
        "Two things happen in January. Competition for attention peaks, which drives the cost of reaching anyone up. And the offers are at their deepest, which selects for people choosing on price.",
        "Members acquired on a heavy discount churn faster than any other group. So the month combines the highest acquisition cost with the lowest retention — the worst possible pairing.",
      ],
    },
    {
      h: "The months nobody fights over",
      p: [
        "Late spring and autumn are considerably cheaper and considerably less crowded. The people joining then have decided for their own reasons rather than because a calendar told them to, and they stay longer.",
        "A budget moved out of January into those months usually produces fewer joins and more members still training in six months, which is the only number that pays a gym's rent.",
      ],
    },
    {
      h: "So should you skip January entirely?",
      p: [
        "No. The demand is real and ignoring it hands it to competitors. But the shape of the offer matters more than its size.",
        "An offer built around commitment — a longer initial term, an onboarding block of sessions, a goal-based programme — attracts the same demand without selecting for the people who leave in March.",
      ],
    },
    {
      h: "The part that is not marketing at all",
      p: [
        "Most of what decides whether a January member is still there in June happens in their first three weeks: whether anybody learned their name, whether they knew what to do, whether the place felt like it was for them.",
        "No campaign compensates for that, and gyms that fix it get more from every euro they subsequently spend.",
      ],
    },
    ],
    related: ["gyms-and-fitness"],
  },
  {
    slug: "shared-solar-leads-ireland",
    title: "Why solar leads sold to four installers cost more than they look",
    description:
      "Shared lead sites sell the same homeowner to several Irish installers at once.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Several national sites will sell an Irish solar installer leads at a price that looks perfectly reasonable. The homeowner has filled in one form and is being rung by four companies within the hour. Here is what that actually costs you.",
    sections: [
    {
      h: "The arithmetic nobody does",
      p: [
        "If a lead is sold to four installers, your realistic share of the resulting work is a quarter before anything else is considered — and in practice it is worse, because the job usually goes to whoever rang first or quoted lowest.",
        "A lead at €40 sold four ways is effectively costing you €160 or more per genuine opportunity, and you are competing on speed and price rather than on being the right installer.",
      ],
    },
    {
      h: "What it does to your quoting",
      p: [
        "Being one of four quotes changes how you quote. You price defensively, you strip the specification, and you win the jobs where margin is thinnest.",
        "Installers who move to generating their own enquiries usually report that close rates roughly double even when cost per lead goes up, because the homeowner asked for them specifically.",
      ],
    },
    {
      h: "What your own enquiries look like instead",
      p: [
        "A lead generated in your own name arrives alone. There is no race, the conversation starts with what the homeowner needs rather than what everyone else quoted, and your reputation and reviews are doing work that they cannot do in a four-way comparison.",
        "It is also an asset. The ad account, the creative and the audience data stay with you, which is not true of anything bought from a third party.",
      ],
    },
    {
      h: "Where shared leads still make sense",
      p: [
        "One case: filling genuine capacity gaps at short notice, accepted as low-margin work and priced accordingly.",
        "The failure is building a business on them. When the supplier raises prices or adds a fifth buyer, there is nothing underneath.",
      ],
    },
    ],
    related: ["solar-installers", "heat-pumps"],
  },
  {
    slug: "questions-a-heat-pump-enquiry-form-must-ask",
    title: "The four questions a heat pump enquiry form has to ask",
    description:
      "Heat pump enquiries fail on suitability far more often than price. Four questions asked before the assessment will save an installer real money.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A heat pump assessment costs real time and travel, and a meaningful share of them end with the same conclusion: this house is not ready. That conclusion is almost always predictable from four pieces of information the homeowner could have given you before anybody got in a van.",
    sections: [
    {
      h: "Why this matters more here than in other trades",
      p: [
        "Most trades can quote from a photograph or a phone call. Heat pumps cannot, because suitability depends on the building rather than the job.",
        "A house needing twenty thousand euro of fabric upgrades first is not a customer this year, however keen the homeowner is. Finding that out on site is the single largest avoidable cost in the sector.",
      ],
    },
    {
      h: "The four",
      p: [
        "Each of these removes a distinct category of unsuitable enquiry, and none of them is off-putting to somebody genuinely in the market.",
      ],
      list: [
        "What age is the property? — the strongest single predictor of whether the fabric is ready",
        "What is the current heating system? — tells you about the emitters and the flow temperatures you would be working against",
        "Do you know your BER rating? — not everyone will, but the ones who do are considerably further along",
        "Has insulation work been done, and when? — separates the retrofit-ready from the retrofit-first",
      ],
    },
    {
      h: "What happens to your numbers",
      p: [
        "Raw enquiry volume falls, sometimes sharply, and cost per enquiry rises. Both look like the campaign got worse.",
        "Cost per assessment and cost per install both improve, usually substantially. Which of those you optimise for decides whether the account looks good or makes money.",
      ],
    },
    {
      h: "The enquiries you turn away are not wasted",
      p: [
        "A homeowner told plainly that their house needs insulation first, and why, frequently comes back a year later having done it — and comes back to you rather than to whoever sold them a system that underperformed.",
        "It also makes insulation a natural partner campaign, because the audiences overlap almost entirely.",
      ],
    },
    ],
    related: ["heat-pumps", "insulation"],
  },
  {
    slug: "what-an-accountancy-client-is-worth",
    title: "What an accountancy client is actually worth",
    description:
      "Irish practices consistently underpay to acquire clients because they price against the first year's fee rather than the relationship. The arithmetic is not close.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Ask an accountant what they would pay to win a new client and the answer is usually anchored to one year's fee. Ask how long clients typically stay and the answer is frequently a decade or more. Those two facts do not sit comfortably together.",
    sections: [
    {
      h: "The number that should govern the decision",
      p: [
        "An accountancy client is among the stickiest relationships in professional services. People change accountant reluctantly, usually only after being ignored, and the fee tends to rise as the business grows.",
        "So the figure that should set your acquisition budget is the multi-year profit of the relationship, not the first invoice. For most practices that is several times what they currently assume.",
      ],
    },
    {
      h: "What that permits",
      p: [
        "Once the value is measured properly, a cost per client that felt impossible becomes obviously affordable. Practices routinely walk away from campaigns producing clients at a cost they would happily pay twice over, because they judged it against one year.",
        "The discipline is to measure it once and write it down, so the decision is not re-litigated every time a monthly invoice arrives.",
      ],
    },
    {
      h: "Where the clients actually come from",
      p: [
        "Not from new businesses, mostly. The great majority of new accountancy clients are leaving another practice.",
        "That reframes the message entirely. You are not explaining why somebody needs an accountant. You are addressing the assumption that switching is a hassle, because that assumption is the only thing keeping most dissatisfied clients where they are.",
      ],
    },
    {
      h: "And when",
      p: [
        "Demand concentrates hard in the weeks before filing deadlines, when people who have been putting it off finally act.",
        "A flat monthly spend misses the weeks that convert best and overpays in the months when nobody is thinking about it. Weighting the year around the deadlines is the single easiest improvement most practices can make.",
      ],
    },
    ],
    related: ["accountants"],
  },
  {
    slug: "dental-implant-lead-economics",
    title: "How an Irish dental practice should price an implant lead",
    description:
      "General dentistry and implant work have opposite economics, and averaging them together hides which campaign is paying. A worked example.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A dental practice running one marketing budget across everything is averaging two businesses with almost nothing in common. One is a proximity business defended by reviews; the other is a considered purchase people will travel for. Here is why that distinction decides what you can afford.",
    sections: [
    {
      h: "Two businesses, one building",
      p: [
        "General dentistry is won on being nearby and well reviewed. People choose within a few kilometres, largely from the map results, and rarely switch. Advertising has a low ceiling here because the decision is mostly made before anyone searches.",
        "Implants, orthodontics and full-mouth work behave completely differently. People research for months, compare several practices and will drive an hour. The practice that explains best generally wins.",
      ],
    },
    {
      h: "The worked example",
      p: [
        "Take a check-up worth roughly a hundred euro against an implant case worth several thousand. If both campaigns produce leads at forty euro, one is marginal and the other is extraordinary.",
        "Now suppose the implant lead costs a hundred and fifty and converts one time in four. That is six hundred euro of marketing to win a case worth several thousand — comfortable by any measure, and a figure most practices would reject on instinct because it sounds expensive per lead.",
      ],
    },
    {
      h: "What splitting them reveals",
      p: [
        "Once the campaigns are separated, most practices discover the high-value side was quietly subsidising the routine side, or the reverse — and that they had been optimising the whole account towards whichever produced more leads rather than more revenue.",
        "It also lets you spend confidently on the side that deserves it, instead of applying one cautious budget to both.",
      ],
    },
    {
      h: "A note on what you can say",
      p: [
        "Dental advertising in Ireland carries professional obligations around claims, imagery and pricing, and before-and-after imagery in particular needs care.",
        "Any agency should be writing to those constraints and sending work for your approval rather than assuring you it is fine. Your professional judgement is the one that counts.",
      ],
    },
    ],
    related: ["dentists", "med-spas"],
  },
  {
    slug: "what-a-tradesman-can-afford-to-win-a-job",
    title: "What can a tradesman afford to spend winning one job?",
    description:
      "A simple calculation that settles most arguments about whether advertising is working, using numbers any Irish trade already knows.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Most disagreements about whether marketing is working come from nobody having worked out what a job is allowed to cost to win. It takes about ten minutes and three numbers you already know.",
    sections: [
    {
      h: "The three numbers",
      p: [
        "Gross profit on an average job — not the invoice, what is left after materials and labour. How many quotes you give before one says yes. And how many enquiries it takes to produce a quote worth giving.",
        "Nothing else is needed, and every trade knows all three approximately even if nobody has written them down.",
      ],
    },
    {
      h: "Working it through",
      p: [
        "Say a job leaves you a thousand euro. You win one quote in three, and one enquiry in two is worth quoting. That means six enquiries per job won.",
        "If you are willing to spend a fifth of the profit on winning the work — which is comfortable for most trades — you can afford two hundred euro per job, which is a little over thirty euro per enquiry.",
        "Now any campaign can be judged in a fortnight rather than argued about for six months.",
      ],
    },
    {
      h: "What this stops you doing",
      p: [
        "It stops you rejecting a channel because the cost per lead sounds high, when the jobs it brings are worth four times the alternative.",
        "And it stops you persisting with cheap leads that never convert, which is the more common and more expensive mistake.",
      ],
    },
    {
      h: "The number most trades get wrong",
      p: [
        "Almost everyone overestimates their close rate. Ask ten tradesmen and most will say they win half their quotes; the ones who actually count usually find it is nearer a third.",
        "Counting for a month, honestly, will change the arithmetic more than any change to the advertising.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "electricians", "roofers"],
  },
  {
    slug: "why-kitchen-showrooms-waste-budget",
    title: "Why kitchen showrooms waste half their marketing budget",
    description:
      "Kitchens have the longest consideration period of any home purchase and the highest proportion of enquiries that were never going to buy. Both are fixable.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A kitchen is one of the largest discretionary purchases an Irish household makes, and the decision takes months. That length is what makes the category profitable and also what makes most kitchen advertising wasteful.",
    sections: [
    {
      h: "The showroom hour is the real cost",
      p: [
        "Ad spend is the visible number. The hidden one is designer time: an hour with someone who was browsing, plus the drawing-up afterwards, repeated for every enquiry that was never in the market.",
        "Count those hours for a month and the true cost per order is usually far higher than the advertising report suggests.",
      ],
    },
    {
      h: "Ask about budget before the appointment, not during it",
      p: [
        "The conversation everyone dreads is the one where a designer discovers, forty minutes in, that the customer was thinking of a quarter of the price.",
        "Asking for a budget band in the enquiry form avoids it entirely. It costs you a proportion of enquiries, almost all of which were going to end that way, and it makes every remaining appointment worth having.",
      ],
    },
    {
      h: "The eight weeks nobody advertises into",
      p: [
        "Most of the value in kitchen marketing is not the first click. It is staying visible during the two months between somebody looking and somebody ordering, while they visit three other showrooms.",
        "That is retargeting, it is cheap, and a striking number of kitchen companies have never set it up. They pay full price to find someone and then let them go.",
      ],
    },
    {
      h: "Photograph your own work properly",
      p: [
        "Kitchens sell on images, and manufacturer imagery is recognisable and generic. Your own completed installs, shot in good light with the room tidy, outperform it consistently.",
        "It is also the one asset a competitor cannot copy, which matters in a category where everyone is selling broadly similar units.",
      ],
    },
    ],
    related: ["kitchens", "bathroom-renovations"],
  },
  {
    slug: "insulation-grant-questions-ireland",
    title: "The grant questions every Irish insulation enquiry starts with",
    description:
      "Homeowners come to insulation through the grant, not the insulation. Contractors who answer the grant question first close more surveys.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Nobody wakes up wanting cavity wall insulation. They want a warmer house and a smaller bill, they discover there is a grant, they half understand it, and then they start ringing contractors. By the time they reach you they have usually read three pages and formed two misconceptions.",
    sections: [
    {
      h: "Clarification beats persuasion",
      p: [
        "The enquiry does not need convincing that insulation is worthwhile — they arrived believing it. What they need is to understand which grant applies to their house, what they pay up front and what comes back.",
        "Contractors who lead with that close considerably more surveys than those who lead with technical specification, because they are answering the question actually being asked.",
      ],
    },
    {
      h: "Eligibility belongs in the form",
      p: [
        "Grant eligibility turns on the property — its age, its construction, whether work has already been done. An enquiry from a house that does not qualify costs you a survey and produces nothing.",
        "Three questions in the form remove most of those before anyone travels, and none of them deter a genuine enquiry.",
      ],
    },
    {
      h: "What the one-stop-shop route changed",
      p: [
        "The registered one-stop-shop model reshaped this market by offering homeowners a managed deeper retrofit. It is attractive, and it takes work that used to go to single-measure contractors.",
        "Competing with it on scope is a losing move for most contractors. Competing on being the fastest, simplest route to the single measure somebody wants this month is not, and there is a great deal of that demand.",
      ],
    },
    {
      h: "When to spend",
      p: [
        "Insulation enquiries follow the heating bill. There is a sharp rise from October and a long quiet stretch through summer.",
        "Budget weighted to the cold months produces materially cheaper enquiries than the same money spread evenly, because you are advertising while the problem is being felt rather than remembered.",
      ],
    },
    ],
    related: ["insulation", "heat-pumps"],
  },
  {
    slug: "google-profile-beats-your-website",
    title: "Your Google profile matters more than your website",
    description:
      "It is free, it takes an afternoon, and for a local trade it will usually produce more calls than a redesign. Most profiles are half-finished.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Spend money on a website before fixing your Google Business Profile and you have built a shop window down a side street. For a local trade the profile is the front door, and almost nobody treats it that way.",
    sections: [
    {
      h: "Where the calls actually come from",
      p: [
        "Search for a plumber, an electrician or a garage in any Irish town and the map results occupy the screen. A large share of people choose from that box without ever scrolling to the ordinary results, and a good number tap the call button without visiting any website at all.",
        "Your website is doing less work than you think. The profile is doing more.",
      ],
    },
    {
      h: "What a finished profile looks like",
      p: [
        "Most were filled in once, on the day they were created, and never touched again. A complete one is unusual enough to be a genuine advantage.",
      ],
      list: [
        "The primary category set correctly — it carries more weight than any other field",
        "Every service listed as its own entry rather than buried in a paragraph",
        "A description written around what people search for",
        "Photographs added regularly, not once in 2021",
        "Hours that are actually right, bank holidays included",
        "Posts, even occasionally — a live signal almost nobody uses",
      ],
    },
    {
      h: "The afternoon that pays for itself",
      p: [
        "All of the above is free and takes a few hours. There is no other marketing task available to an Irish trade with that ratio of effort to return.",
        "Once it is done, everything else works better — including the website, because people who find you on the map and then check your site arrive already half-convinced.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "electricians", "car-garages"],
  },
  {
    slug: "when-to-advertise-a-landscaping-business",
    title: "The landscaping year: when to advertise and when to stop",
    description:
      "Irish landscaping demand starts in February and the people planning in winter are the ones with budgets. A month-by-month look.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Landscaping has a shorter selling season than almost any trade in Ireland, and the most common mistake is advertising in it. By the time the weather is good, the people with real budgets have already chosen someone.",
    sections: [
    {
      h: "January to February — where the money is decided",
      p: [
        "Design-and-build enquiries begin well before anything can be planted. Somebody who wants a garden finished by June is talking to landscapers in February, because they know the good ones book out.",
        "Advertising here is cheap, uncontested and reaches the people spending the most. It is also the period most firms sit out entirely.",
      ],
    },
    {
      h: "March to May — the crowded part",
      p: [
        "Everyone advertises now. Costs rise, the enquiries get smaller, and a growing share are people who want a lawn tidied rather than a garden built.",
        "If your book is already filling from the winter campaign, this is the time to shift the message from availability to lead times. Saying you are booking into July is not a deterrent; it is proof.",
      ],
    },
    {
      h: "June to August — stop selling availability",
      p: [
        "Mid-season, most decent firms are full. Advertising availability you do not have irritates callers and wastes budget.",
        "Better uses: maintenance contracts for next year, and content that gets you found by the people who will start planning in January.",
      ],
    },
    {
      h: "September to November — the second window",
      p: [
        "An underrated period. Autumn planting, hard landscaping that does not need good weather, and people who have spent a summer looking at a garden they dislike.",
        "Costs are lower than spring and the enquiries are considerably more serious than August's.",
      ],
    },
    {
      h: "The thing that carries the winter",
      p: [
        "Maintenance. It is unglamorous beside a thirty-thousand-euro build, and it is what pays wages in February.",
        "It also needs entirely separate advertising, because somebody who wants their garden kept tidy is not the same customer as somebody redesigning theirs, and one campaign speaking to both speaks properly to neither.",
      ],
    },
    ],
    related: ["landscapers", "fencing-and-gates", "tree-surgery"],
  },
  {
    slug: "what-to-photograph-on-a-job",
    title: "What to photograph on a job, and why it beats our writing",
    description:
      "Your phone camera is the most valuable marketing tool on the van. A short list of what to capture and what to avoid.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Every agency asks trades for photographs and most get a handful of blurry shots taken at dusk. The gap between that and what actually sells is small, and closing it costs about five minutes a job.",
    sections: [
    {
      h: "Before, during, after — in that order",
      p: [
        "The finished shot on its own is worth far less than the pair. A tidy new driveway is pleasant; the same driveway next to the cracked concrete it replaced is persuasive.",
        "The before photograph takes ten seconds and most people forget it, because at the start of a job nobody is thinking about marketing.",
      ],
    },
    {
      h: "The shots worth taking",
      p: [
        "A short list, and it barely changes by trade.",
      ],
      list: [
        "The before, taken from where the after will be taken",
        "One wide shot showing the whole finished job in context",
        "One close shot showing the standard of the finish — an edge, a joint, a consumer unit",
        "Somebody working, ideally a face. People hire people",
        "The van or a branded item somewhere in one frame, without making it an advert",
      ],
    },
    {
      h: "What ruins a good photograph",
      p: [
        "Poor light, mostly. A job photographed at four in December is unusable; the same job at midday is fine.",
        "Clutter is the other one. Tools, bags, cones and a wheelbarrow in shot make good work look unfinished. Thirty seconds of tidying changes the picture entirely.",
      ],
    },
    {
      h: "Why this outranks the copy",
      p: [
        "Anybody can claim to do good work. A photograph of a genuinely tidy finish in a recognisable estate is evidence, and it is the one asset a competitor cannot copy.",
        "It is also why stock photography actively hurts — people recognise it, and it reads as a business with nothing of its own to show.",
      ],
    },
    ],
    related: ["driveways-and-paving", "plastering", "tilers"],
  },
  {
    slug: "should-a-tiler-quote-per-square-metre",
    title: "Should a tiler quote a rate in their advertising?",
    description:
      "Publishing a per-metre rate filters hard and costs you enquiries. For most Irish tilers that is the right trade, but not always.",
    date: "2026-09-22",
    minutes: 4,
    intro:
      "This comes up with every tiler, plasterer and flooring contractor we work with, and the answer is not universal. Publishing a rate changes who contacts you, which is the whole point and also the risk.",
    sections: [
    {
      h: "The case for putting it up",
      p: [
        "Price is what people are trying to establish, and they will establish it one way or another — by ringing you, or by ringing somebody who published it.",
        "A stated rate removes the enquiries that were never going to proceed, and it means the calls you do take start from an agreed basis rather than a negotiation.",
      ],
    },
    {
      h: "The case against",
      p: [
        "A rate invites comparison against work that is not comparable. Somebody quoting considerably less may be quoting for worse preparation, cheaper adhesive and no guarantee, and the homeowner cannot tell.",
        "It also caps you. If a job is awkward, or the substrate is poor, a published rate is the number you will be held to.",
      ],
    },
    {
      h: "What usually resolves it",
      p: [
        "A from-price rather than a flat rate, paired with one sentence about what is included. It anchors the conversation without committing you to a figure on a job you have not seen.",
        "The firms that suffer are the ones publishing a bare number with no context, because they are then competing purely on it.",
      ],
    },
    {
      h: "The exception",
      p: [
        "If you deliberately work at the higher end — large-format, wetrooms, complicated substrates — a published rate can cost you the enquiries you actually want, because it makes the conversation about price before it is about capability.",
        "In that case, show the work instead and let the photographs do the qualifying.",
      ],
    },
    ],
    related: ["tilers", "flooring", "plastering"],
  },
  {
    slug: "estate-agents-losing-instructions",
    title: "Why estate agents lose instructions they had already won",
    description:
      "Most lost instructions are not lost at the valuation. They are lost in the week afterwards, and it is usually a follow-up problem rather than a fee problem.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Agents tend to analyse lost instructions at the point of decision — the fee, the valuation figure, the competing agent. In our experience the decision was frequently made before any of that, in the gap between the appraisal and the follow-up.",
    sections: [
    {
      h: "The week that decides it",
      p: [
        "A vendor who has had three agents through the door in a fortnight is comparing them on very little. All three said a number, all three sounded confident.",
        "What separates them is what arrives afterwards and how quickly. The agent whose written appraisal lands the same evening, with the comparables attached and the next step spelled out, is remembered. The one who sends it on Thursday is not.",
      ],
    },
    {
      h: "Fee is rarely the real reason",
      p: [
        "Vendors say fee because it is a comfortable answer that does not require criticising anybody. It is occasionally true.",
        "More often the vendor went with the agent who felt most likely to actually sell the house, and speed of response is the clearest available signal of that before any work has been done.",
      ],
    },
    {
      h: "What to fix first",
      p: [
        "Time from appraisal to written follow-up. Measure it honestly for a month. If it is more than a day, that is your highest-value fix and it costs nothing.",
        "Then the content of it: comparables, a marketing plan specific to that house, and a clear next step rather than a figure and a fee schedule.",
      ],
    },
    {
      h: "Where marketing comes in",
      p: [
        "Advertising generates appraisals; it cannot win instructions. If half your appraisals are going elsewhere, spending more on lead generation makes the leak bigger rather than smaller.",
        "Fix the follow-up first. Then the same spend produces roughly twice the instructions, which is a cheaper improvement than doubling the budget.",
      ],
    },
    ],
    related: ["estate-agents"],
  },
  {
    slug: "filling-a-quiet-tuesday-salon",
    title: "How a salon or clinic should fill a quiet Tuesday",
    description:
      "An empty chair is revenue that cannot be recovered later. Blanket discounting is the expensive way to fix it, and there are cheaper ones.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Saturdays sell themselves. The problem in almost every Irish salon, barbers and treatment clinic is the middle of the week, and the standard response — a discount across the board — usually costs more than the gap it fills.",
    sections: [
    {
      h: "Why a general discount loses money",
      p: [
        "A twenty percent offer available all week is largely taken up by people who were going to book at full price anyway, most of them at the weekend. You have discounted your busiest day to fill your quietest.",
        "The gap on Tuesday remains, and you have paid for the privilege.",
      ],
    },
    {
      h: "Make the offer specific to the gap",
      p: [
        "The same twenty percent, available only between eleven and three on Tuesday and Wednesday, does something completely different. It reaches the people whose schedules are flexible — retired clients, shift workers, parents during school hours, people working from home.",
        "Those clients are frequently loyal and often become regular midweek bookings, which fixes the problem permanently rather than once.",
      ],
    },
    {
      h: "Then use the list you already have",
      p: [
        "Most salons have hundreds of past clients and contact none of them. A message to people who have not been in for three months, offering a midweek slot, costs nothing and routinely outperforms paid advertising.",
        "It is also the fastest thing on this list to do — it can be done this afternoon.",
      ],
    },
    {
      h: "The structural fix",
      p: [
        "Rebooking in the chair before the client leaves. It is not marketing and it does more for midweek occupancy than any campaign.",
        "Clinics and salons that make it standard practice rather than an occasional afterthought see the quiet hours fill on their own within a couple of cycles.",
      ],
    },
    ],
    related: ["skin-clinics", "med-spas", "physiotherapy"],
  },
  {
    slug: "lead-versus-enquiry",
    title: "A lead and an enquiry are not the same thing",
    description:
      "Two words used interchangeably across Irish marketing, describing two different things with different values. The distinction decides what you should pay.",
    date: "2026-09-22",
    minutes: 4,
    intro:
      "Agencies and clients routinely use these words to mean whatever suits the conversation. That vagueness is where a great deal of money goes missing, because the two things have wildly different values.",
    sections: [
    {
      h: "The distinction",
      p: [
        "An enquiry is somebody making contact. A lead, properly used, is somebody making contact who is plausibly able to buy what you sell.",
        "A form filled in by a person outside your area, wanting a service you do not offer, at a budget a fifth of your minimum, is an enquiry. It is not a lead, and reporting it as one makes a campaign look twice as good as it is.",
      ],
    },
    {
      h: "Why it matters for what you pay",
      p: [
        "A report saying forty leads at twelve euro sounds excellent. If half were out of area and a third were the wrong job, you have thirteen real opportunities at roughly thirty-seven euro.",
        "Neither number is wrong. Only one of them lets you decide anything.",
      ],
    },
    {
      h: "What to insist on",
      p: [
        "Ask for the count of enquiries you could actually serve, and the cost of those. Any agency reporting raw form fills without that breakdown is either not looking or would rather you did not.",
        "It is also the number that lets you compare two channels honestly, which is usually when the comparison becomes uncomfortable for whichever one was producing volume.",
      ],
    },
    ],
    related: ["roofers", "kitchens", "insurance-brokers"],
  },
  {
    slug: "what-vets-should-advertise",
    title: "What a veterinary practice should advertise",
    description:
      "Most practice marketing promotes vaccinations and dental month. The practices that grow advertise something else entirely.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Look at almost any Irish veterinary practice's advertising and you will find individual services being promoted like items in a shop. It treats a relationship business as a transactional one, and it leaves most of the value on the table.",
    sections: [
    {
      h: "What a client is worth",
      p: [
        "A registered client is not one consultation. It is years of vaccinations, check-ups, dental work, and the occasional expensive episode — for one animal, and frequently for several across a family's lifetime.",
        "Once that figure is worked out properly, what you can afford to spend attracting one changes completely, and almost always upwards.",
      ],
    },
    {
      h: "The two moments people choose a vet",
      p: [
        "Almost nobody switches practice on a whim. The choice gets made twice: when a new animal arrives, and when somebody moves house.",
        "Outside those windows, loyalty is high and advertising largely bounces off — which is why general awareness campaigns for practices tend to disappoint.",
      ],
    },
    {
      h: "Where the registrations actually come from",
      p: [
        "Breeders, rescues, groomers and trainers, who are talking to new owners at exactly the moment the decision is being made.",
        "Those relationships outperform advertising by a wide margin and cost nothing but time. Targeting recent movers covers the other window.",
      ],
    },
    {
      h: "The one thing worth saying plainly",
      p: [
        "Out-of-hours arrangements. It is among the most common reasons people leave a practice, and among the least clearly communicated.",
        "Saying exactly what you cover and what happens at three in the morning builds more trust than any offer, and it prevents the worst kind of complaint — the one from somebody who assumed.",
      ],
    },
    ],
    related: ["veterinary"],
  },
  {
    slug: "damp-proofing-trust-problem",
    title: "Damp proofing has a trust problem. Use it.",
    description:
      "Plenty of Irish homeowners have heard of someone sold a chemical course they did not need. Naming that directly converts better than pretending it does not exist.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Almost every homeowner considering damp work has heard a story — a neighbour, a relative, a programme on the television — about somebody sold an expensive treatment for a problem that turned out to be condensation. That scepticism is in the room before you arrive.",
    sections: [
    {
      h: "Diagnosis is the product, not the cure",
      p: [
        "A homeowner with a stain spreading on a bedroom wall does not know whether they have rising damp, penetrating damp or condensation. Those have different causes, different fixes and very different prices.",
        "Advertising a survey that establishes which is happening is both more honest and more effective than advertising a treatment, because it answers the question actually being asked.",
      ],
    },
    {
      h: "Say the thing your competitors will not",
      p: [
        "Tell people plainly that a significant proportion of damp complaints turn out to be condensation and ventilation, which is cheaper to fix and does not need a chemical course.",
        "It costs you some jobs. It wins more, because it is the single clearest signal that you are not the kind of firm the stories are about.",
      ],
    },
    {
      h: "The survey fee question",
      p: [
        "Free surveys lift enquiry volume sharply and fill the diary with ventilation problems in houses an hour away.",
        "A modest fee, refunded against any work, filters hard and signals that the survey has value. Most established firms in this trade end up there.",
      ],
    },
    {
      h: "The work nobody advertises for",
      p: [
        "Pre-purchase damp reports for people buying older houses. Quick, well-priced, low-risk, and a steady stream of them exists in every town.",
        "Almost no firm advertises for it, which makes it about as uncontested as work gets in this trade.",
      ],
    },
    ],
    related: ["damp-proofing", "drainage"],
  },
  {
    slug: "when-to-stop-advertising",
    title: "When to stop advertising",
    description:
      "Running campaigns while you are booked out damages your reputation and wastes money. Knowing when to pause is part of doing this properly.",
    date: "2026-09-22",
    minutes: 4,
    intro:
      "Agencies rarely raise this because it reduces their own numbers. But there are situations where the correct advice is to turn the campaign off, and a trade that never pauses is usually burning money and goodwill at the same time.",
    sections: [
    {
      h: "When the diary is genuinely full",
      p: [
        "Advertising work you cannot start for two months produces frustrated callers who ring somebody else and remember that you wasted their time.",
        "If you are booked out, either pause or change the message to lead times. The second is better — saying you are booking into November is credible, and it holds the people willing to wait.",
      ],
    },
    {
      h: "When you cannot answer the phone",
      p: [
        "A campaign generating calls nobody picks up is the most expensive thing in small business marketing. Every unanswered call is a lead paid for and given away.",
        "If you are on the tools all day with no one on the phone, fix that before adding budget. It is not a marketing problem and no campaign solves it.",
      ],
    },
    {
      h: "When the season is wrong",
      p: [
        "Stoves in June. Exterior painting in December. Landscaping availability in August when you are full.",
        "Spreading budget evenly across a year feels prudent and is usually the opposite, because it overspends in the months nobody is buying.",
      ],
    },
    {
      h: "When it has not been given a chance",
      p: [
        "The opposite error, and more common. A campaign switched off after ten days has not finished learning and has told you nothing.",
        "A month is the minimum before any judgement is worth making. Turning things off early and calling it a test is how most businesses conclude that advertising does not work for them.",
      ],
    },
    ],
    related: ["landscapers", "stoves-and-fireplaces", "painters-and-decorators"],
  },
  {
    slug: "first-ten-minutes-after-an-enquiry",
    title: "The first ten minutes after an enquiry decide the job",
    description:
      "Speed of response is the cheapest competitive advantage available to an Irish trade, and most are losing on it without knowing.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Two businesses with identical advertising, identical pricing and identical quality will produce very different results if one answers in five minutes and the other in five hours. It is the least glamorous factor in lead generation and among the most decisive.",
    sections: [
    {
      h: "What the customer is doing while you wait",
      p: [
        "They filled in three forms, not one. Whoever responds first is the one they speak to while the problem is still front of mind.",
        "By the time a second firm calls back the following morning, the conversation has usually moved on — and the caller now has a quote to compare yours against rather than an open question.",
      ],
    },
    {
      h: "It matters most exactly where trades are weakest",
      p: [
        "The enquiries that reward speed most are the urgent ones — leaks, faults, blockages, lockouts. Those are also the ones that arrive while you are on the tools with your hands full.",
        "That conflict is the real problem, and it is not solved by wanting to answer faster.",
      ],
    },
    {
      h: "What actually fixes it",
      p: [
        "Something between the enquiry and you, so nothing waits.",
      ],
      list: [
        "An automatic text acknowledging the enquiry and saying when you will ring — cheap, and it buys an hour of goodwill",
        "A call-answering service for the hours you are genuinely unreachable, which costs far less than the leads currently going unanswered",
        "WhatsApp as an option, because a great many people would rather type than ring and will answer a message at eight in the evening",
      ],
    },
    {
      h: "Measure it before you spend more",
      p: [
        "Take one month and record the gap between every enquiry arriving and somebody making contact. Most trades are surprised, and not pleasantly.",
        "If the average is hours, no increase in advertising budget will help. You would simply be buying more of what you are already failing to answer.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "drainage", "electricians"],
  },
  {
    slug: "facebook-ads-didnt-work-for-us",
    title: "Why Facebook ads did not work for you, and why that is normal",
    description:
      "Almost every Irish business that says this is telling the truth. The reasons are consistent and none of them are that the platform does not work.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "This is the most common sentence we hear on a first call, and it is almost always accurate — the campaign genuinely did not work. What did not happen is anybody establishing why. Four causes account for nearly all of it.",
    sections: [
    {
      h: "It was switched off too early",
      p: [
        "A campaign needs a number of conversions before the platform can find more of the right people. Below roughly thirty results a month it never gets there, and what you are looking at is noise rather than performance.",
        "Two weeks and a hundred euro is not a test. It is an expensive way to learn nothing, and it is the single most common version of this story.",
      ],
    },
    {
      h: "The form asked nothing",
      p: [
        "A lead form requesting a name and a phone number is effortless to complete, which is exactly the problem. People fill it in idly and do not answer the call.",
        "Adding two qualifying questions typically halves the leads and multiplies the ones worth ringing. Most businesses experience the first half of that and conclude the platform is broken.",
      ],
    },
    {
      h: "It sent traffic somewhere that could not convert",
      p: [
        "The ad did its job and delivered somebody to a slow page with the phone number in the footer and no obvious next step.",
        "The campaign gets blamed because it is the thing with a number attached, but nothing was wrong upstream of the landing page.",
      ],
    },
    {
      h: "It was the wrong channel for that business",
      p: [
        "If your customer only needs you at the moment something breaks, social is a poor fit and search is the answer. Nobody scrolls Instagram deciding what to do about a blocked drain.",
        "For those trades, the honest conclusion is that Facebook was never going to work, and an agency that sold it anyway was selling what it had rather than what you needed.",
      ],
    },
    {
      h: "How to tell which one it was",
      p: [
        "Look at three numbers from the old campaign: how long it ran, how many results it produced in total, and what proportion of those you could actually serve.",
        "Those three answers identify the cause almost every time, and they also tell you whether it is worth trying again.",
      ],
    },
    ],
    related: ["roofers", "kitchens", "gyms-and-fitness"],
  },
  {
    slug: "how-long-seo-takes-ireland",
    title: "How long SEO actually takes in Ireland",
    description:
      "An honest timeline, what happens at each stage, and the three things that decide whether you land in three months or twelve.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Everybody selling SEO is incentivised to be vague about this, and everybody buying it wants a number. Here is the honest version, with the caveats that actually matter rather than the ones that protect the agency.",
    sections: [
    {
      h: "Days one to seven: nothing visible",
      p: [
        "New pages are not in Google yet. They have to be discovered, crawled and assessed, and nothing you look at in the first week tells you anything.",
        "Search Console also lags two to three days behind, so even once something happens you will not see it immediately. Checking daily at this stage produces anxiety and no information.",
      ],
    },
    {
      h: "Weeks one to four: indexed, ranked nowhere",
      p: [
        "Pages get crawled and start appearing, typically somewhere between position 40 and 80. That looks like failure and is not — it is Google placing something it has no signals about yet.",
        "What you should see is impressions starting to appear for terms you were invisible for. Clicks at this stage will be near zero, because almost nobody scrolls to page five.",
      ],
    },
    {
      h: "Months two to four: movement, if the foundations are right",
      p: [
        "Pages that deserve to move start moving. Long-tail terms land first — specific, low-competition phrases with clear intent — while the head terms stay out of reach.",
        "This is the stage where you learn whether the content was good enough. If nothing has moved by month four, something is wrong and more pages will not fix it.",
      ],
    },
    {
      h: "Months four to twelve: the competitive terms",
      p: [
        "Head terms in a contested market need more than good pages. They need other sites linking to you and a review profile that matches your competitors.",
        "This is where most SEO projects stall, and it is almost never a content problem by that point.",
      ],
    },
    {
      h: "The three things that decide your timeline",
      p: [
        "Everything above assumes the basics are right. These are what move a site from the slow end of that range to the fast end:",
      ],
      list: [
        "Competition in your actual market — a Waterford trade ranks far faster than a Dublin one for the same effort",
        "Whether anybody links to you, which for most small Irish businesses is nobody",
        "Reviews, which decide local results more than anything on your website",
      ],
    },
    {
      h: "What a reasonable promise sounds like",
      p: [
        "Indexed within a fortnight. Long-tail impressions inside two months. Competitive positions in six to twelve, conditional on links and reviews arriving.",
        "Anyone promising page one in thirty days is either talking about a term nobody searches or is not planning to be around when you check.",
      ],
    },
    ],
    related: ["estate-agents", "roofers", "med-spas"],
  },
  {
    slug: "what-a-weekly-marketing-report-should-contain",
    title: "What a weekly marketing report should actually contain",
    description:
      "Four numbers and one sentence. If your report has thirty charts and you cannot tell whether last week was good, it is not a report.",
    date: "2026-09-22",
    minutes: 4,
    intro:
      "Agency reporting is frequently designed to look like work rather than to inform a decision. A useful report fits on one page and answers one question: was last week better or worse, and what are we doing about it.",
    sections: [
    {
      h: "The four numbers",
      p: [
        "Everything else is supporting detail.",
      ],
      list: [
        "Enquiries you could actually serve — not form fills, not clicks",
        "What each one cost",
        "How many became a quote, a booking or a job",
        "What you spent",
      ],
    },
    {
      h: "The one sentence",
      p: [
        "What changed this week and why. Not a list of tasks — an explanation of the decision.",
        "'Paused the Tuesday ad set, it was producing enquiries at three times the others' is a sentence. 'Ongoing optimisation of campaign performance' is not.",
      ],
    },
    {
      h: "What does not belong",
      p: [
        "Impressions, reach, engagement rate, follower growth, click-through rate as a headline. All of them can rise while enquiries fall.",
        "They have diagnostic uses — a collapsing click-through rate tells you creative is tiring — but they are not results and should not be presented as though they were.",
      ],
    },
    {
      h: "The test",
      p: [
        "Read the report and try to answer: was last week better than the week before, and do I need to do anything?",
        "If you cannot, the report failed regardless of how much work went into it.",
      ],
    },
    ],
    related: ["roofers", "insurance-brokers", "dentists"],
  },
  {
    slug: "why-your-cost-per-lead-went-up",
    title: "Your cost per lead went up. Here is what it usually means.",
    description:
      "Six causes, in rough order of likelihood, and which ones are actually a problem.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A rising cost per lead sets off alarms and frequently should not. Some causes are genuine problems, one is a sign things are going well, and telling them apart takes about ten minutes.",
    sections: [
    {
      h: "The creative has worn out",
      p: [
        "The most common cause by a distance, particularly on Meta. The same audience has seen the same ad enough times to stop noticing it.",
        "The tell is frequency rising while click-through falls. The fix is new creative, not a bigger budget.",
      ],
    },
    {
      h: "You tightened the qualification",
      p: [
        "If somebody added questions to the form, cost per lead should rise. That is the point — you are buying fewer, better enquiries.",
        "This looks identical to a problem on a chart and is the opposite of one. Cost per job won is the number that tells you which happened.",
      ],
    },
    {
      h: "The season turned",
      p: [
        "Half the trades we work with have a demand curve steep enough that the same campaign costs twice as much in the wrong month.",
        "If your cost per lead rose in the month your industry goes quiet, the campaign is behaving correctly and the budget should probably move.",
      ],
    },
    {
      h: "A competitor started spending",
      p: [
        "Auction prices are set by whoever else is bidding. One new entrant with a large budget can move your costs without anything changing on your side.",
        "Usually temporary. Worth watching for a fortnight before reacting.",
      ],
    },
    {
      h: "The landing page broke",
      p: [
        "A form that stopped submitting, a page that got slow, a tracking tag that stopped firing. Costs appear to spike because conversions stopped being recorded.",
        "Always check this before changing anything in the ad account — it is the cheapest cause to rule out and an embarrassing one to miss.",
      ],
    },
    {
      h: "The account is learning again",
      p: [
        "Significant edits reset the learning phase. Costs rise for a few days and settle.",
        "Which is why constant tinkering is expensive: every change buys another few days of poor delivery.",
      ],
    },
    ],
    related: ["plumbers-and-heating", "kitchens", "gyms-and-fitness"],
  },
  {
    slug: "questions-to-ask-a-marketing-agency",
    title: "The questions to ask before signing with a marketing agency",
    description:
      "Nine questions, and what the answers tell you. Most of them are about ownership and exit rather than strategy.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Agency pitches are good at describing what will be done and vague about what happens if it does not work. These are the questions worth asking, and roughly what a straight answer sounds like.",
    sections: [
    {
      h: "About ownership",
      p: [
        "This is where most of the risk sits, and almost nobody asks.",
      ],
      list: [
        "Whose name will the ad account be in? — yours, or you are renting your own audience data",
        "Who owns the website and the domain? — you, with the logins, from day one",
        "If I leave, what do I take with me? — everything, and a straight answer takes one sentence",
        "Is there a minimum term? — if yes, ask why the work needs one",
      ],
    },
    {
      h: "About the money",
      p: [
        "Two questions that separate most agencies.",
      ],
      list: [
        "Is ad spend paid through you or directly by me? — directly, to the platform, from your own account",
        "What exactly does the fee cover, and what is extra? — get it in writing before you sign",
      ],
    },
    {
      h: "About the work",
      p: [
        "Who will actually be doing it, and will I speak to them? In a small agency the honest answer is a name. In a larger one it is frequently an account manager relaying messages, which is fine if you know that going in.",
        "Then: what will you tell me if it is not working, and when? An agency that has thought about this has an answer ready.",
      ],
    },
    {
      h: "The one that reveals the most",
      p: [
        "Is there a situation where you would tell me not to spend money with you?",
        "Anyone who cannot name one either has not thought about it or is not going to tell you. Every honest agency has a list — businesses whose economics do not support advertising, trades where the channel is wrong, clients who cannot fulfil the work they already have.",
      ],
    },
    ],
    related: ["insurance-brokers", "solicitors", "accountants"],
  },
  {
    slug: "ads-to-website-or-landing-page",
    title: "Should your ads go to your website or a landing page?",
    description:
      "The answer depends on one thing, and it is not what most people think. A short decision guide.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Agencies tend to push landing pages because they are easy to build and easy to bill for. Sometimes that is right and frequently it is not, and the deciding factor is narrower than the debate suggests.",
    sections: [
    {
      h: "Send to your website when the decision involves trust",
      p: [
        "Anybody choosing a tradesman, a clinic, a solicitor or an agency wants to look around. They want to see other work, other services, an about page and a real address.",
        "A single landing page with no way to explore feels thin for those decisions and converts worse, even though it is technically more focused.",
      ],
    },
    {
      h: "Send to a landing page when the offer is narrow and urgent",
      p: [
        "One specific thing, one price, one action, and no reason to browse. An emergency callout, a single promotion, a webinar sign-up.",
        "Here the website is a distraction and stripping the choices genuinely helps.",
      ],
    },
    {
      h: "The real problem is usually neither",
      p: [
        "Most campaigns sending traffic to a website are not failing because it is a website. They are failing because the page they land on is the homepage.",
        "Somebody clicking an ad about bathroom renovation should land on the bathroom page, not on a general homepage where they have to find it again. That single fix outperforms building a landing page most of the time.",
      ],
    },
    {
      h: "A practical rule",
      p: [
        "If you already have a decent site, send traffic to the most relevant page on it and measure. Build a landing page only when you can name what the website page is failing to do.",
        "Building one first is solving a problem you have not diagnosed.",
      ],
    },
    ],
    related: ["bathroom-renovations", "kitchens", "med-spas"],
  },
  {
    slug: "what-happens-when-you-leave-an-agency",
    title: "What happens to your marketing when you leave an agency",
    description:
      "The things that quietly belong to somebody else, and how to find out before it matters.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Most people discover what they own at the worst possible moment, which is the week they decide to leave. It is a twenty-minute check and worth doing while the relationship is good.",
    sections: [
    {
      h: "The four things that should be yours",
      p: [
        "If any of these sit in an agency's account, you are renting rather than owning.",
      ],
      list: [
        "The ad account, with your business as the owner and them as a user",
        "The domain, registered to you, with the login",
        "The website files and hosting, in your name",
        "Analytics and Search Console, as the property owner",
      ],
    },
    {
      h: "Why the ad account matters most",
      p: [
        "An ad account carries the history — conversion data, audiences, what the algorithm has learned about who buys from you. Rebuilding that takes months and costs real money in worse performance while it relearns.",
        "If the account belongs to the agency, leaving means starting from nothing. Plenty of agencies rely on that without ever saying it.",
      ],
    },
    {
      h: "The website trap",
      p: [
        "A site built on an agency's platform or hosting, with no access for you, cannot be moved. The practical options become paying to rebuild or staying.",
        "Ask for the hosting login. If there is a reason you cannot have it, that is the answer.",
      ],
    },
    {
      h: "How to check, today",
      p: [
        "Log into each of the four things above yourself. Not a dashboard the agency gave you — the actual account.",
        "If you cannot log in, you do not own it. That is worth knowing now rather than during a disagreement.",
      ],
    },
    {
      h: "Leaving well",
      p: [
        "Give notice, ask for access transfers in writing, and check each one has actually happened before the final invoice is paid.",
        "A decent agency will do all of this without friction, because they expected to be asked.",
      ],
    },
    ],
    related: ["accountants", "solicitors", "it-support"],
  },
  {
    slug: "budgeting-a-seasonal-business",
    title: "Budgeting a marketing year that is not flat",
    description:
      "Most Irish trades have a demand curve, and most budgets ignore it. How to set spend against a season instead of a calendar.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Dividing an annual budget by twelve is the default and it is wrong for a majority of the businesses we work with. Demand is not evenly distributed, so spend should not be either.",
    sections: [
    {
      h: "Find your actual curve",
      p: [
        "Take last year's enquiries or invoices and plot them by month. Most trades are surprised by how pronounced it is.",
        "Stoves and chimney sweeps make most of their money in about ten weeks. Landscaping decides its year in February. Gyms peak in January and pay the most for it. Powerwashing effectively stops in winter.",
      ],
    },
    {
      h: "Spend ahead of the peak, not during it",
      p: [
        "The instinct is to advertise when the phone is busy, because that feels like momentum. It is usually the most expensive moment to buy attention, because every competitor is doing the same.",
        "The money is in the weeks just before, when the people who will buy are deciding and nobody else is talking to them yet.",
      ],
    },
    {
      h: "Change the message when you fill up",
      p: [
        "Once the diary is full, availability is the wrong thing to advertise. Switch to lead times.",
        "Saying you are booking into November is not a deterrent — it is proof, and it holds the people willing to wait rather than sending them to a competitor with immediate availability and a reason for it.",
      ],
    },
    {
      h: "Use the quiet months for the things that compound",
      p: [
        "Content, reviews, photographs, the Google profile, the website. All of it is cheaper to do when you are not busy and all of it makes next season's spend work harder.",
        "The alternative — advertising into a month when nobody is buying — is the single most common waste we find in trade accounts.",
      ],
    },
    ],
    related: ["stoves-and-fireplaces", "landscapers", "powerwashing"],
  },
  {
    slug: "how-to-ask-for-google-reviews",
    title: "How to ask for Google reviews without being awkward about it",
    description:
      "The ask, the timing, the link, and what to do about a bad one. For local businesses this is the highest-return hour available.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Most businesses with few reviews do not have unhappy customers. They have customers nobody asked. It is the cheapest thing on any marketing list and the one most consistently skipped.",
    sections: [
    {
      h: "Send the short link, never an instruction",
      p: [
        "Google Business Profile, Read reviews, Get more reviews, and copy the short link. Send that.",
        "Telling somebody to search for you on Google and leave a review loses roughly half of them at each step. The link removes every step but one.",
      ],
    },
    {
      h: "Ask at the moment of relief",
      p: [
        "Not a week later. The right moment is when the job is finished and the customer is visibly pleased — the leak stopped, the room looks right, the car passed.",
        "For a trade that is standing in the room. For a clinic it is at the desk. For a service business it is the day the thing they were worried about stopped being a worry.",
      ],
    },
    {
      h: "The wording that works",
      p: [
        "Short, personal, no pressure, and an easy out. 'Would you mind leaving us a quick review? Here is the link — a line or two is perfect, and no bother at all if you would rather not.'",
        "Never offer anything in exchange. It breaches Google's terms, and reviews obtained that way can take the whole profile down with them.",
      ],
    },
    {
      h: "Pace it",
      p: [
        "Five a week, not thirty at once. A profile that goes from two reviews to forty in a fortnight looks manufactured and Google filters accordingly.",
        "Steady also looks better to a human reading them, because recency is visible on the profile.",
      ],
    },
    {
      h: "What to do about a bad one",
      p: [
        "Reply, once, calmly, in public. Acknowledge the specific thing, say what you did about it, and offer to take it offline.",
        "You are not writing for the reviewer. You are writing for the next person who reads it, and a measured reply to an unfair review frequently does more good than the review did harm.",
      ],
    },
    ],
    related: ["car-garages", "dentists", "restaurants-and-cafes"],
  },
  {
    slug: "why-your-competitor-outranks-you",
    title: "Why your competitor outranks you, and how to pass them",
    description:
      "Four reasons, three of which are fixable. How to work out which one applies to you in about twenty minutes.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "The question comes up on nearly every first call, usually with a specific competitor named. It is answerable, and the answer is rarely the one people expect.",
    sections: [
    {
      h: "They have been there longer",
      p: [
        "A domain that has existed for a decade, with pages that have been in the index for years, carries accumulated trust that a new site does not.",
        "This is the one you cannot shortcut. You can beat it, but you beat it on relevance and specificity rather than by out-existing them.",
      ],
    },
    {
      h: "People link to them and not to you",
      p: [
        "Check by searching for their business name and seeing where else it appears — directories, local news, suppliers, association pages.",
        "For most small Irish businesses, both of you have almost none, and whoever gets the first ten has a real advantage. It is the most under-exploited gap in local search here.",
      ],
    },
    {
      h: "Their reviews are better",
      p: [
        "For anything decided in the map results, this is frequently the whole answer. Count theirs, count yours, look at the dates.",
        "A competitor with thirty recent reviews against your four is not outranking you because of their website.",
      ],
    },
    {
      h: "Their page is genuinely better for that search",
      p: [
        "Look at the page that actually ranks, not their homepage. Is it specifically about the thing being searched, or is it a general services page?",
        "Frequently they win because they have a page about exactly that, and you have a paragraph about it. That is the most fixable of the four.",
      ],
    },
    {
      h: "Working out which applies",
      p: [
        "Search the term. Look at the page that ranks, their review count and date, and whether anybody links to them.",
        "One of the four will be obvious. Then fix that one rather than doing everything at once, because doing everything at once means never knowing which worked.",
      ],
    },
    ],
    related: ["roofers", "solicitors", "skin-clinics"],
  },
  {
    slug: "pricing-jobs-when-leads-come-from-ads",
    title: "How to price jobs when your leads come from advertising",
    description:
      "Marketing cost is a cost of sale, and most trades never put it in the number. What happens when you do.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A tradesman who spends on advertising and prices as though they do not is quietly absorbing the cost out of margin. It is usually invisible until a busy year turns out not to have made any money.",
    sections: [
    {
      h: "Work out the cost per job, not per lead",
      p: [
        "If enquiries cost twenty euro and you win one in five, each job carries a hundred euro of marketing before anything else.",
        "That is a real cost of sale, exactly like materials, and it belongs in the quote rather than in the hope that volume covers it.",
      ],
    },
    {
      h: "It is usually smaller than people fear",
      p: [
        "On a four thousand euro job, a hundred euro of acquisition is two and a half percent. Most trades discount more than that without thinking about it.",
        "Naming the number tends to reduce anxiety about advertising rather than increase it, because the figure is almost always less alarming than the vague sense of it.",
      ],
    },
    {
      h: "It changes which work you want",
      p: [
        "Once the cost is visible, small jobs look different. A two hundred euro repair carrying a hundred euro of acquisition is not a job worth advertising for, even though it is a perfectly good job when it walks in the door.",
        "That is an argument for qualifying harder, not for stopping — and it is why job-size questions on a form pay for themselves.",
      ],
    },
    {
      h: "What not to do",
      p: [
        "Do not add a line to the customer's quote for marketing. It reads badly and invites a conversation nobody wants.",
        "Build it into your rate the way you build in insurance, van costs and dead time, which is what it is.",
      ],
    },
    ],
    related: ["roofers", "electricians", "plastering"],
  },
  {
    slug: "ad-account-restricted-what-to-do",
    title: "Your ad account got restricted. What to do, in order.",
    description:
      "The common causes, what the appeal process actually involves, and how to reduce the chance of it happening twice.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "A restricted or paused ad account is alarming and usually recoverable. The mistakes that turn it into a long outage are almost always made in the first hour.",
    sections: [
    {
      h: "First, find out which thing happened",
      p: [
        "They look similar and are not. A payment failure pauses delivery until billing is fixed and is not a policy matter at all. A policy restriction is about something in an ad, a page or the account's history. A full disable is rarer and more serious.",
        "Read the notification properly before doing anything. People frequently appeal a billing problem, which achieves nothing and wastes days.",
      ],
    },
    {
      h: "Do not create a new account",
      p: [
        "The single most damaging reaction. Platforms detect it, and it tends to convert a recoverable restriction into a permanent one across everything connected to you.",
        "Fix the account you have, however slow that feels.",
      ],
    },
    {
      h: "Common causes worth checking",
      p: [
        "Most restrictions come from a short list.",
      ],
      list: [
        "A payment method that expired or was declined — by far the most common, and not a policy issue",
        "Before-and-after imagery in health, beauty or fitness, which is restricted",
        "Text implying personal attributes — you, your condition, your situation",
        "A landing page that does not match the ad, or is unreachable",
        "Unusual account changes: new payment method, new admin, a sudden budget jump",
      ],
    },
    {
      h: "Appealing",
      p: [
        "Appeals are reviewed quickly and briefly. Be specific about what you changed rather than arguing the decision was wrong.",
        "If the cause was creative, remove it first and say you have. An appeal that asks for reconsideration while the ad is still running gets declined.",
      ],
    },
    {
      h: "Reducing the odds next time",
      p: [
        "A backup payment method on the account, two admins rather than one, and notifications that reach somebody who reads them.",
        "That last one matters more than people expect. Accounts sit paused for weeks because the only alert went to an address nobody checks, and the leads that were already paid for go cold in the meantime.",
      ],
    },
    ],
    related: ["med-spas", "skin-clinics", "gyms-and-fitness"],
  },
  {
    slug: "what-good-looks-like-after-ninety-days",
    title: "What good looks like ninety days into working with an agency",
    description:
      "A checklist for the end of the first quarter, so you are judging the work rather than the feeling.",
    date: "2026-09-22",
    minutes: 5,
    intro:
      "Three months is long enough to know whether something is working and short enough that changing course is still cheap. These are the things worth checking, and none of them require you to understand advertising.",
    sections: [
    {
      h: "You know your numbers",
      p: [
        "How many enquiries you get, what they cost, and how many turn into work. If you still cannot answer those after ninety days, that is the finding.",
        "It is also the minimum. An agency that has not established those numbers has not started.",
      ],
    },
    {
      h: "Tracking exists and you have seen it",
      p: [
        "Analytics installed, conversions recorded, and ideally call tracking if most of your enquiries arrive by phone.",
        "Ask to see the account rather than a screenshot. This is the most common place where things turn out not to have been set up at all.",
      ],
    },
    {
      h: "Something has been turned off",
      p: [
        "A campaign that has run unchanged for ninety days has not been managed. Something should have been paused, cut or rebuilt because it was not working.",
        "If everything is still running exactly as launched, ask what has been learned.",
      ],
    },
    {
      h: "You have been told something you did not want to hear",
      p: [
        "A channel that is wrong for you, a budget too small to judge, a website losing the traffic, a month that went badly.",
        "Ninety days of exclusively good news means either extraordinary luck or an agency managing your mood rather than your account.",
      ],
    },
    {
      h: "The trend, not the month",
      p: [
        "Individual months are noisy. Look at the three together: is cost per enquiry falling, is quality rising, is the proportion you can actually serve improving?",
        "If all three are flat after ninety days, and nothing structural is blocking it, that is a real conversation to have.",
      ],
    },
    ],
    related: ["estate-agents", "insurance-brokers", "car-garages"],
  },
  {
    slug: "google-business-profile-checklist-ireland",
    title: "The Google Business Profile checklist most Irish businesses fail",
    description:
      "Fifteen things on a Google Business Profile that decide whether you appear in the map results, and which of them almost every Irish small business leaves blank.",
    date: "2026-09-23",
    minutes: 7,
    intro:
      "The map results sit above everything else on a phone, and for a local business they are worth more than the blue links underneath. Google decides who appears mostly on proximity, prominence and relevance, and the only one of those three you directly control is how completely you have filled in your profile. Most Irish businesses have filled in about a third of it.",
    sections: [
      {
        h: "The fields that actually matter",
        p: [
          "Your primary category does more work than anything else on the profile. Google matches searches to categories before it matches them to your description, so a business listed as Contractor when it should be listed as Roofing contractor is invisible for the searches that matter. Change it and nothing else, and you will usually see movement.",
          "Secondary categories help, but only where they are genuinely accurate. Adding six unrelated ones dilutes the primary signal rather than broadening your reach.",
        ],
      },
      {
        h: "Services and service areas",
        p: [
          "If you travel to customers rather than serving them at a premises, set your service area to the towns you actually cover and hide your address. A service-area business showing a home address in a housing estate looks wrong and ranks for the wrong place.",
          "Then list your services individually. Not 'plumbing' but boiler repair, bathroom installation, leak detection, power flushing. Each one is a phrase somebody searches, and each one is a field Google reads.",
        ],
      },
      {
        h: "The things nobody fills in",
        p: [
          "Opening hours including bank holidays. Attributes such as wheelchair access or free parking. The business description, which should say what you do and where, not that you are passionate about quality. Photographs, which need to be yours and recent.",
          "Every one of these is a field Google can read and a question a customer might have. Leaving them blank is not neutral, it is a gap your competitor has filled.",
        ],
        list: [
          "Primary category set to the most specific accurate option",
          "Service area set to real towns, address hidden if you travel",
          "Every service listed individually",
          "Opening hours, including bank holidays",
          "At least twenty of your own photographs, added over time not all at once",
          "Description that names what you do and the areas you cover",
          "Products or price ranges where they apply",
          "Messaging turned on only if somebody will answer it",
        ],
      },
      {
        h: "Photographs and posts are not decoration",
        p: [
          "Profiles with regularly added photographs get more views and more calls, and the effect is not subtle. Adding twenty images in one afternoon and never returning is far less useful than adding two a week for a year.",
          "Posts matter less than photographs but they cost nothing. A short note about a job you finished, with a picture, is enough.",
        ],
      },
      {
        h: "What will not work",
        p: [
          "Keyword-stuffing your business name is against the rules, and competitors report it. So do fake addresses, and Google has become good at spotting a virtual office.",
          "The profile is one of the few places in marketing where doing the boring thing thoroughly beats being clever, because the ranking factors are largely mechanical.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "estate-agents"],
  },
  {
    slug: "how-to-answer-a-bad-review",
    title: "How to answer a bad review without making it worse",
    description:
      "How to reply to a negative Google review: what to say, what never to say, and why the reply is written for everyone reading it, not the reviewer.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "A bad review feels personal and the instinct is to defend yourself. That instinct is almost always wrong, not because the reviewer is right but because you are not writing to them. You are writing to the next forty people who read it while deciding whether to ring you.",
    sections: [
      {
        h: "Who the reply is actually for",
        p: [
          "The reviewer has already made their judgement and will rarely change it. The audience is everyone who reads the review afterwards, and what they are assessing is not whether you were at fault but how you behave when something goes wrong.",
          "A calm, specific, non-defensive reply to an unfair review is more persuasive than a page of five-star ratings, because it is the only evidence available about what happens when a job goes badly.",
        ],
      },
      {
        h: "The structure that works",
        p: [
          "Thank them, acknowledge the specific issue, state briefly what happened or what you have changed, and offer to continue the conversation off the platform. Four sentences is plenty.",
          "Avoid explaining at length. A long reply reads as defensive regardless of how reasonable it is, and readers assume the longer side is the guilty one.",
        ],
        list: [
          "Thank them by name if they used one",
          "Acknowledge the specific problem, not 'your experience'",
          "Say what you have done or will do",
          "Offer a direct contact to resolve it",
          "Stop",
        ],
      },
      {
        h: "What never to do",
        p: [
          "Do not dispute facts in public, even when you are right. Do not mention the amount they paid, what they said on the phone, or anything about their behaviour. Do not imply they are lying. Do not reply while angry, which means not replying the same day.",
          "And do not offer a refund in exchange for removal in writing. It reads badly if screenshotted, and on some platforms it breaches the terms.",
        ],
      },
      {
        h: "The review you cannot answer",
        p: [
          "Sometimes the review is from somebody who was never a customer, or is plainly abusive. Those can be reported, and Google does remove a proportion of them, though slowly and inconsistently.",
          "Report it once, reply politely in the meantime, and move on. Pursuing it further costs more time than it is worth.",
        ],
      },
      {
        h: "The real fix is volume",
        p: [
          "One poor review among six is damaging. One among sixty is invisible and even mildly reassuring, because a business with no criticism at all looks curated.",
          "If a bad review has hurt you, the answer is not to fight it. It is to ask the next twenty satisfied customers for a review, which most businesses never do.",
        ],
      },
    ],
    related: ["restaurants-and-cafes", "car-garages", "dentists"],
  },
  {
    slug: "should-you-buy-shared-leads",
    title: "Should you buy shared leads?",
    description:
      "What lead platforms actually sell, why a €15 lead sold to four contractors costs more than a €60 exclusive one, and when buying them does make sense.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Every trade in Ireland gets the same call: leads, ready to go, pay per lead, no commitment. The price sounds excellent compared to running your own advertising. The arithmetic underneath is worth doing properly before you sign up, because it is not the comparison it appears to be.",
    sections: [
      {
        h: "What you are actually buying",
        p: [
          "Most lead platforms sell the same enquiry to three, four or five businesses. You are not buying a customer, you are buying a place in a race, and the customer has been told to expect several calls.",
          "That changes the economics completely. If a lead costs €15 and is sold to four contractors, one of you converts it, so the true cost per job is at least €60 before you have driven anywhere.",
        ],
      },
      {
        h: "Why conversion rates are lower than you expect",
        p: [
          "A homeowner expecting four calls behaves differently from one who rang you directly. They compare on price, because that is the only variable they can see across four near-identical quotes.",
          "So shared leads push you toward competing on price with people you have never met, on a job you have not seen. That is the worst position in any trade.",
        ],
      },
      {
        h: "The honest comparison",
        p: [
          "Your own campaign produces an exclusive enquiry, from somebody who chose you, who is not being rung by three competitors, and who arrives on your website having seen your work.",
          "It costs more per enquiry and converts at a much higher rate, and the customer is not price-anchored against three other quotes. When people compare shared leads with their own advertising, they usually compare the wrong numbers.",
        ],
        list: [
          "Shared: low price per lead, low conversion, price-led customer, no asset built",
          "Own campaign: higher price per lead, higher conversion, exclusive, and it compounds",
          "Compare cost per WON JOB, never cost per lead",
        ],
      },
      {
        h: "When they genuinely make sense",
        p: [
          "Filling gaps in a slow month when the alternative is idle staff. Testing whether demand exists in a new area before committing to a campaign. Or a business with spare capacity and a very fast, very good sales process that reliably beats three competitors on the phone.",
          "Those are real cases. What does not work is building a business on them, because you own nothing at the end of it and the platform controls your supply.",
        ],
      },
      {
        h: "The thing nobody mentions",
        p: [
          "Every euro spent on a shared lead buys one job. Every euro spent on your own site, your own reviews and your own campaigns makes the next euro cheaper.",
          "That is the actual difference, and it only shows up after a year or two — which is precisely why the platforms never frame it that way.",
        ],
      },
    ],
    related: ["roofers", "solar-installers", "builders-and-extensions"],
  },
  {
    slug: "what-a-good-lead-form-asks",
    title: "What a good lead form asks (and what it should never ask)",
    description:
      "The five questions that separate a real job from a tyre-kicker, why every extra field costs you enquiries, and how to decide which ones are worth the loss.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Every field you add to a lead form reduces the number of people who complete it. That is not an argument for asking nothing — it is an argument for knowing exactly what each question is buying you. A form that asks four good questions will produce fewer, better enquiries than one that asks for a name and a number.",
    sections: [
      {
        h: "The trade-off, stated plainly",
        p: [
          "Fewer fields means more enquiries of lower average quality. More fields means fewer enquiries of higher average quality. Neither is right in general; it depends entirely on whether your constraint is volume or time.",
          "If you are short of work, ask less. If you are drowning in quotes that go nowhere, ask more. Most businesses have the setting backwards.",
        ],
      },
      {
        h: "The questions that earn their place",
        p: [
          "Timing is the single most useful question, because it separates people who are doing something from people who are thinking about something. Budget is the second, and it is uncomfortable precisely because it works.",
          "Then location, because it decides whether you can even take the job, and scope, because it tells you whether to send a quote or a surveyor.",
        ],
        list: [
          "When do you want this done?",
          "Roughly what budget do you have in mind?",
          "Where is the property, and what is the Eircode?",
          "What exactly needs doing?",
          "Have you had quotes already?",
        ],
      },
      {
        h: "What to never ask",
        p: [
          "Anything you do not need in order to decide whether to proceed. Title, company name for a domestic job, how they heard about you, marketing consent buried in a required checkbox.",
          "And never ask for information you could look up yourself. Asking a homeowner for their property type when you have the Eircode is a field spent on nothing.",
        ],
      },
      {
        h: "Order matters more than people think",
        p: [
          "Put the easy, non-threatening questions first and the contact details last. Somebody who has answered three questions about their job is considerably more likely to give you a phone number than somebody asked for it immediately.",
          "The budget question, if you use one, works best as a range to select rather than a number to type.",
        ],
      },
      {
        h: "The follow-up is part of the form",
        p: [
          "A perfectly designed form is worthless if the enquiry sits unread until the evening. In most trades the first business to respond wins a disproportionate share of jobs.",
          "Before adding any fields, check how quickly you actually reply. That number usually matters more than anything on the form.",
        ],
      },
    ],
    related: ["roofers", "windows-and-doors", "kitchens"],
  },
  {
    slug: "meta-or-google-which-first",
    title: "Meta or Google: which should a small business run first?",
    description:
      "A straightforward way to decide which channel to start with, based on whether people search for what you sell or have to be shown it.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Almost every small business asks this and almost every agency answers with 'both'. That is usually self-serving. With a limited budget you should start with one, do it properly, and add the second when the first is working. Which one depends on a single question about your customers.",
    sections: [
      {
        h: "The question that decides it",
        p: [
          "Do people search for what you sell at the moment they need it? If your boiler fails, you search. If your roof leaks, you search. If you need a solicitor, you search.",
          "But nobody searches for a hot tub, a new kitchen or a landscaped garden at the moment the idea occurs to them. Those are shown, not sought. That distinction decides the channel.",
        ],
      },
      {
        h: "Start with Google when demand is urgent",
        p: [
          "Emergency trades, repairs, professional services with a deadline, anything with a legal or safety trigger. The person is typing the words, they want it solved today, and intent is as high as it ever gets.",
          "Google costs more per click and converts far better, because you are catching somebody at the end of the decision rather than the start.",
        ],
      },
      {
        h: "Start with Meta when demand is created",
        p: [
          "Home improvement, anything visual, anything discretionary, anything seasonal. Also anything in a rural county where search volume alone will not fill a campaign.",
          "Meta reaches people before they are searching, which is the only way to reach them at all for a category people do not think to look up.",
        ],
        list: [
          "Google first: boiler repair, emergency roofing, drain clearance, solicitors, vets",
          "Meta first: kitchens, landscaping, blinds, valeting, salons, gyms, tourism",
          "Either: most trades in a large city, where both have enough volume",
        ],
      },
      {
        h: "The budget threshold",
        p: [
          "Below roughly a thousand euro a month in ad spend, splitting across both channels usually means neither gathers enough data to optimise. One channel with a real budget beats two with half a budget each.",
          "Above that, adding the second channel is normally the highest-return move available, because you start catching the same customer at two different stages.",
        ],
      },
      {
        h: "What actually goes wrong",
        p: [
          "Most campaigns that fail do not fail because the channel was wrong. They fail because the website did not convert, the phone was not answered, or the lead form asked nothing useful.",
          "Fix those before switching channels. Changing platform rarely fixes a problem that was never about the platform.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "kitchens", "landscapers"],
  },
  {
    slug: "how-much-should-a-small-business-spend-on-ads",
    title: "How much should a small business actually spend on ads?",
    description:
      "A method for setting an advertising budget from the job value you need rather than from a percentage of turnover, and the point at which spending more stops helping.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most advice on advertising budgets is a percentage of turnover, which is useless if you do not already know whether your advertising works. A better method starts from the other end: what a job is worth, how many you need, and what you can afford to pay to win one.",
    sections: [
      {
        h: "Work backwards from a job",
        p: [
          "Take your average job value and your gross margin. If a job is worth €3,000 and your margin is 40%, the job contributes €1,200. If you are willing to spend a quarter of that to win it, you can afford €300 to acquire a customer.",
          "Then work out how many enquiries it takes you to win one job. If it is four, you can afford €75 a lead. That number, not a percentage of turnover, is your actual budget constraint.",
        ],
      },
      {
        h: "Then decide how many jobs you want",
        p: [
          "If you want six more jobs a month and you can afford €300 per job, your budget is €1,800 plus management. That is a real number derived from your own economics rather than an industry rule of thumb.",
          "If that figure is more than you can spend, the answer is usually not to spend less. It is to improve the conversion rate so each job costs less to win.",
        ],
        list: [
          "Average job value x gross margin = contribution per job",
          "Decide what share of that you will spend to win one",
          "Divide by your enquiry-to-job conversion rate",
          "That is your affordable cost per lead",
          "Multiply by the number of jobs you want",
        ],
      },
      {
        h: "The floor nobody mentions",
        p: [
          "Below about €500 a month in ad spend, most campaigns cannot gather enough data to improve. The platforms need a certain volume of conversions before their optimisation does anything useful.",
          "Spending €200 a month across two channels is generally worse than spending nothing, because it costs money and teaches you nothing.",
        ],
      },
      {
        h: "The ceiling nobody mentions either",
        p: [
          "Every market has a point where more budget stops buying more customers and simply buys the same customers more often. In a small county that ceiling arrives quickly.",
          "When cost per lead climbs steadily as you increase budget, you have found it. The answer then is a new channel, a wider area, or a better conversion rate — not more money into the same campaign.",
        ],
      },
      {
        h: "What to do in month one",
        p: [
          "Set the budget from the arithmetic above, run it for a full month without changing it, and judge it on enquiries and jobs rather than on clicks.",
          "Changing budget or targeting every few days is the most common reason a campaign never settles. It needs a month to be worth reading.",
        ],
      },
    ],
    related: ["roofers", "solar-installers", "gyms-and-fitness"],
  },
  {
    slug: "why-your-ads-stopped-working",
    title: "Why your ads stopped working",
    description:
      "Six reasons a campaign that was producing leads goes quiet, in the order worth checking, and how to tell a real problem from normal fluctuation.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "A campaign that was producing enquiries goes quiet for a fortnight and the instinct is to change everything. That is usually the worst response, because most of the causes are identifiable and half of them are not the campaign at all.",
    sections: [
      {
        h: "First, check it is real",
        p: [
          "Two weeks is not a trend in a business doing fifteen leads a month. Random variation alone will produce quiet fortnights regularly, and reacting to them is how good campaigns get broken.",
          "Compare the same period against the previous three months rather than against last week, and look at whether spend also fell. If spend dropped, the platform is telling you something; if spend held and leads fell, something changed in the response.",
        ],
      },
      {
        h: "Creative fatigue",
        p: [
          "In a small county you can exhaust your audience quickly. The same advert shown to the same twenty thousand people for three months stops working, and frequency in the reporting will show it climbing.",
          "The fix is new creative, not a new budget. New photographs of recent jobs are usually enough; it does not need to be a rebrand.",
        ],
      },
      {
        h: "Something broke",
        p: [
          "Forms stop submitting. Tracking gets removed in a website update. A phone number changes. A landing page starts returning an error on mobile only.",
          "This is more common than people expect and it is invisible unless somebody checks. Submit your own form once a week; it takes a minute and it catches the most expensive failure mode there is.",
        ],
        list: [
          "Submit your own lead form and confirm the email arrives",
          "Ring your own number from a mobile",
          "Check the landing page on a phone, not a desktop",
          "Confirm the ad account has not been restricted or the card declined",
          "Check whether a competitor has started bidding hard",
        ],
      },
      {
        h: "The market changed",
        p: [
          "Seasonality is the obvious one, and it is sharper in Ireland than people allow for. A new competitor bidding aggressively is another, and it shows up as rising cost per click rather than falling impressions.",
          "Both are real and neither is fixed by panicking. Seasonality is planned around; a new competitor is answered with better conversion rather than a bidding war you may not win.",
        ],
      },
      {
        h: "Or the follow-up slipped",
        p: [
          "The most common cause of a campaign appearing to fail is that enquiries are arriving and not being answered quickly, so fewer turn into jobs and it feels like fewer leads.",
          "Check the leads received, not the jobs won, before concluding the advertising stopped working. They are frequently different problems.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "landscapers"],
  },
  {
    slug: "tracking-phone-calls-from-ads",
    title: "How to know which ads actually made the phone ring",
    description:
      "Why most small businesses cannot tell which advertising produced their calls, the simplest ways to fix it, and what the GDPR position is in Ireland.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "For most trades and service businesses the majority of enquiries arrive as phone calls, and the majority of phone calls are untracked. That means the reporting shows form submissions, the business knows the phone rang more, and nobody can connect the two. It is the single biggest measurement gap in small business advertising.",
    sections: [
      {
        h: "Why it matters more than it sounds",
        p: [
          "If half your enquiries are calls and you only count forms, your cost per lead looks twice as bad as it is. Campaigns get switched off for underperforming when they were working.",
          "Worse, you cannot tell which campaign produced the calls, so budget gets moved toward whatever happens to generate forms rather than toward whatever generates business.",
        ],
      },
      {
        h: "The simple methods, in order of effort",
        p: [
          "Ask. 'How did you hear about us' is imperfect, because people misremember, but it is free and it is better than nothing.",
          "Use a distinct number in your advertising. A separate mobile or a second line used only on ads tells you exactly how many calls came from advertising, with no software at all.",
        ],
        list: [
          "Ask every caller and log it — free, imperfect, still useful",
          "A dedicated number used only in ads — cheap and unambiguous",
          "Call tracking with dynamic number insertion — accurate, shows which campaign",
          "Click-to-call tracking in the ad platforms — free, catches mobile taps only",
        ],
      },
      {
        h: "Dynamic number insertion",
        p: [
          "This swaps the number shown on your website depending on how the visitor arrived, so a call from a Google Ads visitor shows a different number from an organic one. It is the only method that attributes calls to specific campaigns reliably.",
          "It costs a modest monthly fee and it is the right answer for a business spending meaningfully on ads. Below a few hundred euro a month it is probably not worth the complexity.",
        ],
      },
      {
        h: "The GDPR position",
        p: [
          "Call recording is personal data processing and requires a lawful basis and, in practice, notification at the start of the call. Call tracking without recording is far simpler — you are recording that a call happened and from which source, not its content.",
          "If you record calls, tell callers at the start, say why, and set a retention period. If you only need attribution, do not record; you do not need to and it avoids the whole question.",
        ],
      },
      {
        h: "What to do with the answer",
        p: [
          "Once you can see which campaigns produce calls, the usual discovery is that one campaign is carrying the account and another has been quietly wasting money for months.",
          "That single reallocation typically pays for the tracking many times over in the first quarter.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "car-garages", "solicitors"],
  },
  {
    slug: "gdpr-basics-for-irish-small-business-websites",
    title: "GDPR basics for an Irish small business website",
    description:
      "What a small business website genuinely has to do about cookies, forms and data — without the scare tactics, and without pretending the rules do not apply.",
    date: "2026-09-23",
    minutes: 7,
    intro:
      "Most Irish small business websites are not compliant, and most of the advice about it is either sold by someone with a product or so vague it is useless. Here is the practical version: what actually applies to a small site, in plain terms. This is general information rather than legal advice, and anything unusual is worth a solicitor's time.",
    sections: [
      {
        h: "Cookies and consent",
        p: [
          "The rule is prior consent. Analytics, advertising pixels and anything that tracks a visitor must not load until the visitor agrees. A banner that says 'by continuing you accept' is not consent, and neither is a banner that loads the trackers and then asks.",
          "Accept and Reject must be equally easy. A prominent Accept with a hidden Reject is the most common failure on Irish sites and it is one the Data Protection Commission has been explicit about.",
        ],
      },
      {
        h: "What counts as necessary",
        p: [
          "Strictly necessary cookies do not need consent — the ones that keep a session alive or remember a basket. Analytics is not strictly necessary, however useful you find it. Neither is a Meta pixel.",
          "The practical consequence is that your analytics will under-report once you do this properly. That is the correct number, not a loss.",
        ],
      },
      {
        h: "Contact and enquiry forms",
        p: [
          "You need a lawful basis, which for an enquiry form is usually that processing is necessary to respond to the request. You do not need consent to reply to somebody who contacted you.",
          "You do need to say what you do with the data, how long you keep it, and who else sees it — which includes the form provider, your email host and anyone else in the chain.",
        ],
        list: [
          "Say what you collect and why, in plain language",
          "Name the third parties: form provider, email host, analytics, ad platforms",
          "State a retention period and actually apply it",
          "Keep marketing consent separate from the enquiry itself",
          "Give a contact point for data requests",
        ],
      },
      {
        h: "Marketing email",
        p: [
          "An enquiry is not consent to a newsletter. If you want to send marketing, ask separately with an unticked box, and keep a record of when and how consent was given.",
          "There is a narrow exemption for existing customers being sold similar products, but it is narrower than most businesses assume and it still requires an opt-out in every message.",
        ],
      },
      {
        h: "What actually happens if you ignore it",
        p: [
          "For a small business, the realistic risk is a complaint rather than a fine, and complaints usually come from a competitor or a disgruntled customer rather than from a regulator sweeping the internet.",
          "The more immediate cost is commercial: enterprise customers and public sector buyers increasingly ask, and a site with no privacy notice at all is an easy reason to be dropped from a shortlist.",
        ],
      },
    ],
    related: ["solicitors", "accountants", "it-support"],
  },
  {
    slug: "what-a-website-needs-to-convert",
    title: "What a website actually needs in order to convert",
    description:
      "The seven things that decide whether a visitor rings you, in the order they matter — and the design choices that look good and cost enquiries.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most small business websites are judged on whether the owner likes looking at them. The only question that matters is whether a stranger who lands on it rings you. Those are different problems, and they frequently pull in opposite directions.",
    sections: [
      {
        h: "Speed, before anything else",
        p: [
          "A site that takes five seconds on a phone on rural coverage has lost a third of its visitors before they see the design. This is the single most common fault we find and the least visible, because the people who leave never appear in your enquiry figures.",
          "Large uncompressed images are the usual culprit, followed by a slideshow nobody asked for and four tracking scripts.",
        ],
      },
      {
        h: "Say what you do and where, above the fold",
        p: [
          "A visitor decides in a couple of seconds whether they are in the right place. A headline that says 'Quality craftsmanship since 1998' does not tell them. 'Roof repairs and re-roofing across Kildare and north Dublin' does.",
          "Name the service and name the area. It feels blunt and it converts far better than anything clever.",
        ],
      },
      {
        h: "Proof, and it has to be yours",
        p: [
          "Photographs of your actual work, dated and local, do more than any claim about standards. Stock images of somebody else's kitchen are recognised instantly and cost you credibility.",
          "Reviews should be visible on the page, not hidden on a testimonials tab. Most visitors will never click to a second page.",
        ],
        list: [
          "Fast on a phone, tested on a real phone",
          "Service and area stated in the first line",
          "Real photographs of your own recent work",
          "Reviews visible on the main pages",
          "A phone number that dials on tap, in the header",
          "A short form that asks four useful questions",
          "Coverage area named, so people know whether to ring",
        ],
      },
      {
        h: "Make contact obvious and easy",
        p: [
          "The number should be tappable and in the header on every page. The form should be short. If you answer messages, offer WhatsApp, because a lot of people would rather message than call.",
          "Anything that adds a step between deciding to contact you and doing it will cost enquiries.",
        ],
      },
      {
        h: "What looks good and loses money",
        p: [
          "Full-screen video headers that delay the content. Scroll animations that hide text until it drifts in. Clever navigation that hides the services. Carousels, which almost nobody clicks past the first slide.",
          "None of these are wrong in principle. They are wrong when they sit between a visitor and the information they came for, which on a small business site is nearly always.",
        ],
      },
    ],
    related: ["builders-and-extensions", "kitchens", "estate-agents"],
  },
  {
    slug: "how-to-photograph-your-own-work",
    title: "How to photograph your own work with a phone",
    description:
      "A short, practical method for getting usable before-and-after photographs on a job, which is the cheapest marketing improvement available to most trades.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "The single biggest difference between trades whose advertising works and trades whose advertising does not is usually photographs. Not the campaign, not the budget, not the copywriting. A modern phone is more than good enough; what is missing is a habit and about four rules.",
    sections: [
      {
        h: "Take the before shot before you start",
        p: [
          "This is the one everybody forgets, and without it the after shot means nothing. It takes ten seconds and it doubles the value of every job you photograph.",
          "Stand where you will stand for the after shot and take it from there. Matching angles is what makes the pair persuasive.",
        ],
      },
      {
        h: "The four rules",
        p: [
          "Same position, same height, same framing, similar light. A before-and-after taken from different angles reads as two unrelated pictures and convinces nobody.",
          "Beyond that: keep the sun behind you, avoid the middle of a bright day if you can, and take more than you need. Five shots of the same thing gives you one good one.",
        ],
        list: [
          "Before shot from the exact spot you will use afterwards",
          "Hold the phone level, not tilted down",
          "Sun behind you, not behind the subject",
          "Tidy the frame — move the van, the tools, the wheelie bin",
          "Take five, keep one",
          "Landscape for a website, upright for social",
        ],
      },
      {
        h: "Tidy the frame first",
        p: [
          "A finished bathroom photographed with a toolbox in shot looks like an unfinished bathroom. Thirty seconds of moving things out of frame is the highest-return half minute in this whole process.",
          "The same applies outdoors: move the van, coil the hose, close the gate.",
        ],
      },
      {
        h: "What to photograph besides the finished job",
        p: [
          "Work in progress, which proves the job is real. The team on site, which makes the business human. Details and joins, which is where quality is actually visible to somebody who knows.",
          "And the street or the house from a distance, because recognition is what makes local advertising work.",
        ],
      },
      {
        h: "Build the habit, not the archive",
        p: [
          "The goal is not one photoshoot. It is two minutes on every job, forever, which after six months gives you more usable material than any agency could produce.",
          "Put the phone somewhere you will see it before you pack up. That is genuinely the whole system.",
        ],
      },
    ],
    related: ["painters-and-decorators", "landscapers", "bathroom-renovations"],
  },
  {
    slug: "writing-a-service-page-that-ranks",
    title: "How to write a service page that ranks and converts",
    description:
      "The structure of a service page that satisfies both Google and a person deciding whether to ring, and the mistakes that make a page do neither.",
    date: "2026-09-23",
    minutes: 7,
    intro:
      "A service page has two audiences with different needs, and most pages are written for neither. Google needs to understand what the page is about and where it applies. A person needs to know whether you can solve their specific problem and what it will cost. A good page does both without the seams showing.",
    sections: [
      {
        h: "One page, one service",
        p: [
          "A page covering plumbing, heating, bathrooms and drainage ranks for none of them properly. Google cannot tell what it is about and a visitor cannot tell whether you do their specific job.",
          "Split them. One page per service you actually want enquiries for, each with its own title and its own detail.",
        ],
      },
      {
        h: "Say the thing in the first line",
        p: [
          "The opening sentence should contain the service and the area, because that is what somebody searched and what Google is matching. 'Bathroom fitting in Galway city and county' does more work than three paragraphs of introduction.",
          "Then answer the question the visitor actually arrived with, which is usually about cost, timescale or whether you cover their area.",
        ],
      },
      {
        h: "What belongs on the page",
        p: [
          "What the service includes and excludes. A realistic price range. How long a typical job takes. What areas you cover, named. Photographs of that specific service. Reviews from that specific service. Answers to the questions you get asked on every call.",
          "Most pages contain none of this and instead describe the company's values, which nobody searched for.",
        ],
        list: [
          "Service and area in the first line",
          "What is included, and what is not",
          "A genuine price range",
          "Typical timescale",
          "Named coverage area",
          "Photographs of this service specifically",
          "Five or six real FAQs",
          "One clear way to make contact",
        ],
      },
      {
        h: "Length matters less than completeness",
        p: [
          "Nobody needs two thousand words for a gutter cleaning page. They need the questions answered. A short page that answers everything beats a long page that pads.",
          "The useful test: could somebody decide to ring you without needing to ask anything first? If not, something is missing.",
        ],
      },
      {
        h: "The mistake that kills service pages",
        p: [
          "Writing the same page twenty times with the town name swapped. Google recognises it, treats the set as low value, and frequently indexes none of them.",
          "If you want pages for several areas, each one needs genuinely different content — different jobs, different photographs, different local detail. If you cannot write that, you are better off with one strong page.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "electricians", "roofers"],
  },
  {
    slug: "local-seo-with-no-shopfront",
    title: "Local SEO when you have no shopfront",
    description:
      "How a business that travels to customers ranks locally without a premises, and why hiding your address is usually the right move.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most of Google's local ranking advice assumes a shop with a door. A plumber, a mobile groomer or a photographer has no such thing, and following premises-based advice actively hurts them. The rules for a service-area business are different in several specific ways.",
    sections: [
      {
        h: "Hide your address",
        p: [
          "If you travel to customers, set your Google Business Profile as a service-area business and hide the address. Showing a home address in a housing estate makes you rank for that estate, which is not where your customers are.",
          "It also looks unprofessional to a customer checking you, and it puts your home on a map for anybody who looks.",
        ],
      },
      {
        h: "Set the service area honestly",
        p: [
          "List the towns you genuinely cover, not every town in the county. An unrealistically wide service area dilutes your relevance for the places you actually work.",
          "Twenty minutes of driving is usually a better boundary than a county line.",
        ],
      },
      {
        h: "Proximity still applies, which is the hard part",
        p: [
          "Google ranks map results largely on the distance between the searcher and your registered location, and a service-area business cannot escape that. You will rank best near wherever you are based.",
          "That is not fixable by settings. It is offset by being genuinely more prominent — more reviews, more complete profile, more content about the areas you serve — which is what actually moves a service-area business.",
        ],
        list: [
          "Service-area business, address hidden",
          "Realistic towns listed, not a whole county",
          "Every service listed individually",
          "Reviews that mention the towns you work in",
          "Separate website pages for your main areas, each genuinely different",
          "Photographs geotagged naturally by being taken on site",
        ],
      },
      {
        h: "Reviews that mention places",
        p: [
          "A review saying 'great job on our house in Naas' does something a five-star rating alone does not. It associates you with a place in a way Google can read.",
          "You cannot script this, and you should not try. But asking a customer to mention what you did and where, when you request the review, is legitimate and it works.",
        ],
      },
      {
        h: "What to do about the areas you cannot rank in",
        p: [
          "If you are based in one town and want work in another forty minutes away, organic and map results will fight you. Paid advertising will not.",
          "That is the honest answer: use paid to cover the areas geography denies you, and use organic to own the area you are actually in.",
        ],
      },
    ],
    related: ["mobile-mechanics", "dog-grooming", "photographers"],
  },
  {
    slug: "how-to-handle-out-of-hours-enquiries",
    title: "What to do about enquiries that arrive at nine at night",
    description:
      "Most enquiries arrive outside working hours. A practical look at what to automate, what to answer, and what it costs to leave until morning.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Look at the timestamps on your enquiries and you will usually find a large share arrive between seven and eleven at night, plus a cluster on Sunday afternoons. That is when people deal with their house. If your response starts at eight the next morning, you are last in a queue by then.",
    sections: [
      {
        h: "How much it actually costs",
        p: [
          "In most trades, the business that responds first wins a disproportionate share. Somebody who enquires at nine at night has frequently sent the same message to two or three businesses.",
          "You do not need to answer at nine. You need them to know you exist and that you will ring, which is a different and much easier problem.",
        ],
      },
      {
        h: "The cheap version",
        p: [
          "An automatic reply that says when you will be in touch, from a real business rather than a robot. 'Thanks — I will ring you before ten tomorrow morning' holds a lead far better than silence.",
          "On Meta, an instant reply on Messenger does the same job. On the website, a confirmation message rather than a blank page after the form submits.",
        ],
        list: [
          "Auto-reply that gives a specific time you will ring",
          "Instant reply set on Facebook and Instagram messages",
          "A confirmation on the website after a form is sent",
          "Voicemail that states when you will return the call",
          "WhatsApp as an option, because many people prefer to message",
        ],
      },
      {
        h: "What not to automate",
        p: [
          "Quoting. Diagnosis. Anything that needs judgement. An automated system that gives a price and gets it wrong creates a worse problem than a slow reply.",
          "Keep automation to acknowledgement and expectation-setting, and keep the judgement human.",
        ],
      },
      {
        h: "Whether to actually answer at night",
        p: [
          "For emergency trades, yes, and it is frequently the whole business. For everything else, no — and pretending otherwise leads to burnt-out owners answering the phone at bedtime for a job that could have waited.",
          "The aim is not to be always available. It is to be reliably responsive at a stated time.",
        ],
      },
      {
        h: "Check your own system",
        p: [
          "Send yourself an enquiry at nine at night and see what happens. A surprising number of businesses discover the auto-reply was never set up, or goes to a mailbox nobody reads.",
          "It takes two minutes and it is the most common quiet failure in small business marketing.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "electricians", "locksmiths"],
  },
  {
    slug: "should-you-publish-your-prices",
    title: "Should you publish your prices?",
    description:
      "The case for and against showing prices on a service website, and a middle path that filters out time-wasters without giving away your quoting.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Every trade and service business has this argument with itself. Publishing prices feels like handing competitors information and losing negotiating room. Hiding them feels safe. The evidence in most categories points one way, but not for the reason people expect.",
    sections: [
      {
        h: "What hiding prices actually costs",
        p: [
          "It does not create curiosity. It creates a closed tab. Somebody comparing three businesses will generally rule out the one that makes them ring to find out whether they can afford it.",
          "It also fills your day with enquiries from people whose budget was never going to reach, which is the expensive part — not the lost sale, but the hour spent finding out.",
        ],
      },
      {
        h: "What publishing prices actually costs",
        p: [
          "You will get fewer enquiries. That is real and it frightens people. What you will not get is fewer jobs, because the enquiries you lose are overwhelmingly the ones that were never going to convert.",
          "Competitors seeing your prices matters far less than people fear. They can ring and ask, and mostly they already know.",
        ],
      },
      {
        h: "The middle path that works",
        p: [
          "Publish a range with the conditions attached. 'Most full bathroom installations we do come in between €7,000 and €12,000 depending on the suite and whether the layout changes.'",
          "That tells somebody with €3,000 to look elsewhere, tells somebody with €10,000 that they are in the right place, and commits you to nothing.",
        ],
        list: [
          "A from-price for the simplest version of the job",
          "A typical range for the common case",
          "What moves the price up or down",
          "What is always included",
          "What is never included",
        ],
      },
      {
        h: "Where it does not apply",
        p: [
          "Genuinely bespoke work where the range is so wide that a number misleads more than it helps. Commercial and B2B work priced per contract. Anything where the specification changes the cost by an order of magnitude.",
          "Even then, saying 'projects typically start at X' does more good than saying nothing.",
        ],
      },
      {
        h: "The test",
        p: [
          "Count how many quotes you did last month and how many became jobs. If the ratio is poor, you have a filtering problem, and price transparency is the cheapest filter available.",
          "If the ratio is good and you are short of work, keep the prices off and get more enquiries first.",
        ],
      },
    ],
    related: ["kitchens", "bathroom-renovations", "interior-designers"],
  },
  {
    slug: "why-google-is-not-indexing-your-pages",
    title: "Why Google is not indexing your pages",
    description:
      "The difference between crawled, discovered and indexed, the six reasons pages get left out, and how to tell which one applies to you.",
    date: "2026-09-23",
    minutes: 7,
    intro:
      "You publish twenty pages, submit a sitemap, and three weeks later Search Console says five are indexed. This is one of the most common and least understood problems in small business SEO, and the fix depends entirely on which of several quite different things is happening.",
    sections: [
      {
        h: "Read the status before doing anything",
        p: [
          "Search Console's Pages report groups your URLs by reason. 'Discovered — currently not indexed' means Google knows the page exists and has not bothered to fetch it. 'Crawled — currently not indexed' means it fetched it and chose not to include it. Those are opposite problems.",
          "The first is a crawl budget and authority problem. The second is a quality judgement. Treating one as the other wastes months.",
        ],
      },
      {
        h: "Discovered but not crawled",
        p: [
          "This is normal on a new or low-authority site, and it means Google is rationing attention. It has a queue and you are not near the top of it.",
          "What helps: submitting an accurate sitemap, having real links from other sites, and internal links from pages Google already visits often. What does not help: publishing more pages, which lengthens the queue.",
        ],
      },
      {
        h: "Crawled but not indexed",
        p: [
          "Google fetched the page and decided it was not worth including. Usually that means it is too similar to other pages on your site, too thin, or duplicates something that exists elsewhere.",
          "The classic cause in small business sites is a set of location pages that are the same page with the town name swapped. Google treats the set as low value and indexes one or none.",
        ],
        list: [
          "Discovered, not crawled — authority and crawl budget problem",
          "Crawled, not indexed — quality or duplication problem",
          "Duplicate without canonical — you have two URLs for one page",
          "Excluded by noindex — usually intentional, sometimes left on by accident",
          "Soft 404 — the page returns 200 but looks empty to Google",
          "Blocked by robots.txt — rare, and usually a developer mistake",
        ],
      },
      {
        h: "The lastmod trap",
        p: [
          "Many sites stamp the current date on every URL in the sitemap on every deploy. Google uses that field to decide what to re-crawl, and when a site claims all 200 pages changed every day, Google stops believing the signal entirely.",
          "Accurate lastmod dates — the date the page genuinely changed — are worth more than any submission frequency.",
        ],
      },
      {
        h: "What actually speeds it up",
        p: [
          "Links from sites Google already crawls often. That is the honest answer and it is the one nobody wants, because it is slower and harder than publishing more content.",
          "A single link from a real local business directory, a supplier, a trade association or a local news site does more for indexing than twenty new pages.",
        ],
      },
    ],
    related: ["it-support", "estate-agents", "accountants"],
  },
  {
    slug: "first-backlinks-for-an-irish-business",
    title: "Where an Irish business gets its first real backlinks",
    description:
      "Fifteen places a genuine Irish small business can get a link without paying for one, and why the first five are worth more than the rest.",
    date: "2026-09-23",
    minutes: 7,
    intro:
      "Links remain the strongest signal Google has for whether a site deserves to rank, and a new business site has none. The standard advice — create great content and links will come — is not useful to a plumber. Here is the unglamorous list that actually works in Ireland.",
    sections: [
      {
        h: "Start with the relationships you already have",
        p: [
          "Your suppliers, your trade association, your accountant, the manufacturers whose products you install. Many of them have 'where to buy' or 'approved installer' pages and will add you for the asking.",
          "These are the best links available to you: relevant, real, and from sites in your own industry. Most businesses never ask.",
        ],
        list: [
          "Suppliers and manufacturers — approved installer or stockist pages",
          "Trade associations and registration bodies you already belong to",
          "Your chamber of commerce",
          "Local business directories run by the county council or LEO",
          "Sponsorship: clubs, schools, community groups you already support",
        ],
      },
      {
        h: "Sponsorship you are already paying for",
        p: [
          "If you sponsor a GAA club, a school event or a local festival, they almost certainly have a website with a sponsors page. Ask for a link. You have already paid for it.",
          "This is the most commonly wasted link opportunity in Ireland, because the money is spent and the link is simply never requested.",
        ],
      },
      {
        h: "Local and genuinely local",
        p: [
          "County council business directories, Local Enterprise Office listings, chambers of commerce, and legitimate local news. A local paper covering a genuine story — a new premises, an apprenticeship, an award — produces a link that is worth far more than its traffic.",
          "These take effort and they are slow. They are also close to unbeatable by a competitor who is buying links instead.",
        ],
      },
      {
        h: "What to avoid",
        p: [
          "Anybody selling you a hundred links for a hundred euro. Private blog networks. Directories that exist only for links and have no visitors. Paid guest posts on sites unrelated to your trade.",
          "These range from useless to actively harmful, and the harmful ones are difficult to undo.",
        ],
      },
      {
        h: "How many you actually need",
        p: [
          "Fewer than you think. A local trades business competing in one county typically needs a handful of genuine, relevant links to compete, not hundreds.",
          "Five real links from Irish sites in or near your industry will do more than any amount of content, and they are all obtainable by asking people you already know.",
        ],
      },
    ],
    related: ["roofers", "solar-installers", "accountants"],
  },
  {
    slug: "what-ai-search-means-for-local-business",
    title: "What AI search actually means for a local business",
    description:
      "How AI assistants pick which businesses to mention, what you can influence, and why most of the advice being sold about this is premature.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "People increasingly ask an AI assistant rather than typing into a search box, and every agency in the country has started selling a service about it. Most of that is speculation. Here is what can be said with reasonable confidence, and what you can genuinely do about it.",
    sections: [
      {
        h: "Where the answers come from",
        p: [
          "AI assistants answering a local question are mostly reading the same public web that search engines index — your website, your Google profile, directories, reviews and news. They are not reading a separate AI index you can submit to.",
          "Which means the work that makes you findable in search is largely the same work that makes you quotable by an assistant. That is the single most useful thing to understand about this.",
        ],
      },
      {
        h: "What appears to matter",
        p: [
          "Clear, factual, consistent information. An assistant summarising your business needs to find what you do, where you work and what it costs, stated plainly and matching across your site, your profile and directories.",
          "Contradictions hurt. If your website says you cover three counties and your Google profile says one, an assistant has no way to resolve that and may simply use a competitor whose details are consistent.",
        ],
        list: [
          "Consistent name, address and phone number everywhere",
          "Plain statements of what you do and where",
          "Prices or ranges, stated in text rather than in an image",
          "Real FAQs answering what people actually ask",
          "Structured data marking up your services and location",
          "Reviews, which assistants frequently summarise",
        ],
      },
      {
        h: "The thing you can do that most cannot",
        p: [
          "Answer questions directly on your site, in text, in the words a customer would use. Assistants extract answers; they cannot extract from a PDF brochure, an image of a price list or a page written entirely in marketing language.",
          "A page that says 'a standard boiler service in Kildare costs €90 and takes about an hour' is quotable. A page that says 'we pride ourselves on exceptional service' is not.",
        ],
      },
      {
        h: "What is being oversold",
        p: [
          "Submission services promising to register you with AI engines. Schema packages sold as an AI ranking fix. Anyone quoting a guaranteed position in an AI answer.",
          "There is no submission process, no ranking to buy, and no reliable way to verify a guarantee. Treat all of it with suspicion.",
        ],
      },
      {
        h: "The honest position",
        p: [
          "This is early and it is moving. The defensible strategy is the one that was already correct: accurate information, stated plainly, consistent everywhere, with real reviews behind it.",
          "If something specific and reliable emerges, it will be worth doing then. Paying for it now is paying for a guess.",
        ],
      },
    ],
    related: ["it-support", "estate-agents", "solicitors"],
  },
  {
    slug: "conversion-tracking-done-properly",
    title: "Conversion tracking, done properly",
    description:
      "What to count as a conversion, why counting the wrong thing is worse than counting nothing, and the setup that survives a website change.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most small business ad accounts are optimising toward the wrong event. The platforms will happily spend your budget chasing whatever you told them to chase, and if you told them to chase page views you will get page views. Getting this right is usually worth more than any change to targeting or creative.",
    sections: [
      {
        h: "Count the thing that makes you money",
        p: [
          "A conversion should be an event that correlates with revenue. A form submission, a phone call over thirty seconds, a booking. Not a page view, not a click on the contact page, not time on site.",
          "The platforms optimise toward whatever you define, so a badly chosen conversion actively steers your budget toward the wrong people.",
        ],
      },
      {
        h: "Phone calls are usually the gap",
        p: [
          "In most trades the majority of enquiries are calls, and calls are usually untracked. That means the optimisation is learning from half the data and the half it can see is unrepresentative.",
          "Tracked calls, even crudely, change what the platform learns. This is the most common single improvement available to a trades ad account.",
        ],
        list: [
          "Form submissions — the easy one, usually already working",
          "Phone calls over a threshold length — the one most people miss",
          "WhatsApp and Messenger conversations started",
          "Bookings or quote requests, where they exist",
          "Not: page views, scroll depth, time on site, contact page visits",
        ],
      },
      {
        h: "Value, not just count",
        p: [
          "If you can attach a value to conversions — even a rough average — the platforms can optimise toward revenue rather than volume. A business where some jobs are worth €200 and others €8,000 is badly served by counting both as one conversion.",
          "An estimated value is far better than none. It does not need to be exact to be useful.",
        ],
      },
      {
        h: "Make it survive a website change",
        p: [
          "The most common way tracking breaks is a website update that removes the tag. Nobody notices for a month, the campaign appears to collapse, and the cause is invisible.",
          "Check after every site change. Submit your own form and confirm it registers. Put a reminder in the calendar if that is what it takes.",
        ],
      },
      {
        h: "Do not optimise on tiny numbers",
        p: [
          "A campaign producing eight conversions a month does not have enough data for the platform to learn from, and switching optimisation targets weekly guarantees it never will.",
          "Below roughly thirty conversions a month, optimise toward a more common upstream event — a landing page reached, a call button tapped — and judge the account on the real outcome manually.",
        ],
      },
    ],
    related: ["solar-installers", "gyms-and-fitness", "car-garages"],
  },
  {
    slug: "how-to-choose-a-web-designer",
    title: "How to choose a web designer without getting stung",
    description:
      "The questions that separate a designer who will help from one who will leave you with a site you cannot edit, own or move.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most small business owners choose a web designer on price and portfolio. Both matter less than ownership, speed and what happens after launch — which are precisely the things nobody asks about until it is too late.",
    sections: [
      {
        h: "Ask who owns what",
        p: [
          "The domain should be registered in your name, on an account you control. The hosting should be in your name. The site files should be yours. None of this is unusual to ask for and a reluctance to answer is the single clearest warning sign in this industry.",
          "Businesses regularly discover they cannot move their website because the designer owns the domain, and the negotiation from that position is unpleasant.",
        ],
        list: [
          "Is the domain registered in my name, on my account?",
          "Is the hosting in my name?",
          "Can I move the site elsewhere without your permission?",
          "What happens if you stop trading?",
          "Can I edit text and add photographs myself?",
          "What does it cost to make a change after launch?",
          "How fast will the site be on a phone on 4G?",
          "Who writes the copy?",
        ],
      },
      {
        h: "Ask about speed, specifically",
        p: [
          "Ask what the site will score on mobile and what page weight they are targeting. A designer who has no answer builds slow sites, and slow sites lose enquiries silently.",
          "This matters more in rural Ireland than most designers allow for. A beautiful site that fails on poor coverage is a worse site.",
        ],
      },
      {
        h: "Ask who writes the words",
        p: [
          "Many quotes assume you will supply the copy, and most business owners never do, which is why so many sites launch with placeholder text still on the about page.",
          "If writing is included, ask to see an example. If it is not, price the fact that you will need to do it or pay someone else.",
        ],
      },
      {
        h: "Be careful with monthly website deals",
        p: [
          "A website for €99 a month with no upfront cost can be reasonable or can be a lease you never stop paying, where you own nothing and leaving means starting again.",
          "Read what happens at the end. If there is no point at which the site becomes yours, you are renting, and you should price it as rent over five years rather than as a website.",
        ],
      },
      {
        h: "What a fair arrangement looks like",
        p: [
          "A one-off build cost, the domain and hosting in your name, the ability to edit your own content, and a clear rate for changes. Anything that makes leaving difficult is designed to make leaving difficult.",
          "Good designers are relaxed about all of this, because their clients stay for the work rather than for the lock-in.",
        ],
      },
    ],
    related: ["restaurants-and-cafes", "builders-and-extensions", "gyms-and-fitness"],
  },
  {
    slug: "domain-and-hosting-who-owns-them",
    title: "Who actually owns your domain, and why it matters",
    description:
      "How to check in five minutes whether you control your own domain, what to do if you do not, and why this is the most expensive thing to get wrong.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "A surprising number of Irish businesses do not own their own domain name. They paid for a website years ago, the person who built it registered everything, and nobody has thought about it since. It costs nothing until the day it costs everything.",
    sections: [
      {
        h: "Why it is the worst thing to lose",
        p: [
          "Your domain is your email address, your website, your Google profile link and every printed van, card and sign you have ever paid for. Losing it is not a website problem, it is a business continuity problem.",
          "Websites can be rebuilt in a fortnight. A domain somebody else controls can take months to recover, or may not be recoverable at all.",
        ],
      },
      {
        h: "How to check",
        p: [
          "Look up your domain on a WHOIS service. For a .ie domain, the registry publishes the registrant. If the name shown is your web designer, an agency or a company you do not recognise, you have a problem worth fixing now rather than later.",
          "Also check who receives the renewal emails. If they do not come to you, you will not know when it expires.",
        ],
        list: [
          "Look up the WHOIS record for your domain",
          "Check the registrant name is your business",
          "Confirm renewal notices come to an address you control",
          "Check your hosting account is in your name",
          "Make sure at least two people in the business can access both",
          "Note the renewal date somewhere that is not one person's inbox",
        ],
      },
      {
        h: "How to fix it without a fight",
        p: [
          "Ask politely and in writing for the domain to be transferred to an account in your name. Most designers will do this without argument; it is a normal request.",
          "If there is resistance, that tells you what you need to know about the relationship and you should resolve it before you need something urgently.",
        ],
      },
      {
        h: "Expiry is the common disaster",
        p: [
          "Domains lapse because the renewal notice went to somebody who left the company, or to a designer who has stopped trading. The site and the email stop on the same morning with no warning.",
          "Set the renewal to auto-renew on a card that will not expire, and make sure more than one person can see the account.",
        ],
      },
      {
        h: "While you are in there",
        p: [
          "Check the same for your Google Business Profile, your social accounts and your email. The pattern is identical: one person set them up, nobody else has access, and that person may not always be reachable.",
          "An afternoon spent documenting who owns what is the cheapest insurance in the business.",
        ],
      },
    ],
    related: ["it-support", "accountants", "solicitors"],
  },
  {
    slug: "the-real-cost-of-a-cheap-website",
    title: "The real cost of a cheap website",
    description:
      "What a €400 website actually leaves out, how to tell whether yours is costing you enquiries, and when cheap is genuinely the right answer.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "A cheap website is not a bad decision by definition. For some businesses it is exactly right. The problem is that the costs of a bad one are invisible — they show up as enquiries that never happened, which is the hardest thing in business to notice.",
    sections: [
      {
        h: "What usually gets left out",
        p: [
          "Speed, almost always. Cheap builds lean on page builders and unoptimised images, and the result is a site that takes six seconds on a phone. Nobody tells you, because the people who leave never contact you.",
          "Also: any thought about what the page should say, coverage areas, conversion, and whether the form actually delivers to your inbox.",
        ],
      },
      {
        h: "How to tell if yours is costing you",
        p: [
          "Open it on your phone, on mobile data rather than wi-fi, and count. If you are past three seconds before you see anything, that is a real cost.",
          "Then read the first line as though you had never heard of the business. If it does not say what you do and where, visitors are having to work it out, and some will not.",
        ],
        list: [
          "Load it on 4G and count the seconds",
          "Read the first line as a stranger",
          "Submit your own form and see if it arrives",
          "Tap the phone number and see if it dials",
          "Look for a real photograph of your own work",
          "Check whether it names the areas you cover",
        ],
      },
      {
        h: "The arithmetic",
        p: [
          "If your average job is worth €2,000 and a better site converts two more visitors a month, that is €48,000 a year. Against a €1,500 build cost, the question answers itself.",
          "If your average job is worth €60 and you get most work by referral, the same spend makes very little sense. The answer genuinely depends on your numbers, not on a principle.",
        ],
      },
      {
        h: "When cheap is right",
        p: [
          "A brand new business testing whether there is demand. A business whose work comes entirely through word of mouth and needs a site only so people can check it exists. A side venture.",
          "In those cases a simple, fast, honest one-page site is the correct answer and anything more is premature.",
        ],
      },
      {
        h: "The version that is never right",
        p: [
          "Slow, on somebody else's domain, with a form that does not deliver, that you cannot edit and cannot move. That is not cheap, it is a liability with a low sticker price.",
          "Fast and simple is fine. Cheap and trapped is not.",
        ],
      },
    ],
    related: ["builders-and-extensions", "restaurants-and-cafes", "landscapers"],
  },
  {
    slug: "hiring-through-facebook-ads",
    title: "Hiring through Facebook ads when nobody is applying",
    description:
      "Why job boards produce nothing for trades and small employers in Ireland, and how a modest paid social budget fills roles instead.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Most Irish trades and small employers have a recruitment problem rather than a sales problem, and they are using the wrong tool. Job boards reach people actively looking for work. The person you want is usually employed, reasonably content, and not looking at all.",
    sections: [
      {
        h: "Why job boards underperform here",
        p: [
          "The pool of people actively job-hunting for a skilled trade in a given county on a given week is very small. You are competing for the same handful of applicants as everyone else, and paying for the privilege.",
          "Paid social reaches the far larger group who are not looking but would move for the right thing. That is the whole argument.",
        ],
      },
      {
        h: "What an ad that works looks like",
        p: [
          "Specific pay. This is the single biggest factor and the one most employers avoid. 'Competitive rates' tells a tradesperson you are probably below market, because anyone above market says so.",
          "Then: the hours, the location, the type of work, and one genuine reason to move — a newer van, better tools, no weekends, the work being local.",
        ],
        list: [
          "State the actual pay or a real range",
          "Say where the work is and how far the travel goes",
          "Say the hours, honestly",
          "One or two genuine reasons somebody would move",
          "Photographs of the actual team and vans",
          "A way to apply that takes under two minutes",
        ],
      },
      {
        h: "Make applying trivially easy",
        p: [
          "A tradesperson is not writing a cover letter from a phone at lunchtime. A lead form with three questions and a phone number will out-perform a careers page by a wide margin.",
          "Follow up the same day. Applicants who are not actively looking cool off fast and the good ones are gone within the week.",
        ],
      },
      {
        h: "Show the place, not the logo",
        p: [
          "People move jobs to somewhere that looks well run. Photographs of a tidy yard, decent equipment and people who look content do more than any list of benefits.",
          "This is the same content that helps you win customers, which is why the two campaigns support each other.",
        ],
      },
      {
        h: "What it costs",
        p: [
          "A few hundred euro will usually fill a trade role in an Irish county, against recruitment agency fees of several thousand. The gap is large enough that it is worth trying before anything else.",
          "It also builds an audience of people who know your business exists as an employer, which makes the next hire easier.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "recruitment-agencies"],
  },
  {
    slug: "what-to-do-when-you-are-fully-booked",
    title: "What to do with your marketing when you are fully booked",
    description:
      "Why switching everything off is the most expensive decision a small business makes, and what to do instead of either burning money or going dark.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Work is good, the diary is full to Christmas, and the obvious move is to switch off the advertising and save the money. It is one of the most expensive habits in small business, and it is almost universal.",
    sections: [
      {
        h: "Why going dark costs more than it saves",
        p: [
          "Advertising has momentum. A campaign switched off loses its optimisation, your Google profile loses recency, your social presence goes quiet, and your ranking drifts. Starting again in three months means paying to rebuild all of it.",
          "Worse, the quiet period arrives with nothing in the pipeline, because you stopped generating enquiries exactly when they would have been maturing.",
        ],
      },
      {
        h: "What to do instead of switching off",
        p: [
          "Reduce the budget rather than stopping. Shift from lead generation to the things that compound. Raise your prices, which is the correct response to more demand than capacity and the one most businesses never take.",
          "Being full is the best possible time to become more profitable, because you can afford to lose the jobs at the bottom.",
        ],
        list: [
          "Cut the budget, do not stop it",
          "Raise prices on new quotes",
          "Ask every current customer for a review while the job is fresh",
          "Build a waiting list rather than turning people away",
          "Photograph everything — you will need it in the quiet season",
          "Do the website and content work you never have time for",
        ],
      },
      {
        h: "Build a waiting list, do not turn people away",
        p: [
          "Somebody who rings when you are full is a customer you have already paid to acquire. Telling them no sends them to a competitor permanently; offering a date in six weeks keeps a good share of them.",
          "Even where they cannot wait, asking to follow up later turns a dead enquiry into a future one.",
        ],
      },
      {
        h: "The review window closes fast",
        p: [
          "A customer is most willing to leave a review in the days immediately after a job they were happy with. A busy period is a large number of those moments happening at once.",
          "Most businesses are too busy to ask during the busy period and then wonder in January why they have eleven reviews.",
        ],
      },
      {
        h: "Use the capacity you have on the year ahead",
        p: [
          "The quiet season is largely decided by what you did during the busy one. Reviews collected, photographs taken, content written and prices raised in September are what make February survivable.",
          "Switching everything off is choosing to have the same problem again next year.",
        ],
      },
    ],
    related: ["landscapers", "roofers", "painters-and-decorators"],
  },
  {
    slug: "how-to-quote-faster",
    title: "How to quote faster without underpricing",
    description:
      "Why the first quote wins a disproportionate share of jobs, and a practical system for getting quotes out the same day without guessing.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "In most trades the business that quotes first wins far more than its share, and the gap is not small. Yet most small businesses take three to five days, because quoting happens in the evening after the work is done. Fixing that is frequently worth more than any increase in advertising.",
    sections: [
      {
        h: "Why speed wins",
        p: [
          "A customer with three quotes coming makes a provisional decision when the first arrives and compares the others against it. Being first means being the reference point rather than the alternative.",
          "It also signals competence. A business that quotes in a day reads as organised, and customers reasonably assume the job will run the same way.",
        ],
      },
      {
        h: "Separate the site visit from the quote",
        p: [
          "A large part of the delay is that quoting requires sitting down with notes. Taking standard photographs and measurements on site, in a fixed order every time, removes the thinking from the writing.",
          "Then the quote is assembly rather than analysis, and assembly can be done in fifteen minutes.",
        ],
        list: [
          "A fixed list of photographs and measurements taken on every visit",
          "Standard line items with your own rates, reused every time",
          "Three or four pre-written scope paragraphs you adapt",
          "A template that only needs numbers and specifics changed",
          "A standing slot in the week for quoting, not 'the evening'",
        ],
      },
      {
        h: "Price ranges for the simple jobs",
        p: [
          "A meaningful share of enquiries are for jobs you have done a hundred times. Those do not need a site visit — they need a range given on the phone and confirmed on arrival.",
          "This frees your quoting time for the jobs where it genuinely matters and gets an answer to the customer immediately.",
        ],
      },
      {
        h: "Speed is not the same as cheap",
        p: [
          "Quoting quickly does not mean quoting low, and it is worth being explicit about that with yourself. The advantage comes from being first and looking organised, not from being the cheapest number.",
          "If anything, a fast, clear, well-presented quote supports a higher price than a slow one.",
        ],
      },
      {
        h: "Follow up once",
        p: [
          "Most quotes are never followed up at all. A single message four or five days later asking whether they have any questions recovers a meaningful proportion of jobs.",
          "It costs nothing and almost nobody does it.",
        ],
      },
    ],
    related: ["builders-and-extensions", "kitchens", "windows-and-doors"],
  },
  {
    slug: "referral-systems-that-work",
    title: "Referral systems that actually work for a small business",
    description:
      "Why most referral schemes produce nothing, and the three approaches that do — without discount vouchers or gimmicks.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Every business says most of its work comes from word of mouth, and almost none of them do anything deliberate about it. The schemes that get tried — refer a friend for €50 off — usually fail, and it is worth understanding why before building another one.",
    sections: [
      {
        h: "Why voucher schemes fail",
        p: [
          "They ask the customer to sell on your behalf in exchange for a small sum, which most people find slightly embarrassing and not worth the money.",
          "They also arrive at the wrong moment, usually in an email weeks after the job when the enthusiasm has faded.",
        ],
      },
      {
        h: "Ask at the moment of satisfaction",
        p: [
          "The best time is the moment the customer is visibly pleased — standing in the finished room, on the day. Not later, not by email.",
          "'If anyone asks, I'd be glad of the mention' is enough. It works because it is small, human and timed correctly.",
        ],
        list: [
          "Ask on the day, in person, once",
          "Make it small: a mention, not a sales job",
          "Give them something concrete to pass on — a card, a number, a name",
          "Thank people who refer, visibly and promptly",
          "Never make it transactional unless it genuinely is",
        ],
      },
      {
        h: "Referral from other businesses is the underused one",
        p: [
          "The strongest referral relationships are usually with businesses adjacent to yours — a plumber and a tiler, an estate agent and a photographer, a funeral director and a stonemason.",
          "These are reciprocal, professional, and far more productive than customer schemes, because each party sends work regularly rather than once.",
        ],
      },
      {
        h: "Make it easy to pass you on",
        p: [
          "A customer recommending you has to produce a name, a number, or a website. If they have to search for it, the referral frequently dies there.",
          "Leaving a card, sending a message with your details after the job, or simply having a name that is easy to spell removes that friction.",
        ],
      },
      {
        h: "Close the loop",
        p: [
          "When somebody refers you, tell them it happened and thank them. People repeat behaviour that gets acknowledged, and most businesses never acknowledge it at all.",
          "That single habit does more than any scheme, and it costs a phone call.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "estate-agents", "funeral-directors"],
  },
  {
    slug: "how-to-win-back-old-customers",
    title: "How to win back customers you have not heard from in two years",
    description:
      "The cheapest source of work most small businesses have, why they never use it, and how to approach it without sounding desperate.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Every business has a list of people who paid them once and were happy, and almost none of them ever contact those people again. It is the cheapest work available anywhere — no advertising, no competition, and the trust already exists.",
    sections: [
      {
        h: "Why it gets ignored",
        p: [
          "It feels like admitting you need work, and there is a fear of annoying people. Both are overstated. A past customer who was happy is generally pleased to hear from a tradesperson who did a good job.",
          "The other reason is practical: most small businesses have no list. The details are in a notebook, in an email inbox and in a phone, and were never gathered into one place.",
        ],
      },
      {
        h: "Build the list first",
        p: [
          "An hour with your invoices will produce most of it. Name, what you did, when, and a contact. That is a genuine business asset and almost nobody has one.",
          "Be mindful of the data protection position: you can contact past customers about similar services, but keep marketing consent separate and always give a way to opt out.",
        ],
        list: [
          "Pull names and dates from your invoices",
          "Note what you did for each one",
          "Sort by how long ago and by what would naturally be due",
          "Contact the ones where there is a genuine reason",
          "Keep it to a message, not a campaign",
        ],
      },
      {
        h: "Only contact people where there is a real reason",
        p: [
          "A boiler serviced two years ago is due. A garden landscaped three years ago needs maintenance. A roof repaired five years ago is worth an inspection after a bad winter.",
          "That is a service, not a sales message, and it reads completely differently. Contacting people with nothing specific to say is what makes this feel like spam.",
        ],
      },
      {
        h: "Keep it personal and short",
        p: [
          "A message from a person, mentioning the specific job, is worth far more than a designed newsletter. Two or three sentences.",
          "Send them individually if the list is small enough. It will out-perform anything bulk by a wide margin.",
        ],
      },
      {
        h: "What to expect",
        p: [
          "A low response rate in absolute terms and an extremely high return relative to cost, because there is no acquisition cost at all.",
          "Do it twice a year, not monthly. The value of this list comes from being used sparingly.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "landscapers", "car-garages"],
  },
  {
    slug: "when-to-turn-down-work",
    title: "When to turn down work",
    description:
      "The jobs and customers that cost more than they pay, how to recognise them at the enquiry stage, and how to decline without burning the relationship.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Growing businesses take everything, and for a while that is the right instinct. There comes a point where the jobs at the bottom are costing you the capacity to do the ones at the top, and recognising that point is worth more than any marketing.",
    sections: [
      {
        h: "The jobs that cost more than they pay",
        p: [
          "Work outside your travel radius where the driving eats the margin. Jobs outside your actual specialism that take twice as long. Customers who negotiated hard before you started, who will negotiate harder at the end.",
          "And anything where the scope was never really agreed, which is the most reliable predictor of a difficult job there is.",
        ],
        list: [
          "Far outside your normal travel distance",
          "Outside what you actually do well",
          "Heavy price negotiation before any work has started",
          "Vague scope the customer will not pin down",
          "A previous tradesperson who left mid-job, with no clear explanation",
          "Unrealistic timescale they will not move on",
        ],
      },
      {
        h: "Recognise it at the enquiry, not on site",
        p: [
          "Most of these are visible in the first conversation if you are listening for them. That is what a qualifying form and a proper first call are for.",
          "The cost of declining at enquiry stage is nothing. The cost of declining after a site visit is an afternoon. The cost of finding out three weeks in is considerable.",
        ],
      },
      {
        h: "Raise the price instead of refusing",
        p: [
          "For borderline jobs, quoting a price that makes the difficulty worth it is better than declining. If they accept, it is now a good job. If they decline, you have lost nothing.",
          "This is also the correct response to being busy, and it is how most trades gradually move upmarket.",
        ],
      },
      {
        h: "How to decline well",
        p: [
          "Quickly, plainly, and with a recommendation if you have one. 'That is outside what we do, but try X' costs you nothing and frequently comes back as a referral later.",
          "What damages you is going quiet, or stringing somebody along for a fortnight before saying no.",
        ],
      },
      {
        h: "The test",
        p: [
          "If you would be relieved to hear they had gone elsewhere, do not take the job. That instinct is almost always accurate and almost always ignored.",
          "Businesses rarely regret the work they turned down. They regret the work they took.",
        ],
      },
    ],
    related: ["builders-and-extensions", "roofers", "interior-designers"],
  },
  {
    slug: "should-you-do-your-own-marketing",
    title: "Should you do your own marketing?",
    description:
      "An honest look at when running it yourself is the right call, when it is not, and how to tell which situation you are in.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "This is written by an agency, so read it with that in mind. There are businesses that should not hire anyone, and pretending otherwise is how agencies end up with clients who resent them within three months. Here is the genuine distinction.",
    sections: [
      {
        h: "When you should do it yourself",
        p: [
          "If your budget is under roughly €500 a month in ad spend, management fees will consume most of the value and you would be better learning the basics yourself.",
          "If you enjoy it, have the time, and your market is small enough to be covered by one campaign, there is no mystery here that you cannot learn in a few months.",
        ],
        list: [
          "Ad budget under about €500 a month",
          "You have genuine time and some interest",
          "One service, one small area",
          "Your main problem is that the website is bad — fix that first",
          "You are testing whether demand exists at all",
        ],
      },
      {
        h: "When you should not",
        p: [
          "If you are the person who does the work, marketing gets done at eleven at night or not at all, and the 'not at all' usually wins during the busy months. That inconsistency costs more than a fee.",
          "Also if you have several services and areas, if you are spending enough that a percentage improvement exceeds the fee, or if you have tried twice and it did not work.",
        ],
      },
      {
        h: "The middle option nobody offers",
        p: [
          "Pay someone to set it up properly and hand it over. The set-up is where most of the expertise sits; the ongoing running of a small, stable campaign is not difficult.",
          "Plenty of businesses are best served this way and very few agencies will suggest it, because it is a one-off fee rather than a retainer.",
        ],
      },
      {
        h: "What to fix before hiring anyone",
        p: [
          "If the website is slow, the phone goes unanswered, or you have no reviews, an agency will spend your first three months' fee on problems you could have fixed yourself for nothing.",
          "Any agency worth hiring will tell you this before taking the money. If they do not, that is the answer to whether to hire them.",
        ],
      },
      {
        h: "The honest summary",
        p: [
          "Marketing is not complicated, it is just relentless. What you are actually buying is that somebody does it every week whether or not you had a bad Tuesday.",
          "If you will genuinely do it yourself every week, do it yourself. Most people will not, and being honest about that is the whole decision.",
        ],
      },
    ],
    related: ["gyms-and-fitness", "restaurants-and-cafes", "accountants"],
  },
  {
    slug: "one-number-to-measure",
    title: "If you only measure one thing, measure this",
    description:
      "Why most small business marketing reports track the wrong numbers, and the single metric that tells you whether any of it is working.",
    date: "2026-09-23",
    minutes: 5,
    intro:
      "Marketing reports are full of numbers that feel informative and change nothing: impressions, reach, followers, clicks, time on page. If you only had one figure to run your business on, none of those would be it.",
    sections: [
      {
        h: "The number",
        p: [
          "Cost per job won. Not cost per click, not cost per lead, not cost per enquiry. What it cost you in advertising to end up with one customer who paid you.",
          "Everything upstream of that is a diagnostic. Only this one connects to whether you should spend more money or less.",
        ],
      },
      {
        h: "How to work it out",
        p: [
          "Total advertising spend for the month, divided by the number of jobs that came from advertising. The second number requires you to ask every customer where they came from, and to write it down.",
          "That is the hard part, and it is the reason most businesses do not have this figure. It is also an hour a month of work at most.",
        ],
        list: [
          "Total ad spend for the month",
          "Number of jobs won that came from advertising",
          "Divide one by the other",
          "Compare against the contribution margin of an average job",
          "If it is well below, spend more. If it is close, fix conversion before spending more",
        ],
      },
      {
        h: "What it tells you that the other numbers do not",
        p: [
          "A campaign with a rising cost per lead may be perfectly healthy if those leads convert far better. A campaign with a falling cost per lead may be quietly destroying your margin by attracting price shoppers.",
          "Only the cost per job won shows you which is happening, and it frequently contradicts what the platform dashboards appear to say.",
        ],
      },
      {
        h: "The numbers worth keeping as diagnostics",
        p: [
          "Cost per lead, to spot when something breaks. Lead-to-job conversion, because it tells you whether the problem is marketing or sales. Response time, because it explains most conversion problems.",
          "Those three explain why the main number moved. They are not the main number.",
        ],
      },
      {
        h: "What to ignore entirely",
        p: [
          "Followers, impressions, reach, engagement rate, time on site, bounce rate. None of them pay anybody's wages and all of them can be improved while the business gets worse.",
          "If a report you receive leads with those, ask what the cost per job won was. The answer, and the reaction, will tell you a good deal.",
        ],
      },
    ],
    related: ["roofers", "solar-installers", "gyms-and-fitness"],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

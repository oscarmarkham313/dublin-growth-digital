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
    title: "How to judge what a solar lead is worth",
    description:
      "How Meta and Google solar leads differ in Ireland, why shared leads look cheap and cost more, and what a lead form should ask before you ring.",
    date: "2026-09-07",
    minutes: 6,
    intro:
      "Every solar installer we speak to asks the same question first: what should a lead cost? The honest answer is that the number on its own tells you almost nothing. A cheap lead that never answers the phone is more expensive than one several times dearer who has already told you their roof type, their budget and when they want the install. Here is how to think about it.",
    sections: [
      {
        h: "The ranges we see",
        p: [
          "On Meta (Facebook and Instagram), a well-run lead-form campaign for a domestic solar installer in Ireland produces leads across a wide range, depending on the county, the season and how tightly the form qualifies. Campaigns that ask nothing beyond a name and a phone number sit at the cheap end and waste the installer's time; campaigns that ask about the property, the roof and the timing sit at the dear end and fill survey diaries.",
          "On Google Ads, the searches with real intent ('solar panels Cork', 'solar PV installer near me', 'SEAI solar grant') cost several times more per lead. The conversion rate to a survey is much higher, because the person typed the words.",
          "The number that matters is not the cost per lead. It is the cost per survey booked, and after that the cost per install. A cheap Meta lead that becomes a survey one time in three can end up costing much the same per survey as a Google lead three times dearer that converts two times in three — and the Google one arrives ready to buy. Both are worth running. Only the report tells you which is winning this month.",
        ],
      },
      {
        h: "Why shared leads look cheap and cost more",
        p: [
          "Several national websites sell solar leads to installers, usually to three or four firms at once. The homeowner has filled in one form and is now being rung by four companies within the hour. The installer who wins that job is the fastest caller with the lowest quote, which is not a business anyone wants to be in.",
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
          "One of our home-improvement clients received 21 qualified leads in a single month from a small Meta budget, every one of them through a form that qualified the job first. A Cork EV charger installer received 54 residential enquiries in three weeks from a campaign built around his own installs. Those are not typical results, and we do not promise them, but they show what happens when the creative is honest, the targeting is local and the form does the qualifying.",
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
          "Our vendor campaigns run at a flat monthly fee with everything included, and advertising spend is paid directly to Meta from the agency's own account, scaled to the size of the patch. There is no setup fee and no contract.",
          "Measure three things and ignore the rest: vendor enquiries, valuation appointments booked and instructions won. Impressions and reach are how platforms report; enquiries and appointments are how agencies get paid. We send those three numbers every Friday on one page.",
        ],
      },
      {
        h: "Results, unnamed on purpose",
        p: [
          "A Dublin estate agency received 42 vendor enquiries in one month from a Meta campaign aimed at homeowners six months before they searched; twelve of them went to market. A Limerick agency booked 31 vendor appraisals in four weeks, fourteen of which went on to list. We name the agencies on a call, never in an ad or on a page.",
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
          "On Google, roofing clicks in Ireland vary with the town and the season, and a call or form lead costs a multiple of a Meta one. On Meta, planned-work leads through a qualifying form sit lower. One of our home-improvement clients received 21 leads in a month on a very small budget, which is the cheap end of what a tight local campaign can do.",
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
          "The trap on the client side is judging by the wrong number. A very low cost per lead sounds better than one four times higher until you notice the cheap leads never answer the phone. Insist on cost per booked job as the number you both watch, and be patient for the first month while the campaign learns who responds.",
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
    title: "How to judge what a roofing lead is worth",
    description:
      "Real ranges for Meta and Google roofing leads in Ireland, why storm weeks change the maths, and why cost per lead is the wrong number to judge on.",
    date: "2026-09-22",
    minutes: 6,
    intro:
      "Every roofer who rings us asks what a lead should cost, and it is the wrong first question. A cheap lead who wanted a quote for a shed roof is worse than one many times dearer who needs a full re-roof and has already been told roughly what that costs. Here is how the numbers actually behave in Ireland, and what to measure instead.",
    sections: [
    {
      h: "The ranges we actually see",
      p: [
        "On Meta, a well-run roofing campaign in Ireland produces leads across a wide range. The cheap end is a form asking for a name and number, which fills your phone with people who will not answer it. The dear end asks what the roof is, what the problem is and when they need it, and produces a list worth ringing.",
        "On Google Ads, roofing searches are competitive and clicks are not cheap — a lead costs several times what a Meta one does. The conversion rate is far higher because somebody typed the words — they have a problem now, and they are looking for someone to fix it.",
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
        "If somebody quotes you a cost per lead without asking what a job is worth to you, they are selling volume rather than work. A roofer whose average job is a full re-roof can afford a lead price that would bankrupt a business selling small repairs.",
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
        "A plumber on a modest average job at half margin, who keeps a customer for four jobs, ends up with a customer worth a few hundred in profit. A kitchen company doing one large job at a thinner margin has a customer worth more than ten times that and will never see them again. Those two businesses should not be spending remotely similar amounts to acquire one.",
      ],
    },
    {
      h: "Decide what you will pay for a customer",
      p: [
        "A reasonable starting point for a small business is paying no more than 15 to 20 percent of a customer's profit value to acquire them. On that rule the plumber above can pay a modest amount for a new customer, and the kitchen company can pay more than ten times as much and still be comfortably ahead.",
        "This single number tells you far more than any percentage-of-turnover rule, and it stops the most common mistake in small business advertising: judging a campaign on cost per lead without ever working out what a lead is allowed to cost.",
      ],
    },
    {
      h: "Then work backwards through the funnel",
      p: [
        "If you close one in four quotes, and one in three enquiries becomes a quote, then twelve enquiries make one customer — so an enquiry can cost a twelfth of what you can afford to pay for a customer.",
        "That is your target cost per enquiry, and now you can judge any campaign in a fortnight rather than arguing about it for six months.",
      ],
    },
    {
      h: "How much to start with",
      p: [
        "Enough to get roughly thirty enquiries a month, because below that the platforms cannot learn and you cannot tell signal from noise. Work backwards from your own cost per enquiry to find what that means for you.",
        "On a very small budget, advertising rarely works well enough to judge. It is usually better to spend nothing and fix your Google Business Profile and website first — both of which are free and both of which make everything you eventually spend go further.",
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
        "A lead sold four ways is effectively costing you four times its price per genuine opportunity, and you are competing on speed and price rather than on being the right installer.",
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
      "What lead platforms actually sell, why a cheap lead sold to four contractors costs more than a dearer exclusive one, and when buying them does make sense.",
    date: "2026-09-23",
    minutes: 6,
    intro:
      "Every trade in Ireland gets the same call: leads, ready to go, pay per lead, no commitment. The price sounds excellent compared to running your own advertising. The arithmetic underneath is worth doing properly before you sign up, because it is not the comparison it appears to be.",
    sections: [
      {
        h: "What you are actually buying",
        p: [
          "Most lead platforms sell the same enquiry to three, four or five businesses. You are not buying a customer, you are buying a place in a race, and the customer has been told to expect several calls.",
          "That changes the economics completely. If a lead is sold to four contractors and one of you converts it, the true cost per job is at least four times the headline price before you have driven anywhere.",
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
          "Take your average job value and your gross margin. Multiply them to get what a job actually contributes. If you are willing to spend a quarter of that contribution to win it, that quarter is what you can afford to acquire a customer.",
          "Then work out how many enquiries it takes you to win one job. If it is four, you can afford a quarter of that figure per lead. That number, not a percentage of turnover, is your actual budget constraint.",
        ],
      },
      {
        h: "Then decide how many jobs you want",
        p: [
          "Multiply what you can afford per job by the number of extra jobs you want each month, then add management. That is a real number derived from your own economics rather than an industry rule of thumb.",
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
          "Below a certain monthly ad spend, most campaigns cannot gather enough data to improve. The platforms need a volume of conversions before their optimisation does anything useful, and a budget that produces only a handful of leads a month never gets there.",
          "Splitting a small budget across two channels is generally worse than spending nothing, because it costs money and teaches you nothing.",
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
          "Publish a range with the conditions attached — the lowest and highest a full bathroom installation realistically comes to, and what moves it between the two.",
          "That tells somebody whose budget is well below the range to look elsewhere, tells somebody inside it that they are in the right place, and commits you to nothing.",
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
          "A page that says what a standard boiler service in Kildare costs and how long it takes is quotable. A page that says 'we pride ourselves on exceptional service' is not.",
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
          "If you can attach a value to conversions — even a rough average — the platforms can optimise toward revenue rather than volume. A business where some jobs are worth a fraction of others is badly served by counting both as one conversion.",
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
          "A website on a small monthly fee with no upfront cost can be reasonable, or can be a lease you never stop paying, where you own nothing and leaving means starting again.",
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
      "What a bargain website actually leaves out, how to tell whether yours is costing you enquiries, and when cheap is genuinely the right answer.",
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
          "If a better site converts two more visitors a month, that is twenty-four extra jobs a year. Against a one-off build cost, the question answers itself.",
          "If your average job is small and you get most work by referral, the same spend makes very little sense. The answer genuinely depends on your numbers, not on a principle.",
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
      "Every business says most of its work comes from word of mouth, and almost none of them do anything deliberate about it. The schemes that get tried — refer a friend for money off — usually fail, and it is worth understanding why before building another one.",
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
          "If your ad budget is small, management fees will consume most of the value and you would be better learning the basics yourself.",
          "If you enjoy it, have the time, and your market is small enough to be covered by one campaign, there is no mystery here that you cannot learn in a few months.",
        ],
        list: [
          "A small monthly ad budget",
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
  {
    slug: "first-ten-google-reviews",
    title: "How to get your first ten Google reviews",
    description:
      "The hardest reviews to get are the first few. A method that works for Irish trades and service businesses, and the three mistakes that get reviews removed.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Ten reviews is the point where a business stops looking new. Getting from zero to ten is disproportionately hard, because there is no social proof to borrow and no habit of asking. Here is how to do it in about three weeks without annoying anybody or breaking Google's rules.",
    sections: [
      {
        h: "Ask at the moment of relief",
        p: [
          "There is a window, usually a few minutes long, when a customer is visibly pleased that the thing is fixed. That is when to ask, in person, once.",
          "An email three weeks later asks somebody to reconstruct a feeling they have stopped having. The in-person ask at the right moment converts several times better and costs nothing.",
        ],
      },
      {
        h: "Make it one tap",
        p: [
          "Nobody is going to search for your business, find the reviews tab and work out how to write one. You need a direct link, and Google provides one.",
          "In your Google Business Profile there is a 'Ask for reviews' option that gives a short link straight to the review box. Put it in a text message you send the same day. That single change does more than any wording.",
        ],
        list: [
          "Get the short review link from your Google Business Profile",
          "Save it in a text template on your phone",
          "Send it the same day, while the job is fresh",
          "One follow-up after three days, then stop",
          "Thank everyone who leaves one",
        ],
      },
      {
        h: "Go back through the last six months",
        p: [
          "You have customers from earlier in the year who were happy and were never asked. They are the easiest reviews you will ever get.",
          "Send ten messages on a Tuesday morning. Mention the specific job so they remember. Expect three or four to land, which gets you a third of the way in an afternoon.",
        ],
      },
      {
        h: "What gets reviews removed",
        p: [
          "Offering a discount, a voucher or a prize in exchange is against Google's policies and the reviews can be deleted along with, in bad cases, the profile's standing.",
          "So is asking staff or family to leave them, and so is gating — asking happy customers for a review and unhappy ones for private feedback. That last one is common advice and it is against the rules.",
        ],
      },
      {
        h: "Reply to every one",
        p: [
          "A short, human reply under each review is read by everyone deciding whether to ring you, and it signals to Google that the profile is actively managed.",
          "Two sentences. Name the job if you can. It takes a minute and it is the cheapest reputation work available.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "restaurants-and-cafes"],
  },
  {
    slug: "sponsoring-a-local-club",
    title: "Is sponsoring a local club worth it?",
    description:
      "Irish businesses spend thousands on club sponsorship and get almost nothing back, usually because nobody outside the club ever finds out about it.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Almost every Irish small business is asked to sponsor something — a club, a team, a fundraiser, a programme. Most say yes out of decency and get nothing commercial back. The money is rarely the problem; what is missing is everything that should happen after the cheque.",
    sections: [
      {
        h: "The sponsorship itself is not the marketing",
        p: [
          "A logo on a jersey is seen by people at matches, most of whom already know you exist. That is goodwill, and goodwill is worth something, but it is not a campaign.",
          "The commercial value comes from what you do with it: the announcement, the photographs, the website link, the mention in the club's newsletter, and the fact that you can now honestly say you support the club when you advertise locally.",
        ],
      },
      {
        h: "Ask for the link",
        p: [
          "Almost every club has a website with a sponsors page. A link from it is a real, relevant, local backlink — the kind that is genuinely hard to get and that improves how often Google crawls your site.",
          "You have already paid for it. Most businesses never ask, and most clubs are happy to add it. This is the single most valuable and most commonly wasted part of Irish club sponsorship.",
        ],
        list: [
          "A link from the club website to yours",
          "A named mention in the announcement, not just a logo",
          "Permission to use the sponsorship in your own advertising",
          "Photographs you are allowed to publish",
          "A mention in the match programme or newsletter",
        ],
      },
      {
        h: "Make the announcement do work",
        p: [
          "A club posting 'thanks to our sponsor' reaches the club's followers. You posting the same thing reaches yours, and the two together reach considerably more people than either alone.",
          "Put a modest budget behind your own post targeted at the town. It costs very little and it turns a private arrangement into local visibility.",
        ],
      },
      {
        h: "When to say no",
        p: [
          "If the club is not in an area you serve, if the sponsorship is purely a logo with no link and no mention, or if you are being asked mainly because you are known to say yes.",
          "Saying no to sponsorship that produces nothing is not meanness. It leaves money for the one that does.",
        ],
      },
      {
        h: "The honest arithmetic",
        p: [
          "A few hundred euro for a jersey, properly used, buys a real backlink, local goodwill, content for the year and a story you can tell in your advertising.",
          "The same money spent with none of that buys a logo on a jersey. Same cheque, entirely different outcome.",
        ],
      },
    ],
    related: ["roofers", "landscapers", "gyms-and-fitness"],
  },
  {
    slug: "google-profile-suspended",
    title: "Your Google Business Profile got suspended. What now?",
    description:
      "Suspension removes you from the map results overnight. Why it happens to Irish businesses, what to do in the first hour, and how long reinstatement takes.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "A suspended Google Business Profile disappears from the map results immediately, which for a local business usually means the phone stops. It happens more often than people expect and almost always for a fixable reason. Panicking and changing everything makes it worse.",
    sections: [
      {
        h: "Do not edit anything yet",
        p: [
          "The instinct is to start fixing whatever might have caused it. Resist that for an hour.",
          "Editing the profile during a suspension can complicate the appeal, and you need to know what triggered it before you change anything. Take a screenshot of the profile as it stands first.",
        ],
      },
      {
        h: "The usual causes in Ireland",
        p: [
          "Keyword stuffing the business name is the most common — adding 'Roofing Dublin' to a name that is legally just a surname. Competitors report it and Google acts.",
          "After that: a virtual office or a mailbox as the address, a service-area business showing a home address that keeps changing, multiple profiles at one address, a sudden category change, or a burst of reviews that looked bought.",
        ],
        list: [
          "Business name that is not the real trading name",
          "An address that is a mailbox, coworking desk or virtual office",
          "Two profiles for the same business at the same address",
          "A big category change made all at once",
          "A sudden cluster of reviews, especially from one device",
        ],
      },
      {
        h: "What the appeal needs",
        p: [
          "Evidence that the business is real and located where it says. Utility bills, a bank statement showing the address, signage photographs, vehicle livery, a lease or a rates bill.",
          "Send it once, completely. Repeated appeals with partial evidence take longer, and submitting several appeals at once can stall the whole thing.",
        ],
      },
      {
        h: "How long it takes",
        p: [
          "Days if the evidence is clean and the cause obvious. Weeks if the address is genuinely ambiguous or the appeal is incomplete.",
          "In the meantime you are invisible in the map results, which is the argument for having something other than the profile producing enquiries — paid, referrals, or a site that ranks organically.",
        ],
      },
      {
        h: "Preventing it",
        p: [
          "Use your actual trading name. Use a real address or hide it properly as a service-area business. Do not run two profiles for one location. Earn reviews steadily rather than in bursts.",
          "None of that is difficult. Nearly every suspension we see traces back to somebody being slightly clever with one of those five things.",
        ],
      },
    ],
    related: ["estate-agents", "car-garages", "restaurants-and-cafes"],
  },
  {
    slug: "facebook-reach-collapsed",
    title: "Why your Facebook page reach collapsed",
    description:
      "Organic reach on a business page has been falling for a decade. What actually changed, what still works, and why boosting a post is usually the wrong fix.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Most Irish business pages reach a small fraction of their followers, and owners reasonably conclude the platform has stopped working. It has not, exactly — but what a page reaches for free and what it can reach for money are now two very different things, and treating them as one is where the money goes.",
    sections: [
      {
        h: "Followers were never an audience",
        p: [
          "A follower is somebody who once tapped a button. Facebook has spent a decade deciding that a feed full of business posts is worse than a feed full of friends and video, and it shows business pages to fewer of their own followers every year.",
          "That is not going to reverse. A page with three thousand followers reaching sixty of them is normal, not broken.",
        ],
      },
      {
        h: "What still gets organic reach",
        p: [
          "Things people respond to rather than scroll past: before-and-afters, a genuine local story, something being built or finished, a face, and anything people tag each other in.",
          "Links out of the platform and plain promotional posts get the least. That is not a conspiracy, it is what the feed is optimised for.",
        ],
        list: [
          "Before-and-after photographs of real work",
          "Short video of something being done, filmed on a phone",
          "A named local job people recognise",
          "Anything that makes somebody tag a friend",
          "Replying in the comments, which extends reach further than the post",
        ],
      },
      {
        h: "Boosting is not advertising",
        p: [
          "The Boost button spends money to show a post to more people. It is not the same as a campaign with an objective, an audience and a lead form, and it optimises for engagement rather than for enquiries.",
          "Boosted posts produce likes. Properly built campaigns produce enquiries. A great deal of Irish small business ad spend goes into the first while the owner wonders where the second is.",
        ],
      },
      {
        h: "The practical version",
        p: [
          "Post because it keeps the page looking alive for the people who check you out before ringing. That is a real job and it is worth doing.",
          "Run actual campaigns when you want enquiries. Expect the page itself to reach very few people for free, and stop measuring your marketing by it.",
        ],
      },
    ],
    related: ["restaurants-and-cafes", "landscapers", "gyms-and-fitness"],
  },
  {
    slug: "traffic-up-enquiries-down",
    title: "Traffic went up but enquiries went down",
    description:
      "The most common and most misread pattern in small business marketing. Four causes, and how to tell which one you have in about twenty minutes.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "More visitors and fewer enquiries feels like a contradiction and it is usually a straightforward diagnosis. It almost always means you are reaching more of the wrong people, or the same people are hitting something that stops them.",
    sections: [
      {
        h: "Cause one: the traffic changed",
        p: [
          "A campaign widened its targeting, a page started ranking for a term with different intent, or a piece of content brought in readers rather than buyers.",
          "Check which pages gained the traffic. If the growth is on a blog post or a broad informational page, nothing is broken — those visitors were never going to ring. Judge the pages that were always meant to convert.",
        ],
      },
      {
        h: "Cause two: something broke",
        p: [
          "Forms stop sending. A phone number changes and nobody updates the site. A page starts erroring on mobile only. Tracking is removed in an update, so enquiries are arriving and not being counted.",
          "Submit your own form and ring your own number from a mobile. It takes two minutes and it is the single most common cause we find.",
        ],
        list: [
          "Submit the form yourself and confirm the email arrives",
          "Tap the phone number on a phone and check it dials",
          "Load the page on mobile data, not wifi",
          "Check whether the enquiry email is going to spam",
          "Confirm the tracking still fires",
        ],
      },
      {
        h: "Cause three: you started competing differently",
        p: [
          "If you raised prices, changed your offer, or started ranking against stronger competitors on a comparison-heavy search, more people may be arriving and finding you are not what they wanted.",
          "That is not necessarily bad. Fewer, better-qualified enquiries at a higher price is a good trade. Check what the enquiries you did get were worth before concluding anything.",
        ],
      },
      {
        h: "Cause four: the follow-up slipped",
        p: [
          "Enquiries arriving and not being answered quickly produces fewer jobs, and to the owner it feels like fewer enquiries.",
          "Count the enquiries received, not the jobs won, before deciding the marketing broke. They are frequently different problems with different fixes.",
        ],
      },
    ],
    related: ["roofers", "solar-installers", "kitchens"],
  },
  {
    slug: "what-ill-get-back-to-you-costs",
    title: "The real cost of saying I will get back to you",
    description:
      "A quote that takes four days loses to one that takes four hours, regardless of price. The arithmetic of response time for Irish trades and service businesses.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "Almost every business we look at has the same leak in the same place: enquiries arrive, somebody means to reply, and by the time they do the customer has booked elsewhere. It is not a marketing problem and no amount of budget fixes it.",
    sections: [
      {
        h: "First is not a small advantage",
        p: [
          "A homeowner who contacts three businesses forms a provisional decision when the first one replies, and compares the other two against it. Being first means being the benchmark.",
          "For urgent work — a leak, no heat, a broken appliance — it is close to decisive. Whoever answers gets the job and price barely enters into it.",
        ],
      },
      {
        h: "Work out your own number",
        p: [
          "Take last month's enquiries and the jobs that came from them. Then estimate how many of the ones you lost went to somebody who replied sooner.",
          "Most owners land somewhere between a quarter and a half. At an average job value, that is usually a larger number than their entire advertising budget.",
        ],
      },
      {
        h: "What to change, in order",
        p: [
          "An automatic acknowledgement that gives a specific time you will ring. Not a robot message — a sentence that sounds like you.",
          "Then a fixed slot in the day for quoting, rather than 'the evening', which in practice means Sunday.",
          "Then a price range on the phone for the jobs you have done a hundred times, instead of a site visit that delays everything by three days.",
        ],
        list: [
          "Auto-reply naming a time you will ring",
          "A fixed daily slot for quotes, not evenings",
          "Phone ranges for standard jobs",
          "One follow-up on quotes after four days",
          "Someone else answering when you are on a roof",
        ],
      },
      {
        h: "The uncomfortable bit",
        p: [
          "Response time is not a marketing spend, it is an operational habit, and it is harder to change than a budget.",
          "But it is free, it compounds, and until it is fixed every euro spent on advertising is buying enquiries that leak out the same hole.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "roofers", "electricians"],
  },
  {
    slug: "raising-your-prices",
    title: "How to raise your prices without losing customers",
    description:
      "Most Irish trades and service businesses are underpriced and know it. A practical method for raising prices that does not cost you the customers worth keeping.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Almost every owner-run business we work with is charging less than it should, usually because the price was set years ago when they were starting and has crept up with inflation rather than with skill. Here is how to fix that without a painful month.",
    sections: [
      {
        h: "Raise it for new customers first",
        p: [
          "You do not have to tell anybody. Quote the new price on the next enquiry and see what happens.",
          "Most businesses discover the conversion rate barely moves, which tells them the old price was never the reason people were saying yes. That is the cheapest possible test and it takes a fortnight.",
        ],
      },
      {
        h: "Existing customers are a separate decision",
        p: [
          "Recurring customers deserve notice — a month is normal and decent — and an explanation that is honest rather than apologetic. Costs have risen, the service has improved, this is the new rate.",
          "Expect to lose a few. The ones you lose are almost always the ones who took the most time and complained most, and the maths usually improves immediately even with fewer customers.",
        ],
      },
      {
        h: "Raise the floor, not everything",
        p: [
          "If a full increase feels too much, start with a minimum call-out or minimum job value. It removes the small jobs that consume a day and earn nothing, without touching your rate for real work.",
          "That single change is frequently worth more than a percentage increase across the board.",
        ],
        list: [
          "Quote the new price to new enquiries only, first",
          "Set or raise a minimum job value",
          "Give recurring customers a month's notice",
          "Stop discounting to close — it trains people to ask",
          "Re-quote anything that has been sitting more than six weeks",
        ],
      },
      {
        h: "What to do when someone pushes back",
        p: [
          "Have a number you will not go below and know it before the conversation. Saying 'that is the price' calmly, once, works more often than people expect.",
          "If you discount because somebody asked, you have taught them and everybody they talk to that your price is negotiable, and you will be doing it forever.",
        ],
      },
      {
        h: "The test that settles it",
        p: [
          "If you are busy and turning work away, you are underpriced. If you are quoting constantly and winning most of it, you are underpriced.",
          "Winning roughly half your quotes at a price you are happy with is about right. Winning nearly all of them means the price is too low, not that you are good at selling.",
        ],
      },
    ],
    related: ["builders-and-extensions", "landscapers", "kitchens"],
  },
  {
    slug: "busy-or-profitable",
    title: "Busy is not the same as profitable",
    description:
      "Why a full diary can hide a business that is barely making money, and the three numbers that tell you which one you have.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Plenty of Irish trades and service businesses are working flat out and finishing the year with very little. Being busy feels like success and it is not the same thing, and the difference is usually visible in three numbers most owners do not track.",
    sections: [
      {
        h: "The three numbers",
        p: [
          "What a job is actually worth after materials, travel and the hours nobody bills for. How many hours a week go to work that earns nothing. And what your worst-paying job type actually contributes.",
          "Most owners know their turnover and their bank balance and nothing in between, which is exactly the gap where a busy year turns into a poor one.",
        ],
        list: [
          "Contribution per job after materials and travel",
          "Unbilled hours: quoting, driving, chasing, admin",
          "Which job types you lose money on",
          "How many jobs you turned down and why",
          "Debtor days — how long you wait to be paid",
        ],
      },
      {
        h: "Travel is the hidden killer",
        p: [
          "An hour each way for a two-hour job is a day gone for a fraction of what a local job earns, and it never appears as a loss on any invoice.",
          "Businesses in dispersed counties — Mayo, Donegal, Tipperary — are especially exposed. Tightening the radius frequently raises profit while lowering turnover, which feels wrong and is right.",
        ],
      },
      {
        h: "Small jobs are usually the problem",
        p: [
          "The half-hour call-out with a twenty-minute drive either side earns almost nothing once you count the whole block of time it occupies.",
          "A minimum job value, or a call-out fee, fixes this in a week. Most businesses resist it and then find nothing bad happens.",
        ],
      },
      {
        h: "Turnover is a vanity number",
        p: [
          "A business doing four hundred thousand at a poor margin is harder work and less rewarding than one doing two hundred and fifty at a good one.",
          "If you are going to track one figure, track contribution per working day rather than turnover. It changes which jobs you chase.",
        ],
      },
    ],
    related: ["builders-and-extensions", "plumbers-and-heating", "landscapers"],
  },
  {
    slug: "fake-or-malicious-review",
    title: "What to do about a fake or malicious review",
    description:
      "Competitor reviews, mistaken identity and reviews from people who were never customers. What Google will actually remove and how to get it done.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "A review from somebody who was never a customer is infuriating and it is not the emergency it feels like. Google does remove a proportion of them, slowly and inconsistently, and there are things that help and things that make it worse.",
    sections: [
      {
        h: "Work out which kind it is",
        p: [
          "A fake review from a competitor, a case of mistaken identity where somebody has reviewed the wrong business, or a genuine customer being unfair. Those need completely different responses.",
          "Mistaken identity is the easiest to resolve and surprisingly common where two businesses share a similar name in the same county.",
        ],
      },
      {
        h: "What Google will remove",
        p: [
          "Reviews containing abuse, profanity, personal information or obvious spam. Reviews from a competitor where there is evidence. Reviews clearly about a different business.",
          "What it will generally not remove is a genuine customer being harsh or unreasonable. 'This is unfair' is not a policy violation, however true it is.",
        ],
        list: [
          "Report it once through the profile, with the specific policy it breaches",
          "Keep a screenshot in case it changes",
          "Reply publicly, calmly, without disputing facts",
          "Do not contact the reviewer privately to pressure them",
          "Do not ask staff or family to post reviews to bury it",
        ],
      },
      {
        h: "Reply as if the reviewer is not reading",
        p: [
          "They are not the audience. Everybody deciding whether to ring you is. A short, calm reply that does not dispute or accuse reads far better than a detailed rebuttal.",
          "If you genuinely have no record of them, saying so once and neutrally — that you can find no record of this job and would like to look into it — is both true and effective.",
        ],
      },
      {
        h: "The real defence is volume",
        p: [
          "One bad review among six is damage. One among sixty is invisible and even faintly reassuring, because a business with no criticism at all looks curated.",
          "If a review has hurt you, the answer is not the appeal. It is asking the next twenty happy customers, which most businesses have never systematically done.",
        ],
      },
    ],
    related: ["restaurants-and-cafes", "car-garages", "dentists"],
  },
  {
    slug: "job-ad-that-gets-applicants",
    title: "How to write a job ad that gets applicants",
    description:
      "Irish trades and small employers struggle to hire, and the ad is usually part of the problem. What to change, starting with the thing nobody puts in.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "Most small business job ads in Ireland are written as though applicants are lucky to be considered, and they produce nothing. The people you want are usually employed and reasonably content, which means the ad has to give them a reason to move.",
    sections: [
      {
        h: "Put the money in",
        p: [
          "'Competitive rates' tells a tradesperson you are probably below market, because anybody above market says the number.",
          "A range is enough. This single change does more than everything else combined, and the reluctance to do it is the main reason small employers lose candidates to bigger ones who do.",
        ],
      },
      {
        h: "Write for somebody who is not looking",
        p: [
          "The person you want has a job. They are not scrolling a jobs board, so the ad has to reach them on social and give them a concrete reason to think about it.",
          "Newer vans, better tools, no weekends, local work, no overnight travel, a real finish time. Those move people. 'Fast-paced dynamic team' does not.",
        ],
        list: [
          "Actual pay or a genuine range",
          "Where the work is and how far the travel goes",
          "The hours, honestly, including weekends",
          "One or two real reasons to move",
          "Photographs of the actual team and vans",
          "An application that takes under two minutes",
        ],
      },
      {
        h: "Make applying trivial",
        p: [
          "Nobody is writing a cover letter from a phone at lunchtime. A short form with three questions and a number will out-perform a careers page by a wide margin.",
          "Then reply the same day. Candidates who are not actively looking cool off within days, and the good ones are gone within a week.",
        ],
      },
      {
        h: "Show the place",
        p: [
          "People move jobs to somewhere that looks well run. Photographs of a tidy yard, decent equipment and people who look content do more than any list of benefits.",
          "It is also the same content that wins customers, which is why the two efforts support each other.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "recruitment-agencies"],
  },
  {
    slug: "one-customer-too-big",
    title: "When one customer is too much of your revenue",
    description:
      "A single client worth forty per cent of turnover feels like security and is the opposite. How Irish small businesses end up there and how to get out.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "It usually happens by accident and by degrees. One good customer grows, you make room for them, and two years later they are most of your year. It feels like stability right up until the phone call.",
    sections: [
      {
        h: "Work out the actual number",
        p: [
          "Take last year's invoices and calculate what share your largest customer represents. Then the top three combined.",
          "Anything over about a quarter from one customer is worth watching. Over forty per cent and the business is not really yours to run any more — their decisions become your decisions.",
        ],
      },
      {
        h: "What it costs before anything goes wrong",
        p: [
          "Concentration changes how you behave long before it changes your income. You discount for them. You drop other work for them. You do not raise prices. You tolerate slow payment.",
          "Each of those is rational on its own and together they are why a business with one big customer is frequently less profitable than one with twenty small ones.",
        ],
        list: [
          "What share your largest customer is",
          "How long they have been growing as a share",
          "Whether your prices to them have moved in two years",
          "How long they take to pay compared with everyone else",
          "How many months you could survive losing them",
        ],
      },
      {
        h: "Growing out of it beats cutting",
        p: [
          "The instinct is to reduce the big customer. That is painful and usually unnecessary.",
          "The better route is to grow everything else until the share falls, which means putting real effort into finding customers while you are busy — precisely when it feels least urgent and is most possible.",
        ],
      },
      {
        h: "Advertising is cheap insurance here",
        p: [
          "A modest ongoing marketing spend while you have a full diary from one client is not a cost, it is a hedge. It keeps other work flowing and it means you are not starting from nothing if the call comes.",
          "Businesses that switch marketing off because one customer is keeping them busy are the ones that get hurt worst when it ends.",
        ],
      },
    ],
    related: ["builders-and-extensions", "it-support", "couriers-and-delivery"],
  },
  {
    slug: "should-you-rebrand",
    title: "Should you rebrand?",
    description:
      "A new logo rarely fixes what is actually wrong. When a rebrand genuinely helps an Irish small business, and the four cheaper things to try first.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "Rebranding is appealing because it feels like progress and it is visible. It is also expensive, disruptive and frequently a way of avoiding a harder problem. Here is how to tell which situation you are in.",
    sections: [
      {
        h: "The cheaper things to try first",
        p: [
          "If enquiries are low, the problem is usually visibility, response time, reviews or the website converting badly. All four are cheaper to fix than a rebrand and all four produce faster results.",
          "A new logo on a slow website with no reviews and an unanswered phone changes nothing at all.",
        ],
        list: [
          "Are you visible where your customers search?",
          "Are enquiries answered within the hour?",
          "Do you have more than ten reviews?",
          "Does the website load fast and say what you do?",
          "Have you asked customers why they chose you?",
        ],
      },
      {
        h: "When a rebrand is genuinely right",
        p: [
          "The name limits you — it names a service you no longer lead with, or a town you have outgrown. The name is confusingly close to a competitor's. The business has genuinely changed what it does.",
          "Or there is a reputational reason, which is a real and legitimate one, though it needs handling carefully rather than quietly.",
        ],
      },
      {
        h: "What it costs beyond the design",
        p: [
          "Vehicle livery, signage, workwear, stationery, the website, your Google profile, directory listings, social accounts and every printed thing you have.",
          "And a period where people who knew you no longer recognise you, which for a local business with word-of-mouth referrals is a real cost that nobody budgets for.",
        ],
      },
      {
        h: "If you do it, keep the equity",
        p: [
          "Do not change the name and the look and the positioning at once unless you have to. Whatever recognition you have is worth keeping.",
          "And redirect everything properly — old URLs, the Google profile, the directory listings. Rebrands routinely lose rankings because nobody handled the redirects.",
        ],
      },
    ],
    related: ["estate-agents", "restaurants-and-cafes", "gyms-and-fitness"],
  },
  {
    slug: "competitor-copied-your-website",
    title: "A competitor copied your website. What can you do?",
    description:
      "It happens more than you would think in Irish trades. What is actually enforceable, what to do first, and why it matters less than it feels.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "Finding your own words on a competitor's website is genuinely annoying. There are things worth doing about it and a larger number not worth the energy, and telling them apart saves a bad week.",
    sections: [
      {
        h: "Copying text is a copyright matter",
        p: [
          "Original copy you paid for or wrote is protected by copyright, and lifting it is an infringement. Layout and general design are much harder to claim.",
          "So the enforceable complaint is usually about text and photographs, particularly photographs of your own work, which are unambiguous.",
        ],
      },
      {
        h: "The practical steps, in order",
        p: [
          "Screenshot everything with dates. Check whether their site is newer than yours using the Internet Archive.",
          "Then a polite email asking them to remove it. That resolves it more often than people expect, because it is frequently a web designer who did it rather than the owner.",
        ],
        list: [
          "Screenshot both sites with the date visible",
          "Check the Internet Archive for which came first",
          "A polite email to the business owner first",
          "A DMCA notice to their host if that fails",
          "Google's copyright removal request as a last resort",
        ],
      },
      {
        h: "Why it matters less than it feels",
        p: [
          "Duplicate text does not usually hurt your rankings — Google generally works out which came first, and the copier gains very little.",
          "What actually wins is the material they cannot copy: your photographs of your own jobs, your reviews, your Google profile, your response time. Those are the things a competitor cannot lift.",
        ],
      },
      {
        h: "The useful response",
        p: [
          "Send the email, then go and add the things that cannot be copied. Recent photographs with dates, named local jobs, reviews from this month.",
          "A copied website is always slightly out of date and always generic. Making yours specific and current is a better use of the annoyance than a fortnight of legal correspondence.",
        ],
      },
    ],
    related: ["roofers", "landscapers", "kitchens"],
  },
  {
    slug: "marketing-when-you-cannot-scale",
    title: "Should you advertise if you cannot take more work?",
    description:
      "Generating enquiries you have to turn down damages your reputation and wastes money. What to do instead when the constraint is capacity, not demand.",
    date: "2026-09-27",
    minutes: 5,
    intro:
      "A surprising number of businesses ask us to increase their marketing when their actual problem is that they cannot deliver any more than they already are. Advertising into that produces frustrated callers and one-star reviews from people who were never served.",
    sections: [
      {
        h: "Turning people away is not free",
        p: [
          "Somebody who rings, waits for a call back and is told you are booked until March does not think 'they must be good'. They think you wasted their week, and a proportion of them say so publicly.",
          "Every one of those was also paid for. You bought an enquiry in order to disappoint somebody.",
        ],
      },
      {
        h: "Raise prices before raising budget",
        p: [
          "If demand exceeds capacity, the price is too low. That is not a marketing opinion, it is arithmetic, and it is the correct first response.",
          "Higher prices reduce demand to match capacity and increase what each job earns. The business gets less busy and more profitable at the same time.",
        ],
        list: [
          "Raise prices until you are winning about half your quotes",
          "Set or raise a minimum job value",
          "Build a waiting list instead of saying no",
          "Reduce spend rather than stopping it",
          "Spend the difference on reviews, photographs and the website",
        ],
      },
      {
        h: "Keep a waiting list, not a no",
        p: [
          "Somebody who rings when you are full is a customer you already paid to acquire. Telling them no sends them elsewhere permanently; offering a date in six weeks keeps a good share of them.",
          "This is the cheapest capacity a business has and most never build it.",
        ],
      },
      {
        h: "What to spend the money on instead",
        p: [
          "Reviews, photographs, the website, and the content that will rank in three months. All of it compounds and none of it generates an enquiry you have to refuse today.",
          "Then when capacity opens — a new van, a new hire, a quiet season — you are already visible instead of starting cold.",
        ],
      },
    ],
    related: ["landscapers", "builders-and-extensions", "roofers"],
  },
  {
    slug: "how-to-fire-a-supplier-or-agency",
    title: "How to leave a supplier without losing your accounts",
    description:
      "Websites, ad accounts, domains and profiles are routinely held by whoever set them up. What to secure before you give notice, in the right order.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "The worst time to discover you do not own your own ad account is the week you decide to leave whoever runs it. A short checklist, done before any conversation, prevents nearly every version of this going wrong.",
    sections: [
      {
        h: "Find out what you actually own",
        p: [
          "Domain registration, hosting, the website files, the Google Ads account, the Meta business account and ad account, the Google Business Profile, analytics, and any email attached to the domain.",
          "Each of these can be held by an agency or a designer, and each is painful to recover afterwards. Check all of them before you say anything.",
        ],
        list: [
          "Domain — registered in your name, on your account",
          "Hosting — in your name",
          "Google Ads account — yours, with you as owner",
          "Meta Business Manager — your business owns the assets",
          "Google Business Profile — you have primary ownership",
          "Analytics — your account, not theirs",
          "The website files and any custom code",
        ],
      },
      {
        h: "Secure ownership before giving notice",
        p: [
          "Ask to be made owner rather than manager on each account. This is a normal request and a reluctance to grant it tells you a great deal.",
          "Do it as routine housekeeping rather than as a prelude to leaving, and it is usually straightforward.",
        ],
      },
      {
        h: "Ad account history is worth real money",
        p: [
          "Google and Meta accounts accumulate learning and history that make campaigns cheaper to run. Starting a fresh account throws that away and the first months cost more.",
          "This is the most commonly overlooked asset in an agency change and it is frequently worth more than the website.",
        ],
      },
      {
        h: "Leave properly",
        p: [
          "Give the notice in the contract, in writing, and ask for a handover list. Most of it is professional courtesy and most agencies will oblige.",
          "If they will not, having already secured ownership means it costs you a fortnight of awkwardness rather than your accounts.",
        ],
      },
    ],
    related: ["it-support", "accountants", "solicitors"],
  },
  {
    slug: "what-to-do-in-a-quiet-month",
    title: "What to do in a quiet month",
    description:
      "A gap in the diary is the only time you have to fix the things that cause gaps in the diary. Nine things worth doing, in order of what pays back fastest.",
    date: "2026-09-27",
    minutes: 6,
    intro:
      "Quiet months are when most small businesses either panic-discount or do nothing. They are also the only time available for the work that makes the next quiet month less likely, and almost all of it is free.",
    sections: [
      {
        h: "Ask for reviews first",
        p: [
          "Go through the last six months of customers and ask the happy ones. It costs nothing, it takes an afternoon, and reviews affect both your map ranking and whether people ring you.",
          "If you do one thing on this list, do this one. It is the highest return available to a business with time and no money.",
        ],
      },
      {
        h: "Then the things that compound",
        p: [
          "Photographs of finished work, filed properly. Content for the searches you want in three months. Your Google profile completed fully. Old quotes followed up. Past customers contacted where there is a genuine reason.",
          "None of it produces work this week, which is why it never gets done in a busy month, and all of it produces work later.",
        ],
        list: [
          "Ask the last six months of customers for reviews",
          "Photograph and file finished work properly",
          "Complete every field on your Google profile",
          "Follow up quotes older than three weeks",
          "Contact past customers where something is genuinely due",
          "Write the pages you want ranking in three months",
          "Fix whatever is slow or broken on the website",
          "Ask three suppliers to list you on their site",
          "Work out what your best job type actually earns",
        ],
      },
      {
        h: "Ask suppliers for a link",
        p: [
          "Manufacturers, wholesalers and trade bodies frequently have 'approved installer' or 'stockist' pages. A link from one is relevant, real and genuinely hard to get any other way.",
          "You already have the relationship. It takes three emails and it is one of the few things that measurably improves how often Google crawls your site.",
        ],
      },
      {
        h: "What not to do",
        p: [
          "Do not discount to fill the diary. It trains customers to wait for a quiet month and it drags your rate down for everybody.",
          "And do not switch the advertising off. Restarting costs more than keeping it running at a lower budget, and a quiet month is exactly when you need the pipeline building.",
        ],
      },
    ],
    related: ["roofers", "landscapers", "painters-and-decorators"],
  },
  {
    slug: "roofing-advertising-google-or-meta",
    title: "Google or Facebook ads for a roofing company?",
    description:
      "The honest answer for an Irish roofer: Google for the leak today, Meta for the re-roof next spring, and why starting with both usually fails.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Almost every roofer who rings us has tried one of the two and concluded that advertising does not work. Usually they tried the wrong one for the work they wanted. Google and Meta do genuinely different jobs for a roofing business, and the difference is not a matter of preference — it is a matter of whether the customer already knows they have a problem.",
    sections: [
      {
        h: "Google catches the problem that already exists",
        p: [
          "Somebody with water coming through a bedroom ceiling opens their phone and types 'roof repair' and their town. They are not browsing. They will ring two or three numbers in the next ten minutes and book whoever answers and can come.",
          "That is what Google Ads buys: a person at the exact moment of need. It is expensive per click — in Dublin, roofing clicks run well above the national average — and it is worth it, because the intent is already there and you are only paying to be in front of somebody who has decided to spend money today.",
          "The limitation is volume. There are only so many people searching for a roofer in your county on any given Tuesday, and in a quiet week there may be very few. Google cannot create demand. It can only capture what already exists.",
        ],
      },
      {
        h: "Meta creates the job that was not urgent yet",
        p: [
          "A re-roof is rarely an emergency. Most of them are jobs a homeowner has known about for two or three years, has been quietly dreading the cost of, and has never quite got around to.",
          "That person is not searching. They will never appear in a Google campaign. But they will stop on a photograph of a house like theirs with a new roof on it, especially if the caption says what it cost and how long it took.",
          "Meta reaches them at a fraction of Google's cost per click, because you are buying attention rather than intent. The trade-off is that the enquiries are softer, slower and need a real follow-up process. A roofer who treats a Meta lead like a Google lead — one call, no answer, bin it — will conclude Meta does not work.",
        ],
      },
      {
        h: "Which one first",
        p: [
          "If your problem is that the phone is quiet this month, start with Google. It produces work fastest and the enquiries need the least handling.",
          "If your problem is that you are busy with small repairs and want bigger jobs, start with Meta. Re-roofs, flat-roof replacements and full-house work are almost always built rather than caught.",
          "What does not work is starting both at once on a small budget. Split three hundred euro a month across two platforms and neither has enough data to learn, both look like failures, and the roofer concludes advertising is a scam. One channel, properly funded, beats two half-funded ones every time.",
        ],
      },
      {
        h: "What each needs to actually work",
        p: [
          "Google needs a phone that gets answered, a negative keyword list built before launch, and location settings tight enough that you are not paying for clicks from counties you do not serve. Most inherited roofing accounts fail on at least two of those.",
          "Meta needs real photographs. Not stock, not a render, not a logo on a gradient — photographs of roofs you have actually done, ideally with the house visible, ideally before and after. It also needs a follow-up sequence, because a good proportion of those enquiries convert on the third contact rather than the first.",
        ],
        list: [
          "Google: answered phone, negatives, tight location, a landing page that matches the search",
          "Meta: your own photographs, a qualifying form, and a follow-up that runs past one call",
          "Both: call tracking, or you will never know which one is producing the work",
        ],
      },
      {
        h: "The honest summary",
        p: [
          "Google is the better first channel for most roofers. Meta is the better second channel for almost all of them, and for anyone chasing re-roofs rather than repairs it eventually becomes the bigger one.",
          "If you want to know which your county actually supports, we will look at what roofing ads are already running there, what the searches cost, and what your map results look like, and tell you which one to start with.",
        ],
      },
    ],
    related: ["roofers", "gutter-cleaning", "builders-and-extensions"],
  },
  {
    slug: "roofing-google-ads-wasted-clicks",
    title: "The roofing searches you are paying for and should not be",
    description:
      "Roofing job ads, DIY searches, wholesalers and course enquiries all cost you money on a default Google Ads setup. Here is the list to block first.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Roofing is one of the worst trades in Ireland for wasted Google Ads spend, and the reason is simple: the word 'roofing' appears in a very large number of searches made by people who will never hire a roofer. On a default campaign setup you pay for all of them. On most accounts we look at, somewhere between a quarter and a half of the spend is going to searches that could not possibly become a job.",
    sections: [
      {
        h: "Job seekers are the biggest single leak",
        p: [
          "'Roofing jobs', 'roofer wanted', 'roofing apprenticeship', 'roofing labourer' — these are people looking for employment, and there are a great many of them. Broad and phrase match will serve your ad to all of them unless you have told Google not to.",
          "This is usually the largest single category of waste in a roofing account, and it is the easiest to eliminate. Blocking the employment words takes five minutes and frequently cuts a fifth off the bill with no loss of enquiries.",
        ],
        list: [
          "jobs, job, vacancy, vacancies, hiring, wanted, apprentice, apprenticeship",
          "salary, wage, wages, pay, career, careers, recruitment, cv",
        ],
      },
      {
        h: "DIY and price research",
        p: [
          "'How to fix a roof leak', 'roof felt B&Q', 'how to replace a slate' — someone is going up the ladder themselves. 'Roofing materials', 'roof tiles price', 'roofing supplies near me' — someone is buying materials, not labour.",
          "Some of these are arguable. A person researching how to fix a leak sometimes gives up and rings a roofer. But they click at a high rate and convert at a very low one, and on a limited budget they are displacing somebody who is ready to buy.",
        ],
        list: [
          "how to, diy, yourself, tutorial, video, youtube",
          "b&q, woodie's, screwfix, wickes, supplies, wholesale, materials, sheets, felt roll",
        ],
      },
      {
        h: "Courses, training and qualifications",
        p: [
          "'Roofing course', 'roofing certificate', 'roof safety training', 'solas roofing' — education searches, and they are more common than most roofers expect.",
          "In Limerick and Cork especially, broad university and college traffic drifts into trade campaigns and quietly eats budget.",
        ],
        list: [
          "course, courses, training, qualification, certificate, diploma, college, solas, city and guilds",
        ],
      },
      {
        h: "Wrong locations and wrong countries",
        p: [
          "Google's default location setting is 'presence or interest', which means your Dublin roofing ad can be shown to somebody in Manchester reading about Dublin. Set it to presence only — people in or regularly in your locations — and a whole category of nonsense disappears.",
          "Add the obvious geographic negatives too: UK cities, US states and the counties you genuinely do not serve. A roofer in Galway paying for Belfast clicks is not rare.",
        ],
      },
      {
        h: "The free and cheap crowd",
        p: [
          "'Free roof inspection' and 'roof grant' searches can be fine if you offer those things and say so. If you do not, they are expensive disappointments on both sides.",
          "'Cheap roofer', 'cheapest roof repair' — you can take a view on these. Our experience is that the jobs are small, the customers are difficult and the margin is not there.",
        ],
        list: [
          "free, grant, cheap, cheapest, budget, second hand, used",
        ],
      },
      {
        h: "How to find your own",
        p: [
          "The lists above are a starting point, not an answer. The real list comes from your own search terms report, which shows the actual phrases people typed before clicking your ad. It is under Insights in the Google Ads interface and most roofers have never opened it.",
          "Read it once a week for the first month and once a month after that. Every wasted term you block is money moved to the searches that do become jobs, which on a roofing budget is the difference between the channel working and the channel not.",
          "If you would rather somebody else did it, send us the account name and we will read the search terms report and tell you what it is spending on. That part is free and takes us about an hour.",
        ],
      },
    ],
    related: ["roofers", "powerwashing", "windows-and-doors"],
  },
  {
    slug: "starting-a-roofing-business-ireland-marketing",
    title: "Starting a roofing business in Ireland: getting the work in",
    description:
      "The trade side of a new roofing business is the part you already know. This is the other half: how the first jobs actually arrive in year one.",
    date: "2026-09-28",
    minutes: 8,
    intro:
      "If you are starting out on your own after years on somebody else's crew, the roofing is the part you are least worried about. The part that catches people is the quiet weeks — the stretch where you have the van, the insurance and the skill, and no phone calls. This is what actually generates the first jobs, in the order that works.",
    sections: [
      {
        h: "Before anything else: the Google Business Profile",
        p: [
          "A verified Google Business Profile is free, takes about a week to get verified by post, and is the single largest source of enquiries for most small roofing firms in Ireland. It is what puts you in the map results when somebody searches for a roofer in your town.",
          "Do it on day one, because verification takes time and because the profile needs to accumulate reviews and photographs before it performs. A profile created the week you need work is a profile that will not help you for months.",
        ],
      },
      {
        h: "The first ten reviews matter more than the next fifty",
        p: [
          "Going from no reviews to ten changes everything about how you appear. Going from forty to fifty changes almost nothing. In your first year the reviews are the highest-value asset you can build, and they are free.",
          "Ask every single customer, on the day, in person, while they are standing there looking at the finished work and feeling good about it. Not by text a week later. The conversion rate on asking face to face at the moment of handover is several times higher than any other method.",
          "Get the link on your phone so you can hand them the phone with the page already open. Most people will not go looking.",
        ],
      },
      {
        h: "A website that answers three questions",
        p: [
          "You do not need a large website. You need one that answers what you do, where you do it, and what it looks like when you have done it.",
          "Where you do it is the one new roofers skip and it is the one that decides whether you appear in searches. List the actual towns. Not 'the Leinster area' — Naas, Newbridge, Kilcullen, Sallins, by name.",
          "What it looks like means photographs of your own work. Nothing else on a roofing website does as much, and nothing else is as easy to gather while you are already up there.",
        ],
      },
      {
        h: "Photograph everything from the first job",
        p: [
          "Before, during and after, on every job, from the very first one. It costs nothing and thirty seconds, and in eighteen months it is the asset your competitors cannot buy.",
          "New roofers almost universally regret not doing this. Six months in you have twenty jobs done and four usable photographs, all of them taken after the scaffold came down when the light was wrong.",
        ],
      },
      {
        h: "Where the first jobs actually come from",
        p: [
          "Honestly, in roughly this order: people who already know you, the Google Business Profile, van signage, and then paid advertising once there is cash flow to fund it.",
          "The people who already know you part is not a small thing. Every builder, plumber, electrician and estate agent you have worked alongside is a potential source of referrals, and they refer to whoever they remember. Telling fifty of them that you have gone out on your own is a morning's work with a better return than any first-year ad campaign.",
        ],
        list: [
          "Tell every trade contact you have started, individually, not in a group message",
          "Verify the Google Business Profile and add photographs weekly",
          "Get the van signed with the trade, the number and the county",
          "Ask every customer for a review, face to face, on the day",
          "Start paid advertising when you can fund three months of it, not one",
        ],
      },
      {
        h: "When to start advertising",
        p: [
          "Not immediately. Advertising into a business with no reviews, no photographs and no website converts badly, and you will spend money learning that the hard way.",
          "Get the profile verified, gather the first eight or ten reviews, build up a photograph library from the first months of work, and then advertise. The same budget will produce noticeably more at that point, because the person who clicks now finds something that reassures them.",
          "Fund it for three months minimum when you do start. One month of advertising tells you nothing — the platforms need the data and you need enough enquiries to judge the pattern.",
        ],
      },
      {
        h: "The mistake that costs the most",
        p: [
          "Buying leads from a national portal to get going. It feels like a shortcut and it teaches you nothing, because the customer never learns your name. Three years in you have the same problem, except now you are dependent on a supplier who can raise the price whenever they like.",
          "Everything above builds an asset you own. The lead portal builds theirs.",
        ],
      },
    ],
    related: ["roofers", "builders-and-extensions", "plumbers-and-heating"],
  },
  {
    slug: "how-to-get-roofing-jobs-without-buying-leads",
    title: "How to get roofing jobs without buying leads",
    description:
      "Six routes to roofing work that do not involve a lead portal, ranked by what they actually produce for an Irish contractor in a normal year.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Buying leads is the fastest way to get roofing work and the worst way to build a roofing business. You are renting access to customers who will never know your name, at a price somebody else controls, in a queue with three other roofers. Here is what works instead, ranked honestly by what it produces rather than by what sounds best.",
    sections: [
      {
        h: "1. The Google map results",
        p: [
          "For most Irish roofers this is the largest free source of work there is, and the thing that decides it is the combination of a verified profile, a steady flow of reviews and how close you are to the person searching.",
          "Proximity you cannot change. The other two you can, and most roofers do neither. A profile with forty reviews and photographs added monthly will beat one with six reviews and none, from a business the same distance away, almost every time.",
        ],
      },
      {
        h: "2. Reviews, asked for properly",
        p: [
          "Reviews do two jobs: they lift you in the map results and they convert the person who finds you. They are the highest-leverage unpaid thing available to a roofing business and almost everyone is bad at getting them.",
          "The method that works is asking in person on the day of completion, with the review page already open on your phone. The methods that do not work are texting a link a week later and hoping, or putting it on the invoice.",
          "Volume matters less than recency. Ten reviews in the last six months reads better than sixty that stop two years ago, to a customer and to Google both.",
        ],
      },
      {
        h: "3. Other trades",
        p: [
          "Builders, plumbers, electricians, plasterers and window fitters are all standing in houses that need roof work, and they all get asked 'do you know a good roofer?'.",
          "The roofer who gets that referral is the one they can remember and reach. That means being actively useful to those trades — turning up when you say, not undercutting them in front of a client, and returning the favour. It is slow, it costs nothing, and for established roofers it is frequently the single biggest source of work.",
        ],
      },
      {
        h: "4. Repeat and neighbour work",
        p: [
          "A roof lasts decades, so repeat business from the same customer is rare. Neighbour work is not. Houses on a street were built at the same time and their roofs fail at the same time.",
          "A signed van parked on a road for three days is advertising to twenty households with the same problem. Some roofers leave a card in the neighbours' doors while the scaffold is up; the ones who do it consistently report it as one of the better-converting things they do.",
        ],
      },
      {
        h: "5. Van signage and site presence",
        p: [
          "Cheap, permanent, and consistently undervalued. The trade, a phone number large enough to read from a car, and the county. Nothing else.",
          "The mistake is a small number, a busy design and no indication of where you work. Somebody sitting behind you in traffic has about four seconds.",
        ],
      },
      {
        h: "6. Your own website, for the searches that are not urgent",
        p: [
          "A person with water coming in rings the first number in the map results. A person planning a re-roof for the spring reads first, and what they read decides who gets the quote.",
          "That is what a website earns you — the planned, larger, better-paying work that does not go to whoever answers fastest. It needs photographs of your own jobs, the towns you cover named explicitly, and straightforward answers about how the process works.",
        ],
      },
      {
        h: "What this adds up to",
        p: [
          "None of these produce work tomorrow, which is exactly why roofers buy leads instead. They compound. A profile with two years of reviews, a photograph library, a set of trades who refer you and a van everybody in the town recognises is a business that does not have quiet months.",
          "Advertising sits on top of that and works far better because of it. It is not an alternative to any of the above — it is what you add once the foundations are earning.",
        ],
      },
    ],
    related: ["roofers", "gutter-cleaning", "chimney-sweeps"],
  },
  {
    slug: "why-roofers-lose-quotes",
    title: "Why roofers lose quotes they should have won",
    description:
      "It is rarely price. Irish homeowners choosing a roofer are managing a risk, and most quotes do nothing to reduce it. What to change.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Roofers who lose a lot of quotes almost always believe it is because they are dearer. Occasionally that is true. Far more often the customer could not tell the difference between three quotes, was frightened of making an expensive mistake on something they cannot inspect, and chose on whatever signal they could actually read.",
    sections: [
      {
        h: "The customer cannot judge the work",
        p: [
          "A homeowner can look at a kitchen and form an opinion. They cannot get onto a roof, and after the job is done they will never see it again. They are buying something they will never inspect, from somebody they met once, for several thousand euro.",
          "That is a risk decision, not a price decision. Everything that reduces the fear wins the job, and almost nothing about a typical roofing quote reduces it.",
        ],
      },
      {
        h: "A price on a page is not a quote",
        p: [
          "A number in a text message, or a one-line email with a total, gives the customer nothing to judge except the number. So they judge the number, and the cheapest one wins.",
          "A quote that breaks the job into what is being removed, what is going back on, what the materials are, how long it takes and what happens if something unexpected is found underneath is a quote the customer can understand. It also makes a cheaper competing quote look thin, because it usually is.",
        ],
      },
      {
        h: "Photographs of the actual roof",
        p: [
          "You were up there. They were not. Three photographs of their own roof, with the problem circled, does more than any amount of explanation, and almost no roofer sends them.",
          "It proves you looked properly, it shows them something they physically cannot see themselves, and it makes the price make sense. It takes two minutes.",
        ],
      },
      {
        h: "Speed is judged as competence",
        p: [
          "A quote that arrives the same evening reads as organised. One that arrives nine days later reads as a business that might also be nine days late starting the job.",
          "Customers explicitly tell us this. The most common reason given for choosing a tradesperson, after a recommendation, is that they came back quickly and did what they said they would.",
        ],
      },
      {
        h: "The follow-up nobody does",
        p: [
          "Most roofers send a quote and wait. A large share of quotes are simply forgotten — the customer got busy, the other quote came in, life happened.",
          "One call three days later asking whether they have any questions recovers a meaningful proportion of them. It is not pushy and it is not clever. It is just that almost nobody does it, so the roofer who does is the one still in mind when the decision gets made.",
        ],
      },
      {
        h: "What to change this week",
        p: [
          "None of this is marketing spend. It is process, and it changes the close rate on the leads you already have, which is usually worth more than doubling the leads.",
        ],
        list: [
          "Send quotes the same day, or the next morning at the latest",
          "Include photographs of their roof with the problem marked",
          "Break the price into removal, materials, labour and timeline",
          "Say in writing what happens if something is found underneath",
          "Ring once, three days later, to ask if they have questions",
        ],
      },
      {
        h: "Then count them",
        p: [
          "Write down every quote you send and whether you won it. Most roofers cannot tell you their close rate, which means they cannot tell whether a change helped.",
          "If you are winning one in five, the problem is the quote. If you are winning one in two and still quiet, the problem is the number of enquiries, and that is a different fix entirely.",
        ],
      },
    ],
    related: ["roofers", "builders-and-extensions", "windows-and-doors"],
  },
  {
    slug: "google-business-profile-for-roofers",
    title: "The Google Business Profile setup that wins roofing calls",
    description:
      "For most Irish roofers the map results produce more enquiries than everything else combined. The settings and habits that decide where you appear.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "When somebody in Ireland searches for a roofer, the first thing on the screen is the map pack — three local businesses with stars, distance and a call button. A very large share of roofing enquiries never get past it. Getting that right is free, and most roofing profiles are set up badly or abandoned after the first week.",
    sections: [
      {
        h: "Service area, not a shopfront",
        p: [
          "A roofer is a service-area business. You go to the customer; they do not come to you. Set the profile up that way and hide the street address, which Google allows and which stops your home address appearing in search results.",
          "Then set the service area to the towns and counties you genuinely cover. This does not make you rank in all of them — proximity still decides that — but it does tell Google what you do and where, and it stops you appearing for places you cannot reach.",
        ],
      },
      {
        h: "Categories decide which searches you appear in",
        p: [
          "The primary category is the single most influential setting on the profile. For most roofing businesses it should be 'Roofing contractor'. Not 'Contractor', not 'Construction company', not 'Home improvement'.",
          "Add secondary categories for the things you actually do — gutter service, chimney service, roof repair — but only for work you genuinely carry out. The primary one does the heavy lifting and a vague primary category is the most common reason a roofer is invisible in the map results.",
        ],
      },
      {
        h: "Photographs, weekly, from the phone",
        p: [
          "Profiles with a steady flow of recent photographs perform better than profiles with a big batch uploaded once. Google reads activity as a signal that the business is alive.",
          "Upload from the phone on site, where the location data supports the listing. Before and after pairs, the van, the crew, finished ridges and valleys. Ten minutes a week.",
          "It also converts. A customer choosing between three map results looks at the photographs, and a profile with forty real roofs beats one with a logo and nothing else.",
        ],
      },
      {
        h: "Reviews, and replying to them",
        p: [
          "Volume, recency and rating all count, and so does replying. Reply to every review, including the bad ones, briefly and without arguing.",
          "The reply is read by the next customer far more than by the reviewer. A calm, specific response to a complaint reassures people more than a wall of five stars with no replies at all.",
          "Ask on the day, in person, with the page open on your phone. Every other method is a fraction as effective.",
        ],
      },
      {
        h: "Use the parts nobody uses",
        p: [
          "Most roofing profiles never touch these, which is exactly why they are worth doing.",
        ],
        list: [
          "Services: list each one separately with a description — roof repair, re-roofing, flat roofs, gutters, chimney work",
          "Posts: a short update with a photograph every couple of weeks",
          "Q&A: you can ask and answer your own questions, and should — cover call-out charges and areas covered",
          "Hours: accurate, including whether you take emergency calls, because 'open now' filters the results",
          "Messaging: turn it off unless you will genuinely answer it quickly",
        ],
      },
      {
        h: "What you cannot change",
        p: [
          "Proximity. If the searcher is twenty kilometres away and a competitor is two, the competitor wins that search, and no amount of optimisation changes it.",
          "This is worth accepting early. The goal is to dominate your own catchment, not to rank across a county. Roofers who chase county-wide map rankings waste years on something Google's design does not allow.",
          "If you need work outside your catchment, that is what paid advertising is for — it is not bound by proximity in the same way.",
        ],
      },
    ],
    related: ["roofers", "gutter-cleaning", "powerwashing"],
  },
  {
    slug: "roof-photographs-that-win-jobs",
    title: "What to photograph on a roof, and why it wins the next job",
    description:
      "Roofing is invisible work sold to people who will never see it. Photographs are the whole argument, and most roofers take the wrong ones.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Every roofer has a phone full of photographs and almost none that are usable. The problem is not the camera — it is what gets photographed and when. Roofing is the trade where images do the most work, because the customer cannot see the product before or after they buy it, and a small change in habit produces an asset worth more than any advertising budget.",
    sections: [
      {
        h: "Before is worth more than after",
        p: [
          "An after photograph shows a roof. Most people cannot tell a good one from a bad one and it does not move them.",
          "A before photograph shows slipped slates, a rotted valley, a chimney with no flashing left on it — and then the after photograph means something. The pair together tells a story a single image cannot, and it is the pair that gets shared, stopped on and remembered.",
          "So the discipline is: photograph it the moment you get up there, before you touch anything. That is the shot everyone forgets and it is the one doing most of the work.",
        ],
      },
      {
        h: "Get the house in",
        p: [
          "A close-up of a repaired flashing is a technical photograph. It proves competence to another roofer and says nothing to a homeowner.",
          "A photograph with the house visible lets somebody recognise their own home in it. A 1970s semi in a Dublin estate, a bungalow in Mayo, a terrace in Cork city — the customer sees their house type and thinks that roofer does houses like mine.",
          "Shoot from across the road, in landscape, with enough of the building to be recognisable.",
        ],
      },
      {
        h: "Same angle, both times",
        p: [
          "A before from the scaffold and an after from the garden do not compare. The pair only works if the second shot is taken from roughly where the first one was.",
          "Easiest method: look at the before photograph on your phone before you take the after, and stand in the same place. It takes fifteen seconds and it is the difference between a usable pair and two unrelated pictures.",
        ],
      },
      {
        h: "The shots that are consistently useful",
        p: [
          "A job produces four or five images worth keeping, not forty. These are the ones that get used.",
        ],
        list: [
          "The full house, before, from across the road",
          "The actual problem, close, so the damage is legible",
          "One shot mid-job with the crew or scaffold — proof it is real",
          "The full house, after, from the same spot as the first",
          "One detail of the finished work: ridge, valley, flashing",
        ],
      },
      {
        h: "Light and timing",
        p: [
          "Avoid midday in summer — harsh overhead light flattens a roof and blows out slate. Early morning and late afternoon give the surface texture.",
          "Overcast is genuinely good for roofing photographs. The detail holds and nothing is in deep shadow.",
          "Never shoot into the sun with the house dark against the sky, which is the single most common ruined roofing photograph.",
        ],
      },
      {
        h: "Where they go",
        p: [
          "Google Business Profile weekly, straight from the phone. The website, grouped by job rather than dumped in a grid. Meta ads, where before-and-after pairs consistently outperform everything else a roofing business can run.",
          "And into quotes. Sending a customer photographs of their own roof with the problem marked is the single most persuasive thing in a roofing sales process, and it costs nothing but the two minutes you already spent up there.",
        ],
      },
    ],
    related: ["roofers", "powerwashing", "painters-and-decorators"],
  },
  {
    slug: "roofing-enquiry-response-time",
    title: "The roofing enquiry you lose in eleven minutes",
    description:
      "A leaking roof is an emergency purchase. What the response window actually is for Irish roofing enquiries, and what to do about the ones you miss.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Somebody with water coming through a ceiling does not shortlist. They ring the first number, and if it does not answer they ring the second, and the job goes to whoever picks up. For urgent roofing work the decision is frequently made inside a quarter of an hour, which means the gap between a good month and a quiet one is often nothing to do with marketing at all.",
    sections: [
      {
        h: "Two kinds of enquiry, two different clocks",
        p: [
          "An emergency repair is decided in minutes. A planned re-roof is decided over weeks. The same roofing business receives both and usually treats them identically, which is wrong in both directions.",
          "The urgent one needs answering now and needs somebody on site today or tomorrow. The planned one needs a proper quote, photographs and a follow-up call — speed matters less than thoroughness there, though a same-day acknowledgement still reads as competence.",
          "The first question on any enquiry form should therefore be how urgent it is, because it changes everything about what happens next.",
        ],
      },
      {
        h: "The missed call is the real leak",
        p: [
          "You are up a ladder. You cannot answer. That is not a failure of discipline, it is the nature of the trade, and no amount of good intention fixes it.",
          "What fixes it is a system. An answering service that takes a name, a number and the problem. A missed-call text that fires automatically saying you are on a roof and will ring back within the hour. Someone in the office, if there is one.",
          "Roofers who put any of those in place usually find they were losing several jobs a month without ever knowing, because a missed call leaves no trace.",
        ],
      },
      {
        h: "An automatic text buys you the hour",
        p: [
          "A message that arrives thirty seconds after an unanswered call — 'Thanks for ringing, I'm on a roof, I'll call you back within the hour. If it's an emergency reply URGENT.' — changes a hang-up into a hold.",
          "The caller knows they have been heard, which is usually enough to stop them working down the list. It costs very little to set up and it is the highest-return thing most roofing businesses can do to their phone handling.",
        ],
      },
      {
        h: "Out of hours is when roofs leak",
        p: [
          "Roof emergencies cluster in the evening and at the weekend, during and after weather. Those are precisely the hours most roofing businesses do not answer.",
          "You do not have to work those hours. You do have to decide, explicitly, what happens when the phone rings at nine on a Sunday, and then say so clearly on the website and the Google profile. 'Emergency call-outs answered until 9pm, seven days' wins work. So does an honest 'we return calls from 7am' — what loses work is silence.",
        ],
      },
      {
        h: "If you advertise, this is not optional",
        p: [
          "Paying for a click and then not answering the call is the most expensive mistake in trades advertising. You bought the enquiry and gave it to a competitor.",
          "Before increasing any roofing ad budget, we look at call handling first, because there is usually more work available in the calls already coming in than in the ones the extra money would buy.",
        ],
      },
      {
        h: "Measure it",
        p: [
          "Call tracking will tell you how many calls came in, how many were answered, how long they rang and what happened at the weekend. Most roofers are surprised by the answered-call percentage, and nearly always in the wrong direction.",
          "It is a small monthly cost and it converts an invisible problem into a number you can fix. Until it is measured, the missed calls simply do not exist as far as the business is concerned.",
        ],
      },
    ],
    related: ["roofers", "plumbers-and-heating", "drainage"],
  },
  {
    slug: "solar-grant-sales-conversation",
    title: "What the SEAI grant does to a solar sales conversation",
    description:
      "The grant brings you enquiries and then quietly costs you jobs. What it changes about how Irish homeowners compare solar quotes, and how to handle it.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Every solar installer in Ireland benefits from the SEAI grant and most of them are damaged by it too. It brings people to the market who would never otherwise have looked, and it trains those same people to treat the decision as a form-filling exercise where the only variable is price. Understanding both halves is the difference between a campaign that fills a diary and one that fills an inbox.",
    sections: [
      {
        h: "The grant creates the enquiry, not the sale",
        p: [
          "A homeowner hears there is money available, searches, and lands on three installer websites that all say roughly the same thing about the same grant. Nothing on any of them helps them choose.",
          "So they choose on price, which is the worst possible ground for an installer who does the job properly. The grant did its job — it produced an interested customer — and then left you competing on the one axis you cannot win.",
          "The fix is not to stop mentioning the grant. It is to stop making the grant the centrepiece, because the grant is identical for every quote they will receive.",
        ],
      },
      {
        h: "It anchors the price at the wrong number",
        p: [
          "People hear the grant figure and mentally subtract it from a price they have half-remembered from somewhere. By the time they speak to you, they have an expectation that may have nothing to do with their roof.",
          "Setting the real range early, before the site visit, saves everybody time. An honest page saying what a system for a typical three-bedroom semi costs in your county, grant included and excluded, removes the shock from the conversation and filters out the people who were never going to proceed.",
        ],
      },
      {
        h: "It steps down, and that is a real deadline",
        p: [
          "The domestic rate has been reducing year on year. That gives you the only legitimate urgency available in this trade: the support is worth more now than it will be later.",
          "Use it accurately and it works well. Invent a deadline that does not exist and you will be caught, because this is a scheme people can check in thirty seconds.",
        ],
      },
      {
        h: "The paperwork is a selling point nobody uses",
        p: [
          "Applications, timing, what has to happen before work starts, the BER assessment afterwards — it is not difficult but it is unfamiliar, and unfamiliar is exactly what stops people proceeding.",
          "An installer who says plainly 'we handle the application and here is the order things happen in' removes the friction that kills a proportion of jobs after the quote. Very few websites explain the sequence at all.",
        ],
      },
      {
        h: "What to put in front of the customer instead",
        p: [
          "The grant belongs in the copy, once, factually. The things that actually differentiate you belong everywhere else.",
        ],
        list: [
          "Photographs of your own installs on houses like theirs, in their county",
          "What their roof specifically can and cannot do, said early",
          "Realistic generation figures for their location, not national averages",
          "Who does the work — your crew or a subcontractor",
          "What happens in year six when something needs attention",
        ],
      },
      {
        h: "The uncomfortable summary",
        p: [
          "If your marketing is built on the grant, you are running the same campaign as everyone else with the same message about the same money, and the customer will settle it on price.",
          "The installers who do well in Ireland treat the grant as context and sell on competence. It is slower to build and much harder to copy.",
        ],
      },
    ],
    related: ["solar-installers", "heat-pumps", "insulation"],
  },
  {
    slug: "solar-quote-compared-to-three-others",
    title: "Your solar quote is being compared to three others",
    description:
      "Irish homeowners get three or four solar quotes and cannot tell them apart. What to put in yours so the comparison stops being about price alone.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Almost nobody buys solar from the first installer they speak to. The quote you send lands on a kitchen table beside two or three others, from companies the customer cannot distinguish, for equipment they have never heard of, at prices that are probably within a few hundred euro of each other. Whatever happens next is decided by what is on those pages.",
    sections: [
      {
        h: "The customer is not qualified to compare you",
        p: [
          "They cannot evaluate a panel, an inverter or a mounting system. They have no way of judging whether your design is better than the cheaper one.",
          "So they compare what they can read: the total, how quickly you came back, whether the document looks like it was written for them, and whether anything in it made them feel understood. That is the actual competition and it has little to do with the specification.",
        ],
      },
      {
        h: "Show their roof",
        p: [
          "A layout drawing of the panels on their own roof does more than any amount of technical detail. It proves you designed something for this house rather than quoting a package.",
          "Include which roof planes you are using and why, and what you are deliberately not using. A competitor who has quoted the same total without explaining the design suddenly looks like they guessed.",
        ],
      },
      {
        h: "Give generation and savings honestly",
        p: [
          "Optimistic figures win the job and lose the review. Realistic figures for their orientation, their pitch and their county, with a note on what you have assumed about their usage, are more persuasive to the kind of customer you want.",
          "Say what happens to the exported units and roughly what they are worth. Most quotes skate over this and most customers do not understand it, so explaining it plainly is a differentiator that costs nothing.",
        ],
      },
      {
        h: "Answer the question they are too polite to ask",
        p: [
          "What if it breaks. That is the fear underneath the whole purchase and most quotes do not touch it.",
          "Warranty on panels, on the inverter and on your workmanship, stated separately, plus what actually happens if they ring you in year four. An installer who addresses it directly removes the main reason people delay.",
        ],
      },
      {
        h: "Speed reads as competence",
        p: [
          "A quote the same evening, or the next morning, tells the customer how you will behave for the rest of the project. One that takes nine days tells them something too.",
          "This is consistently among the most-cited reasons Irish homeowners give for choosing one tradesperson over another, and it costs nothing but process.",
        ],
      },
      {
        h: "Then follow up once",
        p: [
          "Most installers send the quote and wait. A single call three days later, asking whether anything needs explaining, recovers a real share of jobs that would otherwise drift.",
          "Not a discount call. A clarifying call. The customer is usually confused rather than unconvinced, and the installer who resolves the confusion is the one who gets the work.",
        ],
      },
    ],
    related: ["solar-installers", "heat-pumps", "ev-charger-installers"],
  },
  {
    slug: "selling-solar-batteries-without-fear",
    title: "Selling batteries without selling fear",
    description:
      "Storage is the bigger job and often the honest recommendation. How to make that case in Ireland without blackout scaremongering or invented payback figures.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Battery storage is where the margin is, which is exactly why so much of the marketing around it is bad. Blackout imagery, implied grid collapse and payback numbers that only work if electricity doubles in price — all of it is effective in the short term and corrosive over a few years. The honest case for storage in Ireland is strong enough on its own, particularly for the households most installers are actually selling to.",
    sections: [
      {
        h: "Start with when the house is empty",
        p: [
          "A commuter household generates most of its solar between nine and five with nobody home. Those units get exported, and an exported unit is worth a fraction of one you did not have to buy.",
          "That is the entire argument and it is arithmetic, not fear. Show the customer their own day — out at eight, back at six — and the gap explains itself.",
          "For a retired couple at home all day, the same argument is much weaker, and saying so is what makes you credible when you do recommend it.",
        ],
      },
      {
        h: "Night-rate charging is the part people miss",
        p: [
          "A battery is not only a solar accessory. On a day-and-night tariff it can be filled cheaply overnight and used through the expensive part of the evening, which works in December when the panels are contributing very little.",
          "Most quotes never mention this, and it is frequently the strongest part of the case. It also makes the system useful year-round rather than seasonally.",
        ],
      },
      {
        h: "Do not promise backup unless you are supplying it",
        p: [
          "A standard battery installation does not necessarily keep the lights on in a power cut. That requires specific equipment and configuration, and customers routinely assume otherwise.",
          "If you are not providing it, say so in the quote. This is the single most common source of angry phone calls in the months after a storm, and it is entirely avoidable.",
        ],
      },
      {
        h: "Be careful with payback claims",
        p: [
          "Battery payback depends on the tariff, the usage pattern and what electricity prices do next, and nobody knows the last one.",
          "Give a range, state the assumptions, and let the customer adjust them. A quote that says 'here is what we assumed and here is what changes if you are wrong' is far more convincing than a confident single number that a competitor has undercut by two years.",
        ],
      },
      {
        h: "The EV is the easiest version of this conversation",
        p: [
          "A household charging a car overnight from the grid while their roof exported all day has an obvious problem, and they can usually see it as soon as it is described.",
          "Installers who handle solar, storage and charging together have a natural sequence of sales and a real reason to contact a past customer. Those who do not are handing the second and third jobs to someone else.",
        ],
      },
    ],
    related: ["solar-installers", "ev-charger-installers", "electricians"],
  },
  {
    slug: "farm-solar-is-a-different-customer",
    title: "Farm solar is a different customer entirely",
    description:
      "Irish farms have the best self-consumption profile in the country and almost no installer markets to them. What changes when the roof is a shed.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "The best solar customer in Ireland is not a homeowner. It is a dairy farm, where cooling, water heating and vacuum pumps draw hard through daylight hours on buildings with enormous unshaded roofs. Nearly every installer in the country markets exclusively to households, which leaves the better market to whoever bothers to speak to it.",
    sections: [
      {
        h: "Self-consumption is the whole argument",
        p: [
          "A unit used on site is worth what you would have paid for it. A unit exported is worth considerably less. Domestic solar in Ireland exports a lot, because the house is empty during the day.",
          "A working yard is not. Milk cooling runs after each milking, plate coolers and water heating run through the day, and the load profile lines up with production in a way a house never does.",
          "That means the return calculation is genuinely better, and it can be made without optimism or hand-waving — which matters, because this customer will check it.",
        ],
      },
      {
        h: "They buy like a business, because they are one",
        p: [
          "Payback period, capital allowances, and how it sits alongside the other things the yard needs this year. Not monthly savings and not environmental feeling.",
          "There is also a separate grant route for farm investment at a considerably better rate than the domestic scheme, with its own application windows and its own paperwork. Timing your marketing around those windows matters more than anything you do to the ads themselves.",
        ],
      },
      {
        h: "Your website is written for the wrong person",
        p: [
          "A farmer landing on a page about reducing your household bills leaves immediately. They are looking for evidence you have done a yard like theirs.",
          "That means photographs of arrays on parlours, sheds and grain stores; system sizes in the range they care about; and language that assumes three-phase supply and a working building rather than a semi-detached house.",
          "A separate page is the minimum. A separate campaign with its own lead form is better, because the qualifying questions are completely different.",
        ],
      },
      {
        h: "What the farm lead form should ask",
        p: [
          "Different questions, because the wrong ones make you look like you have never done this.",
        ],
        list: [
          "Enterprise type — dairy, tillage, poultry, pigs, beef",
          "Roughly what the yard spends on electricity a year",
          "Single or three-phase supply",
          "Shed roof type, age and rough area",
          "Whether a grant application is already in train, and for what",
        ],
      },
      {
        h: "Where these people actually are",
        p: [
          "Cork, Tipperary, Limerick, Wexford, Meath and Kilkenny carry most of it. A national campaign spreads a budget across a country where the customer is concentrated in a handful of counties.",
          "They also read the farming press and talk to each other constantly. One completed yard in a parish generates conversations you did not pay for, which is the opposite of how domestic solar referrals work.",
        ],
      },
    ],
    related: ["solar-installers", "agricultural-contractors", "farm-buildings"],
  },
  {
    slug: "what-a-solar-enquiry-form-must-ask",
    title: "The five questions a solar enquiry form has to ask",
    description:
      "Every extra question costs a few cheap leads and saves a wasted site visit. The five that decide whether a solar enquiry is worth driving to.",
    date: "2026-09-28",
    minutes: 5,
    intro:
      "A solar site visit is most of a morning once you include the drive, the roof, the consumer unit and the conversation at the kitchen table. Sending a surveyor to a house that was never going to work is the most expensive mistake in this trade, and it is almost always preventable with five questions asked before anybody gets in a van.",
    sections: [
      {
        h: "1. Do you own the property?",
        p: [
          "Renters and people buying a house they have not closed on cannot proceed, and they appear in solar enquiries constantly because the grant coverage brings in everybody.",
          "One question, and it removes a category of enquiry entirely.",
        ],
      },
      {
        h: "2. What type of house is it?",
        p: [
          "Detached, semi-detached, terraced, bungalow or apartment. That gives you a usable first estimate of roof area and tells you immediately whether the job is plausible.",
          "Apartments are the important one. The resident frequently cannot make this decision at all, and finding that out on arrival is a wasted morning.",
        ],
      },
      {
        h: "3. Which way does the back of the house face?",
        p: [
          "Most people do not know their roof orientation and will guess, but they do know which way the back garden faces, and a surprising number know roughly where the sun is at lunchtime.",
          "Even an approximate answer separates a good prospect from a difficult one before you commit a morning to it. Offer compass points rather than asking for degrees.",
        ],
      },
      {
        h: "4. Does anything overshadow the roof?",
        p: [
          "Trees, a taller neighbouring building, a chimney on the wrong side. Shading changes the design and sometimes kills the job.",
          "Asking here also starts managing expectations early, which is far better than raising it for the first time at the survey after they have spent two weeks imagining the savings.",
        ],
      },
      {
        h: "5. Roughly what is the annual electricity bill?",
        p: [
          "This sizes the system, indicates whether storage belongs in the conversation, and tells you whether the numbers will work at all.",
          "Give bands rather than asking for a figure. People will pick a band; they will abandon a form that asks them to go and find a bill.",
        ],
      },
      {
        h: "What this does to the numbers",
        p: [
          "Lead volume falls. Installers hate this and it is the reason most forms ask for a name and a phone number and nothing else.",
          "But the cost per survey improves, the cost per install improves more, and the surveyor stops spending mornings on roofs that were never viable. Cost per lead is a vanity number; installs per euro spent is the business.",
          "One more thing worth adding: how soon they want it done. 'Within three months' goes to the top of the diary and 'just researching' gets an email sequence instead of a phone call.",
        ],
      },
    ],
    related: ["solar-installers", "heat-pumps", "windows-and-doors"],
  },
  {
    slug: "solar-ads-that-dont-look-like-solar-ads",
    title: "Solar ads that do not look like every other solar ad",
    description:
      "Irish feeds are full of identical solar creative: a stock roof, a grant figure, a countdown. What actually stops the scroll, and why it is cheaper.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Open Facebook in Ireland and the solar ads are interchangeable. A stock photograph of panels on a house that is not in this country, a grant figure in large yellow text, and some manufactured urgency. They all look the same because they were all built from the same template, and the result is that none of them are believed.",
    sections: [
      {
        h: "The stock photograph is the tell",
        p: [
          "People cannot articulate why an image looks foreign, but they register it. American-style shingle roofs, Mediterranean light, houses that do not exist here.",
          "A genuine photograph of a real install on a real Irish house — slate or concrete tile, Irish sky, a recognisable style of home — outperforms polished stock consistently. It looks less professional and it works better, which installers find hard to accept.",
        ],
      },
      {
        h: "Show the roof mid-job",
        p: [
          "Scaffolding, rails going on, two people working. It is evidence that the thing happened, and evidence is what this market is short of.",
          "The finished array is a nice picture. The half-finished one is proof.",
        ],
      },
      {
        h: "Drop the countdown",
        p: [
          "Manufactured deadlines are everywhere in this trade and Irish consumers have learned to discount them. Worse, they attract the price-led enquiries you least want.",
          "The genuine timing argument — that the grant rate has been stepping down, and that an install booked now happens before winter — is available and true. Use the real one.",
        ],
      },
      {
        h: "Put a person in it",
        p: [
          "The installer talking to camera on a roof for thirty seconds, explaining one specific thing — why that roof needed a different layout, what shading does — outperforms produced video in this market by a distance.",
          "It is uncomfortable to make and almost nobody does it, which is exactly why it works. It also builds something a competitor cannot copy by hiring the same freelancer.",
        ],
      },
      {
        h: "Be specific about place",
        p: [
          "'Solar panels in Ireland' is an ad for nowhere. 'This install in Newbridge last month' is an ad somebody in Newbridge stops on.",
          "Naming the town is the cheapest improvement available to a solar ad and it costs nothing but the discipline to make one variant per area.",
        ],
      },
      {
        h: "What to test first",
        p: [
          "Do not rebuild everything at once. Run the current creative against one honest variant and let the cost per qualified enquiry settle it.",
        ],
        list: [
          "Your own install photograph versus the stock image",
          "A named town versus 'Ireland'",
          "Thirty seconds of the installer talking versus a produced video",
          "The real grant timing versus a countdown",
          "Mid-job photograph versus finished array",
        ],
      },
    ],
    related: ["solar-installers", "ev-charger-installers", "heat-pumps"],
  },
  {
    slug: "solar-sales-cycle-is-longer-than-you-think",
    title: "The solar sale takes longer than your follow-up does",
    description:
      "Most Irish solar enquiries do not convert in the first fortnight, and most installers stop trying after two calls. What to do in the gap.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Solar is a four-figure purchase that nobody needs to make this week. People enquire, get quotes, think about it, talk to a partner, look at the bill again in three months and then decide. Installers, meanwhile, ring twice, get no answer, and write the lead off. The gap between how long the decision takes and how long the follow-up lasts is where most of the wasted ad spend in this trade goes.",
    sections: [
      {
        h: "The enquiry is the start of a conversation, not the end",
        p: [
          "A solar enquiry is rarely a decision. It is somebody gathering information, often quite early, frequently without having discussed it properly at home.",
          "Treating it as a hot lead and pushing produces a polite no. Treating it as the opening of a months-long conversation produces a job, sometimes in the next quarter.",
        ],
      },
      {
        h: "Two calls is not a follow-up",
        p: [
          "Most installers ring, ring again, and stop. The customer who was in a meeting both times is now gone, and the ad spend that produced them is wasted.",
          "A sequence that runs over weeks rather than days — a call, a message, a useful email, another call a fortnight later — recovers a meaningful share of them. None of it is clever, which is why so few do it.",
        ],
      },
      {
        h: "Give them something to read",
        p: [
          "Between the quote and the decision, the customer is researching. They will read something. It may as well be yours.",
          "A short piece on how the grant process actually runs, what a realistic generation figure looks like in their county, or what the system needs in year five, keeps you present while they make up their mind. It is also the kind of thing a partner reads over their shoulder, and the partner is frequently the one who has not been convinced.",
        ],
      },
      {
        h: "Winter enquiries convert in spring",
        p: [
          "People think about electricity bills in January and install in April. An enquiry that goes quiet in February is not necessarily lost.",
          "A list of unconverted enquiries from the previous winter is one of the most valuable things a solar business owns, and most of them are sitting unused in an inbox.",
        ],
      },
      {
        h: "Keep track of them somewhere",
        p: [
          "The practical blocker is almost always that nobody knows which enquiries are outstanding. A spreadsheet is enough — name, date, what stage, when to contact next.",
          "Without it, follow-up depends on remembering, and nobody remembers in August what they quoted in March.",
        ],
      },
      {
        h: "What this is worth",
        p: [
          "If you are paying for leads and converting the first fortnight only, you are buying the whole pipeline and using a fraction of it.",
          "Extending the follow-up costs no additional ad spend at all. It is the cheapest increase in installs available to most solar businesses, and it usually beats increasing the budget.",
        ],
      },
    ],
    related: ["solar-installers", "heat-pumps", "insulation"],
  },
  {
    slug: "google-ads-for-solar-installers-ireland",
    title: "Where a solar installer's Google Ads budget leaks",
    description:
      "Grant-only searchers, DIY kits, panel wholesalers and job seekers all cost Irish solar installers money on a default setup. What to block, and what to keep.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Solar has an unusually bad ratio of interested searchers to actual buyers, because a government grant brings a large number of people into the market to look rather than to buy. On a default Google Ads setup you pay for all of them equally. On most solar accounts we review, a substantial share of the spend is going to searches that could never have become an install.",
    sections: [
      {
        h: "Grant-only searches are the biggest category",
        p: [
          "'SEAI grant', 'solar grant application', 'how much is the solar grant', 'grant calculator' — these people want information about money, and a sizeable share of them are years away from buying anything.",
          "This is genuinely arguable, and it depends on your budget. Some installers do well capturing them with a useful page and an email sequence. On a small budget they crowd out people ready to buy, and the honest move is to block them and revisit when there is room.",
          "What is not arguable is that they should be a deliberate decision rather than something that happens to you.",
        ],
      },
      {
        h: "DIY, wholesale and equipment searches",
        p: [
          "'Solar panel kit', 'panels for sale', 'solar panel price per panel', 'inverter wholesale' — somebody is buying equipment, not an installation.",
          "There is also a steady stream of caravan, shed and off-grid searches that look relevant and are not.",
        ],
        list: [
          "kit, kits, diy, self install, wholesale, supplier, distributor",
          "caravan, motorhome, campervan, boat, shed, off grid, 12v",
          "second hand, used, ebay, amazon, done deal",
        ],
      },
      {
        h: "Jobs, courses and training",
        p: [
          "Solar is a growing trade and a lot of people are searching for a way into it. 'Solar installer jobs', 'PV training', 'solar course Ireland', 'safe electric registration'.",
          "Easy to block, frequently a fifth of a poorly set up account's traffic, and no loss whatsoever.",
        ],
        list: [
          "jobs, vacancy, hiring, apprentice, career, salary, wage",
          "course, training, qualification, certificate, college, diploma",
        ],
      },
      {
        h: "The commercial and utility confusion",
        p: [
          "'Solar farm', 'solar field', 'ground mount acre', 'PPA' — these are utility-scale searches and they are expensive.",
          "If you do domestic and light commercial work, block them. If you do want farm work, that is a separate campaign with separate terms, not a stray keyword in the domestic account.",
        ],
      },
      {
        h: "Location settings and the obvious geography",
        p: [
          "Set locations to presence rather than presence-or-interest, or you will pay for people abroad reading about Ireland.",
          "Add UK and US geographic negatives, and the counties you genuinely will not travel to. A Dublin installer paying for Cork clicks is common and entirely avoidable.",
        ],
      },
      {
        h: "What to keep and bid properly on",
        p: [
          "The terms worth real money are the ones with a place and an intention in them. 'Solar panel installers [town]', 'solar PV quote', 'solar installation cost [county]', 'battery storage installer near me'.",
          "Those are people who have moved past the grant and are choosing a company. They cost more per click and they are the only clicks that reliably become installs.",
          "Then read the search terms report weekly for the first month. The lists above are a starting point; your own report is the actual answer, and most installers have never opened it.",
        ],
      },
    ],
    related: ["solar-installers", "ev-charger-installers", "heat-pumps"],
  },
  {
    slug: "generating-valuation-requests",
    title: "How to generate valuation requests, properly",
    description:
      "The valuation request is the only real first step in estate agency lead generation. What the page, the form and the follow-up have to do.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Estate agency lead generation has one meaningful entry point. A homeowner asks what their house is worth, and everything else follows from there. Almost every Irish agency website treats this as a line on a contact page rather than the single thing the site exists to produce, which is why so many of them generate almost nothing.",
    sections: [
      {
        h: "It should be the most prominent thing you have",
        p: [
          "Not in the navigation. Not below three paragraphs about the firm's history. The first thing on the page, with its own dedicated landing page for anyone arriving from an ad.",
          "This is the work we did for a Dublin property agency — Google Ads pointed at landing pages built specifically around valuation requests and vendor leads, which produced over two hundred and forty qualified enquiries. The mechanic is not complicated. It is just that almost nobody builds the site around it.",
        ],
      },
      {
        h: "Promise something specific",
        p: [
          "'Contact us for a valuation' asks the homeowner to start a relationship with a salesperson. That is a bigger commitment than it looks and a lot of people will not make it.",
          "Say what actually happens: who comes, how long it takes, that there is no obligation, and when they will have a figure. Removing the uncertainty about what they are agreeing to converts considerably better than any headline change.",
        ],
      },
      {
        h: "Ask less than you want to",
        p: [
          "Name, address, phone. That is enough to do the job. Every additional field costs submissions, and you can ask the rest on the phone.",
          "The address is the one that matters, because it lets you arrive at the call already knowing the street, the recent comparables and roughly what you are going to say. That preparation is what makes the first call sound different from the other two agencies.",
        ],
      },
      {
        h: "Answer it within the hour",
        p: [
          "Vendors frequently request valuations from more than one agency in the same sitting. The one that rings back first is usually the one that gets to set the terms of the conversation.",
          "Requests arriving in the evening and at the weekend are the ones most often lost, and they are also when homeowners actually do this. Decide explicitly who is covering those hours.",
        ],
      },
      {
        h: "The ones who are not ready yet are still worth having",
        p: [
          "A proportion of valuation requests come from people who are twelve months away, or curious, or refinancing. Agencies write them off.",
          "They are exactly the list you want when the market turns. A quarterly note on what has sold locally keeps you present without effort, and when they do decide to move you are not one of three names, you are the name.",
        ],
      },
      {
        h: "Measure the right number",
        p: [
          "Not valuation requests. Instructions won per euro spent, and eventually fee income per euro spent.",
          "An agency optimising for request volume will end up with a lot of low-quality enquiries and a frustrated valuer. The number that pays the bills is further down the funnel and needs to be tracked all the way.",
        ],
      },
    ],
    related: ["estate-agents", "mortgage-brokers", "solicitors"],
  },
  {
    slug: "price-register-changed-the-vendor-conversation",
    title: "The Price Register changed the vendor conversation",
    description:
      "Every Irish vendor can look up what the neighbours got. Agencies still treating the valuation as privileged information are losing instructions to ones that do not.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Before the Residential Property Price Register, an estate agent's valuation was an opinion the homeowner had no way to check. Now every vendor in the country can see what actually sold, on what street, for how much, and when. Plenty of Irish agencies have never adjusted to that, and it shows in how they pitch.",
    sections: [
      {
        h: "The vendor has already done the research",
        p: [
          "By the time they call you they have looked at the register, looked at the portals, and formed a view. Frequently an optimistic one, because they have compared their house to the best-presented one on the street.",
          "Walking in and producing a figure as though it were privileged knowledge is now slightly insulting. The job has changed from knowing the number to explaining the number.",
        ],
      },
      {
        h: "Show the comparables and argue from them",
        p: [
          "Bring the recent sales. Say which ones you think are genuinely comparable and which are not, and why — the extension, the aspect, the condition, the year.",
          "That conversation demonstrates competence in a way an unsupported figure never can. It also inoculates you against the agency that will come in after you and quote a higher number to win the instruction.",
        ],
      },
      {
        h: "The overvaluing problem got worse, not better",
        p: [
          "Because vendors can check, the temptation for a competing agency to flatter them is stronger, not weaker. Winning an instruction on a price that will not achieve is still the most common way Irish agencies damage themselves.",
          "The defence is evidence, given early and in writing. A vendor who has seen your reasoning is much harder to move with a number six months later when the house has not sold.",
        ],
      },
      {
        h: "Publish what has sold in your area",
        p: [
          "The register is public, so summarising it for a suburb or town is entirely legitimate and genuinely useful. 'What sold in Naas this quarter, and what it tells you' is exactly what a homeowner considering a move searches for.",
          "Very few Irish agencies publish anything like this. It ranks, it demonstrates local knowledge better than any claim to it, and it brings people to you at the research stage rather than the shortlist stage.",
        ],
      },
      {
        h: "Use it on the buyer side too",
        p: [
          "Buyers check the register as well, and an asking price that looks disconnected from recent sales creates hesitation that slows everything down.",
          "Addressing it directly in the listing — why this house is priced where it is — removes a friction most listings simply leave sitting there.",
        ],
      },
    ],
    related: ["estate-agents", "mortgage-brokers", "financial-advisors"],
  },
  {
    slug: "portal-leads-are-not-your-leads",
    title: "Portal enquiries are not the same as your own leads",
    description:
      "Daft and MyHome bring buyers, and buyers are not the scarce thing. Why an agency dependent on the portals has no vendor pipeline of its own.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Every Irish estate agency pays the portals, and almost every Irish estate agency should. That is where buyers look. The mistake is concluding from a full inbox of portal enquiries that lead generation is handled, because portal enquiries are buyers and buyers are not what an agency is short of. Instructions are.",
    sections: [
      {
        h: "Buyers are abundant, vendors are not",
        p: [
          "In most Irish markets there are considerably more people trying to buy than there are houses to sell. Portal enquiries reflect that: a lot of them, easy to get, and they arrive attached to a property you already have.",
          "They do not grow the business. The instruction did that, before the listing ever went up. An agency with a busy portal inbox and no vendor pipeline is fully dependent on a supply it is not generating.",
        ],
      },
      {
        h: "The portal owns the relationship",
        p: [
          "A buyer who found the house on a portal associates the find with the portal. They did not choose you and frequently could not name you afterwards.",
          "That is the structural problem with any marketplace: the intermediary accumulates the brand equity, and the fee it can charge rises because you have no alternative route to the customer.",
        ],
      },
      {
        h: "What an independent pipeline actually looks like",
        p: [
          "Valuation requests generated by your own advertising and your own site. A list of people who asked about a valuation and are not ready yet. Sold boards concentrated in areas you have chosen. Local search results you rank in for your own towns.",
          "None of that depends on a portal's pricing decisions, and all of it compounds.",
        ],
        list: [
          "A valuation request page and ads pointed at it",
          "A retained list of not-yet-ready vendors, contacted quarterly",
          "Deliberate area farming rather than scattered instructions",
          "Local content: what sold here, what it means",
          "A Google Business Profile with recent reviews and photographs",
        ],
      },
      {
        h: "Keep paying the portals",
        p: [
          "This is not an argument for leaving them. Buyers look there and a vendor will ask whether you list there, and the answer has to be yes.",
          "It is an argument for not confusing a distribution channel with a lead source. The portal sells your listing. It does not win your next instruction, and nothing about a busy portal inbox suggests otherwise.",
        ],
      },
      {
        h: "The test",
        p: [
          "If the portals doubled their price next year, what would happen to your instruction volume? For most Irish agencies the honest answer is that it would be unaffected, because the instructions were never coming from there.",
          "And if that is true, the follow-up question is what is producing them — and whether anyone is deliberately working on it.",
        ],
      },
    ],
    related: ["estate-agents", "mortgage-brokers", "solicitors"],
  },
  {
    slug: "justifying-an-estate-agency-fee",
    title: "Justifying your fee when the vendor has three quotes",
    description:
      "Arguing the percentage is a losing position. What Irish agencies can show a vendor instead, and why it has to exist before the meeting.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "A vendor sitting with three proposals is looking at three broadly similar services at three slightly different percentages. Unless something in yours explains what the difference buys, they will do the obvious thing. Fee conversations are lost long before the meeting, in the absence of anything that makes the comparison about value.",
    sections: [
      {
        h: "Never defend the percentage",
        p: [
          "The moment the conversation is about the number, the cheaper agency has already framed it and you are arguing from behind.",
          "The useful reframe is the amount, not the rate: what a fee difference actually comes to in euro against what a difference in achieved price comes to. Vendors are frequently comparing a modest saving against a much larger variable and have not seen it put that way.",
        ],
      },
      {
        h: "Show achieved against asking",
        p: [
          "The most persuasive number an agency has is what its listings actually sell for relative to what they were listed at, and how long they take.",
          "Agencies rarely publish this, usually because nobody has ever assembled it. It takes an afternoon with your own records and it is worth more than every adjective on the website.",
        ],
      },
      {
        h: "Say what the marketing actually is",
        p: [
          "'Full marketing package' means nothing. Professional photography, floor plans, video, which portals, what social advertising, how many hours, who writes the description.",
          "Itemising it does two things: it makes your proposal comprehensible, and it makes a cheaper competing proposal look like what it often is, which is the same list with things missing.",
        ],
      },
      {
        h: "Be explicit about who does the work",
        p: [
          "Vendors assume the person who valued the house will run the sale. Frequently they will not.",
          "Saying plainly who handles viewings, who negotiates and who they ring on a Tuesday removes a real anxiety and distinguishes you from agencies that leave it vague because the answer is unflattering.",
        ],
      },
      {
        h: "It has to be findable before the meeting",
        p: [
          "Vendors shortlist before they invite anyone in. If your evidence only exists in the appointment, it does not affect who gets the appointment.",
          "Achieved prices, time to sale, what the marketing includes, who does what — on the website, where somebody comparing three agencies at ten at night can read it. That is the part almost every Irish agency is missing, and it is the part that decides the shortlist.",
        ],
      },
    ],
    related: ["estate-agents", "mortgage-brokers", "accountants"],
  },
  {
    slug: "farming-an-area-as-an-estate-agent",
    title: "Farming an area: how agencies come to own a town",
    description:
      "Scattered instructions never compound. Concentrating them does, and in Irish estate agency the sold board is the advertising nobody costs properly.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Estate agency is unusual in that every completed job leaves a sign in a front garden for weeks. That makes concentration worth far more than coverage, and it is the single clearest strategic choice available to an Irish agency — and the one most of them never consciously make.",
    sections: [
      {
        h: "Four boards on one road beats twelve across a county",
        p: [
          "A homeowner thinking of selling notices the boards on their own street. Twelve instructions spread across six towns produce almost no such effect anywhere.",
          "Concentration also compounds in search, in reviews mentioning the same places, and in how many people in one area have actually dealt with you. None of that happens when instructions are taken wherever they land.",
        ],
      },
      {
        h: "Choose the areas deliberately",
        p: [
          "Pick on turnover and price rather than on preference. An area with steady transaction volume and values that support your fee is worth more than a prestigious one that sells twice a year.",
          "Then commit for long enough to matter. Area farming is a two-year strategy, not a campaign, and agencies that abandon it after a quiet quarter get none of the compounding.",
        ],
      },
      {
        h: "Be useful in that area specifically",
        p: [
          "A quarterly note on what has sold there, and what it means for somebody considering a move. Local search pages for the towns and estates by name.",
          "It ranks because it is specific, and it demonstrates local knowledge rather than asserting it. Every agency in Ireland claims local expertise; almost none of them evidence it anywhere a vendor can see.",
        ],
      },
      {
        h: "The sold board is underused advertising",
        p: [
          "Make sure it goes up promptly, that it says sold, and that it stays for as long as permitted. It is the cheapest and most credible advertising in the business.",
          "Photographing it and using it in local social advertising extends the same effect to people who do not drive down that road.",
        ],
      },
      {
        h: "Measure instructions by area",
        p: [
          "Most agencies cannot say which towns or estates their instructions came from over the last two years. Without that, area farming is an intention rather than a strategy.",
          "It is a simple record to keep and it tells you quickly whether the concentration is working, which areas are responding, and where the next board is worth most.",
        ],
      },
    ],
    related: ["estate-agents", "solicitors", "mortgage-brokers"],
  },
  {
    slug: "property-listing-photography-and-video",
    title: "What property photography actually has to do",
    description:
      "Listing images are not decoration. What an Irish property listing needs to earn viewings, and the shots that cost agencies time on the market.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "A buyer decides in a few seconds on a phone whether to click a listing, and decides on the photographs whether to request a viewing. In a market where the portal shows your listing beside everyone else's, the images are not presentation — they are the whole first round of the competition.",
    sections: [
      {
        h: "The first image decides the click",
        p: [
          "It is the only one most people see. It should be the most compelling accurate view of the property, which is frequently not the front elevation everybody defaults to.",
          "For a coastal or rural house it may be the setting. For a renovated terrace it may be the kitchen. Choosing it deliberately rather than by habit is a free improvement on every listing you run.",
        ],
      },
      {
        h: "Light is most of the job",
        p: [
          "Irish weather makes this harder and more important. A house shot on a flat grey afternoon looks like a different property from the same house shot in decent light.",
          "Waiting for a better day costs a few days and routinely saves weeks on the market. Agencies under pressure to get the listing up tomorrow make this trade badly and repeatedly.",
        ],
      },
      {
        h: "Shoot the rooms people actually care about",
        p: [
          "Kitchen, main living space, main bedroom, bathroom, garden, and the outlook from the principal rooms. Buyers look for those and get uneasy when one is missing.",
          "An absent room reads as something being hidden, whether or not it is. If a room is poor, show it honestly — a viewing that ends in disappointment costs more than a click you did not get.",
        ],
      },
      {
        h: "Floor plans and video earn their cost",
        p: [
          "A floor plan answers the question photographs cannot: how it fits together. Listings without one generate viewings from people who then discover the layout does not work for them.",
          "Video matters most where the buyer cannot easily view — coastal property, rural houses, overseas buyers. It is the difference between a listing that sells to people already nearby and one that reaches the buyer who is not.",
        ],
      },
      {
        h: "Get the required information right",
        p: [
          "A BER rating belongs in the advertisement, and your PSRA licence details belong on your materials. These are requirements rather than marketing choices.",
          "They also signal competence. A listing missing the basics tells a careful vendor something about how the rest of the sale will be handled.",
        ],
      },
    ],
    related: ["estate-agents", "photographers", "interior-designers"],
  },
  {
    slug: "winning-landlord-and-management-work",
    title: "Winning landlord work, which pays every month",
    description:
      "Sales income is lumpy and depends on a market you do not control. Management fees arrive monthly, and almost no Irish agency advertises for landlords deliberately.",
    date: "2026-09-28",
    minutes: 6,
    intro:
      "Most Irish estate agencies get their management business the same way: it turns up. A landlord rings, or a past client buys an investment, or somebody is recommended. Nobody goes looking. That is strange, because it is the only recurring revenue in the business and the only part that does not collapse when transaction volumes fall.",
    sections: [
      {
        h: "Recurring income changes the whole business",
        p: [
          "Sales income depends on market conditions, interest rates and supply, none of which you control. Management fees arrive every month regardless of whether anything is selling.",
          "An agency with a substantial managed portfolio can survive a slow year. One entirely dependent on transactions cannot, and the time to build it is when things are busy rather than when they are not.",
        ],
      },
      {
        h: "A landlord is a future vendor",
        p: [
          "Landlords sell eventually, and the agency managing the property is the obvious choice when they do. That makes the real value of a management contract considerably higher than the monthly fee.",
          "It also changes what you can afford to spend acquiring one, which is the calculation almost nobody in Irish agency does.",
        ],
      },
      {
        h: "They have specific, findable problems",
        p: [
          "Compliance, registration, deposits, disputes, the rules changing again. Landlords search for answers to these constantly and mostly find generic or out-of-date material.",
          "An agency that explains the current position clearly gets found by exactly the people it wants, at the moment they are feeling the weight of doing it themselves. That is the natural opening for a management conversation.",
        ],
      },
      {
        h: "The accidental landlord is the easiest target",
        p: [
          "People who inherited a house, moved in with a partner, or emigrated and kept the property. They did not intend to be landlords, they are not enjoying it, and they are handling it badly.",
          "They are also frequently not local, which makes self-management genuinely difficult. They are the most receptive audience for management services and nobody is speaking to them.",
        ],
      },
      {
        h: "Say that you want it",
        p: [
          "A great many agency websites treat lettings as a footnote behind sales. If it is not visible, prominent and explained, landlords assume it is a sideline and go to a specialist.",
          "Its own page, its own explanation of what is included, its own fee structure, its own enquiry form. That is the minimum, and it is more than most Irish agencies currently have.",
        ],
      },
    ],
    related: ["estate-agents", "solicitors", "accountants"],
  },
  {
    slug: "estate-agency-google-ads-waste",
    title: "Where an estate agency's Google Ads budget disappears",
    description:
      "Property searches are dominated by people looking for houses, not agents. What an Irish agency should block, and the handful of terms worth real money.",
    date: "2026-09-28",
    minutes: 7,
    intro:
      "Estate agency is among the worst sectors in Ireland for wasted search spend, because the overwhelming majority of property searches are made by buyers and renters looking for a house, while the agency actually needs vendors and landlords. On a default campaign you pay for all of it at the same rate.",
    sections: [
      {
        h: "Buyer and renter searches are the bulk of it",
        p: [
          "'Houses for sale in Naas', 'apartments to rent Galway', 'property for sale near me' — enormous volume, and almost none of it is a vendor.",
          "Some of it is worth having if you want listing traffic. Most agencies do not need it, because the portals already supply buyers, and it will eat a small budget entirely.",
          "This is the decision to make consciously. Letting it happen by default is how an agency concludes Google Ads does not work.",
        ],
      },
      {
        h: "Block the research and reference searches",
        p: [
          "Price register lookups, property tax queries, stamp duty calculators, planning searches and house price index questions all carry property words and none of them are a client.",
        ],
        list: [
          "price register, property price register, ppr, sold prices",
          "lpt, property tax, stamp duty, calculator, valuation calculator free",
          "planning permission, planning search, land registry, folio",
          "house price index, market report, statistics",
        ],
      },
      {
        h: "Jobs, courses and licensing",
        p: [
          "'Estate agent jobs', 'auctioneering course', 'PSRA licence application', 'how to become an estate agent'. Steady volume, zero value.",
          "The licensing terms are the ones agencies miss, because they look professionally relevant.",
        ],
        list: [
          "jobs, vacancy, hiring, trainee, negotiator job, salary, commission rate",
          "course, qualification, licence, license, psra application, ipav, scsi",
        ],
      },
      {
        h: "Free valuation tools are a trap in both directions",
        p: [
          "'Free online house valuation', 'instant valuation' and 'what is my house worth calculator' look perfect and frequently are not — a large share want a number, not an agent, and will never convert.",
          "If you run an instant valuation tool deliberately as a lead magnet, these terms are exactly right. If you do not, they will fill your account with people who bounce the moment a phone number is requested.",
        ],
      },
      {
        h: "What is actually worth bidding on",
        p: [
          "The vendor and landlord terms, which are far lower volume and far higher value.",
          "'Estate agents [town]', 'sell my house [town]', 'house valuation [town]', 'letting agents [town]', 'property management [town]'. These people are choosing a firm, which is the only search that becomes an instruction.",
        ],
        list: [
          "sell my house / sell my home + town",
          "estate agents / auctioneers + town",
          "house valuation / property valuation + town",
          "letting agents / property management + town",
          "probate sale, selling inherited property",
        ],
      },
      {
        h: "Then read your search terms report",
        p: [
          "The lists above are a starting point. The real answer is in the report showing what people actually typed, and most agencies have never opened it.",
          "Weekly for the first month, monthly after. On an inherited agency account it is almost always the largest single saving available, and it usually pays for the work in the first fortnight.",
        ],
      },
    ],
    related: ["estate-agents", "mortgage-brokers", "solicitors"],
  },
  {
    slug: "boiler-replacement-is-the-job",
    title: "The callout is not the job. The replacement is.",
    description:
      "Irish plumbers give away the most valuable thing on a repair visit: the knowledge that a boiler is nearly finished. How to come back for it.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "A plumber stands in front of a fifteen-year-old boiler several times a week, fixes the immediate fault, takes payment for an hour, and leaves. Somewhere in the next two years that boiler is replaced, usually by whoever happened to be visible when it finally died. The information needed to win that job was in the room, and nobody wrote it down.",
    sections: [
      {
        h: "You already know which ones are going",
        p: [
          "Age, condition, how often you have been to it, what the parts situation looks like. On most repair visits you can form a decent view of how long a system has left.",
          "That is a sales pipeline nobody else has. A competitor advertising for boiler replacements is paying to find people you have already met.",
        ],
      },
      {
        h: "Write it on the job, not afterwards",
        p: [
          "Address, system type, rough age, condition, and when you would expect it to need replacing. Thirty seconds on the phone before you drive off.",
          "Afterwards never happens. Every plumber who has tried to reconstruct this from memory in October has discovered it does not work.",
        ],
      },
      {
        h: "Ring in September, not in January",
        p: [
          "A boiler replacement decided in a warm September is a planned job at a sensible price with time to order parts. The same boiler failing in January is an emergency, a stressed customer and whoever can come tomorrow.",
          "A call in early autumn — 'I was with you in March, that boiler was on its last legs, worth thinking about before the cold' — is useful rather than pushy, and it lands before your competitors start advertising.",
        ],
      },
      {
        h: "Quote the replacement while you are there",
        p: [
          "Even roughly. A customer who has a number in their head has already started the decision, and they will compare every later quote to yours.",
          "Being first with a figure is worth more than being cheapest with one, because it sets what normal looks like.",
        ],
      },
      {
        h: "What this is worth",
        p: [
          "A replacement is worth many times a callout, and the customer already trusts you because you fixed something for them.",
          "It costs no advertising spend at all. It costs a note on the job and one phone call in September, which is why the plumbers who do it consistently look busier than their marketing explains.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "heat-pumps", "electricians"],
  },
  {
    slug: "marketing-heat-pumps-versus-boilers",
    title: "Marketing heat pumps is nothing like marketing boilers",
    description:
      "A boiler job is a purchase. A heat pump is a renovation decision with a long sales cycle and a customer who reads for months first.",
    date: "2026-09-29",
    minutes: 7,
    intro:
      "Plumbers moving into heat pump work usually carry their boiler marketing across and wonder why it produces nothing. The two are barely the same business. A boiler is a distress purchase decided in days by somebody whose heating has failed. A heat pump is a considered, expensive renovation decision made over months by somebody whose heating works fine.",
    sections: [
      {
        h: "Nobody's heat pump emergency exists",
        p: [
          "There is no equivalent of the boiler that died on Sunday. Nothing forces the decision, which means nothing produces an urgent enquiry.",
          "So the search behaviour is different: research terms rather than emergency ones, read before they ring, compare for weeks. A campaign built on 'call now' has nothing to work with.",
        ],
      },
      {
        h: "The house is the job, not the unit",
        p: [
          "A heat pump in a poorly insulated house with undersized emitters disappoints, and the customer blames the installer. The honest version of this sale involves talking about fabric, radiators and controls before talking about the pump.",
          "That is a harder conversation and a better filter. An installer whose website explains why some houses need work first is immediately more credible than one quoting a unit price, and gets far fewer difficult jobs.",
        ],
      },
      {
        h: "Grants shape the timing, not the decision",
        p: [
          "Support schemes bring people into the market and set the paperwork, but they do not make somebody replace a working heating system.",
          "What does is a renovation already happening, an extension, a house purchase, or an oil bill that has finally become intolerable. Those are the moments worth being visible for, and they are predictable in a way an emergency is not.",
        ],
      },
      {
        h: "Expect a long follow-up and plan for it",
        p: [
          "Months, not days. An enquiry that goes quiet in March is frequently a job in September, and installers who write off anything older than a fortnight are discarding most of what they paid for.",
          "A simple list — who enquired, what stage, when to contact again — is worth more than an increase in ad budget.",
        ],
      },
      {
        h: "Show completed retrofits, in Irish houses",
        p: [
          "Photographs of the outdoor unit on a recognisable Irish house, the cylinder, the finished install. Ideally with a sentence about what the house needed first.",
          "Generic manufacturer imagery is what every competitor uses and it persuades nobody. Your own jobs are the only asset here a competitor cannot buy.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "heat-pumps", "insulation"],
  },
  {
    slug: "cold-snap-decides-a-plumbers-year",
    title: "A cold snap decides more of your year than you think",
    description:
      "Burst pipes and failed boilers arrive in a handful of days. What Irish plumbers should have in place before it starts, because afterwards is too late.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Irish winters are mild and then, for a few days, they are not. Those days produce burst pipes, frozen condensates and boilers that finally give up, all at once, and they hand a large amount of work to whoever is visible and answering. The plumbers who capture it did the work in October.",
    sections: [
      {
        h: "The demand does not build, it appears",
        p: [
          "There is no ramp. The temperature drops, and within a day the phone behaviour changes completely.",
          "Anyone starting to advertise at that point is bidding against every other plumber in the county at the worst possible price, and is not in the map results that produce most of the calls. The positioning has to already exist.",
        ],
      },
      {
        h: "Decide what happens to calls you cannot take",
        p: [
          "In a cold snap you will miss calls. That is unavoidable. What is avoidable is those calls leaving no trace.",
          "An automatic text on a missed call — that you are on a job, and when you will ring back — converts a hang-up into a hold. It costs very little and it is the highest-return thing most plumbing businesses can do to their phone handling.",
          "An answering service for those weeks specifically is worth costing out. A handful of recovered jobs pays for the season.",
        ],
      },
      {
        h: "Triage instead of first-come",
        p: [
          "Not every emergency is equal. A burst pipe flooding a house is different from no heat in a spare room, and a customer told honestly that you can be there Thursday will often wait rather than ring elsewhere.",
          "Taking everything in the order it arrives means the big jobs go to whoever had a free slot. A first question about what is actually happening lets you put the day in the right order.",
        ],
      },
      {
        h: "Prevention is a product you could sell",
        p: [
          "Lagging, frost protection, knowing where the stopcock is, drain-downs for empty property. All of it is cheap, all of it is useful, and almost nobody markets it.",
          "It is also excellent autumn content, which is the season when you want to be accumulating visibility rather than spending on it.",
        ],
      },
      {
        h: "The follow-up is in January",
        p: [
          "Every emergency in a cold snap is a customer who has just been reminded their system is old. That is the single best moment in the year to talk about a replacement.",
          "Most plumbers finish the week exhausted and never go back to the list. It is the most valuable list they will generate all year.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "drainage", "insulation"],
  },
  {
    slug: "gas-or-oil-decides-your-marketing",
    title: "Gas or oil should decide how you advertise",
    description:
      "Large parts of Ireland have no mains gas at all. A national plumbing message advertises a service half your audience cannot buy.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "The natural gas network covers the cities and the towns along the pipeline, and not much else. Donegal, Mayo, Kerry and large stretches of the west and midlands have no mains gas whatsoever. That single fact should shape a plumbing business's advertising more than anything else about it, and in most campaigns it is not reflected at all.",
    sections: [
      {
        h: "Half the country cannot buy a gas boiler service",
        p: [
          "If your campaign runs on gas boiler messaging into a county with no network, you are paying to advertise something nobody there can purchase.",
          "It is obvious when stated and extremely common in practice, because the templates and the examples are all written for Dublin.",
        ],
      },
      {
        h: "Say which fuel you work on, early",
        p: [
          "It is the first thing a homeowner is checking, and most plumbing sites make them hunt for it or guess.",
          "Gas, oil, LPG, solid fuel, heat pumps — say it plainly, near the top. The registrations matter too: a customer looking for gas work wants to see you are registered for it, and one looking for oil work wants the equivalent.",
        ],
      },
      {
        h: "Counties that straddle both need two campaigns",
        p: [
          "Cork city is on gas and most of County Cork is not. Galway city is on gas and the county is not. Running one message across the whole county means it is wrong for whichever half happens to be reading.",
          "Splitting them is an afternoon's work and it is consistently the largest available improvement on those accounts.",
        ],
      },
      {
        h: "The search terms are genuinely different",
        p: [
          "'Boiler service' means something different in Douglas and in Dungloe, and the modifiers people add — oil, gas, range, stove, back boiler — are the cheapest available signal of what they actually have.",
          "Build the campaigns around those modifiers rather than around the generic term, and the quality of the enquiry changes immediately.",
        ],
        list: [
          "Gas areas: gas boiler service, boiler replacement, RGII, gas safety",
          "Non-gas areas: oil boiler service, oil burner, tank, range, solid fuel",
          "Everywhere: heat pump service, cylinder, controls, power flush",
        ],
      },
      {
        h: "Non-gas counties are where retrofit is moving fastest",
        p: [
          "Without a gas option, households exposed to oil prices have a stronger reason to look at heat pumps, and the grant-supported money follows.",
          "A plumber in a non-gas county who positions for retrofit rather than only for repair is positioned where the market is going, with far less competition than in the cities.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "heat-pumps", "stoves-and-fireplaces"],
  },
  {
    slug: "service-plans-plumbers-ignore",
    title: "Service plans: the recurring income plumbers skip",
    description:
      "Callout income stops when the phone stops. An annual service plan is predictable, sells the replacement for you, and almost nobody offers one.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Plumbing is feast and famine by default. A cold week is chaos and a mild March is quiet, and nothing about a callout business smooths that out. An annual service arrangement does, and it is the most obvious unexploited idea in the Irish trade.",
    sections: [
      {
        h: "What it actually buys you",
        p: [
          "Predictable income, work scheduled into the months that would otherwise be quiet, and a list of systems you know intimately.",
          "That last one is the real prize. A plumber who services the same boilers every year knows exactly which are near the end, which makes the replacement conversation natural rather than cold.",
        ],
      },
      {
        h: "Keep it simple enough to explain in a sentence",
        p: [
          "An annual service, priority in an emergency, and a discount on parts or callouts. That is enough. Plans fail when they become complicated tiers nobody can compare.",
          "Priority is the part customers actually value. Somebody who has been without heat in January will pay for the promise of being near the front of the queue next time.",
        ],
      },
      {
        h: "Sell it at the end of a job, not in an advert",
        p: [
          "The moment somebody's heating has just been fixed is the moment they are most aware of what it is worth. That is when the plan makes sense to them.",
          "Advertising a service plan cold to strangers is hard work. Offering it to a satisfied customer standing in a warm house is not.",
        ],
      },
      {
        h: "It changes what a customer is worth",
        p: [
          "If a customer is a one-off callout, there is a hard limit on what you can spend to acquire one. If they are several years of servicing plus an eventual replacement, that limit moves a long way.",
          "That is what lets a plumbing business outbid its competitors for the same click and still make money.",
        ],
      },
      {
        h: "Landlords and agents will take it first",
        p: [
          "Rental property needs servicing on a schedule anyway and the paperwork matters to the landlord. A plan is an easier sell there than to a homeowner, and one letting agent can be many properties.",
          "It is also the segment least likely to leave over price, because the hassle of changing plumber across a portfolio is worse than the saving.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "electricians", "drainage"],
  },
  {
    slug: "bathroom-work-and-leak-work",
    title: "Bathroom jobs and leaks are two different businesses",
    description:
      "One customer is panicking at nine at night, the other has been planning since January. Most Irish plumbing websites speak to neither properly.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Most plumbers do both emergency repair and planned bathroom or renovation work, and most plumbing websites try to address both on one page. The result is a page that reassures nobody, because the two customers have nothing in common except the trade.",
    sections: [
      {
        h: "Two customers, two clocks",
        p: [
          "The leak customer decides in minutes, on the phone, from the map results. They want to know you can come and roughly what it costs.",
          "The bathroom customer has been thinking about it for months, will get three quotes, wants to see finished work, and will not decide for weeks. They want evidence and detail.",
          "A single page that hedges between urgency and reassurance does the job of neither.",
        ],
      },
      {
        h: "Give the planned work its own page and its own photographs",
        p: [
          "Finished bathrooms, in real Irish houses, ideally with some sense of what was there before. This is a visual purchase and the images do most of the selling.",
          "It also needs the practical answers people actually want: how long the room is out of use, who does the tiling, whether you handle the electrics, what happens if something is found behind the wall.",
        ],
      },
      {
        h: "The emergency page needs almost the opposite",
        p: [
          "Phone number large and tappable, hours stated honestly, areas covered, and what a callout costs. Nothing else matters and anything else gets in the way.",
          "The most common failure is burying the number under a paragraph about the company's history.",
        ],
      },
      {
        h: "They need different channels too",
        p: [
          "Emergency work is a search and map job — people type it at the moment of need. Planned bathroom work builds well on Meta, because a photograph of a finished room reaches somebody who has been meaning to do theirs for two years.",
          "Running both through one channel is why plumbers conclude that one of them does not work.",
        ],
      },
      {
        h: "One feeds the other",
        p: [
          "The customer whose leak you fixed well is the customer who rings you about the bathroom eighteen months later — if you gave them a reason to remember you.",
          "That is what makes the emergency work worth doing at a modest margin, and it only pays off if there is something to come back to.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "bathroom-renovations", "tilers"],
  },
  {
    slug: "google-ads-for-plumbers-ireland",
    title: "Where a plumber's Google Ads budget actually goes",
    description:
      "DIY fixes, parts searches, job seekers and the wrong fuel all cost Irish plumbers money on a default setup. What to block and what to bid on.",
    date: "2026-09-29",
    minutes: 7,
    intro:
      "Plumbing has genuinely high-intent searches and genuinely expensive clicks, which is a combination that punishes a sloppy campaign hard. On most plumbing accounts we review, a large share of spend is going to searches that could not become a job, and the emergency terms that could are running at hours nobody can attend.",
    sections: [
      {
        h: "DIY is the biggest single category",
        p: [
          "'How to bleed a radiator', 'how to fix a dripping tap', 'why is my boiler losing pressure' — enormous volume, and these people are explicitly trying not to hire anyone.",
          "Some of them give up and ring a plumber. Not enough to justify the click cost on a normal budget, and they crowd out people who have already decided to pay somebody.",
        ],
        list: [
          "how to, diy, yourself, fix my own, tutorial, video, youtube",
          "what does it mean, why is my, troubleshooting, reset, error code",
        ],
      },
      {
        h: "Parts and merchant searches",
        p: [
          "'Boiler parts', 'radiator valves', 'copper pipe price', 'immersion element screwfix' — somebody is buying materials, not labour.",
          "There is also a steady stream of appliance searches that drift in — washing machines and dishwashers especially — which are a different trade entirely unless you do them.",
        ],
        list: [
          "parts, spares, valve, element, screwfix, heatmerchants, wholesale, price per",
          "washing machine, dishwasher, appliance, fridge",
        ],
      },
      {
        h: "Jobs, courses and registration",
        p: [
          "Plumbing is a trade people are actively trying to enter. 'Plumbing jobs', 'plumbing apprenticeship', 'RGII registration', 'plumbing course'.",
          "Straightforward to block and frequently a meaningful share of a neglected account.",
        ],
        list: [
          "jobs, vacancy, apprentice, apprenticeship, hiring, wage, salary, day rate",
          "course, training, qualification, city and guilds, registration, how to become",
        ],
      },
      {
        h: "The wrong fuel and the wrong county",
        p: [
          "If you do not do oil, block oil. If you only work gas areas, do not pay for clicks from counties with no network.",
          "Set locations to presence rather than presence-or-interest, and add the counties you genuinely will not travel to. This is the most common source of silent waste in trade accounts.",
        ],
      },
      {
        h: "Run emergency terms only when you can attend",
        p: [
          "Emergency clicks are the dearest in the trade. Buying them at hours when you cannot get there until Thursday is paying top rate to lose the job to whoever could come.",
          "Use ad scheduling honestly. If you genuinely take night calls, bid then and say so — it is much less contested. If you do not, stop paying for it.",
        ],
      },
      {
        h: "What is worth real money",
        p: [
          "Terms with a place and an intention: 'emergency plumber [town]', 'boiler replacement [town]', 'oil boiler service [county]', 'bathroom fitter [town]', 'power flush [town]'.",
          "Then read the search terms report weekly for the first month. Your own report is the real list; everything above is only a starting point.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "drainage", "electricians"],
  },
  {
    slug: "landlord-and-agent-plumbing-work",
    title: "Letting agents are worth more than any advert",
    description:
      "One agent can be sixty properties on a schedule. Irish plumbers almost never pursue this deliberately, and it is the steadiest work in the trade.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Most plumbers get their landlord work by accident. Somebody rings, it goes well, and a trickle follows. Nobody sets out to win letting agents, which is strange, because a single agent managing sixty properties is a more valuable relationship than any advertising campaign a small plumbing business will ever run.",
    sections: [
      {
        h: "Why it is better work than it looks",
        p: [
          "Scheduled servicing rather than emergencies. Repeat volume from one relationship. Invoices to a business rather than chasing householders. And it continues through the quiet months.",
          "It is also durable. Changing plumber across a managed portfolio is a hassle an agent will avoid, so a relationship that works tends to last years.",
        ],
      },
      {
        h: "What an agent actually needs",
        p: [
          "Answering the phone, turning up when you said, and paperwork that arrives without being chased. That is most of it.",
          "The tenant is the agent's problem and you are the person who makes it go away. A plumber who communicates clearly about timing removes more stress than one who is slightly cheaper, and agents will say so openly.",
        ],
      },
      {
        h: "The paperwork is the differentiator",
        p: [
          "Certificates, service records, dated reports, clear invoices. Agents are managing compliance for somebody else's property and the documentation is not optional for them.",
          "Being reliably good at that is genuinely rare in the trade and it is the thing that gets you recommended internally to the other property managers in the office.",
        ],
      },
      {
        h: "How to actually approach them",
        p: [
          "Individually. Find the property management person rather than the sales side of the agency — they are different people with different problems.",
          "A short, specific introduction beats a brochure: what you do, where you cover, that you provide certificates and dated reports, and your hours. Then follow up once. Most plumbers never make the approach at all, so the field is thin.",
          "The moment they are most receptive is when their existing plumber has just let them down, which you cannot predict — which is the argument for being in front of them more than once.",
        ],
      },
      {
        h: "Price it as a relationship, not a job",
        p: [
          "Volume justifies a rate you would not give a one-off householder, and trying to charge agent work at domestic emergency rates is how these relationships end.",
          "The maths only works if you count the year rather than the callout, which is the same calculation that makes service plans worth having.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "estate-agents", "electricians"],
  },
  {
    slug: "landscaping-means-five-different-things",
    title: "Landscaping means five different things to five people",
    description:
      "Maintenance, tidy-ups, paving, planting and full design are different businesses. Irish landscapers lose work by advertising all five as one.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "When somebody types 'landscaper' into Google in Ireland, they could want a lawn cut, a patio laid, a hedge taken down, a border planted or an entire garden designed and rebuilt. Those are five different jobs at five different prices on five different timelines, and most landscaping websites present them as one undifferentiated service. The customer cannot tell whether you are for them, so they ring the next one.",
    sections: [
      {
        h: "The five, and why they do not mix",
        p: [
          "Each has a different buyer, a different decision speed and a different margin. Treating them as one offer means your message is slightly wrong for everybody.",
        ],
        list: [
          "Maintenance — recurring, scheduled, low drama, predictable income",
          "One-off tidy-ups — urgent, often before a sale or a visit, price-led",
          "Hard landscaping — paving, walls, decking, where most of the money is",
          "Planting and borders — knowledge-led, smaller budgets, high satisfaction",
          "Full design and build — long decision, big budget, decided on portfolio",
        ],
      },
      {
        h: "The searches are genuinely different",
        p: [
          "Somebody wanting a hedge cut does not search the way somebody planning a garden rebuild does. One wants a price and a date; the other wants to look at pictures for a fortnight.",
          "Running one campaign across both means paying the same for both clicks and sending them to the same page, which converts the cheap job well and the expensive one badly.",
        ],
      },
      {
        h: "Give the big-ticket work its own page",
        p: [
          "Design and build is decided on evidence. It needs its own page with finished projects, an explanation of how the process runs, and some sense of what happens between the first visit and the last.",
          "Burying it under a services list with grass cutting is how landscapers end up doing a lot of maintenance and wondering why the design enquiries never come.",
        ],
      },
      {
        h: "You are allowed to not do some of them",
        p: [
          "The most profitable decision many landscapers make is to stop offering the work they do not want. Every job you take that you are not suited to costs you a slot and frequently a review.",
          "Saying clearly what you do, and what you do not, filters the enquiries before the phone rings. It feels like turning away work and is in practice the fastest way to improve the mix.",
        ],
      },
      {
        h: "What to do this week",
        p: [
          "Look at your own site and ask which of the five a stranger would think you do. If the answer is 'all of them, equally', that is the problem.",
          "Pick the one you want more of, give it the most prominent page, and write it for the person who has already decided they want that specific thing.",
        ],
      },
    ],
    related: ["landscapers", "driveways-and-paving", "fencing-and-gates"],
  },
  {
    slug: "photographing-a-garden-properly",
    title: "What to photograph in a garden, and when",
    description:
      "Landscaping is sold on pictures and most of the ones taken are unusable. The shots that win the next job, and the light that ruins them.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "A garden is the most photogenic thing any trade produces and landscapers are consistently bad at photographing it. The phone is full of pictures taken on the last afternoon, in flat grey light, from wherever the van was parked. Those images will not sell the next job, and in this trade the images are almost the whole sale.",
    sections: [
      {
        h: "Before is worth as much as after",
        p: [
          "An after photograph of a good garden is pleasant. The same photograph beside the tired lawn and broken slabs that were there in March is persuasive, because it shows what you changed rather than what exists.",
          "So the discipline is to shoot it on the first visit, before anything moves, from two or three positions you can return to. Nobody regrets having the before shot; everybody regrets not having it.",
        ],
      },
      {
        h: "Same position, same height, both times",
        p: [
          "A before from the back door and an after from the end of the garden do not compare, and the pair stops working.",
          "Look at the before photograph on your phone before taking the after, and stand where you stood. Fifteen seconds, and it is the difference between a usable pair and two unrelated pictures.",
        ],
      },
      {
        h: "Wait for the planting to settle",
        p: [
          "The day the job finishes is the worst day to photograph it. Soil is bare, edges are raw, and everything looks newly installed rather than established.",
          "Go back in six or eight weeks when it has knitted together. That is the photograph that sells, and it costs one short visit. Ask the customer when you finish — most are delighted to be asked.",
        ],
      },
      {
        h: "Light decides more than the camera",
        p: [
          "Harsh midday sun flattens planting and blows out paving. Early morning and late afternoon give depth and texture.",
          "Overcast is genuinely good for foliage and terrible for skies, so frame it tighter. Avoid shooting into the sun with the garden dark in front of it, which is the most common ruined garden photograph.",
        ],
      },
      {
        h: "Shoot the details as well as the whole",
        p: [
          "A wide shot shows the layout. Close work — a cut edge, a step detail, jointing, a planted corner — shows the standard, and that is what a customer who is comparing quotes is actually looking for.",
          "Four or five images per job is plenty. It is the consistency of getting them every time that builds the asset.",
        ],
      },
      {
        h: "Where they earn their keep",
        p: [
          "The Google Business Profile, weekly. The website, grouped by project rather than dumped in a gallery. Meta ads, where before-and-after pairs outperform everything else in this trade.",
          "And in quotes. Sending a prospective customer two comparable finished gardens before the visit does more than any amount of reassurance.",
        ],
      },
    ],
    related: ["landscapers", "photographers", "driveways-and-paving"],
  },
  {
    slug: "charging-for-a-garden-design",
    title: "Getting paid for the drawing",
    description:
      "Irish landscapers routinely give away the design and hope to win the build. What that costs, and how to charge for it without losing the job.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "A landscaper spends an evening on a layout, a plant list and a rough costing, hands it over free, and hears nothing. Three months later the garden gets built by somebody cheaper, from that drawing. It happens constantly and it is entirely avoidable.",
    sections: [
      {
        h: "Free design is not free to you",
        p: [
          "It is hours of skilled work, and giving it away teaches the customer that the thinking is worthless and only the labour has value. That is exactly backwards for a business that wants design-and-build work.",
          "It also attracts the wrong enquiries. People who would never pay for a design are disproportionately likely to shop the drawing around.",
        ],
      },
      {
        h: "Charge for it, and make it worth having",
        p: [
          "A paid design that is properly presented — a scale layout, planting, materials, a phased plan if the budget needs staging — is a product in its own right. The customer has something valuable whether or not you build it.",
          "Most will want you to build it, because you designed it and they now trust you. But the ones who do not have at least paid for your time.",
        ],
      },
      {
        h: "Credit it against the build",
        p: [
          "The line that removes almost all resistance: the design fee comes off the build if you go ahead with us.",
          "It is fair, it is easy to say, and it turns the fee from a barrier into a deposit. Landscapers who adopt this almost never go back.",
        ],
      },
      {
        h: "Filter before you get there",
        p: [
          "A consultation fee for the first visit — credited the same way — removes the people who are collecting free ideas from four landscapers.",
          "You will get fewer first visits and a much higher proportion will become work. Measure jobs won per visit rather than visits booked and the change is obvious.",
        ],
      },
      {
        h: "Say it on the website",
        p: [
          "The design process, that it is a paid piece of work, and that it is credited against the build. Plainly, on the design page.",
          "It sets the expectation before anyone rings, which means the conversation on the phone is about the garden rather than about whether you charge.",
        ],
      },
    ],
    related: ["landscapers", "architects", "interior-designers"],
  },
  {
    slug: "maintenance-contracts-for-landscapers",
    title: "The maintenance work that carries you through winter",
    description:
      "Build income stops when the weather turns. Scheduled maintenance does not, and it is the most under-sold service in Irish landscaping.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Landscaping is brutally seasonal. Spring and summer are frantic, and then the ground turns and the phone goes quiet for months. Scheduled maintenance is the obvious answer, and most Irish landscapers treat it as filler rather than as the thing that makes the business survivable.",
    sections: [
      {
        h: "What it actually buys you",
        p: [
          "Income that arrives whether or not anybody is commissioning a new garden, work that can be planned rather than reacted to, and a reason to be in front of past customers all year.",
          "That last one matters more than it sounds. The gardens you maintain are the gardens you get asked to extend, replant and rebuild.",
        ],
      },
      {
        h: "Sell it at handover, not cold",
        p: [
          "The moment a new garden is finished is the moment the customer most wants it to stay looking like that, and most fears it will not.",
          "Offering a maintenance arrangement there converts far better than approaching a stranger months later. It also protects your own work, which is a legitimate thing to say out loud: a garden left unmaintained stops being a portfolio piece.",
        ],
      },
      {
        h: "Keep the offer simple",
        p: [
          "A set number of visits a year, what happens on each, and who supplies what. That is enough.",
          "Complicated tiers make the customer compare rather than decide. One clear arrangement with an obvious scope wins more often than three options.",
        ],
      },
      {
        h: "Commercial contracts are the bigger prize",
        p: [
          "Business parks, hotels, apartment blocks, schools and nursing homes all need grounds kept, on a schedule, with an invoice rather than a chat at the gate.",
          "It is less glamorous than a design build and far steadier. It is also barely contested, because almost every landscaper markets to homeowners and waits for commercial work to arrive by accident.",
        ],
      },
      {
        h: "It changes what you can afford to spend",
        p: [
          "A one-off build customer has a hard ceiling on acquisition cost. A maintenance customer who stays several years, and who eventually commissions more work, is worth a multiple of that.",
          "That is what lets you outbid a competitor for the same enquiry and still make money on it.",
        ],
      },
    ],
    related: ["landscapers", "cleaning-companies", "tree-surgery"],
  },
  {
    slug: "why-landscaping-quotes-get-shopped",
    title: "Why your landscaping quote gets shopped around",
    description:
      "Three quotes for the same garden look identical to someone who cannot read them. What to put in yours so the comparison stops being about price.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "A homeowner with three landscaping quotes is holding three totals for what looks like the same job. They cannot assess the base you propose under the paving, the drainage you have allowed for or the size of the plants. So they compare the only thing they can read, which is the number at the bottom.",
    sections: [
      {
        h: "Itemise what is underneath",
        p: [
          "Excavation depth, sub-base, membrane, drainage, edging, jointing. The customer will not understand all of it and that is fine — what they register is that you have specified things the other quote did not mention.",
          "It also makes a cheaper quote look thin, because it usually is. The corner most commonly cut in Irish landscaping is the part nobody can see afterwards.",
        ],
      },
      {
        h: "Say what the plants actually are",
        p: [
          "'Mixed shrub planting' could be anything. Named species, sizes and quantities tell the customer what they are getting and let them see why one quote is dearer.",
          "Pot size is the detail that most often separates two quotes, and almost nobody explains it.",
        ],
      },
      {
        h: "Show them two gardens you have finished",
        p: [
          "Comparable in style and scale, ideally nearby. It answers the question underneath every landscaping decision: will it actually look like I am imagining.",
          "Photographs do more here than any paragraph of reassurance, and most landscapers send a price with no images at all.",
        ],
      },
      {
        h: "Be specific about disruption",
        p: [
          "How long the garden is unusable, where the skip goes, what happens to the lawn the machinery crosses, whether they can use the back door.",
          "People worry about this far more than they mention it, and addressing it unprompted is disproportionately reassuring.",
        ],
      },
      {
        h: "Then follow up once",
        p: [
          "Most landscapers send the quote and wait. One call a few days later, asking whether anything needs explaining, recovers a real share of the jobs that would otherwise drift.",
          "Not a discount call — a clarifying one. The customer is usually confused rather than unconvinced.",
        ],
      },
    ],
    related: ["landscapers", "driveways-and-paving", "builders-and-extensions"],
  },
  {
    slug: "new-build-gardens-are-the-best-customer",
    title: "The blank new-build garden is your best customer",
    description:
      "A new estate is a street of identical empty gardens, all owned by people who want the same thing and talk to each other. Irish landscapers under-work it.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Somebody moves into a new house and the garden is a rectangle of builder's rubble with a thin skin of topsoil over it. They know it needs doing, they have no idea what it costs, and they are looking at the same problem as everyone else on the road. It is the most concentrated, most repeatable opportunity in Irish landscaping and it is mostly worked by accident.",
    sections: [
      {
        h: "The problem is identical up and down the street",
        p: [
          "Same soil, same size, same aspect within a few degrees, same builder's leftovers underneath. Once you have solved it for one house you can quote the next in minutes and build it faster.",
          "That is a margin advantage no design-led one-off job gives you, and it compounds the more of them you do.",
        ],
      },
      {
        h: "Neighbours are the whole marketing plan",
        p: [
          "A finished garden on a new estate is visible to forty households with the same rectangle of mud. Nothing else in this trade advertises that efficiently.",
          "Work while people can see you, keep the site tidy, and make it easy for someone to ask what it cost. A card through the doors on the road while you are there converts unusually well because they have just watched you do it.",
        ],
      },
      {
        h: "Be honest about the ground",
        p: [
          "Most new-build gardens are compacted subsoil with a shallow layer of topsoil dropped on top. A lawn laid straight onto that will sit wet and fail.",
          "Explaining that is both the right thing and a strong sales position: it is the reason your quote is higher than the one that just prices turf, and the customer can verify it with a spade.",
        ],
      },
      {
        h: "Phase it if the budget is stretched",
        p: [
          "People who have just bought a house are frequently out of money. A scheme delivered in two or three phases keeps the job alive instead of losing it to 'maybe next year'.",
          "It also books you work in a quieter month, which is worth something on its own.",
        ],
      },
      {
        h: "Target by estate, not by county",
        p: [
          "Advertising platforms will let you reach a small, specific area. A new estate is exactly that, and the people in it share a problem you have already solved.",
          "It is far cheaper than county-level targeting and the message can be completely specific, which is the combination that actually converts.",
        ],
      },
    ],
    related: ["landscapers", "fencing-and-gates", "artificial-grass"],
  },
  {
    slug: "google-ads-for-landscapers-ireland",
    title: "Where a landscaper's Google Ads budget disappears",
    description:
      "Garden centre searches, DIY, job seekers and council work all cost Irish landscapers money on a default setup. What to block and what to bid on.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Landscaping has an unusually wide keyword surface and most of it is not a customer. Garden centres, plant searches, DIY projects, council parks, jobs and courses all carry the same words a landscaper bids on, and on a default campaign you pay for every one of them at the same price.",
    sections: [
      {
        h: "Retail and plant searches are the biggest leak",
        p: [
          "'Garden centre near me', 'plants for sale', 'turf delivery', 'topsoil bags'. Somebody is buying materials or plants, not hiring anyone.",
          "This is usually the largest category of waste in a landscaping account and the easiest to remove.",
        ],
        list: [
          "garden centre, nursery, plants for sale, seeds, bulbs, compost",
          "topsoil, turf delivery, bark, gravel bags, sleepers, b&q, woodie's",
        ],
      },
      {
        h: "DIY and inspiration",
        p: [
          "'Garden ideas', 'how to lay a patio', 'small garden design ideas'. Enormous volume, very high click rate, almost no intent to hire.",
          "'Ideas' is the single most useful negative keyword in this trade. People browsing ideas are months away at best and frequently doing it themselves.",
        ],
        list: [
          "ideas, inspiration, diy, how to, tutorial, pinterest, images, photos",
          "cheap, budget, free, yourself",
        ],
      },
      {
        h: "Jobs, courses and qualifications",
        p: [
          "'Landscaping jobs', 'gardener wanted', 'horticulture course', 'landscape architecture degree'. Steady volume, no value.",
          "The architecture and horticulture study terms are the ones most often missed because they look professionally relevant.",
        ],
        list: [
          "jobs, vacancy, hiring, wanted, apprentice, wage, salary",
          "course, degree, horticulture, landscape architecture, college, qualification",
        ],
      },
      {
        h: "Council, commercial and the wrong scale",
        p: [
          "'Park maintenance tender', 'council grass cutting', 'golf course greenkeeper'. Unless you genuinely do that work, block it.",
          "Equally, if you do only domestic work, block the commercial terms — and if you want commercial work, give it a separate campaign rather than letting it drift into the domestic one.",
        ],
      },
      {
        h: "What is actually worth paying for",
        p: [
          "Terms with a job and a place in them. 'Garden design [town]', 'patio laid [town]', 'landscaping company near me', 'garden makeover [county]', 'hedge cutting [town]'.",
          "Set locations to presence rather than presence-or-interest, and keep the radius to where you will genuinely tow a trailer. Then read the search terms report weekly for the first month — in this trade it is always more revealing than people expect.",
        ],
      },
    ],
    related: ["landscapers", "driveways-and-paving", "tree-surgery"],
  },
  {
    slug: "landscaping-reviews-and-referrals",
    title: "The garden nobody sees is a review you did not get",
    description:
      "Landscaping work is hidden behind houses. What to do about it, and why asking on the last day beats asking by text a week later.",
    date: "2026-09-29",
    minutes: 6,
    intro:
      "Roofers get a sign in the front garden. Shopfitters get a shopfront. A landscaper builds something beautiful behind a house where nobody except the owner and their immediate neighbours will ever see it. That invisibility is the central marketing problem of the trade, and reviews and referrals are the only real answer to it.",
    sections: [
      {
        h: "Ask on the last day, standing in the garden",
        p: [
          "The customer will never be happier about the work than the moment they first see it finished. That is when to ask, in person, with the review page already open on your phone.",
          "A text a week later, when the novelty has worn off and life has resumed, converts at a fraction of the rate. Almost every landscaper does it the second way.",
        ],
      },
      {
        h: "Ask for something specific",
        p: [
          "'Would you mind mentioning the drainage work?' produces a far more useful review than 'would you mind leaving a review'.",
          "Specific reviews rank better, convert better, and answer the doubt the next customer actually has.",
        ],
      },
      {
        h: "Photographs in the review are worth double",
        p: [
          "Google lets reviewers attach images, and a customer's own photograph of their finished garden is more persuasive than anything on your website because it obviously was not staged.",
          "Most people will not think of it. Ask.",
        ],
      },
      {
        h: "The neighbours are the referral",
        p: [
          "The people who can actually see the work are the ones either side and behind. They have watched the whole build and they have the same garden.",
          "A card through the door while the job is running, or simply being friendly to the people looking over the fence, is the cheapest lead source in this trade and it costs nothing but manners.",
        ],
      },
      {
        h: "Keep a route back to old customers",
        p: [
          "Gardens change. Planting matures, families grow, patios get extended. The customer you built for four years ago is a genuine prospect and most landscapers never contact them again.",
          "A note once a year, ideally with a photograph of how their garden has matured, is welcome rather than intrusive and produces more work than most paid campaigns.",
        ],
      },
    ],
    related: ["landscapers", "tree-surgery", "powerwashing"],
  },
  {
    slug: "the-recall-list-is-the-marketing",
    title: "Your recall list is worth more than your ad budget",
    description:
      "Most Irish practices spend to replace patients they already had. Fixing recall is cheaper than acquisition and nearly always comes first.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "A dental practice that lets patients drift is permanently buying replacements for people it already won. It is the most expensive habit in the sector and the least visible, because a slowly emptying list looks like a normal quiet month rather than a problem. Before increasing any budget, it is worth finding out what actually happens when somebody misses a recall.",
    sections: [
      {
        h: "Find out what currently happens",
        p: [
          "In most practices the honest answer is: a reminder goes out, the patient does not respond, and nothing further happens. They are not called. They are not written to again. They simply stop being a patient without anyone deciding that.",
          "Ask your practice software how many patients have not attended in eighteen months. The number is usually larger than anyone expects, and every one of them chose you once already.",
        ],
      },
      {
        h: "A reminder is not a recall system",
        p: [
          "One automated text is a notification. A system is a sequence: the reminder, a follow-up if there is no response, a call, and then a different approach some months later.",
          "None of it is clever. It works because almost nobody does the second and third step, and because the patient's reason for not booking is usually that they were busy rather than that they left.",
        ],
      },
      {
        h: "Make booking possible without a phone call",
        p: [
          "A large share of people will not ring during working hours to make a dental appointment. They will tap a link at nine at night.",
          "Online booking, or at minimum a form that gets answered first thing, recovers patients who fully intended to come back and never got round to it.",
        ],
      },
      {
        h: "Reactivation beats acquisition",
        p: [
          "A patient who attended two years ago knows where you are, has a record with you, and has already decided you were acceptable. Winning them back costs a fraction of winning a stranger.",
          "A short, warm message to the lapsed list — not a discount, just a note that they are due and it is easy to book — is the highest-return campaign most practices can run, and it costs almost nothing.",
        ],
      },
      {
        h: "Then measure the right thing",
        p: [
          "Not new patients. Active patients: how many people attended in the last eighteen months, tracked quarterly.",
          "A practice adding new patients while quietly losing more is busy and going backwards, and only that number shows it.",
        ],
      },
    ],
    related: ["dentists", "physiotherapy", "opticians"],
  },
  {
    slug: "routine-and-cosmetic-are-two-campaigns",
    title: "Check-ups and cosmetic work are two different businesses",
    description:
      "One patient picks on convenience in five minutes, the other researches for six weeks. Irish practices lose both by advertising them together.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Somebody looking for a check-up wants a practice near them with a free slot. Somebody considering implants or veneers is making a considered, expensive decision and will compare practices across a city. Those are different people with different questions on different timelines, and a single campaign speaking to both convinces neither.",
    sections: [
      {
        h: "The routine patient decides on practicalities",
        p: [
          "Where you are, when you are open, whether they can book without ringing, and whether you take their medical card or their PRSI entitlement.",
          "That is the whole decision. Long copy about clinical philosophy is not read. The practice that answers those four things fastest gets the booking.",
        ],
      },
      {
        h: "The cosmetic patient decides on the clinician",
        p: [
          "They want to know who will actually do the work, how often they do it, what the process involves, how long it takes and what it looks like afterwards on someone who started where they are.",
          "That needs a proper page of its own: the clinician, the sequence of appointments, what recovery is like, and photographs of the practice's own completed work rather than stock imagery.",
          "It also needs patience. These enquiries convert over weeks, and a practice that writes off anyone who has not booked within a fortnight is discarding most of what it paid for.",
        ],
      },
      {
        h: "The searches are completely different",
        p: [
          "'Dentist near me' and 'dental implants [city]' should never share a landing page, and in most accounts the cosmetic terms cost several times more per click.",
          "Running them together means the expensive clicks are judged by the cheap campaign's conversion rate, which usually gets the valuable half switched off.",
        ],
      },
      {
        h: "Be careful how the claims are worded",
        p: [
          "Dentistry in Ireland is a regulated profession and the Dental Council has rules about how practices may advertise. Before-and-after imagery, testimonials and claims of superiority all need care.",
          "This is not a reason to market timidly. It is a reason to have someone check the wording, and to compete on clarity and evidence rather than on superlatives — which is better marketing in any case.",
        ],
      },
      {
        h: "Measure them separately or not at all",
        p: [
          "Cost per booked check-up and cost per booked consultation are different numbers with different acceptable ranges.",
          "Averaged together they produce a figure that describes neither and leads to the wrong decision about where the next euro goes.",
        ],
      },
    ],
    related: ["dentists", "skin-clinics", "med-spas"],
  },
  {
    slug: "prsi-dental-benefit-marketing",
    title: "Most patients do not know what they are entitled to",
    description:
      "The PRSI treatment benefit brings adults back who stopped going because they assumed the cost. Almost no Irish practice markets it properly.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "A great many working adults in Ireland have not seen a dentist in years, and a meaningful number of them assume it is because they cannot afford to. Plenty of them are entitled to a routine examination and cleaning through their PRSI contributions and have no idea. Explaining that plainly is one of the easiest and most honest campaigns a practice can run.",
    sections: [
      {
        h: "The entitlement is not well understood",
        p: [
          "People know vaguely that something exists. They do not know whether it applies to them, what it covers, or how to claim it, and that uncertainty is enough to stop them booking.",
          "A single clear page answering who qualifies, what is included and what happens at the appointment removes the barrier. It is also exactly the kind of practical question people type into Google.",
        ],
      },
      {
        h: "It reaches the patients who have been away longest",
        p: [
          "Someone who has not attended in five years is nervous about the cost and frequently nervous about the visit itself. The entitlement gives them a reason to come that does not require them to commit to anything expensive.",
          "Those patients are valuable well beyond the first appointment, because most of them have work that needs doing and will proceed once they trust the practice.",
        ],
      },
      {
        h: "Say what happens next, honestly",
        p: [
          "If the examination finds work that is not covered, say so upfront rather than letting the patient discover it in the chair. People do not object to paying; they object to being surprised.",
          "A practice that sets that expectation clearly gets fewer awkward conversations and better reviews.",
        ],
      },
      {
        h: "The medical card scheme is a separate question",
        p: [
          "Patients often confuse the two, and a practice that states plainly whether it takes medical card patients saves everyone time.",
          "It is one line on the website and it is missing from a surprising number of them.",
        ],
      },
      {
        h: "Why this works as a campaign",
        p: [
          "It is useful rather than promotional, it is checkable, it needs no discounting, and it brings in people who were not otherwise in the market.",
          "Very few Irish practices build anything around it, which means the ground is largely open.",
        ],
      },
    ],
    related: ["dentists", "opticians", "audiologists"],
  },
  {
    slug: "competing-with-dental-tourism",
    title: "How to compete when patients fly out for treatment",
    description:
      "Irish patients travel abroad and across the border for implants and cosmetic work. Price is not the argument that keeps them.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "An Irish patient quoted for implants or a full set of veneers will frequently look at what the same work costs in Northern Ireland, Hungary or Turkey, and the gap is large enough to be worth a flight. Practices that respond by discounting lose money and still lose the patient. The argument that works is a different one.",
    sections: [
      {
        h: "You will not win on price, so do not try",
        p: [
          "The cost difference is structural — different wages, different property costs, different regulation. Matching it is not possible and attempting it signals that your normal price was inflated.",
          "It also attracts the patients most likely to leave again for the next cheaper offer.",
        ],
      },
      {
        h: "Aftercare is the honest advantage",
        p: [
          "Extensive dental work needs review, and occasionally adjustment. That is normal rather than a sign something went wrong. A patient whose treatment was done two thousand kilometres away has no straightforward route back.",
          "Set out plainly what your aftercare involves — when they are seen, for how long, what is included. That is concrete, checkable, and genuinely valuable, and most patients have not thought about it.",
        ],
      },
      {
        h: "Explain the process rather than criticising the alternative",
        p: [
          "Running down overseas clinics reads as defensive and is the wrong tone for a regulated profession. It also insults patients who have already gone.",
          "Explaining how your own treatment runs — the assessment, the stages, the time between them, who does what — makes the comparison for the reader without you having to make it.",
        ],
      },
      {
        h: "Phasing keeps the patient in Ireland",
        p: [
          "A large part of why people travel is the single large bill. Treatment planned in stages over a longer period is a genuine alternative that very few practices present as an option.",
          "Offering it turns a patient who was about to book a flight into one who books a first appointment.",
        ],
      },
      {
        h: "Be findable at the research stage",
        p: [
          "This decision takes months and starts with reading. A practice with a proper page explaining implant treatment in plain language is in the conversation from the beginning.",
          "A practice whose website says only that it offers implants is not, and will meet the patient only after they have already decided where they are going.",
        ],
      },
    ],
    related: ["dentists", "skin-clinics", "med-spas"],
  },
  {
    slug: "what-a-dental-website-must-answer",
    title: "The six things a dental website has to answer",
    description:
      "Nervous patients, opening hours, entitlements and parking decide more Irish dental bookings than any amount of clinical copy.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "Most dental practice websites in Ireland are built around what the practice wants to say. The ones that fill appointment books are built around what a person standing in their kitchen with a sore tooth is actually trying to find out. It is a short list and almost none of it is clinical.",
    sections: [
      {
        h: "The six",
        p: [
          "If a stranger cannot answer all six within about twenty seconds, the site is costing you bookings.",
        ],
        list: [
          "Where exactly are you, and where do I park",
          "When are you open, including evenings and Saturdays",
          "Can I book without ringing during work hours",
          "Do you take medical card patients, and what about PRSI",
          "What happens if I am nervous",
          "What do I do if something breaks at the weekend",
        ],
      },
      {
        h: "Nervous patients are a larger group than practices assume",
        p: [
          "A significant proportion of adults avoid dentistry out of anxiety rather than cost, and they are looking for a signal that it will be handled gently.",
          "A short, plain page about how the practice deals with anxious patients — what you do differently, that they can stop at any point, that they can come in just to talk first — converts unusually well, because almost nobody addresses it and the people who need it are searching for exactly that.",
        ],
      },
      {
        h: "Photographs of the actual practice",
        p: [
          "Reception, the surgery, the team, the door from the street. People want to know what they are walking into, and stock imagery of a model in a dental chair tells them nothing.",
          "The exterior shot is the most under-used image in the sector: it is how somebody knows they have found the right door.",
        ],
      },
      {
        h: "Emergency policy, stated plainly",
        p: [
          "Whether you take emergencies, how quickly, and what to do outside hours. It is the highest-intent question anybody asks about a dental practice.",
          "Practices that leave it vague get those calls only from existing patients. Practices that state it clearly get them from everyone.",
        ],
      },
      {
        h: "It has to work on a phone, fast",
        p: [
          "Nearly all of this is read on a phone, frequently on poor signal and frequently in discomfort.",
          "A heavy, slow site loses the person who most urgently wanted to find you.",
        ],
      },
    ],
    related: ["dentists", "physiotherapy", "chiropractors"],
  },
  {
    slug: "google-ads-for-dentists-ireland",
    title: "Where a dental practice's Google Ads budget goes",
    description:
      "Jobs, courses, symptom searches and DIY whitening all cost Irish practices money on a default setup. What to block, and the terms worth paying for.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Dental clicks are among the most expensive in Irish healthcare and the keyword surface is unusually wide, because the same words are used by people looking for treatment, people looking for symptoms, people looking for a job and people looking for a course. On a default campaign you pay the same for all of them.",
    sections: [
      {
        h: "Symptom and self-diagnosis searches",
        p: [
          "'Toothache remedy', 'why does my tooth hurt', 'abscess symptoms', 'mouth ulcer'. Very high volume, very high click rate, and most of these people are trying not to visit a dentist.",
          "Some will convert. Not enough to justify the click price on a normal budget, and they crowd out people already looking for a practice.",
        ],
        list: [
          "remedy, home remedy, relief, painkiller, symptoms, causes, why does",
          "nhs, hse, free, emergency number, out of hours (unless you provide it)",
        ],
      },
      {
        h: "Jobs, courses and training",
        p: [
          "'Dental nurse jobs', 'dental hygienist course', 'dentistry points', 'dental nursing qualification'. Steady volume and no value whatsoever.",
          "The university and CAO-adjacent terms are the ones most often missed.",
        ],
        list: [
          "jobs, vacancy, hiring, nurse job, receptionist, salary, wage",
          "course, cao, points, degree, training, qualification, college, student",
        ],
      },
      {
        h: "DIY and retail",
        p: [
          "'Whitening strips', 'best electric toothbrush', 'teeth whitening kit', 'denture repair kit'. Somebody is buying a product, not booking treatment.",
          "Whitening in particular attracts a great deal of retail traffic that looks relevant and is not.",
        ],
        list: [
          "kit, strips, at home, diy, toothbrush, amazon, boots, chemist, pen",
        ],
      },
      {
        h: "The wrong treatment and the wrong place",
        p: [
          "If you do not do implants, orthodontics or sedation, block them — they are the dearest clicks in the category and a wasted one costs a lot.",
          "Set locations to presence rather than presence-or-interest, and keep them to the catchment patients will genuinely travel from. For routine work that is small; for cosmetic work it is much wider, which is another reason to run them separately.",
        ],
      },
      {
        h: "What is actually worth bidding on",
        p: [
          "Terms with a treatment and a place, or clear intent to register. 'Dentist [town]', 'emergency dentist [town]', 'dental implants [city]', 'new patients [town]', 'dentist accepting medical card [town]'.",
          "Then read the search terms report weekly for the first month. In this sector it is always more revealing than people expect, because of how much symptom traffic finds its way in.",
        ],
      },
    ],
    related: ["dentists", "opticians", "physiotherapy"],
  },
  {
    slug: "dental-reviews-and-the-trust-problem",
    title: "Reviews matter more in dentistry than anywhere else",
    description:
      "People are choosing someone to put their hands in their mouth. What to ask for, when, and why the reply matters more than the rating.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "Choosing a dentist is not like choosing a plumber. The patient is nervous, they cannot assess the clinical work, and they are making a decision about their own body. In that situation other people's experiences carry more weight than anything a practice says about itself, which makes reviews closer to essential here than in any other local trade.",
    sections: [
      {
        h: "Ask at the right moment",
        p: [
          "Not at reception while somebody is paying and wants to leave. The moment that works is just after a treatment has gone better than the patient feared — which in dentistry is most of the time.",
          "A nervous patient who has just had something done painlessly is genuinely grateful, and that is the review that helps the next nervous patient.",
        ],
      },
      {
        h: "Ask for the specific thing",
        p: [
          "'If you found it easier than you expected, it would really help if you said so' produces a review that speaks directly to the fear stopping the next person from booking.",
          "A generic five stars says nothing. A sentence about not feeling a thing is worth more than a dozen of them.",
        ],
      },
      {
        h: "The reply is read more than the review",
        p: [
          "Answer every one, briefly. On a negative review, never discuss the patient's treatment or even confirm they are a patient — that is a confidentiality issue as much as a marketing one.",
          "A calm reply offering to deal with it privately reassures far more effectively than a defence, and prospective patients judge the practice on the tone of it.",
        ],
      },
      {
        h: "Recency matters as much as volume",
        p: [
          "Ten reviews from the last six months read better than sixty that stop two years ago, to a patient and to Google both.",
          "A steady trickle is the goal, which means asking regularly rather than running an occasional push.",
        ],
      },
      {
        h: "Never incentivise them",
        p: [
          "It breaches Google's policy, it risks the profile, and in a regulated profession it invites a complaint.",
          "It is also unnecessary. Dentistry generates genuine relief and gratitude more reliably than almost any other service; the only thing missing is the asking.",
        ],
      },
    ],
    related: ["dentists", "physiotherapy", "med-spas"],
  },
  {
    slug: "the-practice-google-profile",
    title: "The dental profile settings that decide who calls",
    description:
      "For a practice, the Google Business Profile outranks the website for new patients. The fields that matter and the ones nobody fills in.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "When somebody searches for a dentist, the map results sit above everything else, with stars, distance and a call button. A very large share of new dental enquiries never get past that box. For a practice, the profile is not a supporting asset — it is the front door.",
    sections: [
      {
        h: "Categories and the treatments you list",
        p: [
          "The primary category should be the specific one, not a general health category. Add secondary categories for what you genuinely do — emergency dental service, cosmetic dentistry, orthodontics.",
          "Then list treatments individually in the services section with a description each. Most practices leave this empty, and it is the part that helps you appear for a specific treatment rather than only for the word dentist.",
        ],
      },
      {
        h: "Hours have to be exact",
        p: [
          "'Open now' filters what people see, so an inaccurate closing time costs you calls you never hear about. Set the bank holidays as well.",
          "If you take emergencies outside normal hours, say so in the description and in the attributes, because that is when the highest-intent calls happen.",
        ],
      },
      {
        h: "Photographs of the real place",
        p: [
          "The front of the building from the street, reception, a surgery, the team. Uploaded steadily rather than in one batch.",
          "The exterior shot does specific work for a nervous patient: it shows them exactly what they are walking into, which lowers the barrier more than any paragraph.",
        ],
      },
      {
        h: "Use the Q&A section yourself",
        p: [
          "You can ask and answer your own questions, and almost no practice does. Cover the things people ring to ask: medical card, PRSI, parking, emergencies, nervous patients, whether you are taking new patients.",
          "'Are you taking new patients' is the single most valuable one, because the answer decides whether somebody bothers calling.",
        ],
      },
      {
        h: "What you cannot change",
        p: [
          "Proximity. A patient two streets from a competitor will usually see that competitor first, and no amount of optimisation overrides it.",
          "Accept it and aim to be unmistakably the strongest option within your own catchment, which is a fight most practices are not seriously having.",
        ],
      },
    ],
    related: ["dentists", "opticians", "physiotherapy"],
  },
  {
    slug: "conveyancing-is-a-referral-business",
    title: "Conveyancing is won before the client ever searches",
    description:
      "Estate agents, brokers and builders decide most Irish conveyancing instructions. What makes a firm the one they recommend.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Most people buying a house in Ireland do not research solicitors. They ask the estate agent, or the mortgage broker, or whoever sold them the house, and they go with the name they are given. That makes conveyancing a referral business with a search component rather than the other way round, and firms that market it purely through advertising are working the smaller half.",
    sections: [
      {
        h: "Referrers recommend whoever makes their job easier",
        p: [
          "An agent's nightmare is a chain that stalls because a solicitor will not return a call. A broker's nightmare is a drawdown missed because paperwork sat on a desk.",
          "The firm that never causes either problem gets recommended repeatedly, and it has nothing to do with legal ability. It is responsiveness, and it is the one thing referrers will tell you about openly if you ask.",
        ],
      },
      {
        h: "Ask for the referrals directly",
        p: [
          "Firms assume this happens by osmosis. It does not. Agents and brokers have a short list and it is usually whoever last made an impression.",
          "A conversation with the agents and brokers in your town, saying plainly that you want conveyancing work and this is how you handle it, is a morning's work with a better return than any campaign. Almost nobody does it.",
        ],
      },
      {
        h: "Then be findable for the ones who are not referred",
        p: [
          "A meaningful minority do search: people who have moved to the area, people who did not like the recommendation, people buying without an agent involved, and increasingly people who simply want to check.",
          "For them the website is the whole decision, and what it needs to do is explain the process to somebody who has never done it.",
        ],
      },
      {
        h: "Write the process out in plain English",
        p: [
          "Contracts, searches, requisitions, closing. A first-time buyer knows none of those words and will not ask.",
          "A page that sets out the stages, roughly how long each takes and what the client has to supply is useful, ranks well because it matches what people type, and quietly filters out the clients who would otherwise need most handling.",
        ],
      },
      {
        h: "New-build purchases deserve their own page",
        p: [
          "Buying from a developer runs differently, with its own timelines, contract issues and buyer supports.",
          "Where there is a lot of new building, a firm with a page written specifically for it will out-rank one with a single generic conveyancing page every time.",
        ],
      },
    ],
    related: ["solicitors", "estate-agents", "mortgage-brokers"],
  },
  {
    slug: "probate-marketing-with-restraint",
    title: "Marketing probate work without sounding ghoulish",
    description:
      "Bereaved clients search at eleven at night for someone patient. The tone that wins this work is the opposite of most legal marketing.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Somebody who has just been appointed executor is dealing with paperwork at the worst point in their life, usually with siblings who do not entirely agree, and usually with no idea what any of it involves. They are searching for reassurance and a process, not for a firm that describes itself as dynamic. Probate is the practice area where tone does the most work and where most legal marketing gets it most wrong.",
    sections: [
      {
        h: "Answer the questions people actually type",
        p: [
          "How long does probate take. What does an executor have to do. What happens if there is no will. Do all the beneficiaries have to agree. What if the house has to be sold.",
          "These are searched constantly and answered badly, usually by pages written for other solicitors. A firm that answers them plainly reaches people at precisely the moment they decide to get help.",
        ],
      },
      {
        h: "Calm is the entire tone",
        p: [
          "No urgency, no superlatives, no stock photograph of a gavel. Short sentences, practical information, and an acknowledgement that this is a difficult time without dwelling on it.",
          "The client is judging whether you will be patient with them. Everything on the page either supports that impression or undermines it.",
        ],
      },
      {
        h: "Set out what happens, in order",
        p: [
          "The stages, roughly how long each one takes, what you need from the executor and when, and what will require decisions from the family.",
          "Uncertainty is the main source of stress here. A firm that removes it is doing something genuinely valuable, and it is the clearest possible demonstration that you handle this work regularly.",
        ],
      },
      {
        h: "Remember who is actually reading",
        p: [
          "Frequently a son or daughter living somewhere else, dealing with an estate at a distance, coordinating siblings by phone.",
          "Saying that you are used to working with executors who are not local, and that updates come without having to be chased, speaks directly to the thing they are worried about.",
        ],
      },
      {
        h: "Wills are the same audience, earlier",
        p: [
          "Nearly everyone who goes through probate resolves to sort their own affairs out. That is the moment to be present with something on making a will.",
          "It is also a far easier conversation to market than probate, and it comes from the same content rather than needing its own campaign.",
        ],
      },
    ],
    related: ["solicitors", "funeral-directors", "financial-advisors"],
  },
  {
    slug: "family-law-marketing-ireland",
    title: "Family law: most searched, least well marketed",
    description:
      "Separation and custody are searched constantly and handled clumsily online. What discretion, tone and practicality look like on the page.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Family law generates an enormous amount of search in Ireland and almost no good content. The people searching are frightened, frequently searching privately, and looking for someone who will be straightforward with them. Most firms address them with a paragraph of generic reassurance and a phone number, which is why the field is as open as it is.",
    sections: [
      {
        h: "Discretion is a feature worth stating",
        p: [
          "People search this on a phone, often in a house where they would rather not be seen doing it, and they worry about who will know they made contact.",
          "Saying explicitly that a first conversation is confidential and commits them to nothing removes a genuine barrier. It is a small line and it matters more than anything else on the page.",
        ],
      },
      {
        h: "Answer the practical questions plainly",
        p: [
          "What the steps actually are, how long things take, what happens about the house, what the position is on children, whether mediation comes first.",
          "People are not looking for legal analysis. They are trying to understand what is about to happen to their life, and a firm that explains it in order and in plain words is immediately the one they trust.",
        ],
      },
      {
        h: "Never use the marketing register",
        p: [
          "No urgency, no 'fight for you', no aggressive imagery. It attracts the worst instructions and repels the ones you want.",
          "Calm competence reads as strength here. The client is already in conflict; they are looking for someone steady, not someone angry on their behalf.",
        ],
      },
      {
        h: "Be careful with testimonials and any identifying detail",
        p: [
          "This is an area where confidentiality is not a preference, and case examples can identify people far more easily than firms assume.",
          "Speak in general terms about how matters are handled rather than about specific clients. It is the safer choice and it does not weaken the page.",
        ],
      },
      {
        h: "Availability is disproportionately persuasive",
        p: [
          "These enquiries arrive in the evening and at weekends, because that is when the situation comes to a head.",
          "A firm that says when it responds, and then does, converts far more of them than one that leaves people wondering until Tuesday.",
        ],
      },
    ],
    related: ["solicitors", "counselling-and-therapy", "financial-advisors"],
  },
  {
    slug: "why-clients-choose-a-solicitor",
    title: "What actually makes someone choose one firm over another",
    description:
      "Clients cannot judge legal ability, so they judge everything else. The signals Irish clients use, in the order they use them.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "A prospective client has no way of assessing whether one solicitor is better at the law than another. They are not qualified to, and the outcome will not be known for months. So they decide on the things they can assess, and firms that understand what those are win more instructions than firms that assume it is about expertise.",
    sections: [
      {
        h: "Whether anyone got back to them",
        p: [
          "This is first, and it is not close. Clients report choosing a firm because it was the one that replied, and leaving firms because it stopped replying.",
          "It is also the easiest thing in the profession to fix and the most consistently ignored. An enquiry that arrives on Friday evening and is answered Monday morning will frequently already have instructed somebody else.",
        ],
      },
      {
        h: "Whether they could understand the answer",
        p: [
          "A client who leaves a first call more confused than they arrived will keep looking. One who leaves understanding what happens next will usually stop.",
          "That same quality on the website — plain language, the process set out in order — does the same job before anybody speaks.",
        ],
      },
      {
        h: "Whether the firm looks like it does this specific thing",
        p: [
          "A page addressing their exact problem beats a list of practice areas, because it answers the only question they have: is this firm for me.",
          "This is why a full-service firm should still present each area separately and substantially. It changes nothing about the firm and everything about how it is found.",
        ],
      },
      {
        h: "What other people said",
        p: [
          "Reviews matter in law for the same reason they matter in dentistry: the client cannot judge the work, so they borrow somebody else's judgement.",
          "Reviews about responsiveness and clarity are worth far more than reviews about outcomes, and they are the ones clients can honestly give.",
        ],
      },
      {
        h: "How much it will cost, roughly",
        p: [
          "Not a fixed figure — most legal work cannot be quoted blind. But an explanation of how fees are structured, what drives them up or down, and when the client will be told, removes an anxiety that stops people ringing at all.",
          "Firms consistently overestimate how much clients expect certainty here and underestimate how much they want the mechanism explained.",
        ],
      },
    ],
    related: ["solicitors", "accountants", "financial-advisors"],
  },
  {
    slug: "the-unreturned-call-costs-the-instruction",
    title: "The unreturned call is the profession's reputation",
    description:
      "Ask anyone about solicitors and you hear the same complaint. Fixing it is free, and it wins more work than any campaign a firm can run.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "There is one criticism of solicitors that comes up more than every other criticism combined, and it is not about fees or competence. It is that nobody rings back. It is so widespread that it has become what people expect, which means a firm that simply does not do it stands out immediately.",
    sections: [
      {
        h: "The expectation is already low, so the bar is low",
        p: [
          "Clients arrive braced for poor communication. A firm that answers within a day and says what is happening exceeds expectations without doing anything remarkable.",
          "That is an unusually cheap advantage. Most competitive advantages require investment; this one requires a decision.",
        ],
      },
      {
        h: "Decide what happens to an enquiry, explicitly",
        p: [
          "Who sees it, how quickly, and what the holding response is if the relevant solicitor cannot reply immediately.",
          "An acknowledgement within the hour saying when somebody will come back is enough to hold almost anyone. Silence is what loses them, not the delay itself.",
        ],
      },
      {
        h: "Update clients before they chase",
        p: [
          "Most complaints are not about slow progress. They are about not knowing whether there has been progress.",
          "A short note at agreed points — even one saying nothing has moved and here is why — prevents the frustration that produces both the chasing calls and the bad reviews.",
        ],
      },
      {
        h: "It is where the referrals come from",
        p: [
          "Estate agents, brokers and accountants all recommend the firm that does not create problems for them. Responsiveness is the whole of that.",
          "The firms with the steadiest referral flow are almost never the most brilliant lawyers in town. They are the ones who answer.",
        ],
      },
      {
        h: "Measure it",
        p: [
          "Time from enquiry to first response, and the proportion answered the same day. Most firms have never looked.",
          "Once it is a number somebody sees each week, it improves without any further intervention, and the instruction rate moves with it.",
        ],
      },
    ],
    related: ["solicitors", "accountants", "estate-agents"],
  },
  {
    slug: "google-ads-for-solicitors-ireland",
    title: "Where a law firm's Google Ads budget disappears",
    description:
      "Legal clicks are the dearest in Ireland, and most of the traffic is students, job seekers and people wanting free advice. What to block.",
    date: "2026-09-30",
    minutes: 7,
    intro:
      "Legal search terms are among the most expensive in any Irish account, and the keyword surface is unusually polluted: the same words are used by people looking for a solicitor, people looking for free advice, people studying law and people looking for a job in it. A default campaign pays the same for all of them.",
    sections: [
      {
        h: "Free advice and self-help",
        p: [
          "'Free legal advice', 'can I sue', 'what are my rights', 'citizens information', 'flac'. Very high volume, very high click rate, and these people are explicitly trying not to pay a solicitor.",
          "Some proportion will eventually instruct somebody. Not enough to justify the click price, and they will consume a modest budget in days.",
        ],
        list: [
          "free, free advice, citizens information, flac, legal aid, diy, template",
          "can i, am i entitled, what are my rights, how do i, myself",
        ],
      },
      {
        h: "Study, jobs and the profession itself",
        p: [
          "'Law jobs', 'solicitor salary', 'FE1', 'Blackhall', 'law degree points', 'trainee solicitor'. Steady volume, zero value, and easy to miss because it looks professionally relevant.",
          "The training and exam terms are the ones most often left running.",
        ],
        list: [
          "jobs, vacancy, trainee, apprenticeship, salary, wage, career",
          "fe1, blackhall, law society exam, degree, points, cao, course, college",
        ],
      },
      {
        h: "Forms, templates and documents",
        p: [
          "People looking for a template will not instruct a firm. 'Will template', 'tenancy agreement template', 'section 20 form', 'affidavit example'.",
          "Worth blocking unless a document service is something you genuinely offer.",
        ],
        list: [
          "template, form, sample, example, pdf, download, wording",
        ],
      },
      {
        h: "The restricted category",
        p: [
          "Irish law limits how firms may advertise services relating to personal injuries. Whatever your view of that, it means those terms should be handled with advice rather than added to a campaign by default.",
          "The practical consequence is that a firm's paid search should be built on conveyancing, probate, wills, family, employment and commercial work — which is where the volume is anyway.",
        ],
      },
      {
        h: "What is worth paying for",
        p: [
          "A specific matter plus a place. 'Conveyancing solicitor [town]', 'probate solicitor [county]', 'employment solicitor [city]', 'family law solicitor [town]', 'make a will [town]'.",
          "Set locations to presence rather than presence-or-interest. Then read the search terms report weekly for the first month — in this sector it is always worse than people expect, because of how much free-advice traffic finds its way in.",
        ],
      },
    ],
    related: ["solicitors", "accountants", "insurance-brokers"],
  },
  {
    slug: "employment-law-work-is-under-marketed",
    title: "Employment law is the area nobody is competing for",
    description:
      "Workplace disputes are searched constantly by both sides, and almost no Irish firm markets to either. A quiet, unrestricted opportunity.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Employment matters generate steady search from two entirely separate audiences: employees who think something has gone wrong, and employers trying to avoid it going wrong. Both are looking for practical information, both are frequently anxious, and almost no Irish firm writes anything useful for either. It is one of the most open areas in legal marketing and it carries none of the advertising restrictions that complicate other work.",
    sections: [
      {
        h: "Two audiences, and you usually pick one",
        p: [
          "Acting for employees and acting for employers are different businesses with different economics, and a firm trying to look like both convinces neither.",
          "Employee work is higher volume, lower value per matter and emotionally charged. Employer work is lower volume, retainer-friendly and relationship-led. Decide, and write accordingly.",
        ],
      },
      {
        h: "Employers search before there is a problem",
        p: [
          "Contracts, handbooks, probation, disciplinary procedure, redundancy process, whether they can dismiss someone. This is preventative and it is where the retainer relationships start.",
          "Content that walks an owner through doing something correctly is the cheapest route into a long-term commercial client, and it is almost entirely uncontested.",
        ],
      },
      {
        h: "Employees search when it has already happened",
        p: [
          "Unfair dismissal, unpaid wages, discrimination, constructive dismissal, what the Workplace Relations Commission process involves and how long it takes.",
          "They want to know whether they have something and what happens next. Answering that plainly — including being honest about when somebody probably does not have a case — builds more trust than any amount of assertion.",
        ],
      },
      {
        h: "Explain the process, not just the law",
        p: [
          "Where a complaint is made, what the stages are, how long it takes, whether they have to attend, whether they need representation.",
          "Procedure is what people are actually searching for and what firms are least likely to write about, which is exactly why it ranks.",
        ],
      },
      {
        h: "Timing is a real constraint here",
        p: [
          "Employment claims run to strict time limits, and a firm that makes that plain is doing something genuinely useful rather than manufacturing urgency.",
          "It is also the one area where urgency in the copy is honest, because it reflects a real deadline rather than a marketing device.",
        ],
      },
    ],
    related: ["solicitors", "accountants", "health-and-safety-consultants"],
  },
  {
    slug: "wills-and-estate-planning-marketing",
    title: "Reaching people about a will before they need one",
    description:
      "Nobody searches for a will until something prompts them. The prompts are predictable, and almost no Irish firm markets around them.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "Making a will is the classic deferred decision. Everyone intends to, almost nobody does it spontaneously, and the ones who finally act have nearly always been prompted by something. Those prompts are predictable, which makes this one of the few legal services that can genuinely be marketed rather than merely waited for.",
    sections: [
      {
        h: "The prompts are the campaign",
        p: [
          "A death in the family, a new baby, buying a house, a diagnosis, a milestone birthday, emigrating, or going through somebody else's estate and resolving never to leave that behind.",
          "Content written for each of those moments reaches people at the point they are actually receptive, rather than shouting at everyone else.",
        ],
      },
      {
        h: "Probate work feeds it directly",
        p: [
          "Almost everybody who administers an estate resolves to sort their own affairs out. They have just seen exactly what happens when it is not done.",
          "A firm handling probate is sitting beside the most motivated will clients it will ever meet, and most never mention it. A gentle note once matters have concluded is appropriate and effective.",
        ],
      },
      {
        h: "Answer the questions that stop people",
        p: [
          "Whether they need a solicitor at all, what happens if there is no will, whether a will made abroad counts, what happens to a house in joint names, how to appoint a guardian.",
          "These get searched heavily and answered badly. Plain answers rank, and they demonstrate the patience somebody wants from the person handling this.",
        ],
      },
      {
        h: "Keep the tone light, not morbid",
        p: [
          "This is an administrative task with an emotional shadow. Treating it as ordinary and manageable — something that takes one appointment and then is done — removes most of the reluctance.",
          "Heavy imagery and talk of legacy makes people close the tab.",
        ],
      },
      {
        h: "It is the start of a longer relationship",
        p: [
          "A will client becomes a conveyancing client, a probate client and frequently an introduction to the rest of their family.",
          "That changes what the first instruction is worth, and it is the argument for treating a small piece of work as something to be sought rather than fitted in.",
        ],
      },
    ],
    related: ["solicitors", "financial-advisors", "funeral-directors"],
  },
  {
    slug: "sell-the-room-not-the-conversion",
    title: "Nobody wants a garage conversion",
    description:
      "They want a home office, a downstairs bedroom or a playroom. Marketing the trade instead of the outcome is why this niche is so quiet.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "A homeowner does not wake up wanting a garage converted. They wake up with a problem: there is nowhere to work, the children are sharing a room, a parent is moving in, or the house has simply stopped fitting. The conversion is the answer to that problem, and marketing that leads with the answer instead of the problem reaches people far too late.",
    sections: [
      {
        h: "The search terms are the giveaway",
        p: [
          "'Garage conversion' is searched by people who have already worked out what they want. 'Home office ideas', 'where to put a downstairs bedroom', 'running out of space' — those are searched by people who have not, and there are many more of them.",
          "Owning the second group means being in the conversation months before a competitor who only appears when somebody searches the trade name.",
        ],
      },
      {
        h: "Build a page per use",
        p: [
          "Home office, downstairs bedroom, playroom, gym, utility and boot room, granny flat, music or hobby room. Each is a different person with a different worry.",
          "The person wanting an office cares about noise, heating and a door that shuts. The person creating a downstairs bedroom is frequently thinking about an ageing parent and cares about access and a bathroom. Those are not the same page and should not pretend to be.",
        ],
        list: [
          "Home office — sound, heat, light, broadband, a door that closes",
          "Downstairs bedroom — access, proximity to a bathroom, privacy",
          "Playroom — durability, storage, being able to see the kids",
          "Gym — floor, ceiling height, ventilation, power",
          "Granny flat — independence, access, what is actually involved",
        ],
      },
      {
        h: "The photographs have to match the use",
        p: [
          "A gallery of generic finished rooms proves nothing. A finished home office, clearly in a converted garage, with the before shot beside it, answers the exact question in the reader's head.",
          "Caption them with the use, not just the address. It helps the reader and it helps the page appear for the search.",
        ],
      },
      {
        h: "It changes the ads as well",
        p: [
          "An advertisement showing a garage door is showing the problem. One showing a finished room somebody wants is showing the outcome, and outcome creative consistently outperforms in this trade.",
          "Before-and-after pairs do both at once, which is why they work so well here.",
        ],
      },
      {
        h: "Why the field is open",
        p: [
          "Almost every firm in this niche in Ireland markets the trade rather than the outcome, which leaves the higher-volume, earlier-stage searches unclaimed.",
          "It is the clearest ranking opportunity available in this category and it needs writing rather than budget.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "builders-and-extensions"],
  },
  {
    slug: "the-planning-question-everyone-asks",
    title: "Answer the planning question properly",
    description:
      "It is the first thing every homeowner searches and it is answered badly almost everywhere. Doing it honestly is the strongest content position in this trade.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Before anybody rings a builder about a garage conversion they search one thing: whether they need planning permission. It is the single most-searched aspect of this work in Ireland, and nearly every specialist website handles it with a vague sentence and a contact form. That is a wasted opportunity and it is also why so many of these projects stall before they start.",
    sections: [
      {
        h: "Explain what determines the answer",
        p: [
          "Not a yes or a no — it depends on the property, what is being created and what has already been done to the house. But the factors that decide it can be set out plainly, and almost nobody does.",
          "A reader who finishes that page understanding why it depends is far better disposed to you than one who finishes it being told to get in touch.",
        ],
      },
      {
        h: "Do not use it as bait",
        p: [
          "'Contact us to find out if you need planning' is transparently a lead-capture trick and readers recognise it. It also attracts people who then discover their project is not straightforward, which wastes everyone's time.",
          "Answer the general question, then offer to look at their specific case. The enquiries you get will be better qualified and considerably warmer.",
        ],
      },
      {
        h: "Cover the questions that come immediately after",
        p: [
          "Once planning is settled, people ask about ceiling height, floor levels, damp, insulation, where the boiler and the meters go, and what happens to the garage door opening.",
          "Each is searched, each is answered badly elsewhere, and each is an opportunity to demonstrate that you do this constantly rather than occasionally.",
        ],
      },
      {
        h: "Be straight about when it will not work",
        p: [
          "Some garages are not suitable, and saying so publicly costs you nothing and earns a great deal. It signals that your advice is not simply whatever produces a sale.",
          "It also saves the survey visits that were never going to become jobs, which in this trade is a meaningful amount of time.",
        ],
      },
      {
        h: "Keep it current",
        p: [
          "Anything to do with planning changes, and a page that has clearly not been looked at in four years undermines the expertise it is meant to demonstrate.",
          "Date it, review it, and say when it was last checked. That alone puts you ahead of most of the category.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "architects"],
  },
  {
    slug: "converting-versus-moving",
    title: "The comparison your customer is making alone",
    description:
      "Every garage conversion competes with trading up and with doing nothing. Making that comparison for them is the most persuasive thing on the page.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "A family that has outgrown its house has three options: move, extend, or use the space they already have. Almost every specialist markets as though the customer has already ruled out the first two, when in fact they are sitting at the kitchen table going round in circles about it. The firm that helps them think it through is the firm they ring.",
    sections: [
      {
        h: "Moving costs more than people remember",
        p: [
          "Stamp duty, legal fees, agent fees, surveys, moving costs, and the gap between what their house is worth and what the next one costs. Most people have only ever counted the last of those.",
          "Setting the full picture out plainly — without numbers you cannot stand over, just the list of what actually has to be paid — reframes the decision immediately.",
        ],
      },
      {
        h: "Be honest about when moving is right",
        p: [
          "Sometimes it is. A family that needs two more bedrooms is not solving it with a garage, and saying so makes everything else you say more credible.",
          "You will lose a small number of enquiries that were never going to close and gain the trust of everybody else reading.",
        ],
      },
      {
        h: "Extension versus conversion is the other half",
        p: [
          "Where there is garden to build into, the extension is a genuine competitor and frequently the better answer. Where there is not, the conversion is the only option and the customer may not have realised it.",
          "A page that explains which situations suit which is useful, ranks, and positions you as an adviser rather than a salesperson — particularly if you do both.",
        ],
      },
      {
        h: "Doing nothing is the real default",
        p: [
          "The most common outcome of these deliberations is another year of living with it. That is who you are actually competing with.",
          "What moves people off it is not urgency — it is the sense that the project is simpler and more manageable than they feared. Explaining how long it takes and how disruptive it actually is does more than any offer.",
        ],
      },
      {
        h: "Where the content belongs",
        p: [
          "This is early-stage thinking, so it belongs in guides and on Meta rather than in a search campaign aimed at people already looking for a builder.",
          "It also brings in people you will close in six months rather than six days, which is why the follow-up has to run longer than most firms in this trade bother with.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "builders-and-extensions"],
  },
  {
    slug: "before-and-after-is-the-whole-sale",
    title: "Before-and-after photographs are the entire pitch",
    description:
      "A homeowner cannot picture their garage as a room. One pair of images does more than a page of copy, and most firms never take the before shot.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "Garage conversion is the single most visual trade in Irish construction and the one where photography is handled worst. The customer is being asked to imagine something they have never seen: a cold, grey, cluttered space becoming a room they would sit in. Nothing except a photograph of exactly that transformation makes it real.",
    sections: [
      {
        h: "The before shot is the one that matters",
        p: [
          "Anyone can photograph a finished room. What persuades is the pair — the same view, cluttered and grey, then finished and warm.",
          "That means photographing on the first visit, before anything moves, from a position you can return to. It takes thirty seconds and almost nobody does it, which is why so many portfolios are a gallery of rooms that could be anywhere.",
        ],
      },
      {
        h: "Same angle, same height",
        p: [
          "Stand where you stood. Look at the before image on your phone before taking the after.",
          "A before from the doorway and an after from the corner do not compare, and the pair stops doing its job.",
        ],
      },
      {
        h: "Include the outside",
        p: [
          "What happened to the garage door opening is the thing neighbours notice and the thing customers quietly worry about. A photograph of the finished frontage answers it.",
          "It also shows the work does not leave the house looking like a garage with a window punched in it, which is the fear.",
        ],
      },
      {
        h: "Photograph the use, furnished",
        p: [
          "An empty finished room is a box. The same room with a desk, a bed or a sofa in it is the thing the customer wants.",
          "Go back when it is in use if the client will allow it. Those are the images that get saved and shared.",
        ],
      },
      {
        h: "Where they earn their keep",
        p: [
          "Meta advertising, where before-and-after pairs outperform everything else in this trade. The website, grouped by use rather than dumped in a gallery. And the Google Business Profile, steadily.",
          "Caption each with the use and the town. It helps the reader and it helps the page get found.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "photographers"],
  },
  {
    slug: "the-objections-nobody-addresses",
    title: "The three worries that stall a conversion",
    description:
      "Parking, resale value and whether it will feel like a garage. Irish specialists answer none of them, and they are why projects stall.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "Most garage conversion enquiries that go quiet do not go quiet over price. They go quiet because something unresolved is nagging at the customer and nobody has addressed it. There are three of them, they come up constantly, and almost no specialist website mentions any of them.",
    sections: [
      {
        h: "Where will the car go",
        p: [
          "Losing off-street parking is a real cost in a city and a real annoyance anywhere. A customer who has not resolved it in their head will not commit.",
          "Address it directly: what happens to the driveway, whether the door opening is bricked up or glazed, and what most people in that situation actually do. Naming the problem yourself is reassuring; leaving them to discover it is not.",
        ],
      },
      {
        h: "Will it hurt the resale value",
        p: [
          "People worry that a buyer will want the garage back. It is a reasonable concern and the honest answer depends on the area and the house.",
          "Being straightforward about that — including mentioning that some conversions are done so they can be reversed — earns more trust than an unqualified claim that it always adds value.",
        ],
      },
      {
        h: "Will it feel like a converted garage",
        p: [
          "This is the deepest worry and the least spoken. People have seen bad conversions: cold, slightly lower than the rest of the house, with a window where the door was, and obviously an afterthought.",
          "The answer is photographic rather than verbal. Show finished rooms that look like rooms. Then explain briefly what makes the difference — floor levels, insulation, how the opening is treated — so they understand it is a choice rather than luck.",
        ],
      },
      {
        h: "Put them on the page, in their own words",
        p: [
          "An FAQ that uses the customer's phrasing rather than the trade's will get found and will do the reassuring before anybody rings.",
          "It also shortens the survey visit considerably, because the conversation starts past the doubts instead of at them.",
        ],
      },
      {
        h: "Raise them on the visit too",
        p: [
          "A specialist who brings up parking before the customer does looks like someone who has done this a hundred times.",
          "Every objection you name first is one that stops being a reason to delay.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "windows-and-doors"],
  },
  {
    slug: "google-ads-for-garage-conversions",
    title: "Where garage conversion ad budget actually goes",
    description:
      "Car repairs, storage, doors and DIY all sit on the same keywords. What to block, and the use-led terms worth paying for instead.",
    date: "2026-09-30",
    minutes: 6,
    intro:
      "The word garage does an enormous amount of work in Irish search and almost none of it relates to conversions. Car repairs, MOT and NCT, storage units, garage doors, sheds and self-build queries all sit on the same terms, which makes this one of the easiest categories in which to spend a budget on nothing at all.",
    sections: [
      {
        h: "The motor trade is the biggest collision",
        p: [
          "'Garage near me' overwhelmingly means somebody whose car needs fixing. If you are bidding on broad or phrase matches containing 'garage', you are buying that traffic.",
          "This alone can consume a small budget in days and it is the first thing to block.",
        ],
        list: [
          "car, mechanic, service, nct, tyres, repair, motor, parts, exhaust",
          "bodyshop, clutch, brakes, battery, servicing near me",
        ],
      },
      {
        h: "Doors, storage and buildings",
        p: [
          "'Garage doors', 'garage storage', 'prefab garage', 'build a garage', 'garage shelving'. All commercial, none of them a conversion.",
          "'Build a garage' is the notable one — it looks adjacent and is the exact opposite of what you sell.",
        ],
        list: [
          "door, doors, roller, sectional, remote, opener",
          "storage, shelving, units, kit, prefab, build a, erect, concrete",
        ],
      },
      {
        h: "DIY and planning research",
        p: [
          "'Convert garage yourself', 'garage conversion diy', 'planning permission garage conversion' — the last one is arguable.",
          "People researching planning are early but genuinely in the market, and if you have a proper planning page they are worth having. If you do not, they will bounce and you should block them.",
        ],
        list: [
          "diy, yourself, how to, cost calculator, regulations pdf, drawings",
        ],
      },
      {
        h: "Bid on the use instead of the trade",
        p: [
          "The generic conversion terms are contested and expensive. The use-led ones are cheaper, more specific and closer to the actual problem.",
          "'Home office conversion [town]', 'downstairs bedroom [town]', 'convert garage to room [county]', 'granny flat conversion [town]'.",
        ],
      },
      {
        h: "Then read the search terms report",
        p: [
          "In this category it is always worse than expected, because of how much motor-trade traffic slips through even a careful setup.",
          "Weekly for the first month. It will pay for itself in the first fortnight.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "builders-and-extensions"],
  },
  {
    slug: "one-street-at-a-time",
    title: "Convert one house and quote the whole road",
    description:
      "Irish estates repeat the same house type for hundreds of homes. That makes this the most geographically concentrated trade there is.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "A garage conversion specialist working in an Irish housing estate is solving the same problem, in the same house, with the same garage, over and over. That is unusual and it is a considerable advantage — in quoting, in building, and above all in marketing, because the neighbours have exactly the same house and increasingly the same problem.",
    sections: [
      {
        h: "The second quote on a road takes minutes",
        p: [
          "Same footprint, same construction, same obstacles. You already know what is behind the wall and what the floor is doing.",
          "That is a margin advantage no bespoke job gives you, and it compounds the more you do on one estate.",
        ],
      },
      {
        h: "The neighbours are the campaign",
        p: [
          "A conversion is visible from the road for the duration of the work and permanently afterwards. Everyone on that street with the same house sees it.",
          "Be tidy, be there when you said, and make it easy for somebody to ask what you did. A card through the doors on the road while the scaffolding is up converts unusually well, because they have watched the whole thing.",
        ],
      },
      {
        h: "Target the estate, not the county",
        p: [
          "Advertising platforms will target an area the size of a housing estate. A message naming the estate and the house type converts at a rate county-level targeting never approaches.",
          "It is also far cheaper, because you are not paying to reach people in houses that do not have an attached garage.",
        ],
      },
      {
        h: "Photograph the house type, not just the room",
        p: [
          "Somebody scrolling past recognises their own frontage before they read a word. That recognition is what stops them.",
          "A portfolio organised by house type and estate is more useful to a customer than one organised by date, and almost nobody does it.",
        ],
      },
      {
        h: "Keep a record of what you have done where",
        p: [
          "Which estates, which house types, how long each took. It tells you where to advertise next and lets you quote the next one accurately.",
          "Most firms in this trade could not say which estate produced the most work last year, which means they cannot repeat it deliberately.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "insulation"],
  },
  {
    slug: "the-six-month-conversion-enquiry",
    title: "This enquiry converts in six months, not six days",
    description:
      "Garage conversions are decided slowly around a kitchen table. Most Irish specialists give up after two calls and lose what they paid for.",
    date: "2026-09-30",
    minutes: 5,
    intro:
      "Somebody enquiring about a garage conversion has usually been thinking about it for a year and will take several more months to commit. They are discussing it with a partner, looking at what it costs, and weighing it against moving. A specialist who treats that enquiry as hot, rings twice and writes it off has thrown away almost everything they paid to generate.",
    sections: [
      {
        h: "The enquiry is the start of a conversation",
        p: [
          "It is rarely a decision. It is somebody gathering information, frequently before they have fully agreed with their partner that they are doing it at all.",
          "Pushing produces a polite no. Treating it as the opening of a months-long conversation produces a job, often in the next quarter.",
        ],
      },
      {
        h: "Two calls is not a follow-up",
        p: [
          "Most specialists ring, ring again, and stop. The customer who was busy both times is gone, along with the cost of acquiring them.",
          "A sequence that runs over weeks — a call, a message, something useful to read, another call a fortnight later — recovers a real share of them. None of it is clever, which is exactly why so few do it.",
        ],
      },
      {
        h: "Give them something for the kitchen table",
        p: [
          "The person you spoke to has to convince somebody else. A short document with photographs of a similar house, the stages and the timeline is far more persuasive in that conversation than a remembered phone call.",
          "It also keeps your name in the discussion rather than the competitor who sent a price and nothing else.",
        ],
      },
      {
        h: "The seasonal pattern is real",
        p: [
          "Enquiries cluster when people are indoors and aware of the space: after Christmas, and again when the evenings close in.",
          "An enquiry that goes quiet in March is frequently a job in September. The list of unconverted enquiries from last winter is one of the most valuable things a specialist owns and it is usually sitting unused in an inbox.",
        ],
      },
      {
        h: "Keep track of them",
        p: [
          "Name, date, what stage, when to make contact again. A spreadsheet is enough.",
          "Without it, follow-up depends on remembering, and nobody remembers in October what they quoted in April.",
        ],
      },
    ],
    related: ["garage-conversions", "attic-conversions", "sunrooms-and-conservatories"],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

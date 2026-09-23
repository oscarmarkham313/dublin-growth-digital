/**
 * Industry landing pages — /industries/[slug].
 * Each entry renders a full page. Keep claims to the ones already used in
 * the live ads and the results page; name clients on the call, not here.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface Industry {
  slug: string;
  /** Short label used in navigation and lists */
  label: string;
  /** <title> — under 60 characters, brand appended by the template */
  title: string;
  /** meta description — under 160 characters */
  description: string;
  h1: string;
  intro: string[];
  /** "What we run" bullets */
  run: { name: string; text: string }[];
  /** The qualifying questions the lead form asks */
  qualify: string[];
  /** Two proof points, from the results page / live ads */
  proof: { value: string; label: string }[];
  /**
   * Optional long-form depth, rendered below the proof block.
   * Added for the original eight pages, which were ~888 words against
   * 900-1,500 for the later ones. Purely additive — these are the only
   * pages currently ranking, so nothing above is rewritten.
   */
  sections?: {
    heading: string;
    body: string[];
    list?: { title: string; body: string }[];
  }[];
  faqs: Faq[];
  related: string[];
}

export const industries: Industry[] = [
  {
    slug: "estate-agents",
    label: "Estate agents",
    title: "Estate Agent Marketing Ireland | Vendor Leads for Agencies",
    description:
      "Vendor lead generation for Irish estate agents. Meta and Google campaigns that reach homeowners before they choose an agent, reported in valuations booked. From €1,500 a month.",
    h1: "Vendor leads for Irish estate agents.",
    intro: [
      "The seller decides which agent to ring in the last week. The agency that wins the instruction is the one that spent the six months before it in the homeowner's feed. We do that work for estate agencies across Ireland: Meta and Google campaigns aimed at people preparing to sell, sent to a form that asks the qualifying questions first, and reported in valuations booked rather than impressions.",
      "Most agencies already have the hard part: the rating, the track record, the local name. What is missing is a system that puts it in front of the right homeowners at the right time. That is the whole gap, and it is fixable.",
    ],
    run: [
      {
        name: "Valuation lead campaigns",
        text: "Meta ads to homeowners in your patch, built around your rating and your recent sales, sending every click to a valuation request form.",
      },
      {
        name: "Probate, downsizer and landlord campaigns",
        text: "The instructions nobody advertises for. A separate campaign for each, landing on your own valuation page.",
      },
      {
        name: "Seller searches on Google",
        text: "Google Ads on the 'sell my house', 'house valuation' and 'estate agent' searches in your county, with your own name protected.",
      },
      {
        name: "Social media, fully run",
        text: "Your Instagram and Facebook posted, promoted and monitored, so the agency looks like the business it is when a seller checks.",
      },
      {
        name: "The weekly report",
        text: "Spend, enquiries, valuations booked and cost per valuation. One page, plain English, every Friday.",
      },
    ],
    qualify: [
      "Are you the owner of the property?",
      "When are you thinking of selling?",
      "Roughly what is the property worth?",
      "Best time for a valuation visit?",
    ],
    proof: [
      { value: "42", label: "vendor enquiries in one month for a Dublin agency, 12 went to market" },
      { value: "€2.1M", label: "in vendor instructions in one quarter for a Cork property agency" },
    ],
    faqs: [
      {
        q: "How quickly do vendor campaigns produce valuations?",
        a: "The first enquiries usually arrive within the first two weeks. Valuation appointments follow as the campaign learns which homeowners respond; most agencies see a steady weekly number by week six.",
      },
      {
        q: "Do we need a new website?",
        a: "Usually not. We land campaigns on your existing valuation form and fix the pages around it: the selling page, the probate page and the links between them.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month for Meta advertising fully managed, social media fully run, creative, tracking and the weekly report. €2,000 a month adds Google Ads. No setup fee, month to month, and ad spend is paid directly to the platforms.",
      },
      {
        q: "Do you work with agencies outside Dublin?",
        a: "Yes. We run vendor campaigns for agencies in every county, from one-office rural firms to city agencies with several branches.",
      },
      {
        q: "Will you name your estate agency clients?",
        a: "On the call, yes. We do not put client names in ads or on this page.",
      },
    ],
    sections: [
      {
        heading: "Why vendor leads cost what they cost",
        body: [
          "An instruction is worth thousands in fee, which means an agency can pay far more for a vendor lead than most businesses could justify — and most agencies still do not, because they price the lead against a portal listing rather than against the fee it produces.",
          "The useful number is not cost per lead. It is cost per instruction. If forty enquiries produce twelve valuations and four instructions, and the average fee is several thousand, the arithmetic is not close. We report that chain rather than the top of it.",
        ],
        list: [
          {
            title: "The enquiry",
            body: "Someone asks what their house is worth. Cheap to generate and worth very little on its own.",
          },
          {
            title: "The valuation",
            body: "Someone lets you through the door. This is the step that actually predicts revenue, and the one we optimise towards.",
          },
          {
            title: "The instruction",
            body: "They sign with you rather than the agency down the street. Decided by what happens at the valuation, not by the ad.",
          },
        ],
      },
      {
        heading: "The instructions nobody advertises for",
        body: [
          "Almost every agency campaign in Ireland targets the same person: an owner-occupier thinking of selling a family home. That market is contested and expensive.",
          "The quieter sources are not. Probate sales, where a family is dealing with a property they did not plan to own. Downsizers, who are usually further along than they let on. Landlords leaving the rental market, a steady source of stock for several years now. Each is a separate campaign with different language, and each is dramatically cheaper than the general seller audience because nobody else is bidding on it.",
        ],
      },
    ],
    related: ["solar-installers", "roofers", "builders-and-extensions"],
  },
  {
    slug: "solar-installers",
    label: "Solar installers",
    title: "Solar Lead Generation Ireland | Qualified Leads for Installers",
    description:
      "Lead generation for SEAI-registered solar installers in Ireland. Meta and Google campaigns with lead forms that qualify the roof, the budget and the timing before your phone rings.",
    h1: "Qualified solar leads, surveyed and booked.",
    intro: [
      "The homeowner has already decided to go solar. They are choosing who. We put your installs, your reviews and your price in front of them before they ring the first name on Google, then book the survey through a form that asks the qualifying questions first.",
      "We work with SEAI-registered installers of solar PV, batteries, EV chargers and heat pumps across Ireland. The campaigns are built around what homeowners actually ask: the grant, the payback, the roof, the timing. Your team only rings people who have answered.",
    ],
    run: [
      {
        name: "Meta lead campaigns",
        text: "Facebook and Instagram ads to homeowners in the counties you cover, with a lead form that qualifies the property and the budget.",
      },
      {
        name: "Google Ads on solar searches",
        text: "'Solar panels Cork', 'solar PV grant', 'EV charger installer': the searches with buyer intent, in your area only.",
      },
      {
        name: "Survey booking",
        text: "Every qualified lead is followed up and booked into a survey slot, so the enquiry does not go cold.",
      },
      {
        name: "Creative every month",
        text: "New ads each month from your own installs and reviews. No stock photos of Californian rooftops.",
      },
      {
        name: "The Friday report",
        text: "Spend, leads, cost per lead and surveys booked. One number that tells you whether it is working.",
      },
    ],
    qualify: [
      "Do you own the property?",
      "Is the house detached, semi-detached or terraced?",
      "When are you hoping to install?",
      "Have you applied for the SEAI grant?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "54", label: "residential EV charger enquiries in three weeks for a Cork installer" },
    ],
    faqs: [
      {
        q: "What does a solar lead cost in Ireland?",
        a: "It depends on the county and the season. Well-qualified Meta leads for installers typically land between €8 and €25 each; Google search leads cost more per lead but convert at a higher rate. We report both every week so you see the real number.",
      },
      {
        q: "Do you sell shared leads?",
        a: "No. Every lead comes from a campaign run in your name, lands with you only, and belongs to you.",
      },
      {
        q: "We cover several counties. Can the campaign do that?",
        a: "Yes. We build the targeting around your coverage area and report by county so you can see where the surveys are coming from.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month. Ad spend is paid directly to Meta and Google and stays in your control.",
      },
      {
        q: "How soon can we start?",
        a: "Campaigns are usually live within a week of the first call. Start with a free growth audit and we will tell you straight whether it fits.",
      },
    ],
    sections: [
      {
        heading: "Grant literacy is the whole filter",
        body: [
          "Solar enquiries fail on suitability far more often than on price. Roof orientation, shading, roof condition, BER, whether the house has the electrics for a battery — any one of these can end a job after you have already paid for the lead and sent someone out.",
          "So the qualification has to happen in the form, not on the roof. Asking about house type, roof direction and current bills before the enquiry reaches you will reduce your raw lead count and increase the proportion worth visiting. That is the trade every installer should want.",
        ],
      },
      {
        heading: "Why the SEAI cycle matters more than the season",
        body: [
          "Solar demand in Ireland tracks grant announcements and electricity price news more closely than it tracks sunshine. A change in grant levels or a price increase from a supplier moves enquiry volume within days.",
          "That means budget should be reactive rather than flat. We watch for those moments and lift spend into them, because the same euro buys a considerably better enquiry in the fortnight after an energy price story than it does in a quiet month.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "roofers", "estate-agents"],
  },
  {
    slug: "roofers",
    label: "Roofers",
    title: "Roofing Leads Ireland | Marketing for Roofing Contractors",
    description:
      "Roofing lead generation across Ireland. Google and Meta campaigns for repairs, re-roofs and gutters, with a lead form that tells a real job from a tyre-kicker before you drive out.",
    h1: "Roofing leads that are worth the drive out.",
    intro: [
      "For a roofer, the job is being the name a homeowner finds and trusts in the hour after they notice the leak, and being able to tell a real job from a tyre-kicker before you leave the yard. We run Google Ads on the emergency and repair searches in your area and Meta ads to the towns you cover, and every click goes to a form that asks about the roof, the job and the timing first.",
      "We work with roofing contractors across Ireland, from one-van outfits to firms with three crews. The campaigns are built around the jobs you actually want, not every enquiry that could possibly come in.",
    ],
    run: [
      {
        name: "Google Ads on roofing searches",
        text: "'Roofer near me', 'roof repair', 'flat roof', 'gutter repair': the searches that ring the phone, in your towns only.",
      },
      {
        name: "Meta ads to homeowners",
        text: "Your recent jobs, reviews and area in front of local homeowners before the storm season, with a form that qualifies the job.",
      },
      {
        name: "Google Business Profile",
        text: "The map box fixed and fed with reviews, so the phone follows your track record and not the competitor with more stars.",
      },
      {
        name: "A page that books the call",
        text: "A landing page built for a phone, with the number, the areas and the form above the fold.",
      },
      {
        name: "The Friday report",
        text: "Spend, enquiries, cost per enquiry and jobs booked. Plain English, one page.",
      },
    ],
    qualify: [
      "What needs doing: repair, new roof, flat roof or gutters?",
      "Is it a house, a commercial building or a farm building?",
      "How urgent is it?",
      "What town is the property in?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "#1", label: "Google ranking for emergency call-outs for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Google Ads or Meta for a roofer?",
        a: "Google first, because a leaking roof is searched for, not scrolled for. Meta earns its place for re-roofs, fascia and gutters, and storm-season awareness in the towns you cover. We usually run both and report them separately.",
      },
      {
        q: "How do you stop junk enquiries?",
        a: "The form asks the job, the building type and the urgency before your phone rings, and the campaigns are aimed at the areas and job types you tell us you want.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month, ad spend paid directly to the platforms.",
      },
      {
        q: "Do you work outside the cities?",
        a: "Most of our roofing clients are in towns, not cities. We build the campaign around your coverage area, whatever size it is.",
      },
      {
        q: "How fast can it start?",
        a: "Usually live within a week of the first call. Start with a free growth audit of your Google map results, reviews and website.",
      },
    ],
    sections: [
      {
        heading: "Storm weeks are the whole year in miniature",
        body: [
          "Roofing demand is not evenly spread and planning as though it is leaves money on the table. A named storm goes through and an entire county needs the same work in the same fortnight, from people who are not comparing three quotes because water is coming in.",
          "Those weeks have the highest intent and the lowest price sensitivity a roofer ever sees. The firms that capture them are the ones with a campaign already built and paused, ready to turn up within hours. Building a campaign during the spike means missing it.",
        ],
        list: [
          {
            title: "Before the weather",
            body: "The campaign exists, paused, with budget agreed. Turning it up takes minutes.",
          },
          {
            title: "During",
            body: "Budget lifted, emergency messaging live, phone answered. This is not the week to send people to a form.",
          },
          {
            title: "After",
            body: "Back to planned work — re-roofs, flat roofs, guttering — while the storm enquiries are quoted.",
          },
        ],
      },
      {
        heading: "Separating repairs from re-roofs",
        body: [
          "A slipped slate and a full re-roof arrive through the same enquiry form and differ in value by a factor of twenty. Run as one campaign, your cost per lead looks fine and your cost per re-roof is invisible.",
          "We split them. Repair campaigns run on urgency and speed of response. Re-roof campaigns run on photographs, guarantees and finance where you offer it, and they tolerate a much higher cost per enquiry because the job is worth it. Most roofers have never seen those two numbers separately, and they are usually surprised by which campaign is actually carrying the business.",
        ],
      },
    ],
    related: ["driveways-and-paving", "landscapers", "builders-and-extensions"],
  },
  {
    slug: "landscapers",
    label: "Landscapers",
    title: "Landscaping Leads Ireland | Marketing for Garden Companies",
    description:
      "Lead generation for landscapers and garden companies in Ireland. Meta and Google campaigns for the jobs you want, from patios and lawns to full garden design, qualified before you quote.",
    h1: "Garden jobs worth quoting for.",
    intro: [
      "Landscaping is bought with the eyes. A homeowner sees a finished garden on their phone in March and rings the company that did it. We put your best work in front of homeowners in the towns you cover, on Facebook and Instagram, at the time of year they are planning, and we send every enquiry through a form that asks about the job and the budget before you spend an evening on a site visit.",
      "We work with landscapers, garden designers, paving and lawn companies across Ireland. The campaigns are built around the jobs you want more of, not the ones you take to fill a gap.",
    ],
    run: [
      {
        name: "Meta ads from your own work",
        text: "Before-and-after creative from your jobs, aimed at homeowners in your area, with a lead form that qualifies the project.",
      },
      {
        name: "Google Ads on garden searches",
        text: "'Landscaper near me', 'garden design', 'patio installation' in your towns, switched on for the season.",
      },
      {
        name: "Instagram, run for you",
        text: "Your feed posted and promoted every week, because it is the first thing a homeowner checks before they ring.",
      },
      {
        name: "Google Business Profile",
        text: "Reviews gathered and photos kept current so the map box shows the standard of what you do.",
      },
      {
        name: "The Friday report",
        text: "Spend, enquiries, cost per enquiry and quotes booked, one page a week.",
      },
    ],
    qualify: [
      "What is the project: patio, lawn, planting, full design or maintenance?",
      "Rough size of the garden?",
      "What budget do you have in mind?",
      "When would you like the work done?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "When should a landscaper start advertising?",
        a: "February. Homeowners plan gardens before the weather turns, and the companies that show up then have the summer booked by May. Campaigns can run year-round at a lower budget for maintenance and winter projects.",
      },
      {
        q: "Do we need professional photos?",
        a: "No. Honest phone photos of your own jobs outperform stock imagery every time. We build the ads from what you already have and tell you what to capture next.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
      {
        q: "How do you keep out the small jobs?",
        a: "The form asks the project type and the budget before the enquiry reaches you, and the campaign targets the areas and job sizes you tell us you want.",
      },
      {
        q: "Do you cover rural areas?",
        a: "Yes. We build the targeting around your coverage radius, whether that is one town or three counties.",
      },
    ],
    sections: [
      {
        heading: "A short season and a long quote list",
        body: [
          "Most landscaping revenue lands between March and September, and the enquiries that produce it arrive earlier than most firms advertise. By the time the weather turns good, the people planning a garden have already been talking to somebody since February.",
          "The firms that do best advertise into late winter, fill the book before the season starts, and then switch messaging to lead times rather than availability once the diary tightens. Advertising availability in June when you are booked to August wastes the budget and irritates the caller.",
        ],
      },
      {
        heading: "Design work versus maintenance",
        body: [
          "Garden design and build is a large, one-off, photograph-led sale. Maintenance is small, repeating, and worth far more over three years than it looks in a single invoice.",
          "They need separate campaigns because the buyer is different — one is making a considered investment in the property, the other wants a recurring job taken off their hands. Most landscapers advertise only the first and then wonder why winter is quiet, when a maintenance book is precisely what carries a firm through it.",
        ],
      },
    ],
    related: ["driveways-and-paving", "roofers", "builders-and-extensions"],
  },
  {
    slug: "driveways-and-paving",
    label: "Driveways & paving",
    title: "Driveway & Paving Leads Ireland | Tarmac and Paving Marketing",
    description:
      "Lead generation for driveway, tarmac and paving contractors in Ireland. Meta and Google campaigns that reach homeowners planning a driveway and qualify the job before you quote.",
    h1: "Driveway and paving enquiries, qualified before you quote.",
    intro: [
      "A driveway is a big-ticket job that homeowners think about for months and decide on in a weekend. We put your finished driveways in front of homeowners in the towns you cover while they are still thinking, and we catch the ones already searching on Google. Every enquiry comes through a form that asks the size, the surface and the timing first.",
      "We work with tarmac, paving, gravel and resin contractors across Ireland, from single-crew firms to companies running several machines.",
    ],
    run: [
      {
        name: "Meta ads to homeowners",
        text: "Your own before-and-after driveways in front of homeowners in your area, with a form that qualifies the project.",
      },
      {
        name: "Google Ads on driveway searches",
        text: "'Tarmac driveway', 'driveway paving', 'resin driveway' in your county, with your own name protected.",
      },
      {
        name: "Google Business Profile",
        text: "The map box fixed, reviews gathered and photos kept current.",
      },
      {
        name: "A page built for a phone",
        text: "Number, areas covered and the quote form above the fold.",
      },
      {
        name: "The Friday report",
        text: "Spend, enquiries, cost per enquiry and quotes booked.",
      },
    ],
    qualify: [
      "What surface: tarmac, paving, gravel or resin?",
      "Roughly what size is the driveway?",
      "Is there an existing driveway to remove?",
      "When are you hoping to have it done?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Is Meta or Google better for driveways?",
        a: "Both work. Google catches the homeowner who has decided; Meta reaches the one who is still deciding and keeps you in front of them. We run them together and report them separately.",
      },
      {
        q: "How do you deal with price shoppers?",
        a: "The form asks the size, the surface and the timing, and the ads show your standard of work rather than a price. That filters most of them before your phone rings.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
      {
        q: "Do you cover the whole country?",
        a: "Yes. The campaign is built around your coverage area, whether that is one county or a province.",
      },
      {
        q: "How soon can we start?",
        a: "Usually within a week of the first call. Start with a free growth audit of your Google results, reviews and website.",
      },
    ],
    sections: [
      {
        heading: "The trade with the worst reputation problem",
        body: [
          "Driveways carry more consumer suspicion than any other trade in Ireland, because of a long history of doorstep callers and disappearing deposits. Every homeowner considering the work has heard a story, and many have had one at the door.",
          "That is a marketing problem you can solve rather than a cost you have to bear. A campaign that leads with a fixed written quote, a real business address, named reviews and photographs of finished work in the actual town converts far better than one leading on price. You are not competing on being cheapest; you are competing on being obviously legitimate.",
        ],
      },
      {
        heading: "New estates are the most targetable work in the country",
        body: [
          "A development finished two years ago is a few hundred households who all have the same unfinished front garden, the same builder-standard driveway, and the same neighbours watching what everyone else does.",
          "One job done well in an estate reliably produces more from the same estate, which is why the photographs and the town name matter more than any headline. We build campaigns around specific developments rather than counties, and the cost per enquiry is usually a fraction of a general campaign.",
        ],
      },
    ],
    related: ["landscapers", "roofers", "builders-and-extensions"],
  },
  {
    slug: "bathroom-renovations",
    label: "Bathroom renovations",
    title: "Bathroom Renovation Leads Ireland | Marketing for Fitters",
    description:
      "Lead generation for bathroom fitters and renovation companies in Ireland. Meta and Google campaigns that book surveys through a form that asks about the job and the budget first.",
    h1: "Bathroom quotes, booked while you are on the tools.",
    intro: [
      "Homeowners plan a bathroom at nine o'clock at night on Instagram. That is when we book the survey, through a form that asks about the job and the budget before your phone rings. We run Meta and Google campaigns for bathroom fitters, tilers and renovation companies across Ireland, built around the jobs you want and the areas you cover.",
      "The campaigns use your own finished bathrooms and your reviews. Homeowners buy the standard of the last job, and the ads should show it.",
    ],
    run: [
      {
        name: "Meta ads from your own work",
        text: "Finished bathrooms in front of homeowners in your area, with a lead form that qualifies the job and the budget.",
      },
      {
        name: "Google Ads on renovation searches",
        text: "'Bathroom fitters', 'bathroom renovation cost', 'wet room installation' in your county.",
      },
      {
        name: "Survey booking",
        text: "Qualified leads followed up and booked into your diary, so the enquiry does not go cold.",
      },
      {
        name: "Instagram, run for you",
        text: "Weekly posts from your jobs, because it is where the decision is made.",
      },
      {
        name: "The Friday report",
        text: "Spend, enquiries, cost per enquiry and surveys booked.",
      },
    ],
    qualify: [
      "Full renovation, wet room or partial refit?",
      "Roughly what budget do you have in mind?",
      "When would you like the work done?",
      "What town is the property in?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€12", label: "cost per lead for a Leinster service business on Meta" },
    ],
    faqs: [
      {
        q: "How many bathroom leads can a campaign produce?",
        a: "It depends on your area and budget. A typical county-level campaign produces between fifteen and forty qualified enquiries a month, of which a third to a half become surveys.",
      },
      {
        q: "Do we need a website?",
        a: "Not to start. Lead forms run inside Facebook and Instagram. A simple page helps once the campaign is proven, and we can build it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
      {
        q: "Will the leads be ours only?",
        a: "Yes. Every enquiry comes from a campaign in your name and lands with you alone.",
      },
      {
        q: "How soon can we start?",
        a: "Usually within a week. Start with a free growth audit of your Google results, reviews and social pages.",
      },
    ],
    sections: [
      {
        heading: "The quote visit is where the margin goes",
        body: [
          "A bathroom quote takes an hour on site plus travel plus the drawing-up afterwards. Do six of those for one job and the marketing cost of that job is far higher than the ad spend suggests.",
          "So the filtering has to happen before the visit. Budget band, whether it is a full rip-out or a refresh, whether plans exist, and when they want it done — asked in the form. It will reduce enquiry volume and raise the proportion that convert, which is the only version of this that makes money.",
        ],
      },
      {
        heading: "Wetrooms and accessibility are the under-served half",
        body: [
          "Accessible bathrooms and wetrooms for older homeowners are a growing, well-funded and almost entirely unadvertised part of this trade in Ireland. The buyer is often an adult child researching on a parent's behalf, which changes the language completely.",
          "It is also less price-driven than general renovation, because the decision is about staying in the house rather than improving it. A separate campaign aimed at that buyer usually produces a better cost per job than anything in the mainstream bathroom market.",
        ],
      },
    ],
    related: ["builders-and-extensions", "plumbers-and-heating", "solar-installers"],
  },
  {
    slug: "plumbers-and-heating",
    label: "Plumbers & heating",
    title: "Plumbing & Heating Leads Ireland | Marketing for Plumbers",
    description:
      "Lead generation for plumbing and heating businesses in Ireland. Google Ads on emergency and installation searches, Meta campaigns for heat pumps and boilers, qualified before you drive out.",
    h1: "Plumbing and heating calls that are worth answering.",
    intro: [
      "Plumbing is searched for, not scrolled for. A burst pipe at seven in the evening turns into a Google search and a phone call within minutes, and the business in the map box gets the job. We run Google Ads on the emergency and installation searches in your area, keep your Google Business Profile at the top of the map, and use Meta for the planned work: boilers, heat pumps, bathrooms.",
      "We work with plumbing and heating businesses across Ireland, and we report in booked jobs, not clicks.",
    ],
    run: [
      {
        name: "Google Ads on emergency searches",
        text: "'Emergency plumber', 'boiler repair', 'heating engineer near me', in your towns, with call tracking.",
      },
      {
        name: "Google Business Profile",
        text: "The map box fixed, reviews gathered every week, and the phone number that rings.",
      },
      {
        name: "Meta campaigns for planned work",
        text: "Heat pumps, boiler replacements and bathrooms, with a form that qualifies the job and the timing.",
      },
      {
        name: "A page built for a phone",
        text: "Number above the fold, areas covered, and a form for the non-urgent jobs.",
      },
      {
        name: "The Friday report",
        text: "Spend, calls, cost per call and jobs booked.",
      },
    ],
    qualify: [
      "Is this an emergency or a planned job?",
      "What needs doing?",
      "What town is the property in?",
      "Best number and time to call you back?",
    ],
    proof: [
      { value: "#1", label: "Google ranking for emergency call-outs for a Dublin plumbing company" },
      { value: "+290%", label: "qualified leads per month for the same business" },
    ],
    faqs: [
      {
        q: "Is Google Ads worth it for a plumber?",
        a: "For emergency and installation work, it is the best channel there is, because the intent is complete. The waste comes from broad keywords and no call tracking, both of which we remove.",
      },
      {
        q: "What about the map box?",
        a: "Google Business Profile drives most local plumbing calls. We treat it as a channel: categories, services, reviews, photos and posts, every week.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
      {
        q: "Can you handle heat pump campaigns?",
        a: "Yes. Heat pumps are planned purchases with a grant, which suits Meta lead forms and Google search together. We qualify the house type and the grant status first.",
      },
      {
        q: "How fast can it start?",
        a: "Usually within a week of the first call. Start with a free growth audit.",
      },
    ],
    sections: [
      {
        heading: "The two businesses inside every plumbing firm",
        body: [
          "Emergency work is won in about fifteen minutes by whoever answers the phone. Nobody compares quotes for a burst pipe. Planned work — a boiler swap, a bathroom, a heating upgrade — is decided over days on reviews, price and whether the quote arrived when it was promised.",
          "These want opposite things from a campaign. Emergency wants to appear at 9pm on a Sunday with a phone number and nothing else. Planned wants photographs, finance options and a form that qualifies. Run as one campaign they fight, and the emergency side usually eats the budget because it clicks more.",
        ],
      },
      {
        heading: "Boiler replacement is the job worth chasing",
        body: [
          "A callout pays for the day. A boiler replacement pays for the week, and it comes with an annual service relationship behind it for years afterwards.",
          "It is also the most predictable job in the trade: boilers fail in cold weather, and the enquiry curve follows the temperature almost exactly. Weighting budget towards the first genuine cold snap, and having a grant-aware landing page ready before it, is worth more than any amount of general plumbing advertising in June.",
        ],
      },
    ],
    related: ["solar-installers", "bathroom-renovations", "roofers"],
  },
  {
    slug: "builders-and-extensions",
    label: "Builders & extensions",
    title: "Builder Leads Ireland | Marketing for Extensions & Renovations",
    description:
      "Lead generation for builders, extension specialists and renovation contractors in Ireland. Meta and Google campaigns with a lead form that asks the budget and the timing before you visit.",
    h1: "Extension and renovation leads, budget known before you visit.",
    intro: [
      "Homeowners plan an extension at nine o'clock at night on their phone, months before they ring a builder. The job is to be the name they see then, and to know the budget and the timing before you spend an evening on a site visit. We run Meta and Google campaigns for builders, extension specialists and renovation contractors across Ireland, built around the projects you want.",
      "The ads use your own finished work. The form asks the questions you would ask on the phone. Your diary fills with site visits that are worth the trip.",
    ],
    run: [
      {
        name: "Meta ads from your projects",
        text: "Extensions, refurbishments and structural work in front of homeowners in your area, with a form that qualifies the budget.",
      },
      {
        name: "Google Ads on building searches",
        text: "'House extension cost', 'builders near me', 'attic conversion' in your county.",
      },
      {
        name: "Google Business Profile",
        text: "Reviews gathered from every completed project, photos kept current.",
      },
      {
        name: "A page that books the visit",
        text: "Your projects, your areas, and a form that asks the right questions.",
      },
      {
        name: "The Friday report",
        text: "Spend, enquiries, cost per enquiry and site visits booked.",
      },
    ],
    qualify: [
      "What is the project: extension, renovation, attic conversion or new build?",
      "Roughly what budget do you have in mind?",
      "Do you have plans or planning permission yet?",
      "When would you like to start?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "How do you filter out homeowners with no budget?",
        a: "The form asks for a budget range and whether plans exist before the enquiry reaches you. Enquiries below your minimum are marked so you can choose whether to ring them.",
      },
      {
        q: "Do you need to see our previous work?",
        a: "Yes, and phone photos are fine. The ads are built from your own projects because that is what wins the job.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
      {
        q: "We only want big projects. Can you do that?",
        a: "Yes. The campaign targets the project types and the budget bands you tell us you want, and we adjust every week from the report.",
      },
      {
        q: "How soon can it start?",
        a: "Usually within a week of the first call. Start with a free growth audit of your Google results, reviews and website.",
      },
    ],
    sections: [
      {
        heading: "Planning permission is the honest qualifier",
        body: [
          "The single most useful question in a builder's enquiry form is whether the homeowner has drawings or planning permission. Someone with permission granted is months ahead and close to spending. Someone who has not spoken to an architect is a conversation you will have three times over eighteen months.",
          "Both are worth having, but they are not the same lead and should not be treated as one. We tag them separately so your quoting time goes where it converts, and so the ones that are early get nurtured rather than dropped.",
        ],
      },
      {
        heading: "Why builders should advertise finished work, not services",
        body: [
          "Nobody chooses a builder from a list of services. They choose from photographs of a finished extension that looks like the one they have been imagining, ideally on a house that looks like theirs.",
          "That makes this an unusually visual trade for something so practical, and it makes the single highest-value thing you can give an agency a library of good photographs of completed work. Not the build in progress — the finished room, in good light, with the furniture in. It outperforms anything we could write.",
        ],
      },
    ],
    related: ["bathroom-renovations", "roofers", "estate-agents"],
  },
  {
    slug: "electricians",
    label: "Electricians",
    title: "Electrician Leads Ireland | Marketing for Electrical Contractors",
    description:
      "Lead generation for Irish electricians: rewires, fuse boards, EV chargers and emergency callouts. Campaigns reported in booked jobs, not clicks. From €1,500 a month.",
    h1: "Electrician leads, booked rather than counted.",
    intro: [
      "An electrician's diary has two halves and they need entirely different marketing. Emergency work — a dead socket ring, a tripping board, no power upstairs — is won on Google within about fifteen minutes of the search, by whoever answers. Planned work — a rewire, a board upgrade, an EV charger, a new build second fix — is decided over days and won on reviews, photographs and whether the quote arrived when it was promised.",
      "Most electricians advertise as though only one of those exists. We run them as two campaigns with different budgets, different hours and different phones, because a rewire enquiry at four on a Tuesday and a no-power call at nine at night are not the same customer.",
    ],
    run: [
      {
        name: "Emergency search campaigns",
        text: "Google Ads on fault, no-power and callout searches in your area, running only during the hours you will actually answer the phone.",
      },
      {
        name: "EV charger campaigns",
        text: "The fastest-growing planned job on most books. Separate campaign, separate landing page, grant questions answered before the enquiry reaches you.",
      },
      {
        name: "Rewire and board upgrade campaigns",
        text: "Aimed at older housing stock and at homeowners mid-renovation, with the certification questions handled up front.",
      },
      {
        name: "Your work, shown properly",
        text: "Consumer units, panel work and finished installs photographed and used as the creative. Electrical work sells on neatness and nothing else.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry, and which of the two campaigns produced them. One page, every week.",
      },
    ],
    qualify: [
      "Is this an emergency or planned work?",
      "Is the property residential or commercial?",
      "How old is the existing wiring or board?",
      "When do you need it done?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
    ],
    faqs: [
      {
        q: "Can you separate emergency calls from quote requests?",
        a: "Yes, and it is the single most useful thing we do for electricians. They run as separate campaigns with separate tracking numbers, so you can see what each is worth and fund them differently.",
      },
      {
        q: "We only want EV charger work. Is that possible?",
        a: "Yes. It is a well-defined search with its own vocabulary and its own grant questions, so it makes a clean standalone campaign.",
      },
      {
        q: "Do you advertise outside working hours?",
        a: "Only if you want emergency calls at those hours and will answer them. There is no point paying for a nine o'clock click that rings out.",
      },
      {
        q: "Do you need photographs of our work?",
        a: "Yes, and phone photos are fine. A tidy consumer unit does more selling than any headline we could write.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month.",
      },
    ],
    related: ["plumbers-and-heating", "solar-installers", "builders-and-extensions"],
  },
  {
    slug: "kitchens",
    label: "Kitchen fitters",
    title: "Kitchen Leads Ireland | Marketing for Kitchen Companies",
    description:
      "Lead generation for Irish kitchen showrooms and fitters. Campaigns built around design appointments and real budgets, reported in booked consultations. From €1,500 a month.",
    h1: "Kitchen enquiries from people who have actually budgeted.",
    intro: [
      "A kitchen is one of the largest discretionary purchases a household makes, and the decision takes months. Somebody starts looking in January, visits three showrooms in February and orders in April. The company that wins is rarely the cheapest; it is the one that stayed visible through that whole stretch and made booking a design appointment feel easy rather than committal.",
      "The problem with kitchen advertising is that it attracts dreamers in enormous numbers. Filtering matters more here than in any other trade, because a showroom consultation costs you real hours. Every campaign we run asks about budget and timeline before the enquiry ever reaches your designer.",
    ],
    run: [
      {
        name: "Design appointment campaigns",
        text: "Meta and Google campaigns whose only goal is a booked consultation, with the budget question asked in the form rather than awkwardly on the phone.",
      },
      {
        name: "Your installs as the creative",
        text: "Finished kitchens, photographed properly, are the entire sell. We build the campaigns from your own projects rather than stock imagery nobody believes.",
      },
      {
        name: "Retargeting across the decision",
        text: "Most of the value in kitchen marketing is staying in front of someone for the eight weeks between first look and order. That is a retargeting job and almost nobody does it.",
      },
      {
        name: "Finance and offer messaging",
        text: "Where you offer finance or a seasonal promotion, it runs as its own campaign rather than being buried in a general ad.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, appointments booked and cost per booked appointment — the only number that matters in this trade.",
      },
    ],
    qualify: [
      "What is your budget range for the kitchen?",
      "Is this a replacement or a new build?",
      "When are you hoping to have it fitted?",
      "Would you like a showroom or home visit?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "How do you stop us being buried in tyre-kickers?",
        a: "The form asks for a budget band and a timeline before the enquiry reaches you, and anything under your minimum is flagged. You decide whether to ring those, rather than finding out after an hour in the showroom.",
      },
      {
        q: "Kitchens take months to decide. Does advertising still work?",
        a: "It works precisely because of that. Most of the money is in retargeting the people who already looked, which is the part most kitchen companies never set up.",
      },
      {
        q: "Can you promote a seasonal offer?",
        a: "Yes, and offers are one of the few things that genuinely move a stalled kitchen decision. It runs as its own campaign so you can see exactly what it produced.",
      },
      {
        q: "Do you need our photography?",
        a: "Yes. Finished installs are the whole sell, and yours will outperform anything generic. Phone photos of completed jobs are enough to start.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. Month to month, no setup fee.",
      },
    ],
    related: ["bathroom-renovations", "builders-and-extensions", "flooring"],
  },
  {
    slug: "attic-conversions",
    label: "Attic conversions",
    title: "Attic Conversion Leads Ireland | Marketing for Conversion Firms",
    description:
      "Lead generation for Irish attic conversion specialists. Campaigns aimed at homeowners needing space, with planning and regulation questions handled. From €1,500 a month.",
    h1: "Attic conversion leads from homeowners who need the room.",
    intro: [
      "Attic conversions sell against a specific alarm: a family has outgrown the house and is weighing the cost of moving against the cost of staying. That comparison is the whole pitch. A conversion that costs a fraction of stamp duty, estate agent fees and a mortgage top-up is an easy argument to make, and almost nobody makes it in their advertising.",
      "The second thing that decides these jobs is certainty. Homeowners are anxious about planning permission, fire regulations, stairs and head height, and the firm that answers those plainly before the quote is usually the one that gets the job.",
    ],
    run: [
      {
        name: "Moving-versus-staying campaigns",
        text: "The argument that actually converts, aimed at families in three-bed semis in the areas you work, with the cost comparison made explicitly.",
      },
      {
        name: "Planning and regulation content",
        text: "The questions every homeowner asks — permission, fire doors, stairs, head height — answered on the page so the enquiry arrives already half-sold.",
      },
      {
        name: "Before-and-after creative",
        text: "Conversions photographed at both ends. Nothing sells this trade like the same roof space before and after.",
      },
      {
        name: "Area targeting by housing stock",
        text: "Campaigns pointed at the estates and house types that actually convert well, rather than at a county.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey, in plain English.",
      },
    ],
    qualify: [
      "What type of house is it?",
      "What will the room be used for?",
      "Do you know your rough budget?",
      "When are you hoping to start?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Do most of these jobs need planning permission?",
        a: "Usually not, and saying so clearly in the advertising removes the single biggest reason homeowners stall. We put your own position on it front and centre rather than leaving people to guess.",
      },
      {
        q: "Can you target particular house types?",
        a: "Yes. Campaigns are aimed at the estates and housing stock where conversions are straightforward, which is far more efficient than advertising to a whole county.",
      },
      {
        q: "How do we avoid quoting jobs that will never happen?",
        a: "The form asks about budget and timeline first, and flags anything below your minimum before it reaches you.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, and before-and-after pairs are the most valuable thing you can give us. Phone photos are fine.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. Month to month, no setup fee.",
      },
    ],
    related: ["builders-and-extensions", "garden-rooms", "bathroom-renovations"],
  },
  {
    slug: "garden-rooms",
    label: "Garden rooms",
    title: "Garden Room Leads Ireland | Marketing for Garden Room Builders",
    description:
      "Lead generation for Irish garden room and garden office builders. Campaigns built around home-office and extra-space demand, reported in booked site visits. From €1,500 a month.",
    h1: "Garden room leads, from people ready to spend.",
    intro: [
      "Garden rooms are sold on a photograph. More than almost any trade, the decision starts with somebody seeing a finished room that looks like the one they have been picturing, and then working backwards to whether they can afford it. That makes this an unusually good fit for paid social and an unusually bad fit for text-only advertising.",
      "The demand has also changed shape. It is no longer mostly home offices. It is teenage space, gym space, a room for a parent moving in, and a studio for a business run from home — and each of those wants to be spoken to differently.",
    ],
    run: [
      {
        name: "Photograph-led social campaigns",
        text: "Facebook and Instagram campaigns built from your finished rooms, because in this trade the image is the entire argument.",
      },
      {
        name: "Separate campaigns per use case",
        text: "Office, gym, teen room and annexe are four different buyers. Running them as one campaign wastes most of the budget.",
      },
      {
        name: "Search campaigns for the ready",
        text: "Google Ads on garden room, garden office and log cabin searches for people already costing it up.",
      },
      {
        name: "Spec, lead time and price framing",
        text: "The three things every enquiry asks. Answered in the campaign so your calls start further along.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, site visits booked and cost per visit.",
      },
    ],
    qualify: [
      "What will the room be used for?",
      "Roughly what size are you thinking?",
      "Do you have a budget in mind?",
      "When would you want it built?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Is social really better than Google for this?",
        a: "For garden rooms, usually yes. People do not always know they want one until they see it, and that is a scrolling behaviour rather than a searching one. We still run search for the people already costing it up.",
      },
      {
        q: "Should we advertise our prices?",
        a: "Generally yes. Garden rooms have a wide price range and hiding it produces enquiries from people who were never in the market. Stating a from-price filters hard and improves every call you take.",
      },
      {
        q: "Can you handle seasonality?",
        a: "Yes. Enquiries concentrate heavily in spring and early summer, so budget is weighted towards that and lead times are stated in the ads once the diary fills.",
      },
      {
        q: "Do you need our photographs?",
        a: "Yes, and they are the single biggest factor in whether this works. Finished rooms, in good light, from your own projects.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. Month to month.",
      },
    ],
    related: ["attic-conversions", "builders-and-extensions", "landscapers"],
  },
  {
    slug: "windows-and-doors",
    label: "Windows & doors",
    title: "Window & Door Leads Ireland | Marketing for Installers",
    description:
      "Lead generation for Irish window and door installers. Campaigns built around energy upgrades, grants and full-house replacements, reported in booked surveys. From €1,500 a month.",
    h1: "Window and door leads worth surveying.",
    intro: [
      "Windows are bought for two reasons and they behave completely differently. One is cold and draught — an older house, rising heating bills, condensation on the inside of the glass every winter morning. The other is appearance, usually alongside other work. The first is seasonal and urgent; the second is planned and price-sensitive.",
      "Both are worth real money, and both are wasted if the enquiry arrives without a window count or a house type. The surveying visit is the expensive part of this business, so the filtering has to happen before it.",
    ],
    run: [
      {
        name: "Energy and retrofit campaigns",
        text: "Aimed at older housing stock with the grant questions answered up front, weighted towards the months when people actually feel the cold.",
      },
      {
        name: "Full-replacement search campaigns",
        text: "Google Ads on window replacement, uPVC, aluclad and composite door searches in your area.",
      },
      {
        name: "Before-and-after creative",
        text: "Old timber frames against new units is one of the more persuasive before-and-afters in the trade.",
      },
      {
        name: "Survey-qualified forms",
        text: "Roughly how many windows, what type of house, and when — asked before the enquiry reaches you, so surveys are not wasted.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey.",
      },
    ],
    qualify: [
      "Roughly how many windows or doors?",
      "What type and age is the property?",
      "Is this for warmth, appearance or both?",
      "When are you hoping to have it done?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Can you target older houses specifically?",
        a: "Yes, and it matters more here than almost anywhere. Campaigns are pointed at the estates and housing periods where single glazing and early double glazing are still common.",
      },
      {
        q: "Should we mention grants?",
        a: "If you handle the paperwork, yes — it is frequently the deciding factor. If you do not, we say so plainly rather than implying it, because a misled enquiry wastes a survey.",
      },
      {
        q: "Is this seasonal?",
        a: "Strongly. Enquiries spike with the first cold weather and again in spring. Budget follows that rather than sitting flat across the year.",
      },
      {
        q: "How do we stop wasting surveys?",
        a: "The form asks for window count and house type before the enquiry reaches you, so you can see the size of the job before anyone gets in a van.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["solar-installers", "builders-and-extensions", "bathroom-renovations"],
  },
  {
    slug: "heat-pumps",
    label: "Heat pumps",
    title: "Heat Pump Leads Ireland | Marketing for Heat Pump Installers",
    description:
      "Lead generation for Irish heat pump installers. Campaigns built around SEAI grants, BER requirements and retrofit-ready homes, reported in booked assessments. From €1,500 a month.",
    h1: "Heat pump leads from homes that can actually take one.",
    intro: [
      "Heat pumps have the longest and most technical sales cycle of any home energy product in Ireland. A homeowner has to understand grants, BER ratings, insulation requirements and whether their radiators will even work at a lower flow temperature. Most enquiries fail not on price but on suitability, and every unsuitable enquiry costs you an assessment.",
      "That makes qualification the entire game. A campaign that produces forty enquiries from houses that need twenty thousand euro of fabric upgrades first is worse than one producing eight from homes that are ready.",
    ],
    run: [
      {
        name: "Grant-led campaigns",
        text: "SEAI grant amounts and eligibility handled in the advertising, because it is the first question every homeowner has and the one most installers bury.",
      },
      {
        name: "BER and suitability filtering",
        text: "Questions about house age, insulation and current heating asked in the form, so the unsuitable ones are visible before you book an assessment.",
      },
      {
        name: "Retrofit-ready targeting",
        text: "Campaigns weighted towards the housing stock and areas where homes are realistically ready, rather than advertising to everyone with a boiler.",
      },
      {
        name: "Search campaigns for the informed",
        text: "Google Ads on heat pump, air to water and grant searches, where the person already knows what they are asking for.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, assessments booked and cost per booked assessment.",
      },
    ],
    qualify: [
      "What age is the property?",
      "What is your current heating system?",
      "Do you know your BER rating?",
      "Have you had insulation work done?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "How do we avoid assessments on unsuitable houses?",
        a: "By asking about age, insulation and current heating in the form. It will reduce your raw enquiry count and increase the proportion worth visiting, which is the trade you want.",
      },
      {
        q: "Should we lead with the grant?",
        a: "Usually yes, because it is what people search for. But it has to be accurate — overstating a grant produces enquiries that collapse at the assessment and damages your name locally.",
      },
      {
        q: "Does this work alongside solar?",
        a: "Well. The two audiences overlap heavily and a household considering one is frequently open to the other, so we often run them as linked campaigns.",
      },
      {
        q: "How long is the sales cycle?",
        a: "Longer than any other trade we work with — often two to four months from enquiry to order. Retargeting matters more here than anywhere, and we plan for it from the start.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["solar-installers", "plumbers-and-heating", "windows-and-doors"],
  },
  {
    slug: "drainage",
    label: "Drainage",
    title: "Drainage Leads Ireland | Marketing for Drain & Septic Specialists",
    description:
      "Lead generation for Irish drainage contractors: blockages, CCTV surveys, septic tanks and emergency callouts. Reported in booked jobs. From €1,500 a month.",
    h1: "Drainage leads, at the moment the phone should ring.",
    intro: [
      "Drainage is the purest emergency trade in the country. Nobody researches a blocked drain. They search, they ring the first two numbers, and they book whoever answers and can come today. The entire competitive question is whether you appear at that moment and whether somebody picks up.",
      "The second half of the business is nothing like that. Septic tank servicing, CCTV surveys and drain repairs for house sales are planned, priced and compared. Run as one campaign they fight each other; run separately they both work.",
    ],
    run: [
      {
        name: "Emergency callout campaigns",
        text: "Google Ads on blocked drain and overflow searches, running at the hours you will answer, with the phone number as the primary action rather than a form.",
      },
      {
        name: "Septic tank and servicing campaigns",
        text: "The planned side of the business, aimed at rural housing stock and at the annual service cycle.",
      },
      {
        name: "Pre-sale survey campaigns",
        text: "CCTV surveys and drain reports for house sales — a steady, well-priced job most drainage firms never advertise for.",
      },
      {
        name: "Call tracking on everything",
        text: "In a trade where nearly every enquiry is a phone call, an account without call tracking is being optimised blind.",
      },
      {
        name: "The weekly report",
        text: "Calls, cost per call and which campaign produced them.",
      },
    ],
    qualify: [
      "Is this an emergency?",
      "Is the property on mains drainage or a septic tank?",
      "Is it residential or commercial?",
      "Where exactly is the problem?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Should we advertise at night?",
        a: "Only if you will answer. Out-of-hours clicks are cheaper and convert extremely well for drainage, but only if the phone is picked up. If it is not, we switch the hours off.",
      },
      {
        q: "Is the phone or a form better?",
        a: "The phone, overwhelmingly. Almost nobody fills in a form with water rising. Campaigns are built around call actions and tracked accordingly.",
      },
      {
        q: "Can you get us more septic tank work?",
        a: "Yes, and it is the more profitable half for most firms. It needs its own campaign aimed at rural areas and the service cycle rather than at emergencies.",
      },
      {
        q: "How fast does this start working?",
        a: "Emergency search campaigns produce calls within days of going live, because the demand already exists and you are simply appearing for it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["plumbers-and-heating", "damp-proofing", "roofers"],
  },
  {
    slug: "damp-proofing",
    label: "Damp proofing",
    title: "Damp Proofing Leads Ireland | Marketing for Damp Specialists",
    description:
      "Lead generation for Irish damp proofing and condensation specialists. Campaigns built around surveys for older housing stock and pre-purchase reports. From €1,500 a month.",
    h1: "Damp proofing leads that turn into surveys.",
    intro: [
      "Damp is sold on diagnosis, not on price. A homeowner with a stain spreading on a bedroom wall does not know whether they have rising damp, penetrating damp or condensation, and every one of those has a different fix and a different cost. The firm that wins is the one that explains the difference before asking for anything.",
      "It is also a trade with a trust problem, because plenty of homeowners have heard of people being sold a chemical course they did not need. Advertising that acknowledges that directly, and leads with a survey rather than a cure, converts far better than advertising that does not.",
    ],
    run: [
      {
        name: "Survey-first campaigns",
        text: "Aimed at the symptom people actually search — the stain, the smell, the black mould in the corner — and offering a diagnosis rather than a product.",
      },
      {
        name: "Condensation versus damp content",
        text: "The distinction every homeowner gets wrong, explained on the page. It builds trust and filters out the jobs that are really a ventilation issue.",
      },
      {
        name: "Pre-purchase report campaigns",
        text: "Damp reports for people buying an older house. Well-priced, quick, and almost nobody advertises for them.",
      },
      {
        name: "Older housing stock targeting",
        text: "Campaigns weighted to the periods and areas where rising and penetrating damp are genuinely common.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey.",
      },
    ],
    qualify: [
      "What are you seeing — staining, mould or smell?",
      "What age is the property?",
      "Which rooms are affected?",
      "Are you buying, selling or living there?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Should we offer free surveys?",
        a: "It depends on your travel. A free survey lifts enquiry volume sharply but fills the diary with condensation jobs. Many firms do better charging a small fee that is refunded against the work.",
      },
      {
        q: "How do we build trust in a trade with a poor reputation?",
        a: "By leading with diagnosis instead of a cure, and by saying plainly when the answer is ventilation rather than damp proofing. It costs you some jobs and wins you more.",
      },
      {
        q: "Is this seasonal?",
        a: "Yes. Enquiries rise sharply from October as heating goes on and condensation appears, and fall away in summer. Budget follows that.",
      },
      {
        q: "Can you target house-buyers?",
        a: "Yes, and pre-purchase damp reports are a steady, quick-turnaround job that most firms in this trade never advertise for at all.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["drainage", "roofers", "builders-and-extensions"],
  },
  {
    slug: "painters-and-decorators",
    label: "Painters & decorators",
    title: "Painting & Decorating Leads Ireland | Marketing for Decorators",
    description:
      "Lead generation for Irish painters and decorators: interior, exterior and commercial. Campaigns built around the season and reported in booked jobs. From €1,500 a month.",
    h1: "Painting and decorating leads, in the right season.",
    intro: [
      "Decorating is the most seasonal trade we work with, and the firms that do well are the ones that swap what they advertise rather than advertising the same thing all year. Exterior work sells from April to September and is effectively unsellable in December. Interior work is the opposite, with a hard peak in the six weeks before Christmas.",
      "The other thing that decides this trade is job size. A single room and a full house repaint arrive through the same enquiry form and are worth ten times different amounts, so the form has to ask before your time is spent quoting.",
    ],
    run: [
      {
        name: "Seasonal campaign switching",
        text: "Exterior through the summer, interior through the winter, with the budget moved rather than split. It sounds obvious and almost nobody does it.",
      },
      {
        name: "Pre-Christmas interior push",
        text: "The single densest six weeks in the decorating calendar, run as its own campaign with lead times stated once the diary tightens.",
      },
      {
        name: "Commercial and landlord campaigns",
        text: "Repeat work — offices, rentals between tenancies, common areas — which is steadier and less price-sensitive than domestic.",
      },
      {
        name: "Job-size qualification",
        text: "Room count and property type asked in the form, so you can see whether a quote is worth the visit.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry and job type, every week.",
      },
    ],
    qualify: [
      "Is this interior, exterior or both?",
      "How many rooms, or what size property?",
      "Is it occupied or empty?",
      "When would you want it done?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "What should we advertise in winter?",
        a: "Interior, and heavily. The run-up to Christmas is the densest enquiry period in the decorating year and exterior spend in that window is close to wasted.",
      },
      {
        q: "How do we stop quoting single rooms?",
        a: "The form asks for room count or property size first. If you want a minimum job value we set it as a filter rather than letting you find out on site.",
      },
      {
        q: "Is commercial work worth chasing?",
        a: "For most decorators, yes. It repeats, it is less price-sensitive, and it fills the months when domestic demand drops. It needs its own campaign and its own language.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, and finished interiors in good light work best. Phone photos are fine if the room is tidy and the light is decent.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["flooring", "tilers", "bathroom-renovations"],
  },
  {
    slug: "tilers",
    label: "Tilers",
    title: "Tiling Leads Ireland | Marketing for Tilers & Tiling Contractors",
    description:
      "Lead generation for Irish tilers: bathrooms, kitchens, floors and wetrooms. Campaigns that bring direct homeowner work rather than subcontract rates. From €1,500 a month.",
    h1: "Tiling leads direct from homeowners, not through a builder.",
    intro: [
      "Most tilers get their work through builders and bathroom firms, and take a subcontract rate for it. The work is steady and the margin is thin, and it disappears the moment the main contractor finds somebody cheaper. Direct homeowner work pays substantially better and belongs to you rather than to whoever passed it on.",
      "The reason most tilers never get it is that they have no visible presence of their own. A tiler with a page of finished bathrooms and a handful of reviews can take direct work in their area almost immediately, because very few are competing for those searches.",
    ],
    run: [
      {
        name: "Direct homeowner search campaigns",
        text: "Google Ads on tiler, bathroom tiling and floor tiling searches in your area — the enquiries that come to you rather than through a contractor.",
      },
      {
        name: "Finished-work social campaigns",
        text: "Tiling is a visual trade with a strong before-and-after. Your own completed bathrooms and floors are the campaign.",
      },
      {
        name: "Wetroom and large-format campaigns",
        text: "The higher-value, higher-skill jobs, advertised separately from general tiling so they are not priced against it.",
      },
      {
        name: "Job-size qualification",
        text: "Room, area and whether materials are supplied, asked before the enquiry reaches you.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry and job type.",
      },
    ],
    qualify: [
      "Which room is being tiled?",
      "Roughly what area, in square metres?",
      "Are you supplying the tiles?",
      "When do you need it done?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Is there enough direct homeowner demand?",
        a: "In most areas yes, and it is under-contested because so few tilers advertise at all. You are usually competing with two or three others rather than twenty.",
      },
      {
        q: "Should we quote per square metre in the ads?",
        a: "Usually yes. It filters hard, it sets expectations before the call, and it stops you being compared against someone quoting for a completely different standard of work.",
      },
      {
        q: "Can we still take contractor work?",
        a: "Of course. The point is not to replace it but to stop it being your only source, so a quiet month from one builder does not empty the diary.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes. Finished bathrooms and floors, well lit. This is a trade where the photograph does nearly all the selling.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["bathroom-renovations", "flooring", "painters-and-decorators"],
  },
  {
    slug: "flooring",
    label: "Flooring",
    title: "Flooring Leads Ireland | Marketing for Flooring Companies",
    description:
      "Lead generation for Irish flooring companies and fitters: timber, laminate, LVT and carpet. Campaigns reported in booked measures. From €1,500 a month.",
    h1: "Flooring leads measured in booked measures.",
    intro: [
      "Flooring is a supply-and-fit business, which means the enquiry is worthless until somebody knows how many square metres are involved. A hall, stairs and landing and a full ground floor arrive through the same form and are worth completely different amounts, and the measuring visit is where your margin quietly goes.",
      "It is also a trade where the buyer usually has a material in mind before they contact anyone. Someone searching for LVT is a different customer from someone searching for carpet, and lumping them into one campaign means speaking to neither properly.",
    ],
    run: [
      {
        name: "Campaigns split by material",
        text: "Timber, laminate, LVT and carpet run separately, because the buyer, the price point and the language differ for each.",
      },
      {
        name: "Measure-booking as the goal",
        text: "The campaign optimises for a booked measure rather than a form fill, because that is the step that actually leads to an order.",
      },
      {
        name: "Room and area qualification",
        text: "Which rooms and roughly what area, asked up front, so you can see the size of the job before anyone travels.",
      },
      {
        name: "New-build and estate targeting",
        text: "Recently completed developments are a concentrated source of flooring work in the first two years, and almost nobody targets them deliberately.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, measures booked and cost per measure.",
      },
    ],
    qualify: [
      "Which rooms need flooring?",
      "Roughly what area, in square metres?",
      "What type of flooring are you considering?",
      "When do you need it fitted?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "How do we stop wasting measuring visits?",
        a: "By asking for rooms and rough area in the form. It reduces raw enquiry numbers and raises the share worth visiting, which is the trade you want.",
      },
      {
        q: "Should we advertise prices per square metre?",
        a: "For most flooring companies yes. It is what customers compare on anyway, and stating it filters out people shopping at a different price point entirely.",
      },
      {
        q: "Are new estates worth targeting?",
        a: "Very much. A recently finished development is a few hundred households who all need flooring within the same eighteen months, and they can be targeted as a group.",
      },
      {
        q: "Do you handle carpet and hard flooring differently?",
        a: "Yes, as separate campaigns. The buyers, the price expectations and the search language have very little overlap.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["tilers", "kitchens", "painters-and-decorators"],
  },
  {
    slug: "fencing-and-gates",
    label: "Fencing & gates",
    title: "Fencing Leads Ireland | Marketing for Fencing & Gate Installers",
    description:
      "Lead generation for Irish fencing and gate installers: garden fencing, automated gates and post-storm repairs. Reported in booked jobs. From €1,500 a month.",
    h1: "Fencing and gate leads, including the week after a storm.",
    intro: [
      "Fencing has two demand patterns and one of them is worth planning for. The steady one is spring and early summer, when gardens get attention and new estates want boundaries finished. The other arrives without warning: a named storm goes through and an entire county needs fence panels replaced in the same fortnight.",
      "Firms that only advertise on the seasonal pattern miss the storm weeks entirely, which are the highest-intent, least price-sensitive enquiries this trade ever sees. A campaign that can be turned up within hours is worth a great deal here.",
    ],
    run: [
      {
        name: "Seasonal garden campaigns",
        text: "The spring and early summer run, aimed at the estates and housing types where boundary work is common.",
      },
      {
        name: "Storm-response campaigns",
        text: "Prepared in advance and switched on when weather hits, so you are visible during the days when demand spikes and nobody is comparing prices.",
      },
      {
        name: "Automated gate campaigns",
        text: "The high-value end of the trade, advertised separately from panel fencing so it is not priced against it.",
      },
      {
        name: "New-estate targeting",
        text: "Recently completed developments where every garden needs a boundary within the first two seasons.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry and job type.",
      },
    ],
    qualify: [
      "What type of fencing or gate do you need?",
      "Roughly how many metres, or how many panels?",
      "Is this a repair or a new installation?",
      "When do you need it done?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Can you really react to a storm that fast?",
        a: "Yes, if the campaign is built in advance and paused rather than created from scratch. Turning an existing campaign up takes minutes; building one during the spike means missing it.",
      },
      {
        q: "Is automated gate work worth advertising separately?",
        a: "Yes. It is several times the value of panel fencing and the buyer is completely different, so putting both in one campaign drags your cost per enquiry in the wrong direction.",
      },
      {
        q: "How seasonal is this trade?",
        a: "Very. Most domestic fencing demand lands between March and July. Budget is weighted heavily to that, with a reserve held for weather events.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, and finished runs with a tidy line are what sells. Phone photos are fine.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["landscapers", "driveways-and-paving", "garden-rooms"],
  },
  {
    slug: "med-spas",
    label: "Med spas",
    title: "Med Spa Marketing Ireland | Marketing for Medical Aesthetics",
    description:
      "Marketing for Irish med spas and medical aesthetics clinics, built around what you are legally allowed to advertise. Consultation-led campaigns reported in booked appointments. From €1,500 a month.",
    h1: "Med spa marketing that will not put your clinic in front of the regulator.",
    intro: [
      "Most marketing advice written for med spas is American, and following it in Ireland will get a clinic into trouble. In this country you cannot advertise a prescription-only medicine to the public. That means no ads naming botulinum toxin, no price-per-unit offers on it, and no campaigns built around the treatment most clinics would instinctively lead with. A great many Irish clinics are running ads right now that should not be live.",
      "This is not a reason to advertise less. It is a reason to advertise differently. The campaigns that work here sell the consultation, the practitioner and the clinic rather than a named drug — and because so few agencies understand the line, the clinics that get it right have a quieter, less contested market than they expect.",
    ],
    run: [
      {
        name: "Consultation-led campaigns",
        text: "The consultation is the product we advertise, because it is the one thing you can promote freely and it is the step that actually converts. Everything is built to fill the diary with assessments rather than to sell a named treatment.",
      },
      {
        name: "Compliant creative, checked before it runs",
        text: "Ads built around what is permitted: skin health, laser, peels, the practitioner's qualifications, the clinic itself. We will tell you when something you have asked for cannot run, and why.",
      },
      {
        name: "Non-prescription treatment campaigns",
        text: "Laser, skin resurfacing, peels, microneedling and hydrafacials can be advertised properly and carry real margin. For most Irish clinics this is the untapped half of the diary.",
      },
      {
        name: "Retention and rebooking",
        text: "Aesthetics is a repeat-cycle business and acquisition is the expensive part. Campaigns to your existing client list are the cheapest revenue in the clinic and almost nobody runs them.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per booked consultation. Not reach, not followers.",
      },
    ],
    qualify: [
      "Which treatment are you interested in?",
      "Have you had treatment before?",
      "Are you looking for a consultation first?",
      "Which clinic location suits you?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Can we advertise Botox?",
        a: "Not to the public in Ireland — it is a prescription-only medicine and advertising those to the general public is prohibited. Any agency offering to run Botox ads for you either does not know that or is prepared to risk your clinic to hit a target. We build campaigns around consultations and non-prescription treatments instead, which is both legal and, in our experience, a better filter for serious clients.",
      },
      {
        q: "Why do our before-and-after photos keep getting rejected?",
        a: "Meta restricts before-and-after imagery for cosmetic procedures, along with anything implying an unrealistic outcome or drawing attention to a perceived flaw. It is one of the most common reasons aesthetics accounts get restricted. We work with practitioner, clinic and treatment-process imagery instead, which clears review and does not put your ad account at risk.",
      },
      {
        q: "How do we compete with the big chains?",
        a: "Not on budget, and not on price — you will lose both. A single-site clinic wins on the practitioner, the reviews and the locality: being unmistakably the best option within twenty minutes, rather than the cheapest in the country. That is a much cheaper fight.",
      },
      {
        q: "Is social or search better for a clinic?",
        a: "Both, for different jobs. Search catches people who have already decided and are choosing a clinic. Social creates the demand in the first place, which for aesthetics is a large share of it. If the budget only stretches to one, we start with whichever your enquiries already show.",
      },
      {
        q: "Do you work with single-site clinics?",
        a: "Yes, and they are usually the better fit. A single clinic with a strong local reputation has advantages a chain cannot copy, and a budget that is small nationally goes a long way across one catchment.",
      },
    ],
    related: ["skin-clinics", "estate-agents", "insurance-brokers"],
  },
  {
    slug: "skin-clinics",
    label: "Skin clinics & salons",
    title: "Skin Clinic & Salon Marketing Ireland | Fill the Diary",
    description:
      "Marketing for Irish skin clinics, beauty salons and laser clinics. Campaigns built around rebooking, treatment courses and quiet weeks, reported in appointments. From €1,500 a month.",
    h1: "Skin clinic and salon marketing measured in a full diary.",
    intro: [
      "A salon or skin clinic does not really have a customer acquisition problem. It has a gap problem. Saturdays sell themselves; Tuesday afternoons and the second week of January do not, and an empty chair is revenue that cannot be recovered later. The marketing that actually changes the numbers is the marketing pointed at the gaps.",
      "The second thing that decides this business is rebooking. A client who comes once is worth a fraction of one who comes every six weeks, and the difference between the two is usually a system rather than a treatment. Most salons spend everything on attracting new clients and nothing on keeping the ones they have.",
    ],
    run: [
      {
        name: "Gap-filling campaigns",
        text: "Offers pointed at your genuinely quiet times rather than blanket discounting. Discounting a Saturday you would have filled anyway is the most expensive mistake in this trade.",
      },
      {
        name: "Treatment course campaigns",
        text: "Laser and skin courses are sold as a block, not a single session, and advertising them that way changes the value of every enquiry.",
      },
      {
        name: "Rebooking and client-list campaigns",
        text: "Campaigns to the people already on your booking system. The cheapest revenue available and the one almost nobody runs.",
      },
      {
        name: "Booking-system integration",
        text: "Enquiries sent straight into Phorest, Fresha or whatever you already run, so nothing depends on somebody remembering to ring back.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, appointments booked and cost per appointment, in plain English.",
      },
    ],
    qualify: [
      "Which treatment are you booking?",
      "Have you been to us before?",
      "Which days and times suit you?",
      "Are you interested in a course or a single session?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "Should we run discount offers?",
        a: "Sparingly, and never across the board. A blanket discount mostly subsidises appointments you would have taken at full price. Targeted at a genuinely quiet Tuesday, the same offer adds revenue instead of removing it.",
      },
      {
        q: "What is the difference between this and your med spa page?",
        a: "Regulation, mainly. A medical-led clinic offering prescription treatments has advertising restrictions that a beauty-led salon does not, which changes what the campaigns can say. If you offer both, we treat you as the medical one, because the stricter rules apply.",
      },
      {
        q: "Is Instagram enough on its own?",
        a: "For a while, and then it plateaus. Organic reach for salons has fallen a long way and a page with good content but no budget behind it reaches a shrinking slice of its own followers. The content is still necessary; it is just no longer sufficient.",
      },
      {
        q: "How do we get clients rebooking?",
        a: "Rebook them in the chair before they leave, and back it with a campaign to your existing list. It is unglamorous and it moves the numbers more than any acquisition campaign we could run.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. Month to month, no setup fee.",
      },
    ],
    related: ["med-spas", "estate-agents", "insurance-brokers"],
  },
  {
    slug: "insurance-brokers",
    label: "Insurance brokers",
    title: "Insurance Broker Marketing Ireland | Leads for Brokerages",
    description:
      "Marketing for Irish insurance brokers, built around commercial and specialist risk rather than price comparison. Central Bank aware, reported in quote requests. From €1,500 a month.",
    h1: "Insurance broker marketing that does not try to outbid the aggregators.",
    intro: [
      "An Irish broker cannot win on price-comparison searches and should stop trying. The aggregators and the direct insurers have budgets a brokerage cannot match on terms like car insurance quotes, and every euro spent there buys a click from somebody who was only ever going to sort by cheapest. It is the most common and most expensive mistake in broker advertising.",
      "The broker's advantage is everything the aggregators serve badly: commercial cover, farm, fleet, publican and restaurant, tradesman liability, high-value home, non-standard risk. Those are searches where a person needs advice, where the policy is complicated, and where being able to speak to somebody is worth more than saving forty euro. They are also far cheaper to appear for.",
    ],
    run: [
      {
        name: "Commercial and specialist risk campaigns",
        text: "Aimed at the cover types where advice actually matters and aggregators do not compete properly — the only place a brokerage has a structural advantage.",
      },
      {
        name: "Renewal-timed campaigns",
        text: "Insurance is bought in a window. Campaigns built around renewal timing reach people while they are actually switchable rather than shouting at them all year.",
      },
      {
        name: "Compliance-aware creative",
        text: "You are regulated by the Central Bank and your advertising carries obligations most agencies have never read. Ads are written to be accurate, to avoid implied guarantees, and to carry your regulatory wording.",
      },
      {
        name: "Jobs traffic filtered out",
        text: "Insurance marketing searches in Ireland return job listings in volume. Without negatives for jobs, salaries, careers and recruitment, a meaningful share of your budget goes on people looking for work.",
      },
      {
        name: "The weekly report",
        text: "Quote requests, cost per quote request and cover type. One page, every week.",
      },
    ],
    qualify: [
      "What type of cover do you need?",
      "Is this personal or commercial?",
      "When is your renewal date?",
      "Are you currently insured elsewhere?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Can we compete with the comparison sites?",
        a: "Not on price-led searches, and we will not take your money to try. On commercial, farm, fleet, licensed-trade and non-standard risk the aggregators are weak or absent, the searcher genuinely needs advice, and the clicks cost a fraction of the motor terms.",
      },
      {
        q: "Does advertising create a compliance problem?",
        a: "It creates obligations rather than a problem. As a Central Bank regulated firm your advertising has to be accurate, must not imply guarantees you cannot give, and needs your regulatory wording where required. We write to that and send everything for your approval before it runs. Your compliance sign-off is final, not ours.",
      },
      {
        q: "Why do we get enquiries from people looking for jobs?",
        a: "Because insurance marketing searches in Ireland are heavily contaminated with job listings — Indeed, LinkedIn and IrishJobs occupy much of that results page. It is fixable with negative keywords and most accounts simply have not done it.",
      },
      {
        q: "Is our renewal timing really that important?",
        a: "It is most of the game. A campaign running evenly all year reaches the majority of people at a moment they cannot act on. Weighting spend towards renewal windows and running retargeting through them changes cost per quote substantially.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top. No setup fee, month to month, and ad spend is paid directly to the platforms from your own account.",
      },
    ],
    related: ["estate-agents", "med-spas", "skin-clinics"],
  },
  {
    slug: "insulation",
    label: "Insulation",
    title: "Insulation Leads Ireland | Marketing for Insulation Contractors",
    description:
      "Lead generation for Irish insulation contractors: attic, cavity wall, external wall and SEAI grant work. Reported in booked surveys. From €1,500 a month.",
    h1: "Insulation leads from homes that qualify for the grant.",
    intro: [
      "Insulation in Ireland is a grant business before it is a building business. Most homeowners start from the SEAI grant rather than from the insulation, and the firms that win the work are the ones that answer the grant question first and the technical question second.",
      "The catch is that grant eligibility depends on the house — its age, its construction, its BER, whether previous work has been done. An enquiry from a house that does not qualify costs you a survey and produces nothing, so the filtering has to happen in the form.",
    ],
    run: [
      {
        name: "Grant-led campaigns",
        text: "SEAI eligibility and amounts handled in the advertising, because that is what people search and what most contractors bury three pages deep.",
      },
      {
        name: "Eligibility filtering",
        text: "House age, construction type and previous work asked before the enquiry reaches you, so surveys go to homes that can actually proceed.",
      },
      {
        name: "Attic, cavity and external split",
        text: "Three different jobs at three different price points. Run as one campaign the cheapest swamps the others.",
      },
      {
        name: "Cold-weather budget weighting",
        text: "Enquiries rise sharply with the first genuine cold spell. Budget follows the temperature rather than sitting flat.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey.",
      },
    ],
    qualify: [
      "What age is the property?",
      "What type of insulation are you after?",
      "Do you know your BER rating?",
      "Has any insulation work been done before?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Should we lead with the grant amount?",
        a: "Yes, because it is what people search for — but only if it is accurate for the work you actually do. Overstating a grant produces enquiries that collapse at survey and damages your name locally.",
      },
      {
        q: "How do we stop surveying houses that do not qualify?",
        a: "By asking about age, construction and previous work in the form. It reduces raw enquiry count and raises the share worth visiting, which is the trade you want.",
      },
      {
        q: "Is this seasonal?",
        a: "Strongly. Demand tracks the weather and the heating bill almost exactly, with a hard rise from October. We weight budget to that rather than spreading it evenly.",
      },
      {
        q: "Does this work alongside heat pumps and solar?",
        a: "Well. The audiences overlap heavily and insulation is frequently a prerequisite for the others, so they often run as linked campaigns.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "The grant is the product, whether you like it or not",
        body: [
          "Homeowners do not go looking for insulation. They go looking for a warmer house and a smaller bill, discover there is a grant, and only then start ringing contractors. By the time you speak to them they have usually read three SEAI pages and half understood them.",
          "That means your first job is clarification rather than persuasion. Contractors who explain plainly which grant applies to which work, what the homeowner pays up front and what comes back, close a far higher proportion of surveys than those who lead with U-values.",
        ],
      },
      {
        heading: "Why one-stop-shop changed the competitive picture",
        body: [
          "The registered one-stop-shop route reshaped this market. A homeowner doing a deeper retrofit can have the whole thing project-managed, which is attractive and takes work away from single-measure contractors who used to get it.",
          "If you are not on that route, the answer is not to compete with it on scope. It is to be unmistakably the fastest and simplest option for the single measure someone actually wants today — attic insulation next month rather than a full retrofit next year.",
        ],
      },
    ],
    related: ["heat-pumps", "solar-installers", "windows-and-doors"],
  },
  {
    slug: "plastering",
    label: "Plastering",
    title: "Plastering Leads Ireland | Marketing for Plasterers",
    description:
      "Lead generation for Irish plasterers and skimming contractors: direct homeowner work rather than subcontract rates. Reported in booked jobs. From €1,500 a month.",
    h1: "Plastering leads direct from homeowners, not through a builder.",
    intro: [
      "Most plasterers work through builders and take a subcontract rate for it. The work is steady, the margin is thin, and it vanishes the moment the main contractor finds someone cheaper or the site finishes.",
      "Direct homeowner work pays materially better and belongs to you. The reason most plasterers never get it is that they have no visible presence of their own — and because almost nobody in the trade advertises, the ones who do compete against two or three others rather than twenty.",
    ],
    run: [
      {
        name: "Direct homeowner campaigns",
        text: "Google Ads on plasterer, skimming and re-skim searches in your area — the enquiries that come to you rather than through a contractor.",
      },
      {
        name: "Finished-work creative",
        text: "Plastering photographs badly in progress and beautifully when finished. The campaign is built from your own completed rooms.",
      },
      {
        name: "External rendering as its own campaign",
        text: "Higher value, different buyer, different season. Advertised separately so it is not priced against interior skimming.",
      },
      {
        name: "Job-size qualification",
        text: "Room count or square metres asked before the enquiry reaches you, so you can price before you travel.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry and job type.",
      },
    ],
    qualify: [
      "Is this interior skimming or external rendering?",
      "How many rooms, or roughly what area?",
      "Is it new work or a repair?",
      "When do you need it done?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Is there enough direct demand?",
        a: "In most areas yes, and it is under-contested because so few plasterers advertise at all. You are usually up against two or three others rather than a crowded market.",
      },
      {
        q: "Should we quote a rate in the ads?",
        a: "Usually yes, per room or per square metre. It filters hard and stops you being compared against someone quoting for a completely different standard of finish.",
      },
      {
        q: "Can we keep the contractor work too?",
        a: "Of course. The point is not to replace it but to stop it being your only source, so a quiet month from one builder does not empty the diary.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes — finished rooms in good light. This is a trade where the photograph does most of the selling.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "Why plasterers are invisible online",
        body: [
          "Search for a plasterer in most Irish towns and you will find directory listings, a few Facebook pages and almost no proper websites. The trade has essentially opted out of being findable, which is why the few who do turn up take a disproportionate share of the direct work.",
          "It also means the bar is low. A single page with real photographs, a phone number and a handful of reviews will frequently outrank established firms who have never thought about it.",
        ],
      },
      {
        heading: "Re-skims are the volume, renders are the margin",
        body: [
          "Interior re-skimming is steady, competitive and priced by the room. External rendering and insulated render systems are worth several times as much per job, are far less contested, and increasingly come with grant funding attached.",
          "Most plasterers advertise the first and mention the second at the bottom of a list. Splitting them into separate campaigns usually reveals that the render work is carrying the business and deserves most of the budget.",
        ],
      },
    ],
    related: ["painters-and-decorators", "builders-and-extensions", "tilers"],
  },
  {
    slug: "stoves-and-fireplaces",
    label: "Stoves & fireplaces",
    title: "Stove & Fireplace Leads Ireland | Marketing for Installers",
    description:
      "Lead generation for Irish stove and fireplace showrooms and installers. Campaigns timed to the heating season and reported in booked surveys. From €1,500 a month.",
    h1: "Stove and fireplace leads, timed to the season that sells them.",
    intro: [
      "Stoves sell on a curve so predictable you can plan a year around it. Enquiries rise with the first genuine cold week, peak through October and November, and fall off a cliff in spring. A firm advertising evenly across the year spends half its budget in months when almost nobody is buying.",
      "The other thing that decides this trade is the survey. Flue type, chimney condition, room size and regulations all have to be checked, and a firm that answers those questions in the advertising gets enquiries that are already halfway to a sale.",
    ],
    run: [
      {
        name: "Season-weighted campaigns",
        text: "Budget concentrated into the weeks when people actually buy, rather than spread flat across a year.",
      },
      {
        name: "Showroom visit campaigns",
        text: "For most installers the showroom visit is the real conversion event, and the campaign should optimise for it rather than for a form fill.",
      },
      {
        name: "Regulation and flue content",
        text: "Chimney condition, liners and clearances explained up front so enquiries arrive informed and surveys are not wasted.",
      },
      {
        name: "Installed-work creative",
        text: "Finished installations in real rooms. Stoves are bought on how the finished corner looks, not on output ratings.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys or showroom visits booked, and cost per booked visit.",
      },
    ],
    qualify: [
      "Do you have an existing chimney or flue?",
      "What size is the room?",
      "Are you after a stove, an insert or an open fire?",
      "When are you hoping to have it installed?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "How seasonal is it really?",
        a: "Severely. A large share of the year's enquiries arrive between late September and December. We hold budget back for that rather than spending it in June.",
      },
      {
        q: "Should we advertise in summer at all?",
        a: "At a low level, for the people planning ahead and for installation slots — lead times are a genuine selling point in a trade where everyone leaves it until it is cold.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, and installed shots in furnished rooms work far better than product images. The buyer is imagining their own sitting room.",
      },
      {
        q: "How do we avoid pointless surveys?",
        a: "Ask about the existing chimney or flue and the room in the form. It is the single biggest predictor of whether a job is straightforward.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "Regulations are a selling point, not a chore",
        body: [
          "Flue liners, hearth requirements, air supply, clearances to combustibles — most homeowners know none of it and are quietly worried about getting it wrong. Firms treat this as paperwork and hide it.",
          "Put it in the advertising instead. A page that explains plainly what a compliant installation requires positions you as the safe choice, and filters out the people who were going to buy a stove online and ask a handyman to fit it.",
        ],
      },
      {
        heading: "The two-month window that decides the year",
        body: [
          "Late September to the end of November is when this trade makes its money. Enquiries in that window convert faster and negotiate less, because people want it working before Christmas.",
          "The practical consequence is that lead times become your strongest message from about mid-October. Saying you are booking into January is not bad news — it is proof you are busy, and it moves people who were going to think about it for another fortnight.",
        ],
      },
    ],
    related: ["plumbers-and-heating", "heat-pumps", "builders-and-extensions"],
  },
  {
    slug: "sunrooms-and-conservatories",
    label: "Sunrooms & conservatories",
    title: "Sunroom & Conservatory Leads Ireland | Marketing for Installers",
    description:
      "Lead generation for Irish sunroom, conservatory and garden room extension installers. Photograph-led campaigns reported in booked home visits. From €1,500 a month.",
    h1: "Sunroom and conservatory leads from people ready to spend.",
    intro: [
      "A sunroom is sold on a photograph and bought after months of thinking. Somebody sees a finished room attached to a house like theirs, pictures their own back wall, and starts costing it up. That makes this an unusually good fit for paid social and a poor one for text-only search advertising.",
      "It is also a substantial purchase in a market where people have been told horror stories about cold, unusable conservatories. Addressing that directly — insulation, glazing, whether the room is genuinely usable in January — converts far better than another photograph of a sunny afternoon.",
    ],
    run: [
      {
        name: "Photograph-led social campaigns",
        text: "Built from your own finished rooms, because the image is the entire argument in this trade.",
      },
      {
        name: "The year-round usability angle",
        text: "The objection everyone has and almost nobody answers in their advertising. Handling it up front removes the main reason people stall.",
      },
      {
        name: "Search campaigns for the costed-up",
        text: "Google Ads on sunroom, conservatory and orangery searches, for people already pricing it.",
      },
      {
        name: "Home visit as the conversion event",
        text: "The campaign optimises for a booked visit rather than a form fill, because that is the step that leads to a sale.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, home visits booked and cost per visit.",
      },
    ],
    qualify: [
      "What size room are you thinking of?",
      "Is this replacing an existing conservatory?",
      "Do you have a budget in mind?",
      "When would you want it built?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Is social better than search here?",
        a: "Usually yes. Plenty of people do not know they want one until they see it, and that is scrolling behaviour rather than searching. We still run search for those already costing it up.",
      },
      {
        q: "Should we publish prices?",
        a: "A from-price generally helps. Sunrooms have a wide range and hiding it produces enquiries from people who were never in the market.",
      },
      {
        q: "How do we handle the cold conservatory objection?",
        a: "Head on. It is the single most common reason people hesitate, and a firm that explains glazing and insulation plainly separates itself from everyone showing sunny photographs.",
      },
      {
        q: "Is it seasonal?",
        a: "Enquiries concentrate in spring and early summer, with a second smaller run in autumn from people planning for next year. Budget follows that.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "The cold conservatory problem is your biggest asset",
        body: [
          "An enormous number of Irish houses have a conservatory nobody uses between October and April. Those owners are not lost customers — they are the warmest market you have, because they already wanted the room and know exactly why they stopped using it.",
          "Replacement roofs, insulated upgrades and full rebuilds aimed at existing conservatory owners are considerably easier to sell than a new build to somebody starting from nothing, and almost nobody advertises for them specifically.",
        ],
      },
      {
        heading: "Planning exemption is the question behind every enquiry",
        body: [
          "Most homeowners are unsure whether they need permission, and uncertainty is what makes people postpone. The exemption rules in Ireland are reasonably generous for a rear extension of modest size, but almost nobody knows the detail.",
          "Answering it clearly on the page removes the single biggest reason enquiries go quiet after the first conversation.",
        ],
      },
    ],
    related: ["garden-rooms", "builders-and-extensions", "windows-and-doors"],
  },
  {
    slug: "security-and-alarms",
    label: "Security & alarms",
    title: "Alarm & CCTV Leads Ireland | Marketing for Security Installers",
    description:
      "Lead generation for Irish alarm, CCTV and access control installers, domestic and commercial. Reported in booked surveys. From €1,500 a month.",
    h1: "Alarm and CCTV leads, domestic and commercial.",
    intro: [
      "Security is bought after something happens. A break-in on the road, a spate in the estate, a story in the local paper — and for about a fortnight afterwards an entire area is in the market at once. The rest of the time demand is steady and low.",
      "That makes reactive capability worth more in this trade than in almost any other. A campaign that can be turned up within a day of a local incident reaches people with the highest intent they will ever have, and at a cost per enquiry a fraction of the usual.",
    ],
    run: [
      {
        name: "Local reactive campaigns",
        text: "Prepared in advance and paused, ready to lift within a day when incidents concentrate in an area.",
      },
      {
        name: "Commercial as a separate campaign",
        text: "Business alarms, CCTV and access control are worth several times a domestic install and the buyer is completely different. Running both in one campaign drags cost per enquiry the wrong way.",
      },
      {
        name: "Monitoring and contract messaging",
        text: "The recurring revenue behind the install, which most installers under-sell in their advertising.",
      },
      {
        name: "Survey qualification",
        text: "Property type, size and whether a system already exists, asked before the enquiry reaches you.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey, split domestic and commercial.",
      },
    ],
    qualify: [
      "Is this for a home or a business?",
      "Do you have a system already?",
      "Alarm, CCTV, or both?",
      "When are you looking to have it installed?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "Is reacting to local break-ins appropriate?",
        a: "It is, if it is done with restraint. Offering security to an area that has just had incidents is a legitimate service. Using fear or naming specific crimes is neither decent nor effective, and we will not write it.",
      },
      {
        q: "Is commercial worth chasing?",
        a: "For most installers, yes. The jobs are larger, the buyer is less price-sensitive and monitoring contracts follow. It needs its own campaign and its own language.",
      },
      {
        q: "Should we advertise monitoring?",
        a: "Yes, because it is the recurring revenue that makes the business valuable — but as a benefit rather than an upsell buried at quote stage.",
      },
      {
        q: "How fast can a campaign react?",
        a: "Within a day if it is built in advance and paused. Building one from scratch during a local spike means missing the fortnight that mattered.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "Monitoring is the business, installation is the entry",
        body: [
          "An alarm install is a one-off with a modest margin. A monitoring contract is recurring revenue that makes the business worth something when you come to sell it, and it is what separates installers who grow from installers who stay busy.",
          "Advertising should reflect that. The install is what people search for; the monitoring is what you want them to choose. Leading with monitoring loses the enquiry, and never mentioning it until quote stage loses the contract.",
        ],
      },
      {
        heading: "Commercial work runs on a completely different clock",
        body: [
          "Domestic security is bought reactively, usually within a fortnight of something happening locally. Commercial security is bought on renewal, on insurance requirements, on a new premises or on a compliance deadline — predictable, planned and far less emotional.",
          "That difference is why they cannot share a campaign. The domestic one needs to be able to spike within a day; the commercial one needs to be consistently present for a much longer decision.",
        ],
      },
    ],
    related: ["electricians", "drainage", "builders-and-extensions"],
  },
  {
    slug: "tree-surgery",
    label: "Tree surgery",
    title: "Tree Surgery Leads Ireland | Marketing for Arborists",
    description:
      "Lead generation for Irish tree surgeons and arborists: felling, pruning, storm damage and stump removal. Reported in booked jobs. From €1,500 a month.",
    h1: "Tree surgery leads, including the week after a storm.",
    intro: [
      "Tree work has two demand patterns and one of them is worth building for. The steady one runs through autumn and winter, when leaves are down and people can see what needs doing. The other arrives without warning: a storm goes through and an entire county needs the same urgent work in the same three days, from people who are not comparing quotes.",
      "Storm weeks are the highest-intent, least price-sensitive enquiries an arborist ever sees. Capturing them requires a campaign already built and paused, because building one during the spike means missing it.",
    ],
    run: [
      {
        name: "Storm-response campaigns",
        text: "Prepared in advance, switched on within hours when weather hits, so you are visible during the days that matter.",
      },
      {
        name: "Seasonal pruning and felling campaigns",
        text: "The steady autumn and winter work that fills the diary between events.",
      },
      {
        name: "Commercial and estate campaigns",
        text: "Councils, management companies, farms and estates — larger, repeating work that most arborists never advertise for.",
      },
      {
        name: "Access and size qualification",
        text: "Tree size, access and whether it is near a building, asked up front, because those decide the price more than anything else.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, cost per enquiry and job type.",
      },
    ],
    qualify: [
      "How many trees, and roughly what size?",
      "Is the tree near a building or power lines?",
      "Is this urgent or planned?",
      "Is there access for machinery?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "Can you really react to a storm in time?",
        a: "Yes, if the campaign exists and is paused. Turning it up takes minutes. Building one during the spike takes days you do not have.",
      },
      {
        q: "Is commercial work worth it?",
        a: "Usually the steadiest money in the trade. Management companies and estates have recurring requirements and are far less price-driven than domestic customers.",
      },
      {
        q: "Should we mention insurance and certification?",
        a: "Yes, prominently. Tree work near buildings makes people nervous, and proof of cover is frequently the deciding factor between two quotes.",
      },
      {
        q: "How seasonal is it?",
        a: "Domestic work concentrates from autumn through winter. Budget follows that, with a reserve held back for weather events.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "Insurance is the deciding factor and most firms bury it",
        body: [
          "A homeowner with a large tree near a roof is not shopping on price. They are frightened of the tree and frightened of who they let near it, and the quote they accept is usually the one that made them feel least exposed.",
          "Public liability cover, certification and method should be near the top of everything you publish. It is the cheapest competitive advantage available in this trade because so many firms treat it as small print.",
        ],
      },
      {
        heading: "Preservation orders and the work nobody explains",
        body: [
          "Trees subject to preservation orders, trees in conservation areas, and hedgerow work restricted during nesting season all create confusion that stops people acting.",
          "A firm that explains when work is and is not permitted becomes the obvious one to ring, including from people who then find out they cannot proceed this month — and who come back when they can.",
        ],
      },
    ],
    related: ["landscapers", "fencing-and-gates", "drainage"],
  },
  {
    slug: "dentists",
    label: "Dentists",
    title: "Dental Marketing Ireland | Patient Leads for Dental Practices",
    description:
      "Marketing for Irish dental practices: implants, orthodontics, cosmetic and general dentistry. Campaigns built around consultations and reported in booked appointments. From €1,500 a month.",
    h1: "Dental marketing measured in booked consultations.",
    intro: [
      "A dental practice has two completely different marketing problems. General dentistry is a local, proximity-driven, low-margin business where you are competing with whoever is nearest. High-value work — implants, orthodontics, full-mouth reconstruction — is a considered purchase where people travel and compare, and where a single case is worth more than a year of check-ups.",
      "Advertising both the same way wastes most of the budget. The practices that do well separate them and accept a much higher cost per enquiry on the high-value side, because the arithmetic completely changes.",
    ],
    run: [
      {
        name: "High-value case campaigns",
        text: "Implants, orthodontics and cosmetic work advertised separately, with a cost per enquiry judged against the case value rather than a check-up.",
      },
      {
        name: "New patient campaigns",
        text: "Local, proximity-led campaigns for general dentistry, aimed at the catchment you realistically draw from.",
      },
      {
        name: "Consultation as the conversion event",
        text: "The campaign optimises for a booked consultation, because that is the step that predicts revenue.",
      },
      {
        name: "Compliance-aware creative",
        text: "Dental advertising in Ireland carries professional obligations around claims and imagery. Ads are written to respect them and sent for your approval.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per booked consultation, split by treatment type.",
      },
    ],
    qualify: [
      "Which treatment are you interested in?",
      "Are you a current patient?",
      "Is this urgent or planned?",
      "Which days suit you best?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    faqs: [
      {
        q: "What can a dental practice afford per enquiry?",
        a: "It depends entirely on the treatment. A check-up enquiry that costs €40 is poor value. An implant enquiry at €150 that converts one time in four is excellent. Splitting the campaigns is what lets you see the difference.",
      },
      {
        q: "Are there rules about what we can advertise?",
        a: "Yes. Dental advertising carries professional obligations around claims, before-and-after imagery and pricing. We write to those and send everything for your approval — your professional judgement is final, not ours.",
      },
      {
        q: "Is social worth it for a practice?",
        a: "For high-value cosmetic and orthodontic work, yes. For general dentistry, search and your Google Business Profile usually do more, because people pick a dentist by proximity.",
      },
      {
        q: "How important is the Google profile?",
        a: "For general dentistry it is probably the single most valuable thing you own — most people choose from the map results without scrolling further.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "The two economies inside one practice",
        body: [
          "General dentistry is a proximity business. People choose a practice within a few kilometres, largely from the map results, and switch reluctantly. It is defended by reviews and convenience rather than won by advertising.",
          "High-value work behaves nothing like that. Somebody considering implants will travel an hour, compare four practices and take months. They are researching, and the practice that educates best usually wins.",
        ],
        list: [
          {
            title: "General dentistry",
            body: "Won on proximity and reviews. Advertising budget here has a low ceiling and the Google profile matters more than any campaign.",
          },
          {
            title: "Implants and orthodontics",
            body: "Won on trust and information. A far higher cost per enquiry is justified because a single case can exceed a year of routine work.",
          },
        ],
      },
      {
        heading: "Nervous patients are an under-served market",
        body: [
          "A significant share of adults avoid the dentist entirely because of anxiety, and most practice marketing speaks past them completely — all confident smiles and clinical language.",
          "Advertising built specifically for anxious patients, explaining what happens and what control they have, reaches people who have not been in years and who become long-term patients precisely because someone finally addressed it.",
        ],
      },
    ],
    related: ["med-spas", "skin-clinics", "physiotherapy"],
  },
  {
    slug: "physiotherapy",
    label: "Physio & clinics",
    title: "Physio Clinic Marketing Ireland | Patient Leads for Clinics",
    description:
      "Marketing for Irish physiotherapy, chiropractic and sports injury clinics. Campaigns built around the injury people actually search for, reported in booked appointments. From €1,500 a month.",
    h1: "Physio and clinic marketing built around the injury, not the profession.",
    intro: [
      "People do not search for a physiotherapist. They search for the thing that hurts — lower back pain, a shoulder that will not lift, a knee after a run, sciatica. A clinic advertising the profession rather than the problem is invisible to most of its own market.",
      "The second thing that decides a clinic is the course of treatment. One appointment is worth little; a course of six is a real patient. Campaigns that sell the assessment and explain what a course looks like produce far better patients than ones selling a cheap first session.",
    ],
    run: [
      {
        name: "Condition-led campaigns",
        text: "Built around the complaints people actually type, with a separate campaign for the conditions you most want to treat.",
      },
      {
        name: "Assessment-first messaging",
        text: "The initial assessment as the offer, because it is what converts and what leads naturally into a course.",
      },
      {
        name: "Sports and workplace campaigns",
        text: "Club, gym and employer relationships are a steady referral source most clinics never advertise for.",
      },
      {
        name: "Booking-system integration",
        text: "Enquiries sent straight into whatever you already run, so nothing depends on someone remembering to ring back.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, appointments booked and cost per booked appointment.",
      },
    ],
    qualify: [
      "What is the main complaint?",
      "How long have you had it?",
      "Have you had treatment for it before?",
      "Which days and times suit you?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "Should we advertise a cheap first appointment?",
        a: "Generally not. It attracts people shopping on price who do not complete a course, and it devalues the assessment. Explaining what treatment actually involves converts better.",
      },
      {
        q: "Which conditions should we target?",
        a: "The ones you most want to treat and are best at, not all of them. A campaign built around three conditions you genuinely specialise in beats one covering everything.",
      },
      {
        q: "Is Google or social better?",
        a: "Search, clearly. Pain is an active-search behaviour — people look for relief when they have it, not when scrolling.",
      },
      {
        q: "How important is the Google profile?",
        a: "Very. Clinics are chosen locally and the map results carry most of the attention, with reviews doing much of the deciding.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "People search the symptom, not the profession",
        body: [
          "The gap between how clinics advertise and how patients search is wider here than in almost any sector. Clinics write about chartered physiotherapy and evidence-based practice; patients type lower back pain, sciatica, frozen shoulder, runners knee.",
          "Building the campaign and the pages around conditions rather than credentials is the single highest-impact change most clinics can make, and it costs nothing but rewriting.",
        ],
      },
      {
        heading: "Why the first appointment should not be discounted",
        body: [
          "The discounted first session is the standard offer in this sector and it is usually a mistake. It attracts people comparing on price, who take the cheap assessment and do not return, and it signals that the assessment is the least valuable part of what you do.",
          "Clinics that instead explain what an assessment involves and what a course of treatment looks like get fewer enquiries and considerably more patients who complete a course.",
        ],
      },
    ],
    related: ["dentists", "gyms-and-fitness", "med-spas"],
  },
  {
    slug: "veterinary",
    label: "Veterinary",
    title: "Veterinary Marketing Ireland | Client Growth for Vet Practices",
    description:
      "Marketing for Irish veterinary practices, small animal and mixed. Campaigns built around new client registration and the services that pay, reported in booked appointments. From €1,500 a month.",
    h1: "Veterinary marketing built around registering new clients.",
    intro: [
      "A veterinary practice does not really sell appointments. It registers clients, and a registered client is worth years of vaccinations, check-ups, dental work and the occasional expensive episode. That makes the value of a new client far higher than any single visit, and it should change what you are willing to pay to attract one.",
      "Most practice advertising ignores this entirely and promotes individual services. The practices that grow advertise registration, make it easy, and then let the relationship do the rest.",
    ],
    run: [
      {
        name: "New client registration campaigns",
        text: "The offer is joining the practice rather than booking one appointment, because that is where the value is.",
      },
      {
        name: "New-pet and new-mover targeting",
        text: "Two moments when people choose a vet: getting a puppy or kitten, and moving house. Both are targetable and almost nobody does it.",
      },
      {
        name: "Service campaigns that pay",
        text: "Dental work, neutering and preventative plans, advertised separately because the economics differ substantially.",
      },
      {
        name: "Out-of-hours clarity",
        text: "What you do and do not cover, said plainly. It is one of the most common reasons people switch practice.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, registrations and cost per registration.",
      },
    ],
    qualify: [
      "What type of animal?",
      "Are you registering as a new client?",
      "Is this routine or urgent?",
      "Which practice location suits you?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "What is a new client actually worth?",
        a: "Far more than a single consultation — usually years of routine work plus occasional larger episodes. Working that number out is what tells you what you can afford to spend attracting one.",
      },
      {
        q: "Should we advertise emergency services?",
        a: "Only if you genuinely provide them at the hours advertised. Nothing damages a practice locally faster than someone ringing in distress and finding out you are closed.",
      },
      {
        q: "Is social worth it for a practice?",
        a: "Yes, unusually so. Animal content earns genuine organic engagement, which keeps costs down, and it builds the familiarity that makes people choose you when they need to.",
      },
      {
        q: "How do we reach new pet owners?",
        a: "Timing and targeting around new pets and house moves, plus relationships with local breeders, rescues and groomers. It is the most reliable source of registrations there is.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "Register the client, not the appointment",
        body: [
          "Most veterinary advertising promotes a service — vaccinations, dental month, neutering offers. It treats a practice like a shop selling individual items.",
          "The practices that grow advertise registration, because a registered client returns for years without further marketing cost. Once you value a client over their lifetime rather than their next visit, what you can afford to spend acquiring one changes completely.",
        ],
      },
      {
        heading: "The two moments people choose a vet",
        body: [
          "Almost nobody switches practice on a whim. They choose a vet twice: when they get a new animal, and when they move house. Outside those moments, loyalty is high and advertising largely bounces off.",
          "That makes timing far more important than volume. Relationships with local breeders, rescues, groomers and trainers reach the first moment. Targeting recent movers reaches the second. Both outperform general awareness advertising by a wide margin.",
        ],
      },
    ],
    related: ["physiotherapy", "dentists", "car-garages"],
  },
  {
    slug: "solicitors",
    label: "Solicitors",
    title: "Solicitor Marketing Ireland | Client Leads for Law Firms",
    description:
      "Marketing for Irish solicitors and law firms: conveyancing, probate, personal injury and family law. Campaigns built around enquiry quality, reported in booked consultations. From €1,500 a month.",
    h1: "Solicitor marketing built around the work you actually want.",
    intro: [
      "Legal marketing in Ireland is constrained in ways most agencies have never read. Solicitors' advertising is governed by professional rules, and personal injury advertising in particular is tightly restricted — an agency that does not know this can create a regulatory problem for a firm in a fortnight.",
      "Within those limits there is a great deal of room, and very little competition for it. Conveyancing, probate, wills and family law are searched constantly, are chosen locally, and are advertised by almost nobody outside the largest firms.",
    ],
    run: [
      {
        name: "Practice-area campaigns",
        text: "Conveyancing, probate, wills and family law run separately, because the client, the urgency and the value differ completely.",
      },
      {
        name: "Compliance-aware creative",
        text: "Written to respect the professional rules on solicitors' advertising, and sent to you for approval before anything runs. Your judgement on compliance is final.",
      },
      {
        name: "Local search and profile work",
        text: "Legal services are chosen locally and largely from the map results. For most firms the Google Business Profile is worth more than any campaign.",
      },
      {
        name: "Consultation as the conversion event",
        text: "The campaign optimises for a booked consultation rather than a form fill.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation, split by practice area.",
      },
    ],
    qualify: [
      "Which area of law do you need help with?",
      "Is there a deadline involved?",
      "Have you instructed a solicitor already?",
      "Would you prefer a call or an appointment?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "Are solicitors allowed to advertise in Ireland?",
        a: "Yes, within professional rules, and personal injury advertising is restricted specifically and significantly. We write to those constraints and send everything for your approval. If you want a campaign we believe crosses a line, we will say so rather than run it.",
      },
      {
        q: "Which practice areas work best?",
        a: "Conveyancing and probate, generally — steady demand, clear intent, chosen locally and advertised by almost nobody. Family law works but needs careful, restrained language.",
      },
      {
        q: "Is social media appropriate for a law firm?",
        a: "For awareness and for family or conveyancing work, it can be. It is not where most legal enquiries come from, and we would start with search and your Google profile.",
      },
      {
        q: "How important are reviews?",
        a: "For a local firm, very. People are anxious about choosing a solicitor and reviews do more reassuring than any amount of copy.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "What the rules actually restrict",
        body: [
          "Solicitors' advertising in Ireland operates under professional regulation, and personal injury advertising is restricted specifically and significantly. Claims about outcomes, comparisons with other firms and anything that could be read as soliciting particular business all need care.",
          "None of that prevents a firm from being findable. Explaining what you do, who you help and what a first consultation involves is entirely permissible, and it is more than most firms currently manage.",
        ],
      },
      {
        heading: "Conveyancing is the most searchable work you do",
        body: [
          "Property transactions generate constant, predictable search volume with unambiguous intent, and the client is choosing locally and quickly. It is also work most firms treat as a given rather than something to compete for.",
          "A firm that is visible for conveyancing in its own town, with clear information about timelines and costs, picks up work that currently goes to whoever the estate agent happened to mention.",
        ],
      },
    ],
    related: ["accountants", "estate-agents", "insurance-brokers"],
  },
  {
    slug: "accountants",
    label: "Accountants",
    title: "Accountant Marketing Ireland | Client Leads for Practices",
    description:
      "Marketing for Irish accountancy practices: company accounts, tax returns, bookkeeping and advisory. Campaigns timed to the filing calendar. From €1,500 a month.",
    h1: "Accountancy marketing timed to the filing calendar.",
    intro: [
      "Accountancy has the most predictable demand curve of any professional service in Ireland. The self-assessment deadline in the autumn produces a concentrated spike of people looking for help, and a large share of practices do nothing to capture it beyond hoping their existing clients file on time.",
      "The other thing that makes this business unusual is client value. An accountancy client is not a transaction; they stay for years and the relationship compounds. That means you can afford to pay considerably more for one than most practices ever consider.",
    ],
    run: [
      {
        name: "Deadline-timed campaigns",
        text: "Budget concentrated into the weeks before filing deadlines, when demand is highest and intent is unambiguous.",
      },
      {
        name: "Switching campaigns",
        text: "Most new clients are leaving another accountant rather than starting from nothing. Advertising to that — and making switching sound easy — outperforms advertising to new businesses.",
      },
      {
        name: "Sector and service campaigns",
        text: "Contractors, landlords, trades and small companies all search differently and value different things.",
      },
      {
        name: "Consultation as the conversion event",
        text: "The campaign optimises for a booked call rather than a form fill, because the first conversation is what wins the client.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation.",
      },
    ],
    qualify: [
      "Are you a sole trader, company or individual?",
      "Which services do you need?",
      "Do you have an accountant currently?",
      "Is there a deadline you are working to?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "When should we be advertising?",
        a: "Heaviest in the run-up to filing deadlines, when people who have been putting it off finally act. A flat spend across the year misses the weeks that convert best.",
      },
      {
        q: "Should we target people switching accountants?",
        a: "Yes — most new clients come from another practice, not from nowhere. The message that works is that switching is straightforward, because the assumption that it is a hassle is what keeps people where they are.",
      },
      {
        q: "What is a client worth?",
        a: "Usually years of recurring fees, which is why practices consistently under-invest in acquiring one. Work out the multi-year value and the affordable cost per client changes considerably.",
      },
      {
        q: "Is LinkedIn worth it?",
        a: "For business services in Ireland it can be, particularly for company and advisory work. It is dearer per click than search and works better for awareness than direct enquiries.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "The deadline does your selling for you",
        body: [
          "Very little in professional services comes with a legal deadline attached. Self-assessment does, and it converts people who have been meaning to sort it out for two years into people ringing an accountant this week.",
          "Concentrating budget into the run-up to filing deadlines produces enquiries at a fraction of the usual cost, because intent is already at its peak and you are not persuading anyone that they need the service.",
        ],
      },
      {
        heading: "Most new clients are somebody else's old clients",
        body: [
          "Practices tend to advertise as though the market is new businesses. It is not. The great majority of new clients are leaving another accountant — usually because they felt ignored, not because of fees.",
          "That changes the message entirely. Responsiveness, being able to reach a named person, and making the switch sound administratively painless will win more clients than any statement about qualifications.",
        ],
      },
    ],
    related: ["solicitors", "insurance-brokers", "estate-agents"],
  },
  {
    slug: "car-garages",
    label: "Garages & mechanics",
    title: "Garage Leads Ireland | Marketing for Mechanics & Car Servicing",
    description:
      "Lead generation for Irish garages and mechanics: servicing, NCT preparation, repairs and tyres. Reported in booked jobs. From €1,500 a month.",
    h1: "Garage leads built around the NCT and the service calendar.",
    intro: [
      "A garage has the most reliable recurring demand of any local trade, and most never advertise against it. Every car in the country needs an NCT, and every NCT failure creates a repair job with a deadline attached. That is a predictable, searchable, high-intent stream of work that almost nobody competes for.",
      "The second thing is that a garage customer is a repeating one. Someone who trusts you services with you for years. That makes the value of a new customer far higher than a single job, and it should change what you are willing to pay to win one.",
    ],
    run: [
      {
        name: "NCT-led campaigns",
        text: "Preparation, retests and post-failure repairs — searched constantly, urgent by nature, and advertised by almost nobody.",
      },
      {
        name: "Servicing and reminder campaigns",
        text: "To your existing customer list as much as to new ones. Reminding people their service is due is the cheapest revenue a garage has.",
      },
      {
        name: "Specialist and brand campaigns",
        text: "Where you specialise — a marque, diagnostics, DPFs, hybrids — that is usually less contested and better paid than general servicing.",
      },
      {
        name: "Tyres and quick jobs",
        text: "Low value individually but a reliable way to acquire a customer who then services with you.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, bookings and cost per booking.",
      },
    ],
    qualify: [
      "What make and model is the car?",
      "What do you need — service, NCT prep, or a repair?",
      "Is there a warning light or a specific fault?",
      "When do you need it in?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    faqs: [
      {
        q: "Is NCT work actually worth advertising for?",
        a: "It is one of the most under-used opportunities in the trade. The demand is constant, the intent is high, the deadline is real, and a failure turns straight into a repair job.",
      },
      {
        q: "How do we get customers back?",
        a: "Service reminders, and a campaign to your own customer list. Most garages have hundreds of past customers they never contact again, which is the cheapest revenue available to them.",
      },
      {
        q: "Should we advertise prices?",
        a: "For fixed items like a service or NCT prep, yes — it is what people compare and it filters out price shoppers early. For diagnostics and repairs, no, because you cannot know until you look.",
      },
      {
        q: "Is social worth it?",
        a: "Less than search for a garage. People look for a mechanic when they need one. Social is better for staying visible to existing customers between visits.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "The NCT is a marketing calendar nobody uses",
        body: [
          "Every car in the country has a test date, a proportion fail, and every failure produces urgent repair work with a legal deadline. This is the most predictable recurring demand available to any local trade.",
          "Almost no garage advertises against it. Pre-test checks, retests and post-failure repairs are searched constantly and contested barely at all, which makes them the cheapest enquiries most garages will ever buy.",
        ],
      },
      {
        heading: "Your database is worth more than your advertising",
        body: [
          "A typical garage has hundreds of past customers it has not contacted since the last job. Service reminders to that list cost almost nothing and routinely outperform any acquisition campaign, because the trust already exists.",
          "The reason most garages do not do it is not cost. It is that the records are in a diary, a notebook or somebody's head. Getting them into one list is a day's work that pays for itself repeatedly.",
        ],
      },
    ],
    related: ["veterinary", "electricians", "drainage"],
  },
  {
    slug: "gyms-and-fitness",
    label: "Gyms & fitness",
    title: "Gym Marketing Ireland | Member Leads for Gyms & Studios",
    description:
      "Marketing for Irish gyms, studios and personal trainers. Campaigns built around trials and retention rather than January discounting. From €1,500 a month.",
    h1: "Gym marketing built around what happens after January.",
    intro: [
      "Every gym in Ireland gets a January. The ones that grow are the ones that still have those members in April, and that is a retention problem rather than a marketing one — but it is shaped by how the member was acquired in the first place. A member won on a heavy discount behaves like a discount member and leaves when it ends.",
      "The other mistake is advertising the facility. Nobody joins a gym because it has equipment. They join because of what they want to be different in six months, and the advertising that works speaks to that rather than to square footage.",
    ],
    run: [
      {
        name: "Trial and intro-offer campaigns",
        text: "Structured so the offer attracts people who intend to stay, rather than the cheapest possible membership.",
      },
      {
        name: "Off-peak acquisition",
        text: "Advertising in the months when everyone else stops. Cheaper, less contested, and the members acquired tend to stay longer than January joiners.",
      },
      {
        name: "Class and PT campaigns",
        text: "Higher-value, higher-retention services advertised separately from general membership.",
      },
      {
        name: "Retention campaigns to existing members",
        text: "The cheapest revenue a gym has, and the thing most owners never advertise to at all.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, trials booked, joins and cost per join.",
      },
    ],
    qualify: [
      "What are you hoping to achieve?",
      "Have you been a member somewhere before?",
      "Are you interested in classes, gym floor or personal training?",
      "When would you want to start?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    faqs: [
      {
        q: "Should we discount in January?",
        a: "Less than you think. January members acquired on heavy discount churn fastest, and the month is the most expensive of the year to advertise in. A modest offer aimed at commitment beats a large one aimed at price.",
      },
      {
        q: "When is the best time to advertise?",
        a: "The months everyone else goes quiet — late spring and autumn. Cheaper, less crowded, and the members tend to last.",
      },
      {
        q: "Is social better than search for a gym?",
        a: "Usually, because joining is a discretionary decision rather than an urgent search. Search still matters for people who have already decided and are choosing between two local gyms.",
      },
      {
        q: "What about retention?",
        a: "It is where the money is, and it is mostly not a marketing problem — but campaigns to your existing members cost very little and work well.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    sections: [
      {
        heading: "January is the most expensive month to buy a member",
        body: [
          "Every gym advertises in January, which means everyone bids against everyone and cost per join peaks exactly when the discounts are deepest. Worse, members acquired on heavy discount churn fastest, so you pay the most for the members least likely to stay.",
          "Advertising in the months everyone else goes quiet costs considerably less per join and produces members who joined because they decided to rather than because it was cheap.",
        ],
      },
      {
        heading: "Nobody joins for the equipment",
        body: [
          "Gym advertising defaults to the facility — square footage, machines, classes, opening hours. Almost none of it is why anybody joins.",
          "People join because something is bothering them: how they feel, how clothes fit, a health scare, a milestone birthday. Advertising that speaks to the reason rather than the room converts several times better, and it is uncomfortable enough that most competitors will not copy it.",
        ],
      },
    ],
    related: ["physiotherapy", "skin-clinics", "med-spas"],
  },
  {
    slug: "mortgage-brokers",
    label: "Mortgage brokers",
    title: "Mortgage Broker Marketing Ireland | Leads for Brokerages",
    description:
      "Marketing for Irish mortgage brokers: first-time buyers, switchers and self-employed applicants. Central Bank aware, reported in booked consultations. From €1,500 a month.",
    h1: "Mortgage broker marketing built around approval, not rates.",
    intro: [
      "A mortgage broker cannot win a rate comparison and should stop entering one. The lenders advertise their own rates with budgets no brokerage can match, and a borrower sorting by the lowest number was never going to use an intermediary anyway.",
      "What a broker sells is approval — getting a mortgage over the line when the application is awkward. Self-employed income, contract work, a recent job change, a borrower who has been declined once already. Those are the searches where advice beats price, and almost nobody advertises against them.",
    ],
    run: [
      {
        name: "Approval-led campaigns",
        text: "Aimed at the applications banks handle badly: self-employed, contractors, recent movers, previously declined. The searches are specific and barely contested.",
      },
      {
        name: "Switcher campaigns",
        text: "Timed to rate movements and to the point where fixed terms roll off, which is when a switcher is genuinely reachable.",
      },
      {
        name: "First-time buyer content",
        text: "The longest research cycle in Irish financial services. Being useful early is what gets the call when they are finally ready.",
      },
      {
        name: "Compliance-aware creative",
        text: "You are Central Bank regulated and your advertising carries obligations. Everything is written to respect them and sent for your approval.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation, split by applicant type.",
      },
    ],
    qualify: [
      "Are you buying, switching or remortgaging?",
      "Is this your first mortgage?",
      "Are you employed or self-employed?",
      "Have you approval in principle already?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Why rate advertising loses money for brokers",
        body: [
          "Lenders spend on rate messaging because they are selling the rate. A broker advertising the same thing is competing on somebody else's product with a fraction of the budget, and attracting the borrowers least likely to need a broker.",
          "The brokerage advantage sits entirely in complexity. A straightforward PAYE applicant with a large deposit does not need you and knows it. Somebody self-employed two years with variable income needs you badly and has nowhere obvious to look.",
        ],
      },
      {
        heading: "The switcher window nobody times",
        body: [
          "Switchers are only reachable in a narrow period — when a fixed term is ending, or when rates move enough to make the arithmetic obvious.",
          "Advertising to switchers in a flat monthly spend wastes most of it on people locked in for another three years. Weighting campaigns to rate news and to the months when fixed terms commonly roll off changes cost per enquiry substantially.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we advertise specific rates?",
        a: "Only within your regulatory obligations, and it is rarely the best use of budget anyway. You will be outspent by the lenders on their own product. Approval and complexity are where a brokerage can actually win.",
      },
      {
        q: "Which applicants are worth targeting?",
        a: "The ones banks find awkward — self-employed, contractors, previously declined, non-standard income. Those searches have clear intent, little competition and a borrower who genuinely needs the service.",
      },
      {
        q: "Is LinkedIn worth it?",
        a: "For self-employed and professional applicants it can be, though it is dearer per click than search. We would establish search first.",
      },
      {
        q: "How long is the cycle?",
        a: "First-time buyers research for months before they are ready. Switchers act in weeks. They need entirely different campaigns and different patience.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["insurance-brokers", "accountants", "estate-agents"],
  },
  {
    slug: "architects",
    label: "Architects",
    title: "Architect Marketing Ireland | Client Leads for Practices",
    description:
      "Marketing for Irish architects and architectural designers: extensions, new builds and planning work. Campaigns built around the enquiry worth taking. From €1,500 a month.",
    h1: "Architect marketing built around the projects you want.",
    intro: [
      "Architecture has the longest gap between enquiry and fee of any service we work with, and the widest spread in what an enquiry is worth. A loft conversion drawing and a new build differ by a factor of twenty, and both arrive through the same contact form.",
      "The other difficulty is that many enquiries are not projects at all. Someone who has not spoken to a bank, has no site and no budget is a conversation, not a client. Filtering that before it reaches you is worth more than any increase in volume.",
    ],
    run: [
      {
        name: "Project-type campaigns",
        text: "Extensions, new builds, retrofits and commercial work run separately, because the budgets and the timelines have almost nothing in common.",
      },
      {
        name: "Planning-led content",
        text: "The exemption rules, what permission actually involves and how long it takes. It is what people search and it establishes competence immediately.",
      },
      {
        name: "Qualification before the call",
        text: "Site status, budget band and whether finance is arranged, asked in the form so your consultations are with people who can proceed.",
      },
      {
        name: "Finished-project creative",
        text: "Completed work photographed properly. Architecture is chosen visually more than practices like to admit.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation, split by project type.",
      },
    ],
    qualify: [
      "What type of project is it?",
      "Do you own the site or property already?",
      "Do you have a budget range in mind?",
      "Have you applied for planning before?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "The enquiry that costs you a morning",
        body: [
          "Every practice knows the one: an enthusiastic homeowner, no site, no finance, an idea from a television programme. Two hours of goodwill and no project.",
          "Three questions in the form removes most of them without deterring anyone real. Somebody with a site and a budget answers them happily; somebody without quietly does not submit, which is the outcome you want.",
        ],
      },
      {
        heading: "Planning content is the best marketing an architect can do",
        body: [
          "Homeowners are confused about exemptions, permission timelines and what is possible on their site, and they search constantly for answers.",
          "A practice that explains it plainly gets found early, is remembered, and is the obvious call when the project becomes real. It also filters — people who learn their idea needs permission and walk away were never going to be clients.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do we avoid unpaid consultations?",
        a: "Ask about site ownership, budget and finance in the form. It reduces enquiry numbers and raises the proportion that become fee-paying work.",
      },
      {
        q: "Should we advertise fees?",
        a: "A fee structure or a starting point helps more than it hurts. It is what people are trying to establish and hiding it produces enquiries from people with no budget.",
      },
      {
        q: "Is social worth it for a practice?",
        a: "For domestic extension work, yes — it is visual and people save what they like. For commercial work, search and reputation do more.",
      },
      {
        q: "What about competitions and public work?",
        a: "That is a different pipeline entirely and marketing plays little part. This is about private and domestic work.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["builders-and-extensions", "attic-conversions", "sunrooms-and-conservatories"],
  },
  {
    slug: "pest-control",
    label: "Pest control",
    title: "Pest Control Leads Ireland | Marketing for Pest Controllers",
    description:
      "Lead generation for Irish pest control companies: domestic callouts and commercial contracts. Seasonal, urgent, and reported in booked jobs. From €1,500 a month.",
    h1: "Pest control leads, domestic and commercial.",
    intro: [
      "Pest control has two businesses and they could not be less alike. Domestic work is urgent, emotional and frequently embarrassing — somebody wants the problem gone today and does not want the neighbours to know. Commercial work is contractual, compliance-driven and worth many times more over a year.",
      "The seasons are as sharp as any trade in Ireland. Wasps in high summer, rodents moving indoors from September, and a long quiet stretch in spring. A flat budget across that curve overspends badly in the months nobody is calling.",
    ],
    run: [
      {
        name: "Seasonal domestic campaigns",
        text: "Budget weighted to the wasp and rodent seasons, where the demand actually is, rather than spread evenly across a year.",
      },
      {
        name: "Discretion in the messaging",
        text: "Domestic callers are frequently mortified. Advertising that acknowledges an unmarked van and a discreet visit converts noticeably better than advertising that does not.",
      },
      {
        name: "Commercial contract campaigns",
        text: "Food businesses, hospitality, warehousing and management companies, where compliance requirements make the contract recurring and far less price-driven.",
      },
      {
        name: "Speed-first domestic ads",
        text: "A phone action rather than a form, because nobody fills in a contact form with a rat in the kitchen.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, jobs booked and cost per job, split domestic and commercial.",
      },
    ],
    qualify: [
      "What type of pest is it?",
      "Is this a home or a business premises?",
      "How long has the problem been there?",
      "How soon do you need someone out?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "The season is the strategy",
        body: [
          "Wasp enquiries arrive in a concentrated summer burst and stop almost overnight. Rodent work rises from September as the weather turns and runs through winter. Spring is genuinely quiet.",
          "Budget that follows that curve produces materially cheaper enquiries than the same money spread flat, because you are advertising while the problem exists rather than while it is being remembered.",
        ],
      },
      {
        heading: "Commercial is where the business is worth something",
        body: [
          "A domestic callout is a one-off with a modest fee. A commercial contract is recurring revenue with compliance behind it, which makes it stickier and considerably less price-sensitive.",
          "Food businesses, hospitality and any premises subject to inspection need documented pest management, and they switch provider when service slips rather than when price rises. That is an easier market to win than it looks.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise at weekends?",
        a: "Domestic pest problems do not respect office hours and weekend clicks convert well — but only if somebody answers. If not, switch the hours off rather than pay for missed calls.",
      },
      {
        q: "Is commercial work worth chasing?",
        a: "It is usually what makes a pest control business valuable. Contracts recur, compliance drives renewal, and the buyer is not choosing on price alone.",
      },
      {
        q: "How do we handle the embarrassment factor?",
        a: "By naming it. Mentioning unmarked vehicles and discreet visits converts better than pretending the caller is not mortified, because a great many of them are.",
      },
      {
        q: "How seasonal is it really?",
        a: "Very. Two distinct peaks and a genuinely quiet spring. Planning budget around that is the single biggest efficiency available in this trade.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["drainage", "damp-proofing", "security-and-alarms"],
  },
  {
    slug: "locksmiths",
    label: "Locksmiths",
    title: "Locksmith Leads Ireland | Marketing for Locksmiths",
    description:
      "Lead generation for Irish locksmiths: emergency lockouts, lock changes and security upgrades. Built for the fifteen minutes that decide the job. From €1,500 a month.",
    h1: "Locksmith leads, at the moment the phone should ring.",
    intro: [
      "Nobody researches a locksmith. They are standing outside a door, they search, they ring the first number that looks local, and the job is gone within about fifteen minutes. There is no consideration phase and no second chance.",
      "This trade also has a reputation problem it did not create. National call centres advertise as local locksmiths, subcontract the job to whoever is nearest, and quote one price on the phone and another at the door. Every genuine locksmith in Ireland is competing against that, and it is an opportunity as much as an obstacle.",
    ],
    run: [
      {
        name: "Emergency search campaigns",
        text: "Built around the phone rather than a form, running at the hours you will actually answer, targeted to the area you can genuinely reach quickly.",
      },
      {
        name: "Local proof in the messaging",
        text: "A real address, a named person and local reviews — the things the call centres cannot show and the caller is quietly worried about.",
      },
      {
        name: "Fixed callout pricing",
        text: "Publishing a callout fee directly answers the fear of a doorstep price change. It converts better than any claim about being trustworthy.",
      },
      {
        name: "Planned security work",
        text: "Lock upgrades, insurance-standard cylinders and post-break-in work, advertised separately from lockouts.",
      },
      {
        name: "The weekly report",
        text: "Calls, cost per call and which campaign produced them.",
      },
    ],
    qualify: [
      "Are you locked out right now?",
      "Is this a home, business or vehicle?",
      "What type of lock is it?",
      "What area are you in?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Why local proof beats everything else",
        body: [
          "The caller's real anxiety is not whether you can open the door. It is whether the price quoted on the phone is the price they will be asked for at the door, and whether the person arriving is who they think they called.",
          "A real address, a face, a named business and reviews from the same town settle that in seconds, and they are precisely what a national call centre operating under a local-sounding name cannot produce.",
        ],
      },
      {
        heading: "Publish the callout fee",
        body: [
          "Most locksmiths resist this because jobs vary. But the variation is the problem being solved: the caller has heard about doorstep prices and is deciding who to trust.",
          "A clear callout fee with an honest note that the total depends on the lock removes the single biggest objection in the trade, and it filters out the callers who were only ever going to price-shop.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise 24 hours?",
        a: "Only for the hours you will answer. Out-of-hours clicks in this trade are expensive and convert extremely well, and an unanswered one is the most wasteful thing you can buy.",
      },
      {
        q: "How do we compete with the national call centres?",
        a: "By being visibly local in a way they cannot copy — address, name, photograph, reviews from your own town. The callers who value that are also the ones who do not haggle.",
      },
      {
        q: "Is a form worth having?",
        a: "Barely, for emergency work. Almost nobody types while locked out. Forms make sense only for planned security work, which should be its own campaign.",
      },
      {
        q: "What about vehicle work?",
        a: "If you do it, it deserves its own campaign — the search terms, the urgency and the price point are all different from domestic lockouts.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["security-and-alarms", "drainage", "electricians"],
  },
  {
    slug: "powerwashing",
    label: "Powerwashing",
    title: "Powerwashing Leads Ireland | Marketing for Exterior Cleaning",
    description:
      "Lead generation for Irish powerwashing and exterior cleaning businesses: driveways, roofs, patios and render. Photograph-led and sharply seasonal. From €1,500 a month.",
    h1: "Powerwashing leads, in the months people actually look outside.",
    intro: [
      "Powerwashing is the most photogenic trade in Ireland. A half-cleaned driveway with a hard line down the middle is among the most persuasive images in home improvement, and it costs nothing to capture.",
      "It is also brutally seasonal. Enquiries run from roughly March to September and all but stop after that, because nobody is looking at their patio in January. Firms that advertise evenly across the year spend half their budget into an empty room.",
    ],
    run: [
      {
        name: "Half-and-half creative",
        text: "The single most effective image in this trade, and the reason social outperforms search for most powerwashing businesses.",
      },
      {
        name: "Season-weighted budget",
        text: "Concentrated into the months people are outside, rather than spread flat across a year that is half dead.",
      },
      {
        name: "Estate and street targeting",
        text: "One cleaned driveway sells the next three on the same road. Campaigns built around specific estates rather than counties.",
      },
      {
        name: "Roof and render as separate work",
        text: "Considerably higher value than a driveway and a different decision. Advertised on its own so it is not priced against patio cleaning.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, jobs booked and cost per job.",
      },
    ],
    qualify: [
      "What needs cleaning — driveway, patio, roof or render?",
      "Roughly what area?",
      "When was it last done?",
      "When would you like it done?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "The neighbour effect is the whole business",
        body: [
          "Powerwashing sells itself down a street. A driveway cleaned on Tuesday is seen by every household that passes it, and the enquiries that follow cost nothing.",
          "That makes estate-level targeting unusually powerful here. Advertising to the road you are already working on, while you are working on it, is the cheapest work in the trade — and almost nobody does it deliberately.",
        ],
      },
      {
        heading: "Roof cleaning is the job worth advertising for",
        body: [
          "A driveway is a few hundred euro. Roof moss removal and render cleaning are worth several times that, involve access equipment and are far less contested.",
          "They are also a different decision — the homeowner is worried about damage rather than appearance — so the messaging has to change completely. Run inside a general powerwashing campaign it gets buried under cheaper enquiries.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is social better than Google here?",
        a: "Usually yes, by a distance. The before-and-after image does the selling, and most people did not wake up searching for a powerwasher — they saw one.",
      },
      {
        q: "What about winter?",
        a: "Largely dead for domestic work. Some firms fill it with commercial contracts, gutter clearing and render work; most are better off pausing and saving the budget for March.",
      },
      {
        q: "Should we publish prices?",
        a: "A from-price per standard driveway helps, because it is what people are trying to establish and it filters out the ones expecting fifty euro.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, and they matter more here than in any other trade. Half-cleaned shots, taken in daylight, from your own jobs.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["driveways-and-paving", "roofers", "landscapers"],
  },
  {
    slug: "carpentry-and-joinery",
    label: "Carpentry & joinery",
    title: "Joinery Leads Ireland | Marketing for Carpenters & Fitted Furniture",
    description:
      "Lead generation for Irish carpenters and joinery businesses: fitted wardrobes, bespoke furniture and second-fix work. Reported in booked consultations. From €1,500 a month.",
    h1: "Joinery leads for the work worth making.",
    intro: [
      "Carpentry covers two businesses with very different economics. Second-fix and site work is steady, subcontracted and priced by the day. Fitted wardrobes, bespoke furniture and made-to-measure joinery are direct to homeowner, worth several thousand a job, and chosen on how the finished work looks.",
      "Most carpenters advertise neither, because the work arrives through builders and word of mouth. That is fine until a site finishes, and it is why the ones with their own enquiries are less exposed than the ones without.",
    ],
    run: [
      {
        name: "Fitted furniture campaigns",
        text: "Wardrobes, alcove units, home offices and understairs storage — the direct-to-homeowner work with real margin.",
      },
      {
        name: "Photograph-led social",
        text: "Joinery is bought visually. Finished installs in real rooms outperform anything written.",
      },
      {
        name: "Search for the ready",
        text: "Google Ads on fitted wardrobe and bespoke joinery searches for people already costing it up.",
      },
      {
        name: "Room and spec qualification",
        text: "How many rooms, what style, and whether they have measurements — asked before your time is spent.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation.",
      },
    ],
    qualify: [
      "What type of joinery do you need?",
      "How many rooms or units?",
      "Do you have a style or finish in mind?",
      "When would you want it fitted?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Why fitted furniture is the campaign worth running",
        body: [
          "A set of fitted wardrobes is several thousand euro, takes a few days, and is decided by the homeowner rather than by a main contractor. There is no subcontract rate and nobody taking a margin above you.",
          "It also repeats. A household that has one room done frequently comes back for the next, which makes the value of winning one considerably higher than the first invoice suggests.",
        ],
      },
      {
        heading: "Getting off the subcontract treadmill",
        body: [
          "Site work through builders is reliable until it is not. When a site ends or a contractor finds somebody cheaper, the diary empties with no warning and no pipeline behind it.",
          "Direct work will not replace it overnight, and it does not need to. It needs to exist, so that a quiet month is a quiet month rather than a crisis.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there enough direct demand?",
        a: "In most areas yes, and it is thinly contested because so few carpenters advertise at all. Fitted wardrobes in particular are searched constantly.",
      },
      {
        q: "Do you need photographs?",
        a: "Yes, more than almost any trade. Finished joinery in a furnished room, in daylight. It does nearly all the selling.",
      },
      {
        q: "Should we keep contractor work?",
        a: "Of course. The point is not replacing it but having something underneath it when a site finishes.",
      },
      {
        q: "Should we publish prices?",
        a: "A from-price per wardrobe or per metre helps, because the range in this work is enormous and vague enquiries waste consultations.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["kitchens", "flooring", "builders-and-extensions"],
  },
  {
    slug: "asbestos-removal",
    label: "Asbestos removal",
    title: "Asbestos Removal Leads Ireland | Marketing for Licensed Contractors",
    description:
      "Lead generation for Irish asbestos surveying and removal contractors, domestic and commercial. Urgent, regulated, and reported in booked surveys. From €1,500 a month.",
    h1: "Asbestos leads, from people who have just found it.",
    intro: [
      "Asbestos enquiries are almost always triggered by a discovery. A builder opens a ceiling mid-renovation, a survey flags it before a sale, a demolition is halted. In every case a project has just stopped and somebody needs it moving again quickly.",
      "That urgency makes intent extremely high and price sensitivity low, but it also means the enquiry arrives frightened and uninformed. The contractor who explains the process calmly — survey, notification, removal, clearance — usually gets the job.",
    ],
    run: [
      {
        name: "Discovery-triggered campaigns",
        text: "Built around the searches people make in the hour after finding something: identification, what to do next, is it dangerous.",
      },
      {
        name: "Survey-first messaging",
        text: "Most enquiries do not yet know what they have. Selling the survey rather than the removal matches where the caller actually is.",
      },
      {
        name: "Commercial and demolition campaigns",
        text: "Contractors, management companies and demolition firms, where the work is larger, planned and repeats.",
      },
      {
        name: "Licensing made visible",
        text: "Licensed status and HSA notification handled prominently, because it is what separates you from a general builder offering to take it out.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey, split domestic and commercial.",
      },
    ],
    qualify: [
      "Where is the suspected asbestos?",
      "Is a project currently stopped because of it?",
      "Is this a home or a commercial premises?",
      "Do you need a survey or removal?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "The caller is frightened, not shopping",
        body: [
          "Somebody who has just opened a ceiling and seen something they think is asbestos is not comparing three quotes. They want to know whether their family is in danger and when work can restart.",
          "Advertising that answers those two questions calmly converts far better than advertising about capability. The competence is assumed; the reassurance is not.",
        ],
      },
      {
        heading: "Commercial repeats, domestic does not",
        body: [
          "A domestic removal happens once. A relationship with a demolition contractor, a management company or a local authority repeats indefinitely.",
          "Both are worth having, but they justify completely different acquisition costs, and running them in one campaign means the cheaper domestic enquiries take the budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise removal or surveys?",
        a: "Surveys, mostly. Most enquiries do not yet know what they have, and a survey-led message meets them where they are while still leading to the removal work.",
      },
      {
        q: "How do we stand out from general builders?",
        a: "Licensing, notification and clearance certification, stated plainly. Homeowners increasingly know enough to ask, and the ones who do are the ones worth having.",
      },
      {
        q: "Is this seasonal?",
        a: "Less than most trades. It follows construction and renovation activity rather than weather, with a mild dip over the Christmas shutdown.",
      },
      {
        q: "Is commercial worth targeting separately?",
        a: "Yes. Contractors and management companies generate repeat work and are far less price-driven than a one-off domestic caller.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["damp-proofing", "builders-and-extensions", "insulation"],
  },
  {
    slug: "skip-hire",
    label: "Skip hire & waste",
    title: "Skip Hire Leads Ireland | Marketing for Waste & Skip Companies",
    description:
      "Lead generation for Irish skip hire and waste collection companies, domestic and trade. Same-day, price-led and reported in booked deliveries. From €1,500 a month.",
    h1: "Skip hire leads, for a decision made in four minutes.",
    intro: [
      "Skip hire is bought faster than almost anything else in this list. Somebody is clearing a house or mid-renovation, they need a skip today or tomorrow, and they will ring two numbers. Price and availability decide it, in that order.",
      "That makes this an unusually pure search business. There is no consideration phase to influence and no brand loyalty to build — but there is a significant difference between firms that answer immediately with a price and firms that offer to call back.",
    ],
    run: [
      {
        name: "Availability-led search campaigns",
        text: "Same-day and next-day messaging, because that is the actual question behind the search.",
      },
      {
        name: "Size and price clarity",
        text: "Skip sizes and prices published, since the caller is comparing and will simply ring someone who did.",
      },
      {
        name: "Permit handling as a differentiator",
        text: "Whether a permit is needed and who arranges it is the thing domestic customers understand least and worry about most.",
      },
      {
        name: "Trade account campaigns",
        text: "Builders, landscapers and shopfitters who need skips repeatedly. Worth many times a one-off domestic hire.",
      },
      {
        name: "The weekly report",
        text: "Calls, bookings and cost per booking, split domestic and trade.",
      },
    ],
    qualify: [
      "What size skip do you need?",
      "What are you disposing of?",
      "Is it going on a driveway or the road?",
      "When do you need it?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Publish the prices",
        body: [
          "Firms in this trade hesitate to publish because prices vary by waste type and location. The hesitation costs them, because the caller's first question is price and they will get an answer somewhere.",
          "A clear table of sizes with from-prices, plus an honest line about what affects the total, wins the call. Vagueness sends people to the next result.",
        ],
      },
      {
        heading: "Trade accounts are the business worth building",
        body: [
          "A domestic customer hires one skip and disappears. A builder hires forty a year and a landscaper twenty, and neither is choosing on a few euro once a relationship exists.",
          "That work needs its own campaign and its own message — reliability, account terms and same-day availability rather than one-off price.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we publish prices?",
        a: "Yes. It is the first thing callers want and the reason they ring one firm over another. Vagueness loses the call before you can explain anything.",
      },
      {
        q: "How important is same-day?",
        a: "It is frequently the deciding factor. If you can do it, say so prominently; if you cannot, be clear about lead times rather than let people find out.",
      },
      {
        q: "Who handles the permit?",
        a: "Whoever explains it. Domestic customers do not know a road permit exists until told, and the firm that handles it sounds like the easy option.",
      },
      {
        q: "Is trade work worth chasing?",
        a: "It is what makes the business stable. Repeat commercial hire is worth many times a one-off domestic skip and is far less price-sensitive.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["builders-and-extensions", "landscapers", "drainage"],
  },
  {
    slug: "it-support",
    label: "IT support & MSPs",
    title: "IT Support Marketing Ireland | Leads for Managed Service Providers",
    description:
      "Marketing for Irish IT support companies and managed service providers. Built around the moments businesses actually switch, reported in booked discovery calls. From €1,500 a month.",
    h1: "IT support marketing built around the moment businesses switch.",
    intro: [
      "Nobody shops for IT support while everything is working. A business changes provider after an event — an outage that lasted too long, a security incident, a support ticket nobody answered, or a growth step their current provider cannot handle.",
      "That makes this a timing problem rather than a persuasion problem. The marketing that works is visible when the event happens, and useful enough beforehand that you are the name that comes to mind.",
    ],
    run: [
      {
        name: "Switch-trigger campaigns",
        text: "Aimed at the searches businesses make after an incident: slow response, outages, provider comparisons, exit from a contract.",
      },
      {
        name: "Compliance and security content",
        text: "Cyber insurance requirements, backup obligations and security basics — searched by the person who has just been asked a question they cannot answer.",
      },
      {
        name: "Sector-specific campaigns",
        text: "Practices, clinics, professional services and manufacturers all have different requirements and different language.",
      },
      {
        name: "Discovery call as the conversion",
        text: "The campaign optimises for a booked call, because an IT relationship is never bought from a form.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, discovery calls booked and cost per booked call.",
      },
    ],
    qualify: [
      "How many staff and devices?",
      "Do you have an IT provider currently?",
      "What prompted you to look?",
      "Are there compliance requirements involved?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Client value changes everything here",
        body: [
          "A managed service client is monthly recurring revenue that typically lasts years, and the contract usually grows with the business.",
          "Measured over a realistic lifetime, most MSPs can afford acquisition costs several times what they currently assume. Judging a discovery call against one month's fee is why so many conclude marketing does not work for them.",
        ],
      },
      {
        heading: "What to publish that competitors will not",
        body: [
          "Response times and what is actually included. The sector is notoriously vague about both, which is precisely why stating them plainly stands out.",
          "A prospect who has just spent three days waiting on their current provider is not looking for another vague promise. They are looking for somebody who will commit to a number.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is search worth it when nobody shops proactively?",
        a: "Yes, because the switch searches are specific and high intent — comparisons, provider problems, contract exits. Low volume, excellent quality.",
      },
      {
        q: "Is LinkedIn better for B2B here?",
        a: "It can work for larger targets, and it is dearer. For most Irish MSPs, search plus content aimed at the switch triggers produces better value.",
      },
      {
        q: "What should we publish?",
        a: "Response times, what is in the contract, and what happens out of hours. The sector avoids all three, so saying them is a differentiator on its own.",
      },
      {
        q: "How long is the cycle?",
        a: "Weeks after a trigger event, months without one. Retargeting matters because the person researching today may not be able to switch until a contract ends.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["accountants", "solicitors", "security-and-alarms"],
  },
  {
    slug: "agricultural-contractors",
    label: "Agricultural contractors",
    title: "Agricultural Contractor Leads Ireland | Marketing for Ag Contractors",
    description:
      "Lead generation for Irish agricultural contractors: silage, slurry, reseeding, hedge cutting and tillage. Built around the weeks that matter. From €1,500 a month.",
    h1: "Agricultural contractor marketing built around a very short year.",
    intro: [
      "Agricultural contracting is decided in a handful of weeks. Silage, slurry spreading and tillage all happen inside narrow weather-dependent windows, and a farmer who has not chosen a contractor by then is ringing whoever answers.",
      "It is also a relationship business more than almost any other in this list. Farmers use the same contractor for years and switch reluctantly, usually after a season where the contractor did not turn up when the weather allowed. That makes acquisition hard and retention extremely valuable.",
    ],
    run: [
      {
        name: "Pre-season campaigns",
        text: "Visible in the weeks before each window opens, because once it opens nobody is researching — they are ringing.",
      },
      {
        name: "Service-specific campaigns",
        text: "Silage, slurry, reseeding and hedge cutting searched separately and by different farmers at different times of year.",
      },
      {
        name: "Local and parish-level targeting",
        text: "Farm contracting is intensely local. A campaign drawn tightly around the area you genuinely travel outperforms a county one.",
      },
      {
        name: "Kit and capacity as the message",
        text: "Machinery, crew size and turnaround are what farmers actually judge. Photographs of the fleet working do more than any claim.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, bookings and cost per booking, by service.",
      },
    ],
    qualify: [
      "What service do you need?",
      "Roughly what acreage?",
      "What area are you in?",
      "When do you need it done?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Everything happens in about six weeks",
        body: [
          "Silage is the clearest example: the window opens when the weather allows, every farmer wants the same fortnight, and capacity decides who gets served.",
          "Advertising during that window is largely wasted — people are ringing, not researching. The campaign that matters runs in the weeks beforehand, when farmers are deciding who to ring.",
        ],
      },
      {
        heading: "Retention is worth more than acquisition",
        body: [
          "Farmers stay with a contractor for years and change only after being let down, usually on timing rather than price.",
          "That means the marketing budget is better aimed at replacing natural churn and filling genuine capacity than at trying to take clients from a contractor who is doing a decent job. It also means one bad season costs more than any campaign can recover.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do farmers actually search online?",
        a: "Increasingly, yes — particularly younger farmers and for services outside their usual contractor's range. It is a smaller market than most trades, and correspondingly uncontested.",
      },
      {
        q: "Is Facebook worth it?",
        a: "Often more than search in rural areas. Parish and farming community pages are well followed and machinery content gets genuine engagement.",
      },
      {
        q: "When should we advertise?",
        a: "In the weeks before each window, not during. Once silage starts, nobody is reading anything.",
      },
      {
        q: "What matters most in the message?",
        a: "Capacity and timing. Farmers are judging whether you will turn up when the weather allows, which is the thing that actually decides the season.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["fencing-and-gates", "tree-surgery", "drainage"],
  },
  {
    slug: "home-care",
    label: "Home care",
    title: "Home Care Marketing Ireland | Enquiries for Care Providers",
    description:
      "Marketing for Irish home care and elder care providers. Written for the family member making the decision, reported in booked assessments. From €1,500 a month.",
    h1: "Home care marketing written for the person actually deciding.",
    intro: [
      "The person who needs home care is almost never the person searching for it. It is an adult son or daughter, usually after a fall, a hospital discharge or a slow realisation that a parent is not coping — and usually feeling guilty about it.",
      "Almost all home care advertising speaks to the wrong person, in the wrong tone. It lists services when the reader is looking for reassurance that they are doing the right thing, and that mismatch is why so much of it performs poorly.",
    ],
    run: [
      {
        name: "Family-facing campaigns",
        text: "Written for the adult child making the decision, addressing the questions and the guilt they actually arrive with.",
      },
      {
        name: "Trigger-event targeting",
        text: "Hospital discharge, a fall, a diagnosis. These are the moments the search happens, and the messaging should match them.",
      },
      {
        name: "Assessment as the conversion",
        text: "The campaign optimises for a booked home assessment, which is the step that leads to care actually starting.",
      },
      {
        name: "Funding and HSE content",
        text: "What is funded, what is not and how the two combine. It is the most searched and least clearly answered question in the sector.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, assessments booked and cost per assessment.",
      },
    ],
    qualify: [
      "Who is the care for?",
      "What kind of support is needed?",
      "Is this after a hospital stay or a change at home?",
      "How soon is it needed?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Write to the daughter, not the patient",
        body: [
          "The searcher is typically a working adult in their forties or fifties, coordinating siblings, worried about cost and quietly wondering whether they are failing their parent.",
          "Advertising that acknowledges that converts several times better than advertising describing personal care services. The decision is emotional before it is practical, and pretending otherwise reads as cold.",
        ],
      },
      {
        heading: "The constraint is staff, not enquiries",
        body: [
          "Most Irish home care providers can generate more enquiries than they can serve, because carers are the bottleneck.",
          "That changes what marketing should do. Generating demand you cannot meet damages your reputation with families and with the discharge coordinators who refer. Recruitment campaigns are frequently the more valuable spend, and we will say so rather than sell you enquiries you cannot fulfil.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who should the advertising speak to?",
        a: "The adult child, nearly always. They are the one searching, comparing and deciding, and they are the one who needs reassuring.",
      },
      {
        q: "Should we advertise if we cannot staff the hours?",
        a: "No, and we will tell you so. Taking enquiries you cannot serve damages you with families and with the people who refer to you. Recruitment first in that case.",
      },
      {
        q: "What about HSE funded work?",
        a: "Different pipeline, largely relationship-driven. This is about private enquiries, though families frequently search for both at once and need the difference explained.",
      },
      {
        q: "Is social appropriate here?",
        a: "Yes, carefully. It reaches the right age group well, but the tone has to be respectful — no fear, no stock photographs of distressed older people.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["physiotherapy", "veterinary", "dentists"],
  },
  {
    slug: "opticians",
    label: "Opticians",
    title: "Optician Marketing Ireland | Patient Leads for Practices",
    description:
      "Marketing for Irish opticians and optometry practices. Built around the recall cycle and the tests people do not know they are entitled to. From €1,500 a month.",
    h1: "Optician marketing built around recall, not offers.",
    intro: [
      "An optical practice has an unusual advantage: a built-in two-year recall cycle and a patient list that should return without being persuaded. Most of the revenue that gets chased with discounting is already sitting in the database.",
      "The second opportunity is entitlement. A significant number of people in Ireland do not know they can get an eye test through PRSI, or that children's tests are covered, and they postpone indefinitely because they assume it will cost them.",
    ],
    run: [
      {
        name: "Recall campaigns to your own list",
        text: "The cheapest revenue in the practice, and the one most often left to an automated email nobody opens.",
      },
      {
        name: "Entitlement campaigns",
        text: "PRSI and medical card eligibility explained plainly, reaching people who have been postponing on a false assumption.",
      },
      {
        name: "Children's eye test campaigns",
        text: "Timed to the school year, aimed at parents, and among the least contested searches in the sector.",
      },
      {
        name: "Specialist service campaigns",
        text: "Dry eye, myopia management and contact lens work, advertised separately from general testing.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, appointments booked and cost per appointment.",
      },
    ],
    qualify: [
      "Is this for an adult or a child?",
      "When was your last eye test?",
      "Do you have PRSI or a medical card?",
      "Which days suit you best?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "The list is the asset",
        body: [
          "Two years is long enough that people forget, move practice or simply drift. A recall that is a single automated email two years later loses a large share of them.",
          "A proper recall sequence — reminder, follow-up, and a campaign to those who did not respond — routinely recovers more appointments than any acquisition spend, and costs a fraction.",
        ],
      },
      {
        heading: "Entitlement is the best acquisition message available",
        body: [
          "Plenty of adults in Ireland have never checked whether they are entitled to a funded eye test, and assume it will cost them sixty euro they would rather not spend.",
          "Explaining it clearly reaches people who have postponed for years, and they arrive grateful rather than price-shopping. Very few practices lead with it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is discounting frames worth it?",
        a: "It attracts people comparing on price and trains your existing patients to wait for offers. Recall and entitlement messaging generally produce better appointments at lower cost.",
      },
      {
        q: "How important is the recall list?",
        a: "It is the single most valuable asset in the practice, and the most neglected. A proper sequence beats any acquisition campaign we could run.",
      },
      {
        q: "Should we advertise children's tests?",
        a: "Yes, timed to the school year. Parents search for it, coverage is widely misunderstood, and competition is minimal.",
      },
      {
        q: "Is social worth it?",
        a: "For frames and for children's testing, moderately. For general eye tests, search and your Google profile do most of the work.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["dentists", "physiotherapy", "skin-clinics"],
  },
  {
    slug: "restaurants-and-cafes",
    label: "Restaurants & cafés",
    title: "Restaurant Marketing Ireland | Fill Midweek Covers",
    description:
      "Marketing for Irish restaurants and cafés: midweek covers, direct bookings and the commission you stop paying. Reported in bookings. From €1,500 a month.",
    h1: "Restaurant marketing aimed at the nights that do not sell themselves.",
    intro: [
      "A restaurant does not need more Saturdays. Saturdays fill. What decides whether the year works is Tuesday, Wednesday and the first three weeks of January, and a table empty on a Tuesday is revenue that cannot be recovered on Saturday.",
      "The second thing quietly costing money is commission. Every booking arriving through a platform carries a cut, and a booking the restaurant generated itself does not. Shifting even a portion of covers to direct is usually worth more than any increase in total bookings.",
    ],
    run: [
      {
        name: "Midweek campaigns",
        text: "Offers and messaging aimed specifically at your quiet nights, rather than blanket discounting that subsidises the nights you would have filled anyway.",
      },
      {
        name: "Direct booking campaigns",
        text: "Driving reservations to your own system instead of a platform, so the cover arrives without a commission attached.",
      },
      {
        name: "Google profile and photo work",
        text: "For restaurants the profile is the shopfront. Photographs, menus and hours do more than any paid campaign.",
      },
      {
        name: "Occasion campaigns",
        text: "Valentine's, Mother's Day, Christmas parties and communions, planned well in advance rather than posted about the week before.",
      },
      {
        name: "The weekly report",
        text: "Bookings, cost per booking and which nights they landed on.",
      },
    ],
    qualify: [
      "Which night are you looking to book?",
      "How many people?",
      "Is it a special occasion?",
      "Have you dined with us before?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Commission is the number nobody calculates",
        body: [
          "Platform bookings feel free because the cost is deducted rather than invoiced. Work out what a year of commission actually comes to and it is frequently a full-time wage.",
          "You will not replace platforms entirely and should not try — they bring genuine discovery. But a campaign that moves a share of repeat customers to booking direct pays for itself several times over, and those customers were already yours.",
        ],
      },
      {
        heading: "Discount the gap, never the whole week",
        body: [
          "A twenty percent offer running all week is mostly taken up by people who would have paid full price at the weekend. You have discounted your best nights to fill your worst.",
          "The same offer restricted to Tuesday and Wednesday reaches people with flexible plans and adds covers instead of removing margin.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are the booking platforms worth it?",
        a: "For discovery, yes. For repeat customers, no — every returning diner who books through a platform is costing you commission on a relationship you already own. The aim is to shift the repeats, not to leave entirely.",
      },
      {
        q: "Should we advertise at the weekend?",
        a: "Rarely. If Saturday fills without help, advertising it is spending money to move a booking you already had. The budget belongs on the quiet nights.",
      },
      {
        q: "How important is the Google profile?",
        a: "For a restaurant it is the single most valuable thing you own. Photographs, an up-to-date menu and correct hours decide more bookings than any campaign.",
      },
      {
        q: "Is Instagram worth the effort?",
        a: "For food, genuinely yes — it is one of the few sectors where organic content still earns real reach. It needs to be your own food, photographed properly, not stock.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["hotels-and-guesthouses", "wedding-venues", "gyms-and-fitness"],
  },
  {
    slug: "hotels-and-guesthouses",
    label: "Hotels & guesthouses",
    title: "Hotel Marketing Ireland | Direct Bookings for Hotels & B&Bs",
    description:
      "Marketing for Irish hotels, guesthouses and B&Bs. Built around direct bookings and the shoulder season rather than filling July. From €1,500 a month.",
    h1: "Hotel marketing built around direct bookings and the quiet months.",
    intro: [
      "An Irish hotel has two problems and neither is July. July sells itself. The problems are the shoulder months, and the share of bookings arriving through online travel agents at a commission of fifteen to twenty percent.",
      "Those two are connected. A property heavily dependent on OTAs pays the most commission exactly when it is most desperate for occupancy, because the quiet months are when the platforms have the most leverage. Building direct demand is the only way out of that, and it has to be built before you need it.",
    ],
    run: [
      {
        name: "Direct booking campaigns",
        text: "Aimed at people already considering you, with the rate advantage and the reason to book direct made obvious.",
      },
      {
        name: "Shoulder season campaigns",
        text: "Spring and autumn packages built around a reason to come rather than a discount on a room.",
      },
      {
        name: "Brand defence on search",
        text: "Your own name is searched by people about to book. If an OTA outranks you on it, you are paying commission for a customer who was looking for you.",
      },
      {
        name: "Local market campaigns",
        text: "Staycations, leisure breaks and the dining and spa business that does not depend on room nights at all.",
      },
      {
        name: "The weekly report",
        text: "Direct bookings, cost per booking and the commission avoided.",
      },
    ],
    qualify: [
      "What dates are you considering?",
      "How many guests and rooms?",
      "Is this leisure or business?",
      "Are you interested in a package or room only?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Defending your own name is the cheapest win available",
        body: [
          "Search your hotel by name and see who appears above you. If it is an OTA, then people specifically looking for your property are being routed through a platform that takes a cut of a booking you had already won.",
          "Brand-term campaigns are inexpensive because nobody else is bidding hard on your name, and they recover the highest-intent traffic you will ever have.",
        ],
      },
      {
        heading: "Build shoulder demand before you need it",
        body: [
          "The instinct is to advertise when occupancy drops. By then you are competing with every other property doing the same thing, and the only lever left is price.",
          "Campaigns run in advance of the quiet months, built around a reason to visit rather than a rate, produce bookings that do not erode your average room rate for the rest of the year.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we really reduce OTA dependence?",
        a: "Partly, and partly you should not want to — platforms genuinely bring discovery you cannot replicate. The realistic goal is shifting repeat and direct-intent guests, which is where the commission is pure loss.",
      },
      {
        q: "Should we undercut the OTA rate?",
        a: "Check your rate parity terms first. Where permitted, offering something rather than a lower price — breakfast, late checkout, a drink on arrival — usually works better and avoids the issue entirely.",
      },
      {
        q: "What about the quiet months?",
        a: "Advertise ahead of them with a reason to come, not during them with a discount. Discounting into a quiet month trains guests to wait.",
      },
      {
        q: "Is the food and drink side worth advertising separately?",
        a: "Frequently yes. It draws local custom that does not depend on occupancy and it fills the same quiet midweek periods.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["restaurants-and-cafes", "wedding-venues", "med-spas"],
  },
  {
    slug: "wedding-venues",
    label: "Wedding venues",
    title: "Wedding Venue Marketing Ireland | Enquiries & Showrounds",
    description:
      "Marketing for Irish wedding venues. One enquiry is worth tens of thousands, the decision takes a year, and the showround is where it is won. From €1,500 a month.",
    h1: "Wedding venue marketing measured in showrounds, not enquiries.",
    intro: [
      "A wedding is among the largest single purchases most couples ever make, and the venue takes the biggest share of it. One booking is worth what a restaurant earns in a fortnight, which changes entirely what a venue can afford to spend attracting one.",
      "It is also the longest decision in hospitality. Couples look twelve to twenty-four months ahead, visit three or four venues, and decide after walking the room. Everything before the showround exists to get them through the door.",
    ],
    run: [
      {
        name: "Showround-led campaigns",
        text: "The showround is the conversion event, not the enquiry. Campaigns optimise for a booked visit, because that is what predicts a wedding.",
      },
      {
        name: "Long-horizon retargeting",
        text: "Couples take months to decide. Staying visible across that period costs little and is where most venues quietly lose bookings to whoever stayed in front of them.",
      },
      {
        name: "Real weddings as the creative",
        text: "Photographs of actual weddings in your actual rooms. Couples are imagining themselves in the space and nothing else does that job.",
      },
      {
        name: "Date-gap campaigns",
        text: "Specific unsold dates, particularly off-peak and midweek, advertised to couples with flexibility.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, showrounds booked and cost per showround.",
      },
    ],
    qualify: [
      "What date are you considering?",
      "Roughly how many guests?",
      "Have you set a budget?",
      "Would you like to arrange a viewing?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "What a venue can afford per enquiry",
        body: [
          "If a wedding is worth twenty thousand or more to the venue, and one showround in three becomes a booking, and one enquiry in three becomes a showround, then nine enquiries produce a booking.",
          "Even at a hundred euro an enquiry that is nine hundred euro of marketing against twenty thousand of revenue. Venues routinely reject costs per enquiry that the arithmetic says are comfortable, because they are comparing them to restaurant numbers.",
        ],
      },
      {
        heading: "The gap between enquiry and decision is where venues lose",
        body: [
          "A couple enquires in March and books in September. Most venues send a brochure in March and hope.",
          "The venues that win stay present through those six months — retargeting, occasional content, an open day invitation. It is inexpensive and it is the difference between being one of four brochures and being the venue they kept coming back to.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a wedding fair still worth it?",
        a: "They generate volume but the enquiries are cold and everyone is at them. They work best as one source among several, not the whole strategy.",
      },
      {
        q: "How far ahead should we advertise?",
        a: "Twelve to twenty-four months for the main season. There is also a shorter cycle of couples booking within a year, and they are usually flexible on dates, which is useful for filling gaps.",
      },
      {
        q: "Do we need professional photography?",
        a: "Yes, and it is the highest-return spend available to a venue. Couples choose on how the room looks in photographs before they ever visit.",
      },
      {
        q: "Should we publish prices?",
        a: "A from-price or a package range helps. Couples are budgeting, and venues that hide pricing produce showrounds with people who could never afford them.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["hotels-and-guesthouses", "restaurants-and-cafes", "med-spas"],
  },
  {
    slug: "barbers",
    label: "Barbers",
    title: "Barber Shop Marketing Ireland | Fill the Chair",
    description:
      "Marketing for Irish barber shops: booking apps, walk-ins and the quiet hours. Low ticket, high frequency, tiny radius. From €1,500 a month.",
    h1: "Barber marketing for a business measured in chair-hours.",
    intro: [
      "A barber shop sells time in a chair and nothing else. An hour that passes empty cannot be sold later, and a customer who comes every four weeks instead of every six is worth fifty percent more without a single new customer being found.",
      "The radius is also tiny. Almost nobody travels far for a haircut, which means the entire market is a few streets and the competition is whoever else is on them. That makes broad advertising wasteful and local presence everything.",
    ],
    run: [
      {
        name: "Quiet-hour campaigns",
        text: "Tuesday mornings and early afternoons, aimed at people with flexible schedules rather than discounting the Saturday queue.",
      },
      {
        name: "Google profile work",
        text: "For a barber the profile is the business. Photographs of actual cuts, correct hours and reviews decide more walk-ins than anything paid.",
      },
      {
        name: "Rebooking and frequency",
        text: "The cheapest growth available is existing customers returning slightly sooner. Reminders do more than acquisition.",
      },
      {
        name: "New-opening and new-barber campaigns",
        text: "Tightly targeted to a few streets, because that is the whole catchment.",
      },
      {
        name: "The weekly report",
        text: "Bookings, cost per booking and which hours filled.",
      },
    ],
    qualify: [
      "Which barber would you like?",
      "What day and time suits?",
      "Is this your first visit?",
      "What type of cut are you after?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Frequency beats acquisition",
        body: [
          "A customer coming every four weeks instead of every six is worth fifty percent more, and costs nothing to acquire because you already have them.",
          "Rebooking in the chair before they leave, plus a reminder when they are due, moves that number more reliably than any campaign. It is unglamorous and it is where the growth is.",
        ],
      },
      {
        heading: "Your catchment is smaller than you think",
        body: [
          "People do not travel for a haircut. If you advertise to a city you are paying to reach people who will never walk past your door.",
          "A radius of a kilometre or two around the shop, plus the streets people actually commute along, is usually the whole addressable market — and targeting it that tightly makes a small budget go a long way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a booking app worth it?",
        a: "For most shops yes, because it reduces no-shows and captures the rebooking. Keep walk-ins available though — a significant share of barber trade is unplanned.",
      },
      {
        q: "Should we discount to fill quiet hours?",
        a: "Targeted at genuinely quiet times, yes. Across the board, no — you would be discounting the Saturday queue that was coming anyway.",
      },
      {
        q: "How important are photographs?",
        a: "Very. Cuts you have actually done, on real customers, with permission. It is what people judge a barber on and stock images are obvious.",
      },
      {
        q: "Is social media worth it?",
        a: "Instagram genuinely works for barbers because the output is visual and shareable. It also recruits — barbers choose where to work partly on the shop's profile.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["skin-clinics", "gyms-and-fitness", "med-spas"],
  },
  {
    slug: "driving-schools",
    label: "Driving schools",
    title: "Driving School Marketing Ireland | Pupil Leads for Instructors",
    description:
      "Marketing for Irish driving schools and ADIs: EDT blocks, pretest lessons and the test waiting list. Reported in booked lessons. From €1,500 a month.",
    h1: "Driving school marketing built around the test waiting list.",
    intro: [
      "Demand for driving lessons in Ireland is shaped by something outside any instructor's control: the test waiting list. When waits are long, learners book pretest lessons in a rush and demand spikes; when they shorten, the pattern changes entirely.",
      "The other structural fact is EDT. Every learner needs twelve essential lessons, which means a new pupil is not one booking but a block — and that changes what an instructor can afford to spend winning one.",
    ],
    run: [
      {
        name: "EDT block campaigns",
        text: "Aimed at new learners who have just got their permit, where the enquiry is worth twelve lessons rather than one.",
      },
      {
        name: "Pretest and refresher campaigns",
        text: "A separate, urgent market — learners with a test date approaching who need hours quickly.",
      },
      {
        name: "Area-tight targeting",
        text: "Instructors work a defined patch. Campaigns drawn around where you actually collect pupils rather than a county.",
      },
      {
        name: "Automatic transmission campaigns",
        text: "A growing, under-served and less contested segment in most areas.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, lessons booked and cost per booked block.",
      },
    ],
    qualify: [
      "Do you have your learner permit?",
      "Have you done any EDT lessons yet?",
      "Do you have a test date?",
      "Manual or automatic?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "A pupil is twelve lessons, not one",
        body: [
          "Instructors tend to judge a lead against the price of a single lesson, which makes almost any marketing look expensive.",
          "A new EDT learner is a block of twelve, often with pretest lessons afterwards. Valued properly, the affordable cost per enquiry is several times what most instructors assume, and the ones who work it out can outbid everyone else in their area.",
        ],
      },
      {
        heading: "The test waiting list drives everything",
        body: [
          "When waits are long, learners with a date scramble for pretest hours and are far less price-sensitive. When waits shorten, EDT demand smooths out.",
          "Watching that and shifting budget between the two campaigns is the single most useful thing an instructor can do with advertising, and almost nobody does it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is automatic worth targeting separately?",
        a: "Yes. Demand is growing, supply of automatic instructors is thin in most areas, and the search term is specific enough to be cheap.",
      },
      {
        q: "Should we advertise price per lesson?",
        a: "Usually yes, or a block price. It is what learners compare and being vague produces enquiries from people shopping purely on cost.",
      },
      {
        q: "How wide should the targeting be?",
        a: "As wide as you will genuinely drive to collect a pupil, and no wider. Instructors lose money advertising across a county they do not cover.",
      },
      {
        q: "Do reviews matter for an instructor?",
        a: "Considerably. Learning to drive is nerve-wracking and parents are often involved in choosing. Reviews mentioning patience do more than any advert.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["car-garages", "gyms-and-fitness", "creches"],
  },
  {
    slug: "creches",
    label: "Creches & childcare",
    title: "Creche Marketing Ireland | Enrolments for Childcare Providers",
    description:
      "Marketing for Irish creches and childcare providers. Honest about when the constraint is staffing rather than demand. From €1,500 a month.",
    h1: "Childcare marketing, and when not to do it.",
    intro: [
      "A great many Irish creches do not have a demand problem. They have waiting lists, and the thing stopping them growing is staff and ratios rather than enquiries. Advertising into that produces frustrated parents and damages a reputation that runs almost entirely on word of mouth.",
      "Where marketing genuinely helps is narrower and worth doing properly: a new opening, a new room, a specific age band with space, or a recruitment problem that is capping enrolment.",
    ],
    run: [
      {
        name: "Space-specific campaigns",
        text: "Advertising the age bands and days you actually have room for, rather than the creche in general.",
      },
      {
        name: "New opening and new room campaigns",
        text: "The one situation where volume marketing genuinely fits childcare.",
      },
      {
        name: "Recruitment campaigns",
        text: "Frequently the more valuable spend. If staff are the constraint, hiring is what increases enrolment.",
      },
      {
        name: "NCS and funding clarity",
        text: "The subsidy questions parents actually search, answered plainly.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, viewings booked and cost per enrolment.",
      },
    ],
    qualify: [
      "What age is your child?",
      "Which days do you need?",
      "When would you need to start?",
      "Are you claiming NCS?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "We will tell you not to advertise",
        body: [
          "If you have a waiting list and no capacity, generating enquiries costs you money and goodwill. Parents who are turned away talk, and in childcare word of mouth is most of your marketing whether you manage it or not.",
          "That is an unusual thing for an agency to say and it is the honest answer more often than not in this sector.",
        ],
      },
      {
        heading: "Recruitment is usually the real brief",
        body: [
          "When staffing caps enrolment, every additional qualified practitioner unlocks places that are already spoken for.",
          "Campaigns aimed at practitioners — reaching people already in the sector, and people returning to it — are frequently worth several times a parent-facing campaign, and almost nobody runs them.",
        ],
      },
    ],
    faqs: [
      {
        q: "We have a waiting list. Should we advertise?",
        a: "Probably not, and we will say so. Enquiries you cannot fulfil cost you money and irritate the parents who talk about you. Recruitment first if staffing is the cap.",
      },
      {
        q: "What about a new room opening?",
        a: "That is exactly when marketing works. Specific, time-bound, with real availability behind it.",
      },
      {
        q: "How important is the Google profile?",
        a: "Very. Parents research locally and read every review carefully. It is worth more attention than any campaign.",
      },
      {
        q: "Should we advertise fees?",
        a: "A fee range plus clarity on NCS helps enormously. It is the question every parent has and most providers make them ring to find out.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["home-care", "driving-schools", "physiotherapy"],
  },
  {
    slug: "funeral-directors",
    label: "Funeral directors",
    title: "Funeral Director Marketing Ireland | Pre-Planning & Local Presence",
    description:
      "Marketing for Irish funeral directors, handled with the restraint the work requires. Built around pre-planning and local presence, not urgency. From €1,500 a month.",
    h1: "Funeral director marketing, handled the way the work deserves.",
    intro: [
      "Most marketing advice is useless here and some of it is offensive. You cannot run urgency campaigns, you should not target the recently bereaved, and any agency proposing either does not understand the work or does not care.",
      "What is legitimate is being present and clearly findable before you are needed, and offering pre-planning to people who want to spare their families a decision. Almost every family choosing a funeral director is doing so in the worst week of their life, and they choose whoever they already know of.",
    ],
    run: [
      {
        name: "Local presence and profile work",
        text: "Being findable, with correct information and a dignified profile. For this sector it is most of the job.",
      },
      {
        name: "Pre-planning campaigns",
        text: "The one genuinely marketable service — aimed at older adults and their families, planning calmly and in advance.",
      },
      {
        name: "Information rather than persuasion",
        text: "What happens, what it costs, what the options are. Families search for this and almost nobody answers it plainly.",
      },
      {
        name: "Restraint as policy",
        text: "No urgency messaging, no targeting based on bereavement signals, no retargeting anybody who read a funeral page. We will decline those.",
      },
      {
        name: "The weekly report",
        text: "Enquiries and pre-planning consultations, reported quietly and without pressure metrics.",
      },
    ],
    qualify: [
      "Is this an immediate need or planning ahead?",
      "Which area are you in?",
      "Burial or cremation?",
      "Would you prefer a call or an appointment?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "What we will not do",
        body: [
          "We will not build audiences from bereavement signals, run urgency messaging, or retarget somebody who visited a funeral page. It is technically possible and it is indecent.",
          "If another agency offers it, that is a reason to be careful of them rather than a competitive disadvantage on our part. Families notice, and in a business built entirely on local reputation, being the firm that behaved well matters more than any campaign.",
        ],
      },
      {
        heading: "Pre-planning is the legitimate product",
        body: [
          "A growing number of people want to arrange and pay for their own funeral so their family does not have to decide anything. It is a considered purchase, made calmly, and it can be advertised without any of the above problems.",
          "It also builds the relationship long before it is needed, which is precisely how families end up choosing one firm over another.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you advertise funeral services at all?",
        a: "Presence and information, yes. Urgency and bereavement targeting, no — we will not do it and you should not want it. Pre-planning is the service that can be marketed properly.",
      },
      {
        q: "What matters most for our firm?",
        a: "Being known locally before we are needed, and being easy to find with the right information when we are. The Google profile and clear, plain information do more than advertising.",
      },
      {
        q: "Should we publish prices?",
        a: "Yes. Families are anxious about cost at the worst possible moment and are grateful to anyone who tells them plainly. It is also increasingly expected.",
      },
      {
        q: "Is social media appropriate?",
        a: "Sparingly and carefully — community presence, notices where families want them, nothing promotional. Tone matters more here than anywhere else we work.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["solicitors", "home-care", "insurance-brokers"],
  },
  {
    slug: "financial-advisors",
    label: "Financial advisors",
    title: "Financial Advisor Marketing Ireland | Client Leads for Advisors",
    description:
      "Marketing for Irish financial advisors and pension specialists. Central Bank aware, built around the life events that actually trigger advice. From €1,500 a month.",
    h1: "Financial advisor marketing built around the moments people act.",
    intro: [
      "Nobody wakes up wanting financial advice. They act on an event: a job change with a pension to move, a redundancy, turning fifty and doing the arithmetic, an inheritance, or a business reaching the point where extraction becomes a real question.",
      "That makes this a timing and trust business rather than a persuasion one. The advisors who grow are visible at those moments and credible enough that somebody will discuss their money with them.",
    ],
    run: [
      {
        name: "Life-event campaigns",
        text: "Pension transfers, retirement planning, redundancy and inheritance — the specific triggers that produce searches with genuine intent.",
      },
      {
        name: "Pension consolidation campaigns",
        text: "Most people have two or three old pensions they have lost track of, and searches around finding and moving them are specific and under-contested.",
      },
      {
        name: "Compliance-aware creative",
        text: "You are Central Bank regulated. Everything is written to respect that and sent for your approval before it runs.",
      },
      {
        name: "Trust content",
        text: "How you are paid, what you are authorised to advise on, and what a first meeting involves. Almost nobody answers these plainly and they are what people want to know.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, consultations booked and cost per consultation.",
      },
    ],
    qualify: [
      "What prompted you to look for advice?",
      "Are you planning for retirement or something else?",
      "Do you have existing pensions or policies?",
      "Would you prefer a call or a meeting?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Be explicit about how you are paid",
        body: [
          "The single most common reason people hesitate is not knowing whether the advice they get is shaped by commission.",
          "Advisors who state plainly how they are remunerated — fee, commission, or both, and on what — convert considerably better than those who leave it unsaid, because the question is being asked silently regardless.",
        ],
      },
      {
        heading: "The pension nobody can find",
        body: [
          "A large number of people in Ireland have pensions from previous jobs they cannot account for and have quietly given up on.",
          "Campaigns aimed at finding, consolidating and understanding them reach people with a real, nagging problem and almost no competition, and they open a relationship that usually extends well beyond the original question.",
        ],
      },
    ],
    faqs: [
      {
        q: "What are we allowed to say?",
        a: "Within Central Bank obligations, a great deal — what you advise on, who you work with, how you are paid, what a first meeting involves. What you cannot do is promise outcomes or imply guarantees. Everything goes to you for approval.",
      },
      {
        q: "Which services are worth advertising?",
        a: "Pension transfers and consolidation, retirement planning, and protection around life events. They have clear triggers and specific searches.",
      },
      {
        q: "Is LinkedIn worth it?",
        a: "For business owners and professionals, yes. It is dearer than search and better for credibility than direct enquiries.",
      },
      {
        q: "How long is the cycle?",
        a: "Weeks to months. People think about money for a long time before acting, so staying visible matters more than being loudest once.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["insurance-brokers", "mortgage-brokers", "accountants"],
  },
  {
    slug: "engineers-and-surveyors",
    label: "Engineers & surveyors",
    title: "Engineer & Surveyor Leads Ireland | Surveys, Snag Lists & Certs",
    description:
      "Lead generation for Irish engineers and surveyors: pre-purchase surveys, snag lists, certificates of compliance and boundary work. From €1,500 a month.",
    h1: "Engineer and surveyor leads tied to the property market.",
    intro: [
      "Most of this work is triggered by a transaction. Somebody is buying, selling, building or refinancing, and a survey, a snag list or a certificate is the thing standing between them and the next step.",
      "That makes the enquiries urgent and deadline-driven, and it makes the work highly repeatable — because the estate agents, solicitors and builders who encounter the need constantly are a far better source than any individual homeowner.",
    ],
    run: [
      {
        name: "Pre-purchase survey campaigns",
        text: "Buyers searching before a deposit goes down, with a deadline and a clear reason to act.",
      },
      {
        name: "Snag list campaigns",
        text: "New-build purchasers, concentrated around completing developments — targetable as a group rather than individually.",
      },
      {
        name: "Certificate and compliance campaigns",
        text: "Certificates of compliance and exemption, usually needed urgently during a sale.",
      },
      {
        name: "Referrer relationships",
        text: "Estate agents, solicitors and builders send this work repeatedly. Marketing supports the relationship rather than replacing it.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey, by work type.",
      },
    ],
    qualify: [
      "What type of survey or certificate do you need?",
      "Is there a deadline or closing date?",
      "What type of property is it?",
      "What area is the property in?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "New developments are a concentrated market",
        body: [
          "A development handing over fifty or a hundred units produces the same number of snag list enquiries inside a few months, from people who mostly do not know what a snag list involves.",
          "Targeting a specific development while it completes is dramatically more efficient than advertising snagging services across a county, and very few practices do it.",
        ],
      },
      {
        heading: "Referrers are worth more than any campaign",
        body: [
          "An estate agent or solicitor who sends work does so repeatedly and without acquisition cost.",
          "Advertising supports that rather than replacing it — being visible and obviously competent makes you the name they give, and keeps you in mind when the last job went smoothly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this seasonal?",
        a: "It follows the property market rather than the weather, with the usual dip around Christmas and a rise in spring and autumn transaction volume.",
      },
      {
        q: "Should we publish survey prices?",
        a: "A from-price helps for standard residential work. It is what buyers compare and vagueness sends them elsewhere.",
      },
      {
        q: "How do we reach new-build buyers?",
        a: "By targeting developments as they complete. The cohort all need the same thing at the same time and can be reached as a group.",
      },
      {
        q: "Is commercial work different?",
        a: "Entirely. Longer cycles, relationship-driven, and better served by direct contact than advertising. Domestic and transaction-led work is where campaigns pay.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["architects", "estate-agents", "builders-and-extensions"],
  },
  {
    slug: "shopfitting",
    label: "Shopfitting",
    title: "Shopfitting Leads Ireland | Marketing for Commercial Fit-Out",
    description:
      "Lead generation for Irish shopfitting and commercial fit-out contractors. Project-based, relationship-led, and reported in site visits. From €1,500 a month.",
    h1: "Shopfitting leads from businesses about to open a door.",
    intro: [
      "Shopfitting is a project business with long gaps and large numbers. One fit-out can be worth a quarter of a year's turnover, and the enquiries arrive from people who have just signed a lease and suddenly have a deadline they cannot move.",
      "The difficulty is that they arrive irregularly and from a small pool. A campaign producing forty enquiries a month would be the wrong campaign; four good ones from businesses with funding and a lease would be a strong year.",
    ],
    run: [
      {
        name: "Lease-trigger campaigns",
        text: "Aimed at the searches made immediately after a unit is signed, when the deadline is real and the budget exists.",
      },
      {
        name: "Sector-specific campaigns",
        text: "Pharmacy, hospitality, retail and clinical fit-outs have different requirements, timelines and language.",
      },
      {
        name: "Portfolio as the argument",
        text: "Completed fit-outs, photographed properly. This is a business where the previous job wins the next one.",
      },
      {
        name: "Qualification before the site visit",
        text: "Lease status, size, sector and timeline, asked before anybody travels.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, site visits booked and cost per visit.",
      },
    ],
    qualify: [
      "What type of business is the fit-out for?",
      "Have you signed the lease?",
      "Roughly what size is the unit?",
      "When do you need to open?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Few, large and irregular",
        body: [
          "Judging this against a trades benchmark of cost per lead will mislead you. Four enquiries in a month from businesses with signed leases is a good month.",
          "The number that matters is cost per project won, and against a fit-out worth tens of thousands the affordable acquisition cost is far higher than most contractors assume.",
        ],
      },
      {
        heading: "The lease is the qualifier",
        body: [
          "Somebody browsing ideas for a shop they hope to open is not a project. Somebody who has signed and has a rent clock running is.",
          "One question in the form separates them, and it is the difference between a diary full of site visits and a diary full of conversations.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many enquiries should we expect?",
        a: "Few, and that is correct. This is a low-volume, high-value business and a campaign producing large numbers is reaching the wrong people.",
      },
      {
        q: "Should we specialise by sector?",
        a: "It usually helps. Pharmacy, hospitality and clinical fit-outs have specific requirements, and a contractor who clearly knows one is an easier choice than a generalist.",
      },
      {
        q: "Do photographs matter?",
        a: "Enormously. Completed fit-outs are the whole portfolio and the main reason a client picks one contractor over another.",
      },
      {
        q: "Is tendering worth pursuing?",
        a: "A different pipeline that marketing barely touches. This is about direct enquiries from businesses choosing a contractor themselves.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["carpentry-and-joinery", "builders-and-extensions", "signage-and-print"],
  },
  {
    slug: "signage-and-print",
    label: "Signage & print",
    title: "Signage & Print Leads Ireland | Marketing for Sign Makers",
    description:
      "Lead generation for Irish signage, vehicle livery and print businesses. Repeat B2B work with fast turnarounds. From €1,500 a month.",
    h1: "Signage and print leads that come back.",
    intro: [
      "Signage has an advantage almost no other business has: every job is an advertisement that stays up for years. A well-made shopfront or a liveried van is seen by thousands of people, and a proportion of them will need signage eventually.",
      "The work also repeats in a way most trades do not. A business that gets its van done comes back for the second van, then the shopfront, then the exhibition stand. Winning the first small job matters more than the margin on it suggests.",
    ],
    run: [
      {
        name: "Vehicle livery campaigns",
        text: "Usually the entry job, frequently urgent, and the one that leads to everything else.",
      },
      {
        name: "New business campaigns",
        text: "Businesses that have just registered or signed a lease need signage immediately and have a deadline.",
      },
      {
        name: "Fast-turnaround messaging",
        text: "Deadlines drive this trade — an opening, an event, a launch. Being able to say how quickly you can deliver wins work outright.",
      },
      {
        name: "Your own work as proof",
        text: "Photographs of signage in place, in recognisable locations. It is the most credible advertising available to you.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, quotes issued and cost per enquiry.",
      },
    ],
    qualify: [
      "What type of signage do you need?",
      "Is this for a vehicle, premises or event?",
      "Do you have artwork already?",
      "When do you need it by?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "The first job is not the value",
        body: [
          "A single van costs a few hundred euro and looks like thin margin. That customer then returns for the second van, the shopfront, the window graphics and the trade show stand.",
          "Valued across the relationship, the affordable cost of winning a signage customer is far higher than the first invoice suggests, which is why firms that only chase large jobs grow more slowly.",
        ],
      },
      {
        heading: "Deadlines are the strongest message you have",
        body: [
          "Signage is almost always needed by a date — an opening, an event, a launch that has already been announced.",
          "Turnaround time, stated plainly, wins work that price alone would not. A customer facing an opening in ten days is not shopping around for the cheapest quote.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we publish prices?",
        a: "From-prices for standard items like vehicle livery help. Bespoke signage cannot be priced sight unseen and trying to is worse than saying so.",
      },
      {
        q: "Is B2B or consumer the better market?",
        a: "B2B, clearly. It repeats, the budgets are real and the decisions are quicker. Consumer signage work is occasional and price-driven.",
      },
      {
        q: "How do we reach new businesses?",
        a: "They search immediately after registering or signing a lease, and they need signage before they open. Those searches are specific, urgent and cheap.",
      },
      {
        q: "Do photographs matter?",
        a: "Yes — signage installed and in use, in recognisable places. It is more persuasive than anything written and it doubles as proof you work locally.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["shopfitting", "it-support", "skip-hire"],
  },
  {
    slug: "equipment-hire",
    label: "Equipment hire",
    title: "Plant & Equipment Hire Leads Ireland | Marketing for Hire Companies",
    description:
      "Lead generation for Irish plant and equipment hire businesses. Utilisation is everything, and trade accounts are worth more than any one-off. From €1,500 a month.",
    h1: "Equipment hire leads that build utilisation, not just bookings.",
    intro: [
      "A hire business lives or dies on utilisation. A machine sitting in the yard costs exactly what it cost yesterday and earns nothing, and the difference between a good year and a bad one is a handful of percentage points of fleet uptime.",
      "That reframes the marketing question entirely. It is not how many enquiries you get; it is whether the specific kit currently idle is what people are being shown.",
    ],
    run: [
      {
        name: "Availability-led campaigns",
        text: "Advertising what is actually free, which is a different list every week and almost nobody does it.",
      },
      {
        name: "Trade account campaigns",
        text: "Builders, landscapers and contractors who hire repeatedly. Worth many times a one-off weekend hire.",
      },
      {
        name: "Item-specific search campaigns",
        text: "People search for the machine, not for hire in general — mini digger, dumper, scaffold tower, floor sander.",
      },
      {
        name: "Delivery radius clarity",
        text: "Whether you deliver, how far and what it costs is a decisive question and frequently unanswered.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, bookings and cost per booking, by equipment type.",
      },
    ],
    qualify: [
      "What equipment do you need?",
      "How long do you need it for?",
      "Do you need it delivered?",
      "Is this for trade or personal use?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Advertise the idle kit, not the catalogue",
        body: [
          "Most hire companies run one campaign for the business as a whole. That spends the same money promoting the machine that is booked out for a month as the one that has not left the yard in three weeks.",
          "Pointing budget at what is actually available shifts utilisation, and utilisation is the only number in this business that really matters.",
        ],
      },
      {
        heading: "Trade accounts are the whole game",
        body: [
          "A domestic customer hires a floor sander once. A groundworks contractor hires every week and is not choosing on a few euro once the relationship exists.",
          "Trade work needs its own campaign and its own message — availability, delivery, account terms and reliability rather than day rate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we publish rates?",
        a: "Day and week rates for standard items, yes. It is what people compare and vagueness costs you the call. Specialist kit can be quoted.",
      },
      {
        q: "Is domestic hire worth it?",
        a: "It fills gaps and it is price-sensitive. Useful for utilisation, but the trade accounts are what make the business stable.",
      },
      {
        q: "How important is delivery?",
        a: "Often decisive, particularly for anything a customer cannot move themselves. State the radius and the cost plainly.",
      },
      {
        q: "Is this seasonal?",
        a: "Yes, tracking construction and garden work — a long busy stretch from spring to autumn and a quieter winter, which is exactly when advertising available kit pays most.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["skip-hire", "builders-and-extensions", "agricultural-contractors"],
  },
  {
    slug: "scaffolding",
    label: "Scaffolding",
    title: "Scaffolding Leads Ireland | Marketing for Scaffolding Contractors",
    description:
      "Lead generation for Irish scaffolding contractors, domestic and commercial. Hire duration is the revenue, not the erect. From €1,500 a month.",
    h1: "Scaffolding leads where the hire period is the product.",
    intro: [
      "Scaffolding is priced as an erect and a dismantle, and earns its money in the weeks between. A job that stays up for six weeks instead of two is the same labour for three times the revenue, which means the jobs worth winning are the long ones.",
      "That is the opposite of how most scaffolders advertise. Chasing quick domestic jobs fills the diary with erects and dismantles and ties up stock that could be earning on a re-roof or an extension for two months.",
    ],
    run: [
      {
        name: "Long-duration job campaigns",
        text: "Aimed at re-roofs, extensions and render work, where the hire runs for weeks rather than days.",
      },
      {
        name: "Contractor relationship campaigns",
        text: "Builders, roofers and renderers who need scaffold repeatedly. One relationship is worth dozens of domestic enquiries.",
      },
      {
        name: "Certification and insurance visibility",
        text: "Competence cards, insurance and handover certificates stated plainly, because on commercial work they decide who gets used.",
      },
      {
        name: "Stock availability messaging",
        text: "What you have free and when. It is what a contractor with a start date actually needs to know.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, jobs quoted and cost per job, split domestic and trade.",
      },
    ],
    qualify: [
      "What is the scaffold for?",
      "Roughly how long will it be needed?",
      "Is it domestic or commercial?",
      "When do you need it erected?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Hire duration is the number to optimise for",
        body: [
          "Two jobs can look identical on the quote and differ by a factor of three in what they actually earn, depending on how long the scaffold stands.",
          "Campaigns aimed at the work that stays up — roofing, rendering, extensions — produce fewer enquiries and considerably more revenue per unit of stock. Volume is the wrong target in this trade.",
        ],
      },
      {
        heading: "Contractors are worth more than any campaign",
        body: [
          "A roofer who uses you on every job sends work for years with no acquisition cost, and does not shop around each time.",
          "Marketing supports that rather than replacing it. Being visible and obviously compliant makes you the scaffolder they think of first, which is most of the battle.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we chase domestic work?",
        a: "Sparingly. Domestic jobs are short, tie up stock and involve more explaining. They are useful for filling gaps, not for building the business.",
      },
      {
        q: "How important is certification?",
        a: "On commercial work it is decisive. Handover certificates, insurance and competence cards should be visible rather than mentioned on request.",
      },
      {
        q: "What about weather?",
        a: "It affects the schedule more than the enquiries. Being honest about lead times when the weather has put you behind protects the relationships that matter.",
      },
      {
        q: "Is a website enough on its own?",
        a: "For contractor relationships, no — those are won on reliability. For new enquiries it matters, because a contractor checking you out wants to see real jobs and real credentials.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["roofers", "builders-and-extensions", "plastering"],
  },
  {
    slug: "glazing",
    label: "Glazing & glass",
    title: "Glazier Leads Ireland | Emergency Boarding & Glass Replacement",
    description:
      "Lead generation for Irish glaziers: emergency boarding, glass replacement and misted units. Two businesses, one trade. From €1,500 a month.",
    h1: "Glazing leads, from the break-in at midnight to the misted unit.",
    intro: [
      "Glazing splits cleanly in two. Emergency work — a break-in, a smashed shopfront, a door panel through — is urgent, unpriced and won by whoever answers the phone at eleven at night. Planned work — misted units, upgrades, new glass — is compared, quoted and decided over days.",
      "The emergency side also has an insurance dimension most glaziers under-use. A great many callers do not realise the work may be covered, and the firm that explains it becomes the obvious choice.",
    ],
    run: [
      {
        name: "Emergency boarding campaigns",
        text: "Phone-first, running the hours you will answer, targeted to the radius you can actually reach quickly.",
      },
      {
        name: "Misted unit campaigns",
        text: "The steady planned work — failed double glazing units, replaced without changing the frames. Searched constantly and rarely advertised.",
      },
      {
        name: "Insurance-aware messaging",
        text: "Explaining what is typically covered and how a claim works. It converts and it removes the price objection entirely.",
      },
      {
        name: "Commercial shopfront campaigns",
        text: "Retail and hospitality, where a broken front means a closed business and speed matters more than price.",
      },
      {
        name: "The weekly report",
        text: "Calls, jobs booked and cost per job, split emergency and planned.",
      },
    ],
    qualify: [
      "Is this an emergency?",
      "Is it a home or a business?",
      "What type of glass is broken?",
      "What area are you in?",
    ],
    proof: [
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Misted units are the quiet money",
        body: [
          "Failed double glazing units are extremely common in Irish housing stock, cheap to fix relative to replacing frames, and most homeowners assume the whole window needs replacing.",
          "Telling them otherwise is both true and commercially useful. It is steady, planned, profitable work that almost nobody advertises for, and it fills the gaps between emergencies.",
        ],
      },
      {
        heading: "Insurance is the objection handler",
        body: [
          "A caller looking at a smashed door is thinking about cost before they think about glass.",
          "A glazier who explains plainly what is usually covered, and what a claim involves, removes that anxiety and becomes the firm they trust. It costs nothing to say and very few do.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise overnight?",
        a: "If you will answer. Emergency glazing converts extremely well out of hours and an unanswered call is the most expensive thing you can buy.",
      },
      {
        q: "Is commercial work worth separating?",
        a: "Yes. A closed shopfront is urgent in a way a domestic break is not, and the buyer is a business owner losing money by the hour rather than a homeowner.",
      },
      {
        q: "How do we handle insurance work?",
        a: "Explain it up front. Most callers do not know what is covered, and the glazier who tells them is the one they use.",
      },
      {
        q: "What about misted units?",
        a: "Advertise them separately. It is a different, calmer search and it is steady work that most glaziers leave on the table.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["windows-and-doors", "security-and-alarms", "locksmiths"],
  },
  {
    slug: "garage-conversions",
    label: "Garage conversions",
    title: "Garage Conversion Leads Ireland | Marketing for Conversion Specialists",
    description:
      "Lead generation for Irish garage conversion specialists. The cheapest way to add a room, and the objection is always parking. From €1,500 a month.",
    h1: "Garage conversion leads from families who need one more room.",
    intro: [
      "A garage conversion is the cheapest square metre a homeowner can add. The structure exists, the roof exists, and the work is largely internal — which makes it substantially cheaper than an extension for a family who has simply run out of space.",
      "There are two objections and they are always the same: what happens to the parking, and will it look like a converted garage from the street. A firm that answers both in its advertising converts far better than one selling on price.",
    ],
    run: [
      {
        name: "Space-pressure campaigns",
        text: "Aimed at families who have outgrown the house, with the comparison against moving or extending made explicitly.",
      },
      {
        name: "Use-case campaigns",
        text: "Home office, bedroom, gym, annexe. Four different buyers who should not share one campaign.",
      },
      {
        name: "Front elevation reassurance",
        text: "Before-and-after shots showing the street view. It is the objection nobody voices and everybody has.",
      },
      {
        name: "Planning clarity",
        text: "What is exempt and what is not, explained plainly so enquiries stop stalling.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, surveys booked and cost per survey.",
      },
    ],
    qualify: [
      "What would the room be used for?",
      "Is the garage attached or detached?",
      "Do you have a budget in mind?",
      "When would you like it done?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Against moving, not against an extension",
        body: [
          "The comparison that converts is not conversion versus extension. It is conversion versus moving house, because that is the decision the family is actually weighing.",
          "Set against stamp duty, agent fees, legal costs and a larger mortgage, a conversion is an easy argument — and it is one almost nobody makes in their advertising.",
        ],
      },
      {
        heading: "Show the front of the house",
        body: [
          "Homeowners worry that a converted garage is obvious from the street and will cost them on resale.",
          "Before-and-after photographs of the front elevation, where the conversion is invisible, answer it instantly. It is the single most persuasive image this trade has and most firms only photograph the finished room inside.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it need planning permission?",
        a: "Usually not for a straightforward internal conversion, though it depends on the property and any change of use. Saying so plainly removes the main reason people delay.",
      },
      {
        q: "What is the most common objection?",
        a: "Parking, then how it looks from the street. Both should be answered in the advertising rather than left to the survey.",
      },
      {
        q: "Should we publish prices?",
        a: "A from-price helps, because homeowners are comparing against moving and need a number to do the arithmetic.",
      },
      {
        q: "Do photographs matter?",
        a: "Enormously, and the front elevation more than the interior. Buyers need to see that it does not look converted.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["attic-conversions", "builders-and-extensions", "garden-rooms"],
  },
  {
    slug: "artificial-grass",
    label: "Artificial grass",
    title: "Artificial Grass Leads Ireland | Marketing for Installers",
    description:
      "Lead generation for Irish artificial grass installers. Visual, seasonal, and sold against three specific objections. From €1,500 a month.",
    h1: "Artificial grass leads, and the three objections that decide them.",
    intro: [
      "Artificial grass sells on a photograph and stalls on three doubts: that it will look fake, that it will be unpleasant in hot weather, and whether it works with dogs. Every enquiry has at least one of them, and most advertising in this trade ignores all three.",
      "The Irish weather also does a great deal of selling on your behalf. A lawn that is a mud bath from November to March is the strongest argument this product has, and it is far more persuasive than anything about maintenance.",
    ],
    run: [
      {
        name: "Objection-led campaigns",
        text: "Built around realism, pet suitability and drainage rather than around the product in general.",
      },
      {
        name: "Winter mud campaigns",
        text: "Advertising the problem while people are living with it, rather than in June when the grass looks fine.",
      },
      {
        name: "Close-up creative",
        text: "Photographs and video close enough that people can judge the look for themselves. Distance shots read as evasive.",
      },
      {
        name: "Estate-level targeting",
        text: "One installed garden sells the next few on the same road, particularly in newer developments with small, poorly drained lawns.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, site visits booked and cost per visit.",
      },
    ],
    qualify: [
      "Roughly what area needs covering?",
      "Do you have pets?",
      "What is the current surface?",
      "When would you like it installed?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Advertise in the mud, not the sunshine",
        body: [
          "The instinct is to advertise in summer when gardens look good. But the moment somebody genuinely wants artificial grass is February, standing at a back door looking at a churned-up lawn and a dog covered in muck.",
          "Campaigns weighted to late winter and early spring reach people at the point of maximum frustration, and the enquiries convert noticeably better than summer ones.",
        ],
      },
      {
        heading: "Answer the pet question before it is asked",
        body: [
          "A significant share of this market is dog owners, and they all want to know the same things: drainage, smell, and whether it survives digging.",
          "Answering plainly, with a product recommendation for pets specifically, converts a group that is otherwise very hesitant — and they are the customers least likely to haggle, because the alternative is mud through the house every day.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the best time to advertise?",
        a: "Late winter and early spring, while people are looking at a muddy lawn. Summer enquiries are more casual and convert less well.",
      },
      {
        q: "Should we publish a price per square metre?",
        a: "Yes, as a from-price. The range is wide and vague pricing produces enquiries from people expecting a fraction of the real cost.",
      },
      {
        q: "How do we handle the looks-fake objection?",
        a: "Close-up photography and video of your own installations. Distance shots make people suspicious and they are right to be.",
      },
      {
        q: "Is social better than search?",
        a: "Usually, because it is visual and people often do not know they want it until they see a neighbour's. Search still catches the ones already pricing it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["landscapers", "driveways-and-paving", "fencing-and-gates"],
  },
  {
    slug: "pools-and-hot-tubs",
    label: "Pools & hot tubs",
    title: "Pool & Hot Tub Leads Ireland | Installation & Servicing",
    description:
      "Lead generation for Irish pool and hot tub companies. The install is the headline, the servicing is the business. From €1,500 a month.",
    h1: "Pool and hot tub leads, and the servicing that follows them.",
    intro: [
      "An installation is a large, occasional, heavily considered purchase. Servicing, chemicals, covers and repairs are small, frequent and go on for a decade. Most companies in this trade advertise the first and treat the second as an afterthought, which is the wrong way round for a stable business.",
      "The Irish market also behaves differently from the sales literature, most of which is written for warmer countries. Indoor pools, insulated hot tubs and year-round usability are the questions that actually come up here.",
    ],
    run: [
      {
        name: "Installation campaigns",
        text: "High-value, long-cycle and photograph-led, with realistic expectations about the Irish climate set up front.",
      },
      {
        name: "Servicing and maintenance campaigns",
        text: "The recurring revenue that carries the business, including owners whose original installer has vanished.",
      },
      {
        name: "Orphan-owner campaigns",
        text: "People with a pool or tub and nobody to service it. A reliable, under-served market in every county.",
      },
      {
        name: "Running-cost transparency",
        text: "The question every buyer has and few sellers answer directly. Answering it converts the serious and filters the rest.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, site visits and service contracts, reported separately.",
      },
    ],
    qualify: [
      "Are you looking to install or service?",
      "Is it a pool, hot tub or swim spa?",
      "Indoor or outdoor?",
      "When are you hoping to proceed?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Servicing is the business, installation is the headline",
        body: [
          "One installation pays well and then ends. A service relationship runs for years, produces chemical and parts revenue, and survives a bad year for big-ticket spending.",
          "Advertising built only around installs leaves that entirely to chance, and the companies that weather quiet periods are the ones with a service book underneath.",
        ],
      },
      {
        heading: "Running costs decide Irish purchases",
        body: [
          "Buyers here ask about heating cost before almost anything else, and vague answers read as evasion.",
          "Being direct about what it costs to run, and about insulation and covers, converts serious buyers and removes the ones who were never going to proceed once they found out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Irish market big enough?",
        a: "Smaller than most markets this industry writes for, and correspondingly uncontested. Hot tubs in particular have grown steadily and the servicing side is thinly served.",
      },
      {
        q: "Should we advertise running costs?",
        a: "Yes. It is the first question and hiding it produces enquiries that die at the quote. Being straight converts the buyers who will actually proceed.",
      },
      {
        q: "What about servicing other people's installs?",
        a: "One of the better opportunities in the trade. Plenty of owners have equipment and no relationship with anyone, and they search for help.",
      },
      {
        q: "Is this seasonal?",
        a: "Installation enquiries rise in spring and early summer. Servicing is year round, with a pre-winter peak for covers and heating.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["landscapers", "garden-rooms", "plumbers-and-heating"],
  },
  {
    slug: "chimney-sweeps",
    label: "Chimney sweeps",
    title: "Chimney Sweep Leads Ireland | Marketing for Sweeps",
    description:
      "Lead generation for Irish chimney sweeps. Insurance certificates, a hard autumn season, and the stove installers who feed the work. From €1,500 a month.",
    h1: "Chimney sweep leads, concentrated into about ten weeks.",
    intro: [
      "Chimney sweeping in Ireland happens in a narrow window. From late August the phone starts, it peaks through October and November, and by January it is largely over until the following autumn. A year's work is booked in roughly ten weeks.",
      "The other thing driving demand is paperwork. Home insurance increasingly expects a sweep certificate, and a great many people book because a policy renewal reminded them rather than because they were thinking about the chimney at all.",
    ],
    run: [
      {
        name: "Season-concentrated campaigns",
        text: "Almost all budget spent between late August and November, because that is when a year's work is booked.",
      },
      {
        name: "Insurance certificate messaging",
        text: "The reason many people finally book. Saying plainly that you issue a certificate converts people who were putting it off.",
      },
      {
        name: "Stove installer relationships",
        text: "Every new stove needs sweeping thereafter. Installers are a steady referral source most sweeps never cultivate.",
      },
      {
        name: "Capacity and lead-time honesty",
        text: "Once October arrives the message should be lead times, not availability.",
      },
      {
        name: "The weekly report",
        text: "Bookings, cost per booking and how far ahead the diary is.",
      },
    ],
    qualify: [
      "What type of chimney or stove?",
      "When was it last swept?",
      "Do you need a certificate for insurance?",
      "What area are you in?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Ten weeks decide the year",
        body: [
          "Advertising a chimney sweep in May is spending money into an empty room. Demand is almost entirely driven by the first cold evening and by insurance renewals.",
          "Concentrating the year's budget into late August through November produces a dramatically better cost per booking than spreading it evenly, and it is the single easiest improvement available in this trade.",
        ],
      },
      {
        heading: "The certificate is the trigger",
        body: [
          "A significant share of bookings come from people whose insurance renewal mentioned a sweep certificate, not from people worried about their chimney.",
          "Leading with the certificate rather than with cleaning reaches them at the moment they are actually motivated, and it distinguishes you from sweeps advertising a service people are happy to postpone.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise?",
        a: "Late August to November, heavily. Outside that window the demand largely is not there and the budget is better saved.",
      },
      {
        q: "How do we get more bookings from stove installers?",
        a: "Ask them. Every stove they fit needs sweeping annually thereafter, and most installers are glad to have somebody reliable to recommend.",
      },
      {
        q: "Should we mention insurance?",
        a: "Prominently. It is the reason a large share of people finally book, and most sweeps never mention it.",
      },
      {
        q: "What about lead times in peak season?",
        a: "Say them. A diary booked three weeks out is proof you are worth waiting for, and it stops people ringing expecting tomorrow.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["stoves-and-fireplaces", "roofers", "gutter-cleaning"],
  },
  {
    slug: "gutter-cleaning",
    label: "Gutter cleaning",
    title: "Gutter Cleaning Leads Ireland | Marketing for Gutter Services",
    description:
      "Lead generation for Irish gutter cleaning and repair businesses. Annual, weather-driven, and the repairs are where the money is. From €1,500 a month.",
    h1: "Gutter cleaning leads, and the repairs that come with them.",
    intro: [
      "Gutter work is triggered by two things: leaves coming down in autumn, and water visibly overflowing during heavy rain. Neither is something people plan for, which makes this an intensely reactive trade.",
      "The cleaning itself is low value. What makes the job worthwhile is what you find while you are up there — cracked sections, loose brackets, failed joints and fascia damage — and the firms that do well are the ones that inspect properly and quote on the spot.",
    ],
    run: [
      {
        name: "Autumn season campaigns",
        text: "Concentrated into leaf-fall, when the problem is visible and people act.",
      },
      {
        name: "Wet-weather reactive campaigns",
        text: "Prepared in advance and lifted during prolonged rain, when overflowing gutters are on show.",
      },
      {
        name: "Repair and replacement messaging",
        text: "The higher-value half of the trade, advertised alongside rather than buried under cleaning.",
      },
      {
        name: "Annual reminder campaigns",
        text: "To your own past customers. Gutters need doing every year and most firms never follow up.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, jobs booked and cost per job.",
      },
    ],
    qualify: [
      "Is this cleaning or a repair?",
      "How many storeys is the property?",
      "Are the gutters currently overflowing?",
      "When was it last done?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "The repairs are the business",
        body: [
          "A clean is an hour's work at modest value. A length of replacement guttering, a fascia repair or a set of new brackets is several times that, and a proportion of every clean turns into one.",
          "Advertising cleaning alone under-sells what you do. Firms that present themselves as gutter maintenance rather than gutter cleaning win the same jobs at a considerably higher average value.",
        ],
      },
      {
        heading: "Your past customers are next year's diary",
        body: [
          "Gutters fill every autumn without fail. A customer from last October needs the same job this October and has almost certainly not thought about it.",
          "A reminder campaign to your own list is the cheapest work available in this trade and almost nobody sends one.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise?",
        a: "Late autumn primarily, plus reactive bursts during sustained heavy rain when the problem is visible from the ground.",
      },
      {
        q: "Should we advertise repairs separately?",
        a: "Alongside, not separately. Most repair jobs start as a clean, so the message should be maintenance rather than cleaning alone.",
      },
      {
        q: "Is this worth advertising given the job value?",
        a: "On cleaning alone, marginally. Once repairs and annual repeats are counted, the customer value is several times the first invoice.",
      },
      {
        q: "How do we handle two-storey work?",
        a: "Ask about it in the form. Access and height change the price and the equipment, and finding out on site wastes a visit.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["roofers", "powerwashing", "chimney-sweeps"],
  },
  {
    slug: "mobile-mechanics",
    label: "Mobile mechanics",
    title: "Mobile Mechanic Leads Ireland | Marketing for Mobile Servicing",
    description:
      "Lead generation for Irish mobile mechanics. Convenience is the product, and there is no map pack to win. From €1,500 a month.",
    h1: "Mobile mechanic leads, where convenience is the whole pitch.",
    intro: [
      "A mobile mechanic is not competing with garages on price. They are competing on the hour a customer does not have to take off work, the lift they do not have to arrange, and the car they do not have to leave anywhere.",
      "There is also a structural difference that shapes everything: with no premises, there is no verified address, which means the Google map results are largely closed. The ordinary search results and paid are where this business has to win.",
    ],
    run: [
      {
        name: "Convenience-led campaigns",
        text: "Selling the thing that actually differentiates you — the disruption avoided, not the price.",
      },
      {
        name: "Service and repair-at-home campaigns",
        text: "Servicing, diagnostics, brakes and batteries, advertised as coming to the customer.",
      },
      {
        name: "Fleet and business campaigns",
        text: "Vans and company cars serviced on site, which is worth far more than domestic work and repeats.",
      },
      {
        name: "Radius and callout clarity",
        text: "How far you travel and what it costs, stated plainly, because it is the first question.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, jobs booked and cost per booking.",
      },
    ],
    qualify: [
      "What make and model is the vehicle?",
      "What do you need done?",
      "Where is the vehicle located?",
      "Is it drivable?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "#1", label: "on Google for emergency callouts, Dublin trade" },
    ],
    sections: [
      {
        heading: "No premises means no map pack",
        body: [
          "Google's local results are built around verified physical addresses, so a mobile business is structurally disadvantaged there and no amount of optimisation changes it.",
          "That is not fatal — it simply means the budget belongs in ordinary search results and paid, where location is not the deciding factor. Any agency promising you the map pack without an address either does not know this or is not telling you.",
        ],
      },
      {
        heading: "Fleet work is the stable half",
        body: [
          "Domestic customers come when something breaks. A small fleet of vans needs servicing on a schedule, values not losing a vehicle to a garage for a day, and pays without haggling.",
          "It repeats, it is planned, and it is worth pursuing with its own campaign and its own language.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we rank in the map results?",
        a: "Largely not, without a verified address. It is a structural limitation of mobile businesses and we would rather say so than sell you optimisation that cannot work.",
      },
      {
        q: "What should we lead with?",
        a: "Convenience. You are not the cheapest and should not try to be — you are the option that does not cost the customer a day.",
      },
      {
        q: "Is fleet work worth chasing?",
        a: "It is usually the most stable revenue available to a mobile mechanic. Scheduled, repeating, and far less price-driven than domestic work.",
      },
      {
        q: "Should we publish a callout fee?",
        a: "Yes, and the radius. Both are the first things people want to know and vagueness costs you the call.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["car-garages", "equipment-hire", "drainage"],
  },
  {
    slug: "recruitment-agencies",
    label: "Recruitment agencies",
    title: "Recruitment Agency Marketing Ireland | Client & Candidate Leads",
    description:
      "Marketing for Irish recruitment agencies. A two-sided market where the scarce side changes, and the fee per placement is large. From €1,500 a month.",
    h1: "Recruitment marketing for whichever side is currently scarce.",
    intro: [
      "Recruitment is two markets that have to balance. Some months the difficulty is finding clients with roles; other months roles are plentiful and candidates are the constraint. An agency running one fixed campaign is always half wrong.",
      "The fee per placement also changes the arithmetic completely. A single placement can be worth several thousand, which means an acquisition cost that would be absurd for most businesses is comfortable here — and almost no Irish agency spends accordingly.",
    ],
    run: [
      {
        name: "Client-side campaigns",
        text: "Aimed at employers with a vacancy and no time, particularly in sectors where you place well.",
      },
      {
        name: "Candidate-side campaigns",
        text: "For the roles where candidates are the bottleneck. Frequently the harder and more valuable side.",
      },
      {
        name: "Sector specialisation",
        text: "Generalist recruitment advertising performs poorly. Campaigns built around the two or three sectors you genuinely own work far better.",
      },
      {
        name: "Placement-value-aware bidding",
        text: "Budgets set against the fee a placement produces rather than against a generic cost-per-lead benchmark.",
      },
      {
        name: "The weekly report",
        text: "Enquiries and applications, reported separately by side of the market.",
      },
    ],
    qualify: [
      "Are you hiring or looking for a role?",
      "Which sector?",
      "Is this permanent or contract?",
      "What is the timeline?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Work out what a placement is worth first",
        body: [
          "A permanent placement fee is typically a meaningful percentage of salary, which puts it in the thousands.",
          "Judged against that, an acquisition cost of a few hundred euro for a client with a live vacancy is comfortable. Agencies that benchmark against generic cost-per-lead figures systematically underspend and lose to those that do not.",
        ],
      },
      {
        heading: "Advertise the scarce side, and change it",
        body: [
          "The constraint moves. Some quarters it is roles, others it is candidates, and it differs by sector within the same agency.",
          "Campaigns should shift with it rather than running fixed all year. That is a monthly decision, and making it deliberately is worth more than any change to the ads themselves.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which side should we advertise to?",
        a: "Whichever is currently scarce, and that changes. Running both fixed all year wastes half the budget on the side you already have covered.",
      },
      {
        q: "Is LinkedIn essential?",
        a: "For candidate attraction in professional sectors, largely yes. For client acquisition it is one channel among several and dearer than search.",
      },
      {
        q: "Does generalist recruitment advertise well?",
        a: "Poorly. Specialisation is what makes campaigns efficient — an employer looking for a specific skill wants a specialist, not a general agency.",
      },
      {
        q: "What about job boards?",
        a: "A different spend with a different purpose. This is about generating client relationships and candidate registrations that you own.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["it-support", "accountants", "solicitors"],
  },
  {
    slug: "equine-services",
    label: "Equine services",
    title: "Equine Marketing Ireland | Leads for Yards, Farriers & Services",
    description:
      "Marketing for Irish equine businesses: livery yards, farriers, equine dentists, transport and training. A relationship market with a real season. From €1,500 a month.",
    h1: "Equine marketing for a market that runs on reputation.",
    intro: [
      "Ireland's equine sector is unusually concentrated — Kildare, Tipperary, Meath and Limerick hold much of it — and unusually relationship-driven. Owners take recommendations from other owners, from yards and from vets, and they change provider rarely.",
      "That makes advertising a supporting act rather than the main one. It works for filling livery vacancies, reaching owners new to an area, and being findable for the services people genuinely search for, such as transport and dentistry.",
    ],
    run: [
      {
        name: "Livery vacancy campaigns",
        text: "Specific available spaces rather than the yard in general, targeted tightly to the area owners will realistically travel.",
      },
      {
        name: "Service-specific campaigns",
        text: "Farriery, dentistry, transport and physiotherapy are searched by name and are far less relationship-locked than livery.",
      },
      {
        name: "New-to-area owner targeting",
        text: "People who have moved and need to rebuild a whole set of providers at once.",
      },
      {
        name: "Facility-led creative",
        text: "Arenas, stabling, turnout and hacking shown properly. Owners choose on the facilities and the standard of care they can see.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, viewings and cost per enquiry.",
      },
    ],
    qualify: [
      "What service are you looking for?",
      "How many horses?",
      "What area are you in?",
      "When do you need it from?",
    ],
    proof: [
      { value: "21", label: "leads in the first month of a live trades campaign" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Recommendation beats advertising, so support it",
        body: [
          "An owner asks their yard, their vet or the person in the next box. That is how most equine business changes hands and no campaign overrides it.",
          "What advertising does is make you the name that gets recommended confidently — visible, obviously professional, with facilities and credentials people can see before they ring.",
        ],
      },
      {
        heading: "The concentration is an advantage",
        body: [
          "Because so much of the sector sits in a handful of counties, campaigns can be drawn extremely tightly and still reach a meaningful share of the market.",
          "That makes a small budget go considerably further here than in a dispersed industry, and it means being visible in your own area is achievable rather than aspirational.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do equine owners search online?",
        a: "For services like transport, dentistry and farriery, yes. For livery they ask people first and search second, so the aim is to be findable and credible when they do.",
      },
      {
        q: "Is Facebook worth it?",
        a: "Genuinely, yes. Equine community groups in Ireland are large, active and well followed, and content from yards performs well.",
      },
      {
        q: "Should we advertise livery prices?",
        a: "A range helps. Owners are comparing and vague pricing produces viewings from people whose budget was never going to work.",
      },
      {
        q: "How wide should targeting be?",
        a: "Tight. Owners travel to a yard daily and will not go far, though for transport and specialist services the radius is much larger.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["agricultural-contractors", "veterinary", "farm-buildings"],
  },
  {
    slug: "farm-buildings",
    label: "Farm buildings",
    title: "Farm Building Leads Ireland | Marketing for Agri Construction",
    description:
      "Lead generation for Irish agricultural building contractors: sheds, slatted units, slurry storage and TAMS-funded work. From €1,500 a month.",
    h1: "Farm building leads timed to the grant and the weather.",
    intro: [
      "Agricultural building in Ireland is shaped by two calendars. Grant schemes decide what farmers can afford and when they apply, and the weather decides when anything can actually be built. Both are outside your control and both are predictable.",
      "The jobs are also large and infrequent. A slatted unit or a slurry store is a substantial investment made once in many years, which means low enquiry volume and a very high value per enquiry — the opposite of how most trade advertising is judged.",
    ],
    run: [
      {
        name: "Grant-cycle campaigns",
        text: "Timed to scheme announcements and application windows, when farmers are actively costing work.",
      },
      {
        name: "Building-type campaigns",
        text: "Slatted units, slurry storage, machinery sheds and handling facilities are different projects with different drivers.",
      },
      {
        name: "Compliance and spec clarity",
        text: "Slurry storage requirements and specification standards, explained plainly, because getting it wrong is expensive.",
      },
      {
        name: "Local and regional targeting",
        text: "Agricultural contractors work a defined area, and campaigns should match it.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, site visits and cost per enquiry.",
      },
    ],
    qualify: [
      "What type of building do you need?",
      "Roughly what size?",
      "Are you applying for grant funding?",
      "When would you want it built?",
    ],
    proof: [
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
      { value: "21", label: "leads in the first month of a live trades campaign" },
    ],
    sections: [
      {
        heading: "Grants decide the timing",
        body: [
          "Farmers plan substantial capital work around what is funded and when applications open. Advertising outside those windows reaches people who are interested but not yet able to act.",
          "Campaigns concentrated around scheme announcements and application periods reach farmers while they are actually costing projects, which is a different conversation entirely from general awareness.",
        ],
      },
      {
        heading: "Low volume, very high value",
        body: [
          "A handful of enquiries a month is a strong result here. Judged against a trades benchmark of cost per lead the numbers look alarming; judged against the value of a slatted unit they are comfortable.",
          "Setting that expectation before a campaign starts prevents the usual mistake of switching something off that was working.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many enquiries should we expect?",
        a: "Few. This is a low-volume, high-value market and a campaign producing large numbers is almost certainly reaching the wrong people.",
      },
      {
        q: "When should we advertise?",
        a: "Around grant scheme windows and in the run-up to the building season. Farmers cost projects when funding is in view.",
      },
      {
        q: "Do farmers search online?",
        a: "Increasingly, particularly younger farmers and for larger projects where they want to compare specification and price before ringing anyone.",
      },
      {
        q: "Is Facebook worth it?",
        a: "In rural areas, often more than search. Farming community pages are well followed and photographs of completed buildings travel.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["agricultural-contractors", "equine-services", "builders-and-extensions"],
  },
  {
    slug: "self-storage",
    label: "Self storage",
    title: "Self Storage Marketing Ireland | Enquiries & Occupancy",
    description:
      "Marketing for Irish self storage facilities. Occupancy is the only number, and life events are the trigger. From €1,500 a month.",
    h1: "Self storage marketing built around occupancy, not enquiries.",
    intro: [
      "A storage facility has one number that matters: occupancy. An empty unit costs the same as a full one and earns nothing, and a customer who stays fourteen months instead of four is worth three times as much with no additional marketing.",
      "The demand is almost entirely event-driven. People rent storage because of a move, a renovation, a bereavement, a separation, a business outgrowing its premises, or a student year ending. Nobody rents storage speculatively.",
    ],
    run: [
      {
        name: "Life-event campaigns",
        text: "Built around the moments that actually create demand — moving, renovating, downsizing, a business expanding.",
      },
      {
        name: "Local radius targeting",
        text: "People choose storage close to home or to the route they already drive. The catchment is small and should be targeted that way.",
      },
      {
        name: "Business storage campaigns",
        text: "Stock, archives and equipment. Longer stays, less price-sensitive and considerably more valuable than domestic.",
      },
      {
        name: "Occupancy-led budgeting",
        text: "Spend weighted towards the unit sizes actually standing empty rather than the facility in general.",
      },
      {
        name: "The weekly report",
        text: "Enquiries, units let and cost per let.",
      },
    ],
    qualify: [
      "What size unit do you need?",
      "How long do you expect to need it?",
      "Is this personal or business storage?",
      "When would you need to move in?",
    ],
    proof: [
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Length of stay is worth more than the enquiry count",
        body: [
          "A domestic customer storing between houses may stay six weeks. A business storing stock or archives may stay years.",
          "Both cost roughly the same to acquire, which means business enquiries are worth far more and deserve their own campaign, their own message and a higher bid.",
        ],
      },
      {
        heading: "Advertise the sizes that are empty",
        body: [
          "Most facilities advertise storage in general while their small units are full and their large ones sit idle, or the reverse.",
          "Pointing budget at the sizes actually available shifts occupancy, which is the only number that matters. It requires knowing your own inventory weekly, and it is worth the effort.",
        ],
      },
    ],
    faqs: [
      {
        q: "What drives demand?",
        a: "Life events, almost entirely — moves, renovations, bereavements, separations, business growth. Campaigns built around those outperform generic storage advertising.",
      },
      {
        q: "Is business storage worth targeting?",
        a: "It is usually the most valuable customer you can get. Longer stays, steadier payment and far less price sensitivity than domestic.",
      },
      {
        q: "Should we publish prices?",
        a: "Yes, by unit size. It is the first thing people check and hiding it sends them to a competitor who did not.",
      },
      {
        q: "How wide should the radius be?",
        a: "Small. People choose storage near home or on a route they already drive, and advertising across a county wastes most of the budget.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,000 with Google Ads managed on top.",
      },
    ],
    related: ["equipment-hire", "skip-hire", "estate-agents"],
  },
  {
    slug: "ev-charger-installers",
    label: "EV charger installers",
    title: "EV Charger Installation Leads Ireland | Installer Marketing",
    description:
      "Lead generation for Irish EV charger installers. Meta and Google campaigns aimed at new EV owners claiming the SEAI grant, reported in booked surveys. From €1,500 a month.",
    h1: "EV charger installation leads, timed to the car purchase.",
    intro: [
      "An EV charger is bought in a narrow window. Somebody orders a car, waits somewhere between a fortnight and four months for delivery, and organises the charger in the last two weeks of that wait. Reach them early and they forget you; reach them late and they have already rung whoever the dealer mentioned.",
      "That timing problem is the whole job. We run campaigns for Safe Electric registered installers across Ireland aimed at people in the middle of that wait, with a form that captures the delivery date so you know exactly when to follow up.",
    ],
    run: [
      {
        name: "New-EV-owner campaigns",
        text: "Meta ads aimed at people who have ordered rather than people who already drive, which is a much smaller and far more valuable audience.",
      },
      {
        name: "SEAI grant searches on Google",
        text: "The grant is the thing people search for. Ads on the SEAI home charger grant terms, landing on a page that explains what you handle for them.",
      },
      {
        name: "Dealer and forecourt catchments",
        text: "Targeting drawn around the dealerships that actually sell volume in your area, because that is where the orders come from.",
      },
      {
        name: "Social media, fully run",
        text: "Installs posted and promoted, so an installer looks established when a buyer checks before booking a survey.",
      },
      {
        name: "Follow-up on delivery dates",
        text: "Every lead is captured with the expected delivery date, so nobody is chased in month one and forgotten in month three.",
      },
    ],
    qualify: [
      "Have you ordered the car, and when is it due?",
      "Is it a house with off-street parking, or an apartment?",
      "How far is the consumer unit from where the car will park?",
      "Are you claiming the SEAI grant?",
      "County and Eircode",
    ],
    proof: [
      { value: "54", label: "residential EV charger enquiries in three weeks for a Cork installer" },
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
    ],
    sections: [
      {
        heading: "Why the grant changes the conversation",
        body: [
          "The SEAI home charger grant is the single most searched thing in this category, and most installer websites mention it in one line at the bottom of a page.",
          "That is a missed opportunity, because the person searching is not really asking about money. They are asking whether the paperwork is going to be their problem. An installer who says plainly that the grant application is handled for them converts noticeably better than one who simply lists the amount.",
        ],
      },
      {
        heading: "Apartments are a different business",
        body: [
          "An apartment install involves a management company, shared parking and frequently a landlord, and the job can take months to approve or never happen at all.",
          "Unless you specialise in them, the lead form should filter them out early rather than filling your diary with surveys that cannot proceed. We ask the question on the form for exactly that reason.",
        ],
      },
      {
        heading: "Competing with the dealership",
        body: [
          "Most buyers are offered a charger by the dealer at the point of sale, usually at a price that includes a comfortable margin for the dealer.",
          "You are not competing on convenience there and you will rarely win on it. What you can win on is price transparency, a named local installer and a date that suits the customer rather than the dealership's partner network.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this market not dominated by the big national installers?",
        a: "They have scale and dealer relationships. They do not have local presence or flexibility on dates, and both of those win a good share of jobs when a buyer actually compares.",
      },
      {
        q: "How far ahead of delivery should we advertise?",
        a: "Reach them during the wait, not before the order. The form captures the delivery date so the follow-up is timed rather than guessed.",
      },
      {
        q: "Do you handle the SEAI grant messaging?",
        a: "We write it. Whether you actually complete the application for the customer is your call, but saying so clearly is worth real money either way.",
      },
      {
        q: "What about commercial and fleet installs?",
        a: "A separate campaign entirely. The buyer, the budget cycle and the sales length have nothing in common with a homeowner.",
      },
      {
        q: "Do I need to be Safe Electric registered?",
        a: "For the grant, yes, and we will not run grant-led campaigns for an installer who is not. It would generate enquiries you cannot fulfil.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included. No setup fee, month to month, and ad spend is paid directly to the platforms.",
      },
    ],
    related: ["solar-installers", "electricians", "heat-pumps"],
  },
  {
    slug: "septic-tank-services",
    label: "Septic tank services",
    title: "Septic Tank Leads Ireland | Marketing for Tank Services",
    description:
      "Lead generation for Irish septic tank desludging, repair and replacement companies. Campaigns built around EPA inspections and the remediation grant. From €1,500 a month.",
    h1: "Septic tank leads, from a market driven by inspections.",
    intro: [
      "Roughly half a million Irish homes are on a septic tank, and almost nobody thinks about theirs until something forces them to: a failed EPA inspection, a house sale, a smell, or a tank that has not been desludged in a decade.",
      "That makes this a reactive market with a predictable trigger, which is unusually good news for advertising. We run campaigns for tank services across Ireland aimed at the households currently inside one of those triggers.",
    ],
    run: [
      {
        name: "Inspection-failure campaigns",
        text: "Ads aimed at the counties currently being inspected under the National Inspection Plan, where failure notices are actively landing on doormats.",
      },
      {
        name: "Grant-led campaigns",
        text: "The remediation grant is substantial and poorly understood. Ads that explain eligibility plainly, landing on a page that does the same.",
      },
      {
        name: "House-sale campaigns",
        text: "A tank certificate is frequently needed to close a sale, and those jobs are urgent and price-insensitive. Targeted separately.",
      },
      {
        name: "Desludging reminders",
        text: "The routine revenue underneath the emergencies. A recurring campaign to households due a service.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, so a company looks real when a worried homeowner checks it at ten at night.",
      },
    ],
    qualify: [
      "Is this a desludge, a repair, or a full replacement?",
      "Has the tank failed an EPA inspection?",
      "Is the property being sold?",
      "When was the tank last serviced?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "The grant is the most misunderstood thing in this category",
        body: [
          "The remediation grant is means-tested, tied to inspection failure and restricted by registration date, and the conditions catch a great many people out.",
          "Explaining it accurately is worth more than advertising a headline figure, because a homeowner who arrives expecting a grant they cannot get becomes a difficult job rather than a good one. We write the copy to qualify rather than to excite, which produces fewer and better enquiries.",
        ],
      },
      {
        heading: "Urgency splits this market in two",
        body: [
          "A failed inspection or a stalled house sale produces an urgent, price-tolerant customer who will book the first credible company that answers.",
          "A routine desludge produces a customer who will ring three companies and pick the cheapest. Advertising to both with the same message and the same price gets you the worst of each.",
        ],
        list: [
          {
            title: "Urgent",
            body: "Inspection failure, sale, overflow. Answer fast, quote confidently, do not lead on price.",
          },
          {
            title: "Routine",
            body: "Scheduled desludging. Compete on reliability and a reminder system rather than on being cheapest.",
          },
          {
            title: "Capital",
            body: "Full replacement or new percolation. Long consideration, grant involved, needs real explanation rather than a price.",
          },
        ],
      },
      {
        heading: "Why local matters more than usual here",
        body: [
          "Tank work is dictated by ground conditions, county council requirements and site access, and homeowners know it.",
          "A company that names the counties it works in and references local site conditions is trusted more quickly than a national number. It is also cheaper to advertise, because the targeting is tighter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the market not too seasonal?",
        a: "Less than people expect. Inspections and house sales run year-round; only weather-driven overflow work is genuinely seasonal.",
      },
      {
        q: "Should we advertise the grant amount?",
        a: "Advertise eligibility, not the number. A homeowner who does not qualify and thinks they do wastes your time and leaves annoyed.",
      },
      {
        q: "Which counties are worth targeting?",
        a: "Wherever inspections are active and wherever you genuinely travel. Tanker jobs have a real distance limit and pretending otherwise costs money.",
      },
      {
        q: "Do house-sale jobs actually convert?",
        a: "Well, and fast. There is a closing date driving it, which is the most reliable urgency there is.",
      },
      {
        q: "Can you run this alongside a drainage business?",
        a: "Yes, and they should be separate campaigns. The customers and the urgency are different.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, no setup fee, month to month.",
      },
    ],
    related: ["drainage", "agricultural-contractors", "plumbers-and-heating"],
  },
  {
    slug: "grinds-and-tutoring",
    label: "Grinds and tutoring",
    title: "Grinds & Tutoring Leads Ireland | Marketing for Tutors",
    description:
      "Lead generation for Irish grinds schools and tutoring services. Campaigns timed to the Leaving Cert year and aimed at parents, not students. From €1,500 a month.",
    h1: "Grinds enquiries, timed to the school year.",
    intro: [
      "Tutoring has three buying moments in a year and almost nothing in between. September, when the year starts and resolutions are fresh. January, when the Christmas exam results land. And February into March, when the mocks come back and panic sets in.",
      "A grinds business that spends evenly across twelve months is spending most of it in months where nobody is buying. We build the calendar around those spikes instead.",
    ],
    run: [
      {
        name: "Results-driven campaign timing",
        text: "Budget concentrated into the weeks after Christmas exams and mocks, when the decision is actually being made.",
      },
      {
        name: "Parent-facing creative",
        text: "The student is the user; the parent is the buyer and almost always the one who pays. The advertising speaks to the parent.",
      },
      {
        name: "Subject-level campaigns",
        text: "Higher Level Maths is not the same sale as Leaving Cert Irish. Separate campaigns for the subjects that actually carry your margin.",
      },
      {
        name: "Online and in-person split",
        text: "Two different products with different catchments. Online can be national; in-person is a twenty-minute drive.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, so a parent checking at eleven at night finds a business that looks established and safe.",
      },
    ],
    qualify: [
      "Which year is the student in?",
      "Which subjects, and at what level?",
      "Online or in person?",
      "Is this for exam preparation or ongoing support?",
      "County or area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "You are advertising to the parent",
        body: [
          "Almost every grinds enquiry is made or approved by a parent, and parents buy differently from students. They want reassurance about safety, about the tutor's qualifications and about whether this will actually change a grade.",
          "Creative aimed at students — energetic, informal, results-focused — consistently underperforms creative aimed at a worried parent who wants to know their child is in safe hands. It is the most common mistake in this category.",
        ],
      },
      {
        heading: "Garda vetting is a selling point, not a footnote",
        body: [
          "Every parent wonders about it and very few ask directly. A business that states its vetting and qualification position plainly, up front, removes the unspoken objection before it forms.",
          "This is one of the rare cases where putting compliance information in the advertising improves performance rather than dulling it.",
        ],
      },
      {
        heading: "The three spikes",
        body: [
          "The buying calendar is sharper here than in almost any other category, and budget should follow it rather than sit flat.",
        ],
        list: [
          {
            title: "September",
            body: "New school year, new intentions. Good for ongoing weekly enrolment rather than crash courses.",
          },
          {
            title: "January",
            body: "Christmas exam results. The single strongest window of the year for exam-year students.",
          },
          {
            title: "February to March",
            body: "Mocks. Short, intense and price-insensitive — parents are buying reassurance under time pressure.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise in summer?",
        a: "Lightly, for next year's exam cohort and for crash courses only. Most of the year's budget belongs in January and after the mocks.",
      },
      {
        q: "Do we target students or parents?",
        a: "Parents, almost always. They decide and they pay. Student-facing creative wins attention and loses enquiries.",
      },
      {
        q: "Is online tutoring worth advertising nationally?",
        a: "Yes, and it is a genuinely different campaign from in-person. Wider catchment, lower price tolerance, more competition.",
      },
      {
        q: "Which subjects should we push?",
        a: "Whichever carry your margin and your best tutors. Higher Level Maths and the sciences are the most searched, and the most competed for.",
      },
      {
        q: "How do we handle the safety question?",
        a: "State vetting and qualifications plainly in the advertising. It improves conversion rather than hurting it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["creches", "driving-schools", "recruitment-agencies"],
  },
  {
    slug: "cleaning-companies",
    label: "Cleaning companies",
    title: "Cleaning Company Leads Ireland | Domestic & Commercial",
    description:
      "Lead generation for Irish cleaning companies. Campaigns for recurring domestic contracts and commercial accounts, reported in contracts won. From €1,500 a month.",
    h1: "Cleaning leads worth keeping, not one-off jobs.",
    intro: [
      "Cleaning is one of the few trades where a single customer can be worth thousands a year, and one of the few where most advertising chases the customers worth the least. A one-off end-of-tenancy clean pays once. A weekly domestic contract pays fifty times.",
      "We build campaigns for cleaning companies around the recurring work, which means accepting a higher cost per enquiry in exchange for a customer who is still paying next year.",
    ],
    run: [
      {
        name: "Recurring domestic campaigns",
        text: "Aimed at households likely to want a regular cleaner rather than a one-off, and priced to reflect what that customer is actually worth.",
      },
      {
        name: "Commercial account campaigns",
        text: "Offices, clinics and premises. A longer sale with a much larger contract at the end of it, run separately from domestic.",
      },
      {
        name: "End-of-tenancy and one-off",
        text: "Real revenue and easy to win, but run as its own campaign so it does not consume the budget meant for contracts.",
      },
      {
        name: "Specialist service campaigns",
        text: "Carpet, upholstery, post-construction and deep cleans, where the margin is better and the competition thinner.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because people are letting you into their home and they check first.",
      },
    ],
    qualify: [
      "Is this a one-off clean or a regular contract?",
      "Domestic or commercial?",
      "How often — weekly, fortnightly, monthly?",
      "Roughly how many rooms, or what floor area?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Cost per lead is the wrong number here",
        body: [
          "Most cleaning companies judge advertising on cost per enquiry, which is exactly the wrong measure in a business with recurring revenue.",
          "A €40 lead that becomes a weekly contract for two years is a far better outcome than a €6 lead for a one-off clean, and a campaign optimised for cheap leads will reliably produce the latter. We report both, and we build towards contract value rather than enquiry count.",
        ],
      },
      {
        heading: "Commercial is a completely different sale",
        body: [
          "A domestic customer decides in an evening. A commercial one has a procurement process, an incumbent supplier and a notice period, and the sale can take months.",
          "They should never share a campaign, a landing page or a lead form. Most cleaning companies run one campaign for both and wonder why the commercial pipeline is empty.",
        ],
        list: [
          {
            title: "Domestic recurring",
            body: "Fast decision, trust-led, repeat revenue. The core of most cleaning businesses.",
          },
          {
            title: "Commercial contract",
            body: "Slow, procurement-led, large. Needs insurance, references and staff-vetting detail up front.",
          },
          {
            title: "One-off and specialist",
            body: "Immediate, price-competitive, no repeat. Useful for filling gaps rather than building a business.",
          },
        ],
      },
      {
        heading: "Trust does more work than price",
        body: [
          "People are handing over keys. Insurance, vetting, named staff and a consistent uniform matter more in this category than in almost any other trade.",
          "Advertising that leads on cheapness attracts the customers most likely to cancel. Advertising that leads on reliability and vetting costs more per enquiry and produces customers who stay.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise one-off cleans at all?",
        a: "Yes, but in their own campaign with their own budget. Mixed in with contract advertising they will eat it, because they are cheaper to generate.",
      },
      {
        q: "How do we win commercial accounts?",
        a: "Slowly and with proof. Insurance, vetting and references have to be visible before anyone will shortlist you, and the campaign has to allow for a long cycle.",
      },
      {
        q: "Is domestic cleaning too price-competitive?",
        a: "At the bottom, yes. The recurring end is far less so, because reliability matters more to that customer than five euro an hour.",
      },
      {
        q: "What should we measure?",
        a: "Contract value won, not enquiries received. We report both, but only one of them pays you.",
      },
      {
        q: "Do reviews matter here?",
        a: "More than in most categories. You are being let into somebody's home and they will read what other people said first.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["powerwashing", "gutter-cleaning", "home-care"],
  },
  {
    slug: "removals-companies",
    label: "Removals companies",
    title: "Removals Leads Ireland | Marketing for Moving Companies",
    description:
      "Lead generation for Irish removals and moving companies. Campaigns timed to property closings and the summer peak, reported in booked moves. From €1,500 a month.",
    h1: "Removals leads, timed to the closing date.",
    intro: [
      "A removals company's year is decided by somebody else's calendar. Moves cluster around property closings, school holidays and the end of the month, and the summer carries a disproportionate share of the whole year's work.",
      "That concentration is the opportunity and the risk. We build campaigns around when moves actually happen rather than spreading a budget evenly across a year that is anything but even.",
    ],
    run: [
      {
        name: "Seasonal budget weighting",
        text: "Spend concentrated into the summer peak and the end-of-month clusters, rather than flat across twelve months.",
      },
      {
        name: "Home-mover campaigns",
        text: "Aimed at people who have sale-agreed or signed, which is a much smaller and far more valuable audience than people who are idly considering.",
      },
      {
        name: "Office and commercial moves",
        text: "A separate, larger, slower sale run as its own campaign.",
      },
      {
        name: "Storage cross-sell",
        text: "If you have storage, it should be advertised to the movers you already have rather than bought separately.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because people are handing over everything they own and they look you up first.",
      },
    ],
    qualify: [
      "What is the moving date?",
      "Moving from where, to where?",
      "House size, or roughly how many rooms?",
      "Do you need packing, or transport only?",
      "Do you need storage between dates?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Timing beats targeting in this category",
        body: [
          "Almost everybody moves house eventually, so audience targeting does relatively little work here. What matters is catching somebody in the four to six weeks between agreeing a sale and needing a van.",
          "Reach them earlier and they will not remember you. Reach them later and they have booked. The whole campaign is built to hit that window, which is why the lead form asks for the date first.",
        ],
      },
      {
        heading: "The summer peak cuts both ways",
        body: [
          "Summer carries the volume, and it is also when every competitor is advertising and when your own capacity is tightest.",
          "The companies that do well here advertise hardest slightly before the peak, to book the diary in advance, and then pull back when they are full rather than paying to generate enquiries they have to turn away.",
        ],
      },
      {
        heading: "Quotes are where the money leaks",
        body: [
          "Most removals enquiries end in a quote, and most quotes are lost to the company that responded first with a real number rather than a request for a survey.",
          "That is a follow-up problem, not an advertising problem, and it is the single biggest thing we look at before recommending any increase in budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise hardest?",
        a: "Slightly before the summer peak, to fill the diary in advance. Advertising at the peak means competing with everyone at the highest prices.",
      },
      {
        q: "Should we stop when we are full?",
        a: "Yes, and most companies do not. Paying to generate enquiries you turn away costs money and reputation at the same time.",
      },
      {
        q: "Are commercial moves worth chasing?",
        a: "Larger and steadier, but a slower and more procurement-led sale. They need their own campaign, not a line on the domestic page.",
      },
      {
        q: "Do people book on price?",
        a: "Many do, which is why response speed matters more than budget. The first credible quote wins a large share of moves.",
      },
      {
        q: "Can we advertise storage separately?",
        a: "You can, but it is usually cheaper to sell it to movers you already have than to buy storage enquiries cold.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["self-storage", "estate-agents", "equipment-hire"],
  },
  {
    slug: "audiologists",
    label: "Audiologists",
    title: "Audiology Leads Ireland | Marketing for Hearing Clinics",
    description:
      "Lead generation for Irish audiology and hearing clinics. Campaigns built around free hearing tests and the PRSI treatment benefit, reported in appointments. From €1,500 a month.",
    h1: "Hearing test bookings, from a slow decision made by families.",
    intro: [
      "Hearing loss is noticed by the family long before it is admitted by the person who has it. The average gap between first noticing and doing something about it runs to years, and most of that time is spent not searching for anything at all.",
      "That makes this a patience business rather than an urgency one. The clinics that grow are the ones visible for a long time to two audiences at once: the person and the adult child who eventually makes the appointment.",
    ],
    run: [
      {
        name: "Free hearing test campaigns",
        text: "The standard and correct entry point. A low-commitment appointment that starts a relationship rather than trying to sell a device.",
      },
      {
        name: "Family-facing campaigns",
        text: "Aimed at adult children, who are frequently the ones who book. A completely different message from the patient-facing one.",
      },
      {
        name: "PRSI treatment benefit campaigns",
        text: "The entitlement is widely held and poorly understood, and explaining it plainly generates appointments.",
      },
      {
        name: "Follow-up over months, not days",
        text: "A hearing enquiry that does not convert this month frequently converts next year. The system keeps them rather than discarding them.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, so the clinic looks settled and professional when somebody checks.",
      },
    ],
    qualify: [
      "Is this for yourself or for a family member?",
      "Have you had a hearing test before, and roughly when?",
      "Are you currently wearing hearing aids?",
      "Are you claiming PRSI treatment benefit?",
      "County and clinic preference",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Two audiences, two messages",
        body: [
          "The person with hearing loss and the family member noticing it want completely different things said to them, and clinics that use one message for both underperform badly.",
          "The patient responds to dignity, discretion and independence. The family member responds to being told plainly that this is common, fixable and worth raising. Running one campaign at both dilutes both.",
        ],
      },
      {
        heading: "The treatment benefit is a booking trigger",
        body: [
          "A large share of the working and retired population has an entitlement under PRSI treatment benefit towards hearing aids, and a great many of them do not know it.",
          "Clinics that explain the entitlement clearly, without overstating what it covers, generate appointments from people who had assumed the cost put it out of reach. Accuracy matters here — overpromising produces angry consultations rather than sales.",
        ],
      },
      {
        heading: "Why the follow-up is the business",
        body: [
          "Somebody who attends a free test and declines aids is not a lost lead. They are a customer who is not ready, and the average gap before they return is measured in months or years.",
          "Most clinics let those contacts go cold. Keeping them, and contacting them properly, is usually worth more than increasing the advertising budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a free hearing test the right offer?",
        a: "It is the standard entry point in this category for good reason: low commitment, high attendance, and it starts the relationship without asking for a decision.",
      },
      {
        q: "Should we advertise to family members?",
        a: "Yes, as a separate campaign. Adult children book a large share of first appointments and they respond to a different message entirely.",
      },
      {
        q: "How should we handle the PRSI entitlement?",
        a: "Explain it accurately and do not overstate it. It is a genuine booking trigger and a genuine source of complaints when it is oversold.",
      },
      {
        q: "How long is the sales cycle?",
        a: "Long. Months at minimum, frequently years from first contact. The follow-up system matters more than the advertising volume.",
      },
      {
        q: "Is this too competitive because of the chains?",
        a: "They advertise heavily and nationally. Independent clinics win on continuity of care and on being genuinely local, which is a real and defensible difference.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["opticians", "home-care", "physiotherapy"],
  },
  {
    slug: "stairlifts-and-mobility",
    label: "Stairlifts and mobility",
    title: "Stairlift Leads Ireland | Marketing for Mobility Installers",
    description:
      "Lead generation for Irish stairlift and mobility installers. Campaigns built around the Housing Adaptation Grant and aimed at families, reported in surveys booked. From €1,500 a month.",
    h1: "Stairlift leads, from families making a hard decision.",
    intro: [
      "A stairlift is rarely bought happily. It is bought after a fall, after a hospital discharge, or after a family finally accepts that the stairs have become the thing keeping a parent from staying in their own home.",
      "Advertising that ignores that context reads badly and performs worse. We run campaigns for mobility installers that treat this as what it is: a difficult family decision with a grant attached and a real deadline behind it.",
    ],
    run: [
      {
        name: "Housing Adaptation Grant campaigns",
        text: "The grant drives a large share of this market and the application is daunting. Ads that address the paperwork, not just the product.",
      },
      {
        name: "Family-facing campaigns",
        text: "The adult child usually researches, rings and pays. The advertising is written for them.",
      },
      {
        name: "Hospital-discharge urgency",
        text: "A discharge date creates a hard deadline and a fast decision. Targeted and messaged separately from planned purchases.",
      },
      {
        name: "Rental and short-term campaigns",
        text: "For temporary needs after surgery, which is a different customer and a different price point.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because families check carefully before letting a company into a parent's house.",
      },
    ],
    qualify: [
      "Is this for yourself or for a family member?",
      "Is the staircase straight or curved?",
      "Is there a hospital discharge date driving this?",
      "Are you applying for the Housing Adaptation Grant?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "The grant is the sale",
        body: [
          "The Housing Adaptation Grant for People with a Disability covers a substantial share of the cost for many households, and it is administered by the local authority with means testing and a real waiting time.",
          "Families find the process intimidating, and the installer who explains it clearly — what is covered, how long it takes, what happens if it is refused — wins the job far more often than the one who simply quotes a price. This is the clearest example in any category we work in of paperwork being the product.",
        ],
      },
      {
        heading: "Curved is a different business from straight",
        body: [
          "A straight stairlift is close to a commodity, available quickly and priced competitively. A curved one is manufactured to the staircase, costs several times more and takes weeks.",
          "If you fit both, they need separate campaigns and separate expectations. If you fit only straight lifts, the form should say so before somebody books a survey you cannot fulfil.",
        ],
        list: [
          {
            title: "Straight",
            body: "Fast, competitive, frequently ex-demonstration or reconditioned. Decision made on price and speed.",
          },
          {
            title: "Curved",
            body: "Bespoke, expensive, weeks to manufacture. Decision made on trust and on survey quality.",
          },
          {
            title: "Rental",
            body: "Post-surgery and temporary. Low value individually but steady, and it feeds referrals.",
          },
        ],
      },
      {
        heading: "Tone is not a detail here",
        body: [
          "Advertising in this category fails more often on tone than on targeting. Language about independence and staying at home works; language about decline and disability does not.",
          "The family is already uncomfortable. Copy that treats the decision as sensible and ordinary converts better than copy that emphasises how serious the situation is.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we lead with the grant?",
        a: "For a large share of this market, yes — but lead with the help rather than the amount. Families are more worried about the process than the price.",
      },
      {
        q: "Do hospital discharges really drive enquiries?",
        a: "They create the hardest deadlines in this category. Those enquiries convert fast and deserve their own fast response.",
      },
      {
        q: "Who are we actually advertising to?",
        a: "Usually the adult child. They search, they ring and they frequently pay. The copy should speak to them.",
      },
      {
        q: "Is reconditioned stock worth advertising?",
        a: "If you carry it, yes. It answers the price objection honestly and brings in families the full price would have excluded.",
      },
      {
        q: "How do we handle a grant refusal?",
        a: "Have an answer ready before it happens. Families who are refused and then abandoned leave reviews, and this is a category where reviews are read closely.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["home-care", "attic-conversions", "bathroom-renovations"],
  },
  {
    slug: "blinds-and-curtains",
    label: "Blinds and curtains",
    title: "Blinds & Curtains Leads Ireland | Marketing for Fitters",
    description:
      "Lead generation for Irish blinds and curtain companies. Meta and Google campaigns aimed at new homeowners and renovators, reported in measures booked. From €1,500 a month.",
    h1: "Blinds and curtain leads, from houses that have just moved.",
    intro: [
      "Window dressing is bought at a moment, not over time. People buy blinds when they move in, when they finish an extension, or when they finally redecorate a room they have hated for years — and then they do not buy again for a decade.",
      "That makes the trigger far more important than the audience. We build campaigns for blinds and curtain companies aimed at households currently inside one of those moments.",
    ],
    run: [
      {
        name: "New-homeowner campaigns",
        text: "Aimed at people who have recently moved, who buy for the whole house at once rather than a window at a time.",
      },
      {
        name: "Extension and renovation campaigns",
        text: "A finished build needs dressing, and the budget is already allocated. A better customer than a single-room replacement.",
      },
      {
        name: "Showroom and home-visit split",
        text: "Two different offers. A home measure converts better and costs more to deliver; the campaign should reflect which you want.",
      },
      {
        name: "Visual-led creative",
        text: "This is a product people buy with their eyes. Real installs in real Irish houses, not manufacturer stock photography.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because the portfolio is the sales pitch in this category.",
      },
    ],
    qualify: [
      "Is this for a whole house or specific rooms?",
      "How many windows roughly?",
      "Blinds, curtains, shutters, or a mix?",
      "Have you recently moved or finished building work?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Your photographs are the campaign",
        body: [
          "Almost nobody buys blinds from a description. They buy from a picture of a room that looks like theirs, which is why manufacturer stock imagery consistently underperforms photographs of your own work.",
          "Irish houses look like Irish houses. A campaign built on real local installs in recognisable house types outperforms polished catalogue photography by a wide margin, and it costs nothing but the habit of photographing every job.",
        ],
      },
      {
        heading: "Whole-house buyers are worth chasing hard",
        body: [
          "A customer dressing one room is worth a few hundred euro. A customer who has just moved and is dressing twelve windows is worth several thousand, and they are reachable at a predictable moment.",
          "Campaigns that treat both the same way will fill the diary with single-window jobs, because those enquiries are cheaper to generate and far more numerous.",
        ],
      },
      {
        heading: "Shutters are a separate sale",
        body: [
          "Plantation shutters carry a much higher price and a much longer consideration than blinds, and they attract a different customer.",
          "If you sell them, they deserve their own campaign and their own landing page. Bundled in with blinds they get lost, and the margin goes with them.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise to renters?",
        a: "Generally not. Renters rarely buy window dressing and landlords buy on price alone. Both are poor customers relative to homeowners who have just moved.",
      },
      {
        q: "Do home visits convert better than showroom?",
        a: "Considerably, and they cost more to deliver. Whether that trade is worth it depends on your average order value, and we will look at it before choosing.",
      },
      {
        q: "Is stock photography really that bad?",
        a: "Yes. People recognise it, and they cannot picture their own room in it. Photographs of your own installs are the single cheapest improvement available.",
      },
      {
        q: "When is the best time of year?",
        a: "Spring and early autumn are strongest, and January is better than most expect because people are looking at rooms they have been stuck in.",
      },
      {
        q: "Should shutters have their own campaign?",
        a: "Yes. Higher price, longer decision, different customer. Bundled with blinds they underperform.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["kitchens", "flooring", "windows-and-doors"],
  },
  {
    slug: "water-treatment",
    label: "Water treatment",
    title: "Water Treatment Leads Ireland | Well & Filtration Marketing",
    description:
      "Lead generation for Irish water treatment and filtration companies. Campaigns aimed at private well owners and hard-water households. From €1,500 a month.",
    h1: "Water treatment leads, from households with a problem they can see.",
    intro: [
      "A very large number of Irish households are on a private well, and a great many more are on mains water hard enough to ruin a kettle in a year. Neither group thinks about water treatment until something visible happens: staining, smell, a failed test, or a new appliance destroyed by limescale.",
      "That visibility is what makes this advertisable. We build campaigns for water treatment companies around the specific problems households can actually see, rather than around the technology that fixes them.",
    ],
    run: [
      {
        name: "Problem-led campaigns",
        text: "Separate campaigns for iron staining, hard water, smell and bacterial failure, because people search the symptom rather than the solution.",
      },
      {
        name: "Free water test campaigns",
        text: "The natural entry point. A test produces a result, and a result produces a quote with evidence behind it.",
      },
      {
        name: "Well-owner targeting",
        text: "Aimed at the rural areas where private wells are the norm, which is far more efficient than advertising water treatment generally.",
      },
      {
        name: "New-build and renovation campaigns",
        text: "The cheapest moment to install treatment is during a build, and builders rarely raise it. The homeowner will if asked.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because before-and-after water photographs are unusually persuasive.",
      },
    ],
    qualify: [
      "Are you on a private well or mains water?",
      "What is the problem — staining, smell, limescale, or a failed test?",
      "Has the water been tested, and do you have the results?",
      "Is this a new build or an existing house?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "People search the symptom, not the solution",
        body: [
          "Almost nobody searches for a water softener or a UV filtration system. They search for why their water smells, why the bath is staining orange, or why their shower screen will not come clean.",
          "Campaigns built around product names miss that traffic entirely. Campaigns built around symptoms capture people at the exact moment they are trying to work out what is wrong, which is well before they have decided what to buy.",
        ],
      },
      {
        heading: "The test does the selling",
        body: [
          "A water test converts far better than a quote, because it turns an argument into evidence. A homeowner who has been told their water is hard will haggle; a homeowner holding a result will not.",
          "It also filters properly. Households with no real problem drop out at the test stage rather than after a survey, which saves everyone time.",
        ],
      },
      {
        heading: "Wells and mains are different markets",
        body: [
          "A private well owner worries about safety — bacteria, iron, a failed test. A mains customer worries about limescale, appliances and their skin.",
          "They respond to different language, sit in different places, and buy different equipment. One campaign for both consistently underperforms two campaigns run properly.",
        ],
        list: [
          {
            title: "Private well",
            body: "Safety-led. Testing, bacteria, iron and manganese. Rural targeting, higher urgency.",
          },
          {
            title: "Hard mains water",
            body: "Cost-led. Limescale, appliances, heating efficiency. Suburban targeting, longer consideration.",
          },
          {
            title: "New build",
            body: "Cheapest to install, hardest to reach. Requires catching people during construction.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is a free water test worth giving away?",
        a: "It is the strongest tool in this category. It creates evidence, it filters out households without a real problem, and it makes the quote almost automatic.",
      },
      {
        q: "Should we target by county?",
        a: "Target by water source and ground conditions rather than by county line. Well density and water hardness do not respect boundaries.",
      },
      {
        q: "Do people understand what they are buying?",
        a: "Rarely, and that is an advantage. The company that explains it plainly without jargon wins against the ones quoting specifications.",
      },
      {
        q: "Is new build worth pursuing?",
        a: "It is the cheapest install and the hardest to reach, because the decision sits with a homeowner who is overwhelmed with other choices.",
      },
      {
        q: "How seasonal is this?",
        a: "Mildly. Well problems spike after heavy rain and after dry spells, which is worth watching but not worth planning the whole year around.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["plumbers-and-heating", "drainage", "septic-tank-services"],
  },
  {
    slug: "interior-designers",
    label: "Interior designers",
    title: "Interior Design Leads Ireland | Marketing for Designers",
    description:
      "Lead generation for Irish interior designers. Campaigns that reach homeowners during a renovation, filtered for budget before the consultation. From €1,500 a month.",
    h1: "Interior design enquiries, filtered for budget before you meet.",
    intro: [
      "Interior design has the worst enquiry-to-client ratio of almost any category we work in, and it is not a marketing problem. It is a filtering problem. Most enquiries come from people who want the outcome and have not understood the cost, and every one of them consumes a consultation.",
      "So the job here is not more enquiries. It is fewer and better ones, which means putting the uncomfortable questions on the form rather than discovering the answers in a meeting.",
    ],
    run: [
      {
        name: "Budget-qualified lead forms",
        text: "The project budget asked before the consultation, plainly. It reduces enquiry volume and raises conversion, which is the trade worth making.",
      },
      {
        name: "Renovation-stage targeting",
        text: "Aimed at homeowners who have planning permission or a builder engaged, rather than people gathering ideas.",
      },
      {
        name: "Portfolio-led creative",
        text: "Real completed Irish projects. This is a category bought entirely on visual evidence.",
      },
      {
        name: "Service-tier campaigns",
        text: "Full-service, consultation-only and e-design are different products at different prices and should not share a campaign.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because the portfolio is the credential and it has to look current.",
      },
    ],
    qualify: [
      "What is the project — full house, single room, or new build?",
      "What is your budget range for the works?",
      "Do you have a builder or architect engaged?",
      "What is your timeline?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Asking about budget costs you enquiries and makes you money",
        body: [
          "Every designer worries that asking about budget on the form will frighten people away. It does, and that is the point.",
          "The enquiries it frightens away are overwhelmingly the ones that would have consumed a consultation and gone nowhere. What remains is a smaller number of people who have already accepted that this costs money, which is the only useful kind of enquiry in this category.",
        ],
      },
      {
        heading: "Stage matters more than intent",
        body: [
          "Somebody collecting ideas on Pinterest is not a customer, however enthusiastic. Somebody with planning permission and a builder booked is a customer with a deadline.",
          "Targeting and creative should both be aimed at the second group, even though the first is far larger and far cheaper to reach.",
        ],
      },
      {
        heading: "Three products, not one",
        body: [
          "Most designers offer several levels of service and advertise as though they offer one, which confuses the enquiry and attracts the wrong end of the market.",
        ],
        list: [
          {
            title: "Full service",
            body: "Highest value, longest commitment, smallest audience. Needs budget qualification above everything else.",
          },
          {
            title: "Consultation only",
            body: "A fixed-fee entry point that converts a share of clients upward. Genuinely useful as a first step.",
          },
          {
            title: "E-design or remote",
            body: "Lower price, wider catchment, no site visits. A different business and it should be advertised as one.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Will asking about budget reduce our enquiries?",
        a: "Yes, substantially, and that is the intended result. You will meet fewer people and sign more of them.",
      },
      {
        q: "Should we advertise to people at the ideas stage?",
        a: "Only if you have a low-cost entry product for them. Otherwise you are paying to reach people who are years from spending.",
      },
      {
        q: "How important is the portfolio?",
        a: "It is the entire credential. Campaigns in this category succeed or fail on the quality and recency of the work shown.",
      },
      {
        q: "Is a consultation-only tier worth offering?",
        a: "For most designers, yes. It converts curiosity into a paid first step and filters out people who were never going to commit.",
      },
      {
        q: "Do we need to be on Instagram?",
        a: "In this category, genuinely yes. It is where the work gets judged, and an out-of-date grid costs you clients.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["architects", "kitchens", "builders-and-extensions"],
  },
  {
    slug: "health-and-safety-consultants",
    label: "Health & safety consultants",
    title: "Health & Safety Consultant Leads Ireland | B2B Marketing",
    description:
      "Lead generation for Irish health and safety consultants. Campaigns aimed at businesses facing HSA inspections, tenders and safety statement obligations. From €1,500 a month.",
    h1: "Health and safety leads, from businesses with a deadline.",
    intro: [
      "Nobody buys health and safety consultancy because they want to. They buy it because a main contractor will not let them on site without a safety statement, because a tender requires certification, or because the HSA has been and left a list.",
      "Every one of those is a deadline, and deadlines are the most reliable advertising trigger there is. We build campaigns for safety consultants around the specific obligations that force the purchase.",
    ],
    run: [
      {
        name: "Obligation-led campaigns",
        text: "Separate campaigns for safety statements, risk assessments, tender requirements and post-inspection remediation, because each is a different deadline.",
      },
      {
        name: "Construction-sector campaigns",
        text: "PSDP and PSCS duties, site safety and contractor prequalification, which is the densest concentration of demand in this market.",
      },
      {
        name: "Retainer campaigns",
        text: "The recurring revenue underneath the one-off documents, advertised as an ongoing service rather than a product.",
      },
      {
        name: "Training and certification",
        text: "Where you offer it, run separately — a different buyer and a different price point from consultancy.",
      },
      {
        name: "Social media, fully run",
        text: "LinkedIn and Facebook kept current, because B2B buyers check whether a consultancy is real before they ring.",
      },
    ],
    qualify: [
      "What is driving this — a tender, an inspection, or a contractor requirement?",
      "What sector, and roughly how many employees?",
      "Do you have a current safety statement?",
      "Is there a deadline?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Sell the deadline, not the service",
        body: [
          "A business owner does not search for a health and safety consultant. They search for what they have been told they need: a safety statement, a risk assessment, a Safe-T-Cert, a contractor prequalification pack.",
          "Campaigns built around those specific obligations reach people at the moment of compulsion. Campaigns built around 'health and safety consultancy' reach people who are not currently being compelled by anything.",
        ],
      },
      {
        heading: "One-off documents are the way into a retainer",
        body: [
          "A safety statement is a single fee. An ongoing retainer covering reviews, audits and updates is worth many times more over the same period.",
          "Most consultants advertise the document and hope the retainer follows. It converts far better when the recurring service is presented at the point of sale rather than raised months later.",
        ],
      },
      {
        heading: "Construction is a different market from everything else",
        body: [
          "Construction carries specific statutory duties, a prequalification culture and main contractors who enforce compliance down the chain, which produces constant, predictable demand.",
          "Offices, retail and hospitality buy far less often and usually only after an incident or an inspection. If you serve both, they should not share a campaign — the urgency and the language are entirely different.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is B2B advertising worth it for a small consultancy?",
        a: "Yes, because the trigger is a legal obligation rather than a preference. You are reaching people who have to buy something, which is rare and valuable.",
      },
      {
        q: "Should we advertise on LinkedIn?",
        a: "Sometimes, and it is more expensive than people expect. Google captures the deadline-driven searches more cheaply, and we usually start there.",
      },
      {
        q: "How do we sell retainers rather than documents?",
        a: "Present the ongoing service at the point of the one-off sale. Raised later it sounds like an upsell; raised then it sounds like the sensible option.",
      },
      {
        q: "Is construction the best sector to target?",
        a: "The densest and most predictable, because compliance is enforced down the contractor chain. Other sectors buy after something goes wrong.",
      },
      {
        q: "Do we need case studies?",
        a: "They help considerably, and confidentiality makes them awkward. Sector and problem without naming the client is usually enough.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["engineers-and-surveyors", "it-support", "recruitment-agencies"],
  },
  {
    slug: "photographers",
    label: "Photographers",
    title: "Photography Leads Ireland | Marketing for Photographers",
    description:
      "Lead generation for Irish wedding, family and commercial photographers. Campaigns timed to engagement season and booked well ahead. From €1,500 a month.",
    h1: "Photography bookings, made a year before the date.",
    intro: [
      "Wedding photography is booked further in advance than almost anything else people buy, and the booking rush is concentrated into the weeks after Christmas and New Year when most engagements happen.",
      "That means a photographer advertising in June for a June wedding is a year and a half too late. The calendar, not the creative, is what most photography campaigns get wrong.",
    ],
    run: [
      {
        name: "Engagement-season campaigns",
        text: "Budget concentrated into January and February, when the year's engagements convert into enquiries.",
      },
      {
        name: "Package-led creative",
        text: "Real weddings at recognisable Irish venues, which is how couples actually shortlist.",
      },
      {
        name: "Venue-catchment targeting",
        text: "Aimed at the venues you already shoot at and want more of, rather than at a county.",
      },
      {
        name: "Family and commercial campaigns",
        text: "Separate, counter-seasonal work that fills the months weddings do not. Run as its own campaign.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because the feed is the portfolio and a stale one loses bookings.",
      },
    ],
    qualify: [
      "What is the date, and is the venue booked?",
      "Wedding, family, or commercial?",
      "Which venue, or which area?",
      "What is your budget range?",
      "How did you hear about us?",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "The calendar decides the campaign",
        body: [
          "Engagements cluster around Christmas, New Year and Valentine's Day, and enquiries follow within weeks. A photographer who is not visible in January has missed a disproportionate share of the year's bookings.",
          "Budget should be heavily weighted into that window and lighter through the summer, when you are shooting rather than selling and when every competitor is advertising into the same feed.",
        ],
      },
      {
        heading: "Venues are the best targeting signal available",
        body: [
          "Couples choose a venue before a photographer, almost without exception. That makes the venue the single most useful piece of information about a couple.",
          "Campaigns built around the venues you want to shoot at — with real images from those venues — outperform county-wide advertising substantially, and they build the relationship with the venue at the same time.",
        ],
      },
      {
        heading: "Counter-seasonal work is what makes the year survivable",
        body: [
          "Weddings concentrate into a short season and leave long gaps either side, and photographers who rely on them alone have a difficult winter.",
          "Family sessions, communions, and commercial and property work fill exactly those gaps, and they need their own campaigns rather than a mention on the wedding page.",
        ],
        list: [
          {
            title: "Weddings",
            body: "Booked 12-18 months ahead, highest value, concentrated season. Won in January.",
          },
          {
            title: "Family and portrait",
            body: "Short lead time, autumn and Christmas heavy, repeatable year after year.",
          },
          {
            title: "Commercial and property",
            body: "Year-round, invoice-based, unglamorous and steady. The most under-advertised of the three.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise hardest?",
        a: "January and February. Engagements cluster around Christmas and New Year and the enquiries follow immediately.",
      },
      {
        q: "Should we advertise during the summer?",
        a: "Lightly. You are shooting rather than selling, and everybody else is bidding into the same feed at the same time.",
      },
      {
        q: "Is venue targeting really better than county targeting?",
        a: "Considerably. The venue is chosen first, so it is the strongest signal about a couple that exists, and the imagery becomes far more relevant.",
      },
      {
        q: "Should we publish prices?",
        a: "A starting price at minimum. Couples filter hard on budget and hiding it generates enquiries from people who were never going to book.",
      },
      {
        q: "What about family and commercial work?",
        a: "Run them as separate campaigns. They fill the months weddings do not, and commercial is the most under-advertised of the three.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["wedding-venues", "hotels-and-guesthouses", "signage-and-print"],
  },
  {
    slug: "windscreen-repair",
    label: "Windscreen repair",
    title: "Windscreen Repair Leads Ireland | Marketing for Fitters",
    description:
      "Lead generation for Irish windscreen repair and replacement companies. Campaigns built around insurance cover and same-day mobile fitting. From €1,500 a month.",
    h1: "Windscreen leads, from a job the insurer usually pays for.",
    intro: [
      "Almost nobody budgets for a windscreen. It cracks on a Tuesday, it is an NCT failure and a safety problem, and the driver wants it dealt with before the weekend. The decision is made in under an hour.",
      "The unusual thing about this market is that comprehensive cover typically pays, frequently with no effect on the no-claims bonus. A driver who understands that stops price-shopping entirely, which changes what your advertising should say.",
    ],
    run: [
      {
        name: "Same-day and mobile campaigns",
        text: "Ads built around speed and coming to them, because that is what decides this sale.",
      },
      {
        name: "Insurance-led messaging",
        text: "Explaining plainly what cover usually pays and what it does not. It removes the price objection before it forms.",
      },
      {
        name: "Chip-repair campaigns",
        text: "Cheaper, faster and frequently free to the driver. A separate campaign, and a good source of future replacements.",
      },
      {
        name: "Fleet and commercial",
        text: "Vans, HGVs and company cars, which are a contract sale rather than a one-off and should be run separately.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because a driver checking you at ten at night wants to see a real business.",
      },
    ],
    qualify: [
      "Is it a chip or a full crack?",
      "What make, model and year is the vehicle?",
      "Are you claiming on insurance?",
      "Where is the vehicle — home, work or roadside?",
      "County and Eircode",
    ],
    proof: [
      { value: "#1", label: "Google ranking for emergency call-outs for a Dublin trades business" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "The insurance point is the whole campaign",
        body: [
          "Most drivers assume a windscreen will cost them several hundred euro and that claiming will cost them their no-claims bonus. Both are frequently wrong, and the confusion costs you jobs to whoever is cheapest.",
          "A company that states the position clearly — what is typically covered, what the excess usually is, that glass claims generally do not affect the bonus — converts far better than one competing on price, and attracts a customer who is not haggling.",
        ],
      },
      {
        heading: "Speed beats everything else",
        body: [
          "This is a same-day decision. The company that answers first and can come today wins a very large share of the work, almost regardless of price.",
          "Which means the bottleneck is rarely the advertising. If calls go unanswered between jobs, more budget simply buys more missed calls, and we will say so before recommending any increase.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we lead on price?",
        a: "Rarely. Lead on speed and on explaining the insurance position — that is what actually decides it, and it attracts better customers.",
      },
      {
        q: "Is chip repair worth advertising?",
        a: "Yes. It is cheap, fast, frequently free to the driver, and it puts you in front of somebody who will need a replacement eventually.",
      },
      {
        q: "Is fleet work worth chasing?",
        a: "Steadier and larger, but a slower procurement-led sale. It needs its own campaign, not a line on the consumer page.",
      },
      {
        q: "How fast do we need to answer?",
        a: "Same hour, ideally. This is one of the most response-sensitive categories we work in.",
      },
      {
        q: "Does the NCT drive demand?",
        a: "It creates a hard deadline for a lot of drivers, and those enquiries convert quickly.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["car-garages", "mobile-mechanics", "glazing"],
  },
  {
    slug: "tyre-fitting",
    label: "Tyre fitting",
    title: "Tyre Leads Ireland | Marketing for Tyre Fitters & Garages",
    description:
      "Lead generation for Irish tyre fitters and mobile tyre services. Campaigns built around NCT deadlines, winter demand and same-day fitting. From €1,500 a month.",
    h1: "Tyre leads, timed to the deadline that forces the purchase.",
    intro: [
      "Tyres are bought reluctantly and usually under pressure — an NCT coming up, a failure notice already issued, a blowout, or the first cold snap of the year. Almost nobody replaces tyres early.",
      "That makes the trigger far more important than the audience, and it makes timing the single biggest lever on a tyre campaign.",
    ],
    run: [
      {
        name: "NCT-deadline campaigns",
        text: "Aimed at drivers with a test due or a failure to remedy, which is the most reliable urgency in this market.",
      },
      {
        name: "Mobile fitting campaigns",
        text: "Coming to the driver at home or at work, which commands a premium and faces far less price comparison.",
      },
      {
        name: "Seasonal weighting",
        text: "Budget concentrated into the autumn cold snap and the pre-NCT periods rather than spread flat.",
      },
      {
        name: "Fleet and commercial contracts",
        text: "Vans, agricultural and haulage, run as a separate contract sale.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because price-sensitive buyers check whether you look legitimate first.",
      },
    ],
    qualify: [
      "What size are the tyres, or what car is it?",
      "How many do you need?",
      "Is there an NCT date driving this?",
      "Fitted at the garage or mobile?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "This market splits on price tolerance, not on car",
        body: [
          "Some drivers will take the cheapest tyre available and others will not, and advertising to both with one message wastes effort at each end.",
        ],
        list: [
          {
            title: "Budget-led",
            body: "Shopping purely on price, comparing four places. Winnable on stock and speed rather than margin.",
          },
          {
            title: "Convenience-led",
            body: "Mobile fitting, at home or at the office. Far less price comparison and a much better customer.",
          },
          {
            title: "Fleet and commercial",
            body: "Contracted, scheduled, invoiced. Slow to win, steady once won, and worth a separate campaign.",
          },
        ],
      },
      {
        heading: "Mobile fitting is the escape from price competition",
        body: [
          "A driver comparing four garages on price is a poor customer. A driver who wants someone to come to their office car park at eleven is buying convenience, and will pay for it.",
          "If you offer mobile, that should be the front of your advertising rather than a footnote. It is the most under-sold capability in this category.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we compete on price?",
        a: "Only where you have stock advantage. Mobile fitting and speed are better ground, and they attract customers who do not haggle.",
      },
      {
        q: "Does the NCT really drive enquiries?",
        a: "It is the most dependable trigger in the category — a hard date, a legal requirement and no way around it.",
      },
      {
        q: "How seasonal is it?",
        a: "Sharply. The first cold spell and the pre-test periods carry a disproportionate share of the year.",
      },
      {
        q: "Is fleet work worth it?",
        a: "Steady and contracted, but slow to win. Worth its own campaign if you have the capacity to service it.",
      },
      {
        q: "Do reviews matter here?",
        a: "More than people expect. Drivers are wary of being upsold and reviews are how they judge that.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["car-garages", "mobile-mechanics", "equipment-hire"],
  },
  {
    slug: "appliance-repair",
    label: "Appliance repair",
    title: "Appliance Repair Leads Ireland | Marketing for Engineers",
    description:
      "Lead generation for Irish appliance repair engineers. Campaigns for washing machines, ovens, dishwashers and fridges, reported in booked call-outs. From €1,500 a month.",
    h1: "Appliance repair leads, from people whose washing machine died today.",
    intro: [
      "A broken washing machine is an emergency in a way a broken tile is not. The household cannot wait, they ring two or three people, and whoever answers and can come soonest gets the job.",
      "The whole category runs on that. It is high volume, low ticket, and decided almost entirely on availability rather than on price or reputation.",
    ],
    run: [
      {
        name: "Appliance-specific campaigns",
        text: "Washing machine, oven, dishwasher and fridge run separately, because people search the appliance rather than the trade.",
      },
      {
        name: "Same-day and next-day messaging",
        text: "Availability stated plainly, because it is what decides this sale.",
      },
      {
        name: "Brand-led campaigns",
        text: "Where you are approved or specialise, said explicitly. It converts far better than a generic repair advert.",
      },
      {
        name: "Repair-or-replace content",
        text: "The question every customer is actually asking. Answering it honestly wins the ones worth having.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, so a household letting you in can see you are real.",
      },
    ],
    qualify: [
      "What appliance, and what make?",
      "What is it doing — or not doing?",
      "Roughly how old is it?",
      "Is it under warranty?",
      "County and Eircode",
    ],
    proof: [
      { value: "#1", label: "Google ranking for emergency call-outs for a Dublin trades business" },
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
    ],
    sections: [
      {
        heading: "Answer the repair-or-replace question honestly",
        body: [
          "Every customer in this category is quietly wondering whether they are about to spend a hundred euro on something they should be replacing.",
          "An engineer who says plainly when a repair is not worth it earns a great deal of trust and loses very little revenue, because the jobs given up were the ones most likely to end in a dispute. It is also the most shareable thing you can say in this market.",
        ],
      },
      {
        heading: "Volume business needs a volume system",
        body: [
          "This is a category of many small jobs, which means the admin is the constraint long before the advertising is.",
          "If calls go to voicemail while you are behind a washing machine, more budget just buys more missed calls. Before increasing spend we look at whether the enquiries you already get are actually being answered.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise by appliance or by trade?",
        a: "By appliance. People search 'washing machine repair', not 'appliance engineer', and campaigns built that way cost far less per enquiry.",
      },
      {
        q: "Is this too price-competitive?",
        a: "Less than you would think. It is decided on availability far more than on the call-out fee.",
      },
      {
        q: "Should we say when a repair is not worth it?",
        a: "Yes. It costs you a few small jobs and earns disproportionate trust, referrals and reviews.",
      },
      {
        q: "Do brand approvals matter?",
        a: "Considerably, if you have them. Say so explicitly — it converts much better than a generic repair advert.",
      },
      {
        q: "What is the real bottleneck?",
        a: "Almost always answering the phone. We check that before recommending more budget.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["electricians", "plumbers-and-heating", "it-support"],
  },
  {
    slug: "car-valeting",
    label: "Car valeting & detailing",
    title: "Car Valeting Leads Ireland | Marketing for Detailers",
    description:
      "Lead generation for Irish car valeting and detailing businesses. Campaigns for mobile valeting, detailing and pre-sale preparation. From €1,500 a month.",
    h1: "Valeting leads, from a business that sells on photographs.",
    intro: [
      "Valeting is one of the easiest services in Ireland to advertise and one of the most commonly advertised badly. It produces a dramatic visual result, and most operators post blurry photographs of a clean car in a dark yard.",
      "The gap between a good before-and-after and a bad one is the whole difference in this category, and it costs nothing but care.",
    ],
    run: [
      {
        name: "Before-and-after campaigns",
        text: "The single most effective creative in this category, shot properly and run as paid rather than left on a page.",
      },
      {
        name: "Detailing and ceramic campaigns",
        text: "Much higher value than a standard valet, a longer decision, and worth a separate campaign entirely.",
      },
      {
        name: "Pre-sale preparation",
        text: "Aimed at people about to sell privately, who have an obvious financial reason to spend and rarely think of it.",
      },
      {
        name: "Mobile and at-home",
        text: "Coming to the customer, which removes most of the price comparison.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because this is a category people judge entirely by eye.",
      },
    ],
    qualify: [
      "What size is the vehicle?",
      "Standard valet, full detail, or ceramic coating?",
      "Interior, exterior, or both?",
      "Are you preparing it for sale?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Your photographs are the entire sale",
        body: [
          "Nobody buys valeting from a description. They buy from a before-and-after that makes them look at their own car differently.",
          "Shoot in consistent light, from the same angle, with the same framing. That one discipline outperforms any amount of budget in this category, and almost nobody does it.",
        ],
      },
      {
        heading: "Detailing is a different business from valeting",
        body: [
          "A standard valet is a commodity bought on price and convenience. A full detail or a ceramic coating is a considered purchase at several times the price, bought on skill and evidence.",
          "Advertising them together drags the detailing work down to valet prices in the customer's head. They need separate campaigns and separate pages.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this too price-competitive?",
        a: "At the valet end, yes. At the detailing end, not at all — that is bought on evidence of skill.",
      },
      {
        q: "Do before-and-afters really work that well?",
        a: "They are the most effective creative in this category by a wide margin, provided they are shot consistently.",
      },
      {
        q: "Is pre-sale preparation worth targeting?",
        a: "Yes, and it is under-used. Somebody selling privately has an obvious financial reason to spend a hundred euro.",
      },
      {
        q: "Should mobile be the focus?",
        a: "If you offer it, it should be prominent. It removes most of the price comparison.",
      },
      {
        q: "Do I need TikTok or Instagram?",
        a: "Instagram genuinely suits this category. The work is visual and the results are immediate.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["car-garages", "powerwashing", "mobile-mechanics"],
  },
  {
    slug: "dog-grooming",
    label: "Dog grooming & pet services",
    title: "Dog Grooming Leads Ireland | Marketing for Groomers",
    description:
      "Lead generation for Irish dog groomers, pet sitters and boarding kennels. Campaigns that fill a recurring appointment book. From €1,500 a month.",
    h1: "Grooming enquiries that turn into a standing appointment.",
    intro: [
      "A dog groomer does not want customers, they want a diary that refills itself. A dog needs grooming every six to eight weeks for its whole life, so a single new client is worth several hundred euro a year and several thousand over time.",
      "That changes what a good campaign looks like. Chasing cheap one-off enquiries fills a week; winning recurring clients fills a year.",
    ],
    run: [
      {
        name: "Recurring-client campaigns",
        text: "Aimed at owners likely to rebook rather than at one-off bargain hunters, and priced accordingly.",
      },
      {
        name: "Breed-specific campaigns",
        text: "Owners search by breed. Doodle grooming is a different advert, and a different price, from a short-coat wash.",
      },
      {
        name: "Puppy campaigns",
        text: "The best customer in the category — a first groom that becomes a decade of appointments. Worth targeting deliberately.",
      },
      {
        name: "Boarding and sitting",
        text: "Seasonal and holiday-driven, run separately from grooming.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored. This is a category where photographs of the dogs do most of the selling.",
      },
    ],
    qualify: [
      "What breed, and what coat?",
      "When was the last groom?",
      "Full groom, bath and tidy, or de-shed?",
      "Is the dog nervous or does it have any handling needs?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Puppies are the most valuable enquiry you can get",
        body: [
          "A puppy's first groom, done well, frequently becomes a standing appointment for ten or twelve years, plus recommendations to everyone else in the owner's puppy class.",
          "Very few groomers advertise for puppies specifically, and it is the single highest-return targeting available in this category.",
        ],
      },
      {
        heading: "Doodles are a business decision, not just a breed",
        body: [
          "Doodle and poodle-cross coats take far longer, matt badly and are the most common source of difficult conversations about price and clipping off.",
          "Whether you take them, and at what price, should be stated clearly in your advertising. Being explicit filters out the arguments before they reach your table.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do we get people to rebook?",
        a: "Book the next appointment before they leave, and advertise for the kind of owner who wants that. It is a targeting and process question more than a marketing one.",
      },
      {
        q: "Should we advertise by breed?",
        a: "Yes. Owners search by breed and the pricing conversation differs enormously between coats.",
      },
      {
        q: "Are puppies worth targeting specifically?",
        a: "The highest-return audience in this category. A first groom can become a decade of appointments.",
      },
      {
        q: "Do photographs matter?",
        a: "They are most of the selling. Owners choose a groomer on the dogs they see leaving happy.",
      },
      {
        q: "Is boarding worth advertising separately?",
        a: "Yes — it is holiday-driven and seasonal, which is a different campaign entirely from grooming.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["veterinary", "home-care", "creches"],
  },
  {
    slug: "personal-trainers",
    label: "Personal trainers",
    title: "Personal Training Leads Ireland | Marketing for Trainers",
    description:
      "Lead generation for Irish personal trainers and small studios. Campaigns built around the January spike and retention after it. From €1,500 a month.",
    h1: "Personal training clients, and a plan for when January ends.",
    intro: [
      "Personal training has the most predictable demand curve of any service we work with. January is enormous, September is solid, and the rest of the year is a slow grind that most trainers never solve.",
      "The trainers who build a real income are not the ones who win January hardest. They are the ones who keep the January clients past March.",
    ],
    run: [
      {
        name: "January and September campaigns",
        text: "Budget concentrated where the intent genuinely is, rather than spread evenly across a year that is anything but even.",
      },
      {
        name: "Retention-focused offers",
        text: "Structures that sell a block rather than a session, because the economics of this business are entirely about how long somebody stays.",
      },
      {
        name: "Small-group and semi-private",
        text: "Better margin per hour, lower price per client, and a far easier sale than one-to-one.",
      },
      {
        name: "Online and hybrid coaching",
        text: "A different product with a wider catchment, run as its own campaign.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because clients choose a trainer on whether they can imagine themselves with them.",
      },
    ],
    qualify: [
      "What is the goal, and by when?",
      "Have you trained with someone before?",
      "One-to-one, small group, or online?",
      "How many sessions a week are realistic?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Winning January is easy and mostly worthless",
        body: [
          "Anyone can fill a January with discounted introductory offers. Most of those clients are gone by the middle of February and the trainer is back where they started, having discounted their rate in the process.",
          "The campaign should be built to sell a twelve-week block to somebody with a specific goal, not a taster to somebody with a resolution. Fewer enquiries, considerably more revenue.",
        ],
      },
      {
        heading: "Small group is the under-sold product",
        body: [
          "One-to-one is the hardest sale in the category: highest price, most intimidating, and a big commitment from a stranger.",
          "Small-group training is cheaper for the client, better per hour for you, and far less daunting for somebody who has never done this. Most trainers advertise the hard product and wonder why the enquiries stall.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we discount in January?",
        a: "Generally not. It attracts the clients least likely to stay and it devalues your rate for everyone who is already paying it.",
      },
      {
        q: "What should we sell instead of sessions?",
        a: "A block with a defined goal and an end date. It converts better and the client stays far longer.",
      },
      {
        q: "Is small-group worth pushing?",
        a: "For most trainers it is the better product — easier sale, better hourly rate, less intimidating for beginners.",
      },
      {
        q: "Does online coaching work?",
        a: "For some trainers, well, and it widens the catchment enormously. It is a different campaign and a different price point.",
      },
      {
        q: "What should we measure?",
        a: "Clients retained past twelve weeks, not enquiries received. Only one of those pays your rent.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["gyms-and-fitness", "physiotherapy", "skin-clinics"],
  },
  {
    slug: "couriers-and-delivery",
    label: "Couriers & delivery",
    title: "Courier Leads Ireland | Marketing for Delivery Companies",
    description:
      "Lead generation for Irish courier and same-day delivery companies. Campaigns aimed at business accounts rather than one-off parcels. From €1,500 a month.",
    h1: "Courier leads worth having, which means accounts not parcels.",
    intro: [
      "A one-off parcel is worth a few euro and a great deal of admin. A business account sending forty items a week is worth thousands a year and almost no acquisition effort after the first month.",
      "Most courier advertising chases the first and wonders why the margins are poor. We build for the second.",
    ],
    run: [
      {
        name: "Business-account campaigns",
        text: "Aimed at companies with regular volume, which is a slower sale with a far larger outcome.",
      },
      {
        name: "Same-day and urgent",
        text: "The premium end, where price sensitivity is lowest and availability decides everything.",
      },
      {
        name: "Sector-specific campaigns",
        text: "Pharmacy, legal, laboratory and trade counter work each have different requirements and convert far better addressed directly.",
      },
      {
        name: "Pallet and oversize",
        text: "Separate from parcel work, with a different customer and a different price.",
      },
      {
        name: "Social media, fully run",
        text: "Including LinkedIn, because business accounts check whether you are a real operation.",
      },
    ],
    qualify: [
      "Is this a one-off or regular volume?",
      "Roughly how many items a week?",
      "Same-day, next-day or scheduled?",
      "What are you sending, and how big?",
      "Collection and delivery areas",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Judge this on account value, not cost per lead",
        body: [
          "A €60 enquiry that becomes a business account sending weekly for two years is a far better outcome than a €4 enquiry for a single parcel.",
          "A campaign optimised for cheap leads will reliably deliver the second, because those are far more numerous and far easier to generate. We report cost per lead and account value, and we build toward the latter.",
        ],
      },
      {
        heading: "Reliability is the only real argument",
        body: [
          "Every courier claims to be fast and careful. Nobody buying can tell the difference from an advert, so the claim does nothing.",
          "What works is specifics: guaranteed collection windows, proof of delivery, named contacts, what happens when something goes wrong. Businesses are buying the absence of problems, not speed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are one-off parcels worth advertising?",
        a: "Rarely. Low value, high admin, and they consume the budget meant for accounts because they are cheaper to generate.",
      },
      {
        q: "How do we win business accounts?",
        a: "Slowly and with specifics. Collection windows, proof of delivery and what happens when something goes wrong matter more than speed claims.",
      },
      {
        q: "Is same-day worth focusing on?",
        a: "It is the premium end with the least price sensitivity, and availability decides it. Worth its own campaign.",
      },
      {
        q: "Does LinkedIn matter here?",
        a: "For business accounts, somewhat. Google usually captures the active searches more cheaply, so we normally start there.",
      },
      {
        q: "What should we measure?",
        a: "Accounts won and their monthly value. Enquiry count is close to meaningless in this category.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["self-storage", "equipment-hire", "it-support"],
  },
  {
    slug: "groundworks",
    label: "Groundworks & site clearance",
    title: "Groundworks Leads Ireland | Marketing for Contractors",
    description:
      "Lead generation for Irish groundworks, site clearance and excavation contractors. Campaigns aimed at builders, developers and self-builders. From €1,500 a month.",
    h1: "Groundworks leads, from people who already have planning.",
    intro: [
      "Groundworks is bought at a specific moment: after planning is granted and before the build starts. Reach somebody earlier and there is nothing to quote; reach them later and the contractor is already on site.",
      "The window is short and it is identifiable, which makes this a more targetable business than most contractors assume.",
    ],
    run: [
      {
        name: "Self-build campaigns",
        text: "Aimed at people with planning granted, who are the most reachable and most valuable audience in this category.",
      },
      {
        name: "Builder and developer campaigns",
        text: "A relationship sale rather than a lead-form sale, supported by a site that proves capability and plant.",
      },
      {
        name: "Site clearance and demolition",
        text: "Shorter, simpler jobs that fill gaps between larger contracts, run as their own campaign.",
      },
      {
        name: "Agricultural groundworks",
        text: "Farm roadways, yards and sheds — seasonal, relationship-led and quite separate from construction work.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because plant and finished sites photograph extremely well and prove capability instantly.",
      },
    ],
    qualify: [
      "Is this a self-build, a development, or a farm job?",
      "Has planning been granted?",
      "What is the site area, roughly?",
      "What is needed — clearance, excavation, foundations, drainage?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Self-builders are the reachable audience",
        body: [
          "A builder chooses a groundworks contractor from people they already know. A self-builder has no idea who anyone is and is actively looking, frequently for months before they start.",
          "That makes self-builders the audience worth advertising to, even though builders may be the bulk of your turnover. The advertising wins the self-builds; the relationships win the rest.",
        ],
      },
      {
        heading: "Show the plant",
        body: [
          "Capability is the whole question in this category, and nothing demonstrates it faster than photographs of your own machinery on your own sites.",
          "A contractor whose website shows three diggers and six finished sites gets taken seriously. One with a logo and a phone number does not, regardless of how good the work is.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise to builders or self-builders?",
        a: "Advertise to self-builders; they are actively looking and have no existing contractor. Builders come through relationships, which advertising supports rather than replaces.",
      },
      {
        q: "When should we reach people?",
        a: "Just after planning is granted. Earlier and there is nothing to quote, later and somebody else is on site.",
      },
      {
        q: "Is site clearance worth advertising?",
        a: "Yes, as its own campaign. Shorter jobs that fill the gaps between larger contracts.",
      },
      {
        q: "Do photographs matter?",
        a: "More than in almost any trade. Plant and finished sites prove capability in a way that claims cannot.",
      },
      {
        q: "Is agricultural work different?",
        a: "Substantially — seasonal, relationship-led and priced differently. It should not share a campaign with construction.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["builders-and-extensions", "drainage", "agricultural-contractors"],
  },
  {
    slug: "steel-fabrication",
    label: "Steel fabrication",
    title: "Steel Fabrication Leads Ireland | B2B Marketing",
    description:
      "Lead generation for Irish steel fabricators and structural steel companies. Campaigns aimed at builders, architects and industrial buyers. From €1,500 a month.",
    h1: "Steel fabrication leads, from buyers with a drawing in hand.",
    intro: [
      "Structural steel is not bought casually. Somebody has a drawing, a programme and a budget, and they are looking for a fabricator who can hit a date without drama.",
      "That is a small audience and a valuable one, and it is reachable — most fabricators simply never try, relying entirely on the same handful of contractors they have always worked for.",
    ],
    run: [
      {
        name: "Capability-led campaigns",
        text: "Built around what you can actually fabricate and to what tolerance, because that is what buyers search and assess.",
      },
      {
        name: "Self-build and agricultural steel",
        text: "Sheds, frames and portal buildings — a consumer-adjacent market most fabricators ignore and which advertises well.",
      },
      {
        name: "Architect and engineer visibility",
        text: "The people who specify frequently decide, and they are reachable separately from the people who buy.",
      },
      {
        name: "Balustrade, gates and architectural metalwork",
        text: "Higher margin, visual, and far better suited to social than structural work.",
      },
      {
        name: "Social media, fully run",
        text: "Including LinkedIn, because buyers check whether you are a real operation before enquiring.",
      },
    ],
    qualify: [
      "What is the project — structural, agricultural, or architectural?",
      "Do you have drawings?",
      "Roughly what tonnage or scale?",
      "What is the programme date?",
      "County and site location",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Architectural metalwork is the under-advertised half",
        body: [
          "Structural steel is a relationship business that advertising supports slowly. Balustrades, gates, staircases and architectural metalwork are a different market entirely — visual, higher margin, and bought by homeowners and architects who are actively searching.",
          "Most fabricators treat that work as a sideline and advertise none of it. It is frequently the easiest revenue available to them.",
        ],
      },
      {
        heading: "Buyers are assessing risk, not price",
        body: [
          "A contractor choosing a fabricator is mainly worried about whether the steel arrives on time and fits. Price matters, but a late delivery costs far more than a quote difference.",
          "Advertising and a website that address capacity, programme reliability and certification do more than any price message. It is a category where competence is the whole sell.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does B2B advertising work for fabricators?",
        a: "Better than most expect, because so few competitors advertise that a buyer searching finds very little.",
      },
      {
        q: "Should we advertise architectural work separately?",
        a: "Yes, and most fabricators under-do it. It is visual, higher margin and bought by people actively searching.",
      },
      {
        q: "Is agricultural steel worth targeting?",
        a: "In rural counties, considerably. Sheds and portal frames are a steady market that advertises well.",
      },
      {
        q: "Do architects matter?",
        a: "They frequently specify, which effectively decides it. Worth reaching separately from the contractor who buys.",
      },
      {
        q: "What do buyers actually care about?",
        a: "Whether it arrives on time and fits. Address that and you outperform anyone competing on price.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["engineers-and-surveyors", "farm-buildings", "fencing-and-gates"],
  },
  {
    slug: "stonemasons",
    label: "Stonemasons",
    title: "Stonemason Leads Ireland | Marketing for Stone Masonry",
    description:
      "Lead generation for Irish stonemasons. Campaigns for stone cladding, walls, restoration and heritage work, reported in surveys booked. From €1,500 a month.",
    h1: "Stonemasonry leads, for work people choose with their eyes.",
    intro: [
      "Stone is never the cheap option. Somebody choosing it has already decided to spend more than the alternative would cost, which makes this one of the few trades where the customer is not primarily price-driven.",
      "What they are looking for is evidence — that you have done this before, on a house like theirs, to a standard they would be happy with.",
    ],
    run: [
      {
        name: "Portfolio-led campaigns",
        text: "Real completed work in recognisable Irish settings, which is how this decision is actually made.",
      },
      {
        name: "Restoration and heritage campaigns",
        text: "Specialist, high-value and much less contested. Worth a campaign of its own if you do this work.",
      },
      {
        name: "Cladding and feature walls",
        text: "The volume end — entrances, facades, garden features — where most consumer demand sits.",
      },
      {
        name: "Architect and builder visibility",
        text: "Specifiers send a great deal of stone work, and they are reachable separately.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because stonework photographs beautifully and almost nobody here exploits that.",
      },
    ],
    qualify: [
      "What is the project — cladding, walls, restoration, or feature work?",
      "Roughly what area?",
      "What stone do you have in mind?",
      "Is this new build, renovation or heritage?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Heritage work is the premium nobody advertises",
        body: [
          "Restoration and conservation work is highly skilled, poorly served and frequently funded by grants or by owners with a genuine commitment to doing it properly.",
          "If you can do lime mortar, rebuilding and conservation-standard repair, that deserves its own page and its own campaign. It is the least price-sensitive work available to a stonemason and it is barely contested online.",
        ],
      },
      {
        heading: "Photograph in the right light",
        body: [
          "Stone looks flat and grey in overcast photographs, which is how most of it is shot in Ireland. The same wall in low afternoon light looks like the reason somebody would pay for it.",
          "Trades that sell on appearance win or lose on this. It costs nothing and it is the single biggest improvement available to most masons.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is stonework too niche to advertise?",
        a: "No — it is under-contested, which is different. Few masons advertise and fewer still show their work properly.",
      },
      {
        q: "Should heritage work be separate?",
        a: "Yes. It is the least price-sensitive work in the trade and it deserves its own page and campaign.",
      },
      {
        q: "Do architects send work?",
        a: "A great deal of it. They are worth reaching separately from homeowners.",
      },
      {
        q: "Does photography really matter that much?",
        a: "In this trade, more than almost any other. Stone shot in poor light looks like nothing at all.",
      },
      {
        q: "Is this seasonal?",
        a: "Somewhat — external work follows the weather. Quotes and surveys can be won in winter for spring starts.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["builders-and-extensions", "plastering", "landscapers"],
  },
  {
    slug: "monumental-sculptors",
    label: "Monumental sculptors",
    title: "Headstone & Memorial Leads Ireland | Marketing for Sculptors",
    description:
      "Lead generation for Irish monumental sculptors and memorial companies. Considerate campaigns for families choosing a headstone. From €1,500 a month.",
    h1: "Memorial enquiries, handled with the care the subject deserves.",
    intro: [
      "A family choosing a headstone is doing it months after a death, usually once the ground has settled, and usually while still grieving. They are not shopping, and advertising that treats them as shoppers does real harm and wins nothing.",
      "This is a category where restraint outperforms persuasion. The work is to be findable, clear about cost and process, and easy to contact — nothing more.",
    ],
    run: [
      {
        name: "Findable, considerate search campaigns",
        text: "Present when a family looks, absent when they are not. No retargeting people around the internet after a bereavement.",
      },
      {
        name: "Cemetery and regulation guidance",
        text: "Every cemetery has its own rules on size, stone and inscription. Explaining them plainly is genuinely useful and it earns the enquiry.",
      },
      {
        name: "Clear pricing",
        text: "Families are frequently afraid to ask. Publishing ranges removes the most uncomfortable part of the conversation.",
      },
      {
        name: "Funeral-director relationships",
        text: "Most of this work comes by referral. Advertising supports that rather than replacing it, and we will say so.",
      },
      {
        name: "Social media, handled carefully",
        text: "A presence that looks settled and professional, without advertising into people's feeds on this subject.",
      },
    ],
    qualify: [
      "Which cemetery is the memorial for?",
      "Is this a new memorial, an addition, or a restoration?",
      "Do you know what material you would prefer?",
      "Is there a date you are working toward?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "What we will not do in this category",
        body: [
          "We do not retarget people who visited your website, we do not build audiences from bereavement signals, and we do not run urgency or scarcity messaging.",
          "All of it is technically possible and some agencies do it. It is intrusive, it damages your reputation with exactly the families and funeral directors you depend on, and we will not set it up.",
        ],
      },
      {
        heading: "Publishing prices is a kindness that also converts",
        body: [
          "Families frequently delay contacting anyone because they have no idea whether a headstone costs eight hundred euro or five thousand, and are uncomfortable asking.",
          "A clear range removes that barrier entirely. It is the single most effective change most memorial companies can make, and it is also simply the decent thing to do.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is advertising appropriate in this category?",
        a: "Being findable is. Pursuing people is not. We build campaigns that are present when a family searches and absent otherwise.",
      },
      {
        q: "Do you use retargeting here?",
        a: "No. Following a grieving family around the internet is intrusive and it damages the reputation your referrals depend on.",
      },
      {
        q: "Should we publish prices?",
        a: "Yes. Families are often afraid to ask, and a clear range removes the main reason they delay contacting anyone.",
      },
      {
        q: "What about funeral director referrals?",
        a: "They are the bulk of this work. Advertising supports those relationships; it does not replace them, and we will not pretend otherwise.",
      },
      {
        q: "Is cemetery regulation content worth writing?",
        a: "Genuinely useful and it earns enquiries. Every cemetery has different rules and families cannot find them easily.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["funeral-directors", "stonemasons", "solicitors"],
  },
  {
    slug: "fire-safety",
    label: "Fire safety & extinguishers",
    title: "Fire Safety Leads Ireland | Marketing for Servicing Companies",
    description:
      "Lead generation for Irish fire safety and extinguisher servicing companies. Campaigns built around annual servicing obligations and inspections. From €1,500 a month.",
    h1: "Fire safety leads, from a market with a legal deadline in it.",
    intro: [
      "Fire safety equipment has to be serviced, and the obligation does not go away when a business forgets about it. Extinguishers, emergency lighting, alarms and fire doors all carry servicing requirements, and most premises are somewhere between overdue and unaware.",
      "That makes this an unusually dependable market. The demand is created by regulation and by insurers rather than by anybody's appetite to spend.",
    ],
    run: [
      {
        name: "Compliance-led campaigns",
        text: "Built around the specific obligation — extinguisher servicing, emergency lighting, fire door inspection — because that is what buyers search.",
      },
      {
        name: "Post-inspection campaigns",
        text: "Aimed at premises that have had a visit and been left a list, which is urgent and price-tolerant work.",
      },
      {
        name: "Recurring service contracts",
        text: "The revenue underneath the one-off visits. Advertised as an ongoing service rather than a product.",
      },
      {
        name: "Sector campaigns",
        text: "Hospitality, childcare, healthcare and construction each have different requirements and convert far better addressed directly.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because business buyers check that you are a genuine operation.",
      },
    ],
    qualify: [
      "What premises type is it?",
      "What is due — extinguishers, emergency lighting, alarms, fire doors?",
      "Roughly how many units or what floor area?",
      "Has an inspection or insurer raised this?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Sell the obligation, not the equipment",
        body: [
          "A business owner does not search for a fire safety company. They search for what they have been told they need — extinguisher servicing, a fire safety certificate, emergency lighting testing.",
          "Campaigns built around those specific obligations reach people at the moment of compulsion. Campaigns built around 'fire safety solutions' reach nobody in particular.",
        ],
      },
      {
        heading: "The contract is worth more than the visit",
        body: [
          "A one-off service is a single invoice. An annual contract across a portfolio of premises is worth many times more and costs almost nothing to retain.",
          "Presenting the recurring service at the point of the first visit converts far better than raising it a year later, when it sounds like an upsell rather than the obvious arrangement.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this market really that reliable?",
        a: "More than most. The demand comes from regulation and insurers rather than from anyone's willingness to spend, which makes it steady.",
      },
      {
        q: "Should we advertise by obligation or by service?",
        a: "By obligation. People search what they have been told they need, not what your industry calls it.",
      },
      {
        q: "How do we win contracts rather than visits?",
        a: "Present the recurring arrangement at the first visit. Raised later it sounds like an upsell; raised then it sounds sensible.",
      },
      {
        q: "Which sectors are worth targeting?",
        a: "Hospitality, childcare, healthcare and construction — all have specific obligations and all get inspected.",
      },
      {
        q: "Do post-inspection enquiries convert?",
        a: "Very well. There is a deadline and a list, which is the most reliable urgency there is.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["security-and-alarms", "health-and-safety-consultants", "electricians"],
  },
  {
    slug: "counselling-and-therapy",
    label: "Counselling & therapy",
    title: "Counselling Practice Marketing Ireland | Client Enquiries",
    description:
      "Ethical lead generation for Irish counsellors and psychotherapists. Discreet campaigns that fill a caseload without pressure tactics. From €1,500 a month.",
    h1: "Counselling enquiries, without any of the usual pressure tactics.",
    intro: [
      "Somebody looking for a therapist has usually been thinking about it for months and has opened and closed the search several times. They are not going to be persuaded by urgency, and attempting it will simply lose them.",
      "So the work here is to be findable, to be clear about what you treat and what you charge, and to make the first contact as undaunting as possible. That is genuinely most of it.",
    ],
    run: [
      {
        name: "Findable search campaigns",
        text: "Present when somebody looks, on the specific issues you work with rather than on the word counselling.",
      },
      {
        name: "Modality and specialism pages",
        text: "CBT, couples work, bereavement, trauma, addiction. People search the problem, not the method.",
      },
      {
        name: "Clear fees and availability",
        text: "Published plainly. Uncertainty about cost is the most common reason somebody never makes contact.",
      },
      {
        name: "Online and in-person split",
        text: "Two different catchments with different competition, run as separate campaigns.",
      },
      {
        name: "Social media, handled with restraint",
        text: "A settled professional presence, without advertising mental health into people's feeds.",
      },
    ],
    qualify: [
      "What would you like to work on?",
      "Individual, couples, or family?",
      "In person or online?",
      "Do you have a preference on approach or gender of therapist?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "What we will not do in this category",
        body: [
          "No retargeting people who visited a therapy website, no audiences built from health or distress signals, no countdowns or limited-availability messaging.",
          "Some of it is technically possible and it is all inappropriate here. It also fails commercially — this is a category where anything that feels like pressure confirms the fear that stopped somebody contacting you in the first place.",
        ],
      },
      {
        heading: "Publishing fees fills more slots than hiding them",
        body: [
          "A great many people never make a first enquiry because they do not know whether a session costs fifty euro or a hundred and fifty, and feel awkward asking.",
          "Stating your fee and your availability removes the single largest barrier to contact in this profession. It reduces enquiries slightly and increases actual bookings substantially.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is advertising appropriate for a therapy practice?",
        a: "Being findable is, and most practices are not. Pursuing people is not, and we will not build it.",
      },
      {
        q: "Do you use retargeting?",
        a: "Not in this category. Following somebody around the internet after they looked at therapy is intrusive and it fails commercially as well as ethically.",
      },
      {
        q: "Should we publish fees?",
        a: "Yes. Uncertainty about cost is the most common reason somebody never makes contact at all.",
      },
      {
        q: "Should we advertise by issue or by modality?",
        a: "By issue. People search anxiety, bereavement or relationship difficulty. Very few search for a named therapeutic approach.",
      },
      {
        q: "Does online widen the catchment?",
        a: "Considerably, and it is a different campaign with different competition and different price expectations.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["physiotherapy", "home-care", "skin-clinics"],
  },
  {
    slug: "chiropractors",
    label: "Chiropractors",
    title: "Chiropractic Leads Ireland | Marketing for Clinics",
    description:
      "Lead generation for Irish chiropractic clinics. Campaigns built around pain that has not gone away, reported in new patient appointments. From €1,500 a month.",
    h1: "Chiropractic enquiries, from people who have already waited too long.",
    intro: [
      "Almost nobody goes to a chiropractor at the first twinge. They wait, they try painkillers, they wait some more, and they make the appointment when the pain starts affecting sleep or work.",
      "By that point they are motivated, specific about what hurts, and ready to book — which makes this an unusually straightforward market to advertise into, provided you reach them at that moment rather than earlier.",
    ],
    run: [
      {
        name: "Condition-led campaigns",
        text: "Lower back, neck, sciatica, headaches. People search the pain, never the profession.",
      },
      {
        name: "New-patient offers",
        text: "A first consultation structured to be easy to say yes to, without discounting the ongoing care.",
      },
      {
        name: "Occupational campaigns",
        text: "Desk workers, drivers and trades each have predictable presentations and respond to being addressed directly.",
      },
      {
        name: "Retention and care plans",
        text: "Where the economics of the practice actually sit, supported rather than left to chance.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because patients check a clinic before letting anyone near their spine.",
      },
    ],
    qualify: [
      "What is the main problem, and where?",
      "How long has it been going on?",
      "Have you had treatment for it before?",
      "Is it affecting sleep or work?",
      "County and clinic preference",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Advertise the pain, not the profession",
        body: [
          "A campaign built on the word chiropractor reaches people who have already decided what they want, which is a small and heavily contested audience.",
          "A campaign built on sciatica, lower back pain or persistent headaches reaches the much larger group still working out who to see. They are earlier in the decision and considerably cheaper to reach.",
        ],
      },
      {
        heading: "Be careful what you claim",
        body: [
          "Claims about treating conditions beyond musculoskeletal pain attract regulatory attention and, more immediately, the wrong patients.",
          "We write to what you can stand over on a call. It keeps the practice out of trouble and it produces patients whose expectations match what you actually do.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we advertise by condition?",
        a: "Yes. People search the pain, not the profession, and the condition-led audience is much larger and cheaper.",
      },
      {
        q: "Do new-patient offers work?",
        a: "They lower the barrier to a first visit. Structure them so they do not devalue the ongoing care, which is where the practice earns.",
      },
      {
        q: "What can we claim?",
        a: "What you can stand over on a call. Overclaiming attracts both regulatory attention and patients whose expectations you cannot meet.",
      },
      {
        q: "Do reviews matter?",
        a: "A great deal. People are cautious about their spine and reviews are the main reassurance available.",
      },
      {
        q: "Is retention part of this?",
        a: "It is most of the economics. Advertising fills the top; whether patients complete a course of care decides the practice.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["physiotherapy", "gyms-and-fitness", "skin-clinics"],
  },
  {
    slug: "podiatry-and-chiropody",
    label: "Podiatry & chiropody",
    title: "Podiatry Leads Ireland | Marketing for Foot Clinics",
    description:
      "Lead generation for Irish podiatrists and chiropodists. Campaigns for routine care, diabetic foot checks and biomechanics. From €1,500 a month.",
    h1: "Podiatry enquiries, mostly from people who cannot reach their own feet.",
    intro: [
      "Podiatry divides into two businesses that barely resemble each other. Routine nail and skin care is high-volume, recurring, and largely an older population who need it every couple of months for the rest of their lives. Biomechanics and orthotics is a considered clinical purchase at several times the price.",
      "Most clinics advertise one message at both and get the volume of the first at the margins of neither.",
    ],
    run: [
      {
        name: "Routine care campaigns",
        text: "Recurring appointments with an older audience, which needs different targeting and much plainer language.",
      },
      {
        name: "Diabetic foot care",
        text: "Clinically important, frequently referred, and genuinely under-served. Worth its own campaign.",
      },
      {
        name: "Biomechanics and orthotics",
        text: "Runners, sports injuries and gait problems. A different patient at a different price point.",
      },
      {
        name: "Home-visit campaigns",
        text: "For patients who cannot travel, which is a large share of the routine market and commands a premium.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, with the family members who book appointments in mind as much as the patient.",
      },
    ],
    qualify: [
      "What is the problem — nails, skin, pain, or gait?",
      "Is this for yourself or a family member?",
      "Do you have diabetes or circulation problems?",
      "Clinic visit or home visit?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Family members do a lot of the booking",
        body: [
          "A substantial share of routine podiatry appointments are made by an adult child for a parent who has stopped being able to manage their own feet.",
          "That person responds to completely different language than the patient does — practical, reassuring, and about dignity rather than about treatment. Very few clinics write for them and it is a straightforward advantage.",
        ],
      },
      {
        heading: "Home visits are the under-priced service",
        body: [
          "Patients who cannot travel are precisely the patients who most need regular care, and they are frequently willing to pay a premium for someone to come to them.",
          "Most clinics offer it quietly, if at all. Advertised properly it is high-margin, intensely loyal, recurring work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should routine and biomechanics share a campaign?",
        a: "No. Different patients, different prices, different language. Run together, the specialist work gets priced like nail care.",
      },
      {
        q: "Who are we advertising to?",
        a: "Frequently the adult child booking for a parent, not the patient. They respond to different language entirely.",
      },
      {
        q: "Are home visits worth advertising?",
        a: "Yes, and most clinics under-sell them. High margin, very loyal, and genuinely needed.",
      },
      {
        q: "Is diabetic foot care worth a campaign?",
        a: "Clinically important and under-served. It also brings referrals from GPs and nurses over time.",
      },
      {
        q: "Do reviews matter?",
        a: "Considerably, especially to the family member making the booking on somebody else's behalf.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["physiotherapy", "home-care", "audiologists"],
  },
  {
    slug: "swimming-schools",
    label: "Swimming schools",
    title: "Swimming Lesson Leads Ireland | Marketing for Swim Schools",
    description:
      "Lead generation for Irish swimming schools. Term-based campaigns aimed at parents, built around waiting lists and safety. From €1,500 a month.",
    h1: "Swimming lesson enquiries, timed to the term.",
    intro: [
      "Swimming lessons sell on a term calendar and on one underlying motivation that parents rarely state directly: they do not want their child to drown. Everything else — badges, technique, confidence — sits on top of that.",
      "The business problem is rarely demand. It is usually that enquiries arrive in the wrong week, from parents wanting a slot that filled in August.",
    ],
    run: [
      {
        name: "Term-timed campaigns",
        text: "Budget concentrated into the enrolment windows rather than spread across a year when there are no places anyway.",
      },
      {
        name: "Waiting-list capture",
        text: "When you are full, enquiries should join a list rather than bounce to a competitor. Most schools lose them entirely.",
      },
      {
        name: "Adult and non-swimmer campaigns",
        text: "A quieter, under-served market with far less competition and a very motivated customer.",
      },
      {
        name: "Intensive and holiday courses",
        text: "Filling the weeks when term teaching stops, which is otherwise dead capacity.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because parents check safety, ratios and qualifications before anything else.",
      },
    ],
    qualify: [
      "What age is the swimmer?",
      "What level — complete beginner, improver, or stroke work?",
      "Which pool or area suits you?",
      "Weekday, evening or weekend?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Being full is not the same as being finished",
        body: [
          "Most swim schools stop advertising when they fill, and lose every enquiry that arrives afterwards to whoever has a place.",
          "A properly run waiting list turns that traffic into next term's enrolment, and it costs nothing. It is the single most common piece of value left on the table in this category.",
        ],
      },
      {
        heading: "Adult non-swimmers are barely served",
        body: [
          "A meaningful number of Irish adults cannot swim and are quietly embarrassed about it, which is why nobody advertises to them and why the ones who do, do well.",
          "It requires careful, non-patronising language and a promise of privacy. Handled properly it is a motivated, low-competition and very loyal market.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise?",
        a: "Ahead of each enrolment window. Advertising when every slot is already gone generates frustration rather than customers.",
      },
      {
        q: "What should we do when we are full?",
        a: "Capture a waiting list. Most schools let those enquiries go entirely, which is the biggest waste in this category.",
      },
      {
        q: "Are adult lessons worth targeting?",
        a: "Under-served, motivated and loyal, provided the language is careful and privacy is promised.",
      },
      {
        q: "What do parents actually care about?",
        a: "Safety, ratios and qualifications, in that order. Badges and technique matter far less than schools assume.",
      },
      {
        q: "Do intensives help?",
        a: "They fill weeks that would otherwise be dead capacity, and they suit families who cannot commit to a term.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["gyms-and-fitness", "creches", "grinds-and-tutoring"],
  },
  {
    slug: "music-schools",
    label: "Music schools & tutors",
    title: "Music Lesson Leads Ireland | Marketing for Music Teachers",
    description:
      "Lead generation for Irish music schools and private teachers. Term-based campaigns aimed at parents and adult learners. From €1,500 a month.",
    h1: "Music lesson enquiries, and students who stay past Christmas.",
    intro: [
      "Music teaching has an enrolment problem and a retention problem, and they are not the same problem. September fills easily. February is when half the students quietly stop coming.",
      "A teaching business is built on the students who are still there in year three, so the marketing has to attract the families likely to become those students rather than whoever responds to a September advert.",
    ],
    run: [
      {
        name: "Term-timed enrolment campaigns",
        text: "Concentrated into September and January, which is when this decision is actually made.",
      },
      {
        name: "Instrument-specific campaigns",
        text: "Piano, guitar and violin are different searches with different competition and different parent expectations.",
      },
      {
        name: "Adult learner campaigns",
        text: "A growing, under-served market with different motivations and a much shorter decision.",
      },
      {
        name: "Exam and grade pathways",
        text: "For families who want structure and progression, which correlates strongly with staying.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because recordings of actual students do more than any claim about method.",
      },
    ],
    qualify: [
      "What age is the student?",
      "Which instrument?",
      "Complete beginner or returning?",
      "Are you interested in grades and exams?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Advertise for the families who will still be here in June",
        body: [
          "A parent who wants to try something for a term and a parent who wants their child to learn an instrument look identical in an enquiry form and behave completely differently.",
          "Mentioning structure, practice expectations and exam pathways in the advertising filters gently toward the second group. It reduces enquiries and raises the number of students still attending at the end of the year, which is what actually pays.",
        ],
      },
      {
        heading: "Adults are the quiet growth market",
        body: [
          "Adult beginners are a substantial and largely ignored market — people who stopped at twelve, or always meant to start, and have more disposable income than a parent paying for a child.",
          "They decide faster, they are less price-sensitive, and almost nobody advertises to them. It is the easiest expansion available to most teaching businesses.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise?",
        a: "September and January carry almost all the enrolment. Spreading budget evenly across the year wastes most of it.",
      },
      {
        q: "How do we improve retention?",
        a: "Set expectations about practice in the advertising itself. It attracts families who are prepared for it and deters the ones who are not.",
      },
      {
        q: "Are adult learners worth targeting?",
        a: "Yes, and they are badly under-served. Faster decisions, less price sensitivity, and very little competition.",
      },
      {
        q: "Should we advertise by instrument?",
        a: "Yes. Parents search piano lessons or guitar lessons, never music tuition.",
      },
      {
        q: "Do recordings help?",
        a: "More than anything else. Hearing an actual student is worth more than any description of your method.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["grinds-and-tutoring", "driving-schools", "creches"],
  },
  {
    slug: "wedding-planners",
    label: "Wedding planners",
    title: "Wedding Planner Leads Ireland | Marketing for Planners",
    description:
      "Lead generation for Irish wedding planners and on-the-day coordinators. Budget-qualified enquiries, timed to engagement season. From €1,500 a month.",
    h1: "Wedding planning enquiries, filtered for budget before the call.",
    intro: [
      "Wedding planning has a brutal enquiry-to-booking ratio, and it is a filtering problem rather than a marketing one. Most enquiries come from couples who want the outcome and have not costed it, and each one consumes a long emotional conversation.",
      "So the aim is fewer and better enquiries, which means putting the uncomfortable questions on the form rather than discovering the answers an hour into a call.",
    ],
    run: [
      {
        name: "Engagement-season campaigns",
        text: "Budget concentrated into January and February, when the year's engagements turn into enquiries.",
      },
      {
        name: "Budget-qualified forms",
        text: "Total wedding budget asked plainly. It reduces enquiries and raises bookings, which is the trade worth making.",
      },
      {
        name: "Service-tier campaigns",
        text: "Full planning, partial planning and on-the-day coordination are different products at different prices and should not share a campaign.",
      },
      {
        name: "Venue-catchment targeting",
        text: "Aimed at the venues you know and want more of, which is also how the referral relationship gets built.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because this is a category judged almost entirely on portfolio.",
      },
    ],
    qualify: [
      "What is the date, and is the venue booked?",
      "Roughly how many guests?",
      "What is your total wedding budget?",
      "Full planning, partial, or on-the-day?",
      "County or venue",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "On-the-day coordination is the easier sale",
        body: [
          "Full planning is a large fee and a long commitment that many couples will not make to a stranger. On-the-day coordination is a fraction of the price, obviously valuable, and far easier to say yes to.",
          "It also converts upward. A couple who books coordination in March frequently wants more help by August. Most planners advertise only the hardest product and wonder why the pipeline is thin.",
        ],
      },
      {
        heading: "Venues are the best referral source there is",
        body: [
          "Couples book a venue before a planner, almost without exception, and venue coordinators are asked for recommendations constantly.",
          "Advertising aimed at the venues you want to work in does two jobs: it reaches those couples, and it makes your name familiar to the people they will ask.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will asking about budget lose us enquiries?",
        a: "Yes, and that is the intention. The ones it loses are the ones that would have consumed an hour and gone nowhere.",
      },
      {
        q: "When should we advertise hardest?",
        a: "January and February. Engagements cluster around Christmas and New Year and enquiries follow within weeks.",
      },
      {
        q: "Should we lead with full planning?",
        a: "Usually not. On-the-day coordination is a far easier first sale and a large share of it converts upward.",
      },
      {
        q: "How important is the portfolio?",
        a: "It is the whole credential. Recent, real Irish weddings at recognisable venues.",
      },
      {
        q: "Do venue relationships matter?",
        a: "They are the strongest referral source in the category, and advertising into those venues supports them.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["wedding-venues", "photographers", "hotels-and-guesthouses"],
  },
  {
    slug: "celebrants",
    label: "Celebrants",
    title: "Celebrant Leads Ireland | Marketing for Wedding Celebrants",
    description:
      "Lead generation for Irish wedding and funeral celebrants. Campaigns built around legal solemnisation and booking a year ahead. From €1,500 a month.",
    h1: "Celebrant bookings, from couples who do not know the rules yet.",
    intro: [
      "Most couples planning a non-religious wedding in Ireland do not initially understand the difference between a legally solemnising celebrant and one who performs a ceremony that is not itself the legal marriage.",
      "That confusion is the biggest source of both enquiries and disappointment in this category, and the celebrant who explains it clearly and early wins a very large share of the bookings.",
    ],
    run: [
      {
        name: "Solemnisation-clarity campaigns",
        text: "Explaining plainly what is legally required and what you can and cannot do. It is what couples are actually searching for.",
      },
      {
        name: "Engagement-season timing",
        text: "Budget concentrated into January and February, because ceremonies are booked a year or more ahead.",
      },
      {
        name: "Ceremony-style campaigns",
        text: "Humanist, spiritual, bilingual and family-inclusive ceremonies attract very different couples.",
      },
      {
        name: "Funeral and naming ceremonies",
        text: "A separate, year-round, referral-led side of the work requiring an entirely different tone.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, with real ceremonies rather than stock imagery.",
      },
    ],
    qualify: [
      "What kind of ceremony is it?",
      "What is the date, and is the venue booked?",
      "Do you need a legally solemnising celebrant?",
      "Roughly how many guests?",
      "County or venue",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Explain the legal position before anything else",
        body: [
          "Couples arrive confused about registration, notice periods and who can legally marry them, and most celebrant websites add to that by leading with tone and philosophy.",
          "A page that sets out the requirements plainly — the notification period, what the State requires, and exactly what you are authorised to do — converts far better than anything about your approach, because it is the question they came with.",
        ],
      },
      {
        heading: "Funerals are a different job in every respect",
        body: [
          "Funeral and memorial celebrancy is booked in days rather than a year, it comes almost entirely through funeral directors, and it requires a completely different tone from wedding work.",
          "It should sit on its own page with its own language, and it should never be advertised with urgency or retargeting.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do couples search for?",
        a: "Almost always the legal question first — whether a ceremony will actually marry them. Answering it plainly wins the enquiry.",
      },
      {
        q: "When should we advertise?",
        a: "January and February. Ceremonies are booked a year or more ahead, so the season is engagement season, not wedding season.",
      },
      {
        q: "Should funeral work be separate?",
        a: "Entirely. Different timescale, different referral source, different tone, and no advertising pressure of any kind.",
      },
      {
        q: "Is bilingual or Irish-language ceremony worth mentioning?",
        a: "If you offer it, yes. It is specifically searched for and very few celebrants advertise it.",
      },
      {
        q: "How far ahead do couples book?",
        a: "Frequently twelve to eighteen months, which is why January matters far more than June.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["wedding-venues", "wedding-planners", "funeral-directors"],
  },
  {
    slug: "catering-companies",
    label: "Catering companies",
    title: "Catering Leads Ireland | Marketing for Caterers",
    description:
      "Lead generation for Irish catering companies. Campaigns for weddings, corporate and private events, reported in quotes and bookings. From €1,500 a month.",
    h1: "Catering enquiries, split by the three jobs you actually do.",
    intro: [
      "Catering looks like one business and is usually three. Weddings are booked a year ahead at high value. Corporate is repeat, scheduled and invoiced. Private events are short-notice and unpredictable.",
      "They have different customers, different lead times and different margins, and a single campaign covering all three will be mediocre at each.",
    ],
    run: [
      {
        name: "Wedding catering campaigns",
        text: "Timed to engagement season and aimed at couples who have a venue but no caterer.",
      },
      {
        name: "Corporate account campaigns",
        text: "Repeat business with a purchasing process, which is slower to win and far steadier once won.",
      },
      {
        name: "Private and short-notice events",
        text: "Christenings, funerals, parties and gatherings. Quick decisions, smaller value, useful for filling gaps.",
      },
      {
        name: "Menu and dietary clarity",
        text: "Allergens, vegan and halal options stated plainly, because they decide more bookings than people admit.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because food is judged entirely by eye and most caterers photograph theirs badly.",
      },
    ],
    qualify: [
      "What kind of event is it?",
      "What date, and how many guests?",
      "Do you have a venue, and does it have a kitchen?",
      "Any dietary requirements to plan around?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Corporate is the revenue that does not have to be re-won",
        body: [
          "A wedding is a large one-off. A corporate account ordering lunches twice a week is smaller each time and worth considerably more over a year, with almost no repeat acquisition cost.",
          "Most caterers chase weddings because they are visible and exciting, and under-invest in the accounts that would carry them through January. Both deserve campaigns; only one gives you a predictable year.",
        ],
      },
      {
        heading: "Photograph the food properly",
        body: [
          "Food is bought entirely by eye and most catering photography is taken in a service kitchen under fluorescent light at the worst possible moment.",
          "One decent shoot of your actual dishes, in daylight, will outperform any amount of copy about quality and local sourcing. It is the cheapest improvement available in this category.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should weddings and corporate share a campaign?",
        a: "No. Different lead times, different buyers, different margins. Run together, neither performs.",
      },
      {
        q: "Is corporate worth the slower sale?",
        a: "It is what makes the year predictable. Weddings are seasonal and one-off; accounts repeat without re-acquisition.",
      },
      {
        q: "Do dietary options matter commercially?",
        a: "More than caterers admit. They frequently decide which quote is accepted, and stating them plainly wins bookings.",
      },
      {
        q: "How important are photographs?",
        a: "They are most of the sale. Food is judged by eye and most catering photography actively works against the business.",
      },
      {
        q: "Is short-notice work worth advertising?",
        a: "As its own campaign, yes. It fills gaps and it converts fast, but it will eat a wedding budget if mixed in.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["wedding-venues", "restaurants-and-cafes", "hotels-and-guesthouses"],
  },
  {
    slug: "marquee-hire",
    label: "Marquee & event hire",
    title: "Marquee Hire Leads Ireland | Marketing for Event Hire",
    description:
      "Lead generation for Irish marquee and event hire companies. Campaigns timed to a short season, reported in booked dates. From €1,500 a month.",
    h1: "Marquee bookings, for a business with about twenty weekends.",
    intro: [
      "A marquee hire company earns most of its year in roughly twenty weekends, and the weather can take several of them. That concentration means every booked date matters far more than a lead count suggests.",
      "It also means the enquiries that arrive in February decide the year, and the ones that arrive in July are mostly people whose original plan fell through.",
    ],
    run: [
      {
        name: "Early-season campaigns",
        text: "Concentrated into the winter and spring months when dates are actually being reserved.",
      },
      {
        name: "Wedding and event marquee campaigns",
        text: "The core of most operators' revenue, aimed at couples with a venue or a family home in mind.",
      },
      {
        name: "Corporate and public event hire",
        text: "Midweek and shoulder-season work that fills the gaps weddings leave.",
      },
      {
        name: "Package clarity",
        text: "Flooring, lining, heating, lighting and furniture stated up front, because unclear inclusions are the main cause of lost quotes.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because a marquee is bought from photographs of other people's events.",
      },
    ],
    qualify: [
      "What date, and is it flexible?",
      "How many guests?",
      "Where is the site, and what surface is it?",
      "Do you need flooring, heating or lighting?",
      "County and Eircode",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "€2.75", label: "cost per lead on a live trades campaign" },
    ],
    sections: [
      {
        heading: "Price the whole thing or lose the quote",
        body: [
          "The most common reason a marquee quote is rejected is that it looked cheaper in the advert than it turned out to be once flooring, lining, heating and furniture were added.",
          "Stating what is included and what is extra, plainly and early, loses you a few enquiries and wins you considerably more bookings. Customers comparing three quotes reward whoever made the comparison possible.",
        ],
      },
      {
        heading: "Site questions belong on the form",
        body: [
          "Ground conditions, access, slope and surface decide whether a job is straightforward or impossible, and finding out on the day is expensive for everyone.",
          "Asking on the enquiry form filters out the sites you cannot serve before anybody has driven anywhere.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we advertise?",
        a: "Winter and early spring. Dates are reserved months ahead, and by June the good weekends are gone.",
      },
      {
        q: "Should we publish prices?",
        a: "At least what is included and what is extra. Hidden extras are the main reason quotes get rejected in this category.",
      },
      {
        q: "Is corporate work worth chasing?",
        a: "It fills midweek and shoulder season, which weddings never will. Worth its own campaign.",
      },
      {
        q: "What should the form ask?",
        a: "Site conditions above all — surface, access and slope. It saves wasted site visits.",
      },
      {
        q: "How much does weather affect the business?",
        a: "Enough that a booked date is worth protecting. It is an argument for booking early rather than for discounting late.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["wedding-venues", "equipment-hire", "catering-companies"],
  },
  {
    slug: "bike-shops",
    label: "Bike shops & repair",
    title: "Bike Shop Leads Ireland | Marketing for Cycle Retailers",
    description:
      "Lead generation for Irish bike shops and repair workshops. Campaigns built around the Cycle to Work scheme and the spring surge. From €1,500 a month.",
    h1: "Bike shop enquiries, and the scheme most customers do not understand.",
    intro: [
      "The Cycle to Work scheme is the single biggest driver of bike sales in Ireland and it is also the most confusing thing about buying a bike. Employees do not know their limit, what is included, or how their employer processes it.",
      "A shop that explains the scheme clearly gets the sale, because the customer's actual question is not which bike — it is how this works.",
    ],
    run: [
      {
        name: "Cycle to Work campaigns",
        text: "Explaining the scheme plainly: limits, what is included, and how you handle the paperwork with their employer.",
      },
      {
        name: "Seasonal weighting",
        text: "Concentrated into spring and the scheme's busy periods rather than spread across a year with a dead winter.",
      },
      {
        name: "Servicing and repair campaigns",
        text: "The steady revenue underneath the sales, and the reason customers come back.",
      },
      {
        name: "E-bike campaigns",
        text: "A much higher-value sale with a longer decision and a customer who needs far more reassurance.",
      },
      {
        name: "Social media, fully run",
        text: "Posted and monitored, because workshop content builds the trust that sells servicing.",
      },
    ],
    qualify: [
      "Is this a new bike, a service, or a repair?",
      "Are you using the Cycle to Work scheme?",
      "What kind of riding — commuting, road, mountain, or e-bike?",
      "Roughly what budget?",
      "County and area",
    ],
    proof: [
      { value: "21", label: "leads at €2.75 each on €57.78 of spend for a home-improvement client" },
      { value: "+290%", label: "qualified leads per month for a Dublin trades business" },
    ],
    sections: [
      {
        heading: "Handle the paperwork and say so",
        body: [
          "Employees frequently abandon a purchase because the scheme paperwork looks like a hassle and their employer is slow.",
          "A shop that states plainly it will deal with the employer, prepare the invoice and guide the process removes the last obstacle. It is a small operational promise that converts a surprising number of stalled sales.",
        ],
      },
      {
        heading: "Servicing is what makes the year survivable",
        body: [
          "Bike sales are sharply seasonal. Servicing is not, and it brings the same customer back two or three times a year.",
          "Most shops advertise bikes and mention servicing. Reversing that emphasis in the quieter months keeps the workshop busy when the shop floor is not.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Cycle to Work really that important?",
        a: "It is the biggest single driver of bike sales in Ireland, and the confusion around it is the biggest obstacle to closing them.",
      },
      {
        q: "Should we advertise servicing separately?",
        a: "Yes, and especially in the off-season. It is the least seasonal revenue a bike shop has.",
      },
      {
        q: "Are e-bikes a different sale?",
        a: "Substantially. Higher value, longer decision, and the customer needs far more reassurance about range, battery and servicing.",
      },
      {
        q: "How seasonal is this?",
        a: "Sharply for sales. Weighting budget toward spring and the scheme periods beats spreading it evenly.",
      },
      {
        q: "Do we compete with online retailers?",
        a: "On price, no. On fitting, servicing, warranty support and handling the scheme, comfortably.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
    related: ["car-garages", "gyms-and-fitness", "equipment-hire"],
  },
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);

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
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);

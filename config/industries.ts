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
    related: ["bathroom-renovations", "roofers", "estate-agents"],
  },
];

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);

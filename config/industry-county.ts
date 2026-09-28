/**
 * Industry × county pages — /industries/[slug]/[county].
 *
 * Evidence: the two largest queries on the site after the brand name are
 * both roofing-in-Cork, and both are people looking for a case study:
 *
 *   growthdigital.ie cork roofing case study            101 imp   pos 8.6
 *   cork roofing repairs case study growth digital…       7        69.4
 *
 * We cannot answer that with a case study, because there isn't one —
 * no roofing client and no Cork client in config/case-studies.ts, and
 * inventing either would be the one thing on this site that could
 * genuinely damage the business on a sales call.
 *
 * What we can answer honestly is the underlying question: does this
 * agency understand roofing in Cork. That is what these pages do.
 *
 * DELIBERATELY SMALL. 106 industries × 26 counties is 2,756 pages and a
 * textbook doorway set. Only combinations where the county genuinely
 * changes the trade are included — weather, housing stock, distance,
 * competition. If a page would read the same with the county swapped,
 * it does not belong here.
 */

export interface IndustryCounty {
  /** industry slug from config/industries.ts */
  industry: string;
  /** county slug from config/counties.ts */
  county: string;
  industryLabel: string;
  countyName: string;
  title: string;
  description: string;
  h1: string;
  intro: [string, string];
  sections: { heading: string; body: string[] }[];
  towns: string[];
  faqs: { q: string; a: string }[];
}

const PRICE_FAQ = {
  q: "What does it cost?",
  a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
};

export const industryCounty: IndustryCounty[] = [
  {
    industry: "roofers",
    county: "cork",
    industryLabel: "roofers",
    countyName: "Cork",
    title: "Roofing Leads Cork | Marketing for Cork Roofing Contractors",
    description:
      "Lead generation for Cork roofing contractors: Atlantic weather, an old city housing stock and west Cork distances all change how the work comes in.",
    h1: "Roofing leads in Cork, weather and all.",
    intro: [
      "Cork roofing demand is driven by weather coming off the Atlantic, and it does not arrive evenly. A single bad system can produce a month of call-outs in three days, and the contractors who capture it are the ones already visible when the wind drops.",
      "The county also splits hard. Cork city has a dense, old housing stock with slate, chimneys and valleys that need real skill. West Cork is exposed, scattered and an hour's drive between jobs.",
    ],
    sections: [
      {
        heading: "Storm weeks are the year in miniature",
        body: [
          "Atlantic systems hit Cork earlier and harder than most of the country, and the run from October through February produces a disproportionate share of the year's emergency work.",
          "That is an argument for being set up before the season rather than during it. A roofer who starts advertising the morning after a storm is bidding against every other roofer in the county at the worst possible moment, and is invisible in the map results that actually get the calls.",
        ],
      },
      {
        heading: "City slate and county exposure are different businesses",
        body: [
          "Cork city and the older suburbs — Sunday's Well, Blackrock, Douglas — carry period housing with slate roofs, lead valleys and chimney work. That is skilled, well-paid, planned work, and the customers research before they ring.",
          "West Cork and the coast is exposure, wind damage and long drives. The jobs are more urgent, the travel eats the margin, and a contractor needs to be honest with themselves about how far out it is worth going.",
          "We build the campaigns around whichever of those two you actually do, because advertising for both with one message wins neither well.",
        ],
      },
      {
        heading: "What we would actually run",
        body: [
          "Google Ads on the emergency and repair searches in your own part of the county, weighted into the storm season. Meta to the towns you cover, showing finished roofs on houses people recognise.",
          "And a lead form that asks the roof type, the problem and whether there is water coming in — because a Cork roofer driving forty minutes to a job that turns out to be a cracked ridge tile has lost the morning.",
        ],
      },
    ],
    towns: [
      "Cork city",
      "Douglas",
      "Ballincollig",
      "Carrigaline",
      "Midleton",
      "Mallow",
      "Bandon",
      "Clonakilty",
      "Fermoy",
      "Cobh",
      "Kinsale",
      "Macroom",
    ],
    faqs: [
      {
        q: "When should a Cork roofer be advertising?",
        a: "Before the storm season rather than during it. Atlantic systems arrive from October and the contractors who capture that work are the ones already visible when it starts.",
      },
      {
        q: "Is west Cork worth covering?",
        a: "If you genuinely travel there, yes, and the work is more urgent. If you do not, the drive will cost you more than the job is worth and the lead form should filter it out.",
      },
      {
        q: "Do you have a Cork roofing case study?",
        a: "No. We work with roofing contractors and we work with Cork businesses, but we have no Cork roofing client and we will not present one we do not have. Ask on a call and we will tell you exactly who we work with and what we did.",
      },
      {
        q: "What makes Cork city roofing different?",
        a: "Older housing stock — slate, lead valleys, chimneys. That is skilled planned work with customers who research first, which is a different campaign from storm-damage call-outs.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "dublin",
    industryLabel: "roofers",
    countyName: "Dublin",
    title: "Roofing Leads Dublin | Marketing for Dublin Roofers",
    description:
      "Lead generation for Dublin roofing contractors: the most expensive clicks in Ireland, a huge pre-1970s housing stock and competition that never sleeps.",
    h1: "Roofing leads in Dublin, where the clicks cost real money.",
    intro: [
      "Dublin is the most expensive place in Ireland to advertise roofing, and it is also where the most roofing work is. A click that costs a euro in Mayo can cost six or seven here for the same search.",
      "That changes the maths entirely. In a cheap county you can buy your way to enquiries and fix the follow-up later. In Dublin, an unanswered phone or a slow website is throwing away a budget that was expensive before it started.",
    ],
    sections: [
      {
        heading: "Conversion matters more than budget here",
        body: [
          "At Dublin click prices the difference between a site that converts at two per cent and one that converts at five is the difference between a campaign that works and one that quietly loses money every month.",
          "So we look at the website and the response process before recommending any increase in spend. In most Dublin roofing accounts we inherit, that is where the money is going rather than into the bidding.",
        ],
      },
      {
        heading: "The housing stock is the opportunity",
        body: [
          "Dublin has an enormous quantity of pre-1970s housing that is now at the age where roofs, gutters, flashing and chimneys all come due at once — and owners who can generally afford to have it done properly.",
          "That is the most reliable roofing demand in the country. It rewards contractors who can show sympathetic work on the same house types rather than the cheapest quote, and it is planned work rather than emergency, which means content and reviews do more of the selling.",
        ],
      },
      {
        heading: "Do not target the whole county",
        body: [
          "Almost no Dublin roofer serves all of Dublin, and a campaign that covers it spends most of its budget reaching people who will book somebody closer.",
          "Postcodes and a realistic travel radius. It reduces reach, reduces cost per booked job, and is the single most common thing left unfixed on Dublin trades accounts.",
        ],
      },
    ],
    towns: [
      "Dublin city",
      "Rathfarnham",
      "Clontarf",
      "Swords",
      "Tallaght",
      "Blanchardstown",
      "Dún Laoghaire",
      "Lucan",
      "Malahide",
      "Santry",
      "Terenure",
      "Raheny",
    ],
    faqs: [
      {
        q: "Why is Dublin roofing advertising so expensive?",
        a: "Density of competition. National firms, lead platforms and every other roofer bid on the same searches, and click prices run several times the rural average.",
      },
      {
        q: "What matters most at those prices?",
        a: "Conversion rate. A site converting at five per cent instead of two changes the economics far more than any bid adjustment, and it is where most Dublin roofing budgets are actually being lost.",
      },
      {
        q: "Should we cover all of Dublin?",
        a: "Almost never. Most roofers serve a handful of postcodes and a realistic drive. A county-wide campaign spends most of its budget on people who will book somebody nearer.",
      },
      {
        q: "Is Dublin work emergency or planned?",
        a: "More planned than most counties, because the older housing stock generates predictable re-roofing and repair work. That means content and reviews do more of the selling than in a pure emergency market.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "galway",
    industryLabel: "roofers",
    countyName: "Galway",
    title: "Roofing Leads Galway | Marketing for Galway Roofers",
    description:
      "Lead generation for Galway roofing contractors: Atlantic exposure, Connemara distances and a city market distorted by students.",
    h1: "Roofing leads in Galway, drawn by driving time.",
    intro: [
      "Galway roofing is shaped by two things that have nothing to do with marketing: Atlantic weather and the size of the county. Exposure on the western side produces genuine storm damage, and the distance from the city to Connemara makes a great many enquiries uneconomic before you leave the yard.",
      "The city adds a third complication — a very large student population that inflates every audience figure and buys no roofing whatsoever.",
    ],
    sections: [
      {
        heading: "Target driving time, not the county",
        body: [
          "A radius drawn around Galway city includes places nobody will drive to for a repair, and the roads west are slower than any map suggests.",
          "Named towns within a realistic drive is the correct setting and it is almost never the default. It is the single biggest efficiency available on a Galway trades account.",
        ],
      },
      {
        heading: "Exposure work is real and it is seasonal",
        body: [
          "The western side of the county takes weather that most of Ireland does not, and roofs there fail in ways that inland roofs do not — lifted slates, ridge damage, flashing torn out.",
          "That work arrives in bursts and it goes to whoever is visible at the time. Being set up before the season, rather than reacting to it, is the whole game in a coastal county.",
        ],
      },
      {
        heading: "Exclude the students",
        body: [
          "Galway's third-level population is large, clicks freely and will never buy a roof. They inflate reach, they flatter the reporting, and they cost real money in a city campaign.",
          "Excluding them lowers your impression figures and improves your cost per enquiry, which is the trade worth making every time.",
        ],
      },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Oranmore",
      "Barna",
      "Moycullen",
      "Athenry",
      "Tuam",
      "Loughrea",
      "Clifden",
      "Gort",
      "Headford",
      "Ballinasloe",
    ],
    faqs: [
      {
        q: "How wide should a Galway roofer target?",
        a: "By realistic driving time rather than radius. The roads west are slow and a circle around the city includes places nobody will travel to for a repair.",
      },
      {
        q: "Is the exposure work worth chasing?",
        a: "On the western side, genuinely. It arrives in bursts after weather and goes to whoever is already visible, which is an argument for being set up before the season.",
      },
      {
        q: "Do students affect a roofing campaign?",
        a: "They inflate every audience figure in the city and buy nothing. Excluding them lowers your reach numbers and improves your cost per enquiry.",
      },
      {
        q: "Can we rank across the county?",
        a: "Not in the map results. Proximity decides those and Galway is far too large. Ranking well in your own catchment is the realistic goal.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "kildare",
    industryLabel: "roofers",
    countyName: "Kildare",
    title: "Roofing Leads Kildare | Marketing for Kildare Roofers",
    description:
      "Lead generation for Kildare roofing contractors: newer housing, commuter households that pay for certainty, and Dublin firms bidding into your county.",
    h1: "Roofing leads in Kildare, against Dublin competition.",
    intro: [
      "Kildare's housing is newer than Dublin's, which changes the work. Less slate and lead, more felt, tiles and flat-roof extensions, and fewer of the period jobs that carry the best margins in the city.",
      "The customers are different too. Commuter households in Naas, Newbridge, Maynooth and Celbridge have Dublin incomes, Dublin impatience, and no interest at all in being the cheapest quote's problem.",
    ],
    sections: [
      {
        heading: "They are buying certainty, not price",
        body: [
          "A household commuting to Dublin wants a definite date, a clear price and somebody who turns up. They will pay more for that and they will not wait three days for a call back.",
          "That is what the advertising should promise and what the follow-up has to deliver. In Kildare specifically, response time changes the outcome of a roofing campaign more than the budget does.",
        ],
      },
      {
        heading: "You are competing with Dublin whether you like it or not",
        body: [
          "Dublin roofing firms bid into Kildare routinely, particularly in the commuter towns, and they will outspend a local contractor.",
          "You beat them on being genuinely local — a Naas-specific ad going to a Naas-specific page, answered within the hour, with reviews from people in Naas. None of that can be bought by a firm based in D12.",
        ],
      },
      {
        heading: "Newer roofs fail differently",
        body: [
          "The extensions and estates built through the 2000s are now at the age where flat roofs, valleys and poorly detailed junctions start to leak, and those are searchable, specific problems.",
          "Pages about flat roof repair, extension leaks and tile replacement will out-perform a general roofing page here, because they match what people in this county actually type.",
        ],
      },
    ],
    towns: [
      "Naas",
      "Newbridge",
      "Maynooth",
      "Celbridge",
      "Leixlip",
      "Clane",
      "Sallins",
      "Kilcock",
      "Athy",
      "Monasterevin",
      "Kildare town",
      "Prosperous",
    ],
    faqs: [
      {
        q: "Do we compete with Dublin roofers?",
        a: "Constantly, especially in the commuter towns. You beat them on local presence, reviews and response speed rather than on budget.",
      },
      {
        q: "What do Kildare customers actually want?",
        a: "Certainty. A definite date, a clear price and somebody who turns up. They will pay for it and they will not wait three days for a call back.",
      },
      {
        q: "Is the work different from Dublin?",
        a: "Newer housing means fewer slate and lead jobs and more flat roofs, tiles and extension junctions. Those are specific searchable problems and worth pages of their own.",
      },
      {
        q: "Which towns should we target?",
        a: "Wherever your work already comes from. Naas, Newbridge, Maynooth and Celbridge hold most of the commuter households, but a campaign should follow your van rather than the population map.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "dublin",
    industryLabel: "plumbers and heating engineers",
    countyName: "Dublin",
    title: "Plumbing Leads Dublin | Marketing for Dublin Plumbers",
    description:
      "Lead generation for Dublin plumbers and heating engineers: emergency work decided in minutes, heat pump work researched over weeks.",
    h1: "Plumbing leads in Dublin, emergency and planned.",
    intro: [
      "Dublin plumbing is two businesses at once. An emergency — a burst pipe, no heat, a leak through a ceiling — is decided in minutes from the map results. A boiler replacement or a heat pump is researched for weeks.",
      "Both are expensive to advertise for here, and the campaigns that work treat them as entirely separate problems rather than two lines on the same page.",
    ],
    sections: [
      {
        heading: "Emergency work is a response-time business",
        body: [
          "Somebody with water coming through a ceiling rings the first plumber who looks local and has reviews, and if it rings out they ring the next one. Nothing about the website matters in that moment.",
          "In Dublin that means your Google profile, your reviews and whether the phone is actually answered. More budget cannot fix an unanswered phone and we will say so before increasing it.",
        ],
      },
      {
        heading: "Old housing stock is the planned-work engine",
        body: [
          "Dublin's pre-1970s housing produces a steady flow of heating upgrades, rewired systems, bathroom replacements and boiler swaps, from owners who can afford to do it properly.",
          "That audience reads before it rings — grant eligibility, running costs, whether their house suits a heat pump. Content that answers those honestly, including when a heat pump is a poor idea, wins that work.",
        ],
      },
      {
        heading: "Postcodes, not the county",
        body: [
          "A plumber in Rathfarnham is not servicing Swords, and a campaign that covers Dublin pays city-centre prices to reach people who will ring somebody nearer.",
          "Tight postcode targeting is the first change we make on nearly every Dublin trades account we take over.",
        ],
      },
    ],
    towns: [
      "Dublin city",
      "Rathfarnham",
      "Terenure",
      "Clontarf",
      "Swords",
      "Tallaght",
      "Blanchardstown",
      "Dún Laoghaire",
      "Lucan",
      "Malahide",
      "Drumcondra",
      "Raheny",
    ],
    faqs: [
      {
        q: "Should emergency and installation work share a campaign?",
        a: "Never. One is decided in minutes from the map pack, the other over weeks of reading. A campaign trying to do both does neither well.",
      },
      {
        q: "What decides emergency work in Dublin?",
        a: "Proximity, reviews and answering the phone. At Dublin click prices, an unanswered phone is the most expensive thing in the business.",
      },
      {
        q: "Is heat pump work worth chasing?",
        a: "The values are high and the research period is long, which means content genuinely decides who gets the enquiry. Saying when a heat pump is a bad idea wins more work than enthusiasm does.",
      },
      {
        q: "How wide should we target?",
        a: "Postcodes and a realistic drive. Covering the county means paying Dublin prices to reach people who will ring somebody closer.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "kildare",
    industryLabel: "landscapers",
    countyName: "Kildare",
    title: "Landscaping Leads Kildare | Marketing for Kildare Landscapers",
    description:
      "Lead generation for Kildare landscapers: large commuter gardens, real budgets, and a season that is decided months before anybody rings.",
    h1: "Landscaping leads in Kildare, where the gardens are big.",
    intro: [
      "Kildare has something most of Dublin does not: space. The estates built around Naas, Newbridge, Maynooth, Celbridge and Ratoath came with gardens large enough to be worth spending real money on, and households with Dublin incomes to spend it.",
      "That makes it one of the better landscaping markets in the country, and one where the jobs are considerably larger than the national average.",
    ],
    sections: [
      {
        heading: "Bigger gardens mean bigger jobs",
        body: [
          "A Dublin city garden is a patio and a raised bed. A Kildare commuter-estate garden is paving, levelling, drainage, planting, lighting and sometimes a garden room — a job with a five-figure budget rather than a weekend.",
          "That changes the advertising entirely. You are not competing on day rate; you are demonstrating that you have built the thing somebody has been picturing for two years.",
        ],
      },
      {
        heading: "The decision is made in winter",
        body: [
          "People commission gardens in spring and start imagining them in January. Search interest climbs from the new year and the enquiries follow weeks later.",
          "Which means the work to be visible has to happen in autumn. A landscaper starting in April has missed the season, and we would rather say that in September than take a fee in April.",
        ],
      },
      {
        heading: "Photographs of Kildare gardens, not stock",
        body: [
          "Homeowners here recognise the estates and the house types. A finished garden on a house that looks like theirs does more than any description of your process.",
          "It is also the one thing a Dublin landscaper advertising into Kildare cannot produce, which makes it your clearest advantage.",
        ],
      },
    ],
    towns: [
      "Naas",
      "Newbridge",
      "Maynooth",
      "Celbridge",
      "Leixlip",
      "Clane",
      "Sallins",
      "Kilcock",
      "Straffan",
      "Johnstown",
      "Kill",
      "Prosperous",
    ],
    faqs: [
      {
        q: "Why is Kildare a good landscaping market?",
        a: "Space and money. The commuter estates came with large gardens and the households have Dublin incomes, which makes the average job considerably bigger than the national norm.",
      },
      {
        q: "When should we start advertising?",
        a: "Autumn. People start imagining gardens in January and commission them in spring, and being visible by then takes months.",
      },
      {
        q: "What sells best here?",
        a: "Photographs of finished gardens on house types people recognise. It is also the one thing a Dublin competitor advertising in cannot produce.",
      },
      {
        q: "Do we compete with Dublin landscapers?",
        a: "In the commuter towns, yes. Local photographs and local reviews beat a bigger budget more often than people expect.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "donegal",
    industryLabel: "roofers",
    countyName: "Donegal",
    title: "Roofing Leads Donegal | Marketing for Donegal Roofers",
    description:
      "Lead generation for Donegal roofing contractors: the worst Atlantic weather in Ireland, distances that eat a morning, and Derry firms in your results.",
    h1: "Roofing leads in Donegal, where the weather does the selling.",
    intro: [
      "Donegal takes weather that most Irish roofers never see. Atlantic systems arrive here first and hardest, and a single winter storm can produce more call-outs in three days than a quiet month produces in four weeks.",
      "It is also enormous and slow to drive. Letterkenny to Glencolmcille is most of a day there and back, and a roofer who has not decided in advance how far they will travel will spend the season losing money on the far jobs.",
    ],
    sections: [
    {
      heading: "Be ranked before the system arrives, not after",
      body: [
        "Storm demand does not build. It appears on a Tuesday, gets spent within a week, and goes to whoever is already visible in the map results when the wind drops.",
        "A roofer who starts advertising the morning after a storm is bidding against every other roofer in the county at the worst possible price, and is invisible in the results that actually generate the calls. The work to be there has to happen in September, not January.",
      ],
    },
    {
      heading: "Exposure damage is its own category",
      body: [
        "Wind-lifted slates, torn flashing, ridge damage and rain driven horizontally into places it should not reach. That is a different set of searches from the leak-under-a-valley problem an inland roofer deals with.",
        "Pages and ads written around storm and exposure damage will out-perform generic roof repair content here, because they match what people in this county actually type after a bad night.",
      ],
    },
    {
      heading: "Target driving time, and say what it is",
      body: [
        "A radius around Letterkenny includes places nobody will drive to for a repair, and the roads west and into the peninsulas are slower than any map suggests.",
        "Name the towns you will genuinely reach, on the site and in the targeting. It wins the enquiries inside your range and saves you the calls from outside it, which in a county this size is a meaningful amount of wasted time.",
      ],
    },
    {
      heading: "Derry firms appear in your results",
      body: [
        "Search results in the north of the county include Northern Ireland businesses with their own review profiles, and sterling pricing moves that competition back and forth.",
        "Competing on price there is usually a losing position. A verified Donegal address, Donegal reviews and photographs of Donegal roofs are the things a Derry firm cannot produce.",
      ],
    },
    ],
    towns: [
      "Letterkenny",
      "Buncrana",
      "Ballybofey",
      "Donegal town",
      "Bundoran",
      "Carndonagh",
      "Dungloe",
      "Killybegs",
      "Moville",
      "Ballyshannon",
      "Lifford",
      "Gweedore",
    ],
    faqs: [
      {
        q: "When should a Donegal roofer advertise?",
        a: "Before the storm season, not after it. Demand appears in days and goes to whoever already ranks when the wind drops — starting afterwards means bidding against everyone at the worst price.",
      },
      {
        q: "How far should we cover?",
        a: "As far as you will genuinely drive, named explicitly. The roads west and into the peninsulas are slower than the map suggests and the far jobs lose money.",
      },
      {
        q: "Do Derry roofers compete with us?",
        a: "In the north of the county, yes, and sterling moves that competition. A Donegal address, Donegal reviews and photographs of Donegal roofs are what they cannot copy.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "mayo",
    industryLabel: "roofers",
    countyName: "Mayo",
    title: "Roofing Leads Mayo | Marketing for Mayo Roofers",
    description:
      "Lead generation for Mayo roofing contractors: Atlantic exposure, three towns that do not overlap, and coverage so poor a heavy website simply fails.",
    h1: "Roofing leads in Mayo, measured in driving time.",
    intro: [
      "Mayo is large, thinly populated and served by three towns that do not share customers. Castlebar, Ballina and Westport each anchor their own area, and a roofer in one is close to invisible in the others.",
      "The western side takes Atlantic weather that produces genuine exposure damage, and the distances out to Belmullet and the coast are long enough that a job has to be worth the day it costs.",
    ],
    sections: [
    {
      heading: "Three towns, three sets of results",
      body: [
        "Google's map results are decided largely by how far the searcher is from your address, and Mayo is big enough that this settles almost everything. You will rank in your own town and barely register in the others.",
        "That is not fixable by optimisation. What is fixable is being unmistakably the best option within your own catchment, which is a fight almost nobody in this county is having.",
      ],
    },
    {
      heading: "Page weight is not a technical detail here",
      body: [
        "Mobile coverage across much of west Mayo is genuinely poor, and a heavy website does not load slowly for those visitors — it does not load.",
        "You never see those people in your enquiry figures, which is exactly why it goes unfixed for years. For a roofer whose customers are standing in a yard looking at a damaged roof on one bar of signal, this matters more than the design does.",
      ],
    },
    {
      heading: "Exposure work arrives in bursts",
      body: [
        "The coast and the west take weather that inland Mayo does not, and roofs there fail in ways that inland roofs do not. That demand is seasonal, concentrated and goes to whoever is visible at the time.",
        "Being set up before autumn rather than reacting in January is the whole difference between capturing that and watching it go elsewhere.",
      ],
    },
    {
      heading: "The returning-household market is real",
      body: [
        "Mayo has an unusually strong connection with people who left and come back — for summers, for retirement, or to do up a family property that has been empty for years.",
        "Those roofs need work and the owners are frequently arranging it from Dublin or Britain. They search without any local knowledge, which means content and reviews decide it rather than proximity, and almost no Mayo roofer writes for them.",
      ],
    },
    ],
    towns: [
      "Castlebar",
      "Ballina",
      "Westport",
      "Claremorris",
      "Ballinrobe",
      "Swinford",
      "Belmullet",
      "Charlestown",
      "Knock",
      "Foxford",
      "Kiltimagh",
      "Newport",
    ],
    faqs: [
      {
        q: "Can we rank across Mayo?",
        a: "No. Proximity decides the map results and the county is far too large. Ranking well in your own town's catchment is the realistic and worthwhile goal.",
      },
      {
        q: "Does website speed really matter for a roofer?",
        a: "In west Mayo it decides whether the site loads at all. Customers are frequently on one bar of signal looking at a damaged roof, and a heavy site fails silently.",
      },
      {
        q: "Who are the returning households?",
        a: "People with Mayo connections living elsewhere who inherit or renovate family property. They search without local knowledge, so content and reviews decide it rather than proximity.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "kerry",
    industryLabel: "roofers",
    countyName: "Kerry",
    title: "Roofing Leads Kerry | Marketing for Kerry Roofers",
    description:
      "Lead generation for Kerry roofing contractors: Atlantic exposure, second homes nobody checks for ten months, and roads that make a radius meaningless.",
    h1: "Roofing leads in Kerry, including the houses nobody is in.",
    intro: [
      "Kerry has a large stock of holiday homes and second properties that are empty for most of the year, and roof problems in them are discovered late — usually in spring, by an owner arriving from Dublin or abroad to find a stain on a ceiling.",
      "That is a distinct and well-paying seam of work, and it is arranged remotely by somebody with no local knowledge and no tradesperson to ring.",
    ],
    sections: [
    {
      heading: "The absent-owner market",
      body: [
        "An owner who lives elsewhere cannot ask a neighbour who to use. They search, they read, and they choose on what they find — which means reviews and a website that answers questions do the work proximity normally does.",
        "They also need more from you: photographs of the problem, a clear quote without a face-to-face meeting, and someone who will let them know when it is done. A roofer who is set up to work that way has very little competition for it.",
      ],
    },
    {
      heading: "Two coasts, one county, slow roads",
      body: [
        "Tralee to Cahersiveen is not a journey anybody makes for an ordinary repair, and the Ring roads are slow in August and slower in February.",
        "Target named towns within a realistic drive rather than a radius. In Kerry a circle on a map includes a great many people who will never become customers and quite a few who could not reach you if they wanted to.",
      ],
    },
    {
      heading: "Exposure and salt",
      body: [
        "Coastal Kerry roofs fail differently — wind damage, salt corrosion on fixings and flashing, driven rain. Inland Kerry around Killarney and Castleisland is a milder, more ordinary market.",
        "Writing about the coastal problems specifically wins the coastal work, and it signals to an absent owner that you actually know the conditions their house sits in.",
      ],
    },
    {
      heading: "Spring is when the discoveries happen",
      body: [
        "The damage occurs in winter and is found in March and April when people arrive. That is when the enquiries cluster, which means being visible by February rather than reacting in May.",
        "It is the opposite calendar to most trades and almost no Kerry roofer plans around it.",
      ],
    },
    ],
    towns: [
      "Tralee",
      "Killarney",
      "Listowel",
      "Dingle",
      "Kenmare",
      "Castleisland",
      "Killorglin",
      "Cahersiveen",
      "Ballybunion",
      "Milltown",
      "Sneem",
      "Tarbert",
    ],
    faqs: [
      {
        q: "What is the absent-owner market?",
        a: "Holiday and second homes empty most of the year, where damage is found late by an owner arriving from elsewhere. They arrange it remotely, which means reviews and a clear website decide it rather than proximity.",
      },
      {
        q: "When do Kerry roofing enquiries cluster?",
        a: "Spring, when people arrive and find winter damage. That means being visible by February rather than reacting in May, which is the opposite of most trades.",
      },
      {
        q: "Does coastal work differ?",
        a: "Substantially — wind damage, salt corrosion on fixings and flashing, driven rain. Writing about those specifically signals you know the conditions the house is in.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "wicklow",
    industryLabel: "roofers",
    countyName: "Wicklow",
    title: "Roofing Leads Wicklow | Marketing for Wicklow Roofers",
    description:
      "Lead generation for Wicklow roofing contractors: a county split by mountains, Dublin prices in the north and almost no competition in the south.",
    h1: "Roofing leads in Wicklow, on whichever side of the mountains you are.",
    intro: [
      "Wicklow is two roofing markets with a mountain range in between. Bray and Greystones sit inside the Dublin advertising economy, with Dublin click prices and Dublin competitors. Rathdrum, Tinahely and Arklow are rural, cheap and barely contested.",
      "The mountains are not scenery here, they are a commercial fact. A Bray roofer will not rank in Arklow no matter how good the website is, because Google measures distance and does not care how long the drive takes.",
    ],
    sections: [
    {
      heading: "Paid advertising is how you cross the mountains",
      body: [
        "Map results are decided by proximity, so organic search will hold you to the side of the county you are on. Google Ads is not bound the same way.",
        "This is the clearest case in Ireland for running paid alongside SEO rather than instead of it: optimise for where you are, advertise into where you are not. Any agency promising a Bray roofer organic coverage of south Wicklow is promising something the geography forbids.",
      ],
    },
    {
      heading: "North and south are different budgets",
      body: [
        "Clicks in Bray and Greystones cost close to south Dublin rates, because the same competitors bid on them. Clicks in Baltinglass or Tinahely cost a fraction of that.",
        "Running one county campaign averages the two and means overpaying in the north while under-reaching in the south. Split, they are both affordable.",
      ],
    },
    {
      heading: "Old housing in the north, exposure in the south",
      body: [
        "North Wicklow has period and Victorian housing with slate, lead valleys and chimney work — skilled, planned, well-paid jobs where the customer researches first.",
        "The south and the uplands are more exposed and more agricultural, with more storm damage and more outbuildings. Different work, different searches, different pages.",
      ],
    },
    {
      heading: "High-value property rewards evidence",
      body: [
        "The coastal strip from Bray to Greystones holds some of the most valuable housing outside south Dublin, and those owners buy on evidence rather than price.",
        "Photographs of sympathetic work on similar period houses will beat a cheaper quote here more reliably than almost anywhere in the country.",
      ],
    },
    ],
    towns: [
      "Bray",
      "Greystones",
      "Wicklow town",
      "Arklow",
      "Blessington",
      "Rathdrum",
      "Enniskerry",
      "Delgany",
      "Kilcoole",
      "Tinahely",
      "Baltinglass",
      "Newtownmountkennedy",
    ],
    faqs: [
      {
        q: "Can a Bray roofer win work in Arklow?",
        a: "Organically, rarely — proximity decides the map results and the mountains do not count as distance. Paid advertising is the honest route, and any agency promising otherwise is promising what geography forbids.",
      },
      {
        q: "Is north Wicklow expensive to advertise in?",
        a: "Close to south Dublin rates, because the same competitors bid there. The jobs are worth more too, but the budget has to reflect it.",
      },
      {
        q: "Where is the better value?",
        a: "South and west Wicklow, if you genuinely travel there. Cheap clicks, very little competition, and more storm and outbuilding work.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "wexford",
    industryLabel: "roofers",
    countyName: "Wexford",
    title: "Roofing Leads Wexford | Marketing for Wexford Roofers",
    description:
      "Lead generation for Wexford roofing contractors: a coast whose population triples in summer, and a commuter end that prices like Wicklow.",
    h1: "Roofing leads in Wexford, for a county with two populations.",
    intro: [
      "The Wexford coast from Courtown down to Rosslare fills in summer and empties in winter, and a great deal of its housing stock is holiday property occupied for a few months a year.",
      "That produces a distinctive pattern: damage happens in winter to empty houses and is discovered in spring by owners arriving from Dublin. Meanwhile Gorey, at the north end, behaves like a commuter town and prices like one.",
    ],
    sections: [
    {
      heading: "Winter damage, spring discovery",
      body: [
        "A holiday house takes a storm in January with nobody in it. The slipped slates and the water coming in are found at Easter, by an owner who lives somewhere else and has no idea who to ring.",
        "They search. They have no local knowledge, no neighbour to ask, and they are choosing entirely on what they find. For a roofer set up to quote from photographs and keep somebody informed remotely, that is very good work with very little competition.",
      ],
    },
    {
      heading: "Gorey is a different market from New Ross",
      body: [
        "Gorey's commuter households bring Wicklow-adjacent click prices and Dublin expectations about response time. New Ross and the south of the county are rural, cheaper and slower-moving.",
        "One county campaign averages them and serves neither. Split, the north pays for itself on job value and the south pays for itself on cost.",
      ],
    },
    {
      heading: "Salt and exposure on the coast",
      body: [
        "Coastal Wexford roofs corrode at fixings and flashings in a way inland roofs do not, and wind damage along that stretch is a genuine seasonal category rather than an occasional event.",
        "Content written about those specific failures wins that work and signals competence to an owner who is trying to judge you from two hundred kilometres away.",
      ],
    },
    {
      heading: "Advertise before the season, to where they live",
      body: [
        "Google Ads can target where somebody is searching from. A Wexford roofer can be visible to Dublin households in March, before they travel down and find the damage.",
        "That is cheaper than competing locally in June and almost nobody in this county does it.",
      ],
    },
    ],
    towns: [
      "Wexford town",
      "Gorey",
      "Enniscorthy",
      "New Ross",
      "Rosslare",
      "Courtown",
      "Bunclody",
      "Ferns",
      "Castlebridge",
      "Kilmuckridge",
      "Taghmon",
      "Duncannon",
    ],
    faqs: [
      {
        q: "Why does spring matter in Wexford?",
        a: "Winter damage to empty holiday houses is discovered at Easter by owners arriving from Dublin. Being visible in February and March catches that; reacting in June does not.",
      },
      {
        q: "Should Gorey and New Ross share a campaign?",
        a: "No. Gorey prices like a commuter town with Dublin expectations; the south of the county is rural and slower. Averaging them serves neither.",
      },
      {
        q: "Can we advertise to owners before they travel?",
        a: "Yes, and almost nobody does. Google Ads can target where somebody is searching from, so you can reach Dublin households in March before they come down and find the damage.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "roofers",
    county: "limerick",
    industryLabel: "roofers",
    countyName: "Limerick",
    title: "Roofing Leads Limerick | Marketing for Limerick Roofers",
    description:
      "Lead generation for Limerick roofing contractors: an under-contested city, a Clare catchment most roofers ignore, and cheap clicks that hide waste.",
    h1: "Roofing leads in Limerick, and the Clare work you are missing.",
    intro: [
      "Limerick is one of the least contested city markets in Ireland for roofing. Relatively few contractors compete seriously online, competitor websites are frequently poor, and the standard you need to beat is genuinely low.",
      "The bigger opportunity is over the county line. A great many Limerick roofers work across south and east Clare without ever mentioning it anywhere a customer or Google could see.",
    ],
    sections: [
    {
      heading: "Name Clare, explicitly",
      body: [
        "Limerick city's commercial catchment runs well into Clare — Sixmilebridge, Shannon, Newmarket-on-Fergus, Cratloe — and most local roofing websites name none of those places.",
        "A site that does will appear for searches a site that does not cannot. It is a ten-minute change and it is consistently the cheapest improvement available to a Limerick trades business.",
      ],
    },
    {
      heading: "Cheap clicks make waste invisible",
      body: [
        "Limerick is inexpensive by city standards, which sounds purely good and is not. At low click prices a badly targeted campaign can run for a year without anybody noticing it is not working.",
        "Negative keywords, tight location settings and call tracking matter as much here as in Dublin. They just feel less urgent, which is why they get skipped.",
      ],
    },
    {
      heading: "City housing and county housing fail differently",
      body: [
        "Limerick city and the older suburbs carry period housing with slate and chimney work — planned, skilled, researched by the customer before they ring. Out through Newcastle West and Abbeyfeale it is more agricultural, more exposed and more storm-driven.",
        "Two different sets of searches and two different messages, and most roofers here run one campaign at both.",
      ],
    },
    {
      heading: "Avoid the obvious broad terms",
      body: [
        "Broad Limerick searches pull in a great deal of course, jobs and university traffic that has nothing to do with buying a roof.",
        "Building the negative keyword list properly before launch is worth more than any bid adjustment, and on inherited Limerick accounts it is almost always the biggest single saving available.",
      ],
    },
    ],
    towns: [
      "Limerick city",
      "Castletroy",
      "Dooradoyle",
      "Newcastle West",
      "Adare",
      "Castleconnell",
      "Abbeyfeale",
      "Kilmallock",
      "Patrickswell",
      "Rathkeale",
      "Croom",
      "Sixmilebridge",
    ],
    faqs: [
      {
        q: "Should a Limerick roofer target Clare?",
        a: "If you work there — and most do — name those towns explicitly on the site and in the targeting. It is a ten-minute change and the cheapest improvement available.",
      },
      {
        q: "Is Limerick competitive for roofing?",
        a: "Among the least contested city markets in Ireland. Few contractors compete seriously online and competitor foundations are usually weak.",
      },
      {
        q: "What is the risk of cheap clicks?",
        a: "They hide waste. At low prices a badly targeted campaign runs for a year without anyone noticing, so negatives and location settings matter as much as they do in Dublin.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "wexford",
    industryLabel: "solar installers",
    countyName: "Wexford",
    title: "Solar Leads Wexford | Marketing for Wexford Solar Installers",
    description:
      "Lead generation for Wexford solar installers: the sunniest corner of Ireland, a genuine payback argument, and large tillage roofs nobody is selling to.",
    h1: "Solar leads in Wexford, where the numbers actually work best.",
    intro: [
      "The southeast gets more sunshine than anywhere else in Ireland, and Wexford sits at the middle of it. That is not a marketing line — it is the reason a system here generates meaningfully more over a year than the same system in the northwest.",
      "Almost no installer advertising in this county says so. The pitch is the same national grant-and-savings message used everywhere, which throws away the one argument Wexford genuinely owns.",
    ],
    sections: [
    {
      heading: "Lead with the thing that is actually true here",
      body: [
        "A homeowner comparing quotes cannot tell one installer's panels from another's. What they can understand is that their own roof, in their own county, is a better place for this than most of the country.",
        "That reframes the conversation from cost to yield, which is the ground you want to be on. It is also checkable, which matters — a claim a customer can verify themselves does more work than one they have to take on trust.",
      ],
    },
    {
      heading: "Tillage sheds are a separate business",
      body: [
        "Wexford is heavy tillage country, and grain drying, ventilation and workshop load run hard during daylight hours in exactly the months the sun is strongest.",
        "That is the best self-consumption profile there is, on buildings with enormous unshaded roofs and owners used to making capital decisions with a calculator. Almost every installer in the county markets exclusively to households.",
        "Farm work also comes with its own grant route, at a rate that makes the domestic scheme look modest. It is a different sales conversation, a different form and a different set of searches, and it is largely uncontested.",
      ],
    },
    {
      heading: "The coast complicates the roofs",
      body: [
        "Coastal housing from Courtown to Rosslare brings salt, exposure and a lot of holiday property whose owners are elsewhere and whose daytime electricity use is close to nothing.",
        "Those are weak solar customers without a battery and honest about it — and saying so in the quote wins you the good ones and saves you the bad ones. Pretending otherwise generates a cancellation later.",
      ],
    },
    {
      heading: "Gorey prices like Wicklow",
      body: [
        "The north of the county behaves like a commuter belt: higher incomes, higher click costs, and households out of the house all day. The south around New Ross and Wexford town is cheaper to reach and slower to decide.",
        "One county campaign averages the two and serves neither well. Split, the north justifies a battery conversation and the south justifies a lower cost per lead.",
      ],
    },
    ],
    towns: [
      "Wexford town",
      "Gorey",
      "Enniscorthy",
      "New Ross",
      "Rosslare",
      "Bunclody",
      "Ferns",
      "Courtown",
      "Taghmon",
      "Castlebridge",
      "Kilmuckridge",
      "Duncannon",
    ],
    faqs: [
      {
        q: "Is Wexford genuinely better for solar?",
        a: "Yes — the southeast receives more sunshine than the rest of the country, so the same system yields more here than in the northwest. It is the one argument this county owns and almost nobody uses it.",
      },
      {
        q: "Should we market to farms?",
        a: "Tillage sheds have huge unshaded roofs and daytime load in the sunniest months, plus their own grant route at a far better rate. Very few installers here market to them at all.",
      },
      {
        q: "Are holiday homes worth chasing?",
        a: "Rarely without a battery — nobody is in them during the day. Saying that honestly in the quote wins the good jobs and avoids the cancellations.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "galway",
    industryLabel: "solar installers",
    countyName: "Galway",
    title: "Solar Leads Galway | Marketing for Galway Solar Installers",
    description:
      "Lead generation for Galway solar installers: lower yield than the southeast, long rural drives, and a city market that behaves nothing like the county.",
    h1: "Solar leads in Galway, with the payback argument done honestly.",
    intro: [
      "Galway gets less sun than the southeast. Pretending otherwise in a quote is how an installer ends up in a difficult conversation two years later when the generation figures do not match what was promised.",
      "The county compensates in other ways: large unshaded rural roofs, high electricity prices felt just as hard, a strong appetite for self-sufficiency, and far less competition than the east coast.",
    ],
    sections: [
    {
      heading: "Do not oversell the yield",
      body: [
        "Irish solar is a sound investment in Galway. It is a slower one than in Wexford, and an installer who says so plainly is immediately more credible than the three who quoted optimistic national averages.",
        "Customers here are used to being sold to with numbers from somewhere else. Using real local figures is a differentiator precisely because so few bother.",
      ],
    },
    {
      heading: "Rural roofs are the opportunity",
      body: [
        "Detached rural houses and farm buildings across east Galway and south Connemara have roof area that a Dublin semi cannot dream of, no shading and no planning complications.",
        "Bigger systems, simpler installs and customers who already think in terms of capital spend and payback. That is better work than a constrained city roof, and less contested.",
      ],
    },
    {
      heading: "The city is a different market",
      body: [
        "Galway city has terraced and student-let stock, a large rental sector and shading from neighbouring buildings. Landlords have their own reasons to buy and their own regulations to satisfy, and they are not persuaded by a homeowner savings pitch.",
        "Running city and county under one message is the most common mistake here. They want different things and search for them differently.",
      ],
    },
    {
      heading: "Distance has to be priced in",
      body: [
        "Connemara and the islands are a long way from anywhere, and a survey plus an install plus any return visit is a real cost that a radius-based campaign hides.",
        "Name the towns you will genuinely travel to. The enquiries you lose are the ones that were never going to be profitable.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Oranmore",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Gort",
      "Clifden",
      "Headford",
      "Moycullen",
      "Portumna",
    ],
    faqs: [
      {
        q: "Is solar worth it in Galway?",
        a: "Yes, but the payback is slower than in the southeast and saying so builds more trust than quoting national averages. Customers here are used to being sold with numbers from elsewhere.",
      },
      {
        q: "Where is the best work?",
        a: "Rural detached houses and farm buildings — large unshaded roofs, no planning complications, bigger systems and owners who think in payback terms.",
      },
      {
        q: "Should the city have its own campaign?",
        a: "Yes. Terraces, shading and a large rental sector make it a different product with different buyers. One message across city and county serves neither.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "cork",
    industryLabel: "solar installers",
    countyName: "Cork",
    title: "Solar Leads Cork | Marketing for Cork Solar Installers",
    description:
      "Lead generation for Cork solar installers: the dairy daytime load that makes farm solar unarguable, plus a city market with its own constraints.",
    h1: "Solar leads in Cork, where the farm case sells itself.",
    intro: [
      "Cork is the largest county in Ireland and the centre of its dairy industry, and dairy has the single best electricity profile for solar in the country — bulk tank cooling, water heating and vacuum pumps all drawing hard during daylight.",
      "A farm that uses what it generates rather than exporting it has a completely different return from a house that is empty all day. That is the strongest solar argument available anywhere in Ireland and it is barely being made.",
    ],
    sections: [
    {
      heading: "The dairy argument is arithmetic, not persuasion",
      body: [
        "Milk cooling runs after each milking and plate coolers and water heating draw through the day. A dairy yard consumes electricity on exactly the schedule a solar array produces it.",
        "That means high self-consumption, which is where the actual money is — a unit used on site is worth far more than a unit exported. The conversation stops being about grants and becomes about the yard's own bill, which is a conversation a farmer will happily have.",
        "There is also a dedicated farm grant route at a considerably better rate than the domestic scheme. Different forms, different timelines and a different search behaviour.",
      ],
    },
    {
      heading: "West Cork is distance, not just geography",
      body: [
        "An hour and a half each way for a survey, and again for the install, and again if anything needs attention. A radius drawn around the city includes a great deal of work that will not pay.",
        "Decide the line, name the towns on the site, and let the far enquiries go to somebody closer.",
      ],
    },
    {
      heading: "The city has its own limits",
      body: [
        "Cork city's older terraced stock has small, often shaded and awkwardly oriented roofs, along with a substantial protected and conservation-area element.",
        "Being straight about which roofs are not suitable is worth more than a survey diary full of jobs that get cancelled after the site visit. It also produces the kind of review that wins the next five.",
      ],
    },
    {
      heading: "Two campaigns, not one",
      body: [
        "Farm and domestic are different customers, different system sizes, different grants and different words typed into Google. They should not share a campaign, a landing page or a lead form.",
        "Almost every Cork installer runs one domestic campaign and leaves the better market alone.",
      ],
    },
    ],
    towns: [
      "Cork city",
      "Ballincollig",
      "Carrigaline",
      "Midleton",
      "Mallow",
      "Fermoy",
      "Bandon",
      "Youghal",
      "Clonakilty",
      "Skibbereen",
      "Macroom",
      "Kinsale",
    ],
    faqs: [
      {
        q: "Why is dairy such a strong solar case?",
        a: "Bulk tank cooling, water heating and vacuum pumps all draw during daylight, so the farm uses what it generates instead of exporting it. Self-consumption is where the real return is.",
      },
      {
        q: "Should farm and domestic share a campaign?",
        a: "No. Different system sizes, different grant routes, different search terms and different lead forms. Almost every Cork installer runs domestic only and leaves the better market alone.",
      },
      {
        q: "How far into west Cork should we go?",
        a: "As far as a survey, an install and a return visit can be done profitably. Name those towns explicitly and let the rest go to somebody closer.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "tipperary",
    industryLabel: "solar installers",
    countyName: "Tipperary",
    title: "Solar Leads Tipperary | Marketing for Tipperary Solar Installers",
    description:
      "Lead generation for Tipperary solar installers: a farm-first county with almost no urban market, where the domestic playbook simply does not fit.",
    h1: "Solar leads in Tipperary, where the customer is usually a farm.",
    intro: [
      "Tipperary has no city and a great deal of farmland. An installer running the standard domestic grant-and-savings campaign here is advertising to a small slice of the county and ignoring the rest.",
      "The dairy and mixed farms across the Golden Vale have large sheds, heavy daytime electricity use and owners who evaluate a capital purchase in terms of payback rather than monthly savings.",
    ],
    sections: [
    {
      heading: "A farm is not a big house",
      body: [
        "System sizes are larger, the roof is a shed rather than a dwelling, the grant route is different and the decision is made on a return calculation rather than on feeling good about the environment.",
        "A website written for homeowners loses these people in the first paragraph. They are looking for somebody who has done yards like theirs, and they can tell in about ten seconds whether you have.",
      ],
    },
    {
      heading: "Photographs of sheds, not semis",
      body: [
        "Every solar installer in Ireland has photographs of panels on a suburban roof. Very few have photographs of a completed array on a milking parlour or a grain store.",
        "Those images are worth more in this county than any amount of copy, because they answer the only question a farmer is actually asking: have you done this before, on a building like mine.",
      ],
    },
    {
      heading: "Seasonality runs on the farming calendar",
      body: [
        "Capital decisions cluster around the accounting year and around grant application windows, not around the months a homeowner starts thinking about bills.",
        "Advertising into a grant window that has just closed is a wasted quarter. Knowing the dates and being visible before them is most of the advantage available here.",
      ],
    },
    {
      heading: "Towns are a secondary market, not the main one",
      body: [
        "Clonmel, Thurles and Nenagh have ordinary domestic demand and it is worth serving, but it will not fill a diary on its own.",
        "Treat it as the second campaign rather than the first, which is the reverse of how almost every installer here is set up.",
      ],
    },
    ],
    towns: [
      "Clonmel",
      "Thurles",
      "Nenagh",
      "Tipperary town",
      "Cashel",
      "Carrick-on-Suir",
      "Roscrea",
      "Templemore",
      "Cahir",
      "Fethard",
      "Newport",
      "Borrisokane",
    ],
    faqs: [
      {
        q: "Is Tipperary a domestic market?",
        a: "Partly, but not mainly. There is no city and a great deal of farmland, so a domestic-only campaign is advertising to a small slice of the county.",
      },
      {
        q: "What matters most in farm solar marketing?",
        a: "Photographs of completed arrays on sheds, parlours and grain stores. It answers the only question a farmer is asking, and almost no installer has them.",
      },
      {
        q: "When should we advertise?",
        a: "Ahead of grant application windows and around the farming accounting year, not on the domestic calendar. Advertising into a window that has just closed wastes a quarter.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "dublin",
    industryLabel: "solar installers",
    countyName: "Dublin",
    title: "Solar Leads Dublin | Marketing for Dublin Solar Installers",
    description:
      "Lead generation for Dublin solar installers: the dearest clicks in Ireland, a lot of unsuitable roofs, and why qualifying early is the whole game.",
    h1: "Solar leads in Dublin, where the wrong lead costs the most.",
    intro: [
      "Dublin has the highest click prices in the country, the most installers competing and a housing stock where a meaningful share of roofs are too small, too shaded or facing the wrong way.",
      "That combination is punishing. Paying the highest cost per lead in Ireland and then sending a surveyor to a roof that was never going to work is the fastest way to lose money in this trade.",
    ],
    sections: [
    {
      heading: "Qualify before the survey, not after",
      body: [
        "Every question on the enquiry form costs you a few cheap leads and saves you a site visit. In Dublin a wasted site visit is half a day in traffic.",
        "Ownership, house type, roughly which way the back of the house faces, whether anything overshadows it, and the size of the last bill. Five questions, and they remove most of the jobs that were going to be cancelled anyway.",
        "Installers resist this because the lead count drops. The number that matters is installs per euro spent, and it goes up.",
      ],
    },
    {
      heading: "Apartments, terraces and protected structures",
      body: [
        "Large parts of the city are apartments where the resident cannot make the decision at all, terraces with small roof planes, or conservation areas with their own constraints.",
        "Saying clearly on the site which properties you can and cannot serve filters more waste than any bid adjustment, and it does it before you have paid for the click.",
      ],
    },
    {
      heading: "The suburbs are the actual market",
      body: [
        "The detached and semi-detached belt — from the older suburbs out through the commuter edge — is where the roofs, the bills and the money are.",
        "Target that geography specifically rather than the county. A campaign set to Dublin spends a great deal of its budget on the parts of the city that cannot buy.",
      ],
    },
    {
      heading: "Batteries are a bigger part of the sale here",
      body: [
        "High-income households out of the house all day have poor self-consumption without storage, and a solar-only quote for them is a weaker proposition than the customer realises.",
        "Leading with the battery conversation is more honest and, in this market, usually a larger job. It also separates you from the installers quoting the cheapest possible headline system.",
      ],
    },
    ],
    towns: [
      "Dublin city",
      "Rathfarnham",
      "Clontarf",
      "Blackrock",
      "Swords",
      "Malahide",
      "Lucan",
      "Tallaght",
      "Dún Laoghaire",
      "Castleknock",
      "Terenure",
      "Skerries",
    ],
    faqs: [
      {
        q: "Why qualify so hard in Dublin?",
        a: "Because a wasted site visit is half a day in traffic and the clicks are the dearest in Ireland. Five form questions remove most of the jobs that were going to be cancelled anyway.",
      },
      {
        q: "What should the form ask?",
        a: "Ownership, house type, which way the back of the house faces, whether anything overshadows it, and the last bill. Lead count drops and installs per euro rise.",
      },
      {
        q: "Should we lead with batteries?",
        a: "For commuter households out all day, usually yes. Self-consumption is poor without storage, and it is both the more honest pitch and the larger job.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solar-installers",
    county: "kildare",
    industryLabel: "solar installers",
    countyName: "Kildare",
    title: "Solar Leads Kildare | Marketing for Kildare Solar Installers",
    description:
      "Lead generation for Kildare solar installers: commuter houses empty all day, new estates already fitted, and why the battery is the real product.",
    h1: "Solar leads in Kildare, where nobody is home at noon.",
    intro: [
      "Kildare is commuter country. The households with the biggest roofs and the best incomes are also the households with nobody in them between eight and six, which is precisely when the panels are producing.",
      "That single fact should shape every campaign run in this county, and it shapes almost none of them.",
    ],
    sections: [
    {
      heading: "Self-consumption is the whole problem",
      body: [
        "Solar pays best when the electricity is used where it is made. A house that is empty all day exports most of what it generates, and exported units are worth a fraction of the ones you avoid buying.",
        "So the honest Kildare pitch is not a bare panel system. It is panels plus storage, or panels plus a shifted hot water and car charging schedule — and an installer who explains that clearly sounds like the only one who has actually thought about the customer's day.",
        "It is also the bigger sale. Being straight here and selling more are the same move, which is rare enough to be worth noticing.",
      ],
    },
    {
      heading: "New estates are already done",
      body: [
        "Houses built under the current regulations frequently arrived with panels already fitted. Advertising a first installation into those estates is spending money to reach people who cannot buy.",
        "They can buy a battery, an EV charger or an expansion. That is a different message and a different campaign, and targeting by estate age is worth the afternoon it takes to set up.",
      ],
    },
    {
      heading: "EV charging is the same conversation",
      body: [
        "Kildare has a high concentration of commuter households running electric cars, and a car charging overnight on grid electricity while the roof exported all day is an obvious thing to fix.",
        "Installers who handle both have a natural second product and a reason to ring a past customer. Those who do not are leaving the follow-up sale to someone else.",
      ],
    },
    {
      heading: "Naas, Newbridge, Maynooth behave differently from the west",
      body: [
        "The commuter towns have high incomes, high expectations of response time and dear clicks. West Kildare towards Athy and Rathangan is rural, cheaper and slower.",
        "Two campaigns. The east funds itself on job size; the west funds itself on cost per lead.",
      ],
    },
    ],
    towns: [
      "Naas",
      "Newbridge",
      "Maynooth",
      "Celbridge",
      "Leixlip",
      "Kildare town",
      "Athy",
      "Clane",
      "Sallins",
      "Monasterevin",
      "Kilcock",
      "Rathangan",
    ],
    faqs: [
      {
        q: "Why does commuting matter for solar?",
        a: "Because the house is empty when the panels produce. Most of the generation gets exported, and exported units are worth a fraction of the ones you avoid buying.",
      },
      {
        q: "So what should we actually sell?",
        a: "Panels with storage, or panels with shifted hot water and car charging. It is both the more honest pitch and the bigger job, which is a rare combination.",
      },
      {
        q: "Are new estates worth advertising to?",
        a: "Not for a first installation — many arrived with panels fitted. They are worth a battery, EV charger or expansion campaign, which is a different message entirely.",
      },
      PRICE_FAQ,
    ],
  },
];

export const industryCountyFor = (industry: string) =>
  industryCounty.filter((x) => x.industry === industry);

export const industryCountyBy = (industry: string, county: string) =>
  industryCounty.find((x) => x.industry === industry && x.county === county);

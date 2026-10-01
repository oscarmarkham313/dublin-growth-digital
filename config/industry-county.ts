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
  a: "A flat monthly fee with everything included, or a second tier with the other channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account. Ask on a call and we will give you the numbers.",
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
  {
    industry: "estate-agents",
    county: "cork",
    industryLabel: "estate agents",
    countyName: "Cork",
    title: "Property Marketing Cork | Lead Generation for Cork Estate Agents",
    description:
      "Valuation requests and vendor instructions for Cork estate agents: a second-city market with its own agents, its own loyalties and its own rules.",
    h1: "Property marketing in Cork, for a market that is not Dublin.",
    intro: [
      "Cork is a genuinely separate property market rather than a smaller version of Dublin. It has its own established agencies, its own long-standing family firms, and vendors who will choose a Cork name over a national brand almost as a matter of course.",
      "That local preference is the thing to work with rather than against. An agency competing in Cork on national scale is competing on the one axis where it has least to gain.",
    ],
    sections: [
    {
      heading: "The valuation request is the whole funnel",
      body: [
        "Estate agency lead generation has exactly one meaningful first step: getting a homeowner to ask what their house is worth. Everything after that is your own process.",
        "Most agency websites bury this behind a contact form. It should be the most prominent thing on the site, it should take under a minute, and it should promise something specific — a figure and a conversation, not a generic follow-up.",
        "This is the work we did for a Dublin agency, where Google Ads and landing pages built around valuation requests produced over two hundred and forty qualified enquiries. The mechanic transfers to Cork; the competition here is considerably lighter.",
      ],
    },
    {
      heading: "City, harbour and west are three markets",
      body: [
        "Cork city and the suburbs turn over steadily and have the most agency competition. The harbour towns — Carrigaline, Midleton, Cobh — are commuter markets with their own price bands and buyer profile.",
        "West Cork is a different business again: holiday and lifestyle purchases, buyers frequently from Dublin or abroad, longer selling times and far more dependence on photography and presentation because the buyer is not local.",
        "One campaign across all three averages the message and wins in none of them.",
      ],
    },
    {
      heading: "The Price Register did your negotiating for you",
      body: [
        "Every vendor in Cork can look up what the house down the road actually sold for. The days of a valuation being an opinion the homeowner could not check are gone.",
        "Agencies that lean into this — showing recent comparable sales openly, explaining why this house sits where it does against them — win instructions from agencies still treating the number as privileged information.",
        "It is also excellent content. A short, regularly updated note on what has sold in a given suburb is exactly what a homeowner thinking of moving searches for, and almost nobody in this county publishes it.",
      ],
    },
    {
      heading: "Sold boards and the street you already work",
      body: [
        "Estate agency is the one trade where your advertising is nailed to the front garden of every job you complete. A concentration of boards in one area is worth more than a broad campaign across the county.",
        "That argues for deliberately farming areas rather than taking instructions wherever they come from. Pick the suburbs, dominate them, and let the boards and the local search results compound.",
      ],
    },
    ],
    towns: [
      "Cork city",
      "Douglas",
      "Ballincollig",
      "Carrigaline",
      "Midleton",
      "Cobh",
      "Mallow",
      "Bandon",
      "Kinsale",
      "Clonakilty",
      "Fermoy",
      "Macroom",
    ],
    faqs: [
      {
        q: "What actually generates estate agency leads?",
        a: "Valuation requests. It is the only meaningful first step, and most agency websites bury it behind a generic contact form instead of making it the most prominent thing on the page.",
      },
      {
        q: "Do you have property experience?",
        a: "Yes. We work with a Dublin property agency on Google Ads and landing pages built around valuation requests and vendor leads — over 240 qualified enquiries. Ask on a call and we will talk you through it.",
      },
      {
        q: "Is Cork different from Dublin?",
        a: "Substantially. Separate established agencies, strong local loyalty, and three distinct sub-markets in the city, the harbour towns and west Cork. Competing on national scale here is competing where you gain least.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "estate-agents",
    county: "dublin",
    industryLabel: "estate agents",
    countyName: "Dublin",
    title: "Property Marketing Dublin | Leads for Dublin Estate Agents",
    description:
      "Valuation requests for Dublin estate agents: the fiercest instruction competition in Ireland, fee pressure, and why speed decides most of it.",
    h1: "Property marketing in Dublin, where the instruction is the whole fight.",
    intro: [
      "Dublin has the highest concentration of estate agencies in the country, the highest property values and the most aggressive competition for every instruction. It also has vendors who will interview three agencies before choosing one.",
      "The listing is not the hard part. Winning the right to list is, and almost all of that is decided before the vendor ever picks up the phone.",
    ],
    sections: [
    {
      heading: "Be in front of them six months early",
      body: [
        "A homeowner decides to sell over months. They look at the Price Register, they watch what the neighbours got, they mention it to a friend, and eventually they shortlist agencies.",
        "The agency that wins is usually the one they had already heard of by then. That is a brand-awareness job, not a lead-capture one, and in Dublin it is the difference between competing on fee and being asked first.",
        "It is also what Meta advertising is genuinely good at in this sector, at a cost per thousand impressions that is trivial compared with the value of one instruction.",
      ],
    },
    {
      heading: "Valuation requests, answered immediately",
      body: [
        "A valuation request that sits for a day is frequently a valuation somebody else has already done. In Dublin the vendor has usually contacted more than one agency in the same sitting.",
        "Answering within the hour is the single highest-return process change available to most Dublin agencies, and it costs nothing. It is also the thing most often lost when enquiries arrive through a form nobody is watching at the weekend.",
      ],
    },
    {
      heading: "The postcode is the market",
      body: [
        "Dublin is not one property market. D6 and D15 behave differently, sell to different buyers at different speeds and need different messages, and a campaign set to 'Dublin' spends most of its budget outside the areas an agency actually covers.",
        "Agencies that target by the postcodes and suburbs they genuinely work get a fraction of the waste and considerably better relevance in the results.",
      ],
    },
    {
      heading: "Fee pressure is answered with evidence, not argument",
      body: [
        "Vendors in Dublin will ask why your fee is higher than the agency down the road. Arguing the percentage is a losing position.",
        "Showing achieved prices against asking prices, average time to sale and what your marketing actually involves changes the conversation to value. That evidence has to exist somewhere a vendor can find it before the meeting, which for most agencies it does not.",
      ],
    },
    ],
    towns: [
      "Dublin city",
      "Rathmines",
      "Ranelagh",
      "Clontarf",
      "Blackrock",
      "Dún Laoghaire",
      "Castleknock",
      "Swords",
      "Malahide",
      "Lucan",
      "Terenure",
      "Drumcondra",
    ],
    faqs: [
      {
        q: "Why advertise before someone is selling?",
        a: "Because the shortlist is made from agencies they had already heard of. In Dublin that is the difference between being asked first and competing on fee.",
      },
      {
        q: "How fast should a valuation request be answered?",
        a: "Within the hour. Dublin vendors usually contact more than one agency in the same sitting, and a request left overnight is often a valuation someone else has already done.",
      },
      {
        q: "Should we target Dublin as one area?",
        a: "No. The postcodes are separate markets with different buyers and speeds. A campaign set to Dublin spends most of its budget outside the areas you actually cover.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "estate-agents",
    county: "galway",
    industryLabel: "estate agents",
    countyName: "Galway",
    title: "Property Marketing Galway | Leads for Galway Estate Agents",
    description:
      "Valuation requests for Galway estate agents: a student rental city, a second-home coast and a county market that behaves nothing like either.",
    h1: "Property marketing in Galway, across three different businesses.",
    intro: [
      "Galway city runs on a student and rental economy that most Irish cities do not have at the same intensity, which makes letting and management a far larger share of an agency's income here than elsewhere.",
      "Outside the city, the coast is second-home and lifestyle property with buyers who are frequently not in the county, and east Galway is an ordinary rural market moving at its own pace.",
    ],
    sections: [
    {
      heading: "Letting and management is recurring revenue",
      body: [
        "Sales income is lumpy and depends on market conditions you do not control. Management fees arrive every month regardless.",
        "In Galway the volume of rental stock makes landlord acquisition genuinely worth advertising for, and almost no agency does it deliberately — landlords tend to arrive by referral or not at all.",
        "A landlord is also a future vendor. Winning the management contract now frequently wins the sale later, which makes the acquisition cost look very different.",
      ],
    },
    {
      heading: "The coastal buyer is not in the county",
      body: [
        "Somebody buying in Connemara or on the coast is often in Dublin, London or further away. They cannot view casually, they decide substantially on what they can see online, and they are buying a lifestyle rather than a location on a commute.",
        "That means photography, video and honest written description do work that a local sale does not require. Agencies that treat a coastal listing like a city one lose months on the market.",
      ],
    },
    {
      heading: "Students set the calendar",
      body: [
        "Rental demand in the city concentrates hard around the academic year, and an agency not visible before it starts is invisible during it.",
        "The same seasonality applies to landlord acquisition — the moment to reach a landlord is when they are thinking about the coming year, not when they already have a tenant.",
      ],
    },
    {
      heading: "City and county need separate messages",
      body: [
        "A Galway city agency advertising into Loughrea or Ballinasloe with a city message is spending money to look out of place.",
        "Name the towns you genuinely cover and write for them. Proximity decides most of the map results anyway, so the honest approach is also the effective one.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Oranmore",
      "Knocknacarra",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Clifden",
      "Moycullen",
      "Headford",
      "Gort",
    ],
    faqs: [
      {
        q: "Is letting worth advertising for?",
        a: "In Galway, yes. Management fees are recurring where sales income is lumpy, and a landlord is a future vendor. Almost no agency here advertises for landlords deliberately.",
      },
      {
        q: "What do coastal listings need?",
        a: "Photography, video and honest description, because the buyer is frequently in Dublin or abroad and cannot view casually. Treating a coastal listing like a city one costs months on the market.",
      },
      {
        q: "When should we advertise for rentals?",
        a: "Before the academic year, not during it. The same applies to reaching landlords — when they are planning the year ahead rather than when they already have a tenant.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "estate-agents",
    county: "kildare",
    industryLabel: "estate agents",
    countyName: "Kildare",
    title: "Property Marketing Kildare | Leads for Kildare Estate Agents",
    description:
      "Valuation requests for Kildare estate agents: new-build schemes, first-time buyers with a scheme deadline, and estates where every house is comparable.",
    h1: "Property marketing in Kildare, where the estate is the market.",
    intro: [
      "Kildare is commuter country and a great deal of its housing stock is estate-built, which changes estate agency in a specific way: in an estate of ninety near-identical houses, the comparable is not an approximation, it is the house next door.",
      "That makes valuation less arguable and marketing more important, because when the product is genuinely the same the agency is the only variable.",
    ],
    sections: [
    {
      heading: "Farm the estate, not the county",
      body: [
        "An agency with four sold boards in one estate is the obvious choice for the fifth seller there. That compounding does not happen when instructions are taken scattered across the county.",
        "Deliberately choosing estates and towns to dominate — Naas, Newbridge, Maynooth, Celbridge — beats broad coverage, and it is measurable. Count instructions per estate and the pattern is usually obvious within two quarters.",
      ],
    },
    {
      heading: "First-time buyers arrive with a deadline",
      body: [
        "A large share of Kildare's new-build demand comes from first-time buyers using the available supports, and those supports come with paperwork, timing and conditions.",
        "An agency whose website explains how that actually works — the sequence, the timing, what has to be in place before what — gets found by people at the beginning of the process rather than the end. Very few agency sites explain any of it.",
      ],
    },
    {
      heading: "New-build schemes are a different client entirely",
      body: [
        "Selling a scheme for a developer is not the same business as selling a second-hand semi. It is a longer relationship, a bigger fee and a completely different pitch, and it is won on evidence of absorption rates rather than on local charm.",
        "Agencies that want that work need to say so somewhere visible, with evidence. Most say nothing at all and wonder why developers use the same two firms.",
      ],
    },
    {
      heading: "Commuter vendors are time-poor and online",
      body: [
        "The household selling in Naas is out of the house from seven until seven. They research at night, they will not ring during the day, and they expect a response to a form submitted at eleven at night.",
        "Make the valuation request work on a phone in under a minute and answer it first thing. That is most of the competitive advantage available here.",
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
      "Kildare town",
      "Athy",
      "Kilcock",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "Why farm individual estates?",
        a: "Because four sold boards in one estate makes you the obvious choice for the fifth seller. Scattered instructions across a county never compound that way.",
      },
      {
        q: "Is new-build scheme work different?",
        a: "Completely. Longer relationship, bigger fee, won on evidence of absorption rather than local reputation. Most agencies say nothing about wanting it.",
      },
      {
        q: "What do commuter vendors expect?",
        a: "To research at night and get an answer first thing. A valuation request that works on a phone in under a minute is most of the advantage here.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "estate-agents",
    county: "mayo",
    industryLabel: "estate agents",
    countyName: "Mayo",
    title: "Property Marketing Mayo | Leads for Mayo Estate Agents",
    description:
      "Valuation requests for Mayo estate agents: inherited and emigrant-owned property, probate sales, and vendors who live in Dublin or abroad.",
    h1: "Property marketing in Mayo, for vendors who live somewhere else.",
    intro: [
      "A substantial share of Mayo property transactions involve somebody who does not live in Mayo. Inherited houses, family homes after a bereavement, farms being divided, property owned by people who emigrated decades ago.",
      "Those vendors cannot call into the office. They are arranging a sale from Dublin, Manchester or Boston, and they will choose an agency on what they can find and what it looks like it would be to deal with remotely.",
    ],
    sections: [
    {
      heading: "The remote vendor decides on your website",
      body: [
        "No neighbour to ask, no local knowledge, no ability to meet three agencies. They search, they read, and they pick.",
        "That makes the website do the work reputation does locally: clear explanation of how a sale runs, what you handle, what it costs, and evidence of sales in that part of the county. Agencies with a single-page site and a phone number lose these instructions without knowing they were in the running.",
      ],
    },
    {
      heading: "Probate and family sales need a different tone",
      body: [
        "A house being sold after a death is not an ordinary transaction, and marketing that treats it as one reads badly. The vendor is frequently a group of siblings who do not fully agree, working to a legal timetable, at a difficult time.",
        "Content that explains the process plainly and patiently is genuinely useful and almost nonexistent in Irish agency marketing. It is also exactly what somebody searches for at eleven at night when they have just been made an executor.",
      ],
    },
    {
      heading: "Three towns that do not share customers",
      body: [
        "Castlebar, Ballina and Westport anchor their own areas, and an agency in one has limited pull in the others. Proximity decides the map results and the county is too big to overcome it.",
        "Dominating your own catchment is achievable and is the realistic goal. County-wide ranking is not.",
      ],
    },
    {
      heading: "Advertise to where the vendors live",
      body: [
        "A Mayo agency can put advertising in front of people in Dublin or in Britain who have a connection to the county. That is unusual and it is available.",
        "It suits the inherited-property market precisely, and it is the kind of targeting almost no regional Irish agency has tried.",
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
      "Knock",
      "Belmullet",
      "Foxford",
      "Charlestown",
      "Newport",
      "Kiltimagh",
    ],
    faqs: [
      {
        q: "Why does the website matter so much here?",
        a: "Because a large share of vendors live elsewhere — inherited houses, family homes, emigrant-owned property. They cannot ask a neighbour, so they choose on what they can find.",
      },
      {
        q: "How should probate sales be handled in marketing?",
        a: "Plainly and patiently. The vendor is often several siblings working to a legal timetable at a hard time, and content explaining the process is genuinely useful and almost nonexistent here.",
      },
      {
        q: "Can we rank across Mayo?",
        a: "No. Castlebar, Ballina and Westport anchor separate areas and proximity decides the map results. Owning your own catchment is the achievable goal.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "estate-agents",
    county: "kerry",
    industryLabel: "estate agents",
    countyName: "Kerry",
    title: "Property Marketing Kerry | Leads for Kerry Estate Agents",
    description:
      "Valuation requests for Kerry estate agents: a holiday and second-home market with overseas buyers and a listing calendar that runs on the season.",
    h1: "Property marketing in Kerry, where the buyer is rarely local.",
    intro: [
      "A large part of Kerry's property market is not people moving house. It is holiday homes, retirement purchases, lifestyle moves and overseas buyers, and those are bought on aspiration rather than on a commute.",
      "The practical consequence is that presentation does far more work here than it does in an ordinary market, and the calendar matters more than most agencies allow for.",
    ],
    sections: [
    {
      heading: "You are selling a place, not a floor plan",
      body: [
        "A buyer choosing between Kenmare and west Cork is not comparing square footage. They are imagining a life, and the listing either supports that or it does not.",
        "Photography in the right light, video that shows the setting and the approach, and written description that says what it is actually like to be there. Agencies that shoot a Kerry coastal house the way they would shoot a suburban semi leave money and months on the table.",
      ],
    },
    {
      heading: "The season sets the calendar",
      body: [
        "People fall in love with Kerry in summer and act on it afterwards. Listings that appear in the right part of the year reach buyers while the feeling is fresh; the same house listed in November works harder for less.",
        "Planning the year around that is straightforward and very few agencies do it deliberately.",
      ],
    },
    {
      heading: "Overseas buyers need the process explained",
      body: [
        "A buyer in Britain, Germany or the United States does not know how an Irish sale works — what a booking deposit is, how contracts run, what they need in place.",
        "Explaining it clearly on the website is the cheapest trust-building available, and it is the thing that separates an enquiry from a purchase for somebody who cannot walk into the office.",
      ],
    },
    {
      heading: "Distances make coverage a real decision",
      body: [
        "Tralee to Cahersiveen is a long way and the Ring roads are slow. Listing property you cannot service properly damages the relationship with the vendor and the eventual price.",
        "Name the areas you genuinely cover, and be straight about it. In a market this dependent on presentation, a listing given proper attention is worth more than three that are not.",
      ],
    },
    ],
    towns: [
      "Tralee",
      "Killarney",
      "Kenmare",
      "Dingle",
      "Listowel",
      "Killorglin",
      "Castleisland",
      "Cahersiveen",
      "Ballybunion",
      "Sneem",
      "Milltown",
      "Waterville",
    ],
    faqs: [
      {
        q: "What matters most in Kerry listings?",
        a: "Presentation. Buyers are frequently buying a lifestyle from a distance, so photography, video and honest description do work that a suburban listing never requires.",
      },
      {
        q: "Does the time of year matter?",
        a: "Yes. People fall in love with Kerry in summer and act afterwards. The same house listed in November works harder for less, and few agencies plan around it.",
      },
      {
        q: "How do we handle overseas buyers?",
        a: "Explain how an Irish sale actually works — deposits, contracts, what they need in place. It is the cheapest trust-building available for somebody who cannot walk into your office.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "donegal",
    industryLabel: "plumbers",
    countyName: "Donegal",
    title: "Heating Leads Donegal | Marketing for Donegal Plumbers",
    description:
      "Lead generation for Donegal plumbers: no mains gas anywhere in the county, an oil and solid fuel market, and cold snaps that decide the year.",
    h1: "Heating leads in Donegal, where there is no gas to service.",
    intro: [
      "Donegal has no natural gas network. Not a limited one — none. Every heating system in the county runs on oil, LPG, solid fuel, electricity or a heat pump, and a plumber marketing gas boiler services here is advertising a service nobody can buy.",
      "That sounds obvious and yet national plumbing campaigns run gas messaging into this county constantly, because the templates were written for Dublin.",
    ],
    sections: [
    {
      heading: "Oil, not gas, and the registration follows",
      body: [
        "Oil boiler servicing, replacement and repair is the bread and butter here, alongside solid fuel and an increasing amount of heat pump retrofit work.",
        "Say so plainly. A homeowner in Letterkenny searching for a boiler service wants to know you work on their kind of boiler, and the sites that lead with gas credentials read as though they are from somewhere else.",
      ],
    },
    {
      heading: "The cold snap is the whole year",
      body: [
        "Burst pipes, frozen condensate, failed boilers on the coldest night — Donegal gets weather that produces genuine emergency volume, and it arrives in a few concentrated days.",
        "The businesses that capture it are visible before it starts, not the ones that begin advertising the morning the phone goes mad. By then the work has gone to whoever was already in the map results.",
      ],
    },
    {
      heading: "Distance decides what is profitable",
      body: [
        "Letterkenny to the peninsulas or to Glencolmcille is a long way, and a callout that takes three hours of driving for an hour of work loses money however urgent it felt.",
        "Name the areas you genuinely cover. In a county this size and this slow to drive, the enquiries you turn away are worth more than the ones you take at a loss.",
      ],
    },
    {
      heading: "Retrofit is the growth market",
      body: [
        "Heat pump and insulation retrofit is changing this county faster than most, precisely because there is no gas alternative and oil is exposed to price swings.",
        "A plumber positioned for retrofit rather than only for repair is positioned for where the grant-supported money is going. That is a different message, a different page and a much longer sales conversation than a callout.",
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
      "Killybegs",
      "Dungloe",
      "Moville",
      "Ballyshannon",
      "Lifford",
      "Gweedore",
    ],
    faqs: [
      {
        q: "Is there mains gas in Donegal?",
        a: "None at all. Every system runs on oil, LPG, solid fuel, electricity or a heat pump, so gas boiler messaging advertises a service nobody here can buy.",
      },
      {
        q: "When does the emergency work happen?",
        a: "In a handful of very cold days. It goes to whoever is already visible when it starts, so the work to capture it happens in autumn.",
      },
      {
        q: "Is heat pump work worth positioning for?",
        a: "In this county especially. There is no gas alternative, oil prices swing, and retrofit is where the grant-supported money is going.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "cork",
    industryLabel: "plumbers",
    countyName: "Cork",
    title: "Heating Leads Cork | Marketing for Cork Plumbers",
    description:
      "Lead generation for Cork plumbers: mains gas in the city, oil across the county, and two different trades run under one campaign.",
    h1: "Heating leads in Cork, for a county running on two fuels.",
    intro: [
      "Cork city and its suburbs are on the gas network. Most of the rest of the county is not, and runs on oil and solid fuel.",
      "That single fact splits a Cork plumbing business in two, and almost every campaign in the county is written as though it does not.",
    ],
    sections: [
    {
      heading: "Two fuels, two messages, two sets of searches",
      body: [
        "A homeowner in Douglas searching for a boiler service means a gas boiler. A homeowner outside Macroom means an oil one. The work is different, the registration is different and the words they type are different.",
        "Running one Cork campaign covering both means half your spend reaches people whose system you did not mention. Splitting them is an afternoon's work and it is consistently the biggest available improvement on a Cork plumbing account.",
      ],
    },
    {
      heading: "West Cork is a distance decision",
      body: [
        "An hour and a half each way is a real cost on a callout, and a radius drawn around the city quietly includes a lot of work that will not pay.",
        "Decide the line and publish it. The enquiries outside it were costing you time you were not charging for.",
      ],
    },
    {
      heading: "The city has the replacement market",
      body: [
        "Cork city's older housing stock carries a large number of gas boilers approaching the end of their lives, which is the same replacement opportunity Dublin has and with considerably less competition chasing it.",
        "The mechanism is the same: note the age on the callout, ring before the cold, and be the one who already knows their system.",
      ],
    },
    {
      heading: "Rural work is bigger and slower",
      body: [
        "Out through the county the jobs tend to be larger — full system replacements, oil tank work, heat pump retrofit on houses with the space for it — and the customers take longer to decide.",
        "That rewards content and evidence rather than the speed that wins an urban callout. Different campaign, different page, different expectation of how fast it closes.",
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
      "Fermoy",
      "Clonakilty",
      "Youghal",
      "Macroom",
      "Kinsale",
    ],
    faqs: [
      {
        q: "Why split the county?",
        a: "The city is on mains gas and most of the county is not. Different systems, different registration, different searches. One campaign serves neither properly.",
      },
      {
        q: "Where is the replacement market?",
        a: "Cork city's older stock has a lot of ageing gas boilers, with far less competition chasing the replacements than in Dublin.",
      },
      {
        q: "How is rural work different?",
        a: "Bigger, slower jobs — full replacements, oil tank work, retrofit — decided on evidence rather than on who answered first.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "galway",
    industryLabel: "plumbers",
    countyName: "Galway",
    title: "Heating Leads Galway | Marketing for Galway Plumbers",
    description:
      "Lead generation for Galway plumbers: mains gas in the city only, a rental market that never stops, and rural oil work an hour out.",
    h1: "Heating leads in Galway, city rental and county oil.",
    intro: [
      "Galway city is on the gas network. Once you are out past the suburbs you are into oil, solid fuel and heat pumps, and the two halves of the county behave nothing alike.",
      "The city also has something most Irish counties do not: a rental and student housing sector large enough to be a business on its own, with landlords who need annual servicing, certificates and a plumber who answers.",
    ],
    sections: [
    {
      heading: "Landlord work is the steady half",
      body: [
        "Rental property needs servicing on a schedule, needs certificates, and needs repairs handled quickly because a tenant without heat is a problem with a clock on it.",
        "That is predictable, repeatable, year-round income, and it is almost never advertised for deliberately. Landlords and letting agents find their plumber by referral and then stay for years, which makes winning one worth far more than a single callout.",
        "It is also seasonal in a way worth planning around: the run-up to the academic year is when agents are scrambling and most receptive.",
      ],
    },
    {
      heading: "City gas, county oil",
      body: [
        "Same split as Cork, smaller scale. A single message covering both wastes half the budget on people whose system you did not mention.",
        "Name the fuel. It is the first thing a customer is checking for and most sites make them guess.",
      ],
    },
    {
      heading: "Distance west is not like distance east",
      body: [
        "Connemara is slow driving and the coast adds exposure and salt to everything outdoors. A callout that looks close on a map can be most of a day.",
        "Target named towns rather than a radius, and say what you will travel to.",
      ],
    },
    {
      heading: "The city market moves on the academic calendar",
      body: [
        "Demand around lettings concentrates hard before term and again at changeover. Being visible to agents and landlords ahead of those windows is worth more than being visible year-round at the same spend.",
        "Very few plumbers here plan around it, which is precisely why it works.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Knocknacarra",
      "Oranmore",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Gort",
      "Clifden",
      "Moycullen",
      "Headford",
    ],
    faqs: [
      {
        q: "Is landlord work worth chasing in Galway?",
        a: "It is the steadiest income available here — scheduled servicing, certificates and fast repairs, year-round, and almost nobody advertises for it deliberately.",
      },
      {
        q: "Does Galway have mains gas?",
        a: "The city does. Out past the suburbs it is oil, solid fuel and heat pumps, and the two halves need different messages.",
      },
      {
        q: "When should we target letting agents?",
        a: "Ahead of the academic year and at changeover, when they are scrambling. Few plumbers plan around that calendar.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "kildare",
    industryLabel: "plumbers",
    countyName: "Kildare",
    title: "Heating Leads Kildare | Marketing for Kildare Plumbers",
    description:
      "Lead generation for Kildare plumbers: new estates with heat pumps rather than boilers, gas in the towns, and commuters who ring at night.",
    h1: "Heating leads in Kildare, where the new houses have no boiler.",
    intro: [
      "A large share of Kildare's recent housing was built under regulations that pushed heating away from gas boilers and towards heat pumps. Those houses do not need a boiler service. They need something else entirely, and most plumbers here are still marketing boilers to them.",
      "The older towns are on gas and behave normally. The estates built in the last few years are a different service market that has barely been addressed.",
    ],
    sections: [
    {
      heading: "New estates are not boiler customers",
      body: [
        "A house with a heat pump does not need an annual gas service and will not search for one. It needs commissioning checks, cylinder and control work, and somebody who understands the system when it underperforms.",
        "There are very few plumbers in this county positioned as the person who services what is actually in those houses, and a great many houses. Targeting by estate age is an afternoon's work and opens a market with almost no competition.",
      ],
    },
    {
      heading: "Gas towns still behave normally",
      body: [
        "Naas, Newbridge, Maynooth and the older parts of the commuter towns are on the network with ordinary boiler service and replacement demand.",
        "Two campaigns, split by what the house actually has. Running one across both means the message is wrong for whichever half is reading it.",
      ],
    },
    {
      heading: "Commuters ring outside working hours",
      body: [
        "The household is empty from seven until seven. They discover the problem in the evening and they search at night, which is when most plumbing businesses are not answering.",
        "Deciding explicitly what happens to a nine o'clock call — an answering service, a missed-call text, a stated callback time — captures work that currently goes to whoever picked up.",
      ],
    },
    {
      heading: "Bathroom and renovation work runs alongside",
      body: [
        "Commuter households with equity and no intention of moving renovate instead. That is planned, well-paid plumbing work with a long lead time and a customer who researches first.",
        "It is a different message from emergency repair and deserves its own page, because the person planning a bathroom in March is not the person with a leak tonight.",
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
      "Kildare town",
      "Athy",
      "Kilcock",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "Why do new estates matter here?",
        a: "Much of Kildare's recent housing has heat pumps rather than boilers. Those houses will never search for a boiler service, and almost nobody is positioned to service what they actually have.",
      },
      {
        q: "When do Kildare enquiries arrive?",
        a: "In the evening. Commuter households are out all day, discover the problem at night and search then — which is when most plumbers are not answering.",
      },
      {
        q: "Is renovation work worth targeting?",
        a: "Yes, separately. A person planning a bathroom in March is not the person with a leak tonight, and they should not get the same page.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "mayo",
    industryLabel: "plumbers",
    countyName: "Mayo",
    title: "Heating Leads Mayo | Marketing for Mayo Plumbers",
    description:
      "Lead generation for Mayo plumbers: no mains gas, long drives between jobs, and empty holiday houses that burst in January.",
    h1: "Heating leads in Mayo, counted in driving time.",
    intro: [
      "Mayo has no mains gas network. It runs on oil, solid fuel, electricity and a growing amount of heat pump retrofit, spread across a large county with three towns that do not share customers.",
      "It also has an unusual amount of property that is empty for months — inherited houses, holiday homes and places owned by people who live in Dublin or abroad — and empty houses in a cold snap are a category of work all on their own.",
    ],
    sections: [
    {
      heading: "Oil and retrofit, not gas",
      body: [
        "Lead with the fuel people actually have. Oil servicing, oil boiler replacement, solid fuel and heat pump retrofit.",
        "Gas messaging here reads as a template from another county, and in a market where trust is most of the decision that is an expensive impression to make.",
      ],
    },
    {
      heading: "Empty houses are their own market",
      body: [
        "A house nobody is in takes a freeze differently. Pipes burst with nobody there to notice, and the damage is found weeks later by an owner arriving from somewhere else.",
        "Winter drain-downs, checks on empty property and being the person a remote owner can trust with a key is genuinely valuable work, arranged by people who cannot shop around locally. Very few plumbers offer it explicitly.",
      ],
    },
    {
      heading: "Three towns, three catchments",
      body: [
        "Castlebar, Ballina and Westport anchor separate areas. Proximity decides the map results and the county is far too big to overcome that.",
        "Own your own catchment properly rather than spreading thin across the county. It is the achievable goal and almost nobody is contesting it seriously.",
      ],
    },
    {
      heading: "A heavy website fails out west",
      body: [
        "Mobile coverage across much of west Mayo is poor. A slow site does not load slowly for those customers, it does not load, and you never see them in your enquiry numbers.",
        "For a trade whose customers are frequently standing in a cold house on one bar of signal, page weight is not a technical nicety.",
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
      "Knock",
      "Foxford",
      "Charlestown",
      "Newport",
      "Kiltimagh",
    ],
    faqs: [
      {
        q: "Is there gas in Mayo?",
        a: "No mains network. Oil, solid fuel, electricity and heat pump retrofit, so gas messaging reads as a template from another county.",
      },
      {
        q: "What is the empty-house market?",
        a: "Inherited and holiday property that freezes with nobody there. Winter drain-downs and checks for remote owners are valuable work almost nobody offers explicitly.",
      },
      {
        q: "Can we cover the whole county?",
        a: "Not in the map results. Castlebar, Ballina and Westport are separate catchments and proximity decides it. Own yours.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "plumbers-and-heating",
    county: "kerry",
    industryLabel: "plumbers",
    countyName: "Kerry",
    title: "Heating Leads Kerry | Marketing for Kerry Plumbers",
    description:
      "Lead generation for Kerry plumbers: hotel and guesthouse plant with a hard seasonal deadline, no mains gas, and a county that empties in winter.",
    h1: "Heating leads in Kerry, where the plant has to work by Easter.",
    intro: [
      "Kerry runs on tourism, and tourism runs on hot water. Hotels, guesthouses, B&Bs and restaurants all need plant that works from Easter through September, and none of them can afford it failing in August.",
      "That is a commercial plumbing market with a hard annual deadline, and it sits alongside an ordinary domestic trade in a county with no mains gas and a lot of houses nobody is in for eight months.",
    ],
    sections: [
    {
      heading: "Hospitality plant is a different business",
      body: [
        "Commercial hot water, large cylinders, pumped systems and kitchen plant are not a domestic callout with bigger pipes. The stakes are different too — a guesthouse without hot water in July is losing money by the hour.",
        "Operators know this and will pay for a plumber who understands it, answers in season and has done their kind of building before. Very few plumbers in this county market to them at all, and the ones who do tend to get the work for years.",
      ],
    },
    {
      heading: "Sell the pre-season service, not the emergency",
      body: [
        "The whole commercial calendar points at one moment: everything must be right before the season starts. A February and March campaign offering pre-season servicing reaches operators exactly when that is on their mind.",
        "It is also far better work than an August emergency — planned, scheduled, priced properly and done when you are not already stretched. Almost nobody advertises into that window.",
      ],
    },
    {
      heading: "No gas, and a lot of oil",
      body: [
        "Kerry has no mains gas network, so it is oil, LPG, solid fuel and heat pumps, domestic and commercial alike.",
        "Say which you work on. It is the first thing anyone is checking and a site that leads with gas credentials reads as though it belongs to another county.",
      ],
    },
    {
      heading: "Empty houses and distance",
      body: [
        "Holiday property sits unheated for most of the year and is found leaking in spring by an owner arriving from elsewhere. Winter checks and drain-downs for remote owners are real, well-paid work arranged by people who cannot shop around locally.",
        "The distances are real as well. Tralee to Cahersiveen is not a callout, it is a day, and the Ring roads are slow in both seasons. Name what you cover.",
      ],
    },
    ],
    towns: [
      "Tralee",
      "Killarney",
      "Kenmare",
      "Dingle",
      "Listowel",
      "Killorglin",
      "Castleisland",
      "Cahersiveen",
      "Ballybunion",
      "Sneem",
      "Milltown",
      "Waterville",
    ],
    faqs: [
      {
        q: "Is hospitality work worth targeting?",
        a: "It is the distinctive opportunity here. Commercial hot water and kitchen plant with a hard seasonal deadline, operators who pay for competence, and almost no plumber marketing to them.",
      },
      {
        q: "When should we advertise?",
        a: "February and March, for pre-season servicing. Planned work priced properly beats an August emergency when you are already stretched.",
      },
      {
        q: "Is there mains gas in Kerry?",
        a: "No network. Oil, LPG, solid fuel and heat pumps, commercial and domestic alike, so say which you work on.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "dublin",
    industryLabel: "landscapers",
    countyName: "Dublin",
    title: "Landscaping Leads Dublin | Marketing for Dublin Landscapers",
    description:
      "Lead generation for Dublin landscapers: small high-value gardens, access that decides the price, and the dearest clicks in the trade.",
    h1: "Landscaping leads in Dublin, where access decides the job.",
    intro: [
      "Dublin gardens are small, valuable and awkward to reach. A great many of them have no side entrance, which means every bag of gravel and every slab goes through the house, and that single fact changes the price more than the design does.",
      "It also means a quote given without seeing the property is frequently wrong, and the landscapers who do well here are the ones who deal with that honestly and early rather than discovering it on day one.",
    ],
    sections: [
    {
      heading: "Say what access means before the visit",
      body: [
        "Most Dublin homeowners have no idea that carrying materials through a hallway is what makes their patio dearer than their neighbour's. They compare two quotes and assume the higher one is greedy.",
        "A page that explains it plainly does two jobs: it prepares the customer for a realistic number, and it makes you the person who knew what they were talking about. Competitors quoting blind look cheaper right up until they revise.",
      ],
    },
    {
      heading: "Small does not mean cheap",
      body: [
        "A courtyard in Ranelagh can carry more design work per square metre than half an acre in the country. The budget follows the house value, not the garden size.",
        "That argues for leading with quality of finish rather than scale. Photographs of small, beautifully resolved spaces sell better here than a sweeping lawn, which is the opposite of what most landscaping portfolios lead with.",
      ],
    },
    {
      heading: "Hard landscaping is most of the money",
      body: [
        "Paving, steps, walls, decking, lighting and drainage are the bulk of Dublin spend. Planting matters but it is rarely what the budget goes on.",
        "Campaigns built around 'garden design' attract browsers. Campaigns built around the specific hard-landscaping job somebody has decided to do attract buyers, and the search terms are completely different.",
      ],
    },
    {
      heading: "The dearest clicks in the trade",
      body: [
        "Dublin landscaping clicks cost more than anywhere else in Ireland, so a loose campaign burns money fast. Location settings tight to the postcodes you actually serve, and a form that asks about access and property type before anybody drives anywhere.",
        "A wasted site visit in Dublin traffic is half a day. Five questions on a form save more than any bid adjustment.",
      ],
    },
    ],
    towns: [
      "Rathmines",
      "Ranelagh",
      "Terenure",
      "Clontarf",
      "Blackrock",
      "Dún Laoghaire",
      "Castleknock",
      "Malahide",
      "Swords",
      "Lucan",
      "Rathfarnham",
      "Howth",
    ],
    faqs: [
      {
        q: "Why does access matter so much in Dublin?",
        a: "A great many gardens have no side entrance, so materials go through the house. It changes the price more than the design does, and customers rarely understand that until it is explained.",
      },
      {
        q: "Are small gardens worth it?",
        a: "Often more per square metre than large ones. The budget follows the house value rather than the garden size, so lead with quality of finish rather than scale.",
      },
      {
        q: "What should the campaign target?",
        a: "The specific hard-landscaping job somebody has decided to do — paving, steps, walls, lighting. Generic 'garden design' terms attract browsers.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "wicklow",
    industryLabel: "landscapers",
    countyName: "Wicklow",
    title: "Landscaping Leads Wicklow | Marketing for Wicklow Landscapers",
    description:
      "Lead generation for Wicklow landscapers: a county with a gardening reputation, acid upland soil, and clients who research before they ring.",
    h1: "Landscaping leads in Wicklow, where people know their gardens.",
    intro: [
      "Wicklow has a gardening reputation that nowhere else in Ireland has, and it changes the customer. People here are more likely to know what they want, to have visited gardens, and to judge a landscaper on planting knowledge rather than on price alone.",
      "The county also splits sharply: the coastal strip from Bray to Greystones holds some of the most valuable housing outside south Dublin, while the uplands and the west are rural, exposed and acidic underfoot.",
    ],
    sections: [
    {
      heading: "A more informed client is an opportunity, not a problem",
      body: [
        "Customers who have looked at real gardens ask better questions and are harder to bluff, which suits a landscaper who actually knows the plants and punishes one who does not.",
        "Write for that. Content that discusses what does well on acid upland soil, what will not survive the exposure, and why a particular scheme suits a particular aspect will out-perform generic 'transform your garden' copy by a wide margin here.",
      ],
    },
    {
      heading: "Soil and shelter are genuine differentiators",
      body: [
        "Much of upland Wicklow is acidic and free-draining, which suits some planting and defeats other. Coastal sites deal with wind and salt. A scheme designed for one will look tired in the other within two seasons.",
        "Saying so in the quote demonstrates competence and heads off the conversation nobody wants three years later. It is also the kind of specific, local detail search engines reward and competitors do not bother writing.",
      ],
    },
    {
      heading: "The north coast buys differently from the west",
      body: [
        "Bray, Greystones and Delgany carry high budgets, high expectations and Dublin-level click prices. Baltinglass, Tinahely and the west are cheaper to reach and slower to decide.",
        "Two campaigns. The north justifies design-led work at design-led prices; the west is more practical, more agricultural, and better suited to a straightforward message about getting a job done well.",
      ],
    },
    {
      heading: "Photographs of Wicklow gardens, not stock",
      body: [
        "In a county where people actually look at gardens, stock imagery is noticed and discounted immediately.",
        "Your own finished work, on recognisable local house types, in Irish light. It is the single asset a competitor with a bigger budget cannot buy, and in this county it carries more weight than anywhere else.",
      ],
    },
    ],
    towns: [
      "Bray",
      "Greystones",
      "Delgany",
      "Wicklow town",
      "Arklow",
      "Blessington",
      "Enniskerry",
      "Rathdrum",
      "Kilcoole",
      "Newtownmountkennedy",
      "Tinahely",
      "Baltinglass",
    ],
    faqs: [
      {
        q: "Are Wicklow clients different?",
        a: "Generally better informed. They are more likely to have visited gardens and to judge you on planting knowledge, which suits a landscaper who knows the plants.",
      },
      {
        q: "Does soil actually matter to marketing?",
        a: "Here, yes. Writing about what suits acid upland ground or a salt-exposed coastal site demonstrates competence, and almost no competitor bothers.",
      },
      {
        q: "Should north and west Wicklow share a campaign?",
        a: "No. The coastal strip carries Dublin budgets and Dublin click prices; the west is rural, cheaper and slower. One message serves neither.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "galway",
    industryLabel: "landscapers",
    countyName: "Galway",
    title: "Landscaping Leads Galway | Marketing for Galway Landscapers",
    description:
      "Lead generation for Galway landscapers: ground that does not drain, a short working window, and drainage jobs nobody markets.",
    h1: "Landscaping leads in Galway, where drainage is the job.",
    intro: [
      "A great deal of landscaping work in Galway is really drainage work wearing a different name. Lawns that sit wet from October to April, patios that green over, gardens that cannot be walked on for half the year.",
      "Homeowners search for a lawn or a patio because that is the problem they can see. The landscaper who diagnoses the water is the one who does the job properly and the one who gets recommended afterwards.",
    ],
    sections: [
    {
      heading: "Sell the diagnosis, not just the finish",
      body: [
        "Anyone can lay a lawn. Laying one that still drains in February on heavy western ground is a different job, and it is worth more.",
        "Content explaining why lawns fail here — compaction, subsoil, no fall, builders' rubble under six inches of topsoil — finds people at the point of frustration and positions you as the one who knows why. That is a much stronger position than competing on the price of turf.",
      ],
    },
    {
      heading: "The working window is shorter than the year",
      body: [
        "Wet ground closes the season earlier and opens it later than in the east. Trying to run the same twelve-month campaign as a Dublin landscaper wastes budget in the months you cannot work.",
        "Concentrate spend ahead of the window rather than through it, and use the quiet months to build the photograph library and the reviews rather than to buy clicks you cannot service.",
      ],
    },
    {
      heading: "City and county want different things",
      body: [
        "Galway city gardens are small, often rented or student-adjacent, and the work is tidy-ups, maintenance and small hard landscaping. Out through east Galway and Connemara the properties are large, rural and exposed.",
        "The rural jobs are bigger, slower and more dependent on photographs because the customer is buying something they cannot picture. Those should not share a campaign with a city tidy-up.",
      ],
    },
    {
      heading: "Distance has to be a stated decision",
      body: [
        "Connemara is slow driving and a day on site can cost two hours of road. Name the areas you cover rather than drawing a radius, and let the far enquiries go.",
        "In a trade with plant and materials on a trailer, the drive is not a rounding error.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Oranmore",
      "Knocknacarra",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Gort",
      "Clifden",
      "Moycullen",
      "Headford",
    ],
    faqs: [
      {
        q: "What is the real job in Galway?",
        a: "Frequently drainage. Lawns and patios fail because the water has nowhere to go, and the landscaper who diagnoses that does the job properly and gets recommended.",
      },
      {
        q: "When should we advertise?",
        a: "Ahead of the working window rather than through it. Wet ground closes the season earlier and opens it later than in the east, so a flat twelve-month spend wastes money.",
      },
      {
        q: "Is Connemara worth covering?",
        a: "Only if you price the drive. A day on site can cost two hours of road, which is not a rounding error when you are towing plant.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "cork",
    industryLabel: "landscapers",
    countyName: "Cork",
    title: "Landscaping Leads Cork | Marketing for Cork Landscapers",
    description:
      "Lead generation for Cork landscapers: a mild climate that grows what fails elsewhere, city courtyards, and exposed west Cork coast.",
    h1: "Landscaping leads in Cork, in the mildest corner of the country.",
    intro: [
      "Cork's climate is mild enough that planting which struggles in the midlands or the north will thrive here, and the county has a long tradition of gardens that show it off.",
      "That is a genuine selling point and almost nobody uses it. Most Cork landscaping marketing is indistinguishable from Dublin's, which throws away the one thing this county can claim.",
    ],
    sections: [
    {
      heading: "Lead with what actually grows here",
      body: [
        "A homeowner deciding between three landscapers cannot judge construction quality from a quote. They can understand that you know what will do well in their particular spot.",
        "Content about planting that suits the mild south — and, just as usefully, what will not survive the salt on an exposed coastal site — is specific, local and checkable. That is the ground competitors cannot copy with a bigger budget.",
      ],
    },
    {
      heading: "Three markets in one county",
      body: [
        "Cork city and the suburbs are small gardens, access problems and hard landscaping. The harbour towns are commuter properties with newer, larger gardens and a full-design opportunity. West Cork is exposed, scattered, and heavily second-home.",
        "They want different work at different budgets on different timelines. Running them as one Cork campaign averages the message and wins in none.",
      ],
    },
    {
      heading: "West Cork buyers are frequently elsewhere",
      body: [
        "A lot of west Cork property is owned by people living in Dublin or abroad, who arrange work remotely and judge on what they can see online.",
        "That rewards a strong photograph library, clear written proposals and someone who will send updates. It is better-paid work than it looks, and very few landscapers are set up to handle a client they never meet.",
      ],
    },
    {
      heading: "Distance still decides profit",
      body: [
        "The city to west Cork is most of a morning each way. A radius on a map quietly includes work that cannot pay once the trailer is hitched.",
        "Name the towns. In this county that is worth more than any bid adjustment.",
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
      "Kinsale",
      "Clonakilty",
      "Skibbereen",
      "Youghal",
      "Fermoy",
    ],
    faqs: [
      {
        q: "What can Cork claim that others cannot?",
        a: "A mild climate that grows planting which struggles elsewhere. It is specific, local and checkable, and almost no Cork landscaper uses it in their marketing.",
      },
      {
        q: "Is west Cork worth the drive?",
        a: "It can be, because a lot of the property is second homes arranged remotely by owners who pay properly. But price the drive and name the towns you will actually reach.",
      },
      {
        q: "How should the county be split?",
        a: "City, harbour towns and west Cork are three different markets with different budgets and timelines. One campaign across all three wins in none of them.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "kerry",
    industryLabel: "landscapers",
    countyName: "Kerry",
    title: "Landscaping Leads Kerry | Marketing for Kerry Landscapers",
    description:
      "Lead generation for Kerry landscapers: hotel and guesthouse grounds with a hard seasonal deadline, plus holiday homes nobody maintains.",
    h1: "Landscaping leads in Kerry, where the season is the deadline.",
    intro: [
      "Kerry runs on tourism, and tourism is judged from the car park. Hotels, guesthouses, restaurants and self-catering properties all need their grounds to look right from Easter through September, and none of them can afford them looking neglected in July.",
      "That is a commercial maintenance market with a hard annual deadline, and it sits alongside a domestic trade in a county with a great deal of property that is empty most of the year.",
    ],
    sections: [
    {
      heading: "Commercial grounds are steady where domestic is lumpy",
      body: [
        "A hotel's grounds need cutting, edging, bedding and tidying on a schedule, every year, whether or not domestic customers are spending. That is recurring income with a contract behind it.",
        "It is also barely contested. Almost every landscaper in this county markets to homeowners, and the operators who need this find someone by asking around rather than by searching — which means whoever turns up with a proper proposal tends to win.",
      ],
    },
    {
      heading: "Sell in February, not in June",
      body: [
        "The whole commercial calendar points at one date: it has to look right before the season starts. A February and March approach reaches operators exactly when that is on their mind and their budget is being set.",
        "By June they have either solved it or are living with it, and you are competing on emergency rates for work nobody enjoys.",
      ],
    },
    {
      heading: "Holiday homes need someone they can trust remotely",
      body: [
        "Property that sits empty for months gets overgrown, and the owner finds out when they arrive or when a letting agent complains.",
        "A scheduled maintenance arrangement for absent owners is well-paid, predictable work arranged by people who cannot shop around locally. It needs photographs after each visit and someone who communicates, which is exactly what most landscapers do not offer.",
      ],
    },
    {
      heading: "Exposure and salt shape what survives",
      body: [
        "Coastal Kerry punishes planting that would be fine inland, and a scheme that fails in two seasons costs you the reference.",
        "Being straight about what will and will not work on an exposed site is both better practice and better marketing, particularly with a client who is buying from a distance.",
      ],
    },
    ],
    towns: [
      "Tralee",
      "Killarney",
      "Kenmare",
      "Dingle",
      "Listowel",
      "Killorglin",
      "Castleisland",
      "Cahersiveen",
      "Ballybunion",
      "Sneem",
      "Milltown",
      "Waterville",
    ],
    faqs: [
      {
        q: "Is commercial grounds work worth chasing?",
        a: "It is the distinctive opportunity here. Hotels and guesthouses need scheduled work with a hard seasonal deadline, it recurs every year, and almost nobody markets to them.",
      },
      {
        q: "When should we approach operators?",
        a: "February and March, when budgets are set and the season is on their mind. By June they have either solved it or are living with it.",
      },
      {
        q: "What about holiday homes?",
        a: "Scheduled maintenance for absent owners is predictable, well-paid work. It needs photographs after each visit and real communication, which is what most landscapers do not offer.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "landscapers",
    county: "donegal",
    industryLabel: "landscapers",
    countyName: "Donegal",
    title: "Landscaping Leads Donegal | Marketing for Donegal Landscapers",
    description:
      "Lead generation for Donegal landscapers: wind and salt that kill the wrong planting, a short season, and long drives between jobs.",
    h1: "Landscaping leads in Donegal, where shelter comes first.",
    intro: [
      "Donegal takes weather off the Atlantic that most Irish landscapers never design for. Wind and salt kill planting that would be unremarkable inland, and a scheme that ignores it looks tired inside two seasons.",
      "That makes shelter the first decision rather than an afterthought, and it makes local knowledge worth far more here than a design qualification from somewhere milder.",
    ],
    sections: [
    {
      heading: "Shelter is the design, not a detail",
      body: [
        "Hedging, windbreaks, fencing and the placement of everything else around them is what determines whether a Donegal garden works. Get it wrong and the planting fails publicly.",
        "Writing about that specifically — what survives exposure, what needs protection, what the salt does to soft growth — reaches people who have already watched something die and are looking for someone who will not repeat it.",
      ],
    },
    {
      heading: "A short season means concentrated demand",
      body: [
        "The working window here is shorter than in the south, and the spending window shorter still. Demand arrives in a rush in spring and drops away.",
        "Spend ahead of it rather than through it. Advertising in the months you cannot work is money spent teaching people about a service they will have forgotten about by the time you are free.",
      ],
    },
    {
      heading: "Drive time decides what is profitable",
      body: [
        "Letterkenny to the peninsulas or the southwest of the county is a long haul with a trailer, and the roads are slower than any map suggests.",
        "Name what you cover. In a county this size the enquiries you turn away protect the margin on the ones you take.",
      ],
    },
    {
      heading: "Derry firms appear in your results",
      body: [
        "In the north of the county, search results include Northern Ireland businesses with their own reviews and sterling pricing.",
        "Competing on price there is a losing position. A Donegal address, Donegal reviews and photographs of gardens that have survived a Donegal winter are things they cannot produce.",
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
      "Killybegs",
      "Dungloe",
      "Moville",
      "Ballyshannon",
      "Lifford",
      "Gweedore",
    ],
    faqs: [
      {
        q: "What decides a Donegal garden?",
        a: "Shelter. Wind and salt kill planting that would be unremarkable inland, so hedging and windbreaks are the first decision rather than an afterthought.",
      },
      {
        q: "When is the demand?",
        a: "Concentrated in spring and short. Spend ahead of the window rather than through it — advertising in months you cannot work is money wasted.",
      },
      {
        q: "Do Derry firms compete with us?",
        a: "In the north of the county, yes, and sterling moves that competition. Local reviews and photographs of gardens that have survived a Donegal winter are what they cannot copy.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "dublin",
    industryLabel: "dental practices",
    countyName: "Dublin",
    title: "Dental Marketing Dublin | Patient Leads for Dublin Dentists",
    description:
      "Marketing for Dublin dental practices: the most contested market in Ireland, high-value cosmetic work, and appointment times that decide who books.",
    h1: "Dental marketing in Dublin, where the list is the asset.",
    intro: [
      "Dublin has more dental practices competing for the same patients than anywhere else in Ireland, the highest treatment values, and patients who will genuinely travel across the city for implants or orthodontics but not for a check-up.",
      "That split runs through everything. Routine work is won on convenience and proximity. High-value work is won on evidence, and the two should never share a campaign.",
    ],
    sections: [
    {
      heading: "Routine and cosmetic are different businesses",
      body: [
        "A check-up patient chooses on location, opening hours and whether the phone gets answered. An implant or veneer patient researches for weeks, compares practices across the city and decides on the clinician.",
        "Running one campaign for both means the cosmetic message wastes money on people who want a scale and polish, and the routine message fails to convince anyone considering several thousand euro of work.",
        "Split them, and the cost per booked consultation on the high-value side usually improves immediately.",
      ],
    },
    {
      heading: "Appointment times decide more than price",
      body: [
        "Dublin patients work. An early morning, late evening or Saturday slot is worth more to them than a discount, and most practice websites bury the opening hours somewhere near the footer.",
        "If you have hours your competitors do not, that is the headline. It is the single most common under-used advantage in Dublin dentistry.",
      ],
    },
    {
      heading: "The recall list is the practice's real asset",
      body: [
        "A practice with a well-run recall system has predictable revenue and does not need to buy every patient. One without it is permanently advertising to replace people who drifted away.",
        "Before spending more on acquisition, it is almost always worth auditing what happens to a patient who misses a recall. In most practices the answer is nothing, and that is cheaper to fix than a campaign.",
      ],
    },
    {
      heading: "The dearest clicks in Irish healthcare",
      body: [
        "Dublin dental search terms are among the most expensive in the country, and cosmetic terms are dearer still.",
        "That makes negatives, tight location settings and call tracking essential rather than optional. A campaign that cannot tell you which searches produced booked appointments is guessing with expensive clicks.",
      ],
    },
    ],
    towns: [
      "Dublin city",
      "Rathmines",
      "Ranelagh",
      "Clontarf",
      "Blackrock",
      "Dún Laoghaire",
      "Swords",
      "Castleknock",
      "Tallaght",
      "Malahide",
      "Terenure",
      "Lucan",
    ],
    faqs: [
      {
        q: "Should routine and cosmetic work share a campaign?",
        a: "No. A check-up patient decides on convenience; an implant patient researches for weeks and decides on the clinician. One campaign serves neither well.",
      },
      {
        q: "What matters most to Dublin patients?",
        a: "Appointment times. Early, late or Saturday slots are worth more than a discount to people who work, and most practices bury their hours near the footer.",
      },
      {
        q: "Where should we look before increasing budget?",
        a: "The recall system. A practice that lets patients drift is permanently buying replacements, and fixing that is cheaper than any campaign.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "donegal",
    industryLabel: "dental practices",
    countyName: "Donegal",
    title: "Dental Marketing Donegal | Patient Leads for Donegal Dentists",
    description:
      "Marketing for Donegal dental practices: patients crossing the border for treatment, long distances, and the work worth keeping at home.",
    h1: "Dental marketing in Donegal, with the border in the room.",
    intro: [
      "Donegal practices compete with somewhere most Irish dentists never think about: across the border. Patients in the north of the county can reach Derry or Strabane more easily than they can reach much of their own county, and for larger treatments a good number travel further still.",
      "Pretending that is not happening does not help. Addressing it directly is one of the strongest positions a Donegal practice can take.",
    ],
    sections: [
    {
      heading: "Say what staying local actually gets them",
      body: [
        "Aftercare is the argument. A patient who has implants or extensive cosmetic work done far from home has no straightforward route back if something needs adjusting, and adjustments are normal rather than a sign of failure.",
        "Set that out plainly on the site: what happens at six months, at two years, who they ring, and what it costs. That is a real and checkable difference, and it is more persuasive than any claim about quality.",
      ],
    },
    {
      heading: "Do not compete on price with somewhere cheaper",
      body: [
        "You will not win that, and trying attracts precisely the patients most likely to leave for the next cheaper option.",
        "Compete on continuity, on knowing the patient's history, and on being reachable. Those are worth more to most people than they realise until something goes wrong.",
      ],
    },
    {
      heading: "Distance shapes the catchment more than the county line",
      body: [
        "Letterkenny, the Inishowen peninsula and the southwest of the county are effectively separate catchments, and people choose a practice they can reach on a wet Tuesday in January.",
        "Name the towns you actually serve. A county-wide campaign in Donegal spends most of its budget on people who will never drive to you.",
      ],
    },
    {
      heading: "The recall system matters more where patients are scattered",
      body: [
        "A patient who has to plan a journey is a patient who lets it slide. Gentle, reliable recall is the difference between a list that holds and one that quietly empties.",
        "It is also the cheapest marketing available, because these are people who already chose you once.",
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
      "Killybegs",
      "Moville",
      "Dungloe",
      "Ballyshannon",
      "Lifford",
      "Gweedore",
    ],
    faqs: [
      {
        q: "How do we compete with treatment across the border?",
        a: "On aftercare and continuity, not price. A patient treated far from home has no easy route back when something needs adjusting, and adjustments are normal.",
      },
      {
        q: "Should we advertise across the whole county?",
        a: "No. Letterkenny, Inishowen and the southwest are separate catchments. People choose a practice they can reach on a wet Tuesday in January.",
      },
      {
        q: "What is the cheapest thing we can fix?",
        a: "Recall. Patients who have to plan a journey let it slide, and a reliable recall system holds a list together better than any campaign.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "cork",
    industryLabel: "dental practices",
    countyName: "Cork",
    title: "Dental Marketing Cork | Patient Leads for Cork Dental Practices",
    description:
      "Marketing for Cork dental practices: a second-city market with its own loyalties, a dental school in town, and a county that empties westwards.",
    h1: "Dental marketing in Cork, a city that chooses its own.",
    intro: [
      "Cork is a genuinely separate healthcare market rather than a smaller Dublin. Patients here are loyal, they ask people they know, and a practice with a long local reputation is very hard to displace on advertising alone.",
      "That cuts both ways. It is difficult to break in, and once you are established the same loyalty protects you.",
    ],
    sections: [
    {
      heading: "Reputation travels differently here",
      body: [
        "Word of mouth carries more weight in Cork than in Dublin, and the corollary is that reviews matter more than usual because they are the online form of the same thing.",
        "A practice with a steady flow of recent, specific Cork reviews is doing the thing this market actually responds to. One with a handful from three years ago is invisible in the way that counts.",
      ],
    },
    {
      heading: "The city, the harbour towns and west Cork are three catchments",
      body: [
        "City practices compete on convenience and hours. The harbour towns are commuter families choosing on school-run practicality. West Cork is scattered, with long drives and far fewer options.",
        "West Cork patients will travel for treatment that is not available locally, which makes it a genuine catchment for higher-value work if the site gives them a reason to make the journey.",
      ],
    },
    {
      heading: "A teaching presence changes patient expectations",
      body: [
        "Cork has a dental teaching hospital, and a proportion of the population has been treated there or knows someone who has. They arrive better informed and more comfortable asking clinical questions.",
        "That suits a practice willing to explain things properly, and content that does so tends to outperform reassurance-led copy in this county.",
      ],
    },
    {
      heading: "Do not run one campaign for the whole county",
      body: [
        "The city is competitive and expensive; the west is uncontested and cheap to reach. Averaging them wastes money on one end and under-serves the other.",
        "Split by catchment and the cost per booked appointment usually separates sharply, which tells you where to put the next euro.",
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
      "Kinsale",
      "Clonakilty",
      "Skibbereen",
      "Youghal",
      "Fermoy",
    ],
    faqs: [
      {
        q: "Why do reviews matter more in Cork?",
        a: "Because word of mouth carries more weight here, and reviews are the online form of it. Recent, specific, local reviews are what this market responds to.",
      },
      {
        q: "Is west Cork worth targeting?",
        a: "For higher-value treatment, yes. Patients there have fewer local options and will travel if the site gives them a reason to.",
      },
      {
        q: "Should the county share one campaign?",
        a: "No. The city is competitive and expensive, the west is uncontested and cheap. Averaging them wastes money at one end and under-serves the other.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "galway",
    industryLabel: "dental practices",
    countyName: "Galway",
    title: "Dental Marketing Galway | Patient Leads for Galway Dentists",
    description:
      "Marketing for Galway dental practices: a large student population that arrives and leaves, plus a rural county with very few options.",
    h1: "Dental marketing in Galway, where half the city moves out in May.",
    intro: [
      "Galway city has a student and young-professional population large enough to change how a practice fills its book. Those patients arrive in September, need routine care, and a good number of them leave again.",
      "Outside the city the county is rural and thinly served, which means a practice in a market town is frequently the obvious choice for a wide area rather than one option among many.",
    ],
    sections: [
    {
      heading: "A transient population needs a different rhythm",
      body: [
        "Demand around the city spikes with the academic year and softens over summer. A flat twelve-month campaign spends the same in August as in September, which is the wrong shape.",
        "Concentrate spend before term and around the points where people register somewhere new. Emergency and routine care are what they need, and whoever is visible at the moment they need it usually gets them.",
      ],
    },
    {
      heading: "Rural practices compete on being reachable, not on price",
      body: [
        "Out through east Galway and Connemara, the realistic alternative to your practice is a much longer drive. That is a strong position and most practices in it undersell themselves.",
        "The website's job there is simply to be findable, to make booking easy, and to answer the practical questions: parking, wheelchair access, whether the practice takes medical card patients, what happens in an emergency at the weekend.",
      ],
    },
    {
      heading: "The PRSI benefit brings people in who have not been in years",
      body: [
        "A lot of working adults do not realise they are entitled to a routine examination and cleaning through their PRSI contributions. Explaining it plainly brings in people who have avoided the dentist partly because they assumed the cost.",
        "It is also an easy, honest campaign to run, and very few Irish practices build one around it properly.",
      ],
    },
    {
      heading: "City and county should not share a message",
      body: [
        "A student registering near the campus and a family in Loughrea are choosing on completely different criteria.",
        "Two campaigns, two pages, two sets of opening hours if that is what it takes. The city is cheap to reach and high volume; the county is higher value per patient and far less contested.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Knocknacarra",
      "Oranmore",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Gort",
      "Clifden",
      "Moycullen",
      "Headford",
    ],
    faqs: [
      {
        q: "How does the student population change things?",
        a: "It makes demand seasonal. Spend before term and when people register somewhere new, rather than flat across a year where August and September look nothing alike.",
      },
      {
        q: "What should a rural Galway practice emphasise?",
        a: "Being reachable and easy to book. The realistic alternative is a much longer drive, and most practices in that position undersell it.",
      },
      {
        q: "Is the PRSI benefit worth advertising?",
        a: "Yes, and almost nobody does it properly. A lot of working adults do not know they are entitled to a routine exam and cleaning, and it brings back people who assumed the cost.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "kildare",
    industryLabel: "dental practices",
    countyName: "Kildare",
    title: "Dental Marketing Kildare | Patient Leads for Kildare Dentists",
    description:
      "Marketing for Kildare dental practices: commuting families who need hours that work, and patients who could just as easily go to Dublin.",
    h1: "Dental marketing in Kildare, where the appointment has to fit.",
    intro: [
      "Kildare households commute. Many of them work in Dublin, leave before eight and get back after six, and their dental appointments have to fit into a gap that barely exists.",
      "They also have a real alternative: a practice near the office. A Kildare practice is competing not only with the town next door but with everywhere its patients spend the working day.",
    ],
    sections: [
    {
      heading: "Hours are the whole competitive question",
      body: [
        "Early mornings, late evenings, Saturdays, and appointments that can hold a family together in one visit. For this population that matters more than almost anything else on the website.",
        "If you offer it, it belongs at the top of every page. If you do not, that is worth knowing too, because it explains where the patients are going.",
      ],
    },
    {
      heading: "Families book as a unit",
      body: [
        "A parent arranging check-ups is arranging three or four, usually in one run, usually around school. A practice that can take a family together in consecutive slots is solving a logistics problem, not just a dental one.",
        "Say so explicitly. Almost no practice website addresses how a family actually books, and it is the thing the person on the other end is trying to work out.",
      ],
    },
    {
      heading: "You are competing with practices near their office",
      body: [
        "A patient who works in Dublin can get treated there at lunchtime. The local advantage is evenings, weekends, continuity and not having to explain their history again.",
        "That argues for building the relationship rather than chasing the single appointment, and for a recall system that keeps the family on the books once they are on it.",
      ],
    },
    {
      heading: "New estates arrive without a dentist",
      body: [
        "Kildare has a lot of recent housing, and people who have just moved need to find a practice. That is a small, targetable moment with unusually high intent.",
        "Targeting by estate and by recent-mover signals is cheap and specific, and it is almost entirely uncontested by other practices.",
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
      "Kildare town",
      "Athy",
      "Kilcock",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "What do Kildare patients care about most?",
        a: "Appointment times. Commuting households need early, late or Saturday slots, and that matters more than almost anything else on the site.",
      },
      {
        q: "How do families book?",
        a: "As a unit, usually around school. A practice that can take three or four in consecutive slots is solving a logistics problem, and almost no website explains whether it can.",
      },
      {
        q: "Who are we actually competing with?",
        a: "Practices near where your patients work, not just the town next door. The local advantage is evenings, weekends and continuity.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "dentists",
    county: "mayo",
    industryLabel: "dental practices",
    countyName: "Mayo",
    title: "Dental Marketing Mayo | Patient Leads for Mayo Dental Practices",
    description:
      "Marketing for Mayo dental practices: three towns that do not share patients, long drives, and returning families who need a practice again.",
    h1: "Dental marketing in Mayo, measured in driving time.",
    intro: [
      "Mayo is large, thinly populated and anchored by three towns that do not share patients. Castlebar, Ballina and Westport each serve their own area, and a practice in one has limited pull in the others.",
      "Patients here accept a drive that a Dublin patient never would, but they still choose the practice that is genuinely nearest unless there is a reason not to.",
    ],
    sections: [
    {
      heading: "Own your catchment rather than the county",
      body: [
        "Search results are decided largely by how close the patient is, and Mayo is far too big to overcome that. Trying to rank across the county wastes the effort that would win your own town outright.",
        "Being unmistakably the best-reviewed, easiest-to-book practice within your own area is achievable, and very few practices in this county are seriously contesting it.",
      ],
    },
    {
      heading: "A website has to load on poor coverage",
      body: [
        "Mobile signal across much of west Mayo is weak. A heavy site does not load slowly for those patients, it fails, and you never see them in your enquiry numbers.",
        "For a practice whose patients are frequently looking something up in a car park or a kitchen with one bar, page weight is a practical matter rather than a technical nicety.",
      ],
    },
    {
      heading: "Returning and emigrant families are a real market",
      body: [
        "Mayo has an unusually strong connection with people who left and come back, and with families who return for periods. They need a practice, often at short notice, and they have no current local knowledge.",
        "They search, they read, and they choose on what they find. Clear information about registering, what to bring and how quickly they can be seen wins those patients before anyone speaks to them.",
      ],
    },
    {
      heading: "Emergency access is worth saying out loud",
      body: [
        "In a county with long distances, knowing who will see you with a broken tooth on a Friday afternoon is genuinely valuable information.",
        "Practices that state their emergency policy plainly get those calls. Practices that leave it vague get them only from people who already know them.",
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
      "Knock",
      "Belmullet",
      "Foxford",
      "Charlestown",
      "Newport",
      "Kiltimagh",
    ],
    faqs: [
      {
        q: "Can a Mayo practice rank across the county?",
        a: "No. Proximity decides most of it and the county is too large. Owning your own town's catchment is the achievable and worthwhile goal.",
      },
      {
        q: "Does website speed really matter?",
        a: "In west Mayo it decides whether the site loads at all. Patients are frequently on one bar of signal, and a heavy site fails silently.",
      },
      {
        q: "Who are the returning families?",
        a: "People with Mayo connections coming back for periods or for good. They need a practice at short notice with no local knowledge, so clear registration information wins them early.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "dublin",
    industryLabel: "solicitors",
    countyName: "Dublin",
    title: "Solicitor Marketing Dublin | Enquiries for Dublin Law Firms",
    description:
      "Marketing for Dublin solicitors: the most contested legal market in Ireland, where a general practice competes with firms that do one thing.",
    h1: "Solicitor marketing in Dublin, where general practice struggles.",
    intro: [
      "Dublin has the deepest concentration of legal firms in the country, and the ones winning online are rarely the general practices. They are the firms that are visibly the specialist in one area, because that is how people search.",
      "Somebody does not look for a solicitor. They look for help with a separation, a house purchase, an estate, or a dispute with an employer, and the firm that appears to do that specific thing wins the enquiry.",
    ],
    sections: [
    {
      heading: "Specialisation beats breadth in search",
      body: [
        "A page listing eleven practice areas ranks for none of them properly and convinces nobody that you are the right choice for any single one.",
        "A firm that does all eleven can still present them as eleven separate, substantial pages, each written for the person with that specific problem. That is the difference between a brochure and something that actually gets found.",
        "This is the most common structural weakness in Dublin legal websites, and it is entirely fixable without changing what the firm does.",
      ],
    },
    {
      heading: "Commercial work is a relationship, not a search",
      body: [
        "Corporate and commercial instructions come from accountants, brokers, other firms and existing clients. They rarely come from an advertisement.",
        "What the website does there is confirm a decision somebody has already been nudged towards. It needs to look like the firm the referrer said it was — which means substance, named people and real credentials rather than a stock photograph of a handshake.",
      ],
    },
    {
      heading: "The restricted area is not the whole business",
      body: [
        "Irish law limits how firms may advertise services relating to personal injuries, and that rules out a category many firms would otherwise lead with.",
        "It does not touch conveyancing, probate, wills, family, employment or commercial work, and those are where the searchable demand actually sits. A Dublin firm that builds its marketing around them is not constrained in any meaningful way.",
      ],
    },
    {
      heading: "Clicks are expensive, so the follow-through has to work",
      body: [
        "Legal search terms in Dublin are among the dearest in any sector. Paying for them and then taking three days to respond is the most expensive habit in the profession.",
        "Before increasing spend, find out what currently happens to an enquiry that arrives at five on a Friday. In most firms the answer explains the conversion rate.",
      ],
    },
    ],
    towns: [
      "Dublin city",
      "Rathmines",
      "Ranelagh",
      "Blackrock",
      "Dún Laoghaire",
      "Clontarf",
      "Swords",
      "Castleknock",
      "Tallaght",
      "Lucan",
      "Malahide",
      "Terenure",
    ],
    faqs: [
      {
        q: "Why do general practices struggle online in Dublin?",
        a: "Because people search for a specific problem, not for a solicitor. A page listing eleven practice areas ranks for none of them properly.",
      },
      {
        q: "Can a full-service firm still compete?",
        a: "Yes, by presenting each area as its own substantial page written for the person with that problem. It changes the marketing, not the firm.",
      },
      {
        q: "Does the advertising restriction limit us much?",
        a: "Only in one category. Conveyancing, probate, wills, family, employment and commercial work are where the searchable demand is, and none of it is affected.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "kildare",
    industryLabel: "solicitors",
    countyName: "Kildare",
    title: "Solicitor Marketing Kildare | Enquiries for Kildare Law Firms",
    description:
      "Marketing for Kildare solicitors: conveyancing volume from new estates, first-time buyers who have never done this, and referral relationships.",
    h1: "Solicitor marketing in Kildare, built on the conveyancing pipeline.",
    intro: [
      "Kildare has had sustained house building and a steady flow of first-time buyers, which makes conveyancing the engine of a great many practices in the county.",
      "Those clients are unusual in one important way: most of them have never bought a house before. They do not know what a solicitor does in the process, how long it takes, or what will be asked of them, and the firm that explains it clearly wins a disproportionate share of them.",
    ],
    sections: [
    {
      heading: "Write for somebody who has never done this",
      body: [
        "Contracts, searches, requisitions, closing — a first-time buyer knows none of these words and is frequently too embarrassed to ask.",
        "A plain-English page setting out the stages, roughly how long each takes and what the client has to supply is genuinely useful and almost nonexistent on Irish legal websites. It also ranks, because it matches what people actually type.",
        "It doubles as a filter: clients who arrive having read it ask better questions and take less handling.",
      ],
    },
    {
      heading: "Referrals decide more than search does",
      body: [
        "Estate agents, mortgage brokers and builders all get asked to recommend a solicitor, and they recommend whoever makes their own job easier.",
        "That means being reachable, turning things around, and not being the reason a chain stalls. Those relationships are worth more than any campaign in this county, and they are maintained rather than bought.",
        "A firm that wants more of them should say so directly to the people in a position to give them, which almost nobody does.",
      ],
    },
    {
      heading: "New-build purchases are a different process",
      body: [
        "Buying off plans from a developer runs differently from a second-hand purchase, with its own timelines, its own contract issues and its own supports for first-time buyers.",
        "Kildare has a great deal of it, and a firm that addresses it specifically will out-rank one with a single generic conveyancing page every time.",
      ],
    },
    {
      heading: "Commuters cannot come in during the day",
      body: [
        "A large share of the county works in Dublin and leaves before eight. An enquiry sent at ten at night that gets a reply first thing feels like competence; one that waits four days feels like the opposite.",
        "Response time is the most under-rated marketing asset in this profession, and in a commuter county it decides more instructions than anything on the website.",
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
      "Kildare town",
      "Athy",
      "Kilcock",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "What wins conveyancing work in Kildare?",
        a: "Explaining the process to people who have never bought a house, and being the firm estate agents and brokers find easy to deal with. Referrals decide more than search does.",
      },
      {
        q: "Is new-build conveyancing different?",
        a: "Yes, and Kildare has a lot of it. Different timelines, different contract issues and its own first-time-buyer supports, so it deserves its own page.",
      },
      {
        q: "How much does response time matter?",
        a: "More than anything on the website. A commuter who emails at ten at night and hears back first thing has already decided you are competent.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "cork",
    industryLabel: "solicitors",
    countyName: "Cork",
    title: "Solicitor Marketing Cork | Enquiries for Cork Law Firms",
    description:
      "Marketing for Cork solicitors: an established legal community where instructions move by referral, and a commercial base worth competing for.",
    h1: "Solicitor marketing in Cork, where reputation is already allocated.",
    intro: [
      "Cork has a long-established legal community with firms that have held the same client relationships for decades. Instructions move by referral and by reputation, and a newer or smaller firm can find the door effectively closed.",
      "Search is the way around that. Somebody with a problem and no family solicitor does exactly what everybody else does, and that is the opening.",
    ],
    sections: [
    {
      heading: "Search reaches the clients referral cannot",
      body: [
        "People who have moved to Cork, people whose family solicitor has retired, people dealing with something they would rather not discuss with anyone they know — none of them are getting a recommendation.",
        "That is a substantial and growing share of the market, and it is decided almost entirely by what somebody finds and reads. It is the part of the Cork market that is genuinely winnable.",
      ],
    },
    {
      heading: "The commercial base is real and under-served",
      body: [
        "Cork has a significant manufacturing, pharmaceutical and technology presence, and a supporting economy of suppliers and contractors who need employment advice, commercial contracts and dispute work.",
        "Most of that is handled by a handful of firms, and most of those firms market themselves barely at all. A firm with genuine commercial capability and a website that demonstrates it is competing in an unusually quiet field.",
      ],
    },
    {
      heading: "The county is not one catchment",
      body: [
        "Cork city and the suburbs behave one way. The harbour towns are commuter and conveyancing-heavy. West Cork is rural, scattered, and full of property with complicated title.",
        "West Cork also has a large second-home and returning-owner population who arrange matters remotely and choose on what they can find. That is a distinct opportunity and it is not served by a city-focused message.",
      ],
    },
    {
      heading: "Being findable is most of it",
      body: [
        "In a market where the established firms rely on relationships, simply being the firm that appears and answers is a stronger position than it sounds.",
        "Reviews matter here for the same reason they matter for every Cork business: word of mouth is the local currency and reviews are its online form.",
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
      "Kinsale",
      "Clonakilty",
      "Skibbereen",
      "Youghal",
      "Fermoy",
    ],
    faqs: [
      {
        q: "How does a newer Cork firm break in?",
        a: "Through search. People who have moved here, whose family solicitor retired, or who would rather not ask anyone they know are not getting a referral, and that is a growing share of the market.",
      },
      {
        q: "Is commercial work worth pursuing?",
        a: "Cork has a substantial commercial base and very few firms market to it seriously. A firm with real capability and a site that shows it is competing in a quiet field.",
      },
      {
        q: "Should west Cork have its own message?",
        a: "Yes. Complicated title, second homes and owners arranging matters remotely make it a distinct market that a city-focused page does not serve.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "galway",
    industryLabel: "solicitors",
    countyName: "Galway",
    title: "Solicitor Marketing Galway | Enquiries for Galway Law Firms",
    description:
      "Marketing for Galway solicitors: agricultural land and succession across the county, and a university city with entirely different needs.",
    h1: "Solicitor marketing in Galway, land in the county and life in the city.",
    intro: [
      "Galway is two legal markets. The county is agricultural, with land transfers, succession, rights of way and title questions that go back generations. The city is young, transient and commercial, with employment matters, tenancy disputes and start-up work.",
      "A single firm may serve both perfectly well. A single message will not, because the two clients have nothing in common.",
    ],
    sections: [
    {
      heading: "Land and succession is specialist work that people search for",
      body: [
        "Transferring a farm between generations, sorting out title that was never properly registered, rights of way, and the tax and Fair Deal considerations that sit alongside them.",
        "These are complicated, high-value matters and families put them off for years, largely because they do not know where to start. Content that explains the process plainly reaches people at exactly the moment they finally decide to deal with it.",
        "Very few Irish firms write about it properly, and it is not a category anyone else is competing for on search.",
      ],
    },
    {
      heading: "The city market is younger and more transactional",
      body: [
        "Employment issues, tenancy problems, and advice for people starting something. Lower value per matter, higher volume, and decided fast on whoever looks approachable and answers.",
        "That needs a different tone from the succession work — shorter, plainer, less formal — and its own pages.",
      ],
    },
    {
      heading: "Plain language is a genuine differentiator",
      body: [
        "Legal websites in Ireland are written for other solicitors. The client reading them is anxious and frequently out of their depth.",
        "A firm that writes the way it would speak to somebody across a desk will out-convert a more prestigious firm that writes in the third person about its commitment to excellence.",
      ],
    },
    {
      heading: "Distance shapes the county market",
      body: [
        "Connemara and east Galway are long drives, and clients there will choose somebody reachable unless the matter is specialist enough to justify the journey.",
        "That is the argument for specialising visibly: the further you want clients to travel, the more specific the reason has to be.",
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
      "Moycullen",
      "Headford",
      "Portumna",
    ],
    faqs: [
      {
        q: "What is the specialist opportunity in Galway?",
        a: "Land and succession. Farm transfers, unregistered title and rights of way are high-value matters families put off for years, and almost nobody writes about them clearly.",
      },
      {
        q: "Does the city need a separate approach?",
        a: "Yes. Employment, tenancy and start-up work is younger, faster and lower value per matter. It needs a different tone and its own pages.",
      },
      {
        q: "What converts best on a legal website?",
        a: "Plain language. Most Irish legal sites are written for other solicitors, and the anxious client reading them is not one.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "mayo",
    industryLabel: "solicitors",
    countyName: "Mayo",
    title: "Solicitor Marketing Mayo | Enquiries for Mayo Law Firms",
    description:
      "Marketing for Mayo solicitors: farm succession, title that was never tidied up, and probate arranged by families living abroad.",
    h1: "Solicitor marketing in Mayo, for families who are not here.",
    intro: [
      "A great deal of Mayo legal work involves somebody who does not live in Mayo. Estates after a bereavement, land being divided between siblings who emigrated, houses inherited by people in Dublin or Britain or further away.",
      "Those clients cannot call into the office and have no current local knowledge. They search, they read, and they instruct a firm they have never met.",
    ],
    sections: [
    {
      heading: "The remote client decides on your website",
      body: [
        "No family solicitor, no recommendation, no ability to meet three firms. What they can assess is whether the site explains the process, whether it looks like a firm that will keep them informed, and whether anybody replies.",
        "Setting out plainly how an estate is administered, roughly how long it takes and what the firm will need from them does more to win that instruction than anything else available. Most Irish legal websites say almost nothing about it.",
      ],
    },
    {
      heading: "Probate work needs a different register",
      body: [
        "This client has been bereaved, is frequently one of several siblings who do not entirely agree, and is dealing with a legal process at the worst possible time.",
        "Marketing that treats it as a transaction reads badly. Content that is calm, patient and practical is both the right tone and by some distance the most effective, and it is what somebody searches for at eleven at night after being appointed executor.",
      ],
    },
    {
      heading: "Land and title is the other half",
      body: [
        "Farm succession, transfers between generations, folios that were never brought up to date, rights of way nobody wrote down. Slow, valuable work that families defer for years.",
        "A firm that explains where to start on it will hear from people who have been meaning to sort it out for a decade.",
      ],
    },
    {
      heading: "Three towns, three catchments",
      body: [
        "Castlebar, Ballina and Westport each serve their own area, and proximity decides most local searching. Ranking across the county is not realistic; owning your own town is.",
        "The remote-client work is the exception, because for an executor in Boston proximity means nothing and the website means everything.",
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
      "Knock",
      "Belmullet",
      "Foxford",
      "Charlestown",
      "Newport",
      "Kiltimagh",
    ],
    faqs: [
      {
        q: "Why does the website matter so much in Mayo?",
        a: "Because a large share of clients live elsewhere — estates, inherited property, land being divided between siblings who emigrated. They instruct a firm they have never met.",
      },
      {
        q: "How should probate be marketed?",
        a: "Calmly and practically. The client is bereaved, often one of several siblings, dealing with a legal process at the worst time. Transactional marketing reads badly.",
      },
      {
        q: "Can we rank across the county?",
        a: "Not for local searches — proximity decides those and Mayo is too big. The exception is remote clients, where the website is the whole decision.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "solicitors",
    county: "donegal",
    industryLabel: "solicitors",
    countyName: "Donegal",
    title: "Solicitor Marketing Donegal | Enquiries for Donegal Law Firms",
    description:
      "Marketing for Donegal solicitors: matters that cross the border, land and title questions, and a county that takes a day to drive across.",
    h1: "Solicitor marketing in Donegal, where the border is a practice area.",
    intro: [
      "Donegal sits against a border, and a great deal of ordinary life there crosses it. People live in the county and work in the north, own property on both sides, marry across it and inherit across it.",
      "That produces legal questions with two jurisdictions in them, and a firm that is visibly comfortable with that has something genuinely distinctive to say.",
    ],
    sections: [
    {
      heading: "Cross-border matters are a real and searchable specialism",
      body: [
        "Property with a title history on the other side, employment under a different regime, family matters where the parties live in two jurisdictions, estates with assets in both.",
        "People with these problems search for exactly them, and they find almost nothing written clearly by an Irish firm. It is an unusually open field for content that explains what is actually involved.",
        "It is also work that does not come by referral, because most people's local network does not know who handles it.",
      ],
    },
    {
      heading: "Distance decides the local catchment",
      body: [
        "Letterkenny, Inishowen and the southwest of the county are separate practical catchments. Somebody with a routine matter will choose a firm they can reach.",
        "For specialist work they will travel, which is the argument for being visibly the specialist in something rather than the generalist nearest to them.",
      ],
    },
    {
      heading: "Emigration shapes the probate work",
      body: [
        "Donegal has sent people abroad for generations, and estates are frequently administered for or by relatives in Britain, North America or Australia.",
        "Those clients need process explained, updates that arrive without being chased, and a firm comfortable working entirely at a distance. Saying so on the website wins instructions that would otherwise go to whoever a cousin happened to recommend.",
      ],
    },
    {
      heading: "Land and title work sits underneath everything",
      body: [
        "Unregistered folios, rights of way, transfers that were never completed properly, family arrangements agreed at a kitchen table forty years ago.",
        "It is slow, valuable, deferred work, and the firm that explains where to begin is the one people finally ring.",
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
      "Killybegs",
      "Moville",
      "Dungloe",
      "Ballyshannon",
      "Lifford",
      "Gweedore",
    ],
    faqs: [
      {
        q: "Is cross-border work worth marketing?",
        a: "It is the distinctive opportunity here. People search for exactly those problems and find almost nothing written clearly by an Irish firm, and it does not arrive by referral.",
      },
      {
        q: "Should we advertise across the whole county?",
        a: "For routine matters, no — people choose a firm they can reach, and Letterkenny, Inishowen and the southwest are separate catchments. For specialist work they will travel.",
      },
      {
        q: "What about clients abroad?",
        a: "Emigration means many estates are administered from Britain or North America. Those clients need the process explained and updates that arrive without chasing.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "garage-conversions",
    county: "dublin",
    industryLabel: "garage conversion specialists",
    countyName: "Dublin",
    title: "Garage Conversion Leads Dublin | Marketing That Gets Surveys",
    description:
      "Lead generation for Dublin garage conversion specialists: families who cannot extend and cannot afford to move, in the country's densest housing stock.",
    h1: "Garage conversion leads in Dublin, where moving is not an option.",
    intro: [
      "Dublin is the core market for this work in Ireland and the reason is arithmetic. Families outgrow houses they cannot afford to trade up from, gardens are too small to extend into, and there is an attached garage sitting there holding bicycles.",
      "That makes the pitch unusually easy, because the customer has usually already done the sums on moving and found them impossible. What they need is to be shown the alternative is real.",
    ],
    sections: [
    {
      heading: "Sell against moving, not against an extension",
      body: [
        "The competitor here is not another builder. It is the idea of trading up, and the idea of doing nothing for another year.",
        "Content that sets the conversion against the full cost of moving — stamp duty, fees, the difference in house price, the disruption — does more work than anything about the build itself. Most people have never seen it laid out side by side.",
        "It also brings people in much earlier, at the point where they are still browsing property listings rather than looking for a builder.",
      ],
    },
    {
      heading: "The 1960s to 1990s semi is the whole market",
      body: [
        "Vast areas of Dublin are estates of the same handful of house types with the same attached garage in the same position. Once you have converted one, you have effectively solved every other house on that road.",
        "That is a genuine efficiency and a marketing advantage: photographs of a house somebody recognises as theirs are far more persuasive than a generic finished room.",
      ],
    },
    {
      heading: "Parking is the objection nobody addresses",
      body: [
        "Losing the garage means losing off-street parking in a city where that matters, and in some areas it matters a great deal.",
        "Addressing it directly — what happens to the driveway, whether the door opening is bricked up or glazed, what most people actually do — removes the hesitation that stalls these projects. Almost no competitor mentions it.",
      ],
    },
    {
      heading: "Planning is the first search and the first fear",
      body: [
        "People assume it will be complicated and expensive, and that assumption stops a lot of projects before they start.",
        "Explaining what genuinely determines the answer, honestly and without turning it into a lead-capture trick, is the strongest content position available in this niche.",
      ],
    },
    ],
    towns: [
      "Rathfarnham",
      "Templeogue",
      "Clontarf",
      "Raheny",
      "Swords",
      "Malahide",
      "Castleknock",
      "Lucan",
      "Tallaght",
      "Dundrum",
      "Santry",
      "Blanchardstown",
    ],
    faqs: [
      {
        q: "Who is the real competitor?",
        a: "Moving house, and doing nothing for another year. Setting the conversion against the full cost of trading up does more than anything about the build itself.",
      },
      {
        q: "Why is Dublin the core market?",
        a: "Families who cannot afford to trade up, gardens too small to extend into, and an attached garage already there. The arithmetic makes the pitch.",
      },
      {
        q: "What objection gets missed?",
        a: "Parking. Losing off-street parking matters in Dublin, and almost no competitor addresses what happens to the driveway or the door opening.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "garage-conversions",
    county: "kildare",
    industryLabel: "garage conversion specialists",
    countyName: "Kildare",
    title: "Garage Conversion Leads Kildare | Marketing for Conversions",
    description:
      "Lead generation for Kildare garage conversion specialists: commuter estates where the garage never held a car and the home office is the job.",
    h1: "Garage conversion leads in Kildare, where the office is the job.",
    intro: [
      "Kildare is full of estate houses built with an attached garage that has never once had a car in it. It holds a freezer, a lawnmower and the things that came out of the last house.",
      "It is also full of households where at least one person now works from home some of the week and is doing it at the kitchen table. Those two facts meet in the middle and that is the entire market.",
    ],
    sections: [
    {
      heading: "Sell the home office, not the conversion",
      body: [
        "Somebody searching for a garage conversion is already halfway convinced. Somebody searching for a home office has the problem but has not yet found the solution, and there are far more of them.",
        "A page built around working from home — sound, heating, the broadband, a door that closes, not being in the kitchen — reaches people earlier and faces almost no competition.",
      ],
    },
    {
      heading: "The estate is the unit, not the county",
      body: [
        "Kildare's housing is concentrated in large estates of repeating house types. Convert one and the next quote on that road takes minutes.",
        "Advertising platforms will target an area that small, and a message naming the estate and the house type converts at a rate county-level targeting never will.",
      ],
    },
    {
      heading: "Growing families are the other half",
      body: [
        "A third child, a teenager who needs their own room, or a parent moving in. The house does not work any more and trading up in the commuter belt is expensive.",
        "Downstairs bedrooms and playrooms are a different message from the home office and deserve their own page. The buyer is the same household at a different moment.",
      ],
    },
    {
      heading: "Commuters research at night and decide slowly",
      body: [
        "Nobody is ringing during the working day. The enquiry arrives at ten in the evening after a conversation at the kitchen table, and it has usually been building for months.",
        "That rewards content, photographs and a follow-up that runs over weeks rather than a campaign built for urgency.",
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
      "Kildare town",
      "Kilcock",
      "Athy",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "What should we actually advertise?",
        a: "The home office. Somebody searching for a garage conversion is already half convinced; somebody searching for a home office has the problem and has not found the solution yet.",
      },
      {
        q: "How small should the targeting be?",
        a: "Estate level. Kildare's housing repeats in large estates, so convert one house and the next quote on that road takes minutes.",
      },
      {
        q: "When do enquiries arrive?",
        a: "At night, after a kitchen-table conversation that has been building for months. It rewards content and patient follow-up, not urgency.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "garage-conversions",
    county: "cork",
    industryLabel: "garage conversion specialists",
    countyName: "Cork",
    title: "Garage Conversion Leads Cork | Marketing for Cork Conversions",
    description:
      "Lead generation for Cork garage conversion specialists: suburban stock with the space to convert, and economics that differ from Dublin's.",
    h1: "Garage conversion leads in Cork, where the sums work differently.",
    intro: [
      "Cork has the second-largest suburban housing stock in the country and plenty of attached garages sitting unused. What it does not have is Dublin's property prices, and that changes the decision.",
      "Where a Dublin family converts because moving is impossible, a Cork family is genuinely weighing the conversion against extending, against moving, and against leaving it another year. The pitch has to acknowledge that rather than assume it.",
    ],
    sections: [
    {
      heading: "You are competing with an extension here",
      body: [
        "Cork's suburban gardens are more often big enough to build into, which means the conversion is one option rather than the only one.",
        "Be honest about when each makes sense. A page that says plainly which situations suit a conversion and which suit an extension builds far more trust than one that claims conversion is always better, and it brings you the projects that genuinely fit.",
        "It also wins you the extension enquiries if you do both, which most firms in this space quietly do.",
      ],
    },
    {
      heading: "The city and the commuter towns differ",
      body: [
        "Cork city suburbs have older, denser stock with smaller plots. Carrigaline, Midleton, Ballincollig and the harbour towns are newer estates with garages that were never used as garages.",
        "Same trade, different reason for converting, and they respond to different messages. The newer estates are the home-office and growing-family market; the older suburbs are the space-constrained one.",
      ],
    },
    {
      heading: "Show Cork houses",
      body: [
        "A homeowner needs to recognise their own house before they can picture the room. A portfolio of Dublin semis does not do that for somebody in Douglas.",
        "Photographs of local conversions, with the before shot, are worth more than any amount of copy in a market this visual.",
      ],
    },
    {
      heading: "West Cork is a different question entirely",
      body: [
        "Out the county, properties have outbuildings, sheds and room to build. Garage conversion is not the obvious answer there and marketing it as though it were wastes the budget.",
        "Concentrate on the city and the commuter belt, where the housing type actually supports the work.",
      ],
    },
    ],
    towns: [
      "Cork city",
      "Douglas",
      "Ballincollig",
      "Carrigaline",
      "Midleton",
      "Glanmire",
      "Blarney",
      "Bishopstown",
      "Cobh",
      "Mallow",
      "Passage West",
      "Togher",
    ],
    faqs: [
      {
        q: "How is Cork different from Dublin?",
        a: "Property is cheaper and gardens are often bigger, so a conversion competes with extending and with moving rather than being the only option.",
      },
      {
        q: "Should we market in west Cork?",
        a: "Not for this work. Properties there have outbuildings and room to build, so the housing type does not support it and the budget is better spent on the city and commuter belt.",
      },
      {
        q: "What sells best?",
        a: "Photographs of Cork houses, with the before shot. People need to recognise their own house before they can picture the room.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "garage-conversions",
    county: "galway",
    industryLabel: "garage conversion specialists",
    countyName: "Galway",
    title: "Garage Conversion Leads Galway | Marketing for Conversions",
    description:
      "Lead generation for Galway garage conversion specialists: a rental-squeezed city where conversions create lettable rooms, not just family space.",
    h1: "Garage conversion leads in Galway, where a room can pay for itself.",
    intro: [
      "Galway city has sustained pressure on rental accommodation and a large student and young-professional population competing for it. That gives garage conversion a second motive that barely exists elsewhere: the room can generate income.",
      "A conversion that creates a lettable bedroom or a self-contained space is a different proposition from one that creates a playroom, and it is bought for different reasons by different people.",
    ],
    sections: [
    {
      heading: "The income argument changes the customer",
      body: [
        "A homeowner converting for family space is spending money. One converting to let a room is making an investment, and that is a completely different conversation with a completely different objection set.",
        "Content that addresses it honestly — what is involved, what the practical considerations are around a separate entrance and facilities, what it means for the rest of the house — reaches an audience nobody else in this trade is speaking to.",
      ],
    },
    {
      heading: "Be careful and accurate about what is involved",
      body: [
        "Creating habitable, lettable accommodation brings requirements that a playroom does not, and the specifics depend on the property and what is being created.",
        "The right position is to be knowledgeable and straightforward about that rather than to gloss over it. Customers who find out later feel misled, and in a city this size that travels.",
      ],
    },
    {
      heading: "The city and the county are separate markets",
      body: [
        "Galway city and the immediate suburbs have the housing stock and the motive. East Galway and Connemara have space, outbuildings and no rental pressure.",
        "Concentrate where the work actually exists rather than spreading a small budget across a large county.",
      ],
    },
    {
      heading: "Family conversions are still the larger half",
      body: [
        "The income angle is the distinctive opportunity, not the whole market. Most Galway conversions are still a family needing another room.",
        "Two messages, two pages, and let the campaign data show which the county actually rewards.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Knocknacarra",
      "Renmore",
      "Oranmore",
      "Barna",
      "Moycullen",
      "Bearna",
      "Claregalway",
      "Athenry",
      "Tuam",
      "Loughrea",
    ],
    faqs: [
      {
        q: "What is different about Galway?",
        a: "Rental pressure gives a conversion a second motive: the room can generate income. That is a different customer from a family needing a playroom.",
      },
      {
        q: "Should we market the letting angle?",
        a: "Yes, but accurately. Creating habitable lettable space brings requirements a playroom does not, and glossing over that travels badly in a city this size.",
      },
      {
        q: "Is the whole county worth targeting?",
        a: "No. The city and immediate suburbs have the housing stock and the motive. Out the county there is space and outbuildings instead.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "garage-conversions",
    county: "limerick",
    industryLabel: "garage conversion specialists",
    countyName: "Limerick",
    title: "Garage Conversion Leads Limerick | Marketing for Conversions",
    description:
      "Lead generation for Limerick garage conversion specialists: an under-contested market where the conversion has to earn its place against moving.",
    h1: "Garage conversion leads in Limerick, where you argue the value.",
    intro: [
      "Limerick has plenty of suburban housing with attached garages and very few firms marketing this work seriously. The field is unusually quiet.",
      "It is also a market where property is more affordable than the east coast, which means the customer genuinely could move instead. The conversion has to be argued on its merits rather than presented as the only option.",
    ],
    sections: [
    {
      heading: "The value argument has to be made explicitly",
      body: [
        "Where trading up is realistic, a conversion competes with it directly. Saying nothing about that leaves the customer to make the comparison alone, usually badly and usually against you.",
        "Set it out: what the conversion delivers, what it costs to move by the time everything is counted, and what each does to the house. Customers respect the firm that raises it before they do.",
      ],
    },
    {
      heading: "Very little competition online",
      body: [
        "Limerick is among the quietest markets in Ireland for this trade. Competitor websites are thin, few are running search campaigns, and the standard to beat is low.",
        "That makes it cheap to become the obvious choice, and it is worth doing properly now rather than when somebody else notices.",
      ],
    },
    {
      heading: "Lead with the use, not the trade",
      body: [
        "Home office, downstairs bedroom, gym, playroom, utility. Those are what people search for, and in a market this quiet you can own several of them rather than fighting for the generic term.",
        "Each deserves its own page, because the person searching for a gym and the person searching for a downstairs bedroom are solving different problems.",
      ],
    },
    {
      heading: "Cheap clicks hide waste",
      body: [
        "Limerick is inexpensive to advertise in, which sounds purely good and is not. At low prices a badly targeted campaign can run for a year without anyone noticing it produces nothing.",
        "Negatives, tight locations and call tracking matter as much here as anywhere; they just feel less urgent, which is why they get skipped.",
      ],
    },
    ],
    towns: [
      "Limerick city",
      "Castletroy",
      "Dooradoyle",
      "Raheen",
      "Annacotty",
      "Corbally",
      "Mungret",
      "Adare",
      "Newcastle West",
      "Castleconnell",
      "Patrickswell",
      "Caherdavin",
    ],
    faqs: [
      {
        q: "Why does the value argument matter more here?",
        a: "Because property is more affordable, so moving is a realistic alternative. Raise the comparison before the customer does and you keep control of it.",
      },
      {
        q: "How contested is Limerick?",
        a: "Among the quietest markets in Ireland for this trade. Competitor sites are thin and few run search campaigns, so the standard to beat is low.",
      },
      {
        q: "What should we target?",
        a: "The use rather than the trade — home office, downstairs bedroom, gym, playroom. In a market this quiet you can own several of them.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "wedding-venues",
    county: "kerry",
    industryLabel: "wedding venues",
    countyName: "Kerry",
    title: "Wedding Venue Marketing Kerry | Enquiries and Showrounds",
    description:
      "Marketing for Kerry wedding venues: a destination county where guests travel, accommodation is part of the product and couples book from abroad.",
    h1: "Wedding venue marketing in Kerry, where the county is the pitch.",
    intro: [
      "Kerry sells a destination before it sells a room. Couples choosing here are asking their guests to travel, stay two nights and treat the wedding as a short break, and that changes everything about how the venue has to be presented.",
      "It also means a large share of enquiries come from people who cannot easily visit, including couples living in Dublin, Britain or America with a family connection to the county.",
    ],
    sections: [
    {
      heading: "Sell the weekend, not the day",
      body: [
        "A Kerry wedding is rarely one afternoon. It is arrivals on Friday, the day itself, and a recovery on Sunday, and the couple is weighing whether their guests will actually come.",
        "That means accommodation, what there is to do nearby, how people get here and what happens on the other two days belong on the page, not buried in a brochure. Venues that answer the guest-logistics question remove the main reason couples rule a county out.",
      ],
    },
    {
      heading: "A lot of your couples cannot come and look",
      body: [
        "Somebody planning from London or Boston is choosing on photographs, video and how you communicate. They will not do three showrounds.",
        "Video walkthroughs, a proper floorplan, honest weather-contingency answers and quick, warm replies do the job the visit would have done. Very few Irish venues are set up for a couple they never meet before the booking.",
      ],
    },
    {
      heading: "The diaspora wedding is a real segment",
      body: [
        "Couples with Kerry roots living abroad, and families returning for a wedding in the home county, are a genuine and well-funded part of this market.",
        "They search differently, plan further ahead and care more about the story of the place than about the dance floor. Content that leans into the county itself reaches them in a way a feature list does not.",
      ],
    },
    {
      heading: "Distance is the objection to answer first",
      body: [
        "Everyone considering Kerry worries their guests will not travel. Pretending otherwise does not help.",
        "Address it directly: journey times, where people fly into, what accommodation sits within walking distance, whether you can hold rooms. A venue that has clearly thought about it looks like one that has done this many times.",
      ],
    },
    ],
    towns: [
      "Killarney",
      "Tralee",
      "Kenmare",
      "Dingle",
      "Listowel",
      "Killorglin",
      "Sneem",
      "Waterville",
      "Caherdaniel",
      "Castleisland",
      "Ballybunion",
      "Cahersiveen",
    ],
    faqs: [
      {
        q: "What should a Kerry venue lead with?",
        a: "The weekend rather than the day. Couples are weighing whether guests will travel, so accommodation, journey times and what happens on Friday and Sunday belong on the page.",
      },
      {
        q: "How do we win couples who cannot visit?",
        a: "Video, floorplans, honest answers and fast warm replies. A good share of Kerry enquiries come from Dublin or abroad and will not do three showrounds.",
      },
      {
        q: "Is the diaspora market worth targeting?",
        a: "Yes, and it is under-served. Couples with Kerry roots living abroad plan further ahead and care about the place itself rather than the feature list.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "wedding-venues",
    county: "meath",
    industryLabel: "wedding venues",
    countyName: "Meath",
    title: "Wedding Venue Marketing Meath | Enquiries and Showrounds",
    description:
      "Marketing for Meath wedding venues: countryside within an hour of Dublin, where accessibility is the product and midweek is the opportunity.",
    h1: "Wedding venue marketing in Meath, an hour from most of your guests.",
    intro: [
      "Meath's advantage is simple and most venues under-use it: couples get the country wedding they want without asking anyone to travel far. For a Dublin couple with Dublin guests, that solves the single biggest problem in choosing a rural venue.",
      "It is also a crowded corner of the market. Meath, Kildare and north Wicklow are all selling broadly the same promise to broadly the same couples, which makes the specifics matter.",
    ],
    sections: [
    {
      heading: "Accessibility is the headline, not a footnote",
      body: [
        "Say the journey time from the city, say where the nearest motorway junction is, say how late the last bus or taxi realistically runs.",
        "Couples are modelling this in their heads for sixty guests. The venue that does the arithmetic for them looks organised, and organised is what people are buying in a wedding venue.",
      ],
    },
    {
      heading: "Midweek and off-season is where the margin is",
      body: [
        "Saturdays in summer sell themselves. The business problem is the rest of the calendar, and it is almost never marketed deliberately.",
        "Couples who are flexible exist, and they are frequently second weddings, smaller weddings or couples who care more about the place than the date. They need to be told the option exists and given a reason.",
      ],
    },
    {
      heading: "You are competing with Kildare and Wicklow, not with Kerry",
      body: [
        "Your competitive set is a handful of venues offering the same thing within the same drive. Generic country-house language makes you interchangeable with all of them.",
        "What differentiates is specific: the room that holds exactly your number, what the grounds actually look like in March, whether you do one wedding a day, how late the music can go.",
      ],
    },
    {
      heading: "Heritage and grounds are the visual argument",
      body: [
        "Meath has a concentration of period houses and estates, and couples are choosing this county largely for how the photographs will look.",
        "That makes real wedding photography, in your actual grounds, in Irish weather, worth more than any amount of description.",
      ],
    },
    ],
    towns: [
      "Navan",
      "Ashbourne",
      "Trim",
      "Kells",
      "Dunboyne",
      "Ratoath",
      "Slane",
      "Dunshaughlin",
      "Laytown",
      "Bettystown",
      "Enfield",
      "Athboy",
    ],
    faqs: [
      {
        q: "What is Meath's advantage?",
        a: "A country wedding that nobody has to travel far for. Spell out journey times and how guests get home late — couples are doing that arithmetic for sixty people.",
      },
      {
        q: "Where is the real opportunity?",
        a: "Midweek and off-season. Summer Saturdays sell themselves; the rest of the calendar is almost never marketed deliberately.",
      },
      {
        q: "Who are we actually competing with?",
        a: "Kildare and north Wicklow venues selling the same promise to the same couples. Generic country-house language makes you interchangeable with them.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "wedding-venues",
    county: "galway",
    industryLabel: "wedding venues",
    countyName: "Galway",
    title: "Wedding Venue Marketing Galway | Enquiries and Showrounds",
    description:
      "Marketing for Galway wedding venues: a county couples choose for scenery and a city they want the afterparty in.",
    h1: "Wedding venue marketing in Galway, scenery plus somewhere to go after.",
    intro: [
      "Galway is unusual among the scenic counties because it has a city couples genuinely want their guests in. That combination — a wedding somewhere beautiful and a second night out somewhere lively — is the county's real selling point and it is rarely articulated.",
      "The county splits between Connemara and the coast, which sell the view, and the city and its edges, which sell convenience and atmosphere.",
    ],
    sections: [
    {
      heading: "Name what happens the night after",
      body: [
        "Couples planning a destination wedding worry about the second day. In Galway the answer is obvious to a local and invisible to a couple from Dublin or abroad.",
        "Say it: where people go, how far it is, whether you can arrange transport. It converts an objection into a reason to choose you.",
      ],
    },
    {
      heading: "Connemara sells the view and the view sells itself badly",
      body: [
        "Every coastal venue uses the same sunset photograph. What differentiates is the specific experience: what the approach looks like, where the ceremony happens if it rains, what guests see from the room they wake up in.",
        "Honest weather-contingency content is a genuine differentiator here and almost nobody does it, because it feels like admitting a weakness. It reads as competence.",
      ],
    },
    {
      heading: "Accommodation decides whether a rural venue is viable",
      body: [
        "A venue an hour from a town with no rooms is a logistics problem. Couples know it and will rule you out silently.",
        "Set out exactly what is on site, what is walkable, what is a short taxi ride, and whether you hold rooms. This single question kills more enquiries than price does.",
      ],
    },
    {
      heading: "The city venues compete on something else entirely",
      body: [
        "Galway city venues are not selling scenery. They are selling that everything is walkable, that guests can arrive by train, and that the night does not end when the bar closes.",
        "Two different products. They should not be marketed with the same photographs or the same language.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Oughterard",
      "Clifden",
      "Spiddal",
      "Oranmore",
      "Moycullen",
      "Athenry",
      "Loughrea",
      "Ballinasloe",
      "Roundstone",
      "Cashel",
    ],
    faqs: [
      {
        q: "What does Galway offer that other scenic counties do not?",
        a: "A city guests actually want to be in afterwards. Say where people go on the second night and how they get there — it turns an objection into a reason.",
      },
      {
        q: "How do coastal venues stand out?",
        a: "Not with the sunset photograph everyone has. With the specifics: the approach, where the ceremony goes if it rains, what guests see when they wake up.",
      },
      {
        q: "What silently loses enquiries?",
        a: "Accommodation. A rural venue with no clear answer on where sixty guests sleep gets ruled out without anyone telling you.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "wedding-venues",
    county: "cork",
    industryLabel: "wedding venues",
    countyName: "Cork",
    title: "Wedding Venue Marketing Cork | Enquiries and Showrounds",
    description:
      "Marketing for Cork wedding venues: a county whose couples mostly stay in Munster, with coast, country houses and a city all competing.",
    h1: "Wedding venue marketing in Cork, for couples who are staying put.",
    intro: [
      "Cork largely keeps its own couples. Unlike Meath or Kildare, which draw heavily on Dublin, a Cork venue is mostly marketing to people already in Munster who are choosing between a coastal venue, a country house and a city hotel.",
      "That makes the competitive set local and the differentiation specific. Being the nicest country house in Ireland is not the pitch; being the right one for this couple's hundred and twenty guests from Cork and Kerry is.",
    ],
    sections: [
    {
      heading: "Your competitors are a short list and you should know it",
      body: [
        "In a regional market the couple is comparing four or five venues, often in one weekend of viewings. Everything you publish is read against the others.",
        "That rewards precision: exact capacities, whether you host one wedding a day, what is included and what is not, what the room looks like at the number they are actually bringing. Vagueness loses to the venue that answered the question.",
      ],
    },
    {
      heading: "Three products in one county",
      body: [
        "West Cork coastal venues sell a destination even to Cork people. The country houses sell grounds and photographs. City hotels sell convenience, accommodation and the afterparty.",
        "They attract different couples and should not be using the same language. A city hotel competing on scenery loses; one competing on everything being walkable wins.",
      ],
    },
    {
      heading: "West Cork is far, even from Cork",
      body: [
        "A venue beyond Clonakilty is a real journey for guests from the city, and that is the objection to answer rather than ignore.",
        "Journey times, accommodation, transport options. Couples will not ask — they will just choose somewhere closer.",
      ],
    },
    {
      heading: "Local reputation does most of the work",
      body: [
        "Cork runs on word of mouth more than most counties, and in weddings that means guests who were at a wedding at your venue and remembered it.",
        "Reviews are the online form of that and matter here more than they do in a destination market, because the people reading them know the people writing them.",
      ],
    },
    ],
    towns: [
      "Cork city",
      "Kinsale",
      "Clonakilty",
      "Skibbereen",
      "Bantry",
      "Midleton",
      "Mallow",
      "Fermoy",
      "Youghal",
      "Bandon",
      "Macroom",
      "Baltimore",
    ],
    faqs: [
      {
        q: "Who is a Cork venue competing with?",
        a: "Four or five local venues the couple is viewing in one weekend. Everything you publish is read against them, so precision beats atmosphere.",
      },
      {
        q: "Do the three venue types need different marketing?",
        a: "Yes. Coastal sells a destination, country houses sell grounds and photographs, city hotels sell walkability and the afterparty. Same language for all three fails.",
      },
      {
        q: "How much do reviews matter here?",
        a: "More than in a destination county. Cork runs on word of mouth, and the people reading reviews often know the people writing them.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "wedding-venues",
    county: "wicklow",
    industryLabel: "wedding venues",
    countyName: "Wicklow",
    title: "Wedding Venue Marketing Wicklow | Enquiries and Showrounds",
    description:
      "Marketing for Wicklow wedding venues: the closest real countryside to Dublin, sold almost entirely on how the photographs will look.",
    h1: "Wedding venue marketing in Wicklow, decided on the photographs.",
    intro: [
      "Wicklow is the garden county and wedding venues here are chosen overwhelmingly on appearance. Gardens, mountains, estates and the sea are the product, and the couple is picturing their photographs before they have read a word.",
      "It is also the closest genuine countryside to Dublin, which means it competes on accessibility as well as looks and should say so.",
    ],
    sections: [
    {
      heading: "Lead with the grounds, in real conditions",
      body: [
        "Every venue has a photograph taken on a perfect June evening. Couples getting married in April or October know that is not what they will get.",
        "Showing the grounds across seasons, and showing where the ceremony and the photographs happen when it is raining, is reassuring rather than off-putting. In a county sold on appearance, being honest about the weather is the differentiator.",
      ],
    },
    {
      heading: "Say how close you actually are",
      body: [
        "A Dublin couple assumes Wicklow means a long drive for guests. For much of the county it does not.",
        "Journey time from the city, the route, and how guests get home are the practical questions sitting under the romantic decision.",
      ],
    },
    {
      heading: "The north and the south of the county are different markets",
      body: [
        "North Wicklow venues are effectively Dublin-accessible and compete on convenience and prestige. South and west Wicklow are further, quieter and sell a genuine getaway.",
        "The second group needs to answer accommodation properly; the first group needs to answer parking and taxis.",
      ],
    },
    {
      heading: "Real weddings are the whole portfolio",
      body: [
        "In a visual market, photographs of other people's actual weddings at your venue do more than any styled shoot.",
        "Credit the photographers, ask couples for permission, and organise them by season and by guest number so a couple can find the one that looks like theirs.",
      ],
    },
    ],
    towns: [
      "Enniskerry",
      "Bray",
      "Greystones",
      "Rathdrum",
      "Wicklow town",
      "Delgany",
      "Ashford",
      "Aughrim",
      "Roundwood",
      "Blessington",
      "Avoca",
      "Arklow",
    ],
    faqs: [
      {
        q: "What sells a Wicklow venue?",
        a: "The grounds, shown honestly across seasons. Couples marrying in April know the perfect June photograph is not what they will get, and candour reads as competence.",
      },
      {
        q: "Should we emphasise the distance from Dublin?",
        a: "Yes. Couples assume Wicklow means a long drive for guests, and for much of the county it does not. Give the journey time and the route.",
      },
      {
        q: "What portfolio works best?",
        a: "Real weddings at your venue, credited to the photographers and organised by season and guest number so couples find the one that looks like theirs.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "kitchens",
    county: "dublin",
    industryLabel: "kitchen companies",
    countyName: "Dublin",
    title: "Kitchen Marketing Dublin | Showroom Visits and Design Leads",
    description:
      "Marketing for Dublin kitchen companies: the most showrooms in Ireland, smaller rooms, bigger budgets, and a visit that decides everything.",
    h1: "Kitchen marketing in Dublin, judged on showroom visits.",
    intro: [
      "Dublin has more kitchen showrooms competing for the same customers than anywhere else in Ireland, and the rooms themselves are smaller than the national average while the budgets are higher.",
      "That combination rewards design ability over square footage. A Dublin customer is frequently trying to make an awkward galley or a knocked-through terrace work, and the company that shows it has solved that exact problem wins the visit.",
    ],
    sections: [
    {
      heading: "Everything is aimed at one outcome: the visit",
      body: [
        "Nobody buys a kitchen online. The website, the ads and the photographs all exist to get somebody into the showroom, and the business should be measured on visits booked rather than enquiries received.",
        "Most Dublin kitchen companies cannot say how many visits their marketing produced last month, which means they cannot tell which half of it works.",
      ],
    },
    {
      heading: "Show small and awkward, not just large and open-plan",
      body: [
        "Every showroom portfolio leads with a huge island in a bright extension. A great many Dublin customers do not have that room and never will.",
        "Galley kitchens, terraced houses, apartments, period houses with chimney breasts in the wrong place. Showing those wins the customers who assumed you were not for them.",
      ],
    },
    {
      heading: "Access and installation are real objections here",
      body: [
        "Narrow hallways, no side entrance, apartment lifts, parking for a delivery lorry, permits on some streets.",
        "A company that raises this before the customer does sounds like one that has fitted in Dublin for years. It also prevents the uncomfortable conversation on delivery day.",
      ],
    },
    {
      heading: "The dearest clicks and the longest decision",
      body: [
        "Kitchen search terms in Dublin are expensive and the purchase takes months. Paying for a click and then not following up past one call is the most common waste in this trade.",
        "Budget should follow visits booked, not leads collected, and the follow-up has to run for months rather than days.",
      ],
    },
    ],
    towns: [
      "Rathmines",
      "Ranelagh",
      "Terenure",
      "Clontarf",
      "Blackrock",
      "Dún Laoghaire",
      "Castleknock",
      "Swords",
      "Malahide",
      "Lucan",
      "Rathfarnham",
      "Dundrum",
    ],
    faqs: [
      {
        q: "What should we measure?",
        a: "Showroom visits booked, not enquiries. Nobody buys a kitchen online, so every part of the marketing exists to produce a visit.",
      },
      {
        q: "What is missing from most Dublin portfolios?",
        a: "Small and awkward rooms. Everyone shows a large island in an extension, and a great many Dublin customers have a galley or a terrace and assume you are not for them.",
      },
      {
        q: "Which objection gets missed?",
        a: "Access. Narrow halls, no side entrance, apartment lifts, parking for the lorry. Raising it first sounds like experience.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "kitchens",
    county: "kildare",
    industryLabel: "kitchen companies",
    countyName: "Kildare",
    title: "Kitchen Marketing Kildare | Showroom Visits and Design Leads",
    description:
      "Marketing for Kildare kitchen companies: new-build estates replacing builder-standard kitchens, and extensions creating the room first.",
    h1: "Kitchen marketing in Kildare, where the builder's kitchen comes out.",
    intro: [
      "Kildare has had sustained house building, and a developer kitchen is the thing people replace once they have lived with it. That produces a predictable wave of work several years behind each estate being finished.",
      "The other half of the county's demand comes from extensions. The kitchen is the reason people build the extension, and the kitchen company that is present during that decision is in a much stronger position than one that arrives at the end.",
    ],
    sections: [
    {
      heading: "Target by estate and by age",
      body: [
        "Kildare's housing repeats in large estates finished within a year or two of each other, which means the replacement cycle arrives for whole roads at once.",
        "Advertising platforms will target an area that size. A message naming the estate and the house type converts at a rate county-level targeting never approaches, and it is cheap because you are not paying to reach people who replaced theirs last year.",
      ],
    },
    {
      heading: "Get into the extension conversation early",
      body: [
        "The kitchen is usually decided after the builder is appointed and the layout is already fixed, which is the worst order for everyone.",
        "Content aimed at people planning an extension — what to think about before the walls go up, where services need to run, how the layout constrains the design — reaches them months earlier and makes you the company they bring in first.",
      ],
    },
    {
      heading: "Relationships with builders are worth more than ads",
      body: [
        "Builders and architects get asked who to use, and they recommend whoever makes the job run smoothly.",
        "In a county with this much construction, those relationships are the steadiest source of work available and almost nobody pursues them deliberately.",
      ],
    },
    {
      heading: "Commuters research at night and decide slowly",
      body: [
        "Nobody is visiting a showroom on a Tuesday afternoon. Saturday opening, evening appointments and a site that answers properly at eleven at night matter more here than price does.",
        "The decision itself takes months, which means the follow-up has to outlast the enthusiasm.",
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
      "Kildare town",
      "Kilcock",
      "Athy",
      "Monasterevin",
      "Rathangan",
    ],
    faqs: [
      {
        q: "Where does Kildare demand come from?",
        a: "Replacing builder-standard kitchens in estates a few years after completion, and extensions where the kitchen is the reason for building.",
      },
      {
        q: "How small should targeting be?",
        a: "Estate level. Kildare's housing repeats in large estates finished at the same time, so the replacement cycle arrives for whole roads at once.",
      },
      {
        q: "What is worth more than advertising?",
        a: "Builders and architects. They get asked who to use and recommend whoever makes the job run smoothly, and almost nobody pursues that deliberately.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "kitchens",
    county: "cork",
    industryLabel: "kitchen companies",
    countyName: "Cork",
    title: "Kitchen Marketing Cork | Showroom Visits and Design Leads",
    description:
      "Marketing for Cork kitchen companies: a regional market with its own showrooms and customers who buy on local reputation.",
    h1: "Kitchen marketing in Cork, where reputation travels fast.",
    intro: [
      "Cork customers largely buy from Cork showrooms. The market is regional, the showrooms are known, and a recommendation from somebody who had their kitchen done last year carries more weight here than anywhere else.",
      "That makes reviews and real local work the whole ballgame, and it makes a company with no visible recent jobs effectively invisible regardless of how good the kitchens are.",
    ],
    sections: [
    {
      heading: "Reviews are the online form of word of mouth",
      body: [
        "In a market this referral-driven, a steady flow of recent reviews is doing the thing the market actually responds to. A handful from three years ago is not.",
        "Ask on completion, in the kitchen, while the customer is still delighted. It is the single cheapest marketing available in this trade and most showrooms never do it.",
      ],
    },
    {
      heading: "Show Cork kitchens in Cork houses",
      body: [
        "A customer in Douglas or Carrigaline wants to see a room they recognise. A portfolio of Dublin extensions does not do that.",
        "Local work, named by area where the customer allows it, is more persuasive than a better-photographed kitchen from somewhere else.",
      ],
    },
    {
      heading: "The county is three markets",
      body: [
        "City and suburbs are competitive and showroom-rich. The harbour towns are newer houses and extensions. West Cork is scattered, second-home heavy and willing to travel for the right company.",
        "West Cork customers will drive to the city for a showroom they have a reason to visit, which makes content and photographs do the work proximity usually does.",
      ],
    },
    {
      heading: "Be findable for renovation, not just kitchens",
      body: [
        "People start by thinking about the room rather than the units. Searches about open plan, knocking through, and extension layouts come months before anyone searches for a kitchen company.",
        "Being present at that stage is how you avoid competing with four showrooms at the end of the process.",
      ],
    },
    ],
    towns: [
      "Cork city",
      "Douglas",
      "Ballincollig",
      "Carrigaline",
      "Midleton",
      "Glanmire",
      "Bishopstown",
      "Blarney",
      "Mallow",
      "Bandon",
      "Kinsale",
      "Cobh",
    ],
    faqs: [
      {
        q: "What matters most in Cork?",
        a: "Recent reviews and visible local work. The market is referral-driven, and a company with no recent jobs on show is effectively invisible.",
      },
      {
        q: "Will west Cork customers travel?",
        a: "To the city, for a showroom they have a reason to visit. Content and photographs do the work that proximity usually does.",
      },
      {
        q: "When should we be visible?",
        a: "Earlier than the kitchen search. People think about the room first — open plan, knocking through, extension layouts — months before they look for a kitchen company.",
      },
      PRICE_FAQ,
    ],
  },
  {
    industry: "kitchens",
    county: "galway",
    industryLabel: "kitchen companies",
    countyName: "Galway",
    title: "Kitchen Marketing Galway | Showroom Visits and Design Leads",
    description:
      "Marketing for Galway kitchen companies: a smaller market with less showroom competition and customers spread across a large county.",
    h1: "Kitchen marketing in Galway, where one showroom serves a county.",
    intro: [
      "Galway has far fewer kitchen showrooms than Dublin or Cork and a customer base spread over a large and partly remote county. That is an advantage: the competitive set is short and a good company can become the obvious choice.",
      "It is also a logistical reality. A customer in Connemara or east Galway is making a deliberate journey to visit you, which means the visit has to be worth making and the website has to earn it first.",
    ],
    sections: [
    {
      heading: "The journey has to be justified before they set off",
      body: [
        "Somebody driving an hour to a showroom has decided in advance that it is worth the trip. That decision happens on your website.",
        "Enough photographs of real finished kitchens, a clear sense of the range and style you work in, and practical detail about what happens at a first visit. A thin site means the journey never gets made.",
      ],
    },
    {
      heading: "Less competition, so own the search outright",
      body: [
        "With a short competitive set, the generic terms are genuinely winnable here in a way they are not in Dublin.",
        "That is worth doing properly now rather than when somebody else notices. Local search, the Business Profile and a steady flow of reviews will do most of it.",
      ],
    },
    {
      heading: "City and county want different things",
      body: [
        "Galway city has smaller properties, apartments and a substantial rental sector. The county has larger rural houses with the room for the open-plan kitchen most people are picturing.",
        "Same showroom, two different conversations, and the portfolio should show both rather than only the large rural kitchens that photograph best.",
      ],
    },
    {
      heading: "Make the first visit easy to book",
      body: [
        "Appointments rather than drop-in, evenings and Saturdays, and a clear answer on what to bring.",
        "For a customer travelling a distance, uncertainty about whether anyone will be free is enough to postpone the trip indefinitely.",
      ],
    },
    ],
    towns: [
      "Galway city",
      "Salthill",
      "Knocknacarra",
      "Oranmore",
      "Tuam",
      "Ballinasloe",
      "Loughrea",
      "Athenry",
      "Gort",
      "Clifden",
      "Moycullen",
      "Headford",
    ],
    faqs: [
      {
        q: "What does the website have to do in Galway?",
        a: "Justify a journey. Customers are driving an hour to visit, and that decision is made on your site before they set off.",
      },
      {
        q: "Is the market winnable?",
        a: "More so than Dublin or Cork. The competitive set is short, so the generic search terms are genuinely available if you do the local search work properly.",
      },
      {
        q: "Should the portfolio show rural kitchens only?",
        a: "No. The city has smaller properties and apartments, and showing only large rural kitchens tells half your market you are not for them.",
      },
      PRICE_FAQ,
    ],
  },
];

export const industryCountyFor = (industry: string) =>
  industryCounty.filter((x) => x.industry === industry);

export const industryCountyBy = (industry: string, county: string) =>
  industryCounty.find((x) => x.industry === industry && x.county === county);

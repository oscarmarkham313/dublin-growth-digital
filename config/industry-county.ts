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
];

export const industryCountyFor = (industry: string) =>
  industryCounty.filter((x) => x.industry === industry);

export const industryCountyBy = (industry: string, county: string) =>
  industryCounty.find((x) => x.industry === industry && x.county === county);

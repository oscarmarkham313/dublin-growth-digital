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
      "Lead generation for Dublin plumbers and heating engineers: emergency work decided in minutes, heat pump work decided over weeks, at the highest click prices in Ireland.",
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
];

export const industryCountyFor = (industry: string) =>
  industryCounty.filter((x) => x.industry === industry);

export const industryCountyBy = (industry: string, county: string) =>
  industryCounty.find((x) => x.industry === industry && x.county === county);

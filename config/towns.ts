/**
 * Town pages — /towns/[slug].
 *
 * Why these exist: Search Console shows Naas earning about 40 impressions
 * across nine separate queries (marketing agency naas 27.4, full service
 * marketing agency naas 36.3, digital marketing naas 35.0, google adwords
 * naas 82.0 and more) with no page targeting any of them — the county hub
 * was being served instead.
 *
 * Naas is the only town with that much direct evidence. The rest are the
 * major commercial towns of the five counties where the site already earns
 * impressions: Kildare (300), Dublin (97), Wicklow (92, best commercial
 * position on the site at 15.4), Louth (google ads louth at 15.5) and
 * Meath (digital marketing meath 41.6, google ads meath 29.2).
 *
 * Be honest about that distinction when reporting: one town is evidence,
 * the rest are a considered bet on markets that already show signal.
 *
 * They live at /towns/[slug] rather than /locations/[county]/[town] because
 * that path already belongs to the county × service route and "naas" would
 * collide with a service slug.
 */

export interface Town {
  slug: string;
  name: string;
  county: string;
  countySlug: string;
  title: string;
  description: string;
  h1: string;
  intro: [string, string];
  sections: { heading: string; body: string[] }[];
  /** Areas and neighbouring places a campaign here would realistically cover */
  covers: string[];
  faqs: { q: string; a: string }[];
}

export const towns: Town[] = [
  {
    slug: "naas",
    name: "Naas",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Naas | Lead Generation for Naas Businesses",
    description:
      "A marketing agency working with Naas businesses: Google Ads, Meta ads, SEO, web design and social. Reported in enquiries, not impressions.",
    h1: "A marketing agency for Naas businesses.",
    intro: [
      "Naas is the county town and it behaves like one: professional services, retail, hospitality and trades all serving a population that has grown steadily and earns well above the national average. Most households here commute to Dublin, which shapes both what they buy and how quickly they expect an answer.",
      "It is also one of the more contested markets in Kildare. Dublin firms advertise into Naas routinely, and a business here is competing with them whether it intends to or not.",
    ],
    sections: [
      {
        heading: "What Naas businesses are actually competing against",
        body: [
          "The competition is rarely the business on the other side of the Main Street. It is a Dublin firm bidding on Naas searches from an office in D2, with a bigger budget and a slicker website.",
          "You will not out-spend them and you do not need to. What wins here is being visibly local, answering quickly and having reviews from people in Naas — none of which a Dublin competitor can buy on your patch.",
        ],
      },
      {
        heading: "Commuter households buy on speed",
        body: [
          "A household commuting to Heuston has less time and more money than the county average, and considerably less patience. They compare two or three businesses in an evening and book whoever replies first.",
          "That makes response time more valuable than price in Naas. We look at how quickly enquiries are actually answered before recommending any increase in advertising budget, because in this town that is usually where the money is going.",
        ],
      },
    ],
    covers: [
      "Naas town centre",
      "Sallins",
      "Johnstown",
      "Kill",
      "Caragh",
      "Two Mile House",
      "Punchestown",
      "Newhall",
    ],
    faqs: [
      {
        q: "Is Naas a competitive market?",
        a: "More than the rest of Kildare, because Dublin firms advertise into it. It is still far cheaper to compete in than Dublin itself, and being genuinely local is a real advantage here.",
      },
      {
        q: "Should we advertise beyond Naas?",
        a: "Usually to Sallins, Kill and Johnstown at minimum. Whether you go as far as Newbridge or Clane depends on how far you actually travel, which is the first thing we will ask.",
      },
      {
        q: "Do we compete with Dublin agencies and firms?",
        a: "Constantly. You beat them on local presence, reviews and response speed rather than on budget, and that is a fight you can genuinely win.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "newbridge",
    name: "Newbridge",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Newbridge | Lead Generation, Co. Kildare",
    description:
      "A marketing agency working with Newbridge businesses: Google Ads, Meta ads, SEO, web design and social, across Newbridge and south Kildare.",
    h1: "A marketing agency for Newbridge businesses.",
    intro: [
      "Newbridge pulls shoppers from a long way beyond its own population, largely because of Whitewater and a main street that has held up better than most Irish towns of its size. That gives local businesses a catchment considerably wider than the town itself.",
      "It also sits beside the Curragh, which brings military, equine and racing trade that behaves nothing like ordinary consumer demand.",
    ],
    sections: [
      {
        heading: "Your catchment is bigger than the town",
        body: [
          "People travel to Newbridge to shop, which means a business here is reachable by households in Kildare town, Monasterevin, Kilcullen and a good deal of south Kildare.",
          "Most local advertising ignores that entirely and targets the town. Widening the radius to match where your customers actually come from is usually the single cheapest improvement available.",
        ],
      },
      {
        heading: "Retail and services need different campaigns",
        body: [
          "Newbridge has an unusually strong retail base for a town its size, and retail advertising works differently from service advertising — footfall and opening hours matter more than lead forms.",
          "If you are a shop, the job is being found and being open. If you are a trade or a professional service, it is qualifying the enquiry before the phone rings. We will not run one at the other.",
        ],
      },
    ],
    covers: [
      "Newbridge town",
      "The Curragh",
      "Kilcullen",
      "Kildare town",
      "Monasterevin",
      "Milltown",
      "Brownstown",
      "Suncroft",
    ],
    faqs: [
      {
        q: "How far should a Newbridge business advertise?",
        a: "Wider than the town. People travel here to shop, so your realistic catchment usually includes Kildare town, Kilcullen and Monasterevin.",
      },
      {
        q: "Is retail advertising different?",
        a: "Substantially. Footfall, opening hours and stock matter more than lead forms, and the campaigns should be built around that rather than borrowed from a trades template.",
      },
      {
        q: "Does the equine and Curragh trade matter?",
        a: "For a small number of businesses, a great deal. For most it is background, and we will tell you which you are rather than building a campaign around it either way.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included. Month to month, no setup fee, ad spend paid directly to the platforms.",
      },
    ],
  },
  {
    slug: "maynooth",
    name: "Maynooth",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Maynooth | Lead Generation, Co. Kildare",
    description:
      "A marketing agency working with Maynooth businesses: Google Ads, Meta ads, SEO, web design and social, with student traffic filtered out.",
    h1: "A marketing agency for Maynooth businesses.",
    intro: [
      "Maynooth has a permanent population and a much larger one that arrives in September and leaves in May. For pubs, food and retail that student population is the business. For a plumber, an accountant or an estate agent it is noise that makes campaigns look busier than they are.",
      "Knowing which of those you are is the first and most valuable decision on a Maynooth account.",
    ],
    sections: [
      {
        heading: "Students inflate the numbers without adding customers",
        body: [
          "A campaign targeting Maynooth will reach thousands of people who are renting for eight months and will never buy a kitchen, a boiler service or a house.",
          "They are cheap to reach, they click, and they make the reporting look healthy. Excluding them where they are not your market is one of the highest-value settings on a Maynooth account, and it will reduce your reach figures while improving everything that matters.",
        ],
      },
      {
        heading: "The commuter side is the real local market",
        body: [
          "Underneath the university, Maynooth is a well-off commuter town on the Sligo line with households that buy home improvement, professional services and trades at a good rate.",
          "That is a smaller audience than the headline population and a considerably more valuable one. Campaigns here should be built for it deliberately rather than aimed at everyone within the town boundary.",
        ],
      },
    ],
    covers: [
      "Maynooth",
      "Leixlip",
      "Celbridge",
      "Kilcock",
      "Straffan",
      "Moyglare",
      "Carton",
      "Dunboyne",
    ],
    faqs: [
      {
        q: "Do students actually distort our advertising?",
        a: "For most service businesses, yes. They are reachable, cheap and irrelevant, which is the worst combination because the campaign looks like it is working.",
      },
      {
        q: "Which businesses should target students?",
        a: "Food, pubs, retail, barbers, gyms and anything with a low price and a fast decision. Almost nothing else.",
      },
      {
        q: "Does term time change the plan?",
        a: "For student-facing businesses, completely — the year has two dead months. For everyone else, barely at all.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month, ad spend paid directly to the platforms.",
      },
    ],
  },
  {
    slug: "celbridge",
    name: "Celbridge",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Celbridge | Lead Generation, Co. Kildare",
    description:
      "A marketing agency working with Celbridge businesses: Google Ads, Meta ads, SEO, web design and social, built for a commuter town.",
    h1: "A marketing agency for Celbridge businesses.",
    intro: [
      "Celbridge is a large town with a small commercial centre. Its households are numerous and well-off, and they do most of their shopping in Liffey Valley, Blanchardstown or Dublin city rather than locally.",
      "That shapes everything. A Celbridge business is competing for its own residents against places those residents already drive to, and the argument has to be convenience rather than choice.",
    ],
    sections: [
      {
        heading: "Winning back trade that already leaves",
        body: [
          "The households are there and the money is there. What is missing is a reason not to drive twenty minutes to a retail park they are visiting anyway.",
          "For services that is a straightforward argument — nobody drives to Blanchardstown for a plumber. For retail and hospitality it is harder and the campaign has to lead on convenience, speed and knowing the customer rather than on range or price.",
        ],
      },
      {
        heading: "A strong local network, mostly offline",
        body: [
          "Celbridge has an unusually active community life for a commuter town, and a great deal of local business moves through school gates, clubs and estate groups rather than through search.",
          "Paid social reaches the same households at a cost a small business can sustain, which is why it usually carries more weight here than Google does.",
        ],
      },
    ],
    covers: [
      "Celbridge",
      "Leixlip",
      "Maynooth",
      "Straffan",
      "Ardclough",
      "Hazelhatch",
      "Lucan",
      "Clane",
    ],
    faqs: [
      {
        q: "Why is Celbridge harder than its size suggests?",
        a: "Because a large share of local spending happens outside the town. The population is there; the trade partly is not, and the campaign has to address that.",
      },
      {
        q: "Should we target Lucan and Leixlip too?",
        a: "For most Celbridge businesses, yes. The boundary is meaningless to customers and the neighbouring towns are close.",
      },
      {
        q: "Meta or Google first?",
        a: "Usually Meta. Local search volume in Celbridge alone is thin, and the households are reachable far more cheaply through social.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "bray",
    name: "Bray",
    county: "Wicklow",
    countySlug: "wicklow",
    title: "Marketing Agency Bray | Lead Generation, Co. Wicklow",
    description:
      "A marketing agency working with Bray businesses: Google Ads, Meta ads, SEO, web design and social, across Bray and north Wicklow.",
    h1: "A marketing agency for Bray businesses.",
    intro: [
      "Bray is the largest town in Wicklow and functionally a south Dublin suburb — on the DART, inside the Dublin commuter economy, and competing with Dublin businesses for the same households.",
      "That makes it the most contested market in the county and the one where the site already ranks best: 'digital marketing agency wicklow' sits at position 15.4, which is the strongest commercial county position we have.",
    ],
    sections: [
      {
        heading: "Dublin prices, Wicklow address",
        body: [
          "Advertising costs in Bray sit closer to south Dublin than to the rest of Wicklow, because the same competitors are bidding on the same households.",
          "The upside is that the work is worth more — Bray and its surrounds hold some of the highest-value home improvement and professional services demand outside Dublin proper. The cost per enquiry is higher and so is the job.",
        ],
      },
      {
        heading: "Do not assume you can serve the county",
        body: [
          "A Bray business will rank well for Bray, reasonably for Greystones, and barely at all for Arklow. Google's map results are decided largely by distance, and the Wicklow mountains do not shorten the drive.",
          "If you want work in south Wicklow, paid advertising is the honest route. Optimisation will not get you there and we will not pretend otherwise.",
        ],
      },
    ],
    covers: [
      "Bray",
      "Greystones",
      "Enniskerry",
      "Shankill",
      "Kilmacanogue",
      "Delgany",
      "Killiney",
      "Ballywaltrim",
    ],
    faqs: [
      {
        q: "Is Bray expensive to advertise in?",
        a: "Closer to south Dublin than to the rest of Wicklow, because the same competitors bid on the same households. The jobs are worth more too.",
      },
      {
        q: "Can a Bray business win work in Arklow?",
        a: "Organically, rarely — proximity decides the map results and the mountains do not count as distance. Paid advertising is the honest answer for that gap.",
      },
      {
        q: "Do we compete with Dublin firms?",
        a: "Constantly. Bray is inside the Dublin commuter economy and south Dublin businesses treat it as their patch.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "greystones",
    name: "Greystones",
    county: "Wicklow",
    countySlug: "wicklow",
    title: "Marketing Agency Greystones | Lead Generation, Co. Wicklow",
    description:
      "A marketing agency working with Greystones businesses: Google Ads, Meta ads, SEO, web design and social, built for a high-value market.",
    h1: "A marketing agency for Greystones businesses.",
    intro: [
      "Greystones has one of the highest concentrations of disposable income outside south Dublin, a strong independent retail and food scene, and households that will pay for quality without much argument.",
      "It is a small market with an unusually high value per customer, which changes what a campaign should optimise for. Chasing cheap enquiries here is a mistake.",
    ],
    sections: [
      {
        heading: "Premium positioning works here",
        body: [
          "In most Irish towns leading on price beats leading on quality. In Greystones the opposite is frequently true, and businesses that discount to compete are giving away margin they did not need to.",
          "The households here are comparing on finish, reliability and how a business presents itself. That is worth building the advertising around rather than defaulting to a cheapest-quote message.",
        ],
      },
      {
        heading: "Small audience, high value per customer",
        body: [
          "There are not many households in Greystones by national standards, so reach is cheap and exhausts quickly. Creative goes stale faster than in a larger market.",
          "What that means practically is fewer, better placements with regularly refreshed photographs, and a willingness to accept a higher cost per enquiry because the jobs are larger.",
        ],
      },
    ],
    covers: [
      "Greystones",
      "Delgany",
      "Kilcoole",
      "Newtownmountkennedy",
      "Bray",
      "Charlesland",
      "Kilpedder",
      "Enniskerry",
    ],
    faqs: [
      {
        q: "Should we compete on price in Greystones?",
        a: "Usually not. It is one of the few Irish markets where leading on quality genuinely outperforms leading on price.",
      },
      {
        q: "Is the audience big enough?",
        a: "Small in number and high in value. Reach is cheap and exhausts fast, so creative needs refreshing more often than in a larger town.",
      },
      {
        q: "Should we target Bray as well?",
        a: "If you travel there, yes — but they are different customers. Bray is larger and more price-aware; Greystones is smaller and less so.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "drogheda",
    name: "Drogheda",
    county: "Louth",
    countySlug: "louth",
    title: "Marketing Agency Drogheda | Lead Generation, Co. Louth",
    description:
      "A marketing agency working with Drogheda businesses: Google Ads, Meta ads, SEO, web design and social, across Drogheda and east Meath.",
    h1: "A marketing agency for Drogheda businesses.",
    intro: [
      "Drogheda is one of the largest towns in Ireland and its catchment spills well into east Meath — Laytown, Bettystown, Julianstown and Duleek all look to Drogheda rather than to Navan.",
      "It is also firmly inside the Dublin commuter belt now, which has pushed both household incomes and advertising costs above the Louth average.",
    ],
    sections: [
      {
        heading: "Your market crosses into Meath",
        body: [
          "The county boundary runs right beside the town and means nothing commercially. A Drogheda business that advertises only within Louth is ignoring a substantial and nearby part of its own catchment.",
          "Naming the east Meath towns explicitly — on the website and in the targeting — is a ten-minute change that regularly produces enquiries from people who assumed you did not cover them.",
        ],
      },
      {
        heading: "Commuter costs, commuter expectations",
        body: [
          "Drogheda households increasingly work in Dublin, and Dublin-based competitors bid into the town. Clicks here cost noticeably more than in Dundalk twenty minutes north.",
          "The compensation is that the jobs are worth more and the customers will pay for certainty. Response speed and a website that converts matter more here than in any other Louth market.",
        ],
      },
    ],
    covers: [
      "Drogheda",
      "Laytown",
      "Bettystown",
      "Julianstown",
      "Duleek",
      "Termonfeckin",
      "Clogherhead",
      "Donore",
    ],
    faqs: [
      {
        q: "Should we advertise into Meath?",
        a: "Almost certainly. Laytown, Bettystown, Julianstown and Duleek are Drogheda's natural catchment and the county line is irrelevant to customers.",
      },
      {
        q: "Is Drogheda expensive to advertise in?",
        a: "Above the Louth average, because commuter households attract Dublin competitors. The jobs are also worth more.",
      },
      {
        q: "Do Drogheda and Dundalk overlap?",
        a: "Barely. They are twenty minutes apart and their residents do not cross for ordinary services. Campaigns covering both waste roughly half the budget.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "dundalk",
    name: "Dundalk",
    county: "Louth",
    countySlug: "louth",
    title: "Marketing Agency Dundalk | Lead Generation, Co. Louth",
    description:
      "A marketing agency working with Dundalk businesses: Google Ads, Meta ads, SEO, web design and social, including the cross-border market.",
    h1: "A marketing agency for Dundalk businesses.",
    intro: [
      "Dundalk is a large town with a genuine industrial and technology base, a third-level institute, and a border ten minutes up the road that shapes a good deal of local trade.",
      "It is also cheaper to advertise in than Drogheda, despite being a similar size, because it sits outside the Dublin commuter pull that drives prices up in the south of the county.",
    ],
    sections: [
      {
        heading: "The border is a commercial fact",
        body: [
          "For some categories, Dundalk customers compare against Newry prices in a way that businesses elsewhere in the Republic simply do not face, and the exchange rate moves that traffic back and forth.",
          "Where that applies, competing on price is a losing position. Convenience, speed, service and the hassle of crossing are the arguments that work, and the campaign should be built on them rather than on being cheapest.",
        ],
      },
      {
        heading: "There is more business-to-business demand than people expect",
        body: [
          "Dundalk's manufacturing, engineering and technology employers mean a meaningful share of local demand is business-to-business rather than consumer — and those buyers search differently and are worth far more per customer.",
          "If you sell to businesses, the campaign should be built around the specific problems they search for, with a much higher acceptable cost per enquiry. We will not run that the same way as a consumer trades campaign.",
        ],
      },
    ],
    covers: [
      "Dundalk",
      "Blackrock",
      "Carlingford",
      "Omeath",
      "Knockbridge",
      "Louth village",
      "Castlebellingham",
      "Ravensdale",
    ],
    faqs: [
      {
        q: "Does the border really affect advertising?",
        a: "In some categories, materially. Where Newry pricing is a factor, price is the wrong battleground and we will say so before building the campaign.",
      },
      {
        q: "Is Dundalk cheaper than Drogheda?",
        a: "Generally yes, because it sits outside the Dublin commuter pull that raises click prices in the south of the county.",
      },
      {
        q: "Should we advertise in Northern Ireland?",
        a: "If you trade or hire there, yes. A good share of Dundalk's natural catchment is across the border.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "swords",
    name: "Swords",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Swords | Lead Generation, North Dublin",
    description:
      "A marketing agency working with Swords businesses: Google Ads, Meta ads, SEO, web design and social, across Swords and north county Dublin.",
    h1: "A marketing agency for Swords businesses.",
    intro: [
      "Swords has grown faster than almost anywhere in Dublin and is now one of the largest towns in the country, with a young population, a great deal of new housing, and the airport economy on its doorstep.",
      "New housing is the commercially important part. Estates full of households who arrived recently have no established supplier for anything, which is the best position a local business can advertise into.",
    ],
    sections: [
      {
        heading: "New estates are the most targetable audience here",
        body: [
          "Swords and the area around it have added a great deal of housing, and new developments concentrate households at the same life stage with the same needs — flooring, blinds, landscaping, extensions, childcare.",
          "They are geographically tight, they have no inherited tradespeople, and they ask each other for recommendations constantly. For most trades this is the single best audience in north county Dublin.",
        ],
      },
      {
        heading: "Do not target all of Dublin",
        body: [
          "A Swords business serving the whole county is paying Dublin-wide prices to reach people in Tallaght who will book somebody local to them.",
          "North county — Swords, Malahide, Portmarnock, Donabate, Balbriggan, Santry — is the realistic catchment for most businesses here, and targeting it properly costs a fraction of a county-wide campaign.",
        ],
      },
    ],
    covers: [
      "Swords",
      "Malahide",
      "Portmarnock",
      "Donabate",
      "Santry",
      "Balbriggan",
      "Skerries",
      "Kinsealy",
    ],
    faqs: [
      {
        q: "Should we target all of Dublin?",
        a: "Almost never. North county Dublin is the realistic catchment for a Swords business and it costs a fraction of a county-wide campaign.",
      },
      {
        q: "Are new estates worth targeting specifically?",
        a: "In Swords more than most places. Concentrated households, no established suppliers and constant recommendations between neighbours.",
      },
      {
        q: "Does the airport economy matter?",
        a: "For hospitality, parking, transport and some services, considerably. For most trades it is background.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "tallaght",
    name: "Tallaght",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Tallaght | Lead Generation, South Dublin",
    description:
      "A marketing agency working with Tallaght businesses: Google Ads, Meta ads, SEO, web design and social, across Tallaght and south west Dublin.",
    h1: "A marketing agency for Tallaght businesses.",
    intro: [
      "Tallaght is one of the largest population centres in the country, with a hospital, a university campus, a major retail centre and a substantial industrial and business park base. It is a city-sized market inside a county.",
      "That size is the opportunity and the trap: there are enough customers here to build a business on without ever leaving the area, and enough competitors that broad targeting gets expensive quickly.",
    ],
    sections: [
      {
        heading: "Target the estates, not the postcode",
        body: [
          "Tallaght covers a wide area with genuinely different neighbourhoods, incomes and needs. A campaign aimed at the whole of it averages markets that have little in common.",
          "Tighter targeting — specific estates and areas where your work actually comes from — consistently outperforms a Tallaght-wide campaign at the same budget, and the difference is not small.",
        ],
      },
      {
        heading: "There is real business-to-business demand",
        body: [
          "The business parks and industrial estates around Tallaght hold a large number of employers, and services selling to them — IT support, cleaning, maintenance, health and safety, catering — have a dense local market most competitors ignore.",
          "That demand searches differently from consumer demand and is worth far more per customer. It deserves its own campaign rather than a line on a consumer page.",
        ],
      },
    ],
    covers: [
      "Tallaght",
      "Firhouse",
      "Templeogue",
      "Rathfarnham",
      "Clondalkin",
      "Citywest",
      "Saggart",
      "Knocklyon",
    ],
    faqs: [
      {
        q: "Is Tallaght too competitive?",
        a: "Competitive at broad terms, much less so at neighbourhood level. Tighter targeting is how a smaller business wins here.",
      },
      {
        q: "Should we target the whole area?",
        a: "Usually not. Tallaght covers genuinely different neighbourhoods and averaging them wastes budget.",
      },
      {
        q: "Is B2B worth pursuing?",
        a: "The business parks here are a dense and under-advertised market. If you sell to businesses it deserves its own campaign.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "blanchardstown",
    name: "Blanchardstown",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Blanchardstown | Lead Generation, Dublin 15",
    description:
      "A marketing agency working with Blanchardstown and Dublin 15 businesses: Google Ads, Meta ads, SEO, web design and social.",
    h1: "A marketing agency for Blanchardstown businesses.",
    intro: [
      "Dublin 15 is one of the fastest-growing and most diverse parts of Ireland, with a very large residential population, a major retail centre, a hospital and a substantial industrial base around the N3.",
      "It is also young. The age profile here is well below the national average, which changes both which channels reach people and what they are buying.",
    ],
    sections: [
      {
        heading: "A younger audience is a different campaign",
        body: [
          "Dublin 15 skews considerably younger than most of the country, which means more first-time buyers, more young families and more households setting up rather than replacing.",
          "Commercially that favours first-purchase categories — flooring, furniture, childcare, fitness, first extensions — and it makes social a stronger channel relative to search than it would be in an older area.",
        ],
      },
      {
        heading: "Diversity is a commercial fact worth using",
        body: [
          "Dublin 15 is among the most internationally diverse parts of Ireland, and a meaningful share of households search and buy in languages other than English.",
          "Very few local businesses do anything with that. If your staff speak a language that is common locally, saying so plainly is a genuine and almost entirely uncontested advantage.",
        ],
      },
    ],
    covers: [
      "Blanchardstown",
      "Castleknock",
      "Clonsilla",
      "Ongar",
      "Tyrrelstown",
      "Mulhuddart",
      "Carpenterstown",
      "Porterstown",
    ],
    faqs: [
      {
        q: "Does the younger profile change the plan?",
        a: "Yes. More first-purchase demand, more young families, and social carries more weight relative to search than in an older area.",
      },
      {
        q: "Should we advertise in other languages?",
        a: "If you can genuinely serve customers in them, it is a real and almost uncontested advantage in Dublin 15. If you cannot, do not claim it.",
      },
      {
        q: "Should we target all of Dublin 15?",
        a: "It is large enough to be worth splitting. Castleknock and Tyrrelstown are different markets with different incomes and needs.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "dun-laoghaire",
    name: "Dún Laoghaire",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Dún Laoghaire | Lead Generation, South Dublin",
    description:
      "A marketing agency working with Dún Laoghaire businesses: Google Ads, Meta ads, SEO, web design and social, across south county Dublin.",
    h1: "A marketing agency for Dún Laoghaire businesses.",
    intro: [
      "Dún Laoghaire and the coastal stretch around it hold some of the highest-value property and the oldest housing stock in the country. That combination produces steady, substantial demand for renovation, maintenance and professional services.",
      "It is also an older and wealthier population than the Dublin average, which changes what sells and how it should be sold.",
    ],
    sections: [
      {
        heading: "Old houses are a business model",
        body: [
          "Period and pre-1970s housing needs work continuously — windows, roofs, damp, rewiring, heating, extensions — and the owners here can generally afford to have it done properly rather than patched.",
          "For trades that is the most reliable demand in Dublin, and it rewards businesses that can demonstrate sympathetic work on similar houses rather than the cheapest quote.",
        ],
      },
      {
        heading: "An older market buys differently",
        body: [
          "The age profile here is well above the Dublin average, and older customers use search more than social, read more before deciding, and place unusual weight on reviews and on a business looking established.",
          "They are also far less tolerant of a slow or confusing website. Practical clarity — what you do, where you work, how to ring you — matters more here than design.",
        ],
      },
    ],
    covers: [
      "Dún Laoghaire",
      "Dalkey",
      "Glasthule",
      "Monkstown",
      "Blackrock",
      "Sandycove",
      "Killiney",
      "Stillorgan",
    ],
    faqs: [
      {
        q: "Should we compete on price here?",
        a: "Rarely. This is a market that buys on quality and on evidence of similar work, and discounting gives away margin you did not need to.",
      },
      {
        q: "Search or social?",
        a: "Search carries more weight here than in younger areas, because the age profile is well above the Dublin average.",
      },
      {
        q: "What sells best?",
        a: "Anything tied to older housing stock — windows, roofing, damp, heating, extensions, restoration — plus professional and health services.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, month to month.",
      },
    ],
  },
  {
    slug: "lucan",
    name: "Lucan",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Lucan | Lead Generation, West Dublin",
    description:
      "A marketing agency working with Lucan businesses: Google Ads, Meta ads, SEO, web design and social, across Lucan and west Dublin.",
    h1: "A marketing agency for Lucan businesses.",
    intro: [
      "Lucan has a larger population than most Irish county towns and almost none of the commercial infrastructure that would normally come with it. Its households shop in Liffey Valley, work in the city and treat the village as somewhere they pass through.",
      "That is the whole commercial problem here: a very large addressable market that spends most of its money somewhere else.",
    ],
    sections: [
      {
        heading: "A big population is not the same as a big market",
        body: [
          "Fifty thousand people within a few kilometres looks like an enormous opportunity, and for services it genuinely is — nobody drives to Liffey Valley for a plumber or an accountant.",
          "For anything retail or hospitality it is much harder, because you are competing with a shopping centre those households already visit weekly. The argument has to be convenience and familiarity rather than range.",
        ],
      },
      {
        heading: "Estates are the unit, not the town",
        body: [
          "Lucan is a collection of large estates built at different times for different buyers, and they behave differently. The older parts hold mature families replacing things; the newer developments hold households buying for the first time.",
          "Targeting by estate rather than by town consistently outperforms a Lucan-wide campaign at the same budget, and it is the change most local businesses here have never made.",
        ],
      },
    ],
    covers: [
      "Lucan",
      "Adamstown",
      "Palmerstown",
      "Clonsilla",
      "Leixlip",
      "Celbridge",
      "Newcastle",
      "Liffey Valley",
    ],
    faqs: [
      {
        q: "Is Lucan a good market?",
        a: "For services, one of the best in west Dublin — a very large population with no reason to leave the area for a trade or a professional service. For retail it is harder, because Liffey Valley is on the doorstep.",
      },
      {
        q: "Should we target the whole of Lucan?",
        a: "Usually not. It is a set of large estates built at different times for different buyers, and targeting them separately outperforms one town-wide campaign.",
      },
      {
        q: "Do we compete with city-centre firms?",
        a: "For professional services, yes. For trades, far less — proximity still decides most of it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "clondalkin",
    name: "Clondalkin",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Clondalkin | Lead Generation, Dublin 22",
    description:
      "A marketing agency working with Clondalkin and Dublin 22 businesses: Google Ads, Meta ads, SEO, web design and social.",
    h1: "A marketing agency for Clondalkin businesses.",
    intro: [
      "Clondalkin holds two things most Dublin suburbs do not: a very large residential population and one of the densest concentrations of employers in the country, around Park West, Grange Castle and the Naas Road.",
      "That means a business here has a consumer market and a business-to-business market on the same doorstep, and they need entirely different campaigns.",
    ],
    sections: [
      {
        heading: "The business parks are an under-advertised market",
        body: [
          "Grange Castle, Park West and the Naas Road corridor hold a very large number of employers, and the services selling to them — IT support, cleaning, maintenance, catering, security, health and safety — have a dense local market that almost nobody advertises to properly.",
          "Those buyers search differently from consumers and are worth far more per customer. If you sell to businesses, that deserves its own campaign rather than a line on a consumer page.",
        ],
      },
      {
        heading: "A diverse consumer market that rewards being explicit",
        body: [
          "Dublin 22 is among the more internationally diverse parts of Ireland, and a meaningful share of households search and buy in languages other than English.",
          "Very few local businesses do anything with that. If your staff genuinely speak a language that is common locally, saying so plainly is a real and almost entirely uncontested advantage — and if they do not, do not claim it.",
        ],
      },
    ],
    covers: [
      "Clondalkin",
      "Park West",
      "Grange Castle",
      "Newlands Cross",
      "Bawnogue",
      "Neilstown",
      "Rowlagh",
      "Ballyfermot",
    ],
    faqs: [
      {
        q: "Is B2B worth pursuing here?",
        a: "The business parks around Clondalkin are one of the densest employer clusters in Ireland and almost nobody advertises to them properly. If you sell to businesses, it is the opportunity.",
      },
      {
        q: "Should consumer and business campaigns be separate?",
        a: "Always. Different buyers, different search behaviour, different acceptable cost per enquiry.",
      },
      {
        q: "Should we advertise in other languages?",
        a: "If you can genuinely serve customers in them, it is a real advantage in Dublin 22. If you cannot, do not claim it.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "rathfarnham",
    name: "Rathfarnham",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Rathfarnham | Lead Generation, South Dublin",
    description:
      "A marketing agency working with Rathfarnham businesses: Google Ads, Meta ads, SEO, web design and social, across south Dublin.",
    h1: "A marketing agency for Rathfarnham businesses.",
    intro: [
      "Rathfarnham is mature, well-off and full of houses built between the 1950s and the 1980s that are now reaching the age where everything needs doing at once — windows, heating, roofs, rewiring, extensions.",
      "For trades that is about as reliable a source of demand as exists in Dublin, and it rewards businesses that can show sympathetic work on the same kind of house rather than the cheapest quote.",
    ],
    sections: [
      {
        heading: "Housing stock is the business model",
        body: [
          "The value here is not in the population figure, it is in the age and type of the housing. Semi-detached houses of a certain vintage generate predictable, repeating, substantial work.",
          "A business that photographs its work on those specific house types and says so plainly will convert far better locally than one showing generic project images, because homeowners recognise their own house immediately.",
        ],
      },
      {
        heading: "Schools and families shape the calendar",
        body: [
          "Rathfarnham has an unusually high concentration of schools, and household spending here follows the school year more closely than most areas — work gets done in summer, decisions get made at Easter.",
          "Planning budget around that rhythm, rather than spreading it flat, is a straightforward advantage that costs nothing.",
        ],
      },
    ],
    covers: [
      "Rathfarnham",
      "Templeogue",
      "Terenure",
      "Knocklyon",
      "Ballyboden",
      "Firhouse",
      "Churchtown",
      "Rathgar",
    ],
    faqs: [
      {
        q: "What sells best in Rathfarnham?",
        a: "Anything tied to older housing stock — windows, roofing, heating, rewiring, extensions, attic conversions. The houses are at the age where it all comes due.",
      },
      {
        q: "Should we compete on price?",
        a: "Rarely. This is a market that buys on evidence of similar work and on not having to worry about it.",
      },
      {
        q: "Does the school calendar matter?",
        a: "More than in most areas. Work clusters into summer and decisions into spring, and budget should follow that.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "malahide",
    name: "Malahide",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Malahide | Lead Generation, North Dublin",
    description:
      "A marketing agency working with Malahide businesses: Google Ads, Meta ads, SEO, web design and social, across coastal north Dublin.",
    h1: "A marketing agency for Malahide businesses.",
    intro: [
      "Malahide is small, affluent and unusually self-contained. It has a genuine village centre that people visit deliberately, a marina, a strong food and hospitality scene, and households with money who prefer to spend it locally.",
      "That combination is rare in Dublin and it changes the advertising: this is a market where reputation travels quickly and where looking cheap actively costs you work.",
    ],
    sections: [
      {
        heading: "A small market where word travels fast",
        body: [
          "The permanent population is modest by Dublin standards, which means reach is inexpensive and exhausts quickly — the same households will see you repeatedly within weeks.",
          "It also means a bad job is known locally in days. The businesses that do well here are the ones with visible, recent, local proof, and reviews carry disproportionate weight.",
        ],
      },
      {
        heading: "Visitors are part of the market",
        body: [
          "Malahide draws people in from across north Dublin for food, the coast and the castle, particularly at weekends and through the summer.",
          "For hospitality and retail that visiting trade is a second audience entirely, reachable before they travel rather than only when they arrive — and almost nobody here targets it deliberately.",
        ],
      },
    ],
    covers: [
      "Malahide",
      "Portmarnock",
      "Kinsealy",
      "Swords",
      "Baldoyle",
      "Sutton",
      "Donabate",
      "Howth",
    ],
    faqs: [
      {
        q: "Is the market too small?",
        a: "Small in number and high in value. Reach is cheap and exhausts fast, so creative needs refreshing more often than in a larger area.",
      },
      {
        q: "Should we compete on price?",
        a: "Generally not. Looking cheap costs you work here, and the households will pay for finish and reliability.",
      },
      {
        q: "Is the visitor trade worth targeting?",
        a: "For hospitality and retail, genuinely — and they are reachable before they travel, which almost nobody does.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "balbriggan",
    name: "Balbriggan",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Balbriggan | Lead Generation, North Dublin",
    description:
      "A marketing agency working with Balbriggan businesses: Google Ads, Meta ads, SEO, web design and social, across north county Dublin.",
    h1: "A marketing agency for Balbriggan businesses.",
    intro: [
      "Balbriggan is one of the youngest and fastest-growing towns in Ireland, and that single fact should shape everything a business here does. A very large share of households arrived in the last decade and have no established supplier for anything.",
      "It is also more price-aware than the coastal towns to the south, and advertising written for Malahide will not work twenty minutes up the road.",
    ],
    sections: [
      {
        heading: "Everyone is new, and nobody has a usual anyone",
        body: [
          "A town that has grown this fast is full of households with no family plumber, no usual electrician and no salon they have always gone to. Every supplier is an open question.",
          "That is the best position a local business can advertise into, and it puts unusual weight on reviews — a household that moved in last year has no other way to judge you.",
        ],
      },
      {
        heading: "Do not borrow the coastal playbook",
        body: [
          "Balbriggan is a different market from Malahide, Skerries or Rush despite being close to all of them. Incomes are lower, price sensitivity is higher, and value has to be visible.",
          "Premium positioning that works further down the coast underperforms here. Clear pricing and obvious value do better, and pretending otherwise wastes budget.",
        ],
      },
    ],
    covers: [
      "Balbriggan",
      "Skerries",
      "Rush",
      "Lusk",
      "Stamullen",
      "Naul",
      "Balrothery",
      "Gormanston",
    ],
    faqs: [
      {
        q: "Why does Balbriggan need its own approach?",
        a: "It is far younger, faster-growing and more price-aware than the coastal towns to the south. Advertising written for Malahide will not work here.",
      },
      {
        q: "Are new households really the opportunity?",
        a: "They are the whole opportunity. A town that grew this fast is full of people with no established supplier for anything.",
      },
      {
        q: "Do reviews matter more here?",
        a: "Considerably. To a household that arrived last year, reviews are the only evidence about you that exists.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "dundrum",
    name: "Dundrum",
    county: "Dublin",
    countySlug: "dublin",
    title: "Marketing Agency Dundrum | Lead Generation, South Dublin",
    description:
      "A marketing agency working with Dundrum businesses: Google Ads, Meta ads, SEO, web design and social, across south Dublin.",
    h1: "A marketing agency for Dundrum businesses.",
    intro: [
      "Dundrum has a retail centre that pulls shoppers from half of Dublin, which is a considerable advantage if you are inside it and a considerable problem if you are not.",
      "The residential market around it is affluent, well served by the Luas, and heavily targeted by every competitor with a budget. It is one of the more expensive places in Ireland to advertise.",
    ],
    sections: [
      {
        heading: "Competing beside a gravity well",
        body: [
          "If you are a local business in Dundrum that is not in the shopping centre, you are competing for attention with a destination those households already visit.",
          "For services that matters far less than people fear — nobody buys plumbing at a retail centre. For retail and food it is the central problem, and the answer is usually to be what the centre is not: local, specific and quick.",
        ],
      },
      {
        heading: "Expensive clicks, valuable customers",
        body: [
          "Advertising costs here are near the top of the Irish range, because the households are wealthy and every competitor knows it.",
          "That makes conversion rate far more important than budget. At these prices a website converting at two per cent instead of five is wasting most of an expensive campaign, and we will look at that before recommending more spend.",
        ],
      },
    ],
    covers: [
      "Dundrum",
      "Churchtown",
      "Windy Arbour",
      "Goatstown",
      "Stillorgan",
      "Sandyford",
      "Milltown",
      "Clonskeagh",
    ],
    faqs: [
      {
        q: "Is Dundrum expensive to advertise in?",
        a: "Near the top of the Irish range. The households are wealthy and every competitor is bidding on them.",
      },
      {
        q: "Does the shopping centre hurt local businesses?",
        a: "For retail and food it is the central challenge. For services it barely matters — nobody buys a plumber at a retail centre.",
      },
      {
        q: "What matters most here?",
        a: "Conversion rate. At these click prices, fixing the website is worth more than increasing the budget.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "navan",
    name: "Navan",
    county: "Meath",
    countySlug: "meath",
    title: "Marketing Agency Navan | Lead Generation, Co. Meath",
    description:
      "A marketing agency working with Navan businesses: Google Ads, Meta ads, SEO, web design and social, across Navan and central Meath.",
    h1: "A marketing agency for Navan businesses.",
    intro: [
      "Navan is the county town and one of the few large Meath towns with a real economy of its own rather than a dormitory one. It has retail, industry, services and a catchment that reaches across central Meath.",
      "That makes it a genuinely different market from Ashbourne or Ratoath twenty minutes east, which are commuter towns first and everything else second.",
    ],
    sections: [
      {
        heading: "A working town, not a dormitory",
        body: [
          "Navan households are more likely to work locally than those in east Meath, which changes when they are available, how they buy and what they are willing to pay.",
          "It also means the town has its own business-to-business demand — suppliers, trades and services selling to other Navan businesses — which is thinner in the commuter towns and largely uncontested online.",
        ],
      },
      {
        heading: "Your catchment is central Meath",
        body: [
          "People travel into Navan from Kells, Trim, Athboy and Dunshaughlin for things they cannot get closer, which gives a business here a catchment several times the town's own population.",
          "Most local advertising targets Navan and stops. Widening to the towns that actually feed into it is usually the cheapest improvement available.",
        ],
      },
    ],
    covers: [
      "Navan",
      "Kells",
      "Trim",
      "Athboy",
      "Dunshaughlin",
      "Slane",
      "Bective",
      "Robinstown",
    ],
    faqs: [
      {
        q: "Is Navan different from east Meath?",
        a: "Substantially. It is a working town with its own economy; Ashbourne and Ratoath are commuter towns with Dublin incomes and Dublin expectations.",
      },
      {
        q: "How wide is the catchment?",
        a: "Central Meath — Kells, Trim, Athboy and Dunshaughlin all feed into Navan, which most local advertising ignores.",
      },
      {
        q: "Is there B2B demand?",
        a: "More than in the commuter towns, and largely uncontested online. Worth a separate campaign if you sell to businesses.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "ashbourne",
    name: "Ashbourne",
    county: "Meath",
    countySlug: "meath",
    title: "Marketing Agency Ashbourne | Lead Generation, Co. Meath",
    description:
      "A marketing agency working with Ashbourne businesses: Google Ads, Meta ads, SEO, web design and social, across east Meath.",
    h1: "A marketing agency for Ashbourne businesses.",
    intro: [
      "Ashbourne is Dublin commuter belt in everything but the postal address. It sits on the N2, its households work in the city, and both incomes and advertising costs sit far closer to north Dublin than to the rest of Meath.",
      "A business here is competing with Dublin firms bidding into the town while pricing jobs at Meath rates, which is a squeeze worth understanding before setting a budget.",
    ],
    sections: [
      {
        heading: "Dublin costs, Meath prices",
        body: [
          "Dublin-based competitors advertise into Ashbourne routinely, which pushes click prices up while local job values have not moved to match.",
          "The response is tighter targeting and better conversion rather than higher bids. A business here that answers within the hour and has a site that converts will beat a larger Dublin budget consistently.",
        ],
      },
      {
        heading: "Commuter households buy certainty",
        body: [
          "The people here have less time than money and almost no patience for being messed about. They want a definite date, a clear price and someone who turns up.",
          "That is what the advertising should promise, and it is a far better argument than being cheapest — which in this town is not what they are shopping for anyway.",
        ],
      },
    ],
    covers: [
      "Ashbourne",
      "Ratoath",
      "Dunboyne",
      "Dunshaughlin",
      "Curragha",
      "Kilbride",
      "Donabate",
      "Swords",
    ],
    faqs: [
      {
        q: "Is Ashbourne expensive to advertise in?",
        a: "Approaching north Dublin prices, because Dublin firms bid into it while local job values have not moved to match.",
      },
      {
        q: "How do we compete with Dublin firms?",
        a: "On response speed and local presence. A Dublin competitor cannot be around the corner and cannot ring back in twenty minutes.",
      },
      {
        q: "Should Ashbourne and Navan share a campaign?",
        a: "No. They are different markets with different incomes, different competition and different expectations.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "ratoath",
    name: "Ratoath",
    county: "Meath",
    countySlug: "meath",
    title: "Marketing Agency Ratoath | Lead Generation, Co. Meath",
    description:
      "A marketing agency working with Ratoath businesses: Google Ads, Meta ads, SEO, web design and social, across east Meath.",
    h1: "A marketing agency for Ratoath businesses.",
    intro: [
      "Ratoath has grown from a village into one of the most affluent commuter settlements in Leinster in about two decades, and it is almost entirely residential. There is very little local commercial base.",
      "That makes it an unusual market: a great deal of household spending power, very few local businesses competing for it, and most of it currently leaking to Ashbourne, Swords and Dublin.",
    ],
    sections: [
      {
        heading: "Money that currently leaves the village",
        body: [
          "The households here have real spending power and very few local options, so most of what they buy is bought elsewhere by default rather than by preference.",
          "For a service business that is an open goal — nobody prefers to drive to Swords for a tradesperson. The job is simply being visible and available, and very few businesses here are doing it.",
        ],
      },
      {
        heading: "A tight community that talks",
        body: [
          "Ratoath's size and age profile mean the community networks are unusually strong — school gates, clubs and estate groups carry a great deal of recommendation traffic.",
          "Paid social reaches the same households cheaply while you earn those recommendations honestly. It is the better channel here by a distance, because local search volume is thin.",
        ],
      },
    ],
    covers: [
      "Ratoath",
      "Ashbourne",
      "Dunshaughlin",
      "Dunboyne",
      "Curragha",
      "Fairyhouse",
      "Kilbride",
      "Batterstown",
    ],
    faqs: [
      {
        q: "Is Ratoath big enough to advertise in?",
        a: "The population is modest and the spending power is not. Local search volume is thin, which is why Meta usually carries more weight than Google here.",
      },
      {
        q: "Why does spending leave the town?",
        a: "Because there are very few local options, not because people prefer to travel. For services that is an opportunity rather than a problem.",
      },
      {
        q: "Do community networks matter?",
        a: "A great deal. We cannot post into them; we reach the same households with budget while you earn the recommendations.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "trim",
    name: "Trim",
    county: "Meath",
    countySlug: "meath",
    title: "Marketing Agency Trim | Lead Generation, Co. Meath",
    description:
      "A marketing agency working with Trim businesses: Google Ads, Meta ads, SEO, web design and social, across west Meath and the Boyne valley.",
    h1: "A marketing agency for Trim businesses.",
    intro: [
      "Trim is a heritage town with a genuine visitor economy and an agricultural hinterland, and it is far enough west that the Dublin commuter effect thins out considerably.",
      "That makes it cheaper to advertise in than east Meath and a slower, more relationship-led market — which suits some businesses very well and others not at all.",
    ],
    sections: [
      {
        heading: "Two economies, one small town",
        body: [
          "Trim runs on local and agricultural trade all year, with a visitor layer on top that concentrates into summer and around events.",
          "Businesses touching tourism should not budget like businesses that do not, and several here do both. Separating the two rather than averaging them is the first thing we do on a Trim account.",
        ],
      },
      {
        heading: "Cheap to reach, slow to convince",
        body: [
          "Competition is light and clicks are inexpensive, so visibility is affordable in a way it is not twenty minutes east.",
          "What takes longer is trust. This is a market where people ask around before they ring, so reviews and visible local work do more than any amount of budget.",
        ],
      },
    ],
    covers: [
      "Trim",
      "Athboy",
      "Summerhill",
      "Longwood",
      "Enfield",
      "Kildalkey",
      "Rathmolyon",
      "Navan",
    ],
    faqs: [
      {
        q: "Is Trim cheaper to advertise in than Ashbourne?",
        a: "Considerably. The Dublin commuter effect thins out this far west and competition is much lighter.",
      },
      {
        q: "Does the tourism trade matter?",
        a: "For the businesses it touches, seasonally and genuinely. For a plumber, not at all — and they should not share a campaign.",
      },
      {
        q: "How quickly does it work?",
        a: "Visibility is fast and cheap. Trust takes longer, because people here ask around before they ring.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "leixlip",
    name: "Leixlip",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Leixlip | Lead Generation, Co. Kildare",
    description:
      "A marketing agency working with Leixlip businesses: Google Ads, Meta ads, SEO, web design and social, across north Kildare.",
    h1: "A marketing agency for Leixlip businesses.",
    intro: [
      "Leixlip is unlike anywhere else in Kildare because of who works there. Large technology and manufacturing employers have given the town an unusually high-earning, international and transient population.",
      "That last word matters commercially: a meaningful share of households here are on multi-year postings rather than settled for life, and they buy accordingly.",
    ],
    sections: [
      {
        heading: "A transient, high-earning population",
        body: [
          "Households on fixed-term postings rent rather than buy, furnish quickly, use services heavily and leave. They are excellent customers for anything short-cycle and poor ones for anything requiring a ten-year relationship.",
          "They also arrive knowing nobody, which means they choose almost entirely on what they find online and on reviews written in English by strangers. Being findable matters more here than being long-established.",
        ],
      },
      {
        heading: "The employers themselves are a market",
        body: [
          "The large sites around Leixlip and their supplier networks generate substantial business-to-business demand — facilities, catering, maintenance, IT, logistics, professional services.",
          "That is a slower, larger sale than consumer work and it should be run as its own campaign rather than bolted onto one.",
        ],
      },
    ],
    covers: [
      "Leixlip",
      "Celbridge",
      "Maynooth",
      "Lucan",
      "Confey",
      "Collinstown",
      "Kilcock",
      "Clonsilla",
    ],
    faqs: [
      {
        q: "What makes Leixlip different?",
        a: "Its employers. High-earning, international and partly transient households that buy differently from settled ones.",
      },
      {
        q: "Does a transient population help or hurt?",
        a: "Both. Excellent for short-cycle services, poor for anything needing a decade-long relationship — and they choose almost entirely on what they find online.",
      },
      {
        q: "Is there B2B demand?",
        a: "Substantial, through the large employers and their supplier networks. It deserves its own campaign.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
  {
    slug: "athy",
    name: "Athy",
    county: "Kildare",
    countySlug: "kildare",
    title: "Marketing Agency Athy | Lead Generation, South Kildare",
    description:
      "A marketing agency working with Athy businesses: Google Ads, Meta ads, SEO, web design and social, across south Kildare and north Carlow.",
    h1: "A marketing agency for Athy businesses.",
    intro: [
      "Athy is a market town with an agricultural hinterland, and it is far enough from Dublin that the commuter effect which shapes north Kildare barely reaches it. Incomes, prices and expectations are all closer to Carlow than to Naas.",
      "It also sits close enough to the county boundary that a great deal of its trade crosses it, which most local advertising ignores entirely.",
    ],
    sections: [
      {
        heading: "This is not north Kildare",
        body: [
          "Advertising written for Naas or Newbridge will not work in Athy. The commuter incomes are not here, price sensitivity is higher, and the pace of decision is slower.",
          "What works is clear pricing, visible local work and patience. What does not is premium positioning borrowed from a town forty minutes up the road.",
        ],
      },
      {
        heading: "Your market crosses into Carlow and Laois",
        body: [
          "Athy's natural catchment reaches into Carlow town, Castledermot, Stradbally and Ballylinan, and customers pay no attention to which county they are in.",
          "Naming those places explicitly — on the website and in the targeting — regularly produces enquiries from people who assumed the business did not cover them.",
        ],
      },
    ],
    covers: [
      "Athy",
      "Castledermot",
      "Ballylinan",
      "Monasterevin",
      "Kilkea",
      "Stradbally",
      "Carlow town",
      "Kildare town",
    ],
    faqs: [
      {
        q: "Is Athy like the rest of Kildare?",
        a: "No. The commuter effect that shapes Naas and Newbridge barely reaches it, and incomes and expectations are closer to Carlow.",
      },
      {
        q: "Should we advertise into Carlow and Laois?",
        a: "Almost certainly. Athy's catchment crosses both boundaries and customers pay no attention to county lines.",
      },
      {
        q: "Does premium positioning work here?",
        a: "Generally not. Clear pricing and visible local work do better than the messaging that suits north Kildare.",
      },
      {
        q: "What does it cost?",
        a: "€1,500 a month with everything included, or €2,500 with the second channel and a new website. Month to month, no setup fee, and ad spend goes directly to the platforms from your own account.",
      },
    ],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
export const townsForCounty = (countySlug: string) =>
  towns.filter((t) => t.countySlug === countySlug);

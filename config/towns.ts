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
 * major commercial towns of the four counties where the site already earns
 * impressions: Kildare (300), Dublin (97), Wicklow (92, best commercial
 * position on the site at 15.4) and Louth (google ads louth at 15.5).
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
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
export const townsForCounty = (countySlug: string) =>
  towns.filter((t) => t.countySlug === countySlug);

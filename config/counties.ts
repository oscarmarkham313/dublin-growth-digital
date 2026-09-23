/**
 * County pages — /locations/[slug]. One per county in the Republic.
 * Every county gets its own intro and town list so the pages are useful
 * to a reader in that county, not thin copies of each other.
 */

export interface County {
  slug: string;
  name: string;
  province: "Leinster" | "Munster" | "Connacht" | "Ulster";
  towns: string[];
  intro: [string, string];
  /** Industry slugs most relevant in the county, first is the lead */
  focus: string[];
  /**
   * County-specific hub content. Only the indexable counties have it: the
   * hubs measured 47% similar to each other on a shingle comparison, the
   * same band as the pages Google suppressed, because the four FAQs below
   * were interpolated identically for all 26. These displace them.
   */
  hubSection?: { heading: string; body: string[] };
  hubFaqs?: { q: string; a: string }[];
}

export const counties: County[] = [
  {
    slug: "carlow",
    name: "Carlow",
    province: "Leinster",
    towns: ["Carlow town", "Tullow", "Bagenalstown", "Leighlinbridge", "Hacketstown", "Borris", "Rathvilly"],
    intro: [
      "Carlow is a small county with a big catchment: homeowners in Carlow town and Tullow compare tradespeople and estate agents against Kilkenny, Athy and the south Kildare towns as much as against each other. A business that owns the Carlow map box and shows up in the local feed wins work from three counties.",
      "We run Meta and Google campaigns for Carlow businesses built around that catchment, with lead forms that qualify the job before the phone rings.",
    ],
    focus: ["estate-agents", "roofers", "solar-installers"],
    hubSection: {
      heading: "Small, and pointed at three other counties",
      body: [
        "Carlow is the second-smallest county in Ireland by area and it has never functioned as a self-contained market. Its households shop and compare across into Kilkenny, up into Athy and south Kildare, and down toward Enniscorthy, and they judge local firms against businesses in all three.",
        "That sounds like a weakness and is mostly the opposite. A Carlow business already has a catchment several times its own county's population, reachable cheaply, without having to pretend the boundary means anything.",
        "So the thing to settle first is not who your customer is but how far you will drive. Budget, targeting and which channel carries the weight all follow from that one answer, and most businesses here have never actually written it down.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Carlow too small a market?",
        a: "The county on its own is thin on search volume. That is why campaigns here lean harder on Meta and are drawn on a driving radius rather than a boundary.",
      },
      {
        q: "Should we advertise into Kilkenny and Kildare?",
        a: "If you travel there, yes. Treating the county line as the edge of your market leaves a great deal of work on the table.",
      },
      {
        q: "Is competition heavy?",
        a: "No. Very few Carlow businesses advertise seriously and fewer still have a site that converts, which makes this a cheap market to win.",
      },
      {
        q: "Which town should we start in?",
        a: "Wherever most of your current work already comes from. That is almost always the cheapest place to get more of it.",
      },
    ],
  },
  {
    slug: "cavan",
    name: "Cavan",
    province: "Ulster",
    towns: ["Cavan town", "Bailieborough", "Virginia", "Cootehill", "Kingscourt", "Ballyjamesduff", "Belturbet", "Ballyconnell"],
    intro: [
      "Cavan's work is spread across a dozen towns rather than one centre, and the businesses that grow are the ones that show up in every one of them. A roofer in Virginia is competing for the same Meath commuter homeowners as firms in Kells and Navan.",
      "We build campaigns around the towns you actually cover in Cavan, aimed at homeowners, farms and the commuter belt along the N3, and report in enquiries and booked jobs.",
    ],
    focus: ["roofers", "solar-installers", "builders-and-extensions"],
    hubSection: {
      heading: "Drumlins, lakes and a dozen small centres",
      body: [
        "Cavan's landscape does more to shape its commerce than anything else. Drumlins and lakes mean the roads wander, journeys take longer than the distance suggests, and the county never developed one dominant town to pull trade toward it.",
        "It works instead as roughly a dozen separate catchments — Cavan town, Cootehill, Kingscourt, Belturbet, Ballyjamesduff and the rest — each with its own loyalties and its own tradespeople. A customer in one rarely considers a business in another.",
        "Along the N3 there is then a stretch where households work in Dublin and expect to be rung back the same afternoon. Two quite different sets of expectations inside one county, which is why we build to the catchments you actually serve rather than to the outline on the map.",
      ],
    },
    hubFaqs: [
      {
        q: "Should the whole county share a campaign?",
        a: "No. Cavan town and Belturbet are separate markets with separate customers, and one campaign across both wastes most of the budget.",
      },
      {
        q: "Is the N3 stretch different?",
        a: "Meaningfully. It carries the better-paying work and it expects a far quicker response than the rest of the county.",
      },
      {
        q: "Do farmers respond to online advertising?",
        a: "For some services increasingly so, for others the relationship still does the work. We will tell you which side you sit on.",
      },
      {
        q: "Does mobile coverage matter here?",
        a: "More than in most counties. Parts of Cavan are patchy and a heavy website simply fails for those visitors.",
      },
    ],
  },
  {
    slug: "clare",
    name: "Clare",
    province: "Munster",
    towns: ["Ennis", "Shannon", "Kilrush", "Ennistymon", "Killaloe", "Newmarket-on-Fergus", "Sixmilebridge", "Lahinch", "Kilkee"],
    intro: [
      "Clare splits into Ennis and the Shannon corridor on one side and the coast and the Burren on the other, and a campaign that treats them as one market wastes money. Homeowners in Ennis and Shannon search like Limerick suburbs; the coast is holiday homes, renovations and a short season.",
      "We run separate targeting for each side of the county, from Killaloe to Kilkee, with lead forms that qualify the job first.",
    ],
    focus: ["estate-agents", "builders-and-extensions", "solar-installers"],
    hubSection: {
      heading: "Four economies in one county",
      body: [
        "Clare holds an administrative centre at Ennis, an industrial cluster around Shannon, a serious tourism strip along the west coast and a large rural remainder. They share a county boundary and very little else.",
        "Limerick city matters more than the boundary suggests, too. A great many Clare households shop and buy services there, and Limerick firms advertise into Clare routinely.",
      ],
    },
    hubFaqs: [
      {
        q: "Do we compete with Limerick businesses?",
        a: "In south and east Clare, constantly. Making your local presence obvious is the cheapest and most effective response.",
      },
      {
        q: "Should Ennis and Shannon share a campaign?",
        a: "Usually not. Shannon's economy is industrial and its households behave differently.",
      },
      {
        q: "Is the coast worth advertising to?",
        a: "If you serve it, yes, but seasonally. Spending evenly across the year there wastes most of it.",
      },
      {
        q: "Is competition heavy?",
        a: "No. Clare is lightly contested online, which makes organic search move faster than in Limerick city.",
      },
    ],
  },
  {
    slug: "cork",
    name: "Cork",
    province: "Munster",
    towns: ["Cork city", "Ballincollig", "Carrigaline", "Midleton", "Mallow", "Cobh", "Bandon", "Clonakilty", "Youghal", "Fermoy", "Macroom", "Kinsale", "Skibbereen", "Bantry"],
    intro: [
      "Cork is the biggest market outside Dublin and the most competitive: Ballincollig, Carrigaline and Midleton alone have more estate agents, solar installers and roofing firms than most counties have in total. The businesses winning here are in the map box and in the feed, not just the ones with the longest track record.",
      "We run vendor campaigns for Cork estate agencies and lead campaigns for solar, roofing, bathroom and building firms from the city out to West Cork, reported weekly in enquiries and booked work.",
    ],
    focus: ["estate-agents", "solar-installers", "bathroom-renovations"],
    hubSection: {
      heading: "The city and the county are two businesses",
      body: [
        "Cork is the largest county in Ireland and the gap between Cork city and west Cork is not a matter of degree. The city behaves like a small Dublin: competitive, well served and expensive. West Cork behaves like a rural county with a heavy seasonal overlay.",
        "A campaign built for one is close to useless for the other, and the common mistake here is to build a single Cork campaign and wonder why the cost per enquiry is poor in both halves of it.",
      ],
    },
    hubFaqs: [
      {
        q: "Should city and county share a campaign?",
        a: "No. They have different competition, different costs and different customers. Sharing one is the single most common waste we see on Cork accounts.",
      },
      {
        q: "Is west Cork worth advertising in?",
        a: "If you genuinely travel there, yes, and it is far cheaper than the city. If you do not, the distances will cost you more than the work is worth.",
      },
      {
        q: "How competitive is Cork city?",
        a: "The most competitive market outside Dublin, though still well short of it. Enough that conversion and reviews matter more than budget.",
      },
      {
        q: "Does the tourist season affect us?",
        a: "In west Cork and along the coast, considerably. In the city and the suburbs, barely at all.",
      },
    ],
  },
  {
    slug: "donegal",
    name: "Donegal",
    province: "Ulster",
    towns: ["Letterkenny", "Buncrana", "Ballybofey", "Stranorlar", "Donegal town", "Bundoran", "Carndonagh", "Dungloe", "Ballyshannon", "Killybegs"],
    intro: [
      "Donegal is big, spread out and cross-border: Letterkenny and Inishowen businesses quote against Derry firms every week, and a campaign that does not respect the border and the distances wastes half its budget. Renovation, roofing and solar demand is strong, and the homeowners are used to finding tradespeople online.",
      "We build Donegal campaigns around real travel distances, from Inishowen to Bundoran, and qualify the job and the location before your phone rings.",
    ],
    focus: ["roofers", "solar-installers", "builders-and-extensions"],
    hubSection: {
      heading: "The border, the distances and the people who left",
      body: [
        "Donegal is the fourth-largest county in Ireland, awkwardly shaped, and joined to the rest of the Republic by a narrow corridor. Letterkenny anchors the north and Donegal town the south, far enough apart that almost no business serves both properly.",
        "Derry pulls harder than the border implies. A great deal of the north of the county shops and buys services across it, and sterling moves that trade back and forth in ways no campaign controls — which is why competing there on price is usually a losing position.",
        "And the connection with people who emigrated is stronger here than almost anywhere in Ireland. They return, they inherit and do up family houses, and they can be reached from wherever they now live. For building trades that is real money, and virtually nobody goes after it.",
      ],
    },
    hubFaqs: [
      {
        q: "How wide should we target?",
        a: "As far as you will genuinely drive, and no further. In Donegal that is usually much smaller than the county and it is the biggest single efficiency available.",
      },
      {
        q: "Do we compete with Derry?",
        a: "In the north, constantly, and the exchange rate moves that traffic. Convenience and local presence are winnable arguments; price generally is not.",
      },
      {
        q: "Can we reach people who moved away?",
        a: "To a useful degree, and hardly anyone tries. For renovation and building work it is a genuine vein.",
      },
      {
        q: "Does poor coverage affect the website?",
        a: "Considerably. Across the west and the islands a heavy site fails silently, and you never see those people in your enquiries.",
      },
    ],
  },
  {
    slug: "dublin",
    name: "Dublin",
    province: "Leinster",
    towns: ["Dublin city", "Swords", "Tallaght", "Blanchardstown", "Dún Laoghaire", "Clondalkin", "Lucan", "Malahide", "Balbriggan", "Dundrum", "Rathfarnham", "Howth", "Castleknock", "Clontarf"],
    intro: [
      "Dublin is where we are based and where the competition for every search is fiercest. An estate agent in Rathfarnham or a bathroom fitter in Swords is competing against hundreds of firms and every national lead-selling site, and the map box changes street by street.",
      "We run hyper-local campaigns across the city and county, postcode by postcode, with creative built for a Dublin homeowner and lead forms that qualify the job before you drive across the M50.",
    ],
    focus: ["estate-agents", "bathroom-renovations", "builders-and-extensions"],
    hubSection: {
      heading: "Where the money actually goes in Dublin",
      body: [
        "Dublin is the most expensive advertising market in the country by a distance, and the difference is not marginal — a click that costs a euro in Mayo can cost six or seven here for the same service.",
        "That changes what is worth doing. In a cheap market you can buy your way to enquiries and fix the conversion problems later. In Dublin, a website that converts at two per cent instead of five is throwing away most of a budget that was expensive to begin with, which is why we usually look at the site before recommending more spend.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Dublin too competitive to advertise in?",
        a: "No, but it is unforgiving. Everything that is merely wasteful elsewhere is expensive here, so the work goes into conversion and targeting before it goes into budget.",
      },
      {
        q: "Should we target all of Dublin?",
        a: "Rarely. Most Dublin businesses serve a handful of postcodes and a realistic travel radius. A campaign covering the whole county spends most of its money on people who will book someone closer.",
      },
      {
        q: "Do north and south Dublin behave differently?",
        a: "In pricing, expectations and which services sell, yes, noticeably. We split them where the difference is big enough to matter.",
      },
      {
        q: "How do we compete with the big national firms?",
        a: "Not on budget. On response speed, genuine local presence and reviews — which is where most of them are weak.",
      },
    ],
  },
  {
    slug: "galway",
    name: "Galway",
    province: "Connacht",
    towns: ["Galway city", "Salthill", "Oranmore", "Tuam", "Ballinasloe", "Loughrea", "Athenry", "Clifden", "Gort", "Moycullen", "Barna"],
    intro: [
      "Galway city and its commuter ring, from Oranmore to Moycullen, is one of the fastest-moving property and home-improvement markets in the country, while east Galway towns like Tuam, Ballinasloe and Loughrea behave like a separate county. Solar uptake is high and the roofing and extension work never stops.",
      "We run city and county campaigns separately for Galway businesses, with lead forms that qualify the job, and report every Friday in enquiries and booked work.",
    ],
    focus: ["estate-agents", "solar-installers", "landscapers"],
    hubSection: {
      heading: "A student city on top of a very large county",
      body: [
        "Galway city's population swells and empties with the academic year, and for a great many businesses the student population is not a customer at all. It inflates reach figures, it clicks, and it distorts what a campaign appears to be doing.",
        "Beyond the city the county is enormous and thinly populated, running west through Connemara where driving time, not distance, decides whether somebody is realistically your customer.",
      ],
    },
    hubFaqs: [
      {
        q: "Do students distort our numbers?",
        a: "For most service businesses, yes. They are reachable, cheap and irrelevant, which is the worst combination because it makes a campaign look busy.",
      },
      {
        q: "How far west should we target?",
        a: "As far as you will genuinely drive. Connemara distances are longer in practice than they look on a map.",
      },
      {
        q: "Is the city market competitive?",
        a: "Moderately, and more so in hospitality and retail than in trades and services.",
      },
      {
        q: "Does Irish-language marketing matter?",
        a: "In parts of the county it is genuinely valued and almost nobody does it. Worth discussing if you serve the Gaeltacht areas.",
      },
    ],
  },
  {
    slug: "kerry",
    name: "Kerry",
    province: "Munster",
    towns: ["Tralee", "Killarney", "Listowel", "Dingle", "Kenmare", "Castleisland", "Killorglin", "Cahersiveen", "Ballybunion"],
    intro: [
      "Kerry's homeowner market is Tralee, Killarney and the towns between them; the coast and the peninsulas are holiday homes, renovations and a tourism economy that changes what people search for from May to September. A Kerry business needs different messages for each.",
      "We build Kerry campaigns town by town, from Listowel to Kenmare, and qualify the job, the property and the timing before your phone rings.",
    ],
    focus: ["builders-and-extensions", "solar-installers", "estate-agents"],
    hubSection: {
      heading: "A summer county and a working county",
      body: [
        "Killarney, Dingle and the Ring live on a few intense months and then go quiet. Tralee and Listowel trade steadily all year and barely register the season at all. Most advice written for one is actively wrong for the other.",
        "The distances compound it. Tralee to Cahersiveen is not a journey anybody makes for an ordinary service, and the Ring roads are slow in August and slower in February, so a campaign drawn around the county buys a lot of people who will book somebody nearer home.",
        "The opportunity almost no Kerry business uses is timing. Somebody planning a week in Kenmare is deciding in March, from Dublin or Manchester. Reach them then and you are the only business talking to them. Wait until July and you are one of four hundred.",
      ],
    },
    hubFaqs: [
      {
        q: "How seasonal is this really?",
        a: "For anything tourism-facing, severely. A flat monthly budget suits almost nobody in Killarney or Dingle.",
      },
      {
        q: "Can we reach visitors before they travel?",
        a: "Yes, and it is badly under-used. Targeting where they live in spring costs a fraction of competing locally in July.",
      },
      {
        q: "Are Tralee and Killarney different markets?",
        a: "Very. Different customers, different timing, different message. They should not share a campaign.",
      },
      {
        q: "How far should we target?",
        a: "By driving time rather than distance. Kerry's roads make a wide radius expensive and largely unproductive.",
      },
    ],
  },
  {
    slug: "kildare",
    name: "Kildare",
    province: "Leinster",
    towns: ["Naas", "Newbridge", "Maynooth", "Celbridge", "Leixlip", "Kildare town", "Athy", "Clane", "Kilcock", "Kilcullen", "Sallins"],
    intro: [
      "Kildare is the biggest commuter county, and its homeowners have money to spend on extensions, driveways, solar and gardens but very little time to find someone to do the work. They search from the train and decide from the map box and the reviews.",
      "We run campaigns for Kildare businesses across the north of the county from Maynooth to Naas and the south from Kildare town to Athy, with lead forms that qualify the job first.",
    ],
    focus: ["driveways-and-paving", "landscapers", "estate-agents"],
    hubSection: {
      heading: "A commuter county, not a rural one",
      body: [
        "Kildare's households commute. Naas, Newbridge, Maynooth and Celbridge are full of people who work in Dublin, earn Dublin wages and hold Dublin expectations about how quickly a business answers the phone.",
        "That has two consequences. Spending power is above the national average, so premium work sells here in a way it does not in most counties. And patience is below it — a missed call on Tuesday is a booked competitor by Wednesday.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Kildare basically Dublin for advertising?",
        a: "Close, and getting closer. Costs sit below Dublin but well above the national average, and the customers behave like Dublin customers.",
      },
      {
        q: "Which towns matter most?",
        a: "Whichever you serve, but Naas, Newbridge, Maynooth and Celbridge hold the bulk of the commuter households with the money and the impatience.",
      },
      {
        q: "Does the equine industry matter commercially?",
        a: "For a small number of businesses, a great deal. For most, it is background. We will say which you are rather than building a campaign around it either way.",
      },
      {
        q: "How fast do we need to answer?",
        a: "Faster than you think. Commuter households compare three businesses in an evening and book whoever replies first.",
      },
    ],
  },
  {
    slug: "kilkenny",
    name: "Kilkenny",
    province: "Leinster",
    towns: ["Kilkenny city", "Callan", "Thomastown", "Castlecomer", "Graiguenamanagh", "Freshford", "Ballyragget", "Piltown"],
    intro: [
      "Kilkenny city is a compact, competitive local market where reputation travels fast, and the county around it is farms, villages and a lot of older housing that needs roofs, heating and renovations. Estate agents here compete for a small number of instructions in a market that watches every sale.",
      "We run campaigns for Kilkenny businesses built around the city and its hinterland, reported in enquiries and booked jobs rather than impressions.",
    ],
    focus: ["estate-agents", "roofers", "plumbers-and-heating"],
    hubSection: {
      heading: "Small, compact, and full of people who do not live here",
      body: [
        "Kilkenny's compactness is a commercial advantage: a business in the city can realistically serve most of the county, which makes the addressable market larger than the population suggests.",
        "The complication is the visitor economy. Festivals, tourism and weekend trade produce reach and engagement from people who will never be local customers, and separating them from the resident audience is worth doing deliberately.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Kilkenny too small a market?",
        a: "Under-contested rather than small. Fewer searches, much cheaper clicks and very few serious competitors.",
      },
      {
        q: "Do tourists distort the numbers?",
        a: "Yes, and flatteringly, which is worse. A campaign can look like it is working while producing nothing local.",
      },
      {
        q: "Can we serve the whole county?",
        a: "Most Kilkenny businesses genuinely can, which is unusual and worth building around.",
      },
      {
        q: "Does the craft and design reputation help?",
        a: "For the businesses it applies to, yes. You can present to a standard here that would look overdone elsewhere.",
      },
    ],
  },
  {
    slug: "laois",
    name: "Laois",
    province: "Leinster",
    towns: ["Portlaoise", "Portarlington", "Mountmellick", "Abbeyleix", "Mountrath", "Stradbally", "Rathdowney", "Durrow"],
    intro: [
      "Portlaoise and Portarlington have grown into commuter towns with a lot of newer housing, which means driveways, gardens, solar and extensions on estates that are ten to twenty years old. The rest of Laois is rural and buys from the businesses it knows.",
      "We run Laois campaigns around the M7 towns and the county behind them, with lead forms that qualify the job before you quote.",
    ],
    focus: ["driveways-and-paving", "solar-installers", "landscapers"],
    hubSection: {
      heading: "A county where most people are new",
      body: [
        "Portlaoise sits at the point where the M7 and the M8 separate, and that single fact turned a midlands town into one of the fastest-growing places in the country. The estates around it have filled with households that were not here ten years ago.",
        "Those households arrived without an inherited anyone. No family plumber, no electrician their parents always used, no salon they have gone to since school. Every supplier is an open question, settled on what they find online and what somebody two doors down says.",
        "That makes Laois unusually winnable and unusually unforgiving. Reviews carry more weight here than in a county where reputation travels by word of mouth, because a family who moved in last year has no other way of judging you at all.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Portlaoise different from the rest of Laois?",
        a: "Yes. It grew fast, it commutes, and its households spend and behave differently from Abbeyleix or Rathdowney.",
      },
      {
        q: "Are new estates worth targeting specifically?",
        a: "Here more than almost anywhere. Concentrated households, no established suppliers, and constant recommendations between neighbours.",
      },
      {
        q: "Is competition heavy?",
        a: "No. Very few Laois businesses advertise seriously, which keeps both search and social unusually cheap.",
      },
      {
        q: "Do reviews matter more here?",
        a: "Considerably. To a household that arrived last year they are the only evidence about you that exists.",
      },
    ],
  },
  {
    slug: "leitrim",
    name: "Leitrim",
    province: "Connacht",
    towns: ["Carrick-on-Shannon", "Manorhamilton", "Ballinamore", "Drumshanbo", "Mohill", "Kinlough", "Dromahair"],
    intro: [
      "Leitrim is the smallest market in the country by population, which is exactly why the map box matters so much here: there are only a handful of firms in each trade and the one Google shows first gets the call. Carrick-on-Shannon pulls work from Roscommon and Longford as well.",
      "We run tightly targeted campaigns for Leitrim businesses that cover the county and the neighbouring towns you already travel to.",
    ],
    focus: ["roofers", "builders-and-extensions", "plumbers-and-heating"],
    hubSection: {
      heading: "The smallest population in Ireland, and what follows from it",
      body: [
        "Leitrim has fewer residents than any other county, and the honest consequence is that search alone will not fill a diary here. On most days the number of people googling your service inside the county is close to zero, and an agency promising otherwise is selling you something.",
        "What Leitrim has instead is reach cheap enough to change what is possible. A modest monthly budget puts your work in front of most households in your catchment, repeatedly, for months — unaffordable in Dublin, routine here.",
        "It also has incomers. Affordable property has brought a steady flow of people doing up old houses, working remotely and retiring here, and they arrive needing everything and knowing nobody. For trades that is the most valuable audience in the county.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Leitrim too small to advertise in?",
        a: "For Google on its own, close to it. For Meta across a radius reaching into Roscommon, Sligo and Cavan, no — and it is very cheap.",
      },
      {
        q: "Should we target outside the county?",
        a: "Almost always. Carrick-on-Shannon's catchment pays no attention whatever to the county line.",
      },
      {
        q: "Is competition really that light?",
        a: "Yes. Few businesses here advertise seriously and fewer have a site that converts. The bar is low.",
      },
      {
        q: "Who are the newcomers?",
        a: "People drawn by affordable property — renovating, working remotely, retiring. No established suppliers, and actively looking.",
      },
    ],
  },
  {
    slug: "limerick",
    name: "Limerick",
    province: "Munster",
    towns: ["Limerick city", "Newcastle West", "Castletroy", "Raheen", "Adare", "Abbeyfeale", "Kilmallock", "Rathkeale", "Croom", "Ardagh", "Castleconnell"],
    intro: [
      "Limerick city and its suburbs from Castletroy to Raheen are a busy home-improvement and property market, while west Limerick towns like Newcastle West and Abbeyfeale are a different economy with their own tradespeople. Solar and heat-pump demand has grown fast across both.",
      "We run separate targeting for the city and the county, and report weekly in enquiries, valuations and booked jobs.",
    ],
    focus: ["estate-agents", "solar-installers", "roofers"],
    hubSection: {
      heading: "A city that is smaller than its reputation",
      body: [
        "Limerick city is compact and its commercial catchment extends well into Clare and north Tipperary, which makes the addressable market considerably larger than the city population implies.",
        "It is also under-contested online. Relatively few Limerick businesses advertise seriously, and fewer still have a website that converts, so the standard you need to beat is lower than in Cork or Dublin.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Limerick a difficult market?",
        a: "Less than people assume. Competition online is light and most competitor websites are poor, which is an opportunity rather than an obstacle.",
      },
      {
        q: "Does our catchment cross into Clare?",
        a: "For most Limerick businesses, yes — and it should be targeted deliberately rather than left to chance at the county boundary.",
      },
      {
        q: "Is 'digital marketing Limerick' worth targeting?",
        a: "Honestly, not much. That search is dominated by courses and jobs — TUS, UL, Indeed. The searches worth winning name a service and a problem.",
      },
      {
        q: "How quickly can we move?",
        a: "Paid within days. Organic faster than a larger city, because the foundations most competitors lack are straightforward to put in.",
      },
    ],
  },
  {
    slug: "longford",
    name: "Longford",
    province: "Leinster",
    towns: ["Longford town", "Edgeworthstown", "Granard", "Ballymahon", "Lanesborough", "Drumlish"],
    intro: [
      "Longford is a compact county where most trades work is roofing, heating, renovations and farm buildings, and where a business with a full Google profile and steady reviews can dominate a town within months. Longford town also pulls from Roscommon and Westmeath across the Shannon.",
      "We run campaigns for Longford businesses around the towns you cover, qualified before the phone rings.",
    ],
    focus: ["roofers", "plumbers-and-heating", "builders-and-extensions"],
    hubSection: {
      heading: "One town, and a resort that changed the south",
      body: [
        "Longford is unusual among the midland counties in having an unambiguous centre. Longford town holds most of the retail, services and employment, and the surrounding towns feed into it rather than competing with it.",
        "That simplifies the hardest question in most rural counties. Here it is not which of four catchments to pick, it is simply how far out from one town you are willing to drive.",
        "The exception is the south, where a large holiday resort near Ballymahon brought steady visitor traffic and year-round employment to an area that had neither. For businesses at that end of the county it is a genuine second market with its own rhythm.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Longford too small to advertise in?",
        a: "For search alone it is thin. With Meta carrying the weight and search catching active buyers it works well, and it is cheap.",
      },
      {
        q: "Does the Ballymahon resort matter commercially?",
        a: "In the south of the county, genuinely. Visitors, staff and the households that moved in around it are a separate market.",
      },
      {
        q: "Should we target outside the county?",
        a: "If you travel, yes. Parts of Roscommon, Westmeath and Leitrim are closer to some Longford businesses than the far end of Longford.",
      },
      {
        q: "Is competition heavy?",
        a: "Among the lightest in Ireland. Very few businesses here advertise seriously online.",
      },
    ],
  },
  {
    slug: "louth",
    name: "Louth",
    province: "Leinster",
    towns: ["Drogheda", "Dundalk", "Ardee", "Dunleer", "Carlingford", "Blackrock", "Termonfeckin"],
    intro: [
      "Louth is two large towns with two different markets: Drogheda faces Dublin and east Meath, Dundalk faces the border and Newry. Both are dense with tradespeople and estate agents, and both have homeowners who compare quotes online before they ring anyone.",
      "We run Drogheda and Dundalk campaigns separately for Louth businesses, with creative for each town and lead forms that qualify the job.",
    ],
    focus: ["estate-agents", "bathroom-renovations", "solar-installers"],
    hubSection: {
      heading: "The smallest county with two of the biggest towns",
      body: [
        "Drogheda and Dundalk are each large enough to sustain a business on their own, they are twenty minutes apart, and their residents barely cross between them for ordinary services.",
        "Louth also sits on the Dublin–Belfast corridor. Drogheda looks south and prices like it; Dundalk looks north as much as south, and cross-border price comparison is a live factor here in a way it is nowhere else in the Republic.",
      ],
    },
    hubFaqs: [
      {
        q: "Should Drogheda and Dundalk share a campaign?",
        a: "No. They are twenty minutes apart and their customers do not overlap. One campaign across both wastes roughly half the budget.",
      },
      {
        q: "Is Drogheda basically Dublin?",
        a: "For advertising costs, increasingly. Commuter households and Dublin competitors push prices well above the county average.",
      },
      {
        q: "Does the border affect us?",
        a: "In some Dundalk categories, materially. Where it does, competing on price is a losing move and we will say so.",
      },
      {
        q: "Is estate-level targeting worth it?",
        a: "In both towns, yes. Both have expanded fast and the newer developments hold concentrated groups of similar households.",
      },
    ],
  },
  {
    slug: "mayo",
    name: "Mayo",
    province: "Connacht",
    towns: ["Castlebar", "Ballina", "Westport", "Claremorris", "Ballinrobe", "Belmullet", "Swinford", "Knock", "Ballyhaunis"],
    intro: [
      "Mayo is a large county with the work concentrated in Castlebar, Ballina and Westport, and long distances between the rest. Renovation and roofing demand is steady, solar is growing, and Westport's holiday-home market behaves like a coastal county of its own.",
      "We build Mayo campaigns around real travel distances and the towns you already serve, and report in enquiries and jobs booked.",
    ],
    focus: ["roofers", "solar-installers", "builders-and-extensions"],
    hubSection: {
      heading: "Where driving time replaces distance",
      body: [
        "Mayo is large, thinly populated and served by three towns that do not dominate it. Castlebar, Ballina and Westport each anchor their own area, and the distances between and beyond them make a radius drawn on a map close to meaningless.",
        "Every campaign we build here starts with an honest answer to how far you will actually travel, because in Mayo that single decision does more for the cost per enquiry than any other setting on the account.",
      ],
    },
    hubFaqs: [
      {
        q: "How wide should we target?",
        a: "As far as you will genuinely drive and no further. In Mayo that is usually much smaller than the county.",
      },
      {
        q: "Is Mayo too rural for online advertising?",
        a: "Under-contested, which is different. Cheap reach, light competition and exceptionally well-followed community networks.",
      },
      {
        q: "Can we reach people who moved away?",
        a: "To a useful degree, and almost nobody tries. People with Mayo connections return, buy property and renovate — a real vein for building trades.",
      },
      {
        q: "Should tourism and local trade run separately?",
        a: "Yes, if you do both. The seasons, the customers and the messaging have almost nothing in common.",
      },
    ],
  },
  {
    slug: "meath",
    name: "Meath",
    province: "Leinster",
    towns: ["Navan", "Ashbourne", "Trim", "Kells", "Ratoath", "Dunboyne", "Dunshaughlin", "Bettystown", "Laytown", "Enfield", "Athboy"],
    intro: [
      "Meath is commuter country with a rural county behind it. Navan, Ashbourne and Ratoath are estates of family homes where driveways, gardens, extensions and solar are constant work, and where an estate agent's next instruction is decided by who the homeowner has seen in the last six months.",
      "We run campaigns for Meath businesses from the Dublin border out to Kells and Athboy, with lead forms that qualify the job before you visit.",
    ],
    focus: ["estate-agents", "driveways-and-paving", "landscapers"],
    hubSection: {
      heading: "Two counties wearing one name",
      body: [
        "East Meath — Ashbourne, Dunboyne, Ratoath — is Dublin commuter belt in everything but the postal address, with the incomes, the expectations and the advertising costs that go with it.",
        "West and north Meath, out through Trim, Athboy and Kells, is agricultural and priced accordingly. Running one Meath campaign averages two markets that have almost nothing in common and serves neither.",
      ],
    },
    hubFaqs: [
      {
        q: "Should east and west Meath share a campaign?",
        a: "No. The difference in cost and customer between Ashbourne and Athboy is larger than the difference between many separate counties.",
      },
      {
        q: "Is east Meath as expensive as Dublin?",
        a: "Approaching it. Commuter households attract Dublin-based competitors who advertise into the area.",
      },
      {
        q: "Which towns are worth most?",
        a: "Depends entirely on what you sell. Premium home improvement follows the commuter belt; agricultural and trade services follow the west.",
      },
      {
        q: "Do we compete with Dublin firms?",
        a: "In the commuter towns, constantly. Being visibly local is the most effective counter, and it costs nothing.",
      },
    ],
  },
  {
    slug: "monaghan",
    name: "Monaghan",
    province: "Ulster",
    towns: ["Monaghan town", "Carrickmacross", "Castleblayney", "Clones", "Ballybay", "Emyvale"],
    intro: [
      "Monaghan is a border county with a strong trades economy: construction, engineering and agriculture feed a steady stream of roofing, heating and renovation work, and Carrickmacross pulls homeowners from north Louth and Meath. Businesses here quote against Armagh firms as often as Cavan ones.",
      "We run Monaghan campaigns around the towns you cover on both sides of the county, qualified before the phone rings.",
    ],
    focus: ["roofers", "plumbers-and-heating", "solar-installers"],
    hubSection: {
      heading: "A county that makes things",
      body: [
        "Monaghan has an industrial base most rural counties never developed. Food processing, poultry, engineering and a dense layer of family-owned manufacturing employ a great many people, and much of the county's commerce is business-to-business rather than consumer.",
        "That changes what good advertising looks like. A supplier here might need twelve customers a year where a plumber needs twelve a fortnight, and campaigns built for households will waste most of a B2B budget.",
        "For a lot of Monaghan employers the more pressing problem is not sales at all but staff, and paid social is the cheapest recruitment channel available. Very few businesses in the county use it that way.",
      ],
    },
    hubFaqs: [
      {
        q: "Does B2B advertising work here?",
        a: "Better than most Monaghan manufacturers expect, because so few competitors advertise that buyers searching find very little.",
      },
      {
        q: "Can social really help us hire?",
        a: "Yes, and cheaply. It reaches people who are not actively job-hunting, which job boards by definition cannot.",
      },
      {
        q: "Should we advertise north of the border?",
        a: "If you trade or hire there, yes. A good share of Monaghan's natural catchment is in Armagh and Tyrone.",
      },
      {
        q: "Is consumer trade worth advertising?",
        a: "Yes, and separately. Different customer, different budget, different measure of success.",
      },
    ],
  },
  {
    slug: "offaly",
    name: "Offaly",
    province: "Leinster",
    towns: ["Tullamore", "Birr", "Edenderry", "Clara", "Banagher", "Ferbane", "Kilcormac"],
    intro: [
      "Tullamore is the centre of the midlands and its businesses draw from Westmeath and Laois as well as Offaly, while Edenderry is effectively a Kildare commuter town. Home-improvement demand is steady and there are fewer firms competing for it than in the east.",
      "We run Offaly campaigns around Tullamore, Birr and Edenderry, with lead forms that qualify the job and the location first.",
    ],
    focus: ["solar-installers", "roofers", "estate-agents"],
    hubSection: {
      heading: "A county that has been rebuilt",
      body: [
        "Offaly's economy changed more than most in the last decade. The wind-down of the bogs took a major employer out of the middle of the county, and what replaced it is more varied and far more spread out.",
        "Its three main towns now behave as separate places. Tullamore is the commercial centre, Birr is a heritage and tourism town with a seasonal element, and Edenderry increasingly looks east toward Kildare and Dublin.",
        "A quieter change matters just as much commercially: a significant share of households now work from home part of the week. Midweek daytime appointments are viable in a way they were not before, and almost nobody advertises that they can do them.",
      ],
    },
    hubFaqs: [
      {
        q: "Should Tullamore, Birr and Edenderry share a campaign?",
        a: "No. They are far apart, with different customers, and Edenderry increasingly looks toward Kildare.",
      },
      {
        q: "Has the bog closure changed the market?",
        a: "It changed what the county runs on and where people work. The customer base is different in composition rather than smaller.",
      },
      {
        q: "Does remote working matter?",
        a: "More than most expect. It makes midweek daytime work viable, and very few businesses say they can do it.",
      },
      {
        q: "Is competition heavy?",
        a: "No. Competition across Offaly is light and competitor foundations are usually weak.",
      },
    ],
  },
  {
    slug: "roscommon",
    name: "Roscommon",
    province: "Connacht",
    towns: ["Roscommon town", "Boyle", "Castlerea", "Ballaghaderreen", "Strokestown", "Monksland", "Athlone (west)", "Elphin"],
    intro: [
      "Roscommon's work is spread across small towns and a growing suburb of Athlone at Monksland, and most of it is roofing, heating, renovations and farm buildings for homeowners who have used the same tradesman for twenty years. The businesses that grow here are the ones that show up when that tradesman is busy.",
      "We run campaigns for Roscommon businesses around the towns you cover and the Athlone catchment, reported in enquiries and booked jobs.",
    ],
    focus: ["roofers", "builders-and-extensions", "plumbers-and-heating"],
    hubSection: {
      heading: "A county whose centres are in other counties",
      body: [
        "Roscommon is long, thinly populated and has no town big enough to anchor it. Roscommon town, Boyle, Castlerea and Ballaghaderreen are all modest.",
        "Its real commercial centres mostly sit outside its own borders — Athlone at one end, Carrick-on-Shannon at another, Ballinasloe and Longford at the edges — so nearly every business here has a catchment that crosses the county line.",
        "That is not a problem to solve, it is simply the shape of the place. Campaigns are drawn around whichever centre your customers actually use, and that single decision does more for results here than anything else.",
      ],
    },
    hubFaqs: [
      {
        q: "Should we advertise outside Roscommon?",
        a: "Almost certainly. Most of the county's commercial centres are outside its borders and your customers already use them.",
      },
      {
        q: "Is the county too rural for online advertising?",
        a: "Under-contested rather than too rural. Cheap reach, light competition, and well-followed parish and club pages.",
      },
      {
        q: "Why lead with Meta rather than Google?",
        a: "Google only reaches people already searching, and in a county this size that is a very small number on any given day.",
      },
      {
        q: "How quickly does SEO work here?",
        a: "Faster than most places, because competition is light and competitor foundations are poor.",
      },
    ],
  },
  {
    slug: "sligo",
    name: "Sligo",
    province: "Connacht",
    towns: ["Sligo town", "Ballymote", "Tubbercurry", "Enniscrone", "Strandhill", "Collooney", "Ballisodare", "Grange"],
    intro: [
      "Sligo town is the service centre for the whole north-west, so a Sligo business is quoting for homeowners in Leitrim, north Mayo and south Donegal as well. The coast from Strandhill to Enniscrone adds holiday homes and renovations to a steady year-round trade.",
      "We build Sligo campaigns around that wider catchment, with separate targeting for the town and the coast, and qualify every enquiry first.",
    ],
    focus: ["estate-agents", "roofers", "solar-installers"],
    hubSection: {
      heading: "The capital of the northwest",
      body: [
        "Sligo town serves a region far larger than its county. People travel in from south Donegal, north Mayo and most of Leitrim for services they cannot get closer, which gives a business here a catchment several times the county's own population.",
        "Most local advertising ignores that completely, targeting Sligo alone and leaving the regional market to whoever thought to ask for it. It is the single biggest opportunity in the county.",
        "It also means your advertising has a job a purely local business never has: convincing somebody in Ballina or Manorhamilton that the drive is worth making. That changes the copy substantially, and almost nobody makes the argument.",
      ],
    },
    hubFaqs: [
      {
        q: "Should we target outside the county?",
        a: "Yes, and most Sligo businesses badly under-do it. The town serves a region several times its county population.",
      },
      {
        q: "Do students distort the numbers?",
        a: "For most service businesses, yes — reachable, cheap and irrelevant, which is the worst combination.",
      },
      {
        q: "How do we justify the drive?",
        a: "By being specific about what you offer that is not available closer, and by making the practical details easy.",
      },
      {
        q: "Does the coast help commercially?",
        a: "For anything with a visual element, considerably. Sligo gives you better raw material than most counties.",
      },
    ],
  },
  {
    slug: "tipperary",
    name: "Tipperary",
    province: "Munster",
    towns: ["Clonmel", "Thurles", "Nenagh", "Tipperary town", "Carrick-on-Suir", "Cashel", "Roscrea", "Cahir", "Templemore", "Fethard"],
    intro: [
      "Tipperary is really three markets: Clonmel and the south, Thurles and Cashel in the middle, and Nenagh and Roscrea in the north, which look towards Limerick. A campaign that targets 'Tipperary' as one place spends most of its budget on people three hours' drive from your yard.",
      "We run Tipperary campaigns by region, built around the towns you actually cover, with lead forms that qualify the job and the location.",
    ],
    focus: ["roofers", "solar-installers", "landscapers"],
    hubSection: {
      heading: "Four towns, no capital",
      body: [
        "Tipperary is the largest inland county in Ireland and has no dominant centre. Clonmel, Thurles, Nenagh and Carrick-on-Suir each anchor their own catchment and a business in one is effectively invisible in the others.",
        "The practical consequence is that a county-wide campaign here is four campaigns' worth of reach paid for to serve one town's worth of customers.",
      ],
    },
    hubFaqs: [
      {
        q: "Should we advertise across the whole county?",
        a: "Almost never. Pick the catchments you genuinely serve; the county is too large and too dispersed to buy whole.",
      },
      {
        q: "Which town should we start in?",
        a: "Wherever most of your current work comes from. That is usually the cheapest place to get more of it.",
      },
      {
        q: "Does the agricultural economy matter?",
        a: "For some businesses substantially. It is seasonal and relationship-led and reached differently from ordinary consumer demand.",
      },
      {
        q: "Is competition heavy?",
        a: "No. Online competition across Tipperary is light, which makes organic search unusually winnable.",
      },
    ],
  },
  {
    slug: "waterford",
    name: "Waterford",
    province: "Munster",
    towns: ["Waterford city", "Dungarvan", "Tramore", "Lismore", "Dunmore East", "Ardmore", "Portlaw", "Kilmacthomas"],
    intro: [
      "Waterford city and Tramore are a compact, busy market for estate agents, bathroom fitters and solar installers, while Dungarvan and west Waterford run on their own with strong local loyalty. Solar demand along the south coast is among the highest in the country.",
      "We run city and west-county campaigns separately for Waterford businesses, reported weekly in enquiries, surveys and valuations booked.",
    ],
    focus: ["solar-installers", "estate-agents", "bathroom-renovations"],
    hubSection: {
      heading: "A city, a coast and a farming county",
      body: [
        "Waterford city holds the bulk of the county's commercial activity, the coast from Tramore round to Dungarvan runs on a short and intense season, and the inland county is agricultural and steady.",
        "The three do not share customers, and the businesses that do well here are explicit about which of the three they actually serve rather than buying county-wide reach.",
      ],
    },
    hubFaqs: [
      {
        q: "Is Waterford city competitive?",
        a: "Less than its size suggests. Relatively few businesses advertise seriously, which makes a modest budget go further than it would in Cork.",
      },
      {
        q: "How seasonal is the coast?",
        a: "Sharply, around Tramore and Dungarvan. Budget should follow the season rather than sitting flat across the year.",
      },
      {
        q: "Should we target Kilkenny too?",
        a: "Only if you genuinely travel there. The boundary is close but the two markets do not overlap much for local services.",
      },
      {
        q: "How quickly does organic search move here?",
        a: "Faster than a larger city. Competition for most Waterford terms is light.",
      },
    ],
  },
  {
    slug: "westmeath",
    name: "Westmeath",
    province: "Leinster",
    towns: ["Athlone", "Mullingar", "Moate", "Kilbeggan", "Castlepollard", "Kinnegad", "Rochfortbridge"],
    intro: [
      "Athlone and Mullingar are two of the fastest-growing towns in the midlands, with new estates that need driveways, gardens, solar and extensions and a property market that has become competitive for instructions. Athlone businesses also serve south Roscommon across the river.",
      "We run Westmeath campaigns for each town separately, with lead forms that qualify the job before you quote.",
    ],
    focus: ["estate-agents", "driveways-and-paving", "solar-installers"],
    hubSection: {
      heading: "Two capitals facing opposite ways",
      body: [
        "Westmeath has two substantial towns that point in different directions. Athlone sits on the Shannon at the middle of the country; Mullingar looks east along the N4 toward Dublin.",
        "They are an hour apart and their customers barely overlap. Athlone's catchment reaches into Roscommon, east Galway and north Offaly and it functions as the commercial centre for all of them — the most under-used fact in the county.",
        "Mullingar is commuter territory, with commuter incomes and commuter impatience. A campaign covering both towns is usually two campaigns' worth of spend doing one campaign's work.",
      ],
    },
    hubFaqs: [
      {
        q: "Should Athlone and Mullingar share a campaign?",
        a: "No. They are an hour apart, face opposite directions, and their customers barely overlap.",
      },
      {
        q: "Is Athlone's catchment really that wide?",
        a: "Yes, and it is routinely missed. It reaches into Roscommon, east Galway and north Offaly.",
      },
      {
        q: "Is Mullingar different?",
        a: "Meaningfully. Commuter households with higher incomes and much less patience for a slow reply.",
      },
      {
        q: "Do the waterways matter?",
        a: "For hospitality and leisure, genuinely, and seasonally — with visitors reachable before they travel.",
      },
    ],
  },
  {
    slug: "wexford",
    name: "Wexford",
    province: "Leinster",
    towns: ["Wexford town", "Gorey", "Enniscorthy", "New Ross", "Rosslare", "Bunclody", "Courtown", "Kilmore Quay"],
    intro: [
      "Wexford is four towns with four markets and a coast full of holiday homes. Gorey is a Dublin commuter town, Wexford town and Rosslare are the busiest property market, and Enniscorthy and New Ross are trades towns with strong local names. Solar and heat-pump demand in the sunny south-east is the highest in Ireland.",
      "We run Wexford campaigns town by town, with creative for each and lead forms that qualify the job first.",
    ],
    focus: ["solar-installers", "estate-agents", "roofers"],
    hubSection: {
      heading: "A county with two different years",
      body: [
        "The Wexford coast from Courtown down to Rosslare fills in summer and empties in winter, and a business serving it is running two different years under one roof.",
        "Gorey complicates it further, sitting close enough to the Dublin commuter belt that its households have different incomes, different expectations and noticeably different advertising costs from New Ross or Bunclody.",
      ],
    },
    hubFaqs: [
      {
        q: "How seasonal is this really?",
        a: "For anything coastal, severely. Flat monthly budgets suit almost nobody here.",
      },
      {
        q: "Can we reach visitors before they arrive?",
        a: "Yes, and almost nobody does. Returning households are reachable in spring from wherever they actually live, well before they travel.",
      },
      {
        q: "Is Gorey different from the rest of Wexford?",
        a: "Meaningfully. Commuter incomes, commuter expectations and commuter click prices.",
      },
      {
        q: "What should we do in the off-season?",
        a: "The work that compounds — reviews, content, the website — rather than buying attention for something nobody is currently buying.",
      },
    ],
  },
  {
    slug: "wicklow",
    name: "Wicklow",
    province: "Leinster",
    towns: ["Bray", "Greystones", "Wicklow town", "Arklow", "Blessington", "Baltinglass", "Newtownmountkennedy", "Enniskerry", "Rathdrum", "Kilcoole"],
    intro: [
      "North Wicklow from Bray to Greystones is one of the most affluent home-improvement markets in the country, and the south from Wicklow town to Arklow is growing fast behind it. Homeowners here pay for quality and check reviews before they ring, which rewards businesses that present their work properly.",
      "We run Wicklow campaigns for the coast and the west of the county separately, reported in enquiries and booked work every Friday.",
    ],
    focus: ["landscapers", "builders-and-extensions", "estate-agents"],
    hubSection: {
      heading: "Wealth, terrain and a long north-south split",
      body: [
        "Wicklow has the highest concentration of high-value housing outside south Dublin along its northern coastal strip, and a genuinely rural southern half around Tinahely, Shillelagh and Carnew that behaves nothing like it.",
        "The mountains in between are not a detail. They make north-to-south travel slow enough that a Bray business and an Arklow business are, in practice, serving different counties.",
      ],
    },
    hubFaqs: [
      {
        q: "Is the whole county worth targeting?",
        a: "Almost never. The mountains make cross-county travel slow, so most Wicklow businesses genuinely serve one side of them.",
      },
      {
        q: "Is north Wicklow expensive to advertise in?",
        a: "Yes — Dublin-adjacent costs and Dublin-based competitors. It also holds the highest-value work in the county.",
      },
      {
        q: "Does premium positioning work here?",
        a: "In the north, better than almost anywhere in Ireland. In the south, it will cost you enquiries.",
      },
      {
        q: "How do we reach the rural south?",
        a: "Community networks and Meta rather than search volume, which is thin down there.",
      },
    ],
  },
];

export const countyBySlug = (slug: string) =>
  counties.find((c) => c.slug === slug);

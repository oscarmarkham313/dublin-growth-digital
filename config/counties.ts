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
  hubSection?: { heading: string; body: [string, string] };
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

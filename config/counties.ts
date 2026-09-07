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
  },
];

export const countyBySlug = (slug: string) =>
  counties.find((c) => c.slug === slug);

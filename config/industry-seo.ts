/**
 * SEO × industry pages — /industries/[slug]/seo.
 *
 * Evidence: "landscaping seo ireland" already earns impressions at
 * position 78 with no page targeting it. That is an industry-plus-SEO
 * query, a pattern the site had never built for — every SEO page was
 * geographic.
 *
 * The axis is worth having because SEO genuinely differs by trade in a
 * way that geography does not always capture. An emergency plumber lives
 * or dies on the map pack; a solicitor cannot advertise the same way a
 * roofer can; an estate agent is competing with Daft and MyHome rather
 * than with other agents; a restaurant's Google profile effectively IS
 * its website. Those are different problems, not one problem with
 * different nouns.
 *
 * Only industries where that difference is real are included. There is
 * no value in an SEO page for every one of the 106 niches.
 */

export interface IndustrySeo {
  /** must match an industry slug in config/industries.ts */
  slug: string;
  /** industry label as used in copy */
  label: string;
  title: string;
  description: string;
  h1: string;
  intro: [string, string];
  /** what makes SEO different for this trade */
  sections: { heading: string; body: string[]; list?: { title: string; body: string }[] }[];
  faqs: { q: string; a: string }[];
}

const COMMON_FAQS = [
  {
    q: "Do you guarantee rankings?",
    a: "No, and nobody honest does. We report enquiries and what they cost, with rankings as a diagnostic rather than the deliverable.",
  },
  {
    q: "What does it cost?",
    a: "SEO is included in the €1,500 a month alongside everything else. There is no separate SEO fee and no setup fee.",
  },
];

export const industrySeo: IndustrySeo[] = [
  {
    slug: "roofers",
    label: "roofers",
    title: "SEO for Roofers Ireland | Roofing SEO That Gets Calls",
    description:
      "SEO for Irish roofing contractors: the map pack, storm-week demand and the emergency searches that actually produce call-outs.",
    h1: "SEO for roofers, judged on call-outs.",
    intro: [
      "Roofing search is almost entirely urgent. Somebody notices water coming in, they search, they ring one of the first three results, and the whole decision takes under an hour. That makes the map pack close to the entire game for a roofer, and the website a distant second.",
      "It also means roofing SEO is not really about content. It is about being one of the three businesses shown on a phone when somebody in your area has a problem right now.",
    ],
    sections: [
      {
        heading: "The map pack is the product",
        body: [
          "For most trades the map results matter. For roofing they are close to decisive, because the searches are urgent and mobile and nobody scrolls past three options when the ceiling is dripping.",
          "That shifts the work heavily toward your Google Business Profile, your reviews and your proximity to the searcher — and away from the blog content most SEO packages consist of.",
        ],
        list: [
          {
            title: "Primary category set to Roofing contractor",
            body: "Not Contractor, not Construction company. Google matches category before it matches anything you have written.",
          },
          {
            title: "Every service listed individually",
            body: "Roof repair, re-roofing, flat roofing, gutter replacement, chimney flashing, storm damage. Each is a phrase somebody searches.",
          },
          {
            title: "Service area set to real towns",
            body: "And the address hidden, because a roofer travels rather than receiving customers at a premises.",
          },
          {
            title: "Reviews, continuously",
            body: "The single biggest differentiator between roofers who are equally close to the searcher.",
          },
        ],
      },
      {
        heading: "Storm weeks are the whole year compressed",
        body: [
          "A roofing business can do a month's search volume in three days after a bad storm, and the businesses that capture it are the ones already ranking when the wind drops — not the ones that start optimising afterwards.",
          "That is the argument for doing this work in a quiet month. You are not buying rankings for today; you are buying position for the week the weather turns, which is the only week that matters.",
        ],
      },
      {
        heading: "What roofing content is actually for",
        body: [
          "Almost nobody reads a blog post before ringing a roofer in an emergency. Roofing content earns its place differently: it answers the questions people ask before a planned re-roof, which is a longer decision with a much larger job at the end.",
          "Cost guides, material comparisons and 'how long does a roof last' pieces bring in the planned work. The emergency work comes from the map pack. Both are worth having and they are won in completely different ways.",
        ],
      },
    ],
    faqs: [
      {
        q: "What matters most for a roofing business?",
        a: "Your Google Business Profile and reviews, by a wide margin. Roofing searches are urgent and mobile, and almost nobody scrolls past the first three map results.",
      },
      {
        q: "Is blog content worth it for a roofer?",
        a: "For planned re-roofs and cost research, yes. For emergency call-outs, no — those people are not reading anything. Both matter and they are won differently.",
      },
      {
        q: "When should we start?",
        a: "In a quiet month. You are buying position for the week after the next storm, and that position takes time to build.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "landscapers",
    label: "landscapers",
    title: "SEO for Landscapers Ireland | Landscaping SEO",
    description:
      "SEO for Irish landscapers and garden companies: image search, seasonal demand and the long consideration a garden project actually involves.",
    h1: "SEO for landscapers, built around a long decision.",
    intro: [
      "Nobody wakes up needing a landscaper the way they wake up needing a plumber. A garden project is imagined for months before anybody searches, and by the time they do, they have a picture in their head of what they want.",
      "That makes landscaping SEO an unusually visual problem, and it makes image search matter more here than in almost any trade we work with.",
    ],
    sections: [
      {
        heading: "Your photographs are search results too",
        body: [
          "People planning a garden search in images, save what they like and work backwards to who built it. Every photograph on your site is a potential entry point, and most landscaping sites treat them as decoration.",
          "Properly named files, real alt text describing what is actually in the picture, and pages built around a single project rather than a gallery of everything — that is what turns a photo library into search traffic.",
        ],
      },
      {
        heading: "Project pages beat service pages",
        body: [
          "A page called 'Landscaping Services' ranks for very little. A page about a specific garden — the problem, the materials, the cost range, the photographs, the town — ranks for a great many long, specific searches made by people who want exactly that.",
          "It is also the format that converts, because somebody planning a garden is looking for evidence that you have built the thing they are imagining.",
        ],
        list: [
          {
            title: "One page per completed project",
            body: "With the town named, the materials listed and a realistic cost range. Ten of these beat one services page.",
          },
          {
            title: "Material and feature pages",
            body: "Porcelain paving, sandstone, artificial grass, garden rooms, raised beds. People search the thing, not the trade.",
          },
          {
            title: "Cost guidance",
            body: "The most searched and least answered question in this trade. Answering it honestly filters out the people who were never going to proceed.",
          },
        ],
      },
      {
        heading: "The season decides when this pays",
        body: [
          "Landscaping demand concentrates into spring and early summer, and search interest starts climbing in January — well before anybody rings.",
          "Which means the work has to be done in autumn and winter to be in place. A landscaper starting SEO in April has missed the year, and we would rather say that than take the fee and report on rankings in July.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does image search matter for landscapers?",
        a: "Because people plan gardens visually. They search images, save what they like, then work backwards to who built it. Most landscaping sites treat photographs as decoration rather than as entry points.",
      },
      {
        q: "Should we publish project pages or service pages?",
        a: "Project pages, by a distance. A specific garden with photographs, materials, a town and a cost range ranks for far more than a generic services page.",
      },
      {
        q: "When should we start?",
        a: "Autumn or winter. Search interest climbs from January and the work takes months to land, so starting in April means missing the season.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "plumbers-and-heating",
    label: "plumbers and heating engineers",
    title: "SEO for Plumbers Ireland | Plumbing & Heating SEO",
    description:
      "SEO for Irish plumbers and heating engineers: emergency map pack visibility and the separate, slower search for boiler and heat pump work.",
    h1: "SEO for plumbers, split between emergency and planned.",
    intro: [
      "Plumbing search is two completely different businesses sharing a trade name. An emergency — a burst pipe, no heat, a leak — is decided in minutes from the map pack. A boiler replacement or a heat pump is researched for weeks before anybody makes contact.",
      "Optimising for one does almost nothing for the other, and most plumbing websites are built as though there is only one kind of customer.",
    ],
    sections: [
      {
        heading: "Emergency work is won in the map pack, at speed",
        body: [
          "Somebody with water coming through a ceiling does not read anything. They tap the first number that looks local and has reviews, and if it rings out they tap the next one.",
          "So the emergency side of this is a profile-and-reviews problem, plus answering the phone. No amount of content ranks you above a competitor who is closer and has more reviews.",
        ],
      },
      {
        heading: "Installation work is won with patience and honesty",
        body: [
          "A homeowner considering a heat pump or a new boiler will read for weeks — grant eligibility, running costs, whether their house is suitable, what it actually costs.",
          "That audience rewards genuinely useful content, and it punishes the vague reassurance most plumbing sites offer. A page that explains honestly when a heat pump is a bad idea will outperform ten pages saying you are committed to quality.",
        ],
        list: [
          {
            title: "Grant and scheme pages",
            body: "What is available, who qualifies, what the process involves. The most searched thing in this category and the least well answered.",
          },
          {
            title: "Suitability content",
            body: "When a heat pump makes sense and when it does not. This wins trust and filters out the enquiries that would have wasted a survey.",
          },
          {
            title: "Running cost comparisons",
            body: "Oil, gas, heat pump, with real Irish figures. People search this constantly and almost nobody answers it properly.",
          },
        ],
      },
      {
        heading: "Do not let the two share a page",
        body: [
          "An emergency page that also explains heat pump grants serves neither reader. The person with a burst pipe wants a number; the person considering a heat pump wants twenty minutes of reading.",
          "Separate pages, separate intent, separate calls to action. It is the simplest structural improvement available on most plumbing websites.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should emergency and installation work be separate?",
        a: "Always. One is decided in minutes from the map pack, the other is researched for weeks. A page trying to serve both serves neither.",
      },
      {
        q: "What wins emergency work?",
        a: "Proximity, reviews and answering the phone. Content does almost nothing there — nobody with a burst pipe is reading.",
      },
      {
        q: "What content actually works for installations?",
        a: "Grant eligibility, suitability and running costs, answered honestly. Saying when a heat pump is a bad idea builds more trust than any claim about quality.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "dentists",
    label: "dental practices",
    title: "SEO for Dentists Ireland | Dental Practice SEO",
    description:
      "SEO for Irish dental practices: treatment-led pages, the emergency searches that fill gaps, and why reviews decide the map pack.",
    h1: "SEO for dental practices, treatment by treatment.",
    intro: [
      "Patients do not search for dentists. They search for what is wrong or what they want — a broken tooth, an implant, aligners, a whitening price — and a practice with one page saying 'our services' ranks for almost none of it.",
      "Dental SEO is mostly the unglamorous work of having a real page for each treatment, with a real price, and enough reviews to win the map pack when somebody is in pain.",
    ],
    sections: [
      {
        heading: "One page per treatment, with a price",
        body: [
          "Implants, veneers, aligners, crowns, root canal, hygiene, emergency appointments. Each is a separate search with separate intent and separate competition, and each deserves its own page.",
          "Price is the part most practices avoid and the part patients search hardest for. A range with the conditions attached converts far better than 'contact us for a quote', and it filters out the enquiries that were never going to proceed.",
        ],
      },
      {
        heading: "Emergency searches fill the gaps in a diary",
        body: [
          "'Emergency dentist' and its variants are high-volume, high-urgency and decided almost entirely by the map pack and by whether the phone is answered.",
          "For a practice with gaps in the book, this is the fastest-converting traffic available, and it needs its own page saying plainly whether you take emergencies, how quickly and at what cost.",
        ],
      },
      {
        heading: "Regulatory care, and why it helps",
        body: [
          "Dental advertising in Ireland is subject to professional standards that restrict how treatments and outcomes can be presented, and some of what practices would like to claim cannot be claimed.",
          "That is worth treating as an advantage rather than a constraint. Writing to what you can genuinely stand over produces pages that read as trustworthy in a category where plenty of competitors sound like they are overselling — and it keeps the practice out of trouble.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we publish treatment prices?",
        a: "A range at minimum. It is the most searched thing in dental and the least often answered, and hiding it loses more enquiries than it protects.",
      },
      {
        q: "Is 'emergency dentist' worth targeting?",
        a: "For a practice with gaps in the diary it is the fastest-converting traffic available, and it is decided by the map pack and by answering the phone.",
      },
      {
        q: "How do professional advertising standards affect this?",
        a: "They restrict how treatments and outcomes can be presented. We write to what you can stand over, which keeps you compliant and reads as more trustworthy than competitors who oversell.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "solicitors",
    label: "solicitors",
    title: "SEO for Solicitors Ireland | Law Firm SEO",
    description:
      "SEO for Irish law firms: practice-area pages, the restrictions on legal advertising, and why one client can justify the whole year.",
    h1: "SEO for solicitors, one practice area at a time.",
    intro: [
      "Legal SEO in Ireland operates under real constraints. Advertising in respect of personal injuries is restricted by statute, and professional conduct rules govern how services can be presented generally. A good deal of what marketing agencies propose to law firms is simply not available here.",
      "Within those limits it works well, because the value of a single client is high enough that ranking for a handful of specific searches can justify the entire year.",
    ],
    sections: [
      {
        heading: "Practice areas are the unit, not the firm",
        body: [
          "Nobody searches for a solicitor in the abstract. They search conveyancing, probate, employment dispute, separation, company formation, will.",
          "A firm with one page listing its practice areas ranks for none of them. A firm with a substantial page per area, each explaining the process, the likely timeline and how fees work, ranks for a great many long, specific and high-value searches.",
        ],
        list: [
          {
            title: "Process explanations",
            body: "What actually happens, step by step, and how long it takes. The most valuable content a law firm can publish and the least commonly written.",
          },
          {
            title: "Fee structure, plainly",
            body: "Not necessarily a number, but how fees work — fixed, hourly, percentage. Clients search this and almost nobody explains it.",
          },
          {
            title: "Local pages where jurisdiction matters",
            body: "Court districts, local authority processes and county-specific procedures are searched and rarely covered.",
          },
        ],
      },
      {
        heading: "What you cannot do, and what to do instead",
        body: [
          "Advertising in relation to personal injury services is restricted, and there are professional standards governing claims about outcomes, comparisons and testimonials more broadly. We will not write anything that puts a practising certificate at risk, and we will tell you when something proposed elsewhere would.",
          "What is available is considerable: explaining the law clearly, setting out process and cost honestly, and being findable for the specific problems people actually search. That is enough, and in a profession where most websites say very little it is more than enough.",
        ],
      },
      {
        heading: "The economics are different from a trade",
        body: [
          "A roofer needs a steady flow of enquiries. A firm doing probate or commercial work may need a small number of the right clients a year, which changes what success looks like entirely.",
          "We judge legal SEO on the value of matters opened rather than on enquiry count, because a single conveyancing client is worth more than a hundred clicks.",
        ],
      },
    ],
    faqs: [
      {
        q: "What are we not allowed to advertise?",
        a: "Advertising in respect of personal injuries is restricted by statute, and professional conduct rules govern claims about outcomes and comparisons more broadly. We write within those limits and will tell you when something proposed elsewhere would not be.",
      },
      {
        q: "What content works for a law firm?",
        a: "Process explanations — what actually happens, how long it takes, how fees work. It is the most valuable and least commonly written content in the profession.",
      },
      {
        q: "How should we measure it?",
        a: "By the value of matters opened, not by enquiries. One conveyancing client is worth more than a hundred clicks.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "estate-agents",
    label: "estate agents",
    title: "SEO for Estate Agents Ireland | Estate Agency SEO",
    description:
      "SEO for Irish estate agents: you are not competing with Daft for property searches, you are competing for vendors deciding who to instruct.",
    h1: "SEO for estate agents, aimed at vendors not buyers.",
    intro: [
      "An estate agency will not out-rank Daft or MyHome for property searches and should stop trying. Those portals own buyer intent and no amount of optimisation changes it.",
      "What an agency can own is the other side of the transaction: the homeowner working out what their house is worth and who to instruct. That search happens weeks or months before a property ever goes on a portal, and almost no Irish agency competes for it seriously.",
    ],
    sections: [
      {
        heading: "Vendor searches are the winnable ground",
        body: [
          "'How much is my house worth', 'estate agent fees Ireland', 'how long does it take to sell a house', 'should I sell before I buy'. These are made by people who are genuinely considering selling and have not chosen an agent.",
          "They are far less contested than property searches because the portals do not target them and most agencies have not thought to.",
        ],
        list: [
          {
            title: "Valuation content, by area",
            body: "What has actually sold locally and what that means for a seller. Genuinely useful and highly specific.",
          },
          {
            title: "Fees explained plainly",
            body: "One of the most searched questions in the category. Vendors are uncomfortable asking and agencies are uncomfortable publishing.",
          },
          {
            title: "Process and timeline",
            body: "From instruction to close, with realistic Irish timelines. Almost nobody writes it.",
          },
          {
            title: "Probate, downsizing and landlord exits",
            body: "Distinct situations with distinct searches, and the instructions nobody else is advertising for.",
          },
        ],
      },
      {
        heading: "Your sold listings are an asset you are wasting",
        body: [
          "Most agency websites remove sold properties, which deletes the most persuasive and most searchable content the business produces.",
          "A well-maintained sold archive, with the area named and the outcome described, demonstrates local knowledge better than any claim and attracts exactly the homeowner comparing agents in that area.",
        ],
      },
      {
        heading: "The map pack still matters for the office",
        body: [
          "Vendors do search 'estate agent <town>' and the map results carry it. Proximity, a complete profile and reviews decide that, the same as for any local business.",
          "It is a smaller prize than the vendor content above, and it is straightforward to win because agency profiles are frequently neglected.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we out-rank Daft and MyHome?",
        a: "No, and you should not try. They own buyer intent. What is winnable is vendor intent — the homeowner deciding whether to sell and who to instruct.",
      },
      {
        q: "What should we publish?",
        a: "Valuation content by area, fees explained plainly, realistic timelines, and pages for probate, downsizing and landlord sales. Very few Irish agencies do any of it.",
      },
      {
        q: "Should we delete sold listings?",
        a: "No. It is the most persuasive and most searchable content you produce, and most agencies throw it away.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "accountants",
    label: "accountants",
    title: "SEO for Accountants Ireland | Accountancy Practice SEO",
    description:
      "SEO for Irish accountancy practices: deadline-driven search, service-led pages and the client value that justifies a long timeline.",
    h1: "SEO for accountants, around a calendar everybody shares.",
    intro: [
      "Accountancy search runs on a national calendar. Income tax deadlines, VAT periods, year ends and the weeks after the Budget produce predictable spikes that every practice in the country experiences at the same time.",
      "That is both the opportunity and the problem: the demand is reliable, and you are competing for it against everyone else in the same fortnight.",
    ],
    sections: [
      {
        heading: "Be ranked before the deadline, not during it",
        body: [
          "Search interest around the October and November deadlines climbs for weeks beforehand, and rankings take months to build. A practice starting in September has missed it.",
          "The work is done in spring and summer for a return in autumn. That is a hard sell and it is the truth, and we would rather say it than take a fee in September and report on impressions in December.",
        ],
      },
      {
        heading: "Service pages, and the questions underneath them",
        body: [
          "Sole trader returns, company accounts, VAT registration, payroll, contractor setup, R&D credits. Each is a separate search with separate competition.",
          "Underneath each sits a layer of questions people actually type — what can I claim, do I need to register, what happens if I am late — and answering those honestly is what brings in the clients who have not yet chosen anybody.",
        ],
        list: [
          {
            title: "Deadline and obligation content",
            body: "What is due, when, and what happens if it is missed. Searched heavily and usually answered by Revenue rather than by a practice.",
          },
          {
            title: "Sector pages",
            body: "Contractors, landlords, publicans, farmers, medical. Each has specific concerns and searches for them specifically.",
          },
          {
            title: "Fee transparency",
            body: "A range for a standard return. Uncomfortable, effective, and almost nobody does it.",
          },
        ],
      },
      {
        heading: "One client can justify the year",
        body: [
          "A practice does not need volume. A handful of good recurring clients changes the economics of the whole exercise, which means a modest amount of traffic to the right pages is worth a great deal.",
          "We measure this on clients gained and their annual value rather than on enquiries, because the numbers are small and the values are not.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we start?",
        a: "Spring or summer, for a return in autumn. Rankings take months and a practice starting in September has already missed the deadline season.",
      },
      {
        q: "What content actually works?",
        a: "The questions underneath your services — what can I claim, do I need to register, what happens if I am late. Answered honestly, by a practice rather than by Revenue.",
      },
      {
        q: "Should we publish fees?",
        a: "A range for standard work. It is uncomfortable, it is effective, and almost no Irish practice does it.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "restaurants-and-cafes",
    label: "restaurants and cafés",
    title: "SEO for Restaurants Ireland | Restaurant & Café SEO",
    description:
      "SEO for Irish restaurants and cafés: your Google profile is doing more work than your website, and most of it is neglected.",
    h1: "SEO for restaurants, where your profile is the website.",
    intro: [
      "For a restaurant, the Google Business Profile is not a supporting asset — it is where most people look, decide and book, frequently without ever opening the website.",
      "Which means restaurant SEO is mostly profile work: photographs, menus, hours, reviews and replies. A beautiful website with a neglected profile is a common and expensive combination.",
    ],
    sections: [
      {
        heading: "The profile does the deciding",
        body: [
          "People search 'restaurants near me', look at photographs, read three reviews, check today's hours and book. The website is consulted by a minority and frequently only to find a menu.",
          "So the highest-return work is on the profile, and it is continuous rather than a one-off — photographs added regularly, hours kept accurate including bank holidays, reviews answered.",
        ],
        list: [
          {
            title: "Photographs, regularly added",
            body: "Of food, room and staff. Profiles with recent photographs get substantially more views and directions requests.",
          },
          {
            title: "Menu as text, not a PDF or image",
            body: "The single most common technical fault in this category. A menu in an image cannot be read by Google or by an AI assistant answering a question about you.",
          },
          {
            title: "Hours, including every bank holiday",
            body: "Wrong hours produce one-star reviews from people who arrived at a closed door.",
          },
          {
            title: "Every review answered",
            body: "Briefly and in your own voice. It is visible, it is read, and it is the cheapest reputation work available.",
          },
        ],
      },
      {
        heading: "Put the menu in text on your own site",
        body: [
          "A PDF menu or a photographed one is invisible to search, invisible to screen readers and invisible to the AI assistants that increasingly answer 'is there anywhere gluten free in Kilkenny'.",
          "Converting it to real text is an afternoon's work and it is consistently the highest-return change available on a restaurant website.",
        ],
      },
      {
        heading: "Dietary and occasion searches are under-served",
        body: [
          "Gluten free, vegan, coeliac, child friendly, dog friendly, private dining, communion, early bird. These are specific, high-intent searches and most restaurants mention none of them in text anywhere.",
          "If you genuinely cater for them, saying so plainly wins bookings from people actively looking for exactly that.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does our website matter less than our Google profile?",
        a: "For most restaurants, yes. People search, look at photographs, read reviews, check hours and book without opening the site.",
      },
      {
        q: "What is the biggest technical mistake?",
        a: "A menu as a PDF or an image. It is invisible to Google, to screen readers and to AI assistants. Converting it to text is an afternoon's work and the highest-return change available.",
      },
      {
        q: "Should we answer reviews?",
        a: "All of them, briefly and in your own voice. It is read by everyone deciding whether to book and it is the cheapest reputation work there is.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "gyms-and-fitness",
    label: "gyms and fitness studios",
    title: "SEO for Gyms Ireland | Gym & Fitness Studio SEO",
    description:
      "SEO for Irish gyms and studios: January is decided in November, and retention matters more than the search that brought them in.",
    h1: "SEO for gyms, where January is won in November.",
    intro: [
      "Gym search has the sharpest annual pattern of any category we work in. Interest roughly doubles in the first fortnight of January and settles by February, and every gym in the country is competing for the same weeks.",
      "Rankings take months to build, which means January is decided in October and November. A gym starting in the last week of December has missed it entirely.",
    ],
    sections: [
      {
        heading: "Rank before the rush",
        body: [
          "This is the whole timing argument and it is simple: the traffic arrives in a fortnight, the rankings take a quarter, so the work has to happen in autumn.",
          "It also means the quiet months are not wasted. September to November is when a gym should be publishing, collecting reviews and fixing its profile, because that is what determines its position when the demand arrives.",
        ],
      },
      {
        heading: "What people actually search",
        body: [
          "Not 'gym'. They search a class, a goal, a schedule or a price — beginners classes, strength training, pilates near me, gym prices, 24 hour gym, creche gym.",
          "Each is a separate page. A single membership page listing everything ranks for very little, and it is the structure almost every gym website has.",
        ],
        list: [
          {
            title: "A page per class or programme",
            body: "With times, level, what to bring and what it costs. Class timetables are searched heavily and rarely indexable.",
          },
          {
            title: "Price, plainly",
            body: "The most searched and most hidden thing in the category. Hiding it loses more members than it protects.",
          },
          {
            title: "Beginner-focused content",
            body: "The January audience is overwhelmingly people who are nervous. Content that reduces that fear converts far better than content about equipment.",
          },
        ],
      },
      {
        heading: "The metric is retention, not sign-ups",
        body: [
          "A gym that fills in January and empties by March has not grown; it has had an expensive month. The members who stay are the ones who found something specific they wanted rather than a discounted membership.",
          "That changes what to optimise for. Pages about classes, coaching and beginners attract people who stay. Pages about price attract people who leave.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we start?",
        a: "October or November. The traffic arrives in a fortnight in January and rankings take a quarter to build, so starting in December is too late.",
      },
      {
        q: "Should we publish prices?",
        a: "Yes. It is the most searched and most hidden thing in the category, and hiding it loses more members than it protects.",
      },
      {
        q: "What should we optimise for?",
        a: "Retention rather than sign-ups. Class and coaching content attracts people who stay; price-led content attracts people who leave in March.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "car-garages",
    label: "garages",
    title: "SEO for Garages Ireland | Car Garage & Mechanic SEO",
    description:
      "SEO for Irish garages: the NCT is the best marketing calendar in the country and almost no garage uses it.",
    h1: "SEO for garages, built around the NCT calendar.",
    intro: [
      "Every car in Ireland has a test date, and the weeks before it produce a predictable, searchable spike in demand for pre-NCT checks, repairs and retests. It is the most reliable recurring demand signal available to any local business in the country.",
      "Almost no garage builds anything around it, which is why it remains the clearest opportunity in this category.",
    ],
    sections: [
      {
        heading: "The NCT is a content calendar nobody uses",
        body: [
          "People search what the test covers, why cars fail, what a pre-test check costs, how long a retest takes and what to do about a fail.",
          "Those are high-intent searches made by somebody with a hard deadline and a car that may not pass. A garage that answers them properly is the obvious place to ring, and the content is not difficult to write because you deal with it every day.",
        ],
        list: [
          {
            title: "Common failure reasons, explained",
            body: "The most searched NCT content there is. Write it from what you actually see rather than from the official list.",
          },
          {
            title: "Pre-test check page, with a price",
            body: "A specific service with a specific cost and a clear reason to book it before a deadline.",
          },
          {
            title: "Retest and fail content",
            body: "Somebody who has just failed is the most motivated customer in the category, and almost nobody is writing for them.",
          },
        ],
      },
      {
        heading: "Make and model pages are under-used",
        body: [
          "People search 'timing belt Golf', 'DPF problem Qashqai', 'clutch replacement Focus cost'. These are specific, high-intent and almost entirely uncontested by Irish garages.",
          "If you specialise in particular makes, or see the same faults repeatedly, that is a page each. It is the closest thing to free traffic in this trade.",
        ],
      },
      {
        heading: "Trust is the actual product",
        body: [
          "Garages carry a reputational burden — people worry about being sold work they do not need — and that fear is what the searching is really about.",
          "Content that explains when something does not need doing, and pricing that is published rather than quoted on the phone, addresses that directly. It converts better than any claim about experience.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why focus on the NCT?",
        a: "Because every car has a test date, the demand is predictable and searchable, and almost no Irish garage builds anything around it.",
      },
      {
        q: "Are make and model pages worth writing?",
        a: "They are close to free traffic. Specific, high intent, and almost entirely uncontested by Irish garages.",
      },
      {
        q: "What builds trust fastest?",
        a: "Saying when something does not need doing, and publishing prices rather than quoting on the phone. It addresses the fear the searching is actually about.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "physiotherapy",
    label: "physiotherapy clinics",
    title: "SEO for Physiotherapists Ireland | Physio Clinic SEO",
    description:
      "SEO for Irish physiotherapy clinics: patients search the pain, not the profession, and that changes every page on the site.",
    h1: "SEO for physiotherapy, written around the pain.",
    intro: [
      "Almost nobody searches for a physiotherapist. They search for what hurts — lower back pain, frozen shoulder, tennis elbow, plantar fasciitis, a knee that gives way — and a clinic with one page saying 'our treatments' ranks for none of it.",
      "That single fact restructures the whole website, and most physiotherapy sites in Ireland have not been built for it.",
    ],
    sections: [
      {
        heading: "A page per condition, not per treatment",
        body: [
          "The patient does not know whether they need manual therapy, dry needling or a rehab programme. They know their shoulder hurts and they cannot sleep on it.",
          "Pages named after conditions, describing the symptoms in the words people use, rank for far more than pages named after techniques — and they convert better, because the reader recognises themselves.",
        ],
        list: [
          {
            title: "One page per common presentation",
            body: "Lower back, neck, shoulder, knee, ankle, sciatica, post-surgical, sports injury. Written in symptoms, not in clinical terms.",
          },
          {
            title: "How long it takes and what it costs",
            body: "The two questions every patient has and most clinics answer with 'it depends'. A range with the reasoning converts.",
          },
          {
            title: "Occupational and sport pages",
            body: "Desk workers, drivers, runners, GAA, rowers. Specific, searched and rarely written.",
          },
        ],
      },
      {
        heading: "Be careful what you claim",
        body: [
          "There are professional standards governing how treatment and outcomes can be presented, and claims of cure or guaranteed results are a problem in more ways than one.",
          "Writing to what you can genuinely stand over produces pages that read as credible in a category where a good deal of what is published online does not — and it keeps the clinic out of difficulty.",
        ],
      },
      {
        heading: "Referrals and search feed each other",
        body: [
          "Most physiotherapy clients arrive through a GP, a coach or a friend. They then search the clinic name before booking, and what they find decides whether they do.",
          "That means the site is doing two jobs: winning new searches and confirming referrals. The second is quieter, larger and almost never measured.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should pages be named after conditions or treatments?",
        a: "Conditions, in the words patients actually use. Nobody searches for dry needling; they search for a shoulder they cannot sleep on.",
      },
      {
        q: "Should we publish prices and session counts?",
        a: "A range with the reasoning. 'It depends' is the honest answer and the worst one for somebody deciding whether to book.",
      },
      {
        q: "What can we claim about outcomes?",
        a: "What you can stand over. Professional standards restrict claims of cure or guaranteed results, and writing within them reads as more credible anyway.",
      },
      ...COMMON_FAQS,
    ],
  },
  {
    slug: "solar-installers",
    label: "solar installers",
    title: "SEO for Solar Installers Ireland | Solar SEO",
    description:
      "SEO for Irish solar installers: grant searches dominate, the research period is long, and honesty about suitability outperforms sales copy.",
    h1: "SEO for solar installers, around the grant and the doubt.",
    intro: [
      "Solar search in Ireland is dominated by two things: the SEAI grant, and whether it is actually worth it. Almost every search in the category is a version of one of those questions.",
      "Homeowners research this for weeks or months before contacting anybody, which makes it one of the few trades where content genuinely decides who gets the enquiry.",
    ],
    sections: [
      {
        heading: "The grant is the most searched thing in the category",
        body: [
          "Eligibility, amounts, the BER requirement, how the process works, how long it takes, what happens if the house does not qualify.",
          "Most installer websites mention the grant in one line. A properly written set of pages explaining it accurately will out-rank and out-convert them, because it answers what the person actually came to find out.",
        ],
      },
      {
        heading: "Answer the doubt honestly",
        body: [
          "The second question is always whether it pays back, and the honest answer depends on the roof, the orientation, the household's usage pattern and what they are currently paying.",
          "Content that says plainly when solar is a poor investment — a north-facing roof, a house that is empty all day, a roof needing replacement first — builds more trust than any amount of enthusiasm, and it prevents surveys that were never going to convert.",
        ],
        list: [
          {
            title: "Payback calculations with real assumptions",
            body: "Stated openly, so a reader can check them against their own bill. Vague claims about savings do the opposite.",
          },
          {
            title: "Suitability content",
            body: "Orientation, shading, roof condition, usage pattern. The things that decide whether it is worth doing.",
          },
          {
            title: "Battery and export content",
            body: "Whether a battery is worth it, and how export payments actually work. Heavily searched, poorly covered.",
          },
        ],
      },
      {
        heading: "Long research, so be present early",
        body: [
          "Somebody who installs solar in June started reading about it in February. If you are only visible to people ready to buy, you are arriving at the end of a conversation they have been having with somebody else's website.",
          "That is the case for informational content in this trade specifically — not as a content-marketing ritual, but because the decision genuinely takes months and the installer who educated them usually gets the survey.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do people actually search?",
        a: "The SEAI grant and whether solar is worth it. Almost every search in the category is a version of one of those two questions.",
      },
      {
        q: "Should we say when solar is a bad idea?",
        a: "Yes. A north-facing roof or an empty house is a poor investment, and saying so builds trust and prevents surveys that were never going to convert.",
      },
      {
        q: "Why does content matter more here than in other trades?",
        a: "Because the decision genuinely takes months. The installer whose pages educated the homeowner usually gets the survey.",
      },
      ...COMMON_FAQS,
    ],
  },
];

export const industrySeoBySlug = (slug: string) =>
  industrySeo.find((i) => i.slug === slug);

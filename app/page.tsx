
import Link from "next/link";
import NextImage from "next/image";

import { supabase } from "@/lib/supabase";

import { liberiaHistoryEvents } from "../lib/liberia-history-events";
import LiberiaInteractiveMap from "./components/LiberiaInteractiveMap";

export default async function Home() {
  const [{ data: latestArticles }, { data: counties }] =
    await Promise.all([
      supabase
        .from("articles")
        .select("slug, title, image_url, content")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(6),

      supabase
        .from("counties")
        .select("name, slug, description, image_url")
        .eq("published", true)
        .order("name", { ascending: true }),
    ]);

  const countyDescriptions: Record<string, string> = {
    Bomi:
      "Bomi is known for its historic iron-ore industry, especially around Tubmanburg, and its important place in Liberia's mining and economic history.",

    Bong:
      "Bong is an important agricultural county in central Liberia and was once home to the Bong Mining Company, one of the country's major historic iron-ore operations.",

    Gbarpolu:
      "Gbarpolu, created in 2001, is Liberia's youngest county and is known for its forests, mineral resources, and communities connected to the Gola forest landscape.",

    "Grand Bassa":
      "Grand Bassa has a long coastal history and is home to Buchanan, one of Liberia's major ports, while the Bassa people have contributed greatly to the country's history and culture.",

    "Grand Cape Mount":
      "Grand Cape Mount is famous for Lake Piso and the historic Vai people, whose unique writing system is an important part of Liberia's cultural heritage.",

    "Grand Gedeh":
      "Grand Gedeh is a southeastern county strongly associated with Krahn communities and the forests of southeastern Liberia, including areas connected to Grebo-Krahn National Park.",

    "Grand Kru":
      "Grand Kru has a strong maritime heritage, with communities such as Sasstown and Grand Cess historically connected to fishing, seafaring, trade, and Kru cultural traditions.",

    Lofa:
      "Lofa is an important agricultural region and is home to Mount Wuteve, Liberia's highest mountain, as well as diverse communities including the Lorma, Gbandi, and Kissi.",

    Margibi:
      "Margibi played an important role in Liberia's modern economic history through the Firestone rubber industry, while Harbel and the Booker Washington Institute became notable landmarks.",

    Maryland:
      "Maryland has deep historical ties to the former Republic of Maryland, which became part of Liberia in 1857, and its capital Harper remains an important center of southeastern heritage.",

    Montserrado:
      "Montserrado contains Monrovia, Liberia's capital and political center, and has been central to the country's independence, government, commerce, education, and national development.",

    Nimba:
      "Nimba is known for the Mount Nimba landscape, major iron-ore deposits, and commercial centers such as Ganta and Yekepa, making it important to Liberia's natural and economic history.",

    "River Cess":
      "River Cess is a coastal county whose history is closely connected to the Cestos River, fishing communities, forests, and Bassa cultural heritage.",

    "River Gee":
      "River Gee is a southeastern county known for its Grebo and Krahn communities, agricultural livelihoods, forest resources, and the Cavalla River along Liberia's border with Côte d'Ivoire.",

    Sinoe:
      "Sinoe is one of Liberia's historic coastal counties and is home to Greenville and Sapo National Park, making it important to Liberia's early history, forests, wildlife, and biodiversity.",
  };

  const today = new Date();

  const liberiaDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Monrovia",
    month: "numeric",
    day: "numeric",
  }).formatToParts(today);

  const month = Number(
    liberiaDate.find((part) => part.type === "month")?.value
  );

  const day = Number(
    liberiaDate.find((part) => part.type === "day")?.value
  );

  const todayEvents = liberiaHistoryEvents[`${month}-${day}`] || [];

  const liberiaFacts = [
    {
      title: "Liberia's Independence",
      description:
        "Liberia declared independence on July 26, 1847, establishing the Republic of Liberia.",
    },
    {
      title: "Liberia's Capital",
      description:
        "Monrovia is the capital of Liberia. The settlement was renamed Monrovia in 1824 in honor of U.S. President James Monroe.",
    },
    {
      title: "Liberia's Name",
      description:
        "The name Liberia comes from the Latin word associated with freedom, and the country became formally known as Liberia in 1824.",
    },
    {
      title: "Cape Mesurado",
      description:
        "The settlement that developed into Monrovia was established at Cape Mesurado, an important location in the early history of Liberia.",
    },
    {
      title: "The American Colonization Society",
      description:
        "The American Colonization Society was founded in 1816 and played a major role in establishing settlements for free African Americans in West Africa.",
    },
    {
      title: "The First Major Settler Arrival",
      description:
        "In 1822, settlers associated with the American Colonization Society arrived at Cape Mesurado and began developing the settlement that became Monrovia.",
    },
    {
      title: "The Settlement of Christopolis",
      description:
        "The early settlement at Cape Mesurado was known as Christopolis before it was renamed Monrovia in 1824.",
    },
    {
      title: "Monrovia's Namesake",
      description:
        "Monrovia was named after James Monroe, the fifth President of the United States.",
    },
    {
      title: "Liberia's Early Government",
      description:
        "By 1824, the settlement had developed laws and an administrative system, marking an important stage in the development of Liberia's political institutions.",
    },
    {
      title: "Liberia's Early Constitution",
      description:
        "In the 1820s, Liberia's colonial authorities began developing written laws and constitutional arrangements for governing the settlements.",
    },
    {
      title: "The Commonwealth of Liberia",
      description:
        "In 1838, several separate settlements were brought together to form the Commonwealth of Liberia.",
    },
    {
      title: "Joseph Jenkins Roberts",
      description:
        "Joseph Jenkins Roberts became an important early Liberian leader and served as the colony's first Black governor before becoming Liberia's first president.",
    },
    {
      title: "Liberia's First President",
      description:
        "Joseph Jenkins Roberts was elected Liberia's first president after the country became independent.",
    },
    {
      title: "Liberia's Constitution",
      description:
        "Liberia's Constitution was ratified in 1848, following the country's declaration of independence.",
    },
    {
      title: "Liberia's First Elections",
      description:
        "The first national elections of the new Republic of Liberia were held in 1848.",
    },
    {
      title: "Liberia College",
      description:
        "Liberia College was founded in 1851 and became an important institution in the country's educational history.",
    },
    {
      title: "University of Liberia",
      description:
        "Liberia College later developed into the University of Liberia, one of the country's oldest institutions of higher education.",
    },
    {
      title: "The Republic of Maryland",
      description:
        "The Republic of Maryland was an independent settlement on Liberia's southeastern coast before it joined Liberia in 1857.",
    },
    {
      title: "Cape Palmas",
      description:
        "Cape Palmas became an important settlement and trading center in southeastern Liberia and was associated with the former Republic of Maryland.",
    },
    {
      title: "Liberia's Coastal Settlements",
      description:
        "Many of Liberia's early settler communities developed along the Atlantic coast and major rivers, where transportation and trade were easier.",
    },
    {
      title: "The Grain Coast",
      description:
        "The West African coast that includes present-day Liberia was historically known by European traders as the Grain Coast, associated with trade in grains of paradise.",
    },
    {
      title: "Early European Contact",
      description:
        "Portuguese explorers made contact with the West African coast that includes present-day Liberia during the fifteenth century.",
    },
    {
      title: "British Trading Posts",
      description:
        "British traders established trading posts along parts of the Grain Coast during the seventeenth century.",
    },
    {
      title: "Liberia's Indigenous Peoples",
      description:
        "Long before the creation of the Liberian republic, numerous indigenous societies with their own political systems, languages, economies, and cultures lived throughout the territory.",
    },
    {
      title: "Liberia's Cultural Diversity",
      description:
        "Liberia is home to numerous indigenous ethnic communities, including the Kpelle, Bassa, Gio, Mano, Kru, Grebo, Krahn, Gola, Loma, Kissi, Vai, Gbandi, and others.",
    },
    {
      title: "The Kpelle",
      description:
        "The Kpelle are one of Liberia's major indigenous peoples and have a long history centered largely in central and northwestern Liberia.",
    },
    {
      title: "The Bassa",
      description:
        "The Bassa people have deep historical roots in Liberia, particularly in the central and coastal parts of the country.",
    },
    {
      title: "The Vai",
      description:
        "The Vai people are especially well known for the Vai syllabary, an indigenous writing system developed for the Vai language.",
    },
    {
      title: "The Gola",
      description:
        "The Gola people have longstanding historical connections to the forests and communities of northwestern Liberia and neighboring Sierra Leone.",
    },
    {
      title: "The Loma",
      description:
        "The Loma people have historical communities in northwestern Liberia and neighboring Guinea and are known for distinctive cultural traditions and artistic heritage.",
    },
    {
      title: "The Kissi",
      description:
        "The Kissi people live across parts of Liberia, Guinea, and Sierra Leone and have longstanding regional cultural connections.",
    },
    {
      title: "The Grebo",
      description:
        "The Grebo have deep historical roots in southeastern Liberia and have maintained distinctive languages and cultural traditions.",
    },
    {
      title: "The Kru",
      description:
        "Kru communities have historically been associated with Liberia's coastal regions, fishing, seafaring, trade, and maritime activities.",
    },
    {
      title: "The Krahn",
      description:
        "The Krahn are an indigenous Liberian people with strong historical connections to southeastern Liberia and neighboring Côte d'Ivoire.",
    },
    {
      title: "The Mano",
      description:
        "The Mano people have historical communities in northeastern Liberia and across the border in Guinea.",
    },
    {
      title: "Liberia's Languages",
      description:
        "Liberia is linguistically diverse, with English as the official language and numerous indigenous languages spoken throughout the country.",
    },
    {
      title: "Liberia's Official Language",
      description:
        "English is the official language of Liberia and is used in government, education, and formal national communication.",
    },
    {
      title: "Liberia's Fifteen Counties",
      description:
        "Liberia is divided into 15 counties, each with its own geographic, cultural, economic, and historical characteristics.",
    },
    {
      title: "Montserrado County",
      description:
        "Montserrado County contains Monrovia, Liberia's capital and one of the country's most important political, commercial, and educational centers.",
    },
    {
      title: "Bomi County",
      description:
        "Bomi became particularly important in Liberia's economic history because of its historic iron-ore mining activities around Tubmanburg.",
    },
    {
      title: "Bong County",
      description:
        "Bong County became an important center of iron-ore mining through the Bong Mining Company and remains an important agricultural region.",
    },
    {
      title: "Nimba County",
      description:
        "Nimba County is famous for its major iron-ore deposits and the Mount Nimba landscape.",
    },
    {
      title: "Mount Nimba",
      description:
        "The Mount Nimba region is one of Liberia's most important natural landscapes and is known for its exceptional biodiversity and mineral resources.",
    },
    {
      title: "Lofa County",
      description:
        "Lofa County is known for agriculture, cultural diversity, and Mount Wuteve, widely recognized as Liberia's highest mountain.",
    },
    {
      title: "Mount Wuteve",
      description:
        "Mount Wuteve in Lofa County is widely recognized as Liberia's highest mountain.",
    },
    {
      title: "Grand Cape Mount",
      description:
        "Grand Cape Mount County is home to Lake Piso and has important historical connections to the Vai people and the country's northwestern region.",
    },
    {
      title: "Lake Piso",
      description:
        "Lake Piso is Liberia's largest lake and an important ecological and cultural feature of Grand Cape Mount County.",
    },
    {
      title: "Grand Bassa County",
      description:
        "Grand Bassa County is home to Buchanan, an important Liberian port and commercial center on the Atlantic coast.",
    },
    {
      title: "Buchanan",
      description:
        "Buchanan is one of Liberia's major ports and has played an important role in the country's trade and natural-resource economy.",
    },
    {
      title: "Margibi County",
      description:
        "Margibi County became closely associated with Liberia's rubber industry and the Firestone plantation at Harbel.",
    },
    {
      title: "Harbel",
      description:
        "Harbel developed around the Firestone rubber operation and became an important center of Liberia's rubber industry.",
    },
    {
      title: "Firestone Liberia",
      description:
        "Firestone began its major rubber plantation operation in Liberia in the 1920s, making rubber an important part of the country's modern economic history.",
    },
    {
      title: "Sinoe County",
      description:
        "Sinoe County is home to Greenville and contains important rainforest landscapes, including areas associated with Sapo National Park.",
    },
    {
      title: "Sapo National Park",
      description:
        "Sapo National Park is Liberia's largest protected area and an important center for rainforest conservation and biodiversity.",
    },
    {
      title: "Maryland County",
      description:
        "Maryland County has deep historical connections to the former Republic of Maryland and is home to Harper.",
    },
    {
      title: "Harper",
      description:
        "Harper is the capital of Maryland County and has an important place in Liberia's southeastern coastal history.",
    },
    {
      title: "Grand Kru County",
      description:
        "Grand Kru County has a strong coastal heritage associated with fishing, maritime activities, and Kru cultural traditions.",
    },
    {
      title: "River Cess County",
      description:
        "River Cess County takes its name from the Cestos River and has strong connections to coastal communities, forests, and Bassa heritage.",
    },
    {
      title: "River Gee County",
      description:
        "River Gee County is located in southeastern Liberia and has important cultural and geographic connections to Grebo and Krahn communities.",
    },
    {
      title: "Gbarpolu County",
      description:
        "Gbarpolu County was created in 2001 and is Liberia's youngest county.",
    },
    {
      title: "Liberia's Iron-Ore Industry",
      description:
        "Iron ore became one of Liberia's most important export resources during the twentieth century, particularly through operations in Nimba, Bong, and Bomi.",
    },
    {
      title: "Yekepa",
      description:
        "Yekepa in Nimba County became an important mining town during Liberia's iron-ore development.",
    },
    {
      title: "Bong Mining Company",
      description:
        "The Bong Mining Company became one of Liberia's major historic iron-ore operations and helped shape the economy of central Liberia.",
    },
    {
      title: "Liberia's Rubber Industry",
      description:
        "Rubber became one of Liberia's major commercial agricultural products during the twentieth century.",
    },
    {
      title: "Liberia and World War I",
      description:
        "Liberia declared war on Germany in 1917 during World War I and later became a member of the League of Nations.",
    },
    {
      title: "Liberia and the League of Nations",
      description:
        "Liberia joined the League of Nations after World War I, becoming part of the international organization established to promote international cooperation.",
    },
    {
      title: "Liberia and World War II",
      description:
        "During World War II, Liberia supported the Allied war effort and declared war on the Axis powers in 1944.",
    },
    {
      title: "William V. S. Tubman",
      description:
        "William V. S. Tubman became president in 1944 and remained in office until his death in 1971.",
    },
    {
      title: "Tubman's Unification Policy",
      description:
        "President William V. S. Tubman promoted a policy known as the Unification Policy, aimed at bringing indigenous Liberians more fully into national political and economic life.",
    },
    {
      title: "Voting Rights",
      description:
        "In 1946, Liberia extended voting and electoral participation to its indigenous population under changes made during the Tubman era.",
    },
    {
      title: "African Independence",
      description:
        "Liberian representatives participated in the first conference of independent African nations in 1958.",
    },
    {
      title: "The Organization of African Unity",
      description:
        "Liberia played a role in African diplomacy and later became a member of the Organization of African Unity, established in 1963.",
    },
    {
      title: "William R. Tolbert Jr.",
      description:
        "William R. Tolbert Jr. became president after the death of William Tubman in 1971.",
    },
    {
      title: "The 1979 Rice Riots",
      description:
        "In April 1979, a demonstration over a proposed increase in the price of rice developed into major unrest in Monrovia.",
    },
    {
      title: "The 1980 Coup",
      description:
        "In April 1980, Master Sergeant Samuel K. Doe led a military coup that overthrew President William R. Tolbert Jr. and ended Liberia's First Republic.",
    },
    {
      title: "Liberia's Second Republic",
      description:
        "A new constitution came into effect in 1986, marking the beginning of Liberia's Second Republic.",
    },
    {
      title: "The First Liberian Civil War",
      description:
        "The First Liberian Civil War began in 1989 and continued through the 1990s, causing extensive political, social, and economic disruption.",
    },
    {
      title: "ECOWAS and Liberia",
      description:
        "The Economic Community of West African States became heavily involved in efforts to end Liberia's civil conflict and established a regional peacekeeping force.",
    },
    {
      title: "ECOMOG",
      description:
        "ECOMOG, the Economic Community of West African States Monitoring Group, was deployed during Liberia's civil war as part of regional efforts to restore peace and security.",
    },
    {
      title: "The 1997 Election",
      description:
        "Charles Taylor was elected president in Liberia's 1997 general election, beginning the country's Third Republic.",
    },
    {
      title: "The Second Liberian Civil War",
      description:
        "A second major civil conflict began in Liberia in 1999 and eventually contributed to the departure of President Charles Taylor in 2003.",
    },
    {
      title: "The 2003 Peace Agreement",
      description:
        "Liberia's civil conflict formally moved toward an end through the 2003 Comprehensive Peace Agreement.",
    },
    {
      title: "Ellen Johnson Sirleaf",
      description:
        "Ellen Johnson Sirleaf became president in 2006 after winning the 2005 presidential election.",
    },
    {
      title: "Africa's First Elected Female Head of State",
      description:
        "Ellen Johnson Sirleaf became the first woman elected head of state in Africa when she took office as Liberia's president in 2006.",
    },
    {
      title: "Liberia's 2005 Election",
      description:
        "The 2005 presidential election was a major milestone in Liberia's transition from civil war to elected civilian government.",
    },
    {
      title: "George Weah",
      description:
        "George Weah became Liberia's president in January 2018 after winning the 2017 presidential election.",
    },
    {
      title: "Liberia's Political Transitions",
      description:
        "Liberia has experienced several major political transitions since independence, including the establishment of the First, Second, and Third Republics.",
    },
    {
      title: "Liberia's Judiciary",
      description:
        "Liberia's constitutional system includes executive, legislative, and judicial branches of government.",
    },
    {
      title: "Liberia's Legislature",
      description:
        "Liberia's national legislature is bicameral, consisting of the Senate and the House of Representatives.",
    },
    {
      title: "The Liberian Senate",
      description:
        "The Senate is one of the two chambers of Liberia's National Legislature and represents the counties of Liberia.",
    },
    {
      title: "The House of Representatives",
      description:
        "The House of Representatives is the lower chamber of Liberia's National Legislature.",
    },
    {
      title: "Liberia's National Symbols",
      description:
        "Liberia's national identity is represented through symbols including its flag, coat of arms, national anthem, and other officially recognized emblems.",
    },
    {
      title: "The Lone Star",
      description:
        "The single white star on Liberia's flag is one of the country's most recognizable national symbols.",
    },
    {
      title: "Liberia's Flag Design",
      description:
        "Liberia's flag contains eleven horizontal red and white stripes and a blue canton bearing a single white star.",
    },
    {
      title: "Liberia's National Anthem",
      description:
        "Liberia has a national anthem that forms part of the country's official national identity and ceremonial traditions.",
    },
    {
      title: "Liberia's Atlantic Coast",
      description:
        "Liberia has an Atlantic coastline that has historically supported fishing, maritime activity, trade, and coastal settlements.",
    },
    {
      title: "Liberia's Rivers",
      description:
        "Major rivers including the St. Paul, St. John, Cestos, and Cavalla have played important roles in Liberia's geography, transportation, settlement, and economic life.",
    },
    {
      title: "The Cavalla River",
      description:
        "The Cavalla River forms part of Liberia's southeastern boundary with Côte d'Ivoire.",
    },
    {
      title: "The St. Paul River",
      description:
        "The St. Paul River is one of Liberia's important rivers and flows through the region around Monrovia and northwestern Liberia.",
    },
    {
      title: "Liberia's Rainforests",
      description:
        "Liberia contains extensive tropical rainforest, including some of the most important remaining forest landscapes in West Africa.",
    },
    {
      title: "Liberia's Biodiversity",
      description:
        "Liberia's forests provide habitat for many species and form part of the Upper Guinean Forest ecosystem.",
    },
    {
      title: "Liberia's Natural Resources",
      description:
        "Liberia possesses important natural resources including iron ore, gold, diamonds, timber, rubber, and agricultural land.",
    },
    {
      title: "Liberia's Agricultural Heritage",
      description:
        "Agriculture has long been central to livelihoods in Liberia, with crops including rice, cassava, rubber, cocoa, coffee, and oil palm.",
    },
    {
      title: "Rice in Liberia",
      description:
        "Rice has long been a major staple food and an important part of agricultural life in Liberia.",
    },
    {
      title: "Cassava in Liberia",
      description:
        "Cassava is an important food crop in Liberia and is cultivated in many parts of the country.",
    },
    {
      title: "Liberia's Fishing Heritage",
      description:
        "Fishing has historically supported many coastal Liberian communities and remains important to food security and livelihoods.",
    },
    {
      title: "Liberia's Maritime History",
      description:
        "Liberia's coastal location contributed to a long history of maritime trade, fishing, shipping, and interaction with neighboring coastal societies.",
    },
    {
      title: "Liberia's Merchant Marine",
      description:
        "Liberia became internationally significant in shipping through its ship-registration system, which developed into one of the world's major maritime registries.",
    },
    {
      title: "Liberia's International Recognition",
      description:
        "After independence in 1847, Liberia gradually gained recognition from other states, with Britain among the first to recognize the new republic.",
    },
    {
      title: "Liberia and the United States",
      description:
        "Liberia has maintained a long historical relationship with the United States dating back to the country's founding and the activities of the American Colonization Society.",
    },
    {
      title: "Liberia's Historical Records",
      description:
        "The Library of Congress holds extensive maps, books, photographs, documents, and other materials documenting Liberia's history.",
    },
    {
      title: "Liberia's Historical Importance",
      description:
        "Liberia occupies a distinctive place in African history because it became an independent republic in the nineteenth century while much of Africa remained under European colonial rule.",
    },
    {
      title: "Liberia and Ethiopia",
      description:
        "For much of the period before the wave of African independence after World War II, Liberia and Ethiopia were among the few independent African states.",
    },
    {
      title: "Liberia's Long Republican Tradition",
      description:
        "Liberia has maintained a republican political tradition since independence in 1847, although its history has also included periods of military rule and civil conflict.",
    },
  ];

  const randomFact =
    liberiaFacts[Math.floor(Math.random() * liberiaFacts.length)];

  const onThisDay =
    todayEvents.length > 0
      ? todayEvents
      : [
          {
            date: today.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            }),
            title: randomFact.title,
            description: randomFact.description,
          },
        ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="px-6 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-green-700 text-center">
          Liberia History
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm md:text-base text-gray-700">
          <a href="/">Home</a>
          <a href="/history">History</a>
          <a href="/leaders">Leaders</a>
          <a href="/culture">Culture</a>
          <a href="/symbols">Symbols</a>
          <a href="/articles">Articles</a>
          <a href="/gallery">Gallery</a>
          <a href="/timeline">Timeline</a>
          <a href="/search">Search</a>
          <a href="/about">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <NextImage
          src="/images/liberia-hero.webp"
          alt="Liberia historical heritage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Liberia's Story
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Explore the history, heroes, culture, and events that shaped
            Africa's first republic.
          </p>

          <div className="flex gap-4">
            <a
              href="/history"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Start Learning
            </a>

            <a
              href="/counties"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
            >
              Explore Liberia
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Latest Liberia History Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {latestArticles?.map((article) => (
            <div
              key={article.slug}
              className="bg-white rounded-xl shadow p-6"
            >
              {article.image_url && (
                <div className="relative w-full h-48 mb-4">
                  <NextImage
                    src={article.image_url}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold">
                {article.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {article.content.replace(/<[^>]*>/g, "").substring(0, 120)}...
              </p>

              <Link
                href={`/articles/${article.slug}`}
                className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
              >
                Read Article
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Quick Facts About Liberia
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-xl mb-2">Founded</h3>
              <p>Independent on July 26, 1847</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-xl mb-2">Capital</h3>
              <p>Monrovia</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-xl mb-2">Counties</h3>
              <p>15 Counties</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-xl mb-2">Region</h3>
              <p>West Africa</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-xl mb-2">Language</h3>
              <p>English</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Liberia's History */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Explore Liberia's History
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">
                Liberia's Independence
              </h3>

              <p className="mb-4 text-gray-700">
                Explore Liberia's journey to independence in 1847 and the
                people and events that shaped the birth of the republic.
              </p>

              <a
                href="/articles/liberia-independence"
                className="font-semibold text-blue-700"
              >
                Read the Story →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">
                Presidents & Leaders
              </h3>

              <p className="mb-4 text-gray-700">
                Meet the presidents and important leaders who influenced
                Liberia's political, social, and national development.
              </p>

              <a
                href="/leaders"
                className="font-semibold text-blue-700"
              >
                Explore Leaders →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">
                Explore the 15 Counties
              </h3>

              <p className="mb-4 text-gray-700">
                Discover the history, people, geography, culture, and
                important places found across Liberia's 15 counties.
              </p>

              <a
                href="/counties"
                className="font-semibold text-blue-700"
              >
                Explore Counties →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">
                Culture & Heritage
              </h3>

              <p className="mb-4 text-gray-700">
                Learn about Liberia's languages, traditions, music, food,
                communities, festivals, and cultural heritage.
              </p>

              <a
                href="/culture"
                className="font-semibold text-blue-700"
              >
                Discover Culture →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* On This Day */}
      <section className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            On This Day in Liberian History
          </h2>

          <div className="mt-8 bg-white text-gray-900 rounded-xl p-8 shadow-lg">
            {onThisDay.map((event, index) => (
              <div
                key={index}
                className={index > 0 ? "mt-8 border-t pt-8" : ""}
              >
                <h3 className="text-2xl font-bold text-green-700">
                  {event.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {event.date}
                </p>

                <p className="mt-4 text-lg">
                  {event.description}
                </p>
              </div>
            ))}

            {/* Liberia Map */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold">
                Liberia Counties Map
              </h2>

              <p className="mt-3">
                Explore the 15 counties of Liberia and learn about their
                history and culture.
              </p>

              <LiberiaInteractiveMap />

              {/* Counties */}
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {counties?.map((county) => (
                  <a
                    key={county.slug}
                    href={
                      county.slug === "river-cess-county"
                        ? "/counties/rivercess"
                        : county.slug === "river-gee-county"
                        ? "/counties/rivergee"
                        : `/counties/${county.slug.replace("-county", "")}`
                    }
                    className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden block"
                  >
                    <div className="relative h-40 bg-gray-200 overflow-hidden">
                      {county.image_url ? (
                        <NextImage
                          src={county.image_url}
                          alt={`${county.name} County`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          No image available
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-700">
                        {county.name}
                      </h3>

                      <p className="mt-2 text-gray-700">
                        {countyDescriptions[county.name] ||
                          county.description}
                      </p>

                      <div className="mt-4 text-blue-700 font-semibold">
                        Explore County →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


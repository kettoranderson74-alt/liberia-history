
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { liberiaHistoryEvents } from "../lib/liberia-history-events";

export default async function Home() {
  const { data: latestArticles } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(6);

  const { data: counties } = await supabase
    .from("counties")
    .select("name, slug, description, image_url")
    .eq("published", true)
    .order("name", { ascending: true });

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

  const onThisDay =
    todayEvents.length > 0
      ? todayEvents
      : [
          {
            date: today.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            }),
            title: "A Day in Liberian History",
            description:
              "No specific event has been added to our calendar for this date yet. Explore Liberia's history, leaders, counties, and culture to discover more stories from the country's past.",
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
          <a href="/search">Search</a>
          <a href="/about">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <img
          src="/images/liberia-hero.webp"
          alt="Liberia historical heritage"
          className="absolute inset-0 w-full h-full object-cover"
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
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
            {/* Independence */}
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

            {/* Leaders */}
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

            {/* Counties */}
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

            {/* Culture */}
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

              <img
                src="/images/liberia-map.png"
                alt="Liberia Counties Map"
                className="mt-6 mx-auto rounded-lg shadow-lg"
              />

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
                    <div className="h-40 bg-gray-200 overflow-hidden">
                      {county.image_url ? (
                        <img
                          src={county.image_url}
                          alt={`${county.name} County`}
                          className="w-full h-full object-cover"
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


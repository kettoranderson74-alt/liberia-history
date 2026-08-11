import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
export default async function Home() {
  const { data: latestArticles } = await supabase
  .from("articles")
  .select("*")
  .order("created_at", { ascending: false })
  .limit(6);
  const featuredArticle = latestArticles?.[0];
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navigation */}
      <nav className="px-6 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-green-700 text-center">
          🇱🇷 Liberia History
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
<img src="/images/liberia-hero.webp"
    alt="Liberia historical heritage"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-4xl px-6 text-white">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Discover Liberia's Story 🇱🇷
    </h1>

    <p className="text-xl md:text-2xl mb-8">
      Explore the history, heroes, culture, and events that shaped Africa's first republic.
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
<section className="max-w-6xl mx-auto py-12 px-6">

  <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
    Latest Liberia History Articles 🇱🇷
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {latestArticles?.map((article) => (

      <div
        key={article.slug}
        className="bg-white rounded-xl shadow p-6"
      >

        <h3 className="text-xl font-bold">
          {article.title}
        </h3>

        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}

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
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Quick Facts About Liberia 🇱🇷
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

      {/* Explore Sections */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Featured Liberia Stories 🇱🇷
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">🇱🇷</div>
        <h3 className="text-xl font-bold mb-3">
          Liberia Independence
        </h3>
        <p className="mb-4">
          Learn how Liberia became Africa's first independent republic in 1847.
        </p>
        <a
          href="/articles/liberia-independence"
          className="font-semibold text-blue-700"
        >
          Read More →
        </a>
      </div>


      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">👑</div>
        <h3 className="text-xl font-bold mb-3">
          Great Leaders
        </h3>
        <p className="mb-4">
          Discover the leaders who shaped Liberia's political journey.
        </p>
        <a
          href="/leaders"
          className="font-semibold text-blue-700"
        >
          Explore Leaders →
        </a>
      </div>


      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">📜</div>
        <h3 className="text-xl font-bold mb-3">
          Civil War Era
        </h3>
        <p className="mb-4">
          Understand Liberia's difficult years and its journey toward peace.
        </p>
        <a
          href="/articles/civil-war-history"
          className="font-semibold text-blue-700"
        >
          Read History →
        </a>
      </div>


      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="text-xl font-bold mb-3">
          Culture & Heritage
        </h3>
        <p className="mb-4">
          Explore Liberia's traditions, languages, and identity.
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




      {/* Featured Stories */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Liberia Stories
        </h2>


        <div className="grid md:grid-cols-4 gap-6">


          <div className="bg-white p-6 rounded-xl shadow">
            🇱🇷 Independence
            <p className="mt-3">
              Learn how Liberia became Africa's first independent republic.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            👑 Great Leaders
            <p className="mt-3">
              Discover the people who shaped Liberia's history.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            📜 Civil War Era
            <p className="mt-3">
              Understand Liberia's journey through conflict and peace.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            🌍 Culture
            <p className="mt-3">
              Explore Liberia's traditions and identity.
            </p>
          </div>


        </div>

      </section>




      {/* On This Day */}
      <section className="bg-green-700 text-white py-16 px-6">


        <div className="max-w-5xl mx-auto text-center">


          <h2 className="text-3xl font-bold">
            📅 On This Day in Liberian History
          </h2>


          <div className="mt-8 bg-white text-gray-900 rounded-xl p-8 shadow-lg">


            <h3 className="text-2xl font-bold text-green-700">
              July 26, 1847
            </h3>


            <p className="mt-4 text-lg">
              Liberia declared independence and became Africa's first independent republic. Joseph Jenkins Roberts later became the country's first president, marking the beginning of a new chapter in Liberian history.
            </p>



            {/* Liberia Map */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold">
                Liberia Counties Map 🇱🇷
              </h2>


              <p className="mt-3">
                Explore the 15 counties of Liberia and learn about their history and culture.
              </p>
<img
  src="/images/liberia-map.png"
  alt="Liberia Counties Map"
  className="mt-6 mx-auto rounded-lg shadow-lg"
/>

<div className="mt-10 grid md:grid-cols-3 gap-6">

{[
  "Bomi",
  "Bong",
  "Gbarpolu",
  "Grand Bassa",
  "Grand Cape Mount",
  "Grand Gedeh",
  "Grand Kru",
  "Lofa",
  "Margibi",
  "Maryland",
  "Montserrado",
  "Nimba",
  "River Cess",
  "River Gee",
  "Sinoe"
].map((county) => (

  <a
  key={county}
  href={`/counties/${county.toLowerCase().replaceAll(" ", "-")}`}
  className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden block"
>
  <div className="h-40 bg-gray-200 overflow-hidden">
  <img
    src={`/images/counties/${county.toLowerCase().replaceAll(" ", "-")}.png`}
    alt={`${county} County`}
    className="w-full h-full object-cover"
  />
</div>

  <div className="p-6">
    <h3 className="text-xl font-bold text-green-700">
      {county} County
    </h3>

    <p className="mt-2 text-gray-700">
      Discover the history, culture, and people of {county}.
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


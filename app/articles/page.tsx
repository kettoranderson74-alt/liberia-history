import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ArticlesPage() {
  const { data: articles } = await supabase
  .from("articles")
  .select("*")
  .order("created_at", { ascending: false });
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia History Articles 🇱🇷
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Read detailed stories about Liberia's past, leaders,
          important events, and cultural heritage.
        </p>
      </section>
{/* Published Articles From Database */}
<section className="max-w-6xl mx-auto py-12 px-6">

  <h2 className="text-3xl font-bold mb-8 text-center">
    Latest Liberia History Articles 🇱🇷
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {articles?.map((article) => (
      <div
        key={article.slug}
        className="bg-white rounded-xl shadow p-6"
      >

        <h3 className="text-xl font-bold">
          {article.title}
        </h3>

        <p className="mt-3 text-gray-700">
          {article.content.substring(0, 150)}...
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

      {/* Articles */}
      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">


          {/* Birth of Liberia */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/liberia.jpg"
              alt="Birth of Liberia"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              The Birth of Liberia (1822–1847)
            </h2>

            <p className="mt-3 text-gray-800">
              Discover how Liberia was founded, the arrival of settlers,
              the creation of Monrovia, and the journey to independence.
            </p>

            <Link
              href="/articles/birth-of-liberia"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Read Article
            </Link>

          </div>



          {/* Independence */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/liberia.jpg"
              alt="Liberia Independence"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              Liberia Independence
            </h2>

            <p className="mt-3 text-gray-800">
              Learn how Liberia became Africa's first independent republic
              on July 26, 1847.
            </p>

            <Link
              href="/articles/liberia-independence"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Read Article
            </Link>

          </div>



          {/* Presidents */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/roberts.jpg"
              alt="Liberia Presidents"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              Liberia's Presidents
            </h2>

            <p className="mt-3 text-gray-800">
              Explore the leaders who guided Liberia through different
              periods of history.
            </p>

            <Link
              href="/articles/liberia-presidents"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Read Article
            </Link>

          </div>



          {/* Civil War */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/liberia.jpg"
              alt="Liberia Civil War History"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              Liberia's Civil War Era
            </h2>

            <p className="mt-3 text-gray-800">
              Understand Liberia's difficult years of conflict and
              the nation's journey toward peace.
            </p>

            <Link
              href="/articles/civil-war-history"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Read Article
            </Link>

          </div>



          {/* Culture */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/liberia.jpg"
              alt="Liberian Culture"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              Liberia's Culture & Heritage
            </h2>

            <p className="mt-3 text-gray-800">
              Explore Liberia's traditions, languages, celebrations,
              and cultural identity.
            </p>

            <Link
              href="/culture"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Explore Culture
            </Link>

          </div>



          {/* National Symbols */}
          <div className="bg-white rounded-xl shadow p-6">

            <Image
              src="/images/liberia.jpg"
              alt="Liberia National Symbols"
              width={400}
              height={250}
              className="rounded-xl w-full h-56 object-cover"
            />

            <h2 className="text-xl font-bold mt-5">
              Liberia's National Symbols
            </h2>

            <p className="mt-3 text-gray-800">
              Learn the meaning and history behind Liberia's flag,
              anthem, coat of arms, and national symbols.
            </p>

            <Link
              href="/symbols"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Explore Symbols
            </Link>

          </div>


        </div>

      </section>

    </main>
  );
}
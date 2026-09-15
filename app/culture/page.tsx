export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

function stripHtml(html: string) {
  return html
    .replace(/<img[^>]*>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function CulturePage() {
  const { data: cultures, error } = await supabase
    .from("cultures")
    .select("*")
    .eq("published", true)
    .not("title", "is", null)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Culture loading error:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia Culture & Heritage
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore stories about Liberia's diverse cultures, communities,
          traditions, languages, arts, food, music, heritage, and identity.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Culture & Heritage Articles
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Read detailed articles exploring the people, traditions,
            history, and cultural heritage of Liberia.
          </p>
        </div>

        {!cultures || cultures.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border p-10 text-center">
            <p className="text-gray-500">
              No culture articles have been published yet.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cultures.map((culture) => (
              <article
                key={culture.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col"
              >

                {culture.featured_image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={culture.featured_image}
                      alt={culture.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">

                  <h3 className="text-xl font-bold text-gray-900">
                    {culture.title}
                  </h3>

                  <p className="mt-3 text-gray-700 line-clamp-4">
                    {stripHtml(culture.content || "").substring(0, 180)}
                    {culture.content ? "..." : ""}
                  </p>

                  <Link
                    href={`/culture/${culture.slug}`}
                    className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg self-start hover:bg-green-800"
                  >
                    Read Culture Article
                  </Link>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}
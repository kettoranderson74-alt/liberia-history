import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function GalleryPage() {
  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("id, title, slug, content, featured_image")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="bg-green-700 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold">
            Liberia History Gallery
          </h1>

          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Explore photographs and visual stories from Liberia's history,
            culture, people, and national heritage.
          </p>
        </section>

        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
            <p className="text-red-600">
              Unable to load the gallery.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia History Gallery
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore photographs and visual stories from Liberia's history,
          culture, people, and national heritage.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6">
        {gallery && gallery.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <Link
                key={item.id}
                href={`/gallery/${item.slug}`}
                className="bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
              >
                {item.featured_image ? (
                  <img
                    src={item.featured_image}
                    alt={item.title}
                    className="w-full h-[240px] object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-[240px] bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">
                      No image available
                    </span>
                  </div>
                )}

                <h2 className="text-2xl font-bold mt-5 text-green-700">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-700 line-clamp-3">
                  {item.content
                    ?.replace(/<[^>]*>/g, "")
                    .slice(0, 180)}
                  {item.content &&
                  item.content.replace(/<[^>]*>/g, "").length > 180
                    ? "..."
                    : ""}
                </p>

                <p className="mt-5 text-green-700 font-bold">
                  Learn More
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border p-10 text-center">
            <p className="text-gray-500">
              No gallery articles have been published yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
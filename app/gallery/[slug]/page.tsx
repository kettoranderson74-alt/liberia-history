import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function GalleryArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: galleryItem, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !galleryItem) {
    notFound();
  }

  const content = galleryItem.content || "";

  const featuredImageAlreadyInContent =
    galleryItem.featured_image &&
    content.includes(galleryItem.featured_image);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            {galleryItem.title}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <article className="bg-white rounded-xl shadow-sm border p-6 md:p-10">
          {!featuredImageAlreadyInContent &&
            galleryItem.featured_image && (
              <img
                src={galleryItem.featured_image}
                alt={galleryItem.title}
                className="w-full max-h-[550px] object-cover rounded-xl mb-8"
              />
            )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </article>
      </section>
    </main>
  );
}
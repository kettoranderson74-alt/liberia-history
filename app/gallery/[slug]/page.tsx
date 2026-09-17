import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

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
        <article className="p-0">
          {!featuredImageAlreadyInContent &&
            galleryItem.featured_image && (
              <img
                src={galleryItem.featured_image}
                alt={galleryItem.title}
                className="w-full max-h-[550px] object-cover rounded-xl mb-10"
              />
            )}

          <div
            className="
              prose
              prose-lg
              max-w-none

              [&_p]:mb-6
              [&_p]:leading-8

              [&_h2]:mt-10
              [&_h2]:mb-4
              [&_h2]:text-3xl
              [&_h2]:font-bold

              [&_h3]:mt-8
              [&_h3]:mb-3
              [&_h3]:text-2xl
              [&_h3]:font-bold

              [&_ul]:my-6
              [&_ol]:my-6
              [&_li]:mb-2

              [&_a]:text-blue-600
              [&_a]:underline
              [&_a:hover]:text-blue-800

              [&_img]:rounded-xl
              [&_img]:my-8
            "
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </article>
      </section>
    </main>
  );
}
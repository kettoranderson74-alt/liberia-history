
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function CultureArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: culture, error } = await supabase
    .from("cultures")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !culture) {
    notFound();
  }

  const content = culture.content || "";

  const featuredImageAlreadyInContent =
    culture.featured_image &&
    content.includes(culture.featured_image);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            {culture.title}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <article className="bg-white rounded-xl shadow-sm border p-6 md:p-10">

          {!featuredImageAlreadyInContent &&
            culture.featured_image && (
              <img
                src={culture.featured_image}
                alt={culture.title}
                className="w-full max-h-[550px] object-cover rounded-xl mb-8"
              />
            )}

          <div
            className="culture-article"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />

          <style>{`
            .culture-article {
              font-size: 1.125rem;
              line-height: 1.8;
              color: #374151;
            }

            .culture-article p {
              margin-top: 0;
              margin-bottom: 1.5rem;
              line-height: 1.8;
            }

            .culture-article p:last-child {
              margin-bottom: 0;
            }

            .culture-article h1 {
              font-size: 2.25rem;
              font-weight: 700;
              line-height: 1.3;
              margin-top: 2.5rem;
              margin-bottom: 1.25rem;
              color: #166534;
            }

            .culture-article h2 {
              font-size: 1.75rem;
              font-weight: 700;
              line-height: 1.4;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              color: #166534;
            }

            .culture-article h3 {
              font-size: 1.4rem;
              font-weight: 700;
              line-height: 1.4;
              margin-top: 2rem;
              margin-bottom: 0.75rem;
              color: #166534;
            }

            .culture-article ul,
            .culture-article ol {
              margin-top: 1rem;
              margin-bottom: 1.5rem;
              padding-left: 1.75rem;
            }

            .culture-article li {
              margin-bottom: 0.5rem;
              line-height: 1.8;
            }

            .culture-article img {
              display: block;
              max-width: 100%;
              height: auto;
              margin: 2rem auto;
              border-radius: 0.75rem;
            }

            .culture-article blockquote {
              margin: 2rem 0;
              padding-left: 1.25rem;
              border-left: 4px solid #16a34a;
              font-style: italic;
            }

            .culture-article a {
              text-decoration: underline;
            }

            .culture-article > *:first-child {
              margin-top: 0;
            }
          `}</style>

        </article>
      </section>
    </main>
  );
}


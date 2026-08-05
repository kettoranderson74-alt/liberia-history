import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!article) {
    return {
      title: "Article Not Found | Liberia History",
    };
  }

  const description = article.content.substring(0, 160);

  return {
    title: `${article.title} | Liberia History`,
    description,

    openGraph: {
      title: article.title,
      description,
      images: article.image_url ? [article.image_url] : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: article.image_url ? [article.image_url] : [],
    },
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !article) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold">
          Article not found
        </h1>
      </main>
    );
  }

  const { data: relatedArticles } = await supabase
    .from("articles")
    .select("*")
    .eq("category", article.category)
    .neq("slug", article.slug)
    .limit(3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.content.substring(0, 160),
    image: article.image_url ? [article.image_url] : [],
    datePublished: article.created_at,

    publisher: {
      "@type": "Organization",
      name: "Liberia History",
      logo: {
        "@type": "ImageObject",
        url: "https://liberia-history-liberia.vercel.app/logo.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow overflow-hidden">

        {article.image_url && (
          <Image
            src={article.image_url}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />
        )}

        <div className="p-8">

          <div className="mb-4">
            <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>


          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {article.title}
          </h1>


          <p className="text-gray-500 mb-8">
            Published {new Date(article.created_at).toDateString()}
          </p>


          <div
  className="prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{
    __html: article.content,
  }}
/>


        </div>

      </article>


      {relatedArticles && relatedArticles.length > 0 && (

        <section className="max-w-4xl mx-auto mt-10">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Related Articles
          </h2>


          <div className="grid md:grid-cols-3 gap-6">

            {relatedArticles.map((related) => (

              <Link
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
              >

                {related.image_url && (

                  <Image
                    src={related.image_url}
                    alt={related.title}
                    width={500}
                    height={250}
                    className="w-full h-44 object-cover"
                  />

                )}


                <div className="p-4">

                  <h3 className="font-bold text-lg">
                    {related.title}
                  </h3>

                  <p className="text-green-700 mt-2 text-sm">
                    {related.category}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

      )}

    </main>
  );
}
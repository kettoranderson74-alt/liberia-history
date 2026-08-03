import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function TestArticlesPage() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        📚 Articles From Supabase
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-6">
          <strong>Error:</strong> {error.message}
        </div>
      )}

      {!articles || articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="grid gap-6">
          {articles.map((article: any) => (
            <div
              key={article.slug}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold">
                {article.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Slug: {article.slug}
              </p>

              <p className="mt-4">
                {article.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
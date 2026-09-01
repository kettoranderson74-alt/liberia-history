
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function loadArticles() {
      const { data } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (data) {
        setArticles(data);
      }
    }

    loadArticles();
  }, []);

  // Creates the same ID format used by the article page.
  function createHeadingId(text: string) {
    return text
      .replace(/<[^>]*>/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }
function getSectionId(content: string, searchTerm: string) {
  if (!searchTerm.trim()) {
    return "";
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  const headings = Array.from(
    doc.querySelectorAll("h2, h3")
  );

  const target = searchTerm.toLowerCase().trim();

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];

    // Check the heading itself
    const headingText =
      heading.textContent?.toLowerCase() || "";

    if (headingText.includes(target)) {
      return createHeadingId(
        heading.textContent?.trim() || ""
      );
    }

    // Check everything until the next heading
    let current = heading.nextElementSibling;
    let sectionText = "";

    while (current) {
      if (
        current.tagName === "H2" ||
        current.tagName === "H3"
      ) {
        break;
      }

      sectionText +=
        " " + (current.textContent || "");

      current = current.nextElementSibling;
    }

    if (
      sectionText
        .toLowerCase()
        .includes(target)
    ) {
      return createHeadingId(
        heading.textContent?.trim() || ""
      );
    }
  }

  return "";
}

  const target = search
    .toLowerCase()
    .trim();

  const results = target
    ? articles.filter((article) => {
        const title =
          article.title?.toLowerCase() || "";

        const content =
          article.content?.toLowerCase() || "";

        return (
          title.includes(target) ||
          content.includes(target)
        );
      })
    : [];

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Search Liberia History 🇱🇷
        </h1>

        <p className="mt-4 text-lg">
          Find history articles, leaders, counties, and important events.
        </p>

      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">

        <input
          type="text"
          placeholder="Search history..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-4 rounded-xl shadow border text-lg"
        />

        <div className="mt-8 space-y-5">

          {results.length === 0 ? (

            <p className="bg-white p-6 rounded-xl shadow">
              {target
                ? "No articles found."
                : "Enter something to search Liberia History."}
            </p>

          ) : (

            results.map((article) => {

              const sectionId =
                getSectionId(
                  article.content || "",
                  search
                );
                
console.log("SEARCH:", search);
console.log("SECTION ID:", sectionId);
              const articleLink =
                sectionId
                  ? `/articles/${article.slug}#${sectionId}`
                  : `/articles/${article.slug}`;

              return (
                <Link
                  key={article.id}
                  href={articleLink}
                  className="block bg-white p-6 rounded-xl shadow hover:shadow-lg"
                >

                  <h2 className="text-2xl font-bold">
                    {article.title}
                  </h2>

                  <p className="text-green-700 mt-2">
                    {article.category}
                  </p>

                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {article.content
                      ?.replace(/<[^>]+>/g, "")
                      || ""}
                  </p>

                  {sectionId && (
                    <p className="mt-4 text-green-700 font-semibold">
                      Jump to matching section →
                    </p>
                  )}

                </Link>
              );
            })

          )}

        </div>

      </section>

    </main>
  );
}

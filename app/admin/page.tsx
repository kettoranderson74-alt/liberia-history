"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Editor from "../components/Editor";
import AdminLayout from "./components/AdminLayout";
import AdminHeader from "./components/AdminHeader";
import DashboardStats from "./components/DashboardStats";
import EventManager from "./components/EventManager";
import PeopleManager from "./components/PeopleManager";
import CountyManager from "./components/CountyManager";
import CultureManager from "./components/CultureManager";
import SymbolManager from "./components/SymbolManager";
import GalleryManager from "./components/GalleryManager";
import SourceManager from "./components/SourceManager";
function AdminPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

 const [section, setSection] = useState("dashboard");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [articles, setArticles] = useState<any[]>([]);
  const [featuredImage, setFeaturedImage] = useState("");
  const [editingTitle, setEditingTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
const [sources, setSources] = useState<any[]>([]);
const [selectedSources, setSelectedSources] = useState<string[]>([]);
const [editingArticleId, setEditingArticleId] = useState<number | null>(null);
  const [stats, setStats] = useState({
    people: 0,
    events: 0,
    counties: 0,
    cultures: 0,
    symbols: 0,
    gallery: 0,
    sources: 0,
  });

  async function loadArticles() {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setArticles(data);
    }

    const tables = [
      "people",
      "historical_events",
      "counties",
      "cultures",
      "symbols",
      "gallery",
      "sources",
    ];

    const results = await Promise.all(
      tables.map(async (table) => {
        const { count } = await supabase
          .from(table)
          .select("id", { count: "exact", head: true });

        return {
          table,
          count: count || 0,
        };
      })
    );

    const newStats = {
      people: 0,
      events: 0,
      counties: 0,
      cultures: 0,
      symbols: 0,
      gallery: 0,
      sources: 0,
    };

    results.forEach(({ table, count }) => {
      if (table === "people") newStats.people = count;
      if (table === "historical_events") newStats.events = count;
      if (table === "counties") newStats.counties = count;
      if (table === "cultures") newStats.cultures = count;
      if (table === "symbols") newStats.symbols = count;
      if (table === "gallery") newStats.gallery = count;
      if (table === "sources") newStats.sources = count;
    });

    setStats(newStats);
  }

  useEffect(() => {
  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      router.push("/login");
      return;
    }

    loadArticles();
loadSources();
  }
async function loadSources() {
  const { data, error } = await supabase
    .from("sources")
    .select("*")
    .eq("published", true)
    .order("title", { ascending: true });

  if (error) {
    setMessage("Source loading error: " + error.message);
    return;
  }

  if (data) {
    setSources(data);
  }
}
  checkUser();
}, [router]);

// ADD IT HERE
useEffect(() => {
  const currentSection = searchParams.get("section") || "dashboard";
  setSection(currentSection);
}, [searchParams]);
 async function editArticle(article: any) {
  setTitle(article.title);
  setContent(article.content);
  setFeaturedImage(article.image_url || "");
  setEditingTitle(article.title);
  setEditingArticleId(article.id);
  setIsEditing(true);
  setMessage("Editing article...");

  const { data: articleSources, error } = await supabase
    .from("article_sources")
    .select("source_id")
    .eq("article_id", article.id);

  if (error) {
    setMessage("Source loading error: " + error.message);
    return;
  }

  setSelectedSources(
    articleSources?.map((item) => item.source_id) || []
  );
}

  async function updateArticle() {
  if (!editingArticleId) {
    setMessage("Unable to identify the article.");
    return;
  }

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      content,
      image_url: featuredImage,
    })
    .eq("id", editingArticleId);

  if (error) {
    setMessage("Update error: " + error.message);
    return;
  }

  const { error: deleteSourceError } = await supabase
    .from("article_sources")
    .delete()
    .eq("article_id", editingArticleId);

  if (deleteSourceError) {
    setMessage(
      "Article updated, but existing sources could not be cleared: " +
        deleteSourceError.message
    );
    return;
  }

  if (selectedSources.length > 0) {
    const sourceRows = selectedSources.map((sourceId) => ({
      article_id: editingArticleId,
      source_id: sourceId,
    }));

    const { error: sourceError } = await supabase
      .from("article_sources")
      .insert(sourceRows);

    if (sourceError) {
      setMessage(
        "Article updated, but sources could not be attached: " +
          sourceError.message
      );
      return;
    }
  }

  setMessage("Article updated successfully!");

  setTitle("");
  setContent("");
  setFeaturedImage("");
  setEditingTitle("");
  setEditingArticleId(null);
  setSelectedSources([]);
  setIsEditing(false);

  loadArticles();
}

  async function deleteArticle(id: any) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("✅ Article deleted successfully!");

    loadArticles();
  }
function toggleSource(sourceId: string) {
  setSelectedSources((current) =>
    current.includes(sourceId)
      ? current.filter((id) => id !== sourceId)
      : [...current, sourceId]
  );
}async function addArticle() {
  if (!title || !content) {
    setMessage("Please enter title and content.");
    return;
  }

  setMessage("Publishing...");

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  const { data: article, error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        slug,
        category: "Liberia History",
        image_url: featuredImage,
        content,
        published: true,
      },
    ])
    .select("id")
    .single();

  if (error) {
    setMessage("Database error: " + error.message);
    return;
  }

  if (selectedSources.length > 0) {
    const sourceRows = selectedSources.map((sourceId) => ({
      article_id: article.id,
      source_id: sourceId,
    }));

    const { error: sourceError } = await supabase
      .from("article_sources")
      .insert(sourceRows);

    if (sourceError) {
      setMessage(
        "Article published, but sources could not be attached: " +
          sourceError.message
      );
      return;
    }
  }

  setMessage("Article published successfully!");

  setTitle("");
  setContent("");
  setFeaturedImage("");
  setSelectedSources([]);

  loadArticles();
}

  function renderDashboard() {
    return (
      <>
        <AdminHeader
          title="Dashboard"
          description="Manage your Liberia History platform"
        />

        <main className="p-6">
          <div className="max-w-6xl mx-auto space-y-8">

            <DashboardStats
              articles={articles.length}
              people={stats.people}
              events={stats.events}
              counties={stats.counties}
              cultures={stats.cultures}
              symbols={stats.symbols}
              gallery={stats.gallery}
              sources={stats.sources}
            />

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold text-green-800 mb-6">
                {isEditing ? "Edit Article" : "Create New Article"}
              </h2>

              <div className="mb-4">
                <input
                  className="border p-3 w-full rounded mb-4"
                  placeholder="Article title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

               <Editor
  value={content}
  featuredImage={featuredImage}
  onChange={setContent}
  onFeaturedImageChange={setFeaturedImage}
/>
                <div className="mt-6 border rounded-lg p-5">
  <h3 className="text-lg font-bold text-gray-800 mb-3">
    Sources
  </h3>

  <p className="text-sm text-gray-500 mb-4">
    Select the sources that support this article.
  </p>

  {sources.length === 0 ? (
    <p className="text-sm text-gray-500">
      No published sources available.
    </p>
  ) : (
    <div className="space-y-3">
      {sources.map((source) => (
        <label
          key={source.id}
          className="flex items-start gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
        >
          <input
            type="checkbox"
            checked={selectedSources.includes(source.id)}
            onChange={() => toggleSource(source.id)}
            className="mt-1"
          />

          <div>
            <p className="font-semibold text-gray-800">
              {source.title}
            </p>

            {source.author && (
              <p className="text-sm text-gray-500">
                {source.author}
              </p>
            )}

            {source.organization && (
              <p className="text-sm text-gray-500">
                {source.organization}
              </p>
            )}
          </div>
        </label>
      ))}
    </div>
  )}
</div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={isEditing ? updateArticle : addArticle}
                  className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
                >
                  {isEditing ? "Update Article" : "Publish Article"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                   onClick={() => {
  setTitle("");
  setContent("");
  setFeaturedImage("");
  setEditingTitle("");
  setEditingArticleId(null);
  setSelectedSources([]);
  setIsEditing(false);
  setMessage("");
}}
                    className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>

              {message && (
                <p className="mt-5 font-semibold">
                  {message}
                </p>
              )}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    Published Articles
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {articles.length} article
                    {articles.length === 1 ? "" : "s"} published
                  </p>
                </div>
              </div>

              {articles.length === 0 ? (
                <div className="border border-dashed rounded-xl p-10 text-center">
                  <p className="text-gray-500">
                    No articles have been published yet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">
                          Title
                        </th>

                        <th className="border p-3 text-left">
                          Category
                        </th>

                        <th className="border p-3 text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {articles.map((article) => (
                        <tr key={article.id}>
                          <td className="border p-3">
                            {article.title}
                          </td>

                          <td className="border p-3">
                            {article.category}
                          </td>

                          <td className="border p-3">
                            <button
                              type="button"
                              onClick={() => editArticle(article)}
                              className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                            >
                              Edit
                            </button>

                            <button
                              type="button"
                              onClick={() => deleteArticle(article.id)}
                              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        </main>
      </>
    );
  }

  function renderEvents() {
    return (
      <>
        <AdminHeader
          title="Historical Events"
          description="Create and manage important events in Liberian history"
        />

        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <EventManager />
          </div>
        </main>
      </>
    );
  }
function renderPeople() {
  return (
    <>
      <AdminHeader
        title="People"
        description="Create and manage important people in Liberian history"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <PeopleManager />
        </div>
      </main>
    </>
  );
}
function renderCounties() {
  return (
    <>
      <AdminHeader
        title="Counties"
        description="Create and manage detailed information about Liberia's 15 counties"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <CountyManager />
        </div>
      </main>
    </>
  );
}
function renderCulture() {
  return (
    <>
      <AdminHeader
        title="Culture"
        description="Create and manage Liberia culture articles"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <CultureManager />
        </div>
      </main>
    </>
  );
}
function renderSymbols() {
  return (
    <>
      <AdminHeader
        title="Symbols"
        description="Create and manage Liberia's national symbols"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <SymbolManager />
        </div>
      </main>
    </>
  );
}
function renderGallery() {
  return (
    <>
      <AdminHeader
        title="Gallery"
        description="Create and manage Liberia history gallery articles"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <GalleryManager />
        </div>
      </main>
    </>
  );
}
function renderSources() {
  return (
    <>
      <AdminHeader
        title="Sources"
        description="Manage historical and research sources for Liberia History"
      />

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
          <SourceManager />
        </div>
      </main>
    </>
  );
}
 return (
  <AdminLayout>
    {section === "events"
      ? renderEvents()
      : section === "people"
      ? renderPeople()
      : section === "counties"
      ? renderCounties()
      : section === "culture"
      ? renderCulture()
      : section === "symbols"
? renderSymbols()
: section === "gallery"
? renderGallery()
: section === "sources"
? renderSources()
      : renderDashboard()}
  </AdminLayout>
);
}
export default function AdminPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading admin...</div>}>
      <AdminPageContent />
    </Suspense>
  );
}
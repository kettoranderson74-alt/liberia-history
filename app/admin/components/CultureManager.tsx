"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Editor from "../../components/Editor";

type Culture = {
  id: string;
  title: string;
  content: string;
  images: string[];
  featured_image: string | null;
  published: boolean;
  created_at: string;
};

export default function CultureManager() {
  const [cultures, setCultures] = useState<Culture[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  async function loadCultures() {
    const { data, error } = await supabase
      .from("cultures")
      .select(
        "id, title, content, images, featured_image, published, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Error loading culture articles: " + error.message);
      return;
    }

    setCultures(data || []);
  }

  useEffect(() => {
    loadCultures();
  }, []);

  function getImagesFromContent(html: string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const urls: string[] = [];

    tempDiv.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src");

      if (src && !urls.includes(src)) {
        urls.push(src);
      }
    });

    return urls;
  }

  function handleContentChange(value: string) {
    setContent(value);

    const contentImages = getImagesFromContent(value);

    setImages((previous) => {
      const combined = [...previous];

      contentImages.forEach((url) => {
        if (!combined.includes(url)) {
          combined.push(url);
        }
      });

      return combined;
    });
  }

  function handleFeaturedImageChange(url: string) {
    setFeaturedImage(url);

    setImages((previous) => {
      if (previous.includes(url)) {
        return previous;
      }

      return [...previous, url];
    });
  }

  function startEdit(culture: Culture) {
    setEditingId(culture.id);
    setTitle(culture.title || "");
    setContent(culture.content || "");
    setImages(culture.images || []);
    setFeaturedImage(culture.featured_image || "");
    setMessage("Editing culture article...");
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle("");
    setContent("");
    setImages([]);
    setFeaturedImage("");
    setMessage("");
  }

  async function saveCulture() {
    if (!title.trim() || !content.trim()) {
      setMessage("Please enter a title and article content.");
      return;
    }

    setMessage(editingId ? "Updating..." : "Publishing...");

    const contentImages = getImagesFromContent(content);

    const allImages = [...images];

    contentImages.forEach((url) => {
      if (!allImages.includes(url)) {
        allImages.push(url);
      }
    });

    const finalFeaturedImage =
      featuredImage || allImages[0] || null;

    if (editingId) {
      const { error } = await supabase
        .from("cultures")
        .update({
          title: title.trim(),
          content,
          images: allImages,
          featured_image: finalFeaturedImage,
          published: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingId);

      if (error) {
        setMessage("Update error: " + error.message);
        return;
      }

      setMessage("Culture article updated successfully.");
    } else {
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

      const { error } = await supabase.from("cultures").insert([
        {
          title: title.trim(),
          name: title.trim(),
          slug,
          content,
          images: allImages,
          featured_image: finalFeaturedImage,
          image_url: finalFeaturedImage,
          published: true,
        },
      ]);

      if (error) {
        setMessage("Database error: " + error.message);
        return;
      }

      setMessage("Culture article published successfully.");
    }

    cancelEdit();
    await loadCultures();
  }

  async function deleteCulture(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this culture article?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("cultures")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("Culture article deleted successfully.");

    await loadCultures();
  }

  return (
    <div className="space-y-8">

      <div className="bg-white rounded-xl shadow-sm border p-8">

        <h2 className="text-2xl font-bold text-green-800 mb-6">
          {editingId
            ? "Edit Culture Article"
            : "Create Culture Article"}
        </h2>

        <input
          type="text"
          placeholder="Culture article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded mb-5"
        />

        <Editor
          value={content}
          onChange={handleContentChange}
          onFeaturedImageChange={handleFeaturedImageChange}
        />

        <div className="flex gap-3 mt-6 flex-wrap">

          <button
            type="button"
            onClick={saveCulture}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {editingId
              ? "Update Culture Article"
              : "Publish Culture Article"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
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

      <div className="bg-white rounded-xl shadow-sm border p-8">

        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Culture Articles
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {cultures.length} culture article
            {cultures.length === 1 ? "" : "s"}
          </p>
        </div>

        {cultures.length === 0 ? (
          <div className="border border-dashed rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No culture articles have been created yet.
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
                    Images
                  </th>

                  <th className="border p-3 text-left">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>

                {cultures.map((culture) => (
                  <tr key={culture.id}>

                    <td className="border p-3">
                      {culture.title}
                    </td>

                    <td className="border p-3">
                      {culture.images?.length || 0}
                    </td>

                    <td className="border p-3">

                      <button
                        type="button"
                        onClick={() => startEdit(culture)}
                        className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteCulture(culture.id)
                        }
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
  );
}
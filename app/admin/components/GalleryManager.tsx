"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Editor from "../../components/Editor";

type GalleryArticle = {
  id: string;
  title: string;
  slug: string;
  content: string;
  featured_image: string | null;
  images: string[];
  published: boolean;
  created_at: string;
};

export default function GalleryManager() {
  const [gallery, setGallery] = useState<GalleryArticle[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  async function loadGallery() {
    const { data, error } = await supabase
      .from("gallery")
      .select(
        "id, title, slug, content, featured_image, images, published, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Error loading gallery: " + error.message);
      return;
    }

    setGallery(data || []);
  }

  useEffect(() => {
    loadGallery();
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
  }

  function startEdit(item: GalleryArticle) {
    setEditingId(item.id);
    setTitle(item.title || "");
    setContent(item.content || "");
    setImages(item.images || []);
    setFeaturedImage(item.featured_image || "");
    setMessage("Editing gallery article...");
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle("");
    setContent("");
    setImages([]);
    setFeaturedImage("");
    setMessage("");
  }

  async function saveGalleryArticle() {
    if (!title.trim() || !content.trim()) {
      setMessage("Please enter a title and gallery content.");
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
        .from("gallery")
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

      setMessage("Gallery article updated successfully.");
    } else {
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

      const { error } = await supabase.from("gallery").insert([
        {
          title: title.trim(),
          slug,
          content,
          images: allImages,
          featured_image: finalFeaturedImage,
          published: true,
        },
      ]);

      if (error) {
        setMessage("Database error: " + error.message);
        return;
      }

      setMessage("Gallery article published successfully.");
    }

    cancelEdit();
    await loadGallery();
  }

  async function deleteGalleryArticle(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this gallery article?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("gallery")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("Gallery article deleted successfully.");

    await loadGallery();
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          {editingId
            ? "Edit Gallery Article"
            : "Create Gallery Article"}
        </h2>

        <input
          type="text"
          placeholder="Gallery article title"
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
            onClick={saveGalleryArticle}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {editingId
              ? "Update Gallery Article"
              : "Publish Gallery Article"}
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
            Gallery Articles
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {gallery.length} gallery article
            {gallery.length === 1 ? "" : "s"}
          </p>
        </div>

        {gallery.length === 0 ? (
          <div className="border border-dashed rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No gallery articles have been created yet.
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
                {gallery.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-3">
                      {item.title}
                    </td>

                    <td className="border p-3">
                      {item.images?.length || 0}
                    </td>

                    <td className="border p-3">
                      <button
                        type="button"
                        onClick={() => startEdit(item)}
                        className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteGalleryArticle(item.id)
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
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Source = {
  id: string;
  title: string;
  author: string | null;
  organization: string | null;
  source_type: string | null;
  publication_date: string | null;
  url: string | null;
  description: string | null;
  published: boolean;
  created_at: string;
};

export default function SourceManager() {
  const [sources, setSources] = useState<Source[]>([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [organization, setOrganization] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  async function loadSources() {
    const { data, error } = await supabase
      .from("sources")
      .select(
        "id, title, author, organization, source_type, publication_date, url, description, published, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Error loading sources: " + error.message);
      return;
    }

    setSources(data || []);
  }

  useEffect(() => {
    loadSources();
  }, []);

  function startEdit(source: Source) {
    setEditingId(source.id);

    setTitle(source.title || "");
    setAuthor(source.author || "");
    setOrganization(source.organization || "");
    setSourceType(source.source_type || "");
    setPublicationDate(source.publication_date || "");
    setUrl(source.url || "");
    setDescription(source.description || "");

    setMessage("Editing source...");
  }

  function cancelEdit() {
    setEditingId(null);

    setTitle("");
    setAuthor("");
    setOrganization("");
    setSourceType("");
    setPublicationDate("");
    setUrl("");
    setDescription("");

    setMessage("");
  }

  async function saveSource() {
    if (!title.trim()) {
      setMessage("Please enter a source title.");
      return;
    }

    setMessage(editingId ? "Updating..." : "Adding source...");

    if (editingId) {
      const { error } = await supabase
        .from("sources")
        .update({
          title: title.trim(),
          author: author.trim() || null,
          organization: organization.trim() || null,
          source_type: sourceType.trim() || null,
          publication_date: publicationDate || null,
          url: url.trim() || null,
          description: description.trim() || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingId);

      if (error) {
        setMessage("Update error: " + error.message);
        return;
      }

      setMessage("Source updated successfully.");
    } else {
      const { error } = await supabase.from("sources").insert([
        {
          title: title.trim(),
          author: author.trim() || null,
          organization: organization.trim() || null,
          source_type: sourceType.trim() || null,
          publication_date: publicationDate || null,
          url: url.trim() || null,
          description: description.trim() || null,
          published: true,
        },
      ]);

      if (error) {
        setMessage("Database error: " + error.message);
        return;
      }

      setMessage("Source added successfully.");
    }

    cancelEdit();
    await loadSources();
  }

  async function deleteSource(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this source?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("sources")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("Source deleted successfully.");

    await loadSources();
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          {editingId ? "Edit Source" : "Add Source"}
        </h2>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Source title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <input
            type="text"
            placeholder="Organization or Institution"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <select
            value={sourceType}
            onChange={(e) => setSourceType(e.target.value)}
            className="border p-3 w-full rounded bg-white"
          >
            <option value="">Select source type</option>
            <option value="Book">Book</option>
            <option value="Academic Article">Academic Article</option>
            <option value="Government Document">
              Government Document
            </option>
            <option value="Archive">Archive</option>
            <option value="Museum">Museum</option>
            <option value="University">University</option>
            <option value="Website">Website</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Other">Other</option>
          </select>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publication Date
            </label>

            <input
              type="date"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
              className="border p-3 w-full rounded"
            />
          </div>

          <input
            type="url"
            placeholder="Source URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-3 w-full rounded"
          />

          <textarea
            placeholder="Description or research notes"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="border p-3 w-full rounded"
          />
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          <button
            type="button"
            onClick={saveSource}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {editingId ? "Update Source" : "Add Source"}
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
            Source Library
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {sources.length} source
            {sources.length === 1 ? "" : "s"}
          </p>
        </div>

        {sources.length === 0 ? (
          <div className="border border-dashed rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No sources have been added yet.
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
                    Author / Organization
                  </th>

                  <th className="border p-3 text-left">
                    Type
                  </th>

                  <th className="border p-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {sources.map((source) => (
                  <tr key={source.id}>
                    <td className="border p-3">
                      {source.title}
                    </td>

                    <td className="border p-3">
                      {source.author ||
                        source.organization ||
                        "—"}
                    </td>

                    <td className="border p-3">
                      {source.source_type || "—"}
                    </td>

                    <td className="border p-3">
                      <button
                        type="button"
                        onClick={() => startEdit(source)}
                        className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteSource(source.id)}
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
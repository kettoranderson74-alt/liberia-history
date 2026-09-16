"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type HistoricalEvent = {
  id: string;
  title: string;
  slug: string;
  event_date: string | null;
  year: number | null;
  summary: string | null;
  description: string | null;
  image_url: string | null;
  article_url: string | null;
  published: boolean;
};

export default function EventManager() {
  const [events, setEvents] = useState<HistoricalEvent[]>([]);

  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [articleUrl, setArticleUrl] = useState("");
  const [published, setPublished] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadEvents() {
    const { data, error } = await supabase
      .from("historical_events")
      .select("*")
      .order("event_date", { ascending: false });

    if (error) {
      setMessage("Error loading events: " + error.message);
      return;
    }

    setEvents(data || []);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function createSlug(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  }

  function resetForm() {
    setTitle("");
    setEventDate("");
    setYear("");
    setSummary("");
    setDescription("");
    setImageUrl("");
    setArticleUrl("");
    setPublished(true);
    setEditingId(null);
  }

  function editEvent(event: HistoricalEvent) {
    setEditingId(event.id);
    setTitle(event.title);
    setEventDate(event.event_date || "");
    setYear(event.year ? String(event.year) : "");
    setSummary(event.summary || "");
    setDescription(event.description || "");
    setImageUrl(event.image_url || "");
    setArticleUrl(event.article_url || "");
    setPublished(event.published);

    setMessage("Editing event...");
  }

  async function saveEvent() {
    if (!title.trim()) {
      setMessage("Please enter an event title.");
      return;
    }

    setLoading(true);
    setMessage(editingId ? "Updating event..." : "Adding event...");

    const eventData = {
      title: title.trim(),
      slug: createSlug(title),
      event_date: eventDate || null,
      year: year ? Number(year) : null,
      summary: summary.trim() || null,
      description: description.trim() || null,
      image_url: imageUrl.trim() || null,
      article_url: articleUrl.trim() || null,
      published,
    };

    let error;

    if (editingId) {
      const result = await supabase
        .from("historical_events")
        .update(eventData)
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from("historical_events")
        .insert([eventData]);

      error = result.error;
    }

    if (error) {
      setMessage("Database error: " + error.message);
      setLoading(false);
      return;
    }

    setMessage(
      editingId
        ? "Event updated successfully!"
        : "Event added successfully!"
    );

    resetForm();
    await loadEvents();

    setLoading(false);
  }

  async function deleteEvent(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this historical event?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("historical_events")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("Event deleted successfully!");

    await loadEvents();
  }

  async function togglePublished(event: HistoricalEvent) {
    const { error } = await supabase
      .from("historical_events")
      .update({
        published: !event.published,
      })
      .eq("id", event.id);

    if (error) {
      setMessage("Update error: " + error.message);
      return;
    }

    setMessage(
      event.published
        ? "Event unpublished."
        : "Event published."
    );

    await loadEvents();
  }

  return (
    <div className="space-y-8">

      {/* Event Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-green-800">
              {editingId ? "Edit Historical Event" : "Add Historical Event"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create and manage important events in Liberian history.
            </p>
          </div>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel Edit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Title */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Event Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Declaration of Liberian Independence"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block font-semibold mb-2">
              Event Date
            </label>

            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block font-semibold mb-2">
              Year
            </label>

            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Example: 1847"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Summary */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Short Summary
            </label>

            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Write a short summary of the event..."
              rows={3}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Full Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write the full historical description..."
              rows={8}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Image URL
            </label>

            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste the image URL here..."
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Article URL */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Existing Article URL
            </label>

            <input
              type="text"
              value={articleUrl}
              onChange={(e) => setArticleUrl(e.target.value)}
              placeholder="/articles/liberia-independence"
              className="w-full border rounded-lg p-3"
            />

            <p className="text-sm text-gray-500 mt-2">
              Enter the URL of the existing article visitors should read
              when they click "Read More."
            </p>
          </div>

          {/* Published */}
          <div className="md:col-span-2 flex items-center gap-3">
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5"
            />

            <label htmlFor="published" className="font-semibold">
              Publish this event on the website
            </label>
          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <button
            type="button"
            onClick={saveEvent}
            disabled={loading}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : editingId
              ? "Update Event"
              : "Add Event"}
          </button>

          {!editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              Clear
            </button>
          )}

        </div>

        {message && (
          <p className="mt-5 font-semibold">
            {message}
          </p>
        )}

      </div>

      {/* Events List */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Historical Events
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {events.length} event{events.length === 1 ? "" : "s"} in the database
            </p>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="border border-dashed rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No historical events have been added yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-xl p-5"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                  <div className="min-w-0">

                    <h3 className="text-xl font-bold text-green-800">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">

                      {event.year && (
                        <span>
                          {event.year}
                        </span>
                      )}

                      {event.event_date && (
                        <span>
                          {event.event_date}
                        </span>
                      )}

                      <span>
                        {event.published
                          ? "Published"
                          : "Draft"}
                      </span>

                    </div>

                    {event.summary && (
                      <p className="text-gray-600 mt-3">
                        {event.summary}
                      </p>
                    )}

                    {event.article_url && (
                      <p className="text-sm text-blue-600 mt-2 break-all">
                        Article: {event.article_url}
                      </p>
                    )}

                  </div>

                  <div className="flex flex-wrap gap-2">

                    <button
                      type="button"
                      onClick={() => editEvent(event)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => togglePublished(event)}
                      className="bg-yellow-500 text-black px-3 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      {event.published
                        ? "Unpublish"
                        : "Publish"}
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteEvent(event.id)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}
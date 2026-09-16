import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function TimelinePage() {
  const { data: events, error } = await supabase
    .from("historical_events")
    .select("*")
    .eq("published", true)
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Timeline loading error:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia History Timeline
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the important events, leaders, and moments that shaped
          Liberia from its founding to the present day.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        {!events || events.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <p className="text-gray-600">
              No historical events have been published yet.
            </p>
          </div>
        ) : (
          <div className="relative border-l-4 border-green-700 space-y-10 ml-4">

            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative ml-8 bg-white p-6 rounded-xl shadow"
              >

                {/* Timeline Number */}
                <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Year */}
                {event.year && (
                  <h2 className="text-3xl font-bold text-green-700">
                    {event.year}
                  </h2>
                )}

                {/* Event Title */}
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {event.title}
                </h3>

                {/* Summary */}
                {event.summary && (
                  <p className="mt-3 text-gray-800">
                    {event.summary}
                  </p>
                )}

                {/* Read More */}
                {event.article_url && (
                  <Link
                    href={event.article_url}
                    className="inline-block mt-5 text-blue-700 font-semibold hover:text-blue-900 hover:underline"
                  >
                    Read More →
                  </Link>
                )}

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}
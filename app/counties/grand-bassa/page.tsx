import Link from "next/link";
import { supabase } from "@/lib/supabase";

function renderList(text: string | null) {
  const items = text
    ? text
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  if (items.length === 0) {
    return (
      <p className="mt-4 text-gray-500 italic">
        Information coming soon.
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-3 text-lg text-gray-800 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function renderText(text: string | null) {
  if (!text || !text.trim()) {
    return (
      <p className="mt-4 text-gray-500 italic">
        Information coming soon.
      </p>
    );
  }

  return text.split("\n").map((paragraph, index) => {
    const trimmed = paragraph.trim();

    if (!trimmed) {
      return <div key={index} className="h-3" />;
    }

    return (
      <p
        key={index}
        className="mt-4 text-lg text-gray-800 leading-relaxed"
      >
        {trimmed}
      </p>
    );
  });
}

export default async function GrandBassaPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "grand-bassa-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Grand Bassa County Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            Grand Bassa County could not be loaded at this time.
          </p>

          <Link
            href="/counties"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            ← Back to Counties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          {county.name}
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, economy, coastal heritage,
          and important places of {county.name}, Liberia.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow p-8">

          {county.image_url && (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-h-[500px] object-cover rounded-xl mx-auto"
            />
          )}

          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>
          {renderList(county.quick_facts)}

          <h2 className="text-3xl font-bold mt-10">
            Overview
          </h2>
          {renderText(county.description)}

          <h2 className="text-3xl font-bold mt-10">
            Geography and Location
          </h2>
          {renderText(county.geography)}

          <h2 className="text-3xl font-bold mt-10">
            Early History
          </h2>
          {renderText(county.history)}

          <h2 className="text-3xl font-bold mt-10">
            Grand Bassa and Liberia's Independence
          </h2>
          {renderText(county.historical_importance)}

          <h2 className="text-3xl font-bold mt-10">
            Buchanan
          </h2>
          {renderText(county.people)}

          <h2 className="text-3xl font-bold mt-10">
            Buchanan Port and Maritime Importance
          </h2>
          {renderText(county.important_places)}

          <h2 className="text-3xl font-bold mt-10">
            Mining and Economic History
          </h2>
          {renderText(county.mining_economy)}

          <h2 className="text-3xl font-bold mt-10">
            People, Ethnic Groups, and Languages
          </h2>
          {renderText(county.people)}

          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>
          {renderText(county.culture)}

          <h2 className="text-3xl font-bold mt-10">
            Agriculture and Livelihoods
          </h2>
          {renderText(county.economy)}

          <h2 className="text-3xl font-bold mt-10">
            Natural Resources
          </h2>
          {renderText(county.natural_resources)}

          <h2 className="text-3xl font-bold mt-10">
            Grand Bassa During Liberia's Civil Wars
          </h2>
          {renderText(county.civil_war_history)}

          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                Liberia's 2022 National Population and Housing Census
                recorded a population of{" "}
                <strong>{county.population}</strong> in Grand Bassa County.
              </p>

              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                Population growth and movement have contributed to the
                development of Buchanan and other urban centers, while
                rural communities remain important to agriculture and
                local livelihoods.
              </p>
            </>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>
          {renderList(county.important_places)}

          <h2 className="text-3xl font-bold mt-10">
            Education and Community Development
          </h2>
          {renderText(county.education)}

          <h2 className="text-3xl font-bold mt-10">
            Development and Present-Day Importance
          </h2>
          {renderText(county.development)}

          <h2 className="text-3xl font-bold mt-10">
            Historical Importance
          </h2>
          {renderText(county.historical_importance)}

          <h2 className="text-3xl font-bold mt-10">
            Key Facts About Grand Bassa County
          </h2>
          {renderList(county.key_facts)}

        </div>
      </section>
    </main>
  );
}
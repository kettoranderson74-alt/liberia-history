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

export default async function GrandCapeMountPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "grand-cape-mount-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            Grand Cape Mount County information is currently unavailable.
          </p>

          <Link
            href="/counties"
            className="inline-block mt-6 bg-green-700 text-white px-5 py-2 rounded-lg"
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
          Explore the history, people, culture, economy, natural
          resources, and important places of {county.name}, Liberia.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow p-8">
          {county.image_url ? (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-h-[500px] object-cover rounded-xl mx-auto"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              No image available
            </div>
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
            The Vai and Gola Peoples
          </h2>
          {renderText(county.people)}

          <h2 className="text-3xl font-bold mt-10">
            The Vai Script
          </h2>
          {renderText(
            county.culture
              ? county.culture.split("\n\n")[2] || county.culture
              : null
          )}

          <h2 className="text-3xl font-bold mt-10">
            Cape Mount and the Expansion of Liberia
          </h2>
          {renderText(
            county.history
              ? county.history.split("\n\n").slice(-1)[0]
              : null
          )}

          <h2 className="text-3xl font-bold mt-10">
            Robertsport
          </h2>
          {renderText(
            county.capital_history ||
              "Robertsport is the capital of Grand Cape Mount County and an important historic coastal city."
          )}

          <h2 className="text-3xl font-bold mt-10">
            Lake Piso
          </h2>
          {renderText(county.natural_resources)}

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
            Mining and Natural Resources
          </h2>
          {renderText(county.mining_economy)}

          <h2 className="text-3xl font-bold mt-10">
            Education and Robertsport's Historical Role
          </h2>
          {renderText(county.education)}

          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>
          {renderList(county.important_places)}

          <h2 className="text-3xl font-bold mt-10">
            Grand Cape Mount During the Civil Wars
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
                <strong>{county.population}</strong> in Grand Cape Mount
                County.
              </p>

              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                The population is distributed among urban centers such
                as Robertsport and rural communities across the county.
                Population patterns are influenced by agriculture,
                fishing, mining, access to roads, and proximity to the
                Sierra Leone border.
              </p>
            </>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          <h2 className="text-3xl font-bold mt-10">
            Environmental Importance
          </h2>
          {renderText(county.natural_resources)}

          <h2 className="text-3xl font-bold mt-10">
            Development and Present-Day Importance
          </h2>
          {renderText(county.development)}

          <h2 className="text-3xl font-bold mt-10">
            Historical Importance
          </h2>
          {renderText(county.historical_importance)}

          <h2 className="text-3xl font-bold mt-10">
            Key Facts About Grand Cape Mount County
          </h2>
          {renderList(county.key_facts)}
        </div>
      </section>
    </main>
  );
}
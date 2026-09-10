import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

function getParagraphs(text: string | null | undefined) {
  if (!text) return [];

  return text
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderParagraphs(text: string | null | undefined) {
  return getParagraphs(text).map((paragraph, index) => (
    <p key={index} className="mt-4 text-lg text-gray-800">
      {paragraph}
    </p>
  ));
}

function renderList(text: string | null | undefined) {
  if (!text) return null;

  const items = text
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default async function RiverGeePage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "river-gee-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          {county.name}
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          {county.description}
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow p-8">

          {county.image_url && (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-w-4xl rounded-xl mx-auto object-cover"
            />
          )}

          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          {renderList(county.quick_facts)}

          <h2 className="text-3xl font-bold mt-8">
            Geography and Location
          </h2>

          {renderParagraphs(county.geography)}

          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          {renderParagraphs(county.history)}

          <h2 className="text-3xl font-bold mt-8">
            Mining and Mineral Economy
          </h2>

          {renderParagraphs(county.mining_economy)}

          <h2 className="text-3xl font-bold mt-8">
            Agriculture and Economy
          </h2>

          {renderParagraphs(county.economy)}

          <h2 className="text-3xl font-bold mt-8">
            People, Ethnic Groups and Languages
          </h2>

          {renderParagraphs(county.people)}

          {county.languages && (
            <>
              <h3 className="text-2xl font-bold mt-8">
                Languages
              </h3>

              {renderParagraphs(county.languages)}
            </>
          )}

          <h2 className="text-3xl font-bold mt-8">
            Natural Resources
          </h2>

          {renderParagraphs(county.natural_resources)}

          <h2 className="text-3xl font-bold mt-8">
            Education
          </h2>

          {renderParagraphs(county.education)}

          <h2 className="text-3xl font-bold mt-8">
            Culture and Traditions
          </h2>

          {renderParagraphs(county.culture)}

          <h2 className="text-3xl font-bold mt-8">
            Important Places
          </h2>

          {renderList(county.important_places)}

          <h2 className="text-3xl font-bold mt-8">
            Civil War History
          </h2>

          {renderParagraphs(county.civil_war_history)}

          <h2 className="text-3xl font-bold mt-8">
            Development and Present-Day Importance
          </h2>

          {renderParagraphs(county.development)}

          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          {renderParagraphs(county.historical_importance)}

          <h2 className="text-3xl font-bold mt-8">
            Key Facts
          </h2>

          {renderList(county.key_facts)}

        </div>
      </section>
    </main>
  );
}
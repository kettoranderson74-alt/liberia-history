
import { supabase } from "@/lib/supabase";

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

function renderTextRange(
  text: string | null,
  start: number,
  end: number
) {
  if (!text || !text.trim()) {
    return (
      <p className="mt-4 text-gray-500 italic">
        Information coming soon.
      </p>
    );
  }

  const paragraphs = text
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .slice(start, end);

  if (paragraphs.length === 0) {
    return (
      <p className="mt-4 text-gray-500 italic">
        Information coming soon.
      </p>
    );
  }

  return paragraphs.map((paragraph, index) => (
    <p
      key={index}
      className="mt-4 text-lg text-gray-800 leading-relaxed"
    >
      {paragraph}
    </p>
  ));
}

function renderList(text: string | null) {
  if (!text || !text.trim()) {
    return (
      <p className="mt-4 text-gray-500 italic">
        Information coming soon.
      </p>
    );
  }

  const items = text
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <ul className="mt-4 space-y-2 text-lg text-gray-800 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default async function MarylandPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "maryland-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Maryland County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load Maryland County information at this time.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">{county.name}</h1>

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
            Overview
          </h2>

          {renderText(county.description)}

          <h2 className="text-3xl font-bold mt-8">
            The Early History of Maryland
          </h2>

          {renderTextRange(county.history, 0, 2)}

          <h2 className="text-3xl font-bold mt-8">
            The Republic of Maryland
          </h2>

          {renderTextRange(county.history, 2, 5)}

          <h2 className="text-3xl font-bold mt-8">
            Conflict and the 1857 Union with Liberia
          </h2>

          {renderTextRange(county.history, 5, 9)}

          <h2 className="text-3xl font-bold mt-8">
            Harper and Cape Palmas
          </h2>

          {renderText(county.capital_history)}

          <h2 className="text-3xl font-bold mt-8">
            People and Ethnic Groups
          </h2>

          {renderText(county.people)}

          <h2 className="text-3xl font-bold mt-8">
            Culture and Traditions
          </h2>

          {renderText(county.culture)}

          <h2 className="text-3xl font-bold mt-8">
            Agriculture and Economy
          </h2>

          {renderText(county.economy)}

          <h2 className="text-3xl font-bold mt-8">
            Trade and Cross-Border Connections
          </h2>

          {renderText(county.development)}

          <h2 className="text-3xl font-bold mt-8">
            Natural Environment
          </h2>

          {renderText(county.natural_resources)}

          <h2 className="text-3xl font-bold mt-8">
            Important Places
          </h2>

          {renderList(county.important_places)}

          <h2 className="text-3xl font-bold mt-8">
            Education
          </h2>

          {renderText(county.education)}

          <h2 className="text-3xl font-bold mt-8">
            Maryland County During the Civil Wars
          </h2>

          {renderText(county.civil_war_history)}

          <h2 className="text-3xl font-bold mt-8">
            Population
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia&apos;s 2022 National Population and Housing Census
            recorded approximately{" "}
            <strong>{county.population}</strong> in Maryland County.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The population is distributed among urban centers such as
            Harper and Pleebo as well as numerous rural communities.
            Population growth and migration continue to influence the
            county&apos;s towns and villages.
          </p>

          <h2 className="text-3xl font-bold mt-8">
            Maryland&apos;s Role in Liberia&apos;s History
          </h2>

          {renderTextRange(county.historical_importance, 0, 2)}

          <h2 className="text-3xl font-bold mt-8">
            Present-Day Importance
          </h2>

          {renderText(county.development)}

          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          {renderTextRange(county.historical_importance, 2, 4)}

          <h2 className="text-3xl font-bold mt-8">
            Key Facts About Maryland County
          </h2>

          {renderList(county.key_facts)}
        </div>
      </section>
    </main>
  );
}


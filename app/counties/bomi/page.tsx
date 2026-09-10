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

export default async function BomiPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "bomi-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Bomi County Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            Bomi County could not be loaded at this time.
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

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          {county.name}
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, economy, natural
          resources, and important places of {county.name}, Liberia.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow p-8">

          {/* County Image */}
          {county.image_url && (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-h-[500px] object-cover rounded-xl mx-auto"
            />
          )}

          {/* Quick Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          {renderList(county.quick_facts)}

          {/* Geography */}
          <h2 className="text-3xl font-bold mt-10">
            Geography and Location
          </h2>

          {renderText(county.geography)}

          {/* History */}
          <h2 className="text-3xl font-bold mt-10">
            History
          </h2>

          {renderText(county.history)}

          {/* Mining */}
          <h2 className="text-3xl font-bold mt-10">
            Iron Ore Mining and Economic History
          </h2>

          {renderText(county.mining_economy)}

          {/* Tubmanburg */}
          <h2 className="text-3xl font-bold mt-10">
            Tubmanburg
          </h2>

          {renderText(county.description)}

          {/* People */}
          <h2 className="text-3xl font-bold mt-10">
            People, Ethnic Groups, and Languages
          </h2>

          {renderText(county.people)}

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-10">
            Agriculture and Economy
          </h2>

          {renderText(county.economy)}

          {/* Natural Resources */}
          <h2 className="text-3xl font-bold mt-10">
            Natural Resources
          </h2>

          {renderText(county.natural_resources)}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-10">
            Education
          </h2>

          {renderText(county.education)}

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>

          {renderText(county.culture)}

          {/* Important Places */}
          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>

          {renderList(county.important_places)}

          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Bomi During Liberia's Civil Wars
          </h2>

          {renderText(county.civil_war_history)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                Liberia's 2022 National Population and Housing Census
                recorded a population of{" "}
                <strong>{county.population}</strong> in Bomi County.
              </p>

              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                Population information is important for understanding
                the county's needs in areas such as education,
                healthcare, roads, housing, employment, and other
                public services.
              </p>
            </>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          {/* Development */}
          <h2 className="text-3xl font-bold mt-10">
            Development and Present-Day Importance
          </h2>

          {renderText(county.development)}

          {/* Historical Importance */}
          <h2 className="text-3xl font-bold mt-10">
            Historical Importance
          </h2>

          {renderText(county.historical_importance)}

          {/* Key Facts */}
          <h2 className="text-3xl font-bold mt-10">
            Key Facts About Bomi County
          </h2>

          {renderList(county.key_facts)}

        </div>
      </section>
    </main>
  );
}
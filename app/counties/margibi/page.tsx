import Link from "next/link";
import { supabase } from "@/lib/supabase";

function renderList(text: string | null) {
  const items = text
    ? text
        .split("\n")
        .map((item: string) => item.trim())
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

export default async function MargibiPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "margibi-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Margibi County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load Margibi County information at this time.
          </p>

          <Link
            href="/counties"
            className="inline-block mt-6 bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Back to Counties
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
          Discover the history, communities, culture, economy, and
          important places of {county.name}, Liberia.
        </p>
      </section>

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

          {/* Creation and Early History */}
          <h2 className="text-3xl font-bold mt-10">
            Creation and Early History
          </h2>
          {renderText(county.history)}

          {/* Kakata */}
          <h2 className="text-3xl font-bold mt-10">
            Kakata: The County Capital
          </h2>
          {renderText(county.capital_history)}

          {/* Firestone */}
          <h2 className="text-3xl font-bold mt-10">
            Firestone and the History of Rubber
          </h2>
          {renderText(county.mining_economy)}

          {/* Harbel */}
          <h2 className="text-3xl font-bold mt-10">
            Harbel and the Firestone Plantation
          </h2>
          {renderText(county.mining_economy)}

          {/* BWI */}
          <h2 className="text-3xl font-bold mt-10">
            Booker Washington Institute
          </h2>
          {renderText(county.education)}

          {/* People */}
          <h2 className="text-3xl font-bold mt-10">
            People and Ethnic Groups
          </h2>
          {renderText(county.people)}

          {/* Languages */}
          <h2 className="text-3xl font-bold mt-10">
            Languages
          </h2>
          {renderText(county.languages)}

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

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>
          {renderText(county.culture)}

          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Margibi During the Civil Wars
          </h2>
          {renderText(county.civil_war_history)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              According to Liberia's 2022 Population and Housing
              Census, Margibi County had a population of{" "}
              <strong>{county.population}</strong>.
            </p>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          {/* Important Places */}
          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>
          {renderList(county.important_places)}

          {/* Transportation */}
          <h2 className="text-3xl font-bold mt-10">
            Transportation and Trade
          </h2>
          {renderText(county.development)}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-10">
            Education and Development
          </h2>
          {renderText(county.education)}

          {/* Present Day */}
          <h2 className="text-3xl font-bold mt-10">
            Present-Day Importance
          </h2>
          {renderText(county.development)}

          {/* Historical Importance */}
          <h2 className="text-3xl font-bold mt-10">
            Historical Importance
          </h2>
          {renderText(county.historical_importance)}

          {/* Key Facts */}
          <h2 className="text-3xl font-bold mt-10">
            Key Facts About Margibi
          </h2>
          {renderList(county.key_facts)}

        </div>
      </section>

    </main>
  );
}
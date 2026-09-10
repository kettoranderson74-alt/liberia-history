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

export default async function LofaPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "lofa-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Lofa County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load Lofa County information at this time.
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

  const historyParagraphs = county.history
    ? county.history
        .split("\n\n")
        .map((item: string) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">{county.name}</h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, agriculture, mountains,
          and traditions of {county.name}, Liberia.
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

          {/* Overview */}
          <h2 className="text-3xl font-bold mt-10">
            Overview
          </h2>
          {renderText(county.description)}

          {/* Geography */}
          <h2 className="text-3xl font-bold mt-10">
            Geography and Location
          </h2>
          {renderText(county.geography)}

          {/* History */}
          <h2 className="text-3xl font-bold mt-10">
            History
          </h2>

          {historyParagraphs.length > 0
            ? renderText(historyParagraphs.slice(0, 3).join("\n\n"))
            : renderText(county.history)}

          {/* Indigenous History */}
          <h2 className="text-3xl font-bold mt-10">
            Indigenous History and Communities
          </h2>

          {historyParagraphs.length > 3
            ? renderText(historyParagraphs.slice(3).join("\n\n"))
            : renderText(county.history)}

          {/* People */}
          <h2 className="text-3xl font-bold mt-10">
            People and Ethnic Groups
          </h2>
          {renderText(county.people)}

          {/* Languages */}
          <h2 className="text-3xl font-bold mt-10">
            Languages and Cultural Diversity
          </h2>
          {renderText(county.languages)}

          {/* Voinjama */}
          <h2 className="text-3xl font-bold mt-10">
            Voinjama
          </h2>
          {renderText(county.capital_history)}

          {/* Foya */}
          <h2 className="text-3xl font-bold mt-10">
            Foya
          </h2>
          {renderList(county.important_places)}

          {/* Kolahun */}
          <h2 className="text-3xl font-bold mt-10">
            Kolahun
          </h2>
          {renderList(county.important_places)}

          {/* Mount Wuteve */}
          <h2 className="text-3xl font-bold mt-10">
            Mount Wuteve
          </h2>
          {renderText(county.natural_resources)}

          {/* Wologizi */}
          <h2 className="text-3xl font-bold mt-10">
            Wologizi Mountain Range
          </h2>
          {renderText(county.natural_resources)}

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-10">
            Agriculture and the "Breadbasket of Liberia"
          </h2>
          {renderText(county.economy)}

          {/* Economy */}
          <h2 className="text-3xl font-bold mt-10">
            Economy and Livelihoods
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

          {/* Religion */}
          <h2 className="text-3xl font-bold mt-10">
            Religion and Community Life
          </h2>
          {renderText(county.culture)}

          {/* Border */}
          <h2 className="text-3xl font-bold mt-10">
            Border and Regional Importance
          </h2>
          {renderText(county.geography)}

          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Lofa During the Civil Wars
          </h2>
          {renderText(county.civil_war_history)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              According to Liberia's 2022 National Population and
              Housing Census, Lofa County had a population of{" "}
              <strong>{county.population}</strong>.
            </p>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-10">
            Education and Development
          </h2>
          {renderText(county.education)}

          {/* Important Places */}
          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>
          {renderList(county.important_places)}

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
            Key Facts
          </h2>
          {renderList(county.key_facts)}

        </div>
      </section>
    </main>
  );
}
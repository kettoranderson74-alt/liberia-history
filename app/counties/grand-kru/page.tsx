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

export default async function GrandKruPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "grand-kru-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Grand Kru County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load Grand Kru County information at this time.
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

  const cultureParagraphs = county.culture
    ? county.culture
        .split("\n\n")
        .map((item: string) => item.trim())
        .filter(Boolean)
    : [];

  const economyParagraphs = county.economy
    ? county.economy
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
          Explore the history, people, culture, maritime heritage,
          coastal communities, and natural resources of {county.name},
          Liberia.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow p-8">
          {/* Image */}
          {county.image_url && (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-h-[500px] object-cover rounded-xl mx-auto"
            />
          )}

          {/* Quick Facts */}
          <h2 className="text-3xl font-bold mt-8">Quick Facts</h2>
          {renderList(county.quick_facts)}

          {/* Overview */}
          <h2 className="text-3xl font-bold mt-10">Overview</h2>
          {renderText(county.description)}

          {/* Geography */}
          <h2 className="text-3xl font-bold mt-10">
            Geography and Location
          </h2>
          {renderText(county.geography)}

          {/* Creation of Grand Kru County */}
          <h2 className="text-3xl font-bold mt-10">
            Creation of Grand Kru County
          </h2>

          {historyParagraphs.length > 2
            ? renderText(historyParagraphs.slice(2).join("\n\n"))
            : renderText(county.history)}

          {/* Indigenous History */}
          <h2 className="text-3xl font-bold mt-10">
            Indigenous History
          </h2>

          {historyParagraphs.length > 0
            ? renderText(historyParagraphs.slice(0, 2).join("\n\n"))
            : renderText(county.history)}

          {/* Kru Maritime Heritage */}
          <h2 className="text-3xl font-bold mt-10">
            Kru Maritime Heritage
          </h2>

          {cultureParagraphs.length > 3
            ? renderText(cultureParagraphs.slice(3).join("\n\n"))
            : renderText(county.culture)}

          {/* People */}
          <h2 className="text-3xl font-bold mt-10">
            People and Ethnic Groups
          </h2>
          {renderText(county.people)}

          {/* Languages */}
          <h2 className="text-3xl font-bold mt-10">Languages</h2>
          {county.languages ? (
            renderText(county.languages)
          ) : (
            renderText(county.people)
          )}

          {/* Barclayville */}
          <h2 className="text-3xl font-bold mt-10">
            Barclayville
          </h2>
          {renderText(county.capital_history)}

          {/* Sasstown and Grand Cess */}
          <h2 className="text-3xl font-bold mt-10">
            Sasstown and Grand Cess
          </h2>
          {renderList(county.important_places)}

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>

          {cultureParagraphs.length > 0
            ? renderText(cultureParagraphs.slice(0, 3).join("\n\n"))
            : renderText(county.culture)}

          {/* Fishing */}
          <h2 className="text-3xl font-bold mt-10">
            Fishing and Coastal Life
          </h2>

          {economyParagraphs.length > 3
            ? renderText(economyParagraphs.slice(3).join("\n\n"))
            : renderText(county.economy)}

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-10">
            Agriculture and Rural Livelihoods
          </h2>

          {economyParagraphs.length > 0
            ? renderText(economyParagraphs.slice(0, 3).join("\n\n"))
            : renderText(county.economy)}

          {/* Natural Resources */}
          <h2 className="text-3xl font-bold mt-10">
            Natural Resources
          </h2>
          {renderText(county.natural_resources)}

          {/* Mining */}
          <h2 className="text-3xl font-bold mt-10">
            Mining
          </h2>
          {renderText(county.mining_economy)}

          {/* Forests */}
          <h2 className="text-3xl font-bold mt-10">
            Forests and Environmental Importance
          </h2>
          {renderText(county.natural_resources)}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-10">
            Education and Community Development
          </h2>
          {renderText(county.education)}

          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Grand Kru During the Civil Wars
          </h2>
          {renderText(county.civil_war_history)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
              Liberia's 2022 National Population and Housing Census
              recorded a population of{" "}
              <strong>{county.population}</strong> in Grand Kru
              County.
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
            Key Facts About Grand Kru County
          </h2>
          {renderList(county.key_facts)}
        </div>
      </section>
    </main>
  );
}
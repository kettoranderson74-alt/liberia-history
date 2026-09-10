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

export default async function GrandGedehPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "grand-gedeh-county")
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
            Grand Gedeh County information is currently unavailable.
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
          Explore the history, people, culture, natural resources,
          and important places of {county.name}, Liberia.
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

          {/* Creation */}
          <h2 className="text-3xl font-bold mt-10">
            Creation of Grand Gedeh County
          </h2>
          {renderText(county.history)}

          {/* Early History */}
          <h2 className="text-3xl font-bold mt-10">
            Early History and Indigenous Communities
          </h2>
          {renderText(county.history)}

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

          {/* Zwedru */}
          <h2 className="text-3xl font-bold mt-10">
            Zwedru
          </h2>
          {renderText(county.capital_history)}

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-10">
            Agriculture and Livelihoods
          </h2>
          {renderText(county.economy)}

          {/* Natural Resources */}
          <h2 className="text-3xl font-bold mt-10">
            Natural Resources
          </h2>
          {renderText(county.natural_resources)}

          {/* Grebo-Krahn National Park */}
          <h2 className="text-3xl font-bold mt-10">
            Grebo-Krahn National Park
          </h2>
          {renderText(county.natural_resources)}

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>
          {renderText(county.culture)}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-10">
            Education and Community Development
          </h2>
          {renderText(county.education)}

          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Grand Gedeh During the Civil Wars
          </h2>
          {renderText(county.civil_war_history)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          {county.population ? (
            <>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                According to Liberia's 2022 National Population and
                Housing Census, Grand Gedeh County had a population
                of <strong>{county.population}</strong>.
              </p>

              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                The county has eight districts and 32 clans. Its
                population includes residents of Zwedru and numerous
                rural communities spread throughout the county.
              </p>
            </>
          ) : (
            <p className="mt-4 text-gray-500 italic">
              Population information coming soon.
            </p>
          )}

          {/* Border */}
          <h2 className="text-3xl font-bold mt-10">
            Border and Regional Importance
          </h2>
          {renderText(county.geography)}

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
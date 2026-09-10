import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

function getParagraphs(
  text: string | null,
  start = 0,
  end?: number
) {
  if (!text || !text.trim()) {
    return [];
  }

  return text
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .slice(start, end);
}

function renderParagraphs(
  text: string | null,
  start = 0,
  end?: number
) {
  const paragraphs = getParagraphs(text, start, end);

  if (paragraphs.length === 0) {
    return null;
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
    return null;
  }

  const items = text
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 space-y-2 text-lg text-gray-800 list-disc pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function hasParagraphs(
  text: string | null,
  start = 0,
  end?: number
) {
  return getParagraphs(text, start, end).length > 0;
}

export default async function SinoePage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "sinoe-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          {county.name}
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, coastal heritage,
          natural resources, and communities of {county.name}, Liberia.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          {/* County Image */}
          {county.image_url && (
            <img
              src={county.image_url}
              alt={county.name}
              className="w-full max-w-4xl rounded-xl mx-auto"
            />
          )}

          {/* Quick Facts */}
          {county.quick_facts && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Quick Facts
              </h2>

              {renderList(county.quick_facts)}
            </>
          )}

          {/* Overview */}
          {county.description && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Overview
              </h2>

              {renderParagraphs(county.description)}
            </>
          )}

          {/* Geography */}
          {county.geography && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Geography and Location
              </h2>

              {renderParagraphs(county.geography)}
            </>
          )}

          {/* History */}
          {county.history && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Early History
              </h2>

              {renderParagraphs(county.history)}
            </>
          )}

          {/* People */}
          {county.people && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                People, Ethnic Communities and Languages
              </h2>

              {renderParagraphs(county.people)}
            </>
          )}

          {/* Languages */}
          {county.languages && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Languages
              </h2>

              {renderParagraphs(county.languages)}
            </>
          )}

          {/* Greenville */}
          {county.capital && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Greenville
              </h2>

              <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                {county.capital} is the capital of {county.name} and
                serves as an important administrative and commercial
                center for the county.
              </p>
            </>
          )}

          {/* Culture */}
          {county.culture && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Culture and Traditions
              </h2>

              {renderParagraphs(county.culture)}
            </>
          )}

          {/* Agriculture and Economy */}
          {hasParagraphs(county.economy, 0, 2) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Agriculture and Livelihoods
              </h2>

              {renderParagraphs(county.economy, 0, 2)}
            </>
          )}

          {/* Fishing and Coastal Economy */}
          {hasParagraphs(county.economy, 2, 4) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Fishing and Coastal Economy
              </h2>

              {renderParagraphs(county.economy, 2, 4)}
            </>
          )}

          {/* Sapo National Park */}
          {hasParagraphs(county.natural_resources, 0, 3) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Sapo National Park
              </h2>

              {renderParagraphs(
                county.natural_resources,
                0,
                3
              )}
            </>
          )}

          {/* Forests and Biodiversity */}
          {hasParagraphs(county.natural_resources, 3, 4) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Forests and Biodiversity
              </h2>

              {renderParagraphs(
                county.natural_resources,
                3,
                4
              )}
            </>
          )}

          {/* Natural Resources */}
          {hasParagraphs(county.natural_resources, 4, 5) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Natural Resources
              </h2>

              {renderParagraphs(
                county.natural_resources,
                4,
                5
              )}
            </>
          )}

          {/* Rivers and Waterways */}
          {hasParagraphs(county.geography, 2, 4) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Rivers and Waterways
              </h2>

              {renderParagraphs(
                county.geography,
                2,
                4
              )}
            </>
          )}

          {/* Civil War History */}
          {county.civil_war_history && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Sinoe During the Liberian Civil Wars
              </h2>

              {renderParagraphs(
                county.civil_war_history
              )}
            </>
          )}

          {/* Population */}
          {county.population && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Population
              </h2>

              {renderParagraphs(county.population)}
            </>
          )}

          {/* Education */}
          {county.education && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Education
              </h2>

              {renderParagraphs(county.education)}
            </>
          )}

          {/* Development */}
          {county.development && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Development and Present-Day Importance
              </h2>

              {renderParagraphs(county.development)}
            </>
          )}

          {/* Important Places */}
          {county.important_places && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Important Places
              </h2>

              {renderList(county.important_places)}
            </>
          )}

          {/* Historical Importance */}
          {county.historical_importance && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Historical Importance
              </h2>

              {renderParagraphs(
                county.historical_importance
              )}
            </>
          )}

          {/* Key Facts */}
          {county.key_facts && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Key Facts
              </h2>

              {renderList(county.key_facts)}
            </>
          )}

        </div>

      </section>

    </main>
  );
}
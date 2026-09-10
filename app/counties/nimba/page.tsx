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

export default async function NimbaPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "nimba-county")
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
          Discover the history, people, culture, natural resources,
          mining heritage, and communities of {county.name}, Liberia.
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

          {/* Creation and Early Administrative History */}
          {hasParagraphs(county.history, 0, 2) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Creation and Early Administrative History
              </h2>

              {renderParagraphs(county.history, 0, 2)}
            </>
          )}

          {/* The People of Nimba */}
          {county.people && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                The People of Nimba
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

          {/* Mount Nimba */}
          {hasParagraphs(county.natural_resources, 0, 2) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Mount Nimba
              </h2>

              {renderParagraphs(
                county.natural_resources,
                0,
                2
              )}
            </>
          )}

          {/* East Nimba Nature Reserve */}
          {hasParagraphs(county.natural_resources, 2, 4) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                East Nimba Nature Reserve
              </h2>

              {renderParagraphs(
                county.natural_resources,
                2,
                4
              )}
            </>
          )}

          {/* Iron Ore Mining */}
          {hasParagraphs(county.mining_economy, 0, 2) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Iron Ore Mining
              </h2>

              {renderParagraphs(
                county.mining_economy,
                0,
                2
              )}
            </>
          )}

          {/* Yekepa Mining Town */}
          {hasParagraphs(county.mining_economy, 2, 4) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Yekepa Mining Town
              </h2>

              {renderParagraphs(
                county.mining_economy,
                2,
                4
              )}
            </>
          )}

          {/* Mining and the Environment */}
          {hasParagraphs(county.mining_economy, 4, 6) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Mining and the Environment
              </h2>

              {renderParagraphs(
                county.mining_economy,
                4,
                6
              )}
            </>
          )}

          {/* Ganta */}
          {hasParagraphs(county.economy, 5, 7) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Ganta
              </h2>

              {renderParagraphs(
                county.economy,
                5,
                7
              )}
            </>
          )}

          {/* Sanniquellie */}
          {county.capital_history && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Sanniquellie: County Capital
              </h2>

              {renderParagraphs(county.capital_history)}
            </>
          )}

          {/* Agriculture */}
          {hasParagraphs(county.economy, 0, 3) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Agriculture and Livelihoods
              </h2>

              {renderParagraphs(
                county.economy,
                0,
                3
              )}
            </>
          )}

          {/* Cross-Border Trade */}
          {hasParagraphs(county.economy, 3, 5) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Cross-Border Trade
              </h2>

              {renderParagraphs(
                county.economy,
                3,
                5
              )}
            </>
          )}

          {/* Culture */}
          {hasParagraphs(county.culture, 0, 2) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Culture and Traditions
              </h2>

              {renderParagraphs(
                county.culture,
                0,
                2
              )}
            </>
          )}

          {/* Religion */}
          {hasParagraphs(county.culture, 2, 3) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Religion
              </h2>

              {renderParagraphs(
                county.culture,
                2,
                3
              )}
            </>
          )}

          {/* Political History */}
          {hasParagraphs(
            county.historical_importance,
            0,
            2
          ) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Nimba and Liberia&apos;s Political History
              </h2>

              {renderParagraphs(
                county.historical_importance,
                0,
                2
              )}
            </>
          )}

          {/* Civil Wars */}
          {county.civil_war_history && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Nimba During the Civil Wars
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

          {/* Important Places */}
          {county.important_places && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Important Places
              </h2>

              {renderList(county.important_places)}
            </>
          )}

          {/* Education and Development */}
          {(county.education || county.development) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Education and Development
              </h2>

              {county.education &&
                renderParagraphs(county.education)}

              {county.development &&
                renderParagraphs(county.development)}
            </>
          )}

          {/* Present-Day Economic Importance */}
          {hasParagraphs(county.economy, 7, 9) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Present-Day Economic Importance
              </h2>

              {renderParagraphs(
                county.economy,
                7,
                9
              )}
            </>
          )}

          {/* Environmental Importance */}
          {hasParagraphs(
            county.natural_resources,
            4,
            6
          ) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Environmental Importance
              </h2>

              {renderParagraphs(
                county.natural_resources,
                4,
                6
              )}
            </>
          )}

          {/* Why Nimba Matters */}
          {hasParagraphs(
            county.historical_importance,
            2
          ) && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Why Nimba Matters in Liberian History
              </h2>

              {renderParagraphs(
                county.historical_importance,
                2
              )}
            </>
          )}

          {/* Key Facts */}
          {county.key_facts && (
            <>
              <h2 className="text-3xl font-bold mt-8">
                Key Facts About Nimba
              </h2>

              {renderList(county.key_facts)}
            </>
          )}

        </div>

      </section>

    </main>
  );
}
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

export default async function MontserradoPage() {
  const { data: county, error } = await supabase
    .from("counties")
    .select("*")
    .eq("slug", "montserrado-county")
    .eq("published", true)
    .single();

  if (error || !county) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Montserrado County Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load Montserrado County information at this time.
          </p>
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

          {/* Quick Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          {renderList(county.quick_facts)}

          {/* Overview */}
          <h2 className="text-3xl font-bold mt-8">
            Overview
          </h2>

          {renderText(county.description)}

          {/* Geography */}
          <h2 className="text-3xl font-bold mt-8">
            Geography and Location
          </h2>

          {renderText(county.geography)}

          {/* Early History */}
          <h2 className="text-3xl font-bold mt-8">
            Early History
          </h2>

          {renderTextRange(county.history, 0, 2)}

          {/* Beginning of Liberia */}
          <h2 className="text-3xl font-bold mt-8">
            The Beginning of Liberia
          </h2>

          {renderTextRange(county.history, 2, 5)}

          {/* Independence */}
          <h2 className="text-3xl font-bold mt-8">
            Monrovia and Liberian Independence
          </h2>

          {renderTextRange(county.history, 5, 9)}

          {/* Bensonville */}
          <h2 className="text-3xl font-bold mt-8">
            Bensonville: County Capital
          </h2>

          {renderTextRange(county.capital_history, 0, 2)}

          {/* Monrovia */}
          <h2 className="text-3xl font-bold mt-8">
            Monrovia: Political and Economic Center
          </h2>

          {renderTextRange(county.capital_history, 2, 4)}

          {/* Port */}
          <h2 className="text-3xl font-bold mt-8">
            Port of Monrovia
          </h2>

          {renderText(county.mining_economy)}

          {/* People */}
          <h2 className="text-3xl font-bold mt-8">
            People and Ethnic Groups
          </h2>

          {renderText(county.people)}

          {/* Languages */}
          <h2 className="text-3xl font-bold mt-8">
            Languages
          </h2>

          {renderText(county.languages)}

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-8">
            Culture and Traditions
          </h2>

          {renderTextRange(county.culture, 0, 2)}

          {/* Education */}
          <h2 className="text-3xl font-bold mt-8">
            Education
          </h2>

          {renderText(county.education)}

          {/* Religion */}
          <h2 className="text-3xl font-bold mt-8">
            Religion
          </h2>

          {renderTextRange(county.culture, 2, 4)}

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-8">
            Agriculture and Livelihoods
          </h2>

          {renderTextRange(county.economy, 0, 2)}

          {/* Business */}
          <h2 className="text-3xl font-bold mt-8">
            Business and Commerce
          </h2>

          {renderTextRange(county.economy, 2, 4)}

          {/* Natural Environment */}
          <h2 className="text-3xl font-bold mt-8">
            Natural Environment
          </h2>

          {renderText(county.natural_resources)}

          {/* Important Sites */}
          <h2 className="text-3xl font-bold mt-8">
            Important Historical Sites
          </h2>

          {renderList(county.important_places)}

          {/* Civil Wars */}
          <h2 className="text-3xl font-bold mt-8">
            Montserrado During the Civil Wars
          </h2>

          {renderText(county.civil_war_history)}

          {/* Post-War Reconstruction */}
          <h2 className="text-3xl font-bold mt-8">
            Post-War Reconstruction
          </h2>

          {renderTextRange(county.development, 0, 2)}

          {/* Population */}
          <h2 className="text-3xl font-bold mt-8">
            Population
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia&apos;s 2022 Population and Housing Census recorded
            approximately{" "}
            <strong>{county.population}</strong> in Montserrado County.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            This makes Montserrado the most populous county in Liberia.
            The population is heavily concentrated in Monrovia and its
            surrounding urban communities.
          </p>

          {/* Transportation */}
          <h2 className="text-3xl font-bold mt-8">
            Transportation
          </h2>

          {renderTextRange(county.development, 2, 5)}

          {/* Government */}
          <h2 className="text-3xl font-bold mt-8">
            Government and National Institutions
          </h2>

          {renderTextRange(county.development, 5, 7)}

          {/* Present Day */}
          <h2 className="text-3xl font-bold mt-8">
            Present-Day Importance
          </h2>

          {renderTextRange(county.development, 7, 9)}

          {/* Historical Importance */}
          <h2 className="text-3xl font-bold mt-8">
            Why Montserrado Matters in Liberian History
          </h2>

          {renderText(county.historical_importance)}

          {/* Key Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Key Facts About Montserrado
          </h2>

          {renderList(county.key_facts)}
        </div>
      </section>
    </main>
  );
}
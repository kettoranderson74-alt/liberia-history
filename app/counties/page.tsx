import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function CountiesPage() {
  const { data: counties, error } = await supabase
    .from("counties")
    .select("id, name, slug, capital, region, description, image_url")
    .eq("published", true)
    .order("name", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Counties Could Not Be Loaded
          </h1>

          <p className="mt-4 text-gray-600">
            We could not load the counties at this time.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Counties of Liberia
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore Liberia's 15 counties, their history, culture,
          capitals, and important landmarks.
        </p>
      </section>

      {/* Counties */}
      <section className="max-w-6xl mx-auto py-12 px-6">

        {counties && counties.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">

            {counties.map((county) => (

              <Link
                key={county.id}
               href={`/counties/${county.slug.replace("-county", "")}`}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >

                {/* County Image */}
                {county.image_url ? (
                  <img
                    src={county.image_url}
                    alt={county.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No image available
                  </div>
                )}

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-green-700">
                    {county.name}
                  </h2>

                  {county.capital && (
                    <p className="mt-2 text-gray-600">
                      <strong>Capital:</strong> {county.capital}
                    </p>
                  )}

                  {county.region && (
                    <p className="mt-1 text-gray-600">
                      <strong>Region:</strong> {county.region}
                    </p>
                  )}

                  <p className="mt-3 text-gray-800">
                    {county.description ||
                      `Learn about the history, people, culture, and attractions of ${county.name}.`}
                  </p>

                  <p className="mt-5 text-green-700 font-bold">
                    Explore County →
                  </p>

                </div>

              </Link>

            ))}

          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              No Counties Available
            </h2>

            <p className="mt-3 text-gray-600">
              County information will be added soon.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}
import Link from "next/link";

export default function CountiesPage() {
  const counties = [
    "Bomi",
    "Bong",
    "Gbarpolu",
    "Grand Bassa",
    "Grand Cape Mount",
    "Grand Gedeh",
    "Grand Kru",
    "Lofa",
    "Margibi",
    "Maryland",
    "Montserrado",
    "Nimba",
    "River Cess",
    "River Gee",
    "Sinoe",
  ];

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

        <div className="grid md:grid-cols-3 gap-6">

          {counties.map((county) => (

            <Link
              key={county}
              href={`/counties/${county.toLowerCase().replace(" ", "-")}`}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold text-green-700">
                {county}
              </h2>

              <p className="mt-3 text-gray-800">
                Learn about the history, people, culture,
                and attractions of {county} County.
              </p>

              <p className="mt-5 text-green-700 font-bold">
                Explore County →
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
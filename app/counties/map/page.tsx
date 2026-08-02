import Link from "next/link";

export default function CountiesMapPage() {
  const regions = [
    {
      name: "Northwestern Liberia",
      counties: ["Bomi", "Grand Cape Mount", "Gbarpolu"],
    },
    {
      name: "Central Liberia",
      counties: ["Bong", "Margibi", "Montserrado"],
    },
    {
      name: "Northern Liberia",
      counties: ["Lofa", "Nimba"],
    },
    {
      name: "Southeastern Liberia",
      counties: [
        "Grand Gedeh",
        "Grand Kru",
        "Maryland",
        "River Gee",
        "Sinoe",
        "River Cess",
      ],
    },
    {
      name: "Southern Liberia",
      counties: ["Grand Bassa"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia Counties Map
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore Liberia's 15 counties and learn about their history,
          culture, and important places.
        </p>
      </section>


      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">
<div className="mb-10 text-center">

  <img
    src="/images/liberia-map.png"
    alt="Map of Liberia Counties"
    className="mx-auto rounded-xl shadow-lg"
  />

  <p className="mt-4 text-gray-700">
    Explore Liberia's counties and learn about their history and culture.
  </p>

</div>
          <h2 className="text-3xl font-bold mb-8">
            Counties by Region
          </h2>


          {regions.map((region) => (

            <div key={region.name} className="mb-8">

              <h3 className="text-2xl font-bold text-green-700">
                {region.name}
              </h3>


              <div className="grid md:grid-cols-3 gap-4 mt-4">

                {region.counties.map((county) => (

                  <Link
                    key={county}
                    href={`/counties/${county.toLowerCase().replace(" ", "-")}`}
                    className="bg-gray-100 p-5 rounded-xl hover:bg-green-100 transition"
                  >

                    <h4 className="text-xl font-bold">
                      {county}
                    </h4>

                    <p className="mt-2 text-gray-700">
                      View county history →
                    </p>

                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
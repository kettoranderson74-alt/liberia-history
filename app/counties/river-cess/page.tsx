import Image from "next/image";

export default function RiverCessPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          River Cess County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, natural resources, and communities
          of River Cess County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/river-cess.png"
      alt="River Cess County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Cestos City</li>
      <li>🗺 Region: South-Central Liberia</li>
      <li>🌴 Known for: Forests, rivers, fishing, and agriculture</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Cess County is located along Liberia's south-central
      coast. It is known for its beautiful rivers, dense forests,
      coastal communities, and peaceful natural environment.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Cess became one of Liberia's counties in 1984 after
      being separated from Grand Bassa County. Since then, it has
      continued to develop through agriculture, fishing, and
      community-based economic activities.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to several Liberian ethnic communities
      with rich traditions, local languages, music, dances, and
      cultural celebrations that have been preserved for generations.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Cestos City</li>
      <li>🌊 Cestos River</li>
      <li>🌴 Coastal communities</li>
      <li>🌿 Forest landscapes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Cess contributes to Liberia's economy through
      agriculture, fishing, forestry, and the preservation of
      its rich cultural and natural heritage.
    </p>

  </div>

</section>
    </main>
  );
}
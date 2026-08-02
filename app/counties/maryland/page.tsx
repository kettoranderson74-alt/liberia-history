import Image from "next/image";

export default function MarylandPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Maryland County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, and coastal heritage of Maryland County, Liberia.
        </p>
      </section>

<section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/maryland.png"
      alt="Maryland County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Harper</li>
      <li>🗺 Region: Southeastern Liberia</li>
      <li>🌊 Known for: Coastal beauty, fishing, and historical settlements</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Maryland County lies in the southeastern corner of Liberia along
      the Atlantic Ocean. It is known for its scenic coastline,
      historical significance, rich culture, and strong fishing and
      agricultural communities.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Maryland has a unique history as the former independent Republic
      of Maryland in Africa before joining Liberia in 1857. Harper,
      the county capital, became an important center for government,
      trade, and education.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to the Grebo and other Liberian communities.
      Traditional music, dances, crafts, and festivals continue to
      preserve Maryland's rich cultural identity.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Harper City</li>
      <li>🌊 Cape Palmas</li>
      <li>🏖 Atlantic beaches</li>
      <li>🌿 Coastal forests and fishing communities</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Maryland County holds a special place in Liberian history because
      of its early settlement, its time as the Republic of Maryland in
      Africa, and its lasting contributions to Liberia's political,
      cultural, and economic development.
    </p>

  </div>

</section>

    </main>
  );
}
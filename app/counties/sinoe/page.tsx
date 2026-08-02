import Image from "next/image";

export default function SinoePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Sinoe County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, coastal heritage, and communities
          of Sinoe County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/sinoe.png"
      alt="Sinoe County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Greenville</li>
      <li>🗺 Region: Southeastern Liberia</li>
      <li>🌴 Known for: Rainforests, coastline, and biodiversity</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Sinoe County is located in southeastern Liberia along the
      Atlantic Ocean. It is known for its beautiful coastline,
      tropical rainforests, rich wildlife, and long history as one
      of Liberia's oldest counties.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Sinoe County was established in 1843, making it one of the
      oldest counties in Liberia. Greenville became an important
      trading center because of its coastal location and access to
      inland communities.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Sinoe is home to several ethnic communities, including the
      Kru, Grebo, and Sapo peoples. The county is known for its
      traditional music, dances, storytelling, fishing culture,
      and strong community values.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Greenville City</li>
      <li>🌊 Atlantic coastline</li>
      <li>🌳 Sapo National Park (partly located in Sinoe)</li>
      <li>🌿 Coastal forests and rivers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Sinoe County has played an important role in Liberia's
      maritime trade, environmental conservation, and cultural
      development. Its forests and protected areas are among the
      country's most valuable natural treasures.
    </p>

  </div>

</section>

    </main>
  );
}
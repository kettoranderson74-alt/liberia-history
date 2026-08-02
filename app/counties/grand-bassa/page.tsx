import Image from "next/image";

export default function GrandBassaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Grand Bassa County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, and heritage of Grand Bassa County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/grand-bassa.png"
      alt="Grand Bassa County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Buchanan</li>
      <li>🗺 Region: Central Liberia</li>
      <li>🌊 Known for: Coastal heritage and port activities</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Bassa County is one of Liberia's oldest counties,
      located along the Atlantic coast. It is known for its
      coastal communities, agriculture, natural resources,
      and economic importance.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Bassa has played an important role in Liberia's
      history. The county contributed greatly to trade and
      economic development, especially through Buchanan Port.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to the Bassa people and other
      Liberian communities. Its culture includes traditional
      music, dance, language, storytelling, and celebrations.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Important locations include Buchanan City, Buchanan Port,
      coastal areas, and communities with historical value.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Bassa remains an important part of Liberia's story
      through its people, economy, culture, and contribution
      to national development.
    </p>

  </div>

</section>

    </main>
  );
}
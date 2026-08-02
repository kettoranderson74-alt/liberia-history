import Image from "next/image";

export default function GrandKruPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Grand Kru County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, culture, coastal communities, and heritage
          of Grand Kru County, Liberia.
        </p>
      </section>

<section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/grand-kru.png"
      alt="Grand Kru County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Barclayville</li>
      <li>🗺 Region: Southeastern Liberia</li>
      <li>🌊 Known for: Fishing, beautiful coastline, and forests</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Kru County is located along Liberia's southeastern coast.
      It is known for its scenic beaches, forests, rivers, and rich
      cultural heritage. The county is home to the Kru people, who
      have a long maritime history.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Kru has a proud history connected to the Kru people,
      who were widely respected as skilled sailors and traders along
      the West African coast. The county has preserved many of its
      traditional customs and historical sites.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The people of Grand Kru are known for their hospitality,
      traditional music, dances, storytelling, fishing traditions,
      and strong community values that have been passed down through
      generations.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Barclayville City</li>
      <li>🌊 Atlantic coastline</li>
      <li>🎣 Fishing communities</li>
      <li>🌳 Forest landscapes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Kru has made important contributions to Liberia through
      its maritime heritage, cultural traditions, fishing industry,
      and preservation of indigenous history.
    </p>

  </div>

</section>

    </main>
  );
}
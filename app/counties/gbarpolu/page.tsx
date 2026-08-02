import Image from "next/image";

export default function GbarpoluPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Gbarpolu County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, natural resources, and communities
          of Gbarpolu County, Liberia.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      alt="Gbarpolu County"
      width={800}
      height={450}
      src="/images/counties/gbarpolu.png"
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Bopolu</li>
      <li>🗺 Region: Northwestern Liberia</li>
      <li>🌿 Known for: Forests and natural resources</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Gbarpolu County was established in 2001 and has a rich
      history connected to Liberia's indigenous communities.
      The county is known for its natural environment and
      important cultural heritage.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The people of Gbarpolu maintain strong cultural traditions,
      including local languages, traditional practices, music,
      and community values.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Bopolu City</li>
      <li>🌳 Forest areas</li>
      <li>🛤 Rural communities and cultural sites</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Gbarpolu represents Liberia's natural heritage and plays
      an important role in protecting forests, traditions,
      and community history.
    </p>

  </div>

</section>

    </main>
  );
}
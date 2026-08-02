import Image from "next/image";

export default function GrandGedehPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Grand Gedeh County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, people, and natural heritage of
          Grand Gedeh County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/grand-gedeh.png"
      alt="Grand Gedeh County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Zwedru</li>
      <li>🗺 Region: Southeastern Liberia</li>
      <li>🌳 Known for: Dense forests, wildlife, and agriculture</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Gedeh County is located in southeastern Liberia and is
      known for its vast forests, rich biodiversity, and vibrant
      cultural traditions. It shares a border with Côte d'Ivoire.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Gedeh has played an important role in Liberia's history
      through its indigenous communities, agricultural development,
      and contributions to national growth. Zwedru has long served
      as the county's administrative and commercial center.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to several ethnic communities, each with
      unique languages, traditions, music, dances, and cultural
      celebrations that enrich Liberia's heritage.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Zwedru City</li>
      <li>🌳 Forest reserves</li>
      <li>🌿 Agricultural communities</li>
      <li>🦜 Wildlife habitats</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Gedeh is an important county because of its cultural
      diversity, natural resources, and role in Liberia's
      environmental conservation and agricultural economy.
    </p>

  </div>

</section>

    </main>
  );
}
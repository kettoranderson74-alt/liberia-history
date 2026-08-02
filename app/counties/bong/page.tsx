import Image from "next/image";

export default function BongPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Bong County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, people, and important places
          of Bong County, Liberia.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      alt="Bong County"
      width={800}
      height={450}
      src="/images/counties/bong.png"
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Gbarnga</li>
      <li>🗺 Region: Central Liberia</li>
      <li>🌾 Known for: Agriculture and natural resources</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bong County has played an important role in Liberia's
      development. The county became widely known for its
      agricultural activities and mineral resources, especially
      iron ore mining. Gbarnga has also been an important center
      for trade, education, and transportation.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bong County is home to communities with rich traditions,
      including unique languages, music, celebrations, and
      cultural practices that reflect Liberia's heritage.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Gbarnga City</li>
      <li>🏫 Cuttington University</li>
      <li>🌿 Bong Mountain area</li>
      <li>🛣 Major transportation routes</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bong County has been a major contributor to Liberia's
      economy and education. Its central location has made it
      an important connection point between different parts
      of the country.
    </p>

  </div>

</section>

    </main>
  );
}
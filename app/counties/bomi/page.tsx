import Image from "next/image";

export default function BomiPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Bomi County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, and important places
          of Bomi County, Liberia.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      alt="Bomi County"
      width={800}
      height={450}
      src="/images/counties/bomi.png"
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Tubmanburg</li>
      <li>🗺 Region: Western Liberia</li>
      <li>⛏ Known for: Mineral resources and mining history</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bomi County has an important place in Liberia's history.
      It became known for its rich mineral resources, especially
      iron ore mining. The county has contributed greatly to
      Liberia's economic development.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bomi is home to diverse Liberian communities with rich
      traditions, languages, music, and cultural practices.
      The people of Bomi are known for their strong connection
      to their land and heritage.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Tubmanburg City</li>
      <li>⛏ Former mining areas</li>
      <li>🌿 Forest and natural landscapes</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Bomi played a major role in Liberia's mining history and
      remains an important county in the nation's western region.
    </p>

  </div>

</section>

    </main>
  );
}
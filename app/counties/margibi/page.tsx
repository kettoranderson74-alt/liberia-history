import Image from "next/image";

export default function MargibiPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Margibi County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, communities, culture, and development of
          Margibi County, Liberia.
        </p>
      </section>


     <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/margibi.png"
      alt="Margibi County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Kakata</li>
      <li>🗺 Region: Central Liberia</li>
      <li>🌴 Known for: Rubber production and agriculture</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Margibi County is located in central Liberia and is one of the
      country's important agricultural and industrial regions. Its
      proximity to Monrovia makes it a key center for business,
      education, and transportation.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Margibi was created in 1985 from parts of Montserrado County.
      Since then, it has developed into an important contributor to
      Liberia's economy through agriculture, trade, and manufacturing.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to several Liberian communities with rich
      traditions, local languages, music, dance, and cultural
      celebrations that reflect the country's diversity.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Kakata City</li>
      <li>🌴 Firestone Rubber Plantation</li>
      <li>🎓 Booker Washington Institute (BWI)</li>
      <li>🛣 Major highways connecting Monrovia and inland Liberia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Margibi County has played an important role in Liberia's
      economic development through rubber production, education,
      agriculture, and transportation. It continues to be one of
      the country's key growth regions.
    </p>

  </div>

</section>

    </main>
  );
}
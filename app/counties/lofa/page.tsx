import Image from "next/image";

export default function LofaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Lofa County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, culture, agriculture, and traditions of
          Lofa County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/lofa.png"
      alt="Lofa County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Voinjama</li>
      <li>🗺 Region: Northern Liberia</li>
      <li>🌾 Known for: Agriculture, mountains, and fertile land</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Lofa County is one of Liberia's largest counties, located in
      the northern part of the country. It shares borders with
      Guinea and Sierra Leone and is known for its fertile farmland,
      scenic mountains, and diverse communities.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Lofa County has a rich history shaped by trade, agriculture,
      and the traditions of its indigenous communities. Its location
      near international borders has made it an important region for
      commerce and cultural exchange throughout Liberia's history.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Lofa is home to several ethnic groups, including the Lorma,
      Kissi, and Mandingo. The county is known for its cultural
      diversity, traditional ceremonies, music, dance, and strong
      sense of community.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Voinjama City</li>
      <li>⛰ Wologizi Mountain Range</li>
      <li>🌾 Agricultural communities</li>
      <li>🛣 Border crossings with Guinea and Sierra Leone</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Lofa County has contributed significantly to Liberia's
      agricultural production, cultural diversity, and regional
      trade. Its strategic location and rich natural environment
      make it one of the country's most important counties.
    </p>

  </div>

</section>
    </main>
  );
}
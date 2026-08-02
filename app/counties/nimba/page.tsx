import Image from "next/image";

export default function NimbaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Nimba County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, culture, resources, and communities of
          Nimba County, Liberia.
        </p>
      </section>

<section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/nimba.png"
      alt="Nimba County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Sanniquellie</li>
      <li>🗺 Region: Northeastern Liberia</li>
      <li>⛏ Known for: Iron ore, mountains, and agriculture</li>
      <li>👥 Population: One of Liberia's most populous counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Nimba County is one of Liberia's largest and most populated
      counties. It borders both Guinea and Côte d'Ivoire and is
      famous for its mineral resources, fertile farmland, and
      beautiful mountain landscapes.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Nimba has played an important role in Liberia's economic
      development through mining and agriculture. The county has
      also been significant in the country's political and social
      history and continues to be an important economic region.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Nimba is home to several ethnic groups, including the Mano,
      Gio (Dan), and others. The county is known for its cultural
      diversity, traditional ceremonies, music, dancing, and rich
      heritage.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Sanniquellie City</li>
      <li>⛰ Mount Nimba</li>
      <li>⛏ Yekepa mining area</li>
      <li>🌿 East Nimba Nature Reserve</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Nimba County has made major contributions to Liberia's
      mining industry, agriculture, and economic growth. Its
      unique natural environment and cultural diversity make it
      one of Liberia's most important counties.
    </p>

  </div>

</section>

    </main>
  );
}
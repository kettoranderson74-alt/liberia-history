import Image from "next/image";

export default function GrandCapeMountPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Grand Cape Mount County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, culture, resources, and communities of
          Grand Cape Mount County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/grand-cape-mount.png"
      alt="Grand Cape Mount County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Robertsport</li>
      <li>🗺 Region: Northwestern Liberia</li>
      <li>⛏ Known for: Gold, diamonds, and coastal heritage</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Cape Mount County is located in northwestern Liberia.
      It is known for its beautiful coastline, natural resources,
      traditional communities, and rich cultural heritage.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Cape Mount has a long history connected to trade,
      coastal settlements, and natural resource activities.
      The county has contributed to Liberia's economic and
      cultural development over many generations.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to diverse communities with strong
      traditions, languages, music, storytelling, and cultural
      practices that represent Liberia's heritage.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏖 Robertsport City</li>
      <li>🌊 Lake Piso</li>
      <li>🏝 Coastal beaches</li>
      <li>⛏ Mining areas</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Grand Cape Mount remains an important county because of
      its natural resources, coastal history, and contribution
      to Liberia's cultural identity.
    </p>

  </div>

</section>

    </main>
  );
}
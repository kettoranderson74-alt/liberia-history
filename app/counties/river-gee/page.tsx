import Image from "next/image";

export default function RiverGeePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          River Gee County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, culture, traditions, and natural beauty
          of River Gee County, Liberia.
        </p>
      </section>


     <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/counties/river-gee.png"
      alt="River Gee County"
      width={800}
      height={450}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Fish Town</li>
      <li>🗺 Region: Southeastern Liberia</li>
      <li>🌳 Known for: Forests, rivers, and agriculture</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Overview
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Gee County is located in southeastern Liberia and is
      known for its rich forests, rivers, fertile farmland, and
      peaceful rural communities. It shares a border with Côte d'Ivoire.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Gee County was established in 2000 after being created
      from parts of Grand Gedeh County. Since then, it has continued
      to grow through agriculture, education, and local development.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      The county is home to several Liberian ethnic communities,
      including the Grebo and Krahn peoples. Their traditions,
      languages, music, and ceremonies remain an important part
      of River Gee's identity.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏙 Fish Town</li>
      <li>🌳 Forest reserves</li>
      <li>🌾 Farming communities</li>
      <li>🌊 River Gee waterways</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      River Gee County contributes to Liberia's agricultural
      production and environmental conservation while preserving
      the cultural traditions of its local communities.
    </p>

  </div>

</section>
    </main>
  );
}
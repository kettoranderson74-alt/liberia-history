import Image from "next/image";

export default function NationalFlowerPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Flower (Pepper Flower)
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The Pepper Flower represents Liberia's natural beauty,
          tropical environment, and cultural heritage.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/national-flower.png"
            alt="Liberia National Flower"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌺 Symbol: National Flower of Liberia</li>
            <li>🌿 Represents: Beauty and natural heritage</li>
            <li>🌍 Found in: Liberia's tropical environment</li>
            <li>🇱🇷 Symbolizes: National pride and identity</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's tropical climate supports many unique plants
            and flowers. The Pepper Flower represents the country's
            rich plant life and connection to nature.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            As a national symbol, it reminds citizens and visitors
            of Liberia's environmental beauty and the importance of
            protecting natural resources.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Meaning
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌺 Beauty of Liberia's landscape</li>
            <li>🌱 Growth and renewal</li>
            <li>🇱🇷 Pride in national identity</li>
            <li>🌍 Appreciation for nature</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Cultural Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The flower represents the relationship between Liberians
            and their natural environment. It reflects the country's
            forests, farms, and tropical landscapes.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Pepper Flower remains a reminder that Liberia's
            history is connected not only to its people and leaders,
            but also to its land and natural treasures.
          </p>


        </div>

      </section>

    </main>
  );
}
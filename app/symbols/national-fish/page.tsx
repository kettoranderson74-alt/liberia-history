import Image from "next/image";

export default function NationalFishPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Fish (Atlantic Blue Marlin)
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The Atlantic Blue Marlin represents Liberia's connection
          to the Atlantic Ocean and its rich marine resources.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/atlantic-blue-marlin.png"
            alt="Atlantic Blue Marlin"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🐟 Symbol: National Fish of Liberia</li>
            <li>🌊 Habitat: Atlantic Ocean waters</li>
            <li>⚓ Represents: Marine heritage and resources</li>
            <li>🌍 Known for: Strength and size</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's long Atlantic coastline has always played an
            important role in the lives of its people. Fishing,
            coastal trade, and marine resources have contributed
            to communities and the country's economy.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The Atlantic Blue Marlin represents Liberia's connection
            with the ocean and the importance of protecting marine
            life and resources.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Blue Marlin symbolizes strength, freedom, and the
            importance of Liberia's coastal environment.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Marine Heritage
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌊 Highlights Liberia's Atlantic coastline</li>
            <li>🎣 Represents fishing traditions</li>
            <li>🐠 Encourages protection of marine ecosystems</li>
            <li>⚓ Reflects Liberia's relationship with the sea</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            National Identity
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Atlantic Blue Marlin reminds Liberians of the
            country's ocean heritage and the value of preserving
            its natural resources.
          </p>


        </div>

      </section>

    </main>
  );
}
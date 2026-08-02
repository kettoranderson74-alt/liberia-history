import Image from "next/image";

export default function NationalTreePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Tree (Mahogany)
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The Mahogany tree represents Liberia's forests,
          natural resources, and environmental heritage.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/mahogany.png"
            alt="Liberia Mahogany Tree"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌳 Symbol: National Tree of Liberia</li>
            <li>🌿 Represents: Forests and natural wealth</li>
            <li>🌍 Found in: Liberia's tropical forests</li>
            <li>🪵 Known for: Valuable hardwood timber</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Mahogany tree has long been an important part of
            Liberia's natural environment. Liberia's forests have
            provided valuable resources that have supported local
            communities and the national economy.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The tree became recognized as a symbol of Liberia's
            connection to nature and the importance of protecting
            the country's forests for future generations.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Mahogany represents the richness of Liberia's land and
            highlights the importance of responsible management of
            natural resources.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Environmental Value
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌱 Supports forest ecosystems</li>
            <li>🐒 Provides habitat for wildlife</li>
            <li>🌧 Helps protect Liberia's rainforest environment</li>
            <li>🌍 Represents conservation and sustainability</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            National Identity
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Mahogany tree reminds Liberians of the country's
            natural beauty, forest heritage, and responsibility to
            protect the environment.
          </p>


        </div>

      </section>

    </main>
  );
}
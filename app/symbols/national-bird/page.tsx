import Image from "next/image";

export default function NationalBirdPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Bird (White-backed Vulture)
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The White-backed Vulture represents Liberia's wildlife,
          natural environment, and the importance of protecting
          biodiversity.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/national-bird.png"
            alt="White-backed Vulture"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🐦 Symbol: National Bird of Liberia</li>
            <li>🌍 Species: White-backed Vulture</li>
            <li>🌿 Represents: Wildlife and nature</li>
            <li>🦅 Known for: Its important role in ecosystems</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia is home to diverse wildlife because of its
            forests, wetlands, and natural landscapes. The
            White-backed Vulture represents the country's rich
            biodiversity and connection to the natural world.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Like many national symbols, the bird reflects Liberia's
            responsibility to protect its environment and preserve
            wildlife for future generations.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The White-backed Vulture plays an important role in
            nature by helping maintain healthy ecosystems. It is
            a reminder of the balance between humans and the
            environment.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Environmental Value
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🌿 Supports ecological balance</li>
            <li>🦅 Represents Liberia's bird life</li>
            <li>🌳 Highlights the importance of conservation</li>
            <li>🌍 Encourages protection of wildlife habitats</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            National Identity
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The White-backed Vulture represents Liberia's natural
            heritage and the importance of preserving the country's
            unique wildlife.
          </p>


        </div>

      </section>

    </main>
  );
}
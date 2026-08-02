import Image from "next/image";

export default function EdwardRoyePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Edward James Roye
        </h1>

        <p className="mt-4 text-lg text-white">
          Edward James Roye was Liberia's fifth President and one of
          the important leaders of Liberia's early political history.
        </p>

      </section>


      {/* Profile */}
    <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/leaders/edward-roye.png"
      alt="Edward James Roye"
      width={500}
      height={600}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🇱🇷 5th President of Liberia</li>
      <li>📅 Served: 1870–1871</li>
      <li>🎂 Born: February 3, 1815</li>
      <li>🏛 Capital: Monrovia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Early Life
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Edward James Roye was born in Ohio in 1815 and later became
      an important figure in Liberia's political history. He moved
      to Liberia and built a successful career as a businessman,
      politician, and government leader.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Path to Leadership
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Before becoming president, Roye served in important government
      positions and rose through Liberia's political system. His
      election marked a significant moment in Liberia's history.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Presidency
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Roye's presidency lasted only a short period. His administration
      faced political challenges and economic difficulties that
      affected the country during his time in office.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Major Contributions
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏛 Became Liberia's first president from the True Whig Party era</li>
      <li>📜 Promoted government development</li>
      <li>🌍 Represented Liberia internationally</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Legacy
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Edward James Roye remains an important historical figure as
      one of Liberia's early presidents and a leader who shaped
      the country's political history.
    </p>

  </div>

</section>

    </main>
  );
}
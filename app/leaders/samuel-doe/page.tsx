import Image from "next/image";

export default function SamuelDoePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Samuel K. Doe
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Samuel K. Doe was Liberia's first indigenous head of state
          and a major figure in the country's modern political history.
        </p>

      </section>


      {/* Profile */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/leaders/samuel-doe.png"
      alt="Samuel Kanyon Doe"
      width={500}
      height={600}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🇱🇷 Chairman of the People's Redemption Council</li>
      <li>📅 Ruled Liberia: 1980–1990</li>
      <li>🎂 Born: May 6, 1951</li>
      <li>🏛 Capital: Monrovia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Early Life
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Samuel Kanyon Doe was born in Grand Gedeh County and joined
      the Armed Forces of Liberia. He rose through the military
      ranks before becoming the leader of Liberia in 1980.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Rise to Power
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      In April 1980, Doe led a military coup that ended the
      Americo-Liberian political era. He became head of the
      People's Redemption Council and later served as president.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Leadership Period
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Doe's government introduced changes in Liberia's political
      system and increased the participation of indigenous
      Liberians in national leadership. His rule was also marked
      by political tensions and conflict.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Major Events
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏛 Established a military government in 1980</li>
      <li>📜 Introduced a new constitution in 1986</li>
      <li>🌍 Managed Liberia during a period of major political change</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Legacy
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Samuel Doe remains one of the most discussed figures in
      Liberia's modern history. His period of leadership greatly
      influenced the country's political direction before the
      Liberian Civil War.
    </p>

  </div>

</section>

    </main>
  );
}
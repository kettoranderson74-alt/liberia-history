import Image from "next/image";

export default function JosephRobertsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Joseph Jenkins Roberts
        </h1>

        <p className="mt-4 text-lg text-white">
          Joseph Jenkins Roberts was Liberia's first President and
          one of the most important figures in the nation's early history.
        </p>
      </section>


      {/* Profile */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/leaders/joseph-jenkins-roberts.png"
      alt="Joseph Jenkins Roberts"
      width={500}
      height={600}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🇱🇷 First President of Liberia</li>
      <li>📅 Served: 1848–1856 and 1872–1876</li>
      <li>🎂 Born: March 15, 1809</li>
      <li>🏛 Capital: Monrovia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Early Life
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Joseph Jenkins Roberts was born in Virginia in 1809 and later
      migrated to Liberia. He became an important figure in Liberia's
      early development and played a major role in the country's
      transition to independence.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Path to Leadership
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Before becoming president, Roberts served as Liberia's first
      Black governor and helped guide the country toward independence
      in 1847.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Presidency
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      During his presidency, Roberts focused on building Liberia's
      government institutions, strengthening foreign relations,
      and promoting national development.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Major Contributions
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏛 Helped establish Liberia as an independent nation</li>
      <li>🌍 Developed Liberia's international relationships</li>
      <li>📜 Strengthened early government institutions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Legacy
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Joseph Jenkins Roberts is remembered as one of Liberia's
      founding leaders and a key figure in the country's early history.
    </p>

  </div>

</section>

    </main>
  );
}
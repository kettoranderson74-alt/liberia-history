import Image from "next/image";

export default function LiberiaPresidentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia's Presidents 🇱🇷
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the leaders who guided Liberia through different
          periods of political and social change.
        </p>

      </section>


      {/* Article */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">


          <Image
            src="/images/roberts.jpg"
            alt="Liberia Presidents"
            width={800}
            height={450}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Introduction
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Since gaining independence in 1847, Liberia has been led
            by many presidents who shaped the nation's political,
            economic, and social development.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Early Presidents
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts became Liberia's first president
            in 1848. Early leaders focused on building government
            institutions, establishing international relationships,
            and strengthening the young republic.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Important Leaders
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">

            <li>
              • Joseph Jenkins Roberts (1848–1856)
            </li>

            <li>
              • William V.S. Tubman (1944–1971)
            </li>

            <li>
              • William R. Tolbert Jr. (1971–1980)
            </li>

            <li>
              • Samuel K. Doe (1980–1990)
            </li>

            <li>
              • Ellen Johnson Sirleaf (2006–2018)
            </li>

            <li>
              • George Weah (2018–2024)
            </li>

            <li>
              • Joseph Boakai (2024–Present)
            </li>

          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Historical Impact
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's presidents have guided the country through
            independence, modernization, political changes, conflict,
            and democratic development.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Leadership Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Each administration contributed to Liberia's story.
            Understanding their leadership helps explain the nation's
            journey and the challenges it has overcome.
          </p>


        </div>

      </section>

    </main>
  );
}
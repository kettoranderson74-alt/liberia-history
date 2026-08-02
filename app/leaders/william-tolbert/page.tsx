import Image from "next/image";

export default function TolbertPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          William R. Tolbert Jr.
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          William R. Tolbert Jr. was Liberia's 20th president and
          a leader who promoted development, education, and social reforms.
        </p>

      </section>


      {/* Profile */}
     <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/leaders/william-tolbert.png"
      alt="William R. Tolbert Jr."
      width={500}
      height={600}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🇱🇷 20th President of Liberia</li>
      <li>📅 Served: 1971–1980</li>
      <li>🎂 Born: May 13, 1913</li>
      <li>🏛 Capital: Monrovia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Early Life
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      William Richard Tolbert Jr. was born in Bensonville,
      Montserrado County. Before becoming president, he served
      as Vice President of Liberia for many years under President
      William V.S. Tubman.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Path to Leadership
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Tolbert became president after the death of President Tubman
      in 1971. He introduced several reforms aimed at modernizing
      Liberia's government and economy.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Presidency
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      During his presidency, Tolbert focused on economic reforms,
      agricultural development, education, and improving Liberia's
      relations with other African nations.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Major Contributions
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🌾 Promoted agricultural development</li>
      <li>📚 Supported education expansion</li>
      <li>🌍 Strengthened African diplomatic relations</li>
      <li>🏛 Introduced government reform programs</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Legacy
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      William R. Tolbert Jr. is remembered as Liberia's last
      president before the 1980 military coup. His presidency
      remains an important period in Liberia's political history.
    </p>

  </div>

</section>

    </main>
  );
}
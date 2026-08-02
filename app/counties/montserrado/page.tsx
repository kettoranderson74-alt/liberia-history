import Image from "next/image";

export default function MontserradoPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Montserrado County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, people, culture, and landmarks of Liberia's
          most populated county.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      alt="Montserrado County"
      width={800}
      height={450}
      src="/images/counties/montserrado.png"
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>📍 Capital: Bensonville</li>
      <li>🏙 Major City: Monrovia</li>
      <li>🗺 Region: Central Liberia</li>
      <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      History
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Montserrado County has played a central role in Liberia's history.
      The settlement of Monrovia was established in 1822 and later became
      the capital of Liberia after independence in 1847.
      The county has remained the political, economic, and cultural heart
      of the nation.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Culture & People
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Montserrado is home to people from many Liberian communities.
      The county is known for its diverse traditions, music, food,
      education, business activities, and national celebrations.
    </p>


    <h2 className="text-3xl font-bold mt-8">
      Important Places
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏛 Executive Mansion area</li>
      <li>🏫 University of Liberia</li>
      <li>🌊 Atlantic coastline and beaches</li>
      <li>🏙 Monrovia historic districts</li>
    </ul>


    <h2 className="text-3xl font-bold mt-8">
      Historical Importance
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      As the location of Liberia's capital city, Montserrado has been
      at the center of major political decisions, national development,
      and important events throughout Liberia's history.
    </p>


  </div>

</section>
    </main>
  );
}
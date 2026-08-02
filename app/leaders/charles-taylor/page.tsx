import Image from "next/image";

export default function CharlesTaylorPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Charles Taylor
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Charles Taylor was Liberia's president from 1997 to 2003
          during a major period of conflict and political transition.
        </p>

      </section>


      {/* Profile */}
      <section className="max-w-5xl mx-auto py-12 px-6">

  <div className="bg-white rounded-xl shadow p-8">

    <Image
      src="/images/leaders/charles-taylor.png"
      alt="Charles Ghankay Taylor"
      width={500}
      height={600}
      className="rounded-xl mx-auto"
    />

    <h2 className="text-3xl font-bold mt-8">
      Quick Facts
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🇱🇷 22nd President of Liberia</li>
      <li>📅 Served: 1997–2003</li>
      <li>🎂 Born: January 28, 1948</li>
      <li>🏛 Capital: Monrovia</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Early Life
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Charles Ghankay Taylor was born in Arthington, Liberia.
      He studied in Liberia and the United States before entering
      government service and later becoming involved in Liberia's
      political struggles.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Rise to Power
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Taylor became the leader of the National Patriotic Front of
      Liberia during the First Liberian Civil War. After the war,
      he won the 1997 presidential election and became president.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Presidency
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Taylor's administration focused on rebuilding Liberia after
      years of conflict. However, his presidency was also marked
      by continued regional conflicts and international criticism.
    </p>

    <h2 className="text-3xl font-bold mt-8">
      Major Events
    </h2>

    <ul className="mt-4 space-y-2 text-lg text-gray-800">
      <li>🏛 Elected president in 1997</li>
      <li>🕊 Faced growing internal and regional conflicts</li>
      <li>📜 Left office in 2003 during international pressure</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">
      Legacy
    </h2>

    <p className="mt-4 text-lg text-gray-800">
      Charles Taylor remains one of Liberia's most controversial
      historical figures. His period of leadership is an important
      part of Liberia's modern history and the country's journey
      toward peace and reconstruction.
    </p>

  </div>

</section>

    </main>
  );
}
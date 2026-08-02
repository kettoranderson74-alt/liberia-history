import Image from "next/image";

export default function GeorgeWeahPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          George Manneh Weah
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Liberia's former football legend and the country's
          25th president.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/leaders/george-weah.png"
            alt="George Manneh Weah"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 25th President of Liberia</li>
            <li>📅 Served: 2018–2024</li>
            <li>🎂 Born: October 1, 1966</li>
            <li>⚽ Former World Football Player of the Year</li>
            <li>🏛 Capital: Monrovia</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            George Manneh Weah was born in Clara Town, Monrovia.
            He grew up in a humble background and later became
            one of Africa's greatest football players.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Football Career
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before entering politics, Weah had a successful
            international football career. He played for major
            European clubs and became the first African player
            to win the FIFA World Player of the Year award.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Path to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            After football, Weah entered politics and became
            involved in Liberia's democratic process. He later
            won the 2017 presidential election and became
            president in 2018.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Presidency
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            His administration focused on education programs,
            infrastructure development, youth opportunities,
            and economic growth. His presidency also faced
            challenges including economic difficulties and
            public criticism.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>⚽ Became an international symbol of African football</li>
            <li>🎓 Promoted free university tuition policies</li>
            <li>🏗 Supported infrastructure projects</li>
            <li>👥 Focused on youth development</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            George Weah remains one of Liberia's most globally
            recognized figures. His journey from football success
            to national leadership is a unique part of Liberia's
            modern history.
          </p>


        </div>

      </section>

    </main>
  );
}
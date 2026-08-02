import Image from "next/image";

export default function JosephBoakaiPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Joseph Nyuma Boakai
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Liberia's 26th president and a long-serving public servant
          with decades of experience in government.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/leaders/joseph-boakai.png"
            alt="Joseph Nyuma Boakai"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 26th President of Liberia</li>
            <li>📅 Served: 2024–Present</li>
            <li>🎂 Born: November 30, 1944</li>
            <li>🏛 Capital: Monrovia</li>
            <li>🎓 Former Vice President of Liberia</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Nyuma Boakai was born in Worsonga, Lofa County.
            He developed a career in agriculture, business, and
            public service before becoming one of Liberia's major
            political leaders.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Education & Career
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Boakai studied business administration and worked in
            Liberia's agricultural sector. He later served as
            Minister of Agriculture and held other important
            government positions.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Path to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Boakai served as Vice President of Liberia from 2006
            to 2018 under President Ellen Johnson Sirleaf. In 2023,
            he won the presidential election and became president
            in 2024.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Presidency
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            His administration has focused on governance reforms,
            economic development, improving public services, and
            addressing national challenges facing Liberia.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🏛 Decades of experience in public service</li>
            <li>🌾 Promoted agricultural development</li>
            <li>🤝 Focused on national unity and governance</li>
            <li>📚 Supported institutional improvement</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Boakai is recognized for his long career in
            Liberian public service and his role in shaping the
            country's modern democratic leadership.
          </p>


        </div>

      </section>

    </main>
  );
}
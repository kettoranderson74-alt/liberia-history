import Image from "next/image";

export default function GyudeBryantPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Gyude Bryant
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Chairman of Liberia's National Transitional Government
          during the country's journey from war toward peace.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/leaders/gyude-bryant.png"
            alt="Gyude Bryant"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 Chairman of the National Transitional Government of Liberia</li>
            <li>📅 Served: 2003–2006</li>
            <li>🎂 Born: January 17, 1949</li>
            <li>🏛 Capital: Monrovia</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Charles Gyude Bryant was born in Monrovia, Liberia.
            Before becoming transitional leader, he worked in
            business and became involved in national affairs.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Path to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bryant became chairman of Liberia's transitional
            government after the 2003 peace agreement that ended
            the Second Liberian Civil War. His role was to help
            guide the country toward stability and democratic
            elections.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Leadership Period
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            His administration focused on restoring government
            institutions, supporting peace efforts, rebuilding
            national systems, and preparing Liberia for the
            2005 presidential election.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🕊 Helped lead Liberia after years of civil war</li>
            <li>🗳 Supported preparations for democratic elections</li>
            <li>🏛 Helped rebuild national institutions</li>
            <li>🌍 Worked with international partners during transition</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Gyude Bryant is remembered as a transitional leader who
            helped move Liberia from conflict toward peace and
            democratic governance.
          </p>


        </div>

      </section>

    </main>
  );
}
import Image from "next/image";

export default function EllenJohnsonSirleafPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Ellen Johnson Sirleaf
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Liberia's first elected female president and a global
          symbol of democratic leadership.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/leaders/ellen-johnson-sirleaf.png"
            alt="Ellen Johnson Sirleaf"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 24th President of Liberia</li>
            <li>📅 Served: 2006–2018</li>
            <li>🎂 Born: October 29, 1938</li>
            <li>🏆 Nobel Peace Prize recipient (2011)</li>
            <li>👩 First elected female head of state in Africa</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Ellen Johnson Sirleaf was born in Monrovia, Liberia.
            She studied economics and public administration and
            built a long career in government, finance, and
            international development.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Education & Career
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before becoming president, Sirleaf worked with
            international organizations and held important
            positions related to economic policy and development.
            She became known for her experience in public service
            and leadership.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Path to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            After years of political involvement, Ellen Johnson
            Sirleaf won the 2005 presidential election and became
            president in 2006, leading Liberia after years of
            civil conflict.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Presidency
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Her administration focused on rebuilding Liberia,
            strengthening institutions, attracting investment,
            improving infrastructure, and promoting peace after
            the civil wars.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🕊 Helped maintain peace after civil conflict</li>
            <li>🏗 Supported infrastructure development</li>
            <li>🌍 Increased Liberia's international partnerships</li>
            <li>🏆 Received the 2011 Nobel Peace Prize</li>
            <li>👩 Inspired women leaders around the world</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Challenges
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Her presidency also faced challenges, including
            corruption concerns, economic difficulties, and
            criticism over some government decisions.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Ellen Johnson Sirleaf remains one of Liberia's most
            internationally recognized leaders. Her presidency
            represents an important chapter in Liberia's journey
            toward peace, democracy, and development.
          </p>


        </div>

      </section>

    </main>
  );
}
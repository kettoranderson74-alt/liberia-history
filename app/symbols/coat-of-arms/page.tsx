import Image from "next/image";

export default function CoatOfArmsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Coat of Arms
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The national emblem of Liberia representing the country's
          history, independence, agriculture, and hope for the future.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/coat-of-arms.png"
            alt="Liberia National Coat of Arms"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 Official Symbol: National Coat of Arms</li>
            <li>📅 Adopted: 1847</li>
            <li>🏛 Represents: Liberia's history and values</li>
            <li>⭐ Motto: "The Love of Liberty Brought Us Here"</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's Coat of Arms was created after the country
            declared independence in 1847. It was designed to
            represent the journey of the Liberian people, the
            country's natural resources, and the ideals of freedom.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The emblem has been used on government documents,
            official buildings, passports, and national materials
            as a representation of Liberia's sovereignty.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Symbols and Their Meaning
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">
            <li>
              🚢 Ship: Represents the arrival of settlers and
              Liberia's connection with the outside world.
            </li>

            <li>
              🌴 Palm Tree: Represents Liberia's natural resources
              and tropical environment.
            </li>

            <li>
              🌅 Rising Sun: Represents hope, progress, and a new beginning.
            </li>

            <li>
              🛠 Tools: Represent labor, agriculture, and national development.
            </li>

            <li>
              📜 Scroll: Represents Liberia's history and the date of independence.
            </li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            National Motto
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            "The Love of Liberty Brought Us Here" reflects the
            desire for freedom that shaped Liberia's founding and
            continues to represent national pride.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Coat of Arms remains an important symbol of Liberia's
            independence, identity, and national unity. It connects
            Liberia's past struggles with its hopes for the future.
          </p>


        </div>

      </section>

    </main>
  );
}
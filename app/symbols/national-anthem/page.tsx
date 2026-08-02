import Image from "next/image";

export default function NationalAnthemPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia National Anthem
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Liberia's patriotic song expressing love, loyalty,
          and dedication to the nation.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/symbols/national-anthem.png"
            alt="Liberia National Anthem"
            width={700}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🎵 Official Name: All Hail, Liberia, Hail!</li>
            <li>📅 Adopted: 1847</li>
            <li>✍️ Written by: Daniel Bashiel Warner</li>
            <li>🎼 Music: Composed by Olmstead Luca</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's national anthem was adopted after the country
            gained independence in 1847. It was created to express
            pride in the new republic and the ideals that guided
            Liberia's founding.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The anthem has been performed during national ceremonies,
            independence celebrations, government events, and
            international occasions where Liberia is represented.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Meaning of the Anthem
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The anthem expresses patriotism, commitment to Liberia,
            and the importance of protecting the freedom and unity
            of the nation.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            National Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The anthem serves as a reminder of Liberia's history,
            independence, and the responsibility of citizens to
            contribute to the nation's progress.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            When It Is Used
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 Independence Day celebrations</li>
            <li>🏛 Government ceremonies</li>
            <li>🏫 School events</li>
            <li>🌍 International gatherings</li>
          </ul>


        </div>

      </section>

    </main>
  );
}
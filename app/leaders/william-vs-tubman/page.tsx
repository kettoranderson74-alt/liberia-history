import Image from "next/image";

export default function WilliamTubmanPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          William V. S. Tubman
        </h1>

        <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
          William V. S. Tubman was Liberia's longest-serving president,
          known for his Open Door Policy and efforts to modernize Liberia.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/leaders/william-tubman.png"
            alt="William V.S. Tubman"
            width={500}
            height={600}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 18th President of Liberia</li>
            <li>📅 Served: 1944–1971</li>
            <li>🎂 Born: November 29, 1895</li>
            <li>🏛 Capital: Monrovia</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            William Vacanarat Shadrach Tubman was born in Harper,
            Maryland County. He studied law and became a lawyer before
            entering politics and government service.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Path to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Tubman entered politics and became one of Liberia's most
            influential leaders. He was elected president in 1943 and
            began his administration in 1944.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Presidency
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Tubman's presidency lasted 27 years. His administration
            focused on economic development, foreign investment,
            infrastructure, and expanding Liberia's international
            relationships.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🏗 Expanded Liberia's infrastructure</li>
            <li>🌍 Increased foreign investment</li>
            <li>🤝 Promoted the Open Door Policy</li>
            <li>📚 Supported education and development programs</li>
          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            William V.S. Tubman is remembered as one of Liberia's
            longest-serving presidents. His era brought major economic
            growth, while historians also discuss the political
            challenges of his administration.
          </p>


        </div>

      </section>

    </main>
  );
}
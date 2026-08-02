import Image from "next/image";

export default function JosephJenkinsRobertsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Joseph Jenkins Roberts: Liberia's First President 🇱🇷
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the life, leadership, and legacy of Joseph Jenkins
          Roberts, the first president of the Republic of Liberia.
        </p>

      </section>


      {/* Article */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <article className="bg-white rounded-xl shadow p-8">


          <Image
            src="/images/leaders/joseph-jenkins-roberts.png"
            alt="Joseph Jenkins Roberts"
            width={600}
            height={700}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Introduction
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts was the first president of Liberia
            and one of the most important figures in the country's
            early history. He helped guide Liberia during its transition
            from an independent settlement into a recognized republic.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Early Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts was born on March 15, 1809, in
            Norfolk, Virginia. He later migrated to Liberia, where he
            became involved in business, government, and public service.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Road to Leadership
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before becoming president, Roberts served in leadership
            positions within the Liberian settlement. His experience
            helped prepare him to lead the country after independence
            was declared on July 26, 1847.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Presidency
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts served as Liberia's first president
            from 1848 to 1856. During his administration, he worked to
            establish government institutions, strengthen Liberia's
            international relationships, and promote national growth.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Major Contributions
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">

            <li>
              🇱🇷 Led Liberia as its first president
            </li>

            <li>
              🌍 Helped gain international recognition for Liberia
            </li>

            <li>
              🏛 Strengthened early government institutions
            </li>

            <li>
              🤝 Promoted diplomacy with other nations
            </li>

          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts remains remembered as a founding
            leader of Liberia. His leadership during the country's
            earliest years helped shape the foundations of the republic.
          </p>


        </article>

      </section>


    </main>
  );
}
import Image from "next/image";

export default function CivilWarHistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Liberia Civil War: Causes, Events, and Road to Peace (1989–2003) ⚔️
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the causes of Liberia's civil wars, the major events
          between 1989 and 2003, and the nation's journey toward peace
          and rebuilding.
        </p>

      </section>


      {/* Article */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <article className="bg-white rounded-xl shadow p-8">


          <Image
            src="/images/liberia.jpg"
            alt="Liberia Civil War History"
            width={800}
            height={450}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Introduction
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia experienced two major civil wars between 1989 and
            2003. The conflicts changed the country's political,
            social, and economic landscape, but they also led to
            important lessons about peace, reconciliation, and rebuilding.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Causes of the Civil War
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The civil war was influenced by years of political tension,
            economic inequality, disputes over governance, and growing
            dissatisfaction among different groups. These challenges
            contributed to the outbreak of armed conflict in 1989.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Timeline
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">

            <li>
              • 1989 - The First Liberian Civil War began.
            </li>

            <li>
              • 1997 - National elections were held and Charles Taylor
              became president.
            </li>

            <li>
              • 1999 - The Second Liberian Civil War began.
            </li>

            <li>
              • 2003 - A peace agreement was reached, bringing the
              conflict to an end.
            </li>

          </ul>


          <h2 className="text-3xl font-bold mt-8">
            Impact on Liberia
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The wars affected communities across Liberia and caused
            major challenges for the country's economy, infrastructure,
            education system, and institutions. Many Liberians worked
            together afterward to rebuild their communities.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            The Road to Peace
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            After years of conflict, Liberia entered a period of
            reconciliation, democratic elections, and national recovery.
            Peace efforts helped the country begin a new chapter focused
            on stability and development.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's civil war era remains an important part of the
            country's history. Understanding this period helps future
            generations appreciate the importance of peace, unity,
            and responsible leadership.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Today, Liberia continues to strengthen its democracy and
            rebuild its society. The lessons from the civil war period
            remain important in shaping the country's future.
          </p>


        </article>

      </section>

    </main>
  );
}
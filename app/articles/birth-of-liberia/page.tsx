import Image from "next/image";

export default function BirthOfLiberiaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          The Birth of Liberia (1822–1847)
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          The story of how Liberia was founded, gained independence,
          and became Africa's first independent republic.
        </p>

      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <article className="bg-white rounded-xl shadow p-8">


          <Image
            src="/images/liberia.jpg"
            alt="History of Liberia"
            width={900}
            height={500}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Introduction
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's history is one of freedom, migration, resilience,
            and nation building. The country was established in the
            19th century and became the first independent republic
            in Africa in 1847.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Liberia Before Independence
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before Liberia became a republic, the region was home to
            many African communities with rich cultures, languages,
            and traditions. The area was connected to trade networks
            along the West African coast.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            The Arrival of Settlers in 1822
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            In 1822, the first settlers supported by the American
            Colonization Society arrived on Providence Island near
            present-day Monrovia. This marked the beginning of the
            settlement that would later become Liberia.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            The Founding of Monrovia
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The settlement was named Monrovia in honor of James Monroe,
            the fifth President of the United States. It later became
            the capital city and the center of Liberia's government.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            The Road to Independence
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Over time, the Liberian settlement developed its own
            government and institutions. On July 26, 1847, Liberia
            declared independence and became a sovereign nation.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Joseph Jenkins Roberts
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts became Liberia's first president.
            His leadership helped establish the foundations of the
            new republic and its international relationships.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's independence was a major moment in African
            history. The country became a symbol of self-government
            and played an important role in the history of Africa
            and the world.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Today, Liberia continues to preserve its history through
            its people, culture, landmarks, and national traditions.
            Understanding the country's beginnings helps explain
            Liberia's unique place in African history.
          </p>


        </article>

      </section>

    </main>
  );
}
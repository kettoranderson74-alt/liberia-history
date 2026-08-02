import Image from "next/image";

export default function LiberiaIndependencePage() {
  return (
    <main className="min-h-screen bg-gray-50">


      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Liberia Independence Day: July 26, 1847 🇱🇷
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history behind Liberia's independence,
          the declaration of July 26, 1847, and the birth of
          Africa's first independent republic.
        </p>

      </section>



      {/* Article */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <article className="bg-white rounded-xl shadow p-8">


          <Image
            src="/images/liberia.jpg"
            alt="Liberia Independence History"
            width={800}
            height={450}
            className="rounded-xl mx-auto"
          />



          <h2 className="text-3xl font-bold mt-8">
            Introduction
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's independence is one of the most important
            moments in African history. On July 26, 1847, Liberia
            declared itself an independent republic, becoming the
            first independent republic in Africa.
          </p>



          <h2 className="text-3xl font-bold mt-8">
            Background Before Independence
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before independence, the area that became Liberia was
            home to many African communities with their own cultures,
            languages, and traditions. In the 19th century, a settlement
            was established for formerly enslaved Africans from the
            United States.
          </p>



          <h2 className="text-3xl font-bold mt-8">
            Timeline
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">

            <li>
              • 1822 - The American Colonization Society established
              a settlement near Cape Mesurado.
            </li>

            <li>
              • 1824 - The settlement was named Monrovia in honor of
              U.S. President James Monroe.
            </li>

            <li>
              • July 26, 1847 - Liberia declared independence and
              became a sovereign nation.
            </li>

            <li>
              • 1848 - Joseph Jenkins Roberts was inaugurated as
              Liberia's first president.
            </li>

          </ul>



          <h2 className="text-3xl font-bold mt-8">
            Joseph Jenkins Roberts
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Joseph Jenkins Roberts became Liberia's first president
            and helped establish the foundations of the new republic.
            His leadership played an important role in shaping Liberia's
            early government and international recognition.
          </p>



          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's independence represented ideas of freedom,
            self-government, and national identity. At a time when
            many African territories were under European colonial rule,
            Liberia stood as an independent African nation.
          </p>



          <h2 className="text-3xl font-bold mt-8">
            Independence Day Celebration
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Every year on July 26, Liberia celebrates Independence Day.
            The day honors the country's history, sacrifices, culture,
            and the journey of its people.
          </p>



          <h2 className="text-3xl font-bold mt-8">
            Legacy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia's independence remains a defining part of its
            national story. The country's history continues to inspire
            discussions about freedom, leadership, and development.
          </p>


        </article>

      </section>


    </main>
  );
}
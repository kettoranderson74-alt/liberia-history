import Image from "next/image";

export default function MontserradoPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Montserrado County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, people, culture, and landmarks of Liberia's
          most populated county.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">


          <Image
            
            alt="Montserrado County"
            width={800}
            height={450}src="/images/counties/montserrado.png"
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Overview
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Montserrado County is one of Liberia's 15 counties and is home
            to the nation's capital, Monrovia. It is the political,
            economic, and cultural center of Liberia.
          </p>


          <h2 className="text-3xl font-bold mt-8">

  Capital
</h2>
<h2 className="text-3xl font-bold mt-8">
  Capital
</h2>

<p className="mt-4 text-lg text-gray-800">
  Bensonville is the capital city of Montserrado County. Monrovia,
  which is located within Montserrado County, is the capital city
  of Liberia and serves as the country's political and economic center.
</p>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Montserrado played a major role in Liberia's early history.
            The settlement of Monrovia was established in 1822 and later
            became the center of Liberia's government after independence
            in 1847.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Culture
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The county is home to people from many Liberian communities.
            Its culture includes music, food, festivals, education,
            business, and national celebrations.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Important Places
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Montserrado contains many important locations including
            government institutions, universities, historical sites,
            markets, and cultural centers.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            As the home of Monrovia, Montserrado has been at the center
            of Liberia's political decisions, national development, and
            historical events for generations.
          </p>


        </div>

      </section>

    </main>
  );
}
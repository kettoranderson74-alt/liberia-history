import Image from "next/image";

export default function RiverGeePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          River Gee County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the history, culture, traditions, and natural beauty
          of River Gee County, Liberia.
        </p>
      </section>


      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            src="/images/counties/river-gee.png"
            alt="River Gee County"
            width={800}
            height={450}
            className="rounded-xl mx-auto"
          />


          <h2 className="text-3xl font-bold mt-8">
            Overview
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            River Gee County is located in southeastern Liberia. It is
            known for its forests, rivers, agriculture, and strong
            traditional communities.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Capital
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Fish Town is the capital city of River Gee County and serves
            as the administrative center of the county.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            River Gee County was established in 2000 after being separated
            from Grand Gedeh County. It has a history connected to the
            indigenous communities of southeastern Liberia.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Culture
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            River Gee's culture includes traditional ceremonies, music,
            dance, storytelling, farming practices, and community values.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Important Places
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The county is known for its rivers, forests, farming areas,
            and rural communities.
          </p>


          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            River Gee represents Liberia's cultural diversity and the
            importance of southeastern communities in the nation's history.
          </p>

        </div>

      </section>

    </main>
  );
}
import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          History of Liberia
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the important events, people, and moments that shaped
          Liberia's journey.
        </p>
      </section>


      {/* Cover Image */}
      <section className="max-w-5xl mx-auto py-10 px-6">

        <Image
          src="/images/liberia.jpg"
          alt="Liberia History"
          width={900}
          height={450}
          className="rounded-xl shadow mx-auto"
        />

      </section>


      {/* Timeline */}
      <section className="max-w-5xl mx-auto py-8 px-6">

        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Liberia Timeline
        </h2>


        <div className="space-y-6">


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              1822 - Settlement of Liberia
            </h3>

            <p className="mt-3 text-gray-800">
              The first settlers arrived on the West African coast through
              the efforts of the American Colonization Society, creating
              the foundation of what would become Liberia.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              1847 - Independence of Liberia
            </h3>

            <p className="mt-3 text-gray-800">
              On July 26, 1847, Liberia declared independence and became
              Africa's first modern republic. Joseph Jenkins Roberts became
              the first president.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              20th Century Liberia
            </h3>

            <p className="mt-3 text-gray-800">
              Liberia experienced economic growth, political changes, and
              important leadership periods including the long presidency
              of William V. S. Tubman.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">
              Modern Liberia
            </h3>

            <p className="mt-3 text-gray-800">
              Liberia continues to preserve its history and culture while
              working toward peace, development, and a stronger future.
            </p>
          </div>


        </div>

      </section>


    </main>
  );
}
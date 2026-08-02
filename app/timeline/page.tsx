export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia History Timeline
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the important events, leaders, and moments that shaped
          Liberia from its founding to the present day.
        </p>
      </section>


      {/* Timeline */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="relative border-l-4 border-green-700 space-y-10 ml-4">


          {/* 1822 */}
          <div className="relative ml-8 bg-white p-6 rounded-xl shadow">

            <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              1822
            </h2>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Founding of Liberia
            </h3>

            <p className="mt-3 text-gray-800">
              The first settlers arrived on the West African coast through
              the efforts of the American Colonization Society, creating
              the foundation of Liberia.
            </p>

          </div>


          {/* 1847 */}
          <div className="relative ml-8 bg-white p-6 rounded-xl shadow">

            <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              1847
            </h2>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Liberia Declares Independence
            </h3>

            <p className="mt-3 text-gray-800">
              On July 26, 1847, Liberia became an independent republic.
              Joseph Jenkins Roberts became the first president.
            </p>

          </div>


          {/* 1944 */}
          <div className="relative ml-8 bg-white p-6 rounded-xl shadow">

            <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              3
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              1944
            </h2>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Tubman Era Begins
            </h3>

            <p className="mt-3 text-gray-800">
              William V. S. Tubman became president and introduced policies
              focused on modernization, national unity, and foreign investment.
            </p>

          </div>


          {/* 1980 */}
          <div className="relative ml-8 bg-white p-6 rounded-xl shadow">

            <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex in items-center justify-center font-bold">
              4
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              1980
            </h2>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Political Change
            </h3>

            <p className="mt-3 text-gray-800">
              Liberia experienced a major political transition that changed
              the country's leadership and future direction.
            </p>

          </div>


          {/* 2006 */}
          <div className="relative ml-8 bg-white p-6 rounded-xl shadow">

            <div className="absolute -left-12 top-6 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              5
            </div>

            <h2 className="text-3xl font-bold text-green-700">
              2006
            </h2>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Ellen Johnson Sirleaf Presidency
            </h3>

            <p className="mt-3 text-gray-800">
              Ellen Johnson Sirleaf became Liberia's first elected female
              president and Africa's first elected female head of state.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
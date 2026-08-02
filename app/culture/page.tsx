export default function CulturePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia Culture & Heritage
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore Liberia's traditions, communities, languages, food,
          music, festivals, and the heritage that shapes the nation's identity.
        </p>
      </section>


      {/* Culture Sections */}
      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid md:grid-cols-2 gap-8">


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Communities & Ethnic Groups
            </h2>

            <p className="mt-3 text-gray-800">
              Liberia is home to many ethnic communities, including the
              Kpelle, Bassa, Gio, Mano, Kru, Grebo, Vai, and others.
              Each group contributes unique traditions and history.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Languages
            </h2>

            <p className="mt-3 text-gray-800">
              English is Liberia's official language, while many indigenous
              languages continue to be spoken across the country.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Food & Traditions
            </h2>

            <p className="mt-3 text-gray-800">
              Liberian cuisine includes dishes such as jollof rice, fufu,
              cassava, palm butter, dumboy, and many traditional meals
              shared during family and community gatherings.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Music & Identity
            </h2>

            <p className="mt-3 text-gray-800">
              Music, dance, storytelling, and ceremonies help preserve
              Liberia's cultural identity from generation to generation.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Traditional Clothing
            </h2>

            <p className="mt-3 text-gray-800">
              Traditional clothing reflects Liberia's creativity,
              craftsmanship, and the cultural values of different communities.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-gray-900">
              Heritage & Festivals
            </h2>

            <p className="mt-3 text-gray-800">
              Liberia's celebrations, historical places, and community
              events help preserve the country's rich heritage.
            </p>
          </div>


        </div>

      </section>

    </main>
  );
}
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          About Liberia History
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          A platform created to preserve, teach, and share the history
          of Liberia with the world.
        </p>
      </section>


      {/* About Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white p-8 rounded-xl shadow">


          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Liberia History is dedicated to helping people learn about
            Liberia's past, its leaders, culture, achievements, and the
            important events that shaped the nation.
          </p>


          <h2 className="text-3xl font-bold mt-8 text-gray-900">
            Our Vision
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Our vision is to create a digital archive where Liberians
            and people around the world can easily discover and appreciate
            Liberia's rich history.
          </p>


          <h2 className="text-3xl font-bold mt-8 text-gray-900">
            Why History Matters
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Understanding history helps communities remember their journey,
            celebrate achievements, learn from challenges, and build a
            stronger future.
          </p>


          <h2 className="text-3xl font-bold mt-8 text-gray-900">
            What You Will Find Here
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Visitors can explore historical timelines, biographies of
            important leaders, cultural traditions, and detailed articles
            about Liberia's most important moments.
          </p>


        </div>

      </section>

    </main>
  );
}
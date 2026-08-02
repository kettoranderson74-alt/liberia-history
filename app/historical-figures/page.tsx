import Link from "next/link";

export default function HistoricalFiguresPage() {
  const figures = [
    {
      name: "Joseph Jenkins Roberts",
      role: "First President of Liberia",
      description:
        "Led Liberia during its early years after independence and helped gain international recognition.",
    },
    {
      name: "Hilary Teage",
      role: "Statesman and Writer",
      description:
        "Known for his contributions to Liberia's early government and for helping shape the country's political ideas.",
    },
    {
      name: "Edward James Roye",
      role: "President of Liberia",
      description:
        "Served as Liberia's fifth president and played an important role in the country's early political history.",
    },
    {
      name: "William V. S. Tubman",
      role: "Longest-Serving President",
      description:
        "Introduced the Open Door Policy and promoted modernization and national integration.",
    },
    {
      name: "Angie Elizabeth Brooks",
      role: "Diplomat",
      description:
        "A distinguished Liberian diplomat who became the first African woman to preside over the United Nations General Assembly.",
    },
    {
      name: "Ellen Johnson Sirleaf",
      role: "Former President",
      description:
        "Liberia's first elected female president and a Nobel Peace Prize laureate.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Historical Figures of Liberia
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Meet some of the men and women whose leadership, ideas, and service
          helped shape Liberia's history.
        </p>
      </section>

      {/* Figures */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {figures.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {person.name}
              </h2>

              <p className="font-semibold mt-2">
                {person.role}
              </p>

              <p className="mt-4 text-gray-800">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
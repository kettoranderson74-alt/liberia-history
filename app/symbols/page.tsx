import Image from "next/image";

const symbols = [
  {
    name: "Liberia Flag",
    image: "/images/symbols/liberia-flag.png",
    link: "/symbols/liberia-flag",
    description:
      "The national flag representing Liberia's independence, unity, and history."
  },
  {
    name: "National Coat of Arms",
    image: "/images/symbols/coat-of-arms.png",
    link: "/symbols/coat-of-arms",
    description:
      "The national emblem showing Liberia's values, history, and progress."
  },
  {
    name: "National Anthem",
    image: "/images/symbols/national-anthem.png",
    link: "/symbols/national-anthem",
    description:
      "Liberia's patriotic song expressing love and devotion to the nation."
  },
  {
    name: "National Tree",
    image: "/images/symbols/mahogany.png",
    link: "/symbols/national-tree",
    description:
      "The Mahogany tree represents Liberia's natural resources and forests."
  },
  {
    name: "National Bird",
    image: "/images/symbols/national-bird.png",
    link: "/symbols/national-bird",
    description:
      "The national bird represents Liberia's wildlife and natural heritage."
  },
  {
    name: "National Flower",
    image: "/images/symbols/national-flower.png",
    link: "/symbols/national-flower",
    description:
      "The national flower represents Liberia's beauty and biodiversity."
  }
];


export default function SymbolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia's National Symbols
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Discover the national symbols that represent Liberia's
          history, identity, culture, and independence.
        </p>

      </section>


      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {symbols.map((symbol) => (

            <a
              key={symbol.name}
              href={symbol.link}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >

              <Image
                src={symbol.image}
                alt={symbol.name}
                width={400}
                height={300}
                className="rounded-xl mx-auto"
              />

              <h2 className="text-2xl font-bold mt-5 text-green-700">
                {symbol.name}
              </h2>

              <p className="mt-3 text-gray-700">
                {symbol.description}
              </p>

              <p className="mt-5 text-green-700 font-bold">
                Learn More →
              </p>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}
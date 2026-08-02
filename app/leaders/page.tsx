import Image from "next/image";

const leaders = [
  {
    name: "Joseph Jenkins Roberts",
    years: "1848–1856, 1872–1876",
    image: "/images/leaders/joseph-jenkins-roberts.png",
    link: "/leaders/joseph-jenkins-roberts",
    description: "Liberia's first president and a key figure in the nation's founding."
  },
  {
    name: "Edward James Roye",
    years: "1870–1871",
    image: "/images/leaders/edward-roye.png",
    link: "/leaders/edward-roye",
    description: "Liberia's fifth president and one of the country's early leaders."
  },
  {
     name: "William V.S. Tubman",
    years: "1944–1971",
    image: "/images/leaders/william-tubman.png",
    link: "/leaders/william-vs-tubman",
    description: "Liberia's longest-serving president known for economic development."
  },
  {
    name: "William R. Tolbert Jr.",
    years: "1971–1980",
    image: "/images/leaders/william-tolbert.png",
    link: "/leaders/william-tolbert",
    description: "Liberia's president before the 1980 military coup."
  },
  {
    name: "Samuel K. Doe",
    years: "1980–1990",
    image: "/images/leaders/samuel-doe.png",
    link: "/leaders/samuel-doe",
    description: "Military leader who ruled Liberia during a major political transition."
  },
  {
    name: "Charles Ghankay Taylor",
    years: "1997–2003",
    image: "/images/leaders/charles-taylor.png",
    link: "/leaders/charles-taylor",
    description: "Liberia's president after the First Civil War."
  },
  {
    name: "Moses Zeh Blah",
    years: "2003",
    image: "/images/leaders/moses-blah.png",
    link: "/leaders/moses-blah",
    description: "Led Liberia during a short transitional period."
  },
  {
    name: "Gyude Bryant",
    years: "2003–2006",
    image: "/images/leaders/gyude-bryant.png",
    link: "/leaders/gyude-bryant",
    description: "Chairman of the National Transitional Government of Liberia."
  },
  {
    name: "Ellen Johnson Sirleaf",
    years: "2006–2018",
    image: "/images/leaders/ellen-johnson-sirleaf.png",
    link: "/leaders/ellen-johnson-sirleaf",
    description: "Africa's first elected female president."
  },
  {
    name: "George Manneh Weah",
    years: "2018–2024",
    image: "/images/leaders/george-weah.png",
    link: "/leaders/george-weah",
    description: "Football legend who became Liberia's president."
  },
  {
    name: "Joseph Nyuma Boakai",
    years: "2024–Present",
    image: "/images/leaders/joseph-boakai.png",
    link: "/leaders/joseph-boakai",
    description: "Liberia's current president with decades of public service."
  }
];


export default function LeadersPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia's Presidents & Leaders
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the lives, leadership, and legacies of the people
          who shaped Liberia's history.
        </p>

      </section>


      <section className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {leaders.map((leader) => (

            <a
              key={leader.name}
              href={leader.link}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >

              <Image
                src={leader.image}
                alt={leader.name}
                width={300}
                height={350}
                className="rounded-xl mx-auto"
              />

              <h2 className="text-2xl font-bold mt-5 text-green-700">
                {leader.name}
              </h2>

              <p className="font-semibold mt-2">
                {leader.years}
              </p>

              <p className="mt-3 text-gray-700">
                {leader.description}
              </p>

              <p className="mt-5 text-green-700 font-bold">
                View Profile →
              </p>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}
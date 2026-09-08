import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  const timeline = [
    {
      year: "Before the 1800s",
      title: "Indigenous Liberia",
      text: "Long before the creation of the Liberian Republic, the region was home to numerous African societies and communities with their own political systems, languages, cultures, trade networks, and traditions. Major communities included the Kpelle, Bassa, Kru, Grebo, Gio, Mano, Vai, Gola, Lorma, Kissi, Gbandi, and many others.",
    },
    {
      year: "15th–18th Centuries",
      title: "European Contact and Coastal Trade",
      text: "European traders and explorers established contact with communities along the West African coast. The region became associated with the name Grain Coast because of its trade in grains of paradise and other products. Coastal communities participated in wider regional and Atlantic trading networks.",
    },
    {
      year: "1816",
      title: "American Colonization Society Founded",
      text: "The American Colonization Society was established in the United States. It promoted the resettlement of free Black Americans and formerly enslaved people in Africa. This movement eventually led to the establishment of settlements on the West African coast that became Liberia.",
    },
    {
      year: "1822",
      title: "Settlement at Cape Mesurado",
      text: "In 1822, settlers associated with the American Colonization Society established a permanent settlement at Cape Mesurado. The settlement became the foundation of what developed into the Commonwealth of Liberia and later the Republic of Liberia.",
    },
    {
      year: "1839",
      title: "Commonwealth of Liberia",
      text: "Several settlements along the coast became increasingly organized under a common political structure. In 1839, the Commonwealth of Liberia adopted a constitution and strengthened its central administration, moving the settlements closer toward self-government.",
    },
    {
      year: "1847",
      title: "Liberia Declares Independence",
      text: "On July 26, 1847, Liberia declared independence and established itself as a sovereign republic. Joseph Jenkins Roberts became the country's first president. The Constitution created a government modeled in important ways on the political system of the United States.",
    },
    {
      year: "1848–1862",
      title: "The New Republic Gains Recognition",
      text: "Liberia began building diplomatic and commercial relationships with other countries. Britain recognized the new republic in 1848, while the United States formally recognized Liberia in 1862. Liberia worked to defend its sovereignty and expand its international relationships.",
    },
    {
      year: "Late 1800s",
      title: "Expansion and Nation Building",
      text: "During the late nineteenth century, Liberia expanded its administration beyond the coastal settlements. The government developed relationships, sometimes peaceful and sometimes conflictual, with numerous indigenous communities as it extended state authority into the interior.",
    },
    {
      year: "1878",
      title: "True Whig Party Era Begins",
      text: "The True Whig Party came to power in 1878 and eventually became the dominant political force in Liberia. Its influence continued for more than a century, shaping Liberia's political institutions and relationship between the settler elite and the country's indigenous majority.",
    },
    {
      year: "1926",
      title: "Firestone and the Rubber Industry",
      text: "The Firestone Tire and Rubber Company established a major rubber operation in Liberia in 1926. Rubber became one of Liberia's most important exports and transformed parts of the country's economy, labor system, transportation network, and international commercial relationships.",
    },
    {
      year: "1944–1971",
      title: "William V. S. Tubman Era",
      text: "William V. S. Tubman became president in 1944 and served until his death in 1971. His government promoted foreign investment, infrastructure development, and the Open Door Policy while also pursuing the Unification Policy, which sought greater political integration between indigenous Liberians and the Americo-Liberian establishment.",
    },
    {
      year: "1971–1980",
      title: "William R. Tolbert Era",
      text: "William R. Tolbert Jr. succeeded Tubman in 1971. His administration introduced political and economic reforms, but Liberia faced growing economic difficulties and social tensions. The 1979 rice protests became an important turning point in the country's political history.",
    },
    {
      year: "1980",
      title: "The April 12 Coup",
      text: "On April 12, 1980, Master Sergeant Samuel Kanyon Doe led a military coup that overthrew President William R. Tolbert Jr. The coup ended the political order that had dominated Liberia since independence and marked the beginning of a new period of military and authoritarian rule.",
    },
    {
      year: "1986",
      title: "The Second Republic",
      text: "A new constitution came into force in 1986, establishing Liberia's Second Republic. Samuel K. Doe remained head of state. Political tensions and ethnic divisions continued to affect the country during this period.",
    },
    {
      year: "1989",
      title: "First Liberian Civil War Begins",
      text: "In December 1989, Charles Taylor's rebellion against the Doe government developed into a major civil conflict. Fighting spread across Liberia, causing enormous disruption, displacement, and loss of life.",
    },
    {
      year: "1990",
      title: "Death of Samuel Doe",
      text: "Samuel K. Doe was captured and killed in 1990 as the civil war intensified. Regional peacekeeping efforts through ECOWAS also became increasingly important in attempts to restore stability to Liberia.",
    },
    {
      year: "1997",
      title: "Charles Taylor Elected President",
      text: "Following years of conflict and negotiations, Liberia held elections in 1997. Charles Taylor was elected president. Although the election brought a period of relative calm, armed conflict returned several years later.",
    },
    {
      year: "2000–2003",
      title: "Second Liberian Civil War",
      text: "A new rebellion developed against Taylor's government in the early 2000s. Fighting intensified and eventually reached Monrovia. International and regional pressure contributed to Taylor's departure from office in 2003.",
    },
    {
      year: "2003",
      title: "Peace Agreement and Transitional Government",
      text: "The 2003 peace process created a transitional political arrangement intended to move Liberia away from war and toward democratic elections. International peacekeepers also played a major role in maintaining security during the transition.",
    },
    {
      year: "2005–2006",
      title: "Ellen Johnson Sirleaf Elected",
      text: "Liberia held historic presidential elections in 2005. Ellen Johnson Sirleaf won the election and took office in January 2006, becoming Africa's first elected female head of state. Her administration focused on rebuilding institutions, infrastructure, and Liberia's international relationships.",
    },
    {
      year: "2014–2016",
      title: "The Ebola Crisis",
      text: "Liberia was one of the countries most seriously affected by the West African Ebola epidemic. The outbreak placed enormous pressure on Liberia's health system and economy, while communities, health workers, international organizations, and government agencies worked to control the disease.",
    },
    {
      year: "2018",
      title: "Peaceful Democratic Transfer of Power",
      text: "George Manneh Weah became president in January 2018 after winning the 2017 election. His inauguration represented an important peaceful transfer of presidential power and marked the first transition between two democratically elected presidents in Liberia in decades.",
    },
    {
      year: "2024",
      title: "Joseph Boakai Becomes President",
      text: "Joseph Nyuma Boakai was inaugurated as Liberia's 26th president on January 22, 2024, succeeding George Weah. His administration began with a focus on governance, economic development, infrastructure, and improving public services.",
    },
    {
      year: "Today",
      title: "Liberia's Continuing Story",
      text: "Liberia continues to build on its long history. Its story includes indigenous civilizations, migration, independence, political transformation, economic development, conflict, peacebuilding, democratic transitions, and cultural resilience. Understanding this history helps explain Liberia's identity and its place in Africa and the world.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          History of Liberia
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the people, events, struggles, achievements, and
          turning points that shaped Liberia from its earliest societies
          to the modern republic.
        </p>
      </section>


      {/* Cover Image */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <Image
          src="/images/liberia.jpg"
          alt="Historical view representing Liberia"
          width={900}
          height={450}
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>


      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Understanding Liberia's History
          </h2>

          <p className="mt-4 text-gray-800 leading-8">
            Liberia's history is much older than the founding of the
            modern republic. For centuries, the region was home to
            diverse African societies with their own languages,
            political institutions, cultures, economies, and traditions.
          </p>

          <p className="mt-4 text-gray-800 leading-8">
            Liberia's modern political history began in the nineteenth
            century with the settlement of free Black Americans and
            formerly enslaved people from the United States and the
            development of coastal settlements. These settlements
            eventually became the Commonwealth of Liberia and, in 1847,
            the independent Republic of Liberia.
          </p>

          <p className="mt-4 text-gray-800 leading-8">
            Since independence, Liberia has experienced periods of
            political stability, economic growth, political exclusion,
            military rule, civil war, peacebuilding, democratic
            transitions, and national reconstruction.
          </p>
        </div>
      </section>


      {/* Timeline */}
      <section className="max-w-5xl mx-auto py-8 px-6">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Liberia Historical Timeline
          </h2>
        </div>


        <div className="space-y-6">

          {timeline.map((event, index) => (
            <div
              key={`${event.year}-${index}`}
              className="bg-white rounded-xl shadow p-6 md:p-8 border-l-4 border-green-700"
            >

              <p className="text-green-700 font-bold text-lg">
                {event.year}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {event.title}
              </h3>

              <p className="mt-4 text-gray-800 leading-8">
                {event.text}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* Explore More */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-green-700 text-white rounded-2xl p-8 text-center shadow">

          <h2 className="text-3xl font-bold">
            Explore Liberia's History in Greater Detail
          </h2>

          <p className="mt-4 text-lg max-w-2xl mx-auto">
            The timeline gives you the major turning points. Explore
            individual historical topics and discover the people,
            places, events, and stories behind them.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/articles"
              className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Explore History Articles
            </Link>

            <Link
              href="/leaders"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Explore Liberia's Leaders
            </Link>

          </div>

        </div>

      </section>


      {/* Key Facts */}
      <section className="max-w-5xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-xl shadow p-6 md:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Key Historical Facts
          </h2>

          <div className="mt-6 grid md:grid-cols-2 gap-4">

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                1822
              </p>
              <p className="mt-2 text-gray-800">
                Permanent settlement established at Cape Mesurado.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                July 26, 1847
              </p>
              <p className="mt-2 text-gray-800">
                Liberia declared independence.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                1980
              </p>
              <p className="mt-2 text-gray-800">
                A military coup overthrew President William R. Tolbert Jr.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                1989–2003
              </p>
              <p className="mt-2 text-gray-800">
                Liberia experienced prolonged civil conflict.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                2006
              </p>
              <p className="mt-2 text-gray-800">
                Ellen Johnson Sirleaf became president.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                2018
              </p>
              <p className="mt-2 text-gray-800">
                George Weah took office after a peaceful democratic
                transfer of power.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                2024
              </p>
              <p className="mt-2 text-gray-800">
                Joseph Boakai became Liberia's 26th president.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-green-700">
                Today
              </p>
              <p className="mt-2 text-gray-800">
                Liberia continues to preserve its history while building
                its future.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
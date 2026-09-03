
import Image from "next/image";

export default function BomiPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Bomi County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, economy, natural
          resources, and important places of Bomi County, Liberia.
        </p>

      </section>


      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          <Image
            alt="Bomi County, Liberia"
            width={800}
            height={450}
            src="/images/counties/bomi.png"
            className="rounded-xl mx-auto"
          />


          {/* Quick Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">
            <li>📍 <strong>Capital:</strong> Tubmanburg</li>
            <li>🗺️ <strong>Region:</strong> Western Liberia</li>
            <li>👥 <strong>Population:</strong> 132,814 (2022 Census)</li>
            <li>🏛️ <strong>County status:</strong> One of Liberia's 15 counties</li>
            <li>⛏️ <strong>Known for:</strong> Iron ore mining and mineral resources</li>
            <li>🌿 <strong>Landscape:</strong> Forests, farmland, hills, and mineral-rich areas</li>
          </ul>


          {/* Geography */}
          <h2 className="text-3xl font-bold mt-10">
            Geography and Location
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi County is located in western Liberia. It lies to the
            northwest of Montserrado County and is part of Liberia's
            western region. Its landscape includes rolling hills,
            forests, farmland, streams, and areas associated with its
            historic mining industry.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's location has also made it important to
            transportation and trade between communities in western
            Liberia and the national capital, Monrovia.
          </p>


          {/* History */}
          <h2 className="text-3xl font-bold mt-10">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi has an important place in the modern economic history
            of Liberia. Before the development of large-scale mining,
            communities in the area depended heavily on agriculture,
            local trade, and traditional livelihoods.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county later became internationally known for its
            iron ore deposits. The discovery and development of these
            deposits transformed the area and made Bomi one of the
            important centers of Liberia's early mining economy.
          </p>


          {/* Mining */}
          <h2 className="text-3xl font-bold mt-10">
            Iron Ore Mining and Economic History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Iron ore is one of the most important parts of Bomi's
            historical identity. Mining around the Bomi Hills became
            a major economic activity and connected the county to
            Liberia's wider industrial development.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The mining industry created employment, supported local
            businesses, and contributed to government revenue. It also
            brought roads, transportation networks, and other
            infrastructure associated with the movement of minerals
            and workers.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Although the large-scale mining industry experienced
            major changes and interruptions over time, its influence
            remains an important part of Bomi's history and identity.
          </p>


          {/* Tubmanburg */}
          <h2 className="text-3xl font-bold mt-10">
            Tubmanburg
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Tubmanburg is the capital and principal urban center of
            Bomi County. The city developed into an important center
            for administration, commerce, transportation, and
            communities connected to the county's mining history.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Today, Tubmanburg continues to serve as an important
            administrative and commercial center for the people of
            Bomi.
          </p>


          {/* People and Culture */}
          <h2 className="text-3xl font-bold mt-10">
            People, Ethnic Groups, and Languages
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi County is home to indigenous Liberian communities
            with diverse traditions and cultural practices. The
            county's population reflects the wider cultural diversity
            of Liberia's western region.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            English is Liberia's official language, while Liberian
            English and indigenous languages are widely used in
            everyday communication. Local languages and traditions
            remain an important part of community identity.
          </p>


          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-10">
            Agriculture and Economy
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Agriculture remains important to the livelihoods of many
            people in Bomi County. Farming provides food for families
            and income for rural communities.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Important agricultural activities include the cultivation
            of food crops and other crops suited to Liberia's tropical
            climate. Smallholder farming and local markets continue
            to play an important role in the county's economy.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            In addition to agriculture, trade, transportation,
            small businesses, services, and natural-resource
            activities contribute to the local economy.
          </p>


          {/* Natural Resources */}
          <h2 className="text-3xl font-bold mt-10">
            Natural Resources
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi is particularly associated with mineral resources,
            especially iron ore. These resources played a major role
            in the county's economic history.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county also contains forests, agricultural land,
            water resources, and other natural resources that support
            local communities and livelihoods.
          </p>


          {/* Culture */}
          <h2 className="text-3xl font-bold mt-10">
            Culture and Traditions
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi's culture is shaped by indigenous traditions,
            community relationships, music, storytelling, food,
            celebrations, and traditional knowledge passed from one
            generation to another.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Like many parts of Liberia, traditional ceremonies and
            community gatherings provide important opportunities for
            people to preserve cultural identity and strengthen
            relationships between generations.
          </p>


          {/* Important Places */}
          <h2 className="text-3xl font-bold mt-10">
            Important Places
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">
            <li>🏙️ Tubmanburg City</li>
            <li>⛏️ Bomi Hills and historic mining areas</li>
            <li>🌿 Forest and agricultural landscapes</li>
            <li>🏘️ Rural communities throughout the county</li>
          </ul>


          {/* Civil War */}
          <h2 className="text-3xl font-bold mt-10">
            Bomi During Liberia's Civil Wars
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi, like many Liberian counties, was affected by the
            country's civil wars. Communities experienced displacement,
            disruption of economic activities, damage to infrastructure,
            and interruptions to education and public services.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The conflicts also affected the county's mining economy.
            The decline of large-scale economic activity during the
            wars contributed to difficult conditions for communities
            that had previously depended on mining and related
            businesses.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Following the end of the civil wars, reconstruction and
            development efforts focused on restoring infrastructure,
            public services, livelihoods, and economic opportunities.
          </p>


          {/* Population */}
          <h2 className="text-3xl font-bold mt-10">
            Population
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            According to Liberia's 2022 National Population and
            Housing Census, Bomi County had a population of
            <strong> 132,814 people</strong>. The census is Liberia's
            official source for population and demographic statistics.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Population information is important for understanding
            the county's needs in areas such as education, healthcare,
            roads, housing, employment, and other public services.
          </p>


          {/* Development */}
          <h2 className="text-3xl font-bold mt-10">
            Development and Present-Day Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi remains important to Liberia because of its location,
            agricultural communities, natural resources, historical
            mining areas, and proximity to Montserrado.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's future development depends on strengthening
            agriculture, improving infrastructure, expanding access
            to education and healthcare, supporting local businesses,
            and creating sustainable economic opportunities.
          </p>


          {/* Historical Importance */}
          <h2 className="text-3xl font-bold mt-10">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Bomi occupies a special place in Liberian history because
            of the role its iron ore resources played in the country's
            economic development. The Bomi Hills became a symbol of
            Liberia's early industrial and mining ambitions.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's history therefore connects natural resources,
            industrial development, local communities, transportation,
            employment, and Liberia's wider economic history.
          </p>


          {/* Key Facts */}
          <h2 className="text-3xl font-bold mt-10">
            Key Facts About Bomi County
          </h2>

          <ul className="mt-4 space-y-3 text-lg text-gray-800">
            <li>🇱🇷 Bomi is one of Liberia's 15 counties.</li>
            <li>🏙️ Tubmanburg is the county capital.</li>
            <li>⛏️ Bomi is historically famous for iron ore mining.</li>
            <li>🏔️ The Bomi Hills are closely connected to the county's mining history.</li>
            <li>🌾 Agriculture remains an important source of livelihood.</li>
            <li>🌿 Forests and natural resources are important to rural communities.</li>
            <li>👥 The 2022 census recorded 132,814 people in Bomi County.</li>
            <li>📜 Bomi's mining history is an important part of Liberia's economic history.</li>
          </ul>

        </div>

      </section>

    </main>
  );
}


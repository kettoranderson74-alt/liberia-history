import Image from "next/image";

export default function LofaPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Lofa County
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the history, people, culture, agriculture, mountains,
          and traditions of Lofa County, Liberia.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6">

        <div className="bg-white rounded-xl shadow p-8">

          {/* County Image */}
          <Image
            src="/images/counties/lofa.png"
            alt="Lofa County"
            width={800}
            height={450}
            className="rounded-xl mx-auto"
          />

          {/* Quick Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Quick Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>📍 Capital: Voinjama</li>
            <li>🗺 Region: Northern Liberia</li>
            <li>📅 Established: 1964</li>
            <li>👥 2022 Population: 367,376</li>
            <li>🌾 Known for: Agriculture and food production</li>
            <li>⛰ Major landmark: Mount Wuteve</li>
            <li>🌍 Borders: Guinea and Sierra Leone</li>
            <li>🏘 Major towns: Voinjama, Foya, Kolahun, and Zorzor</li>
            <li>🇱🇷 County Status: One of Liberia's 15 counties</li>
          </ul>

          {/* Overview */}
          <h2 className="text-3xl font-bold mt-8">
            Overview
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa County is located in northern Liberia and extends toward
            the country's borders with Guinea and Sierra Leone. It is one
            of Liberia's major agricultural regions and has historically
            played an important role in supplying food to communities
            throughout the country.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county combines fertile agricultural areas with mountains,
            forests, rivers, and extensive rural settlements. Its location
            at Liberia's northern frontier has also made it an important
            center of regional trade and cultural exchange.
          </p>

          {/* Geography */}
          <h2 className="text-3xl font-bold mt-8">
            Geography and Location
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa is situated in the northern part of Liberia. It borders
            Guinea to the north and northeast and Sierra Leone to the
            northwest. Within Liberia, it is connected to Gbarpolu and
            Bong counties toward the south and east.
          </p>

          <p className="mt-4 text-lg text-black-800">
            The county contains a mixture of mountains, valleys, forests,
            rivers, farmland, and savanna-like areas. These different
            landscapes have influenced settlement patterns, farming,
            transportation, and local livelihoods.
          </p>

          {/* History */}
          <h2 className="text-3xl font-bold mt-8">
            History
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Before becoming a county, the area was known as the Western
            Province. The province included several districts and covered
            a much larger territory than present-day Lofa County.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Lofa County was established by an act of the Liberian Legislature
            in 1964. The creation of Lofa, along with Bong, Grand Gedeh, and
            Nimba, was part of the administrative changes introduced during
            President William V. S. Tubman's administration.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Lofa was originally much larger than it is today. Parts of its
            former territory were later reorganized, including areas that
            eventually became part of Gbarpolu County.
          </p>

          {/* Indigenous History */}
          <h2 className="text-3xl font-bold mt-8">
            Indigenous History and Communities
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The history of Lofa stretches back centuries before the creation
            of the Liberian republic. Indigenous communities developed
            villages, farming systems, trading networks, political structures,
            and cultural institutions throughout the region.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's position between Liberia, Guinea, and Sierra Leone
            encouraged long-standing movement of people and goods across
            the region. Markets and trading routes connected communities
            across modern national borders.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Traditional leaders, elders, family networks, and community
            institutions have historically played important roles in
            maintaining social organization and preserving local knowledge.
          </p>

          {/* Ethnic Groups */}
          <h2 className="text-3xl font-bold mt-8">
            People and Ethnic Groups
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa is one of Liberia's most culturally diverse counties.
            Major communities historically associated with the county include
            the Lorma, Gbandi, Kissi, Mende, Mandingo, and Kpelle peoples.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Each community has its own traditions, languages, histories,
            social institutions, and cultural practices. The interaction
            between these communities has helped create the distinctive
            cultural identity of Lofa County.
          </p>

          {/* Languages */}
          <h2 className="text-3xl font-bold mt-8">
            Languages and Cultural Diversity
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Indigenous languages spoken in Lofa include Lorma, Gbandi,
            Kissi, Mende, Mandingo, and Kpelle varieties. Liberian English
            is also widely used for communication between different
            communities and in public life.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's proximity to Guinea and Sierra Leone has contributed
            to extensive linguistic and cultural exchange. Border communities
            have historically maintained family, commercial, and social
            connections across the region.
          </p>

          {/* Voinjama */}
          <h2 className="text-3xl font-bold mt-8">
            Voinjama
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Voinjama is the capital of Lofa County and one of northern
            Liberia's major urban centers. It serves as the county's
            administrative, commercial, educational, and transportation
            center.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Markets in and around Voinjama connect farmers from surrounding
            communities with consumers and traders. The city also serves as
            an important gateway between rural Lofa and other parts of
            Liberia.
          </p>

          {/* Foya */}
          <h2 className="text-3xl font-bold mt-8">
            Foya
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Foya is one of Lofa's important towns and is located close to
            Liberia's borders with Guinea and Sierra Leone.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Its location gives it particular importance for cross-border
            commerce and cultural interaction. Foya and surrounding
            communities have historically participated in regional trading
            networks that connect Liberia with neighboring countries.
          </p>

          {/* Kolahun */}
          <h2 className="text-3xl font-bold mt-8">
            Kolahun
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Kolahun is another important population center in Lofa. It has
            traditionally been associated with agriculture, local commerce,
            and surrounding rural communities.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The town was also one of the districts that formed part of the
            former Western Province before Lofa became a county in 1964.
          </p>

          {/* Mount Wuteve */}
          <h2 className="text-3xl font-bold mt-8">
            Mount Wuteve
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Mount Wuteve is located in Lofa County and is recognized as the
            highest mountain in Liberia. Its elevation and surrounding
            landscape make it one of the country's most significant natural
            landmarks.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The mountain forms part of the wider mountainous landscape of
            northern Liberia and contributes to the county's distinctive
            geography.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The surrounding forests and highland environment also have
            ecological importance, providing habitats for plants and
            wildlife.
          </p>

          {/* Wologizi */}
          <h2 className="text-3xl font-bold mt-8">
            Wologizi Mountain Range
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            The Wologizi mountain landscape is another major geographical
            feature associated with northern Liberia. The area contains
            forests, steep terrain, rivers, and important wildlife habitats.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Mountain and forest areas around Lofa are important for
            biodiversity and water resources. They also have potential for
            carefully managed nature-based tourism.
          </p>

          {/* Agriculture */}
          <h2 className="text-3xl font-bold mt-8">
            Agriculture and the "Breadbasket of Liberia"
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Agriculture has historically been at the center of Lofa's
            economy. The county has long been described as a breadbasket
            of Liberia because of its significant contribution to food
            production.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Rice is particularly important because it is Liberia's main
            staple food. Farmers also produce cassava, plantains, bananas,
            vegetables, and other food crops.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Lofa has also been associated with cash crops including coffee
            and cocoa. These crops provide opportunities for farmers to
            participate in local and national markets.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Agriculture is especially important to rural households, where
            farming provides food, employment, and household income.
          </p>

          {/* Economy */}
          <h2 className="text-3xl font-bold mt-8">
            Economy and Livelihoods
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Farming, petty trading, livestock activities, forestry, and
            small-scale businesses form important parts of the county's
            economy.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Local markets provide important links between farmers and
            consumers. Border trade also contributes to economic activity,
            particularly in communities close to Guinea and Sierra Leone.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Improving roads and transportation is important because many
            agricultural communities depend on reliable connections to
            markets.
          </p>

          {/* Natural Resources */}
          <h2 className="text-3xl font-bold mt-8">
            Natural Resources
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa's natural resources include forests, fertile agricultural
            land, rivers, wildlife, and mineral resources.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's forests provide timber and other forest products
            while also supporting biodiversity and regulating water systems.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Gold and other mineral resources have also been associated with
            parts of Lofa. Responsible management is necessary to ensure
            that natural-resource development does not permanently damage
            farmland, rivers, forests, and wildlife habitats.
          </p>

          {/* Culture */}
          <h2 className="text-3xl font-bold mt-8">
            Culture and Traditions
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa has a strong tradition of music, dance, storytelling,
            ceremonies, traditional clothing, food preparation, farming
            customs, and community gatherings.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Oral history is especially important. Elders and community
            leaders have traditionally passed knowledge about ancestry,
            migration, important events, traditional laws, and community
            values from one generation to another.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Traditional institutions such as the Poro and Sande societies
            have historically played important roles in social organization,
            education, and cultural life in parts of the county.
          </p>

          {/* Religion */}
          <h2 className="text-3xl font-bold mt-8">
            Religion and Community Life
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa contains Christian, Muslim, and traditional religious
            communities. Religious institutions have contributed to
            education, healthcare, community organization, and social life
            throughout the county.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The county's religious diversity reflects its long history of
            interaction between indigenous traditions, Islam, and Christianity.
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mt-8">
            Border and Regional Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa's borders with Guinea and Sierra Leone have made the county
            strategically important throughout its history.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Traders, farmers, families, and other travelers have crossed the
            region for generations. These connections have encouraged
            cultural exchange and commerce while also making Lofa sensitive
            to political instability and conflicts in neighboring countries.
          </p>

          {/* Civil Wars */}
          <h2 className="text-3xl font-bold mt-8">
            Lofa During the Civil Wars
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa was heavily affected by Liberia's civil wars, particularly
            because of its northern border position and proximity to Sierra
            Leone and Guinea.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Communities experienced fighting, displacement, destruction of
            property, disruption of agriculture, and interruption of schools,
            healthcare, trade, and government services.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Many residents were displaced internally or became refugees in
            neighboring countries during different periods of the conflict.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            After the wars, rebuilding agriculture, roads, schools, health
            facilities, markets, and local institutions became important
            priorities for the county.
          </p>

          {/* Population */}
          <h2 className="text-3xl font-bold mt-8">
            Population
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            According to Liberia's 2022 National Population and Housing
            Census, Lofa County had a population of
            <strong> 367,376 people</strong>.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            The population is distributed among Voinjama and other urban
            centers as well as numerous rural farming communities.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Population patterns are influenced by agriculture, access to
            roads and markets, border commerce, and the movement of people
            between rural communities and larger towns.
          </p>

          {/* Education */}
          <h2 className="text-3xl font-bold mt-8">
            Education and Development
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Education is an important part of Lofa's development. Schools
            operate in Voinjama, Foya, Kolahun, Zorzor, and other communities
            throughout the county.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Like many rural parts of Liberia, some communities have faced
            challenges involving school infrastructure, transportation,
            teacher availability, learning materials, and access to higher
            education.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Expanding quality education is important for preparing young
            people to participate in agriculture, business, government,
            technology, healthcare, and other sectors.
          </p>

          {/* Important Places */}
          <h2 className="text-3xl font-bold mt-8">
            Important Places
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🏙 Voinjama – County capital and major urban center</li>
            <li>🏘 Foya – Important border and commercial town</li>
            <li>🏘 Kolahun – Historic district and agricultural center</li>
            <li>🏙 Zorzor – Important town in southern Lofa</li>
            <li>⛰ Mount Wuteve – Liberia's highest mountain</li>
            <li>⛰ Wologizi mountains – Important mountain and forest landscape</li>
            <li>🌳 Forest areas – Important biodiversity and natural resources</li>
            <li>🌾 Agricultural communities – Major food-producing areas</li>
            <li>🌍 Guinea and Sierra Leone border areas – Regional trade and cultural connections</li>
          </ul>

          {/* Present Day */}
          <h2 className="text-3xl font-bold mt-8">
            Development and Present-Day Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa remains one of Liberia's most important agricultural
            counties. Its fertile land and farming communities give it
            significant potential to contribute to national food security.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Improving agricultural roads, storage facilities, processing,
            access to markets, irrigation, farming technology, and financial
            services could strengthen the county's agricultural economy.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Tourism also offers potential through Mount Wuteve, the Wologizi
            mountain landscape, forests, cultural heritage, and traditional
            communities.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Better transportation, electricity, healthcare, education,
            communications, and market infrastructure remain important for
            connecting rural communities with national opportunities.
          </p>

          {/* Historical Importance */}
          <h2 className="text-3xl font-bold mt-8">
            Historical Importance
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Lofa is historically important because it brings together
            several major themes in Liberian history: indigenous political
            traditions, regional trade, agriculture, migration, cultural
            diversity, border relations, and the country's civil-war history.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Its agricultural contribution has given Lofa a special place in
            Liberia's economic history. For generations, farmers in the
            county have helped supply rice and other food crops to markets
            across Liberia.
          </p>

          <p className="mt-4 text-lg text-gray-800">
            Its northern location also means that Lofa has historically been
            connected to events and movements across Guinea and Sierra Leone,
            making it an important part of Liberia's regional history.
          </p>

          {/* Key Facts */}
          <h2 className="text-3xl font-bold mt-8">
            Key Facts
          </h2>

          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            <li>🇱🇷 Lofa is one of Liberia's 15 counties.</li>
            <li>📅 It was established in 1964.</li>
            <li>🏙 Voinjama is the county capital.</li>
            <li>👥 The 2022 census recorded 367,376 residents.</li>
            <li>🌾 Lofa has historically been known as a major agricultural and food-producing region.</li>
            <li>⛰ Mount Wuteve, Liberia's highest mountain, is located in Lofa.</li>
            <li>🌍 The county borders Guinea and Sierra Leone.</li>
            <li>👥 Major ethnic communities include Lorma, Gbandi, Kissi, Mende, Mandingo, and Kpelle.</li>
            <li>🌾 Rice, cassava, coffee, cocoa, plantains, and vegetables are important agricultural products.</li>
            <li>🏘 Voinjama, Foya, Kolahun, and Zorzor are important population centers.</li>
            <li>🌳 Lofa contains important forest and biodiversity areas.</li>
            <li>🕊 The county was heavily affected by Liberia's civil wars.</li>
          </ul>

        </div>

      </section>

    </main>
  );
}
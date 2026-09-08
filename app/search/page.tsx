"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type SearchResult = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
};

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function loadArticles() {
      const { data } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (data) {
        setArticles(data);
      }
    }

    loadArticles();
  }, []);

  // Creates the same ID format used by the article page.
  function createHeadingId(text: string) {
    return text
      .replace(/<[^>]*>/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  function getSectionId(content: string, searchTerm: string) {
    if (!searchTerm.trim()) {
      return "";
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const headings = Array.from(
      doc.querySelectorAll("h2, h3")
    );

    const target = searchTerm.toLowerCase().trim();

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];

      const headingText =
        heading.textContent?.toLowerCase() || "";

      if (headingText.includes(target)) {
        return createHeadingId(
          heading.textContent?.trim() || ""
        );
      }

      let current = heading.nextElementSibling;
      let sectionText = "";

      while (current) {
        if (
          current.tagName === "H2" ||
          current.tagName === "H3"
        ) {
          break;
        }

        sectionText +=
          " " + (current.textContent || "");

        current = current.nextElementSibling;
      }

      if (
        sectionText
          .toLowerCase()
          .includes(target)
      ) {
        return createHeadingId(
          heading.textContent?.trim() || ""
        );
      }
    }

    return "";
  }

  const target = search
    .toLowerCase()
    .trim();

  /*
   * HISTORY TIMELINE
   */
  const historyTimeline = [
    {
      year: "Before the 1800s",
      title: "Indigenous Liberia",
      text: "Long before the creation of the Liberian Republic, the region was home to numerous African societies and communities with their own political systems, languages, cultures, trade networks, and traditions. Major communities included the Kpelle, Bassa, Kru, Grebo, Gio, Mano, Vai, Gola, Lorma, Kissi, Gbandi, and many others.",
    },
    {
      year: "15th–18th Centuries",
      title: "European Contact and Coastal Trade",
      text: "European traders and explorers established contact with communities along the West African coast. The region became associated with the name Grain Coast because of its trade in grains of paradise and other products.",
    },
    {
      year: "1816",
      title: "American Colonization Society Founded",
      text: "The American Colonization Society was established in the United States. It promoted the resettlement of free Black Americans and formerly enslaved people in Africa.",
    },
    {
      year: "1822",
      title: "Settlement at Cape Mesurado",
      text: "In 1822, settlers associated with the American Colonization Society established a permanent settlement at Cape Mesurado.",
    },
    {
      year: "1839",
      title: "Commonwealth of Liberia",
      text: "Several settlements along the coast became increasingly organized under a common political structure. In 1839, the Commonwealth of Liberia adopted a constitution.",
    },
    {
      year: "1847",
      title: "Liberia Declares Independence",
      text: "On July 26, 1847, Liberia declared independence and established itself as a sovereign republic. Joseph Jenkins Roberts became the country's first president.",
    },
    {
      year: "1848–1862",
      title: "The New Republic Gains Recognition",
      text: "Liberia began building diplomatic and commercial relationships with other countries. Britain recognized the new republic in 1848, while the United States formally recognized Liberia in 1862.",
    },
    {
      year: "Late 1800s",
      title: "Expansion and Nation Building",
      text: "During the late nineteenth century, Liberia expanded its administration beyond the coastal settlements.",
    },
    {
      year: "1878",
      title: "True Whig Party Era Begins",
      text: "The True Whig Party came to power in 1878 and eventually became the dominant political force in Liberia.",
    },
    {
      year: "1926",
      title: "Firestone and the Rubber Industry",
      text: "The Firestone Tire and Rubber Company established a major rubber operation in Liberia in 1926. Rubber became one of Liberia's most important exports.",
    },
    {
      year: "1944–1971",
      title: "William V. S. Tubman Era",
      text: "William V. S. Tubman became president in 1944 and served until his death in 1971.",
    },
    {
      year: "1971–1980",
      title: "William R. Tolbert Era",
      text: "William R. Tolbert Jr. succeeded Tubman in 1971. His administration introduced political and economic reforms, but Liberia faced growing economic difficulties and social tensions.",
    },
    {
      year: "1980",
      title: "The April 12 Coup",
      text: "On April 12, 1980, Master Sergeant Samuel Kanyon Doe led a military coup that overthrew President William R. Tolbert Jr.",
    },
    {
      year: "1986",
      title: "The Second Republic",
      text: "A new constitution came into force in 1986, establishing Liberia's Second Republic. Samuel K. Doe remained head of state.",
    },
    {
      year: "1989",
      title: "First Liberian Civil War Begins",
      text: "In December 1989, Charles Taylor's rebellion against the Doe government developed into a major civil conflict.",
    },
    {
      year: "1990",
      title: "Death of Samuel Doe",
      text: "Samuel K. Doe was captured and killed in 1990 as the civil war intensified.",
    },
    {
      year: "1997",
      title: "Charles Taylor Elected President",
      text: "Following years of conflict and negotiations, Liberia held elections in 1997. Charles Taylor was elected president.",
    },
    {
      year: "2000–2003",
      title: "Second Liberian Civil War",
      text: "A new rebellion developed against Taylor's government in the early 2000s. Fighting intensified and eventually reached Monrovia.",
    },
    {
      year: "2003",
      title: "Peace Agreement and Transitional Government",
      text: "The 2003 peace process created a transitional political arrangement intended to move Liberia away from war and toward democratic elections.",
    },
    {
      year: "2005–2006",
      title: "Ellen Johnson Sirleaf Elected",
      text: "Liberia held historic presidential elections in 2005. Ellen Johnson Sirleaf won the election and took office in January 2006.",
    },
    {
      year: "2014–2016",
      title: "The Ebola Crisis",
      text: "Liberia was one of the countries most seriously affected by the West African Ebola epidemic.",
    },
    {
      year: "2018",
      title: "Peaceful Democratic Transfer of Power",
      text: "George Manneh Weah became president in January 2018 after winning the 2017 election.",
    },
    {
      year: "2024",
      title: "Joseph Boakai Becomes President",
      text: "Joseph Nyuma Boakai was inaugurated as Liberia's 26th president on January 22, 2024.",
    },
    {
      year: "Today",
      title: "Liberia's Continuing Story",
      text: "Liberia continues to build on its long history of indigenous societies, independence, political transformation, conflict, peacebuilding, democratic transitions, and cultural resilience.",
    },
  ];

  /*
   * LEADERS
   */
  const leaders = [
    {
      name: "Joseph Jenkins Roberts",
      title: "First President of Liberia",
      description:
        "Joseph Jenkins Roberts was Liberia's first president and an important figure in the country's independence and early diplomatic history.",
      slug: "joseph-jenkins-roberts",
    },
    {
      name: "Edward James Roye",
      title: "President of Liberia",
      description:
        "Edward James Roye served as Liberia's fourth president during a period of major political change.",
      slug: "edward-james-roye",
    },
    {
      name: "William V. S. Tubman",
      title: "President of Liberia",
      description:
        "William V. S. Tubman served as president from 1944 until 1971 and promoted foreign investment and infrastructure development.",
      slug: "william-v-s-tubman",
    },
    {
      name: "William R. Tolbert Jr.",
      title: "President of Liberia",
      description:
        "William R. Tolbert Jr. served as president from 1971 until 1980.",
      slug: "william-r-tolbert-jr",
    },
    {
      name: "Samuel K. Doe",
      title: "Military Leader and President",
      description:
        "Samuel K. Doe came to power following the 1980 military coup and later became president of Liberia.",
      slug: "samuel-k-doe",
    },
    {
      name: "Charles Ghankay Taylor",
      title: "President of Liberia",
      description:
        "Charles Taylor became president in 1997 after years of civil conflict.",
      slug: "charles-ghankay-taylor",
    },
    {
      name: "Moses Zeh Blah",
      title: "President of Liberia",
      description:
        "Moses Zeh Blah served as Liberia's transitional president in 2003–2004.",
      slug: "moses-zeh-blah",
    },
    {
      name: "Gyude Bryant",
      title: "Chairman of the Transitional Government",
      description:
        "Gyude Bryant led Liberia's transitional government during the country's post-war transition.",
      slug: "gyude-bryant",
    },
    {
      name: "Ellen Johnson Sirleaf",
      title: "President of Liberia",
      description:
        "Ellen Johnson Sirleaf became Liberia's president in 2006 and was Africa's first elected female head of state.",
      slug: "ellen-johnson-sirleaf",
    },
    {
      name: "George Manneh Weah",
      title: "President of Liberia",
      description:
        "George Manneh Weah served as president from 2018 to 2024.",
      slug: "george-manneh-weah",
    },
    {
      name: "Joseph Nyuma Boakai",
      title: "President of Liberia",
      description:
        "Joseph Nyuma Boakai became Liberia's 26th president in January 2024.",
      slug: "joseph-nyuma-boakai",
    },
  ];

  /*
   * NATIONAL SYMBOLS
   */
  const symbols = [
    {
      name: "Liberia Flag",
      description:
        "The national flag representing Liberia's independence, unity, and history.",
      link: "/symbols",
    },
    {
      name: "National Coat of Arms",
      description:
        "The national emblem showing Liberia's values, history, and progress.",
      link: "/symbols",
    },
    {
      name: "National Anthem",
      description:
        "Liberia's patriotic song expressing love and devotion to the nation.",
      link: "/symbols",
    },
    {
      name: "National Tree",
      description:
        "The Mahogany tree represents Liberia's natural resources and forests.",
      link: "/symbols",
    },
    {
      name: "National Bird",
      description:
        "The national bird represents Liberia's wildlife and natural heritage.",
      link: "/symbols",
    },
    {
      name: "National Flower",
      description:
        "The national flower represents Liberia's beauty and biodiversity.",
      link: "/symbols",
    },
  ];

  /*
   * CULTURE
   */
  const cultureSections = [
    {
      title: "Communities & Ethnic Groups",
      text: "Liberia is home to many Indigenous ethnic communities, including the Kpelle, Bassa, Gio, Mano, Kru, Grebo, Vai, Gola, Lorma, Kissi, Gbandi, Mende, Krahn, Dei, Belle, Mandingo, and others.",
    },
    {
      title: "Languages",
      text: "English is Liberia's official language and is widely used in government, education, media, and formal communication. Numerous Indigenous languages are also spoken throughout the country.",
    },
    {
      title: "Food & Cuisine",
      text: "Liberian cuisine includes rice, cassava, plantains, sweet potatoes, fufu, dumboy, palm butter, pepper soup, and a variety of sauces prepared with vegetables, meat, or fish.",
    },
    {
      title: "Music, Dance & Performance",
      text: "Music and dance are important forms of cultural expression in Liberia and may accompany ceremonies, celebrations, storytelling, and community gatherings.",
    },
    {
      title: "Storytelling & Oral Tradition",
      text: "Proverbs, folktales, songs, historical accounts, and traditional stories have helped communities preserve knowledge across generations.",
    },
    {
      title: "Traditional Clothing & Textiles",
      text: "Clothing and textiles can reflect community identity, ceremonies, celebrations, religious occasions, and personal expression.",
    },
    {
      title: "Traditional Institutions",
      text: "Traditional institutions, elders, chiefs, and community authorities have historically played important roles in organizing community life.",
    },
    {
      title: "Family, Marriage & Community Life",
      text: "Family and community relationships are central to social life in many Liberian communities.",
    },
    {
      title: "Religion & Spiritual Life",
      text: "Christianity and Islam are widely practiced in Liberia, while traditional beliefs and Indigenous spiritual practices have also influenced cultural traditions.",
    },
    {
      title: "Festivals & Celebrations",
      text: "Liberians celebrate national holidays, religious occasions, community festivals, cultural events, weddings, and family ceremonies.",
    },
    {
      title: "Arts, Crafts & Creativity",
      text: "Liberian communities have long practiced weaving, carving, basketry, pottery, textile work, jewelry, masks, musical instruments, and other crafts.",
    },
    {
      title: "Agriculture & Cultural Life",
      text: "Agriculture is closely connected to Liberian culture. Rice, cassava, plantains, vegetables, and palm products are important to food systems and rural livelihoods.",
    },
    {
      title: "Cultural & Historical Heritage",
      text: "Liberia's heritage includes historic towns, traditional settlements, sacred places, old buildings, monuments, landscapes, and cultural sites.",
    },
    {
      title: "Culture & Liberian Identity",
      text: "Liberian national identity has developed through the interaction of many communities and historical experiences.",
    },
    {
      title: "Preserving Liberia's Heritage",
      text: "Cultural heritage can be preserved through families, schools, museums, archives, community organizations, cultural events, research, photography, and digital platforms.",
    },
    {
      title: "Modern Liberian Culture",
      text: "Liberian culture continues to evolve through the work of young people, musicians, artists, writers, filmmakers, entrepreneurs, athletes, and other creators.",
    },
  ];

  /*
   * ARTICLE RESULTS
   */
  const articleResults: SearchResult[] = target
    ? articles
        .filter((article) => {
          const title =
            article.title?.toLowerCase() || "";

          const content =
            article.content?.toLowerCase() || "";

          return (
            title.includes(target) ||
            content.includes(target)
          );
        })
        .map((article) => {
          const sectionId = getSectionId(
            article.content || "",
            search
          );

          return {
            id: `article-${article.id}`,
            title: article.title,
            description:
              article.content
                ?.replace(/<[^>]+>/g, "")
                .trim() || "",
            category: article.category || "History Article",
            link: sectionId
              ? `/articles/${article.slug}#${sectionId}`
              : `/articles/${article.slug}`,
          };
        })
    : [];

  /*
   * HISTORY RESULTS
   */
  const historyResults: SearchResult[] = target
    ? historyTimeline
        .filter((event) => {
          const text =
            `${event.year} ${event.title} ${event.text}`
              .toLowerCase();

          return text.includes(target);
        })
        .map((event, index) => ({
          id: `history-${index}`,
          title: `${event.year} — ${event.title}`,
          description: event.text,
          category: "History Timeline",
          link: "/history",
        }))
    : [];

  /*
   * LEADER RESULTS
   */
  const leaderResults: SearchResult[] = target
    ? leaders
        .filter((leader) => {
          const text =
            `${leader.name} ${leader.title} ${leader.description}`
              .toLowerCase();

          return text.includes(target);
        })
        .map((leader) => ({
          id: `leader-${leader.slug}`,
          title: leader.name,
          description: leader.description,
          category: leader.title,
          link: `/leaders/${leader.slug}`,
        }))
    : [];

  /*
   * SYMBOL RESULTS
   */
  const symbolResults: SearchResult[] = target
    ? symbols
        .filter((symbol) => {
          const text =
            `${symbol.name} ${symbol.description}`
              .toLowerCase();

          return text.includes(target);
        })
        .map((symbol) => ({
          id: `symbol-${symbol.name}`,
          title: symbol.name,
          description: symbol.description,
          category: "National Symbol",
          link: symbol.link,
        }))
    : [];

  /*
   * CULTURE RESULTS
   */
  const cultureResults: SearchResult[] = target
    ? cultureSections
        .filter((section) => {
          const text =
            `${section.title} ${section.text}`
              .toLowerCase();

          return text.includes(target);
        })
        .map((section, index) => ({
          id: `culture-${index}`,
          title: section.title,
          description: section.text,
          category: "Liberian Culture",
          link: "/culture",
        }))
    : [];

  const results: SearchResult[] = [
    ...articleResults,
    ...historyResults,
    ...leaderResults,
    ...symbolResults,
    ...cultureResults,
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Search Liberia History 🇱🇷
        </h1>

        <p className="mt-4 text-lg">
          Find history articles, leaders, counties, culture,
          national symbols, and important events.
        </p>

      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">

        <input
          type="text"
          placeholder="Search history..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-4 rounded-xl shadow border text-lg"
        />

        <div className="mt-8 space-y-5">

          {results.length === 0 ? (

            <p className="bg-white p-6 rounded-xl shadow">
              {target
                ? "No results found."
                : "Enter something to search Liberia History."}
            </p>

          ) : (

            results.map((result) => (

              <Link
                key={result.id}
                href={result.link}
                className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >

                <p className="text-sm font-semibold text-green-700">
                  {result.category}
                </p>

                <h2 className="text-2xl font-bold mt-1 text-gray-900">
                  {result.title}
                </h2>

                <p className="mt-3 text-gray-600 line-clamp-3">
                  {result.description}
                </p>

                <p className="mt-4 text-green-700 font-semibold">
                  View Result →
                </p>

              </Link>

            ))

          )}

        </div>

      </section>

    </main>
  );
}
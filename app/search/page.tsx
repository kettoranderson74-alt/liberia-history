"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchPage() {

  const items = [
    {
      title: "Joseph Jenkins Roberts",
      type: "Leader",
      link: "/leaders/joseph-jenkins-roberts",
    },
    {
      title: "Ellen Johnson Sirleaf",
      type: "Leader",
      link: "/leaders/ellen-johnson-sirleaf",
    },
    {
      title: "George Weah",
      type: "Leader",
      link: "/leaders/george-weah",
    },
    {
      title: "Liberia Independence",
      type: "Article",
      link: "/articles/liberia-independence",
    },
    {
      title: "Liberia Civil War Era",
      type: "Article",
      link: "/articles/civil-war-history",
    },
    {
      title: "National Symbols",
      type: "Symbol",
      link: "/symbols",
    },
    {
      title: "Montserrado County",
      type: "County",
      link: "/counties/montserrado",
    },
    {
      title: "Nimba County",
      type: "County",
      link: "/counties/nimba",
    },
  ];


  const [search, setSearch] = useState("");


  const results = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main className="min-h-screen bg-gray-50">


      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Search Liberia History 🇱🇷
        </h1>

        <p className="mt-4 text-lg">
          Find leaders, counties, articles, and national symbols.
        </p>

      </section>



      {/* Search Box */}
      <section className="max-w-4xl mx-auto py-12 px-6">

        <input
          type="text"
          placeholder="Search history..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl shadow border text-lg"
        />


        <div className="mt-8 space-y-5">


          {results.map((item) => (

            <Link
              key={item.title}
              href={item.link}
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >

              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="text-green-700 mt-2">
                {item.type}
              </p>

            </Link>

          ))}


        </div>


      </section>


    </main>
  );
}
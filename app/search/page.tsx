"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SearchPage() {

  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<any[]>([]);



  useEffect(() => {

    async function loadArticles() {

      const { data } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });


      if (data) {
        setArticles(data);
      }

    }


    loadArticles();

  }, []);




  const results = articles.filter((article) =>
    article.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    article.content
      .toLowerCase()
      .includes(search.toLowerCase())
  );





  return (

    <main className="min-h-screen bg-gray-50">



      <section className="bg-green-700 text-white py-16 px-6 text-center">


        <h1 className="text-4xl font-bold">
          Search Liberia History 🇱🇷
        </h1>


        <p className="mt-4 text-lg">
          Find history articles, leaders, counties, and important events.
        </p>


      </section>





      <section className="max-w-4xl mx-auto py-12 px-6">



        <input

          type="text"

          placeholder="Search history..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="w-full p-4 rounded-xl shadow border text-lg"

        />





        <div className="mt-8 space-y-5">



          {results.length === 0 ? (

            <p className="bg-white p-6 rounded-xl shadow">
              No articles found.
            </p>

          ) : (


            results.map((article)=>(


              <Link

                key={article.id}

                href={`/articles/${article.slug}`}

                className="block bg-white p-6 rounded-xl shadow hover:shadow-lg"

              >


                <h2 className="text-2xl font-bold">

                  {article.title}

                </h2>



                <p className="text-green-700 mt-2">

                  {article.category}

                </p>



                <p className="mt-3 text-gray-600 line-clamp-3">

                  {article.content.replace(/<[^>]+>/g, "")}

                </p>



              </Link>


            ))


          )}



        </div>



      </section>



    </main>

  );

}
import Image from "next/image";
import { supabase } from "@/lib/supabase";


export default async function LeadersPage() {
 const { data: people, error } = await supabase
    .from("people")
    .select("*")
    .eq("published", true)
    .order("name", { ascending: true });

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

        {people?.map((leader) => (

            <a
              key={leader.name}
             href={leader.profile_url || "#"}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >

              {leader.image_url && (
  <Image
    src={leader.image_url}
    alt={leader.name}
    width={300}
    height={350}
    className="rounded-xl mx-auto"
  />
)}

              <h2 className="text-2xl font-bold mt-5 text-green-700">
                {leader.name}
              </h2>

              <p className="font-semibold mt-2">
          {leader.leadership_years}
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
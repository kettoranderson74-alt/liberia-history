import Image from "next/image";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function LeadersPage() {
  const { data: people, error } = await supabase
    .from("people")
    .select("*")
    .eq("published", true)
    .order("name", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Unable to load leaders
        </h1>

        <p className="mt-4 text-gray-700">
          {error.message}
        </p>
      </main>
    );
  }

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
        {people && people.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {people.map((leader) => (
              <a
                key={leader.id}
                href={leader.profile_url || `/leaders/${leader.slug}`}
                className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition block"
              >
                <div className="h-72 bg-gray-200 overflow-hidden">
                  {leader.image_url ? (
                    <Image
                      src={leader.image_url}
                      alt={leader.name}
                      width={500}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No image available
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-green-700">
                    {leader.name}
                  </h2>

                  {leader.leadership_years && (
                    <p className="font-semibold mt-2 text-gray-700">
                      {leader.leadership_years}
                    </p>
                  )}

                  {leader.role && (
                    <p className="mt-2 text-gray-600">
                      {leader.role}
                    </p>
                  )}

                  <p className="mt-3 text-gray-700">
                    {leader.short_bio || leader.description || ""}
                  </p>

                  <p className="mt-5 text-green-700 font-bold">
                    View Profile →
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700">
              No leaders available
            </h2>

            <p className="mt-3 text-gray-500">
              Published leaders will appear here.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
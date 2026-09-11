import Image from "next/image";
import Link from "next/link";
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
      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">
          Liberia's Presidents & Leaders
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore the lives, leadership, and legacies of the people
          who shaped Liberia's history.
        </p>
      </section>

      {/* Leaders */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        {people && people.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {people.map((leader) => {
              const profileUrl =
                leader.profile_url || `/leaders/${leader.slug}`;

              return (
                <article
                  key={leader.id}
                  className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition"
                >
                  {/* Featured Image */}
                  <Link href={profileUrl} className="block">
                    <div className="relative h-72 bg-gray-200 overflow-hidden">
                      {leader.image_url ? (
                       <img
  src={leader.image_url}
  alt={`${leader.name} - Liberian historical leader`}
  className="w-full h-full object-cover"
  loading="lazy"
/>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          No image available
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6">
                    <Link href={profileUrl}>
                      <h2 className="text-2xl font-bold text-green-700 hover:text-green-800">
                        {leader.name}
                      </h2>
                    </Link>

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

                    {/* Short Biography Only */}
                    {leader.short_bio && (
                      <p className="mt-3 text-gray-700 line-clamp-4">
                        {leader.short_bio}
                      </p>
                    )}

                    {/* Read More */}
                    <Link
                      href={profileUrl}
                      className="inline-block mt-5 text-green-700 font-bold hover:text-green-900"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
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
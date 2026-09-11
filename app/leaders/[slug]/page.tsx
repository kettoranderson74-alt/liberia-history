import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function formatBirthMonthYear(dateString: string | null) {
  if (!dateString) return "";

  const match = dateString.match(/^(\d{4})-(\d{2})/);

  if (!match) return "";

  const year = Number(match[1]);
  const month = Number(match[2]);

  const date = new Date(Date.UTC(year, month - 1, 1));

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatYear(dateString: string | null) {
  if (!dateString) return "";

  const match = dateString.match(/^(\d{4})/);

  return match ? match[1] : "";
}

export default async function LeaderProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: leader, error } = await supabase
    .from("people")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  console.log("PROFILE SLUG:", slug);
  console.log("PROFILE DATA:", leader);
  console.log("PROFILE ERROR:", error);

  if (!leader) {
    return (
      <main className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold text-red-600">
            Leader Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The leader profile you are looking for does not exist.
          </p>

          <Link
            href="/leaders"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Leaders
          </Link>
        </div>
      </main>
    );
  }

  const birthMonthYear = formatBirthMonthYear(
    leader.birth_date
  );

  const deathYear = formatYear(leader.death_date);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">

      <div className="max-w-4xl mx-auto">

        <Link
          href="/leaders"
          className="inline-block mb-6 text-green-700 font-bold"
        >
          Back to Leaders
        </Link>

        <article className="bg-white rounded-xl shadow overflow-hidden">

          {/* Profile Image */}
          {leader.image_url && (
            <Image
              src={leader.image_url}
              alt={leader.name}
              width={1200}
              height={600}
              className="w-full max-h-[500px] object-cover"
            />
          )}

          <div className="p-6 sm:p-8">

            {/* Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 mb-8">

              {/* Leadership */}
              {leader.leadership_years && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Leadership
                  </p>

                  <p className="font-semibold text-green-700">
                    {leader.leadership_years}
                  </p>
                </div>
              )}

              {/* Era */}
              {leader.era && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Era
                  </p>

                  <p className="font-semibold text-gray-900">
                    {leader.era}
                  </p>
                </div>
              )}

              {/* Birth */}
              {birthMonthYear && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Born
                  </p>

                  <p className="font-semibold text-gray-900">
                    {birthMonthYear}
                  </p>
                </div>
              )}

              {/* Death */}
              {deathYear && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Died
                  </p>

                  <p className="font-semibold text-gray-900">
                    {deathYear}
                  </p>
                </div>
              )}

              {/* Birthplace */}
              {leader.birthplace && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Birthplace
                  </p>

                  <p className="font-semibold text-gray-900">
                    {leader.birthplace}
                  </p>
                </div>
              )}

              {/* Country */}
              {leader.county && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">
                    Country
                  </p>

                  <p className="font-semibold text-gray-900">
                    {leader.county}
                  </p>
                </div>
              )}

              {/* Role */}
              {leader.role && (
                <div className="bg-gray-50 rounded-lg p-4 sm:col-span-2">
                  <p className="text-sm text-gray-500">
                    Role
                  </p>

                  <p className="font-semibold text-gray-900">
                    {leader.role}
                  </p>
                </div>
              )}

            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold text-green-700 mt-2">
              {leader.name}
            </h1>

            {/* Short Bio */}
            {leader.short_bio && (
              <p className="text-gray-600 text-lg mt-4">
                {leader.short_bio}
              </p>
            )}

            {/* Full Biography */}
            <div
              className="
                prose prose-lg max-w-none mt-10
                [&_h1]:text-green-700
                [&_h1]:font-bold
                [&_h1]:mt-10
                [&_h1]:mb-4
                [&_h2]:text-green-700
                [&_h2]:font-bold
                [&_h2]:mt-10
                [&_h2]:mb-4
                [&_h3]:text-green-700
                [&_h3]:font-bold
                [&_h3]:mt-8
                [&_h3]:mb-3
                [&_p]:mb-5
                [&_strong]:font-bold
                [&_ul]:mb-5
                [&_ol]:mb-5
                [&_li]:mb-2
                [&_img]:rounded-xl
                [&_img]:my-6
              "
              dangerouslySetInnerHTML={{
                __html: leader.biography || "",
              }}
            />

          </div>
        </article>

      </div>
    </main>
  );
}
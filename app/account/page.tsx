"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/user-login");
        return;
      }

      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading account...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold text-green-700 mb-2">
            My Liberia History Account 🇱🇷
          </h1>

          <p className="text-gray-600 mb-8">
            Welcome to your account.
          </p>

          <div className="border rounded-lg p-5 mb-6">

            <h2 className="text-xl font-bold mb-4">
              👤 Profile
            </h2>

            <p className="mb-2">
              <strong>Name:</strong>{" "}
              {user?.user_metadata?.name || "Not provided"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user?.email}
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">

            <div className="border rounded-lg p-5">
              <h2 className="font-bold text-lg">
                📚 Saved Articles
              </h2>

              <p className="text-gray-600 mt-2">
                Your saved history articles will appear here.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h2 className="font-bold text-lg">
                💬 My Comments
              </h2>

              <p className="text-gray-600 mt-2">
                Your comments will appear here.
              </p>
            </div>

          </div>

          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 px-6 py-3 rounded-lg mr-3"
          >
            ← Home
          </button>

          <button
            onClick={logout}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>

    </main>
  );
}
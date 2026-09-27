"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SiteNav() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  async function loadUserAndNotifications() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    if (user) {
      const { count } = await supabase
        .from("notifications")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("is_read", false);

      setUnreadCount(count || 0);
    } else {
      setUnreadCount(0);
    }

    setLoading(false);
  }

  useEffect(() => {
    let channel: any = null;

    async function setupNotifications() {
      await loadUserAndNotifications();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      channel = supabase
        .channel(`notifications-nav-${user.id}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "notifications",
            filter: `user_id=eq.${user.id}`,
          },
          () => {
            loadUserAndNotifications();
          }
        )
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "notifications",
            filter: `user_id=eq.${user.id}`,
          },
          () => {
            loadUserAndNotifications();
          }
        )
        .subscribe();
    }

    setupNotifications();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);

      if (!session?.user) {
        setUnreadCount(0);
      } else {
        loadUserAndNotifications();
      }
    });

    return () => {
      subscription.unsubscribe();

      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();

    setUser(null);
    setUnreadCount(0);

    router.push("/");
    router.refresh();
  }

  return (
    <nav className="px-6 py-5 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-700 text-center">
        Liberia History
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm md:text-base text-gray-700">
        <a href="/">Home</a>
        <a href="/history">History</a>
        <a href="/leaders">Leaders</a>
        <a href="/culture">Culture</a>
        <a href="/symbols">Symbols</a>
        <a href="/articles">Articles</a>
        <a href="/gallery">Gallery</a>
        <a href="/timeline">Timeline</a>
        <a href="/search">Search</a>
        <a href="/about">About</a>

        {!loading && !user && (
          <>
            <a
              href="/user-login"
              className="text-green-700 font-semibold"
            >
              Login
            </a>

            <a
              href="/signup"
              className="bg-green-700 text-white px-3 py-1 rounded-lg font-semibold"
            >
              Create Account
            </a>
          </>
        )}

        {!loading && user && (
          <>
            <a
              href="/account"
              className="text-green-700 font-semibold"
            >
              Account
            </a>

            <a
              href="/account"
              className="text-green-700 font-semibold"
            >
              Notifications
              {unreadCount > 0 && (
                <span className="ml-1 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs">
                  {unreadCount}
                </span>
              )}
            </a>

            <button
              type="button"
              onClick={logout}
              className="text-red-600 font-semibold"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
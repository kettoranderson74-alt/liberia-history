"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Notification = {
  id: string;
  title: string;
  message: string;
  link: string | null;
  is_read: boolean;
  created_at: string;
};

export default function AccountPage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAccount() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/user-login");
        return;
      }

      setUser(user);

      const { data: notificationData } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setNotifications(notificationData || []);
      setLoading(false);
    }

    getAccount();
  }, [router]);

  async function markAsRead(id: string) {
    await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", id);

    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, is_read: true }
          : notification
      )
    );
  }

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

  const unreadCount = notifications.filter(
    (notification) => !notification.is_read
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold text-green-700 mb-2">
            My Liberia History Account
          </h1>

          <p className="text-gray-600 mb-8">
            Welcome to your account.
          </p>

          <div className="border rounded-lg p-5 mb-6">

            <h2 className="text-xl font-bold mb-4">
              Profile
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

          <div className="border rounded-lg p-5 mb-6">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-xl font-bold">
                Notifications
              </h2>

              {unreadCount > 0 && (
                <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                  {unreadCount} new
                </span>
              )}

            </div>

            {notifications.length === 0 ? (
              <p className="text-gray-600">
                You don't have any notifications yet.
              </p>
            ) : (
              <div className="space-y-4">

                {notifications.map((notification) => (

                  <div
                    key={notification.id}
                    className={`border rounded-lg p-4 ${
                      notification.is_read
                        ? "bg-white"
                        : "bg-green-50 border-green-200"
                    }`}
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-bold text-lg">
                          {notification.title}
                        </h3>

                        <p className="text-gray-700 mt-1">
                          {notification.message}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                          {new Date(
                            notification.created_at
                          ).toLocaleString()}
                        </p>

                      </div>

                      {!notification.is_read && (
                        <span className="text-green-700 text-sm font-semibold">
                          New
                        </span>
                      )}

                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">

                      {notification.link && (
                        <button
                          onClick={() => {
                            markAsRead(notification.id);
                            router.push(notification.link!);
                          }}
                          className="bg-green-700 text-white px-4 py-2 rounded-lg"
                        >
                          View
                        </button>
                      )}

                      {!notification.is_read && (
                        <button
                          onClick={() =>
                            markAsRead(notification.id)
                          }
                          className="bg-gray-200 px-4 py-2 rounded-lg"
                        >
                          Mark as read
                        </button>
                      )}

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">

            <div className="border rounded-lg p-5">

              <h2 className="font-bold text-lg">
                Saved Articles
              </h2>

              <p className="text-gray-600 mt-2">
                Your saved history articles will appear here.
              </p>

            </div>

            <div className="border rounded-lg p-5">

              <h2 className="font-bold text-lg">
                My Comments
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
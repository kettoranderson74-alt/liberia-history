"use client";

import Link from "next/link";

const menuSections = [
  {
    title: "CONTENT",
    items: [
      { name: "Articles", href: "/admin?section=articles", icon: "📝" },
      { name: "People", href: "/admin?section=people", icon: "👑" },
      {
        name: "Historical Events",
        href: "/admin?section=events",
        icon: "📜",
      },
      { name: "Timeline", href: "/admin?section=timeline", icon: "⏳" },
      {
        name: "On This Day",
        href: "/admin?section=on-this-day",
        icon: "📅",
      },
    ],
  },
  {
    title: "LIBERIA",
    items: [
      { name: "Counties", href: "/admin?section=counties", icon: "🌍" },
      { name: "Culture", href: "/admin?section=culture", icon: "🎭" },
      { name: "Symbols", href: "/admin?section=symbols", icon: "🇱🇷" },
    ],
  },
  {
    title: "MEDIA",
    items: [
      { name: "Gallery", href: "/admin?section=gallery", icon: "🖼️" },
      { name: "Sources", href: "/admin?section=sources", icon: "📚" },
    ],
  },
  {
    title: "WEBSITE",
    items: [
      { name: "Homepage", href: "/admin?section=homepage", icon: "🏠" },
      { name: "Search", href: "/admin?section=search", icon: "🔎" },
    ],
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-green-950 text-white p-5">
      <div className="mb-8">
        <h1 className="text-xl font-bold">🇱🇷 Liberia History</h1>
        <p className="text-green-300 text-sm mt-1">ADMIN CONTROL CENTER</p>
      </div>

      <nav className="space-y-7">
        {menuSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-bold text-green-400 mb-2">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-green-900 transition"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
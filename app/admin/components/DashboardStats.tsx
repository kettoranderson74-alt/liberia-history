"use client";

type DashboardStatsProps = {
  articles: number;
  people: number;
  events: number;
  counties: number;
  cultures: number;
  symbols: number;
  gallery: number;
  sources: number;
};

export default function DashboardStats({
  articles,
  people,
  events,
  counties,
  cultures,
  symbols,
  gallery,
  sources,
}: DashboardStatsProps) {
  const stats = [
    { name: "Articles", value: articles, icon: "📝" },
    { name: "People", value: people, icon: "👑" },
    { name: "Events", value: events, icon: "📜" },
    { name: "Counties", value: counties, icon: "🌍" },
    { name: "Culture", value: cultures, icon: "🎭" },
    { name: "Symbols", value: symbols, icon: "🇱🇷" },
    { name: "Gallery", value: gallery, icon: "🖼️" },
    { name: "Sources", value: sources, icon: "📚" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-xl shadow-sm border p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="text-3xl font-bold text-green-800 mt-1">
                {stat.value}
              </p>
            </div>

            <div className="text-3xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
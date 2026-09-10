"use client";

import Link from "next/link";

type AdminHeaderProps = {
  title: string;
  description?: string;
};

export default function AdminHeader({
  title,
  description,
}: AdminHeaderProps) {
  return (
    <header className="bg-white border-b px-6 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>

      <Link
        href="/"
        target="_blank"
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
      >
        View Website
      </Link>
    </header>
  );
}
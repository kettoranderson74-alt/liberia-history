"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({
  content,
}: {
  content: string;
}) {
  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    const parser = new DOMParser();
    const html = parser.parseFromString(content, "text/html");

    const headingElements = Array.from(
      html.querySelectorAll("h2, h3")
    );

    const items = headingElements.map((heading, index) => {
      const id = `section-${index}`;

      return {
        id,
        text: heading.textContent || "",
      };
    });

    setHeadings(items);
  }, [content]);


  if (headings.length === 0) {
    return null;
  }


  return (
    <div className="bg-gray-100 p-6 rounded-xl mb-8">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Table of Contents
      </h2>

      <ul className="space-y-2">

        {headings.map((item) => (

          <li key={item.id}>

            <a
              href={`#${item.id}`}
              className="text-blue-700 hover:underline"
            >
              {item.text}
            </a>

          </li>

        ))}

      </ul>

    </div>
  );
}
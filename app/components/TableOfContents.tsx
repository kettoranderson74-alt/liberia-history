"use client";

export default function TableOfContents({
  content,
}: {
  content: string;
}) {

  const headings = [
    "Prehistoric Liberians",
    "The Coming of Historic Liberians: The Tribes",
    "Relations Between and Among the Tribes",
    "Europe and America Come to West Africa",
    "Traditional Social Institutions and Practices",
    "Traditional Education",
    "Indigenous Writing",
  ];


  return (

    <div className="bg-gray-100 p-6 rounded-xl mb-8">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Table of Contents
      </h2>


      <ul className="space-y-2">

        {headings.map((item, index) => (

          <li key={index}>

            <span className="text-blue-700">
              {index + 1}. {item}
            </span>

          </li>

        ))}

      </ul>


    </div>

  );
}
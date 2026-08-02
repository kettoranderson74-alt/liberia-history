import Image from "next/image";

export default function GalleryPage() {

  const images = [
    {
      title: "Liberia Independence",
      image: "liberia.jpg",
      description: "A look into Liberia's history and independence journey."
    },
    {
      title: "Joseph Jenkins Roberts",
      image: "roberts.jpg",
      description: "Liberia's first president and a founding figure."
    },
    {
      title: "Ellen Johnson Sirleaf",
      image: "sirleaf.jpg",
      description: "Liberia's first elected female president."
    },
    {
      title: "George Weah",
      image: "weah.jpg",
      description: "Former president and international football legend."
    },
    {
      title: "Liberia National Flag",
      image: "liberia-flag.jpg",
      description: "The symbol of Liberia's freedom and independence."
    },
    {
      title: "Liberia Coat of Arms",
      image: "liberia-coat.jpg",
      description: "A national symbol representing Liberia's history."
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50">


      {/* Header */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">

        <h1 className="text-4xl font-bold">
          Liberia History Gallery 🇱🇷
        </h1>

        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Explore important images, leaders, symbols, and moments
          from Liberia's history.
        </p>

      </section>



      {/* Gallery */}
      <section className="max-w-6xl mx-auto py-12 px-6">


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">


          {images.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-xl shadow p-5"
            >

              <Image
                src={`/images/${item.image}`}
                alt={item.title}
                width={500}
                height={350}
                className="rounded-xl w-full h-64 object-cover"
              />


              <h2 className="text-2xl font-bold mt-5">
                {item.title}
              </h2>


              <p className="mt-3 text-gray-700">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </section>


    </main>
  );
}
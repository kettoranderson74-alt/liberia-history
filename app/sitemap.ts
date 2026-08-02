import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://liberia-history-liberia.vercel.app";

  const pages = [
    "",
    "about",
    "history",
    "culture",
    "gallery",
    "symbols",
    "timeline",
    "leaders",
    "historical-figures",
    "articles",
    "counties",
    "counties/map",
    "search",

    // Articles
    "articles/civil-war-history",
    "articles/liberia-independence",
    "articles/liberia-presidents",

    // Counties
    "counties/bomi",
    "counties/bong",
    "counties/gbarpolu",
    "counties/grand-bassa",
    "counties/grand-cape-mount",
    "counties/grand-gedeh",
    "counties/grand-kru",
    "counties/lofa",
    "counties/margibi",
    "counties/maryland",
    "counties/montserrado",
    "counties/nimba",
    "counties/river-cess",
    "counties/river-gee",
    "counties/sinoe",

    // Leaders
    "leaders/charles-taylor",
    "leaders/edward-roye",
    "leaders/ellen-johnson-sirleaf",
    "leaders/george-weah",
    "leaders/joseph-boakai",
    "leaders/joseph-jenkins-roberts",
    "leaders/samuel-doe",
    "leaders/william-tolbert",
    "leaders/william-vs-tubman",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
  }));
}
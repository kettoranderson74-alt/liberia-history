import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://liberia-history-liberia.vercel.app";


  const { data: articles } = await supabase
    .from("articles")
    .select("slug, created_at")
    .eq("published", true);



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



  const staticPages = pages.map((page) => ({

    url: `${baseUrl}/${page}`,

    lastModified: new Date(),

    changeFrequency: "weekly" as const,

    priority: page === "" ? 1 : 0.8,

  }));




  const articlePages = (articles || []).map((article) => ({

    url: `${baseUrl}/articles/${article.slug}`,

    lastModified: new Date(article.created_at),

    changeFrequency: "monthly" as const,

    priority: 0.7,

  }));



  return [

    ...staticPages,

    ...articlePages,

  ];

}
import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const baseUrl = "https://liberia-history-liberia.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /*
   * Get all published CMS content from Supabase.
   *
   * The sitemap is dynamically generated from the current
   * published records in the CMS.
   */

  const [
    articlesResult,
    peopleResult,
    countiesResult,
    culturesResult,
    symbolsResult,
    galleryResult,
  ] = await Promise.all([
    supabase
      .from("articles")
      .select("slug, created_at")
      .eq("published", true),

    supabase
      .from("people")
      .select("slug")
      .eq("published", true),

    supabase
      .from("counties")
      .select("slug")
      .eq("published", true),

    supabase
      .from("cultures")
      .select("slug, created_at, updated_at")
      .eq("published", true),

    supabase
      .from("symbols")
      .select("slug, created_at, updated_at")
      .eq("published", true),

    supabase
      .from("gallery")
      .select("slug, created_at, updated_at")
      .eq("published", true),
  ]);

  const articles = articlesResult.data || [];
  const people = peopleResult.data || [];
  const counties = countiesResult.data || [];
  const cultures = culturesResult.data || [];
  const symbols = symbolsResult.data || [];
  const gallery = galleryResult.data || [];

  /*
   * Permanent website pages.
   *
   * These are not individual CMS records.
   */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/culture`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/symbols`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leaders`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/historical-figures`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/counties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/counties/map`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  /*
   * Published Articles
   */

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((article) => article.slug)
    .map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.created_at),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  /*
   * Published People / Leaders
   */

  const peoplePages: MetadataRoute.Sitemap = people
    .filter((person) => person.slug)
    .map((person) => ({
      url: `${baseUrl}/leaders/${person.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  /*
   * Published Counties
   */

  const countyPages: MetadataRoute.Sitemap = counties
    .filter((county) => county.slug)
    .map((county) => ({
      url: `${baseUrl}/counties/${county.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  /*
   * Published Culture
   */

  const culturePages: MetadataRoute.Sitemap = cultures
    .filter((culture) => culture.slug)
    .map((culture) => ({
      url: `${baseUrl}/culture/${culture.slug}`,
      lastModified: new Date(
        culture.updated_at || culture.created_at
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  /*
   * Published National Symbols
   */

  const symbolPages: MetadataRoute.Sitemap = symbols
    .filter((symbol) => symbol.slug)
    .map((symbol) => ({
      url: `${baseUrl}/symbols/${symbol.slug}`,
      lastModified: new Date(
        symbol.updated_at || symbol.created_at
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  /*
   * Published Gallery
   */

  const galleryPages: MetadataRoute.Sitemap = gallery
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${baseUrl}/gallery/${item.slug}`,
      lastModified: new Date(
        item.updated_at || item.created_at
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  /*
   * Complete sitemap
   */

  return [
    ...staticPages,
    ...articlePages,
    ...peoplePages,
    ...countyPages,
    ...culturePages,
    ...symbolPages,
    ...galleryPages,
  ];
}
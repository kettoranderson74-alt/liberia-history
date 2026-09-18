import type { Metadata } from "next";

const SITE_NAME = "Liberia History";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://liberia-history-liberia.vercel.app";

const DEFAULT_DESCRIPTION =
  "Explore Liberia's history, culture, people, places, important events, symbols, and heritage.";

const DEFAULT_IMAGE = `${SITE_URL}/images/liberia-history-og.jpg`;

type SEOOptions = {
  title: string;
  description?: string;
  image?: string | null;
  url?: string;
  type?: "website" | "article";
};

function absoluteUrl(url?: string | null) {
  if (!url) return DEFAULT_IMAGE;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (url.startsWith("/")) {
    return `${SITE_URL}${url}`;
  }

  return `${SITE_URL}/${url}`;
}

export function createSEO({
  title,
  description,
  image,
  url,
  type = "website",
}: SEOOptions): Metadata {
  const finalDescription = description || DEFAULT_DESCRIPTION;
  const finalImage = absoluteUrl(image);
  const finalUrl = url ? absoluteUrl(url) : SITE_URL;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: finalDescription,

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: finalUrl,
    },

    openGraph: {
      title,
      description: finalDescription,
      url: finalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: finalImage,
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: finalDescription,
      images: [finalImage],
    },
  };
}

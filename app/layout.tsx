import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Liberia History | Discover Liberia's Past, Leaders and Culture",
    template: "%s | Liberia History",
  },

  description:
    "Explore Liberia's history, presidents, counties, national symbols, culture, independence, and major historical events through a comprehensive digital history platform.",

  keywords: [
    "Liberia",
    "Liberia History",
    "Liberian History",
    "Liberian Presidents",
    "Joseph Jenkins Roberts",
    "Liberia Independence",
    "Liberia Counties",
    "Liberian Culture",
    "Liberia Civil War",
    "African History",
    "National Symbols of Liberia",
  ],

  authors: [
    {
      name: "Liberia History",
    },
  ],

  creator: "Liberia History",

  publisher: "Liberia History",

  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  openGraph: {
    title: "Liberia History",
    description:
      "Discover Liberia's history, leaders, counties, culture and historical events.",
    url: "https://YOUR-DOMAIN.com",
    siteName: "Liberia History",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Liberia History",
    description:
      "Discover Liberia's history, leaders, counties and culture.",
  },

  verification: {
    google: "NtywqRFlPnhWUASXRd14q_C34joUVWCMfKApQbgeQko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>

      <GoogleAnalytics gaId="G-70ZVY6JYYX" />
    </html>
  );
}
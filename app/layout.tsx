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
  title: "Liberia History | Discover Liberia's Past, Leaders and Culture",
  description:
    "Explore Liberia's history, counties, presidents, national symbols, culture, and important events through a digital history platform.",

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
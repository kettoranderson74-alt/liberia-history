import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lxlgmmzmzdujgskiwfye.supabase.co",
      },
    ],
  },

};

export default nextConfig;
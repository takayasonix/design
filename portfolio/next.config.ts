import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Cloudflare Pages用。Vercelでは不要
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

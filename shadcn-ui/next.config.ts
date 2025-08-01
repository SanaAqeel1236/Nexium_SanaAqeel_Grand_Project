import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint checks during Vercel builds
    ignoreDuringBuilds: true,
  },
  // Add other config options if needed
};

export default nextConfig;

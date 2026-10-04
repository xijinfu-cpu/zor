import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true" && !process.env.NO_BASE_PATH;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? "/zor" : "");

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  output: "export", // ensures `next export` works correctly
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ensures folders are created for clean URLs
  reactStrictMode: true, // good dev practice
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // strip console.logs
  },
  experimental: {
    optimizeCss: true, // remove unused css (if supported)
  },
  webpack: (config) => {
    // Optional: Add any custom Webpack tweaks here
    return config;
  },
};

export default nextConfig;

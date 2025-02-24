import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

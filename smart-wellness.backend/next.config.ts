import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: '/smart-wellness',
  assetPrefix: '/smart-wellness/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cssModules: true,
  reactStrictMode: false,

  images: {
    domains: ["e-commerce-photos.s3.amazonaws.com"],
  },

  env: {
    PRODUCTION_URI: "https://am-cloud.eu/api",
    DEV_URI: "http://localhost:5000/api",
  },
  
};

export default nextConfig;

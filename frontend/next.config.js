/** @type {import('next').NextConfig} */
const nextConfig = {
  cssModules: true,
  reactStrictMode: false,

  images: {
    domains: ["e-commerce-photos.s3.amazonaws.com"],
  },

  env: {
    PRODUCTION_URI: "https://am-cloud.eu/api/",
    DEV_URI: "http://localhost:5000/api/",
  },
};

module.exports = nextConfig;

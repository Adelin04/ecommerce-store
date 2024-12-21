/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["e-commerce-photos.s3.amazonaws.com","cdn.pixabay.com","media.istockphoto.com"],
  },
  

  env: {
    PRODUCTION_URI: "https://am-cloud.eu/api/",
    DEV_URI: "http://localhost:5000/api/",
  },
};

module.exports = nextConfig;

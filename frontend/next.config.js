/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["e-commerce-photos.s3.amazonaws.com","cdn.pixabay.com","media.istockphoto.com","api.cloudinary.com","res.cloudinary.com"],
  },
  

  env: {
    PRODUCTION_URI: "https://am-cloud.eu/api/",
    DEV_URI: "http://localhost:5000/api/",
  },

  /* async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      ]
      },
    ];
  }, */
};

module.exports = nextConfig;

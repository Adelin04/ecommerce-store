// const PRODUCTION_URI = "https://am-cloud.eu/api";
// const DEV_URI = "http://localhost:5000/api";
const DEV_URI = process.env.DEV_URI;
const PRODUCTION_URI = process.env.PRODUCTION_URI;

export const URI = DEV_URI;
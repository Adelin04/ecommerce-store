const DEV_URI = process.env.DEV_URI;
const PRODUCTION_URI = process.env.PRODUCTION_URI;

export const URI = PRODUCTION_URI /* ? PRODUCTION_URI : DEV_URI */;

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
// import path from "path";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import sizeRoutes from "./routes/size.routes.js";
import currencyRoutes from "./routes/currency.routes.js";
import colorRoutes from "./routes/color.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import genderRoutes from "./routes/gender.routes.js";
import brandRoutes from "./routes/brand.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.use(
  cors({
    origins: [
      "http://localhost:5173/",
      "http://localhost:3000/",
      "https://am-cloud.eu/api/",
      "https://e-commerce-boutique.netlify.app/",
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    exposedHeaders: ["Set-Cookie"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    origin: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/size", sizeRoutes);
app.use("/api/currency", currencyRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/gender", genderRoutes);
app.use("/api/brand", brandRoutes);
app.get("/api-ecomm/", async (req, res) => {
  res.status(200).json({ message: "API is working" });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  connectDB();
});


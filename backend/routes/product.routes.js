import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  getProductsByCategory,
  deleteProductById,
  searchProducts,
} from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/createProduct", protectRoute, adminRoute, createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.get("/getProductsByCategory/:id", getProductsByCategory);
router.put("/updateProductById/:id", updateProductById);
router.delete("/deleteProductById/:id", deleteProductById);
router.post("/searchProducts", searchProducts);

export default router;

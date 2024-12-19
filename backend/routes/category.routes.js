import express from "express";
import { createCategory, getAllCategories,getCategoryById,updateCategoryById,deleteCategoryById } from "../controllers/category.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createCategory", protectRoute, adminRoute, createCategory);
router.get("/getAllCategories",  getAllCategories);
router.get("/getCategoryById/:id", protectRoute, adminRoute, getCategoryById);
router.put("/updateCategoryById/:id", protectRoute, adminRoute, updateCategoryById);
router.delete("/deleteCategoryById/:id", protectRoute, adminRoute, deleteCategoryById);

export default router;
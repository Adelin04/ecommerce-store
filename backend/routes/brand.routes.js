import express from "express";
import {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrandById,
    deleteBrandById,
} from "../controllers/brand.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createBrand", protectRoute, adminRoute, createBrand);
router.get("/getAllBrands", protectRoute, adminRoute, getAllBrands);
router.get("/getBrandById/:id", protectRoute, adminRoute, getBrandById);
router.put("/updateBrandById/:id", protectRoute, adminRoute, updateBrandById);
router.delete("/deleteBrandById/:id",protectRoute,adminRoute,deleteBrandById);

export default router;
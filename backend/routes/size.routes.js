import express from "express";
import {
  createSize,
  getAllSizes,
  deleteSizeById,
  getSizeById,
  updateSizeById,
} from "../controllers/size.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/createSize", protectRoute, adminRoute, createSize);
router.get("/getAllSizes", protectRoute, adminRoute, getAllSizes);
router.get("/getSizeById/:id", protectRoute, adminRoute, getSizeById);
router.get("/deleteSize/:id", protectRoute, adminRoute, deleteSizeById);
router.put("/updateSizeById/:id", protectRoute, adminRoute, updateSizeById);

export default router;

import express from "express";
import {
  createColor,
  getAllColors,
  getColorById,
  updateColorById,
  deleteColorById,
} from "../controllers/color.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createColor", protectRoute, adminRoute, createColor);
router.get("/getAllColors", protectRoute, adminRoute, getAllColors);
router.get("/getColorById/:id", protectRoute, adminRoute, getColorById);
router.put("/updateColorById/:id", protectRoute, adminRoute, updateColorById);
router.delete("/deleteColorById/:id",protectRoute,adminRoute,deleteColorById);

export default router;

import express from "express";
import {
  createGender,
  getAllGenders,
  getGenderById,
  updateGenderById,
  deleteGenderById,
} from "../controllers/gender.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createGender", protectRoute, adminRoute,createGender );
router.get("/getAllGenders", protectRoute, adminRoute, getAllGenders);
router.get("/getGenderById/:id", protectRoute, adminRoute, getGenderById);
router.put("/updateColorById/:id", protectRoute, adminRoute, updateGenderById);
router.delete("/deleteGenderById/:id",protectRoute,adminRoute,deleteGenderById);

export default router;
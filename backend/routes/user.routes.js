import express from "express";
import fs from 'fs';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  uploadImageProfileUser,
} from "../controllers/user.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/uploadFile.js";

const router = express.Router();

router.post("/createUser", protectRoute, adminRoute, createUser);
router.get("/getAllUsers", protectRoute, adminRoute, getAllUsers);
router.get("/getUserById/:id", protectRoute, adminRoute, getUserById);
router.put("/updateUserById/:id", protectRoute, adminRoute, updateUserById);
router.delete("/deleteUserById/:id", protectRoute, adminRoute, deleteUserById);
router.post(
  "/uploadImageProfileUser/:id",
  upload.single("file"),
  uploadImageProfileUser
);

export default router;

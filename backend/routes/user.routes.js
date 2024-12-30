import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  uploadImageProfileUser,
} from "../controllers/user.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public");
  },
  filename: function (req, file, cb) {
    return cb(null,file.originalname);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/createUser", protectRoute, adminRoute, createUser);
router.get("/getAllUsers", protectRoute, adminRoute, getAllUsers);
router.get("/getUserById/:id", protectRoute, adminRoute, getUserById);
router.put("/updateUserById/:id", protectRoute, adminRoute, updateUserById);
router.delete("/deleteUserById/:id", protectRoute, adminRoute, deleteUserById);
router.post(
  "/uploadImageProfileUser/:id",
//   upload.single("file"),
//   protectRoute,
  uploadImageProfileUser
);

export default router;

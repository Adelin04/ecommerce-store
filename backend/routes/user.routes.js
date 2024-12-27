import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} from "../controllers/user.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createUser", protectRoute, adminRoute, createUser);
router.get("/getAllUsers", protectRoute, adminRoute, getAllUsers);
router.get("/getUserById/:id", protectRoute, adminRoute, getUserById);
router.put("/updateUserById/:id", protectRoute, adminRoute, updateUserById);
router.delete("/deleteUserById/:id", protectRoute, adminRoute, deleteUserById);

export default router;
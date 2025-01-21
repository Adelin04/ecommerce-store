import express from "express";
import {createCurrency,getAllCurrencies,getCurrencyById,updateCurrencyById,deleteCurrencyById} from "../controllers/currency.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createCurrency",/*  protectRoute,adminRoute, */createCurrency);
router.get("/getAllCurrencies",protectRoute,adminRoute,getAllCurrencies);
router.post("/getCurrencyById/:id", protectRoute,adminRoute,getCurrencyById);
router.post("/deleteCurrencyById/:id", protectRoute,adminRoute,deleteCurrencyById);
router.post("/updateCurrencyById/:id", protectRoute,adminRoute,updateCurrencyById);

export default router;

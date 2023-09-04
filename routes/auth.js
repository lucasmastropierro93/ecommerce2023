import express from "express";

const router = express.Router();

//middlewares
import { requireSingin, isAdmin } from "../middlewares/auth.js";

// controllers
import { register, login, secret, updateProfile, getOrders, allOrders } from "../controllers/auth.js";

router.post("/register", register); 
router.post("/login", login);
router.get("/auth-check", requireSingin, (req,res)=>{
    res.json({ok: true})
})
router.get("/admin-check", requireSingin, isAdmin, (req,res)=>{
    res.json({ok: true})
})
router.put("/profile", requireSingin, updateProfile);
//testing
router.get("/secret", requireSingin, isAdmin, secret);
// orders
router.get("/orders", requireSingin, getOrders);
router.get("/all-orders", requireSingin, isAdmin, allOrders);

export default router;

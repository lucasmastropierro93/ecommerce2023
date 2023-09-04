import express from "express";

const router = express.Router();

// middlewares
import { requireSingin, isAdmin } from "../middlewares/auth.js";

//controllers
import { create, update, remove, list, read, productsByCategory } from "../controllers/category.js";

router.post("/category", requireSingin, isAdmin, create);
router.put("/category/:categoryId", requireSingin, isAdmin, update);
router.delete("/category/:categoryId", requireSingin, isAdmin, remove);
router.get("/categories", list);
router.get("/category/:slug", read);
router.get("/products-by-category/:slug", productsByCategory);
export default router;

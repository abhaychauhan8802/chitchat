import { Router } from "express";

// local import
import {
  register,
  login,
  profile,
  logout,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verifyToken, logout);
router.get("/profile", verifyToken, profile);

export default router;

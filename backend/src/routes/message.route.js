import { Router } from "express";

// local imports
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getAllChats, getMessage } from "../controllers/message.controller.js";

const router = Router();

router.get("/get-all-chats", verifyToken, getAllChats);
router.get("/get-message/:id", verifyToken, getMessage);

export default router;

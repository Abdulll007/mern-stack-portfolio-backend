import express from "express";
import {
  deleteMessage,
  getAllMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getAllMessages);
router.delete("/delete/:id", isAuthenticated, deleteMessage);

export default router;

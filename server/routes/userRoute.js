import express from "express";
import {
  getUsers,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { authenticated } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", authenticated, getUsers);

export default router;

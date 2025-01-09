import express from "express";
import { adminAndHRAdministrator, authenticated } from "../middlewares/verifyToken.js";
import { addEmployee, getEmployees } from "../controllers/employeeController.js";
const router = express.Router();

router.get("/",authenticated, getEmployees)
router.post("/add", adminAndHRAdministrator, addEmployee)

export default router;
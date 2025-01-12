import express from "express";
import { adminAndHRAdministrator, authenticated } from "../middlewares/verifyToken.js";
import { addEmployee, getEmployeeById, getEmployees } from "../controllers/employeeController.js";
const router = express.Router();

router.get("/",authenticated, getEmployees)
router.post("/add", adminAndHRAdministrator, addEmployee)
router.get("/:id", authenticated, getEmployeeById)

export default router;
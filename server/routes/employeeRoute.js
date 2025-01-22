import express from "express";
import { adminAndHRAdministrator, authenticated } from "../middlewares/verifyToken.js";
import {
  addAnEmployeeStatus,
  addEmployee,
  getEmployeeById,
  getEmployees,
  getEmployeeStatuses,
} from "../controllers/employeeController.js";
const router = express.Router();

// Get All Employees
router.get("/",authenticated, getEmployees)

// Add an employee
router.post("/add", adminAndHRAdministrator, addEmployee)

// Get Single employee by id
router.get("/:id", authenticated, getEmployeeById)

// Add an employee status
router.post("/:id/status", adminAndHRAdministrator, addAnEmployeeStatus)

// Get an employee statuses
router.get("/:id/status", adminAndHRAdministrator, getEmployeeStatuses)

export default router;
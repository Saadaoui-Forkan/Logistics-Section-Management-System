import models from "../models/index.js";
import { addEmployeeSchema } from "../utils/validationSchema.js";

/***
 * @desc    Get All Employees
 * @route   /api/employees
 * @method  GET
 * @access  private (only authenticated user)
*/
export const getEmployees = async(req, res) => {
    try {
        const employees = await models.Employee.findAll()
        if (!employees) {
            return res.status(404).json({ message: "Employees Not Found" })
        }
        res.status(200).json(employees)
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

/***
 * @desc    Add An Employee
 * @route   /api/employees/add
 * @method  POST
 * @access  private (only Admin or HR Administrator)
*/
export const addEmployee = async(req, res) => {
    try {
        const user = await models.User.findOne({ where: { id: req.user.id } })
        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }

        const {
          full_name,
          unique_identifier,
          phone_number,
          email,
          date_of_birth,
          position,
          department,
          comments,
        } = req.body;
        const validation = addEmployeeSchema.safeParse(req.body)
        if (!validation.success) {
          return res
            .status(400)
            .json({
              message: validation.error.issues.map(err => `${err.path}: ${err.message}`)
            });
        }
        const newEmployee = await models.Employee.create({
          full_name,
          unique_identifier,
          phone_number,
          email,
          date_of_birth,
          position,
          department,
          comments,
          UserId: user.id
        });

        res.status(201).json({
            message: "New Employee Is Added Successfully",
            newEmployee
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}
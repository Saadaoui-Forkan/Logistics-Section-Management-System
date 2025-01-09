import models from "../models/index.js";

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
            res.status(404).json({ message: "User Not Found" })
        }
        res.status(201).json({
            message: "New Employee Is Added Successfully",
            // newEmployee
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}
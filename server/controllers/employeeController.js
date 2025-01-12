import { Op } from "sequelize";
import models from "../models/index.js";
import { addEmployeeSchema } from "../utils/validationSchema.js";
import { handleError, validateData } from "../utils/common.js";

/***
 * @desc    Get All Employees
 * @route   /api/employees
 * @method  GET
 * @access  private (only authenticated users are allowed)
*/
export const getEmployees = async(req, res) => {
    try {
        const employees = await models.Employee.findAll()
        if (!employees) {
            return res.status(404).json({ message: "Employees Not Found" })
        }
        res.status(200).json(employees)
    } catch (err) {
        handleError(res, err)
    }
}

/***
 * @desc    Add An Employee
 * @route   /api/employees/add
 * @method  POST
 * @access  private (only Admin or HR Administrator)
*/
export const addEmployee = async (req, res) => {
  try {
    const user = await models.User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
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
    // const validation = addEmployeeSchema.safeParse(req.body);
    // if (!validation.success) {
    //   return res.status(400).json({
    //     message: validation.error.issues.map(
    //       (err) => `${err.path}: ${err.message}`
    //     ),
    //   });
    // }
    const validationPassed = validateData(addEmployeeSchema, req, res)
    if (!validationPassed) return;

    const employee = await models.Employee.findOne({
      where: {
        [Op.or]: [
          { full_name },
          { unique_identifier },
          { email },
          { phone_number },
        ],
      },
    });
    if (employee) {
      return res.status(400).json({ message: "Employee Already Exist!" });
    } else {
      const newEmployee = await models.Employee.create({
        full_name,
        unique_identifier,
        phone_number,
        email,
        date_of_birth,
        position,
        department,
        comments,
        UserId: user.id,
      });
      res.status(201).json({
        message: "New Employee Is Added Successfully",
        newEmployee,
      });
    }
  } catch (err) {
    handleError(res, err)
  }
};

/***
 * @desc    Get Employee By Id
 * @route   /api/employees/:id
 * @method  GET
 * @access  private (only authenticated users are allowed)
*/
export const getEmployeeById = async(req, res) => {
    try {
        const { id } = req.params
        const employee = await models.Employee.findOne({ where: {id: parseInt(id)} })
        if(!employee) {
            return res.status(400).json({ message: "Employee Not Founded!" })
        }
        res.status(200).json({ employee })
    } catch (err) {
        handleError(res, err)
    }
}
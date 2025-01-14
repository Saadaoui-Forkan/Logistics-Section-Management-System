import models from "../models/index.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { registerUserSchema } from "../utils/validationSchema.js";
import { handleError, validateData } from "../utils/common.js";

/***
 * @desc    Register New User
 * @route   /api/users/register
 * @method  POST
 * @access  public
*/
export const register = async (req, res) => {
  try {
    const { unique_identifier, role, password } = req.body;
    // const validation = registerUserSchema.safeParse(req.body);
    // if (!validation.success) {
    //   return res
    //     .status(400)
    //     .json({ message: validation.error.issues.map((err) => err.message) });
    // }
    const validationPassed = validateData(registerUserSchema, req, res)
    if (!validationPassed) return;

    const userExist = await models.User.findOne({
      where: { unique_identifier },
    });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    const hashPassword = await bcrypt.hash(password, 15);
    const user = await models.User.create({
      unique_identifier,
      role,
      password: hashPassword,
    });

    generateToken(res, {
      id: user.id,
      role: user.role,
    });

    res.status(201).json({
      data: { role: user.role, unique_identifier: user.unique_identifier },
    });
  } catch (err) {
    handleError(res, err)
  }
};

/***
 * @desc    Login User
 * @route   /api/users/login
 * @method  POST
 * @access  public
*/
export const login = async (req, res) => {
  try {
    const { unique_identifier, password } = req.body;

    const user = await models.User.findOne({
      where: {
        unique_identifier,
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      generateToken(res, {
        id: user.id,
        role: user.role,
      });

      res.status(200).json({
        data: {
          role: user.role,
          unique_identifier: user.unique_identifier,
        },
      });
    } else {
      return res.status(400).json({
        message: "Invalid Credentials!",
      });
    }
  } catch (err) {
    handleError(res, err)
  }
};

/**
 * @desc    Logout User
 * @route   /api/users/logout
 * @method  POST
 * @access  public
*/
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    handleError(res, err)
  }
};

/**
 * @desc    Get All Users
 * @route   /api/users
 * @method  POST
 * @access  public
*/
export const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    if (!users) {
      res.status(404).json({ message: "Users Not Found" })
    }
    res.status(200).json(users);
  } catch (err) {
    handleError(res, err)
  }
};

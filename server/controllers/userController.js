import models from "../models/index.js";
import bcrypt from "bcryptjs";
import { accessToken, generateToken } from "../utils/generateToken.js";
import { registerUserSchema } from "../utils/validationSchema.js";

/***
 * @desc    Register New User
 * @route   /api/user/register
 * @method  POST
 * @access  public
 */
export const register = async (req, res) => {
  try {
    const { unique_identifier, role, password } = req.body;
    const validation = registerUserSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json({ message: validation.error.issues.map(err => err .message) })
    }

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

    const token = accessToken({
      id: user.id,
      role: user.role,
    })

    res.status(201).json({
      token,
      data: { role: user.role, unique_identifier: user.unique_identifier },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

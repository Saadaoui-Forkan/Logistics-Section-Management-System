import jwt from "jsonwebtoken";

export const generateToken = (res, userInfo) => {
  const accessToken = jwt.sign(
    {
      userInfo,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRES_IN }
  );
  res.cookie("jwt", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

import jwt from "jsonwebtoken";

export const accessToken = (userInfo) =>
  jwt.sign(
    {
      userInfo,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRES_IN }
  );

export const generateToken = (res, userInfo) => {
  const refreshToken = jwt.sign(
    {
      userInfo,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRES_IN }
  );
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });
};

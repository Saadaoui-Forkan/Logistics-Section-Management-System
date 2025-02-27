import jwt from "jsonwebtoken"

export const authenticated = async (req, res, next) => {
  try {
    let token = req.cookies.jwt; 
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized!" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden!" });
      }

      req.user = decoded.userInfo;
      next();
    });

  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

export const admin = async(req, res) => {
    authenticated(req, res, () => {
        if (req.user.role === "Admin") {
            next()
        } else {
            return res.status(403).json({ message: "Access restricted to Admin only." })
        }
    })
}

export const adminAndHRAdministrator = async(req, res, next) => {
    authenticated(req, res, () => {
        if (req.user.role === "Admin" || req.user.role === "HR Administrator") {
            next()
        } else {
            return res.status(403).json({ message: "Access restricted to Admin or HR Administrator." })
        }
    })
}
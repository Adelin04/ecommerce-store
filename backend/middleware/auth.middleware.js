import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res.status(401).send("Unauthorized - No access token provided");
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    console.log('user - auth');
    // try {


    if (!user) {
      return res.status(401).send("Unauthorized - User not found");
    }

    req.user = user;
    next();
    // } catch (error) {
    //   if (error.name === "TokenExpiredError") {
    //     return res.status(401).send("Unauthorized - Access token expired");
    //   }
    // }
  } catch (error) {
    return res.status(401).send("Unauthorized - Invalid access token");
  }
};

export const adminRoute = (req, res, next) => {
  if (req.user && req.user.role.toLowerCase() === "admin") {
    next();
  } else {
    return res.status(403).send("Forbidden - Only admin can access this route");
  }
};

import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7day",
  });

  return {
    accessToken,
    refreshToken,
  };
};

const storeRefreshToken = async (userId, refreshToken) => {
  await redis.set(
    `refresh_token:${userId}`,
    refreshToken,
    "EX",
    60 * 60 * 24 * 7
  );
};

const setCookie = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, // prevent XSS attacks, cross site scripting attack
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
    maxAge: 24 * 60 * 60 * 1000, // one hour
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // prevent XSS attacks, cross site scripting attack
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).send("User already exists");

    const newUser = await User.create({
      email,
      password,
      firstName,
      lastName,
      role,
    });
    newUser.password = undefined;

    const { accessToken, refreshToken } = generateTokens(newUser._id);
    await storeRefreshToken(newUser._id, refreshToken);

    setCookie(res, accessToken, refreshToken);

    res.status(201).send({ newUser, message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating user", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { accessToken, refreshToken } = generateTokens(user._id);

      await storeRefreshToken(user._id, refreshToken);
      setCookie(res, accessToken, refreshToken);

      user.password = undefined;
      res.status(200).json(user);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

      await redis.del(`refresh_token:${decoded.userId}`);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully");
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error logging out", error: error.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).send("No refresh token found");
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    const cachedRefreshToken = await redis.get(
      `refresh_token:${decoded.userId}`
    );

    if (refreshToken !== cachedRefreshToken) {
      return res.status(401).send("Unauthorized");
    }

    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Token refreshed successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error refreshing token", error: error.message });
  }
};

export const getProfileUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user profile", error: error.message });
  }
};

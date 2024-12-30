import User from "../models/user.model.js";
import mongoose from "mongoose";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const uploadImageProfileUser = async (req, res) => {
  try {
    const { originalname, mimetype, path, size } = req.file;
    console.log({ originalname, mimetype, path, size });
    
    // const fileStream = fs.createReadStream(path);

    /*   fs.readFile(req.files.file.path, function (err, data) {
      console.log(data);
      // Do something with the data (which holds the file information)
    }); */
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

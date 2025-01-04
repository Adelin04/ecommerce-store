import User from "../models/user.model.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
const __dirname = path.resolve();

const cloud_name = "dd6czwfu0";
const api_key = "486559355732722";
const api_secret = "SQ6DtZqQrK4EJwhH-P-EqmWfgfE";
const folderCloudinary = "ProfileImage";

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

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
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const url_upload_cloudinary = `${__dirname}\\uploads\\${req.params.id}-${originalname}`;

    // Upload the user profile image to Cloudinary and save the URL in the database
    await cloudinary.uploader
      .upload(url_upload_cloudinary, {
        resource_type: "image",
        folder: `${folderCloudinary}`,
      })
      .then(async (result) => {
        if (result)
          cloudinary.url(result.public_id, {
            max_width: 50,
            max_height: 50,
            crop: "scale",
            quality: "auto",
          });
        // Update the user's imageProfile
        user.imageProfile = result.secure_url;
        await user.save();
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error: error.message });
      })
      .finally(async () => {
        // Remove the uploaded file
        deleteFile(url_upload_cloudinary);
      });

    console.log(url_upload_cloudinary);

    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFile = (filePath) => {
  if (fs.exists(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }
    });
  }
};

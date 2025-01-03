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
  //  https://cloudinary.com/blog/uploading-images-node-js-cloudinary-node-sdk

  try {
    const { originalname, mimetype, path, size } = req.file;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const url_upload_cloudinary = `${__dirname}\\uploads\\${req.params.id}\\${originalname}`;
console.log(url_upload_cloudinary);

    const result = await cloudinary.uploader
      .upload(url_upload_cloudinary, {
        resource_type: "image",
        folder: `${folderCloudinary}`,
      })
      .then((result) =>
        result.url({
          max_width: 500,
          max_height: 500,
          crop: "scale",
          quality: "auto",
        })
      );
    console.log(result);

    // await cloudinaryConfig(
    //   cloud_name,
    //   api_key,
    //   api_secret,
    //   url_upload_cloudinary,
    //   folderCloudinary
    // );

    if (result) {
      user.imageProfile = result.secure_url;
      await user.save();
    }

    res.status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const cloudinaryConfig = async function (
  cloud_name,
  api_key,
  api_secret,
  urlImage,
  folder
) {
  // Configuration
  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
    urlImage,
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(urlImage, {
      resource_type: "image",
      folder: `${folder}`,
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  // Optimize delivery by resizing and applying auto-format and auto-quality
  // const optimizeUrl = cloudinary.url(public_id.toString(), {
  //   fetch_format: "auto",
  //   quality: "auto",
  // });

  // console.log(optimizeUrl);

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url(uploadResult.public_id, {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });

  console.log(autoCropUrl);
};

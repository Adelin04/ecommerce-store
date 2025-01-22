import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export const cloudinaryHandler = async (url_upload_cloudinary, folderCloudinary) => {
  let res = null
  if (fs.existsSync(url_upload_cloudinary)) {
     await cloudinary.uploader
      .upload(url_upload_cloudinary, {
        resource_type: "image",
        folder: `${folderCloudinary}`,
      })
      .then(async (result) => {
        res = result
        if (result)
          cloudinary.url(result.public_id, {
            max_width: 50,
            max_height: 50,
            crop: "scale",
            quality: "auto",
          });
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return { success: true, res,message: "Image uploaded successfully" };
  }
  return { success: false, message: "Image not uploaded" };
};

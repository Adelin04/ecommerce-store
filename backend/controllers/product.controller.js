import path from "path";
import Color from "../models/color.model.js";
import Currency from "../models/currency.model.js";
import Product from "../models/product.model.js";
import Size from "../models/size.model.js";
import Brand from "../models/brand.model.js";
import Gender from "../models/gender.model.js";
import { deleteFile } from "../utils/utils.js";
import { cloudinaryHandler } from "../lib/cloudinaryHandler.js";

const __dirname = path.resolve();
const folderCloudinary = "ProductImages";

export const createProduct = async (req, res) => {
  try {
    const image = req.files.map((image) => image.path);
    const { originalname, mimetype, path, size: sizeImage } = image;
    const {
      name,
      description,
      price,
      category,
      image: imageProduct,
      color,
      brand,
      seller,
      discount,
      stock,
      size,
      currency,
      code,
      gender,
    } = req.body;

    const url_upload_cloudinary = `${__dirname}\\uploads\\${originalname}`;
    const sizeExist = await Size.findOne({ size: size.toUpperCase() });
    const currencyExist = await Currency.findOne({ currency });
    const colorExist = await Color.findOne({ color });
    const brandExist = await Brand.findOne({ brand });
    const genderExist = await Gender.findOne({ gender });

    if (sizeExist && currencyExist && colorExist && brandExist && genderExist) {
      const newProductCreated = await Product.create({
        name,
        description,
        price,
        category,
        image: imageProduct,
        color: colorExist._id,
        brand: brandExist._id,
        seller,
        discount,
        stock,
        size: sizeExist._id,
        currency: currencyExist._id,
        code,
        gender: genderExist._id,
      });

      if (newProductCreated) {
        // Upload the user profile image to Cloudinary and save the URL in the database
        const cloudinaryRes = await cloudinaryHandler(
          url_upload_cloudinary,
          folderCloudinary
        );

        if (cloudinaryRes.success) {
          const product = await Product.findById(newProductCreated._id);
          product.image = cloudinaryRes.res.secure_url;
          await product.save();

          deleteFile(url_upload_cloudinary);

          res
            .status(201)
            .json({ product, message: "Product created successfully" });
        } else {
          res
            .status(500)
            .json({ message: "Error uploading image to Cloudinary" });
        }
      }
    } else {
      res.status(400).send("Size or currency not found");
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating product", error: error.message });
    console.log(error);
  }
  // res.status(201).json({ success: true, message: "Product created successfully" });
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("size")
      .populate("currency")
      .populate("color")
      .populate("gender");
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting products", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting product", error: error.message });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating product", error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({
      message: "Error getting products by category",
      error: error.message,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting product", error: error.message });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const products = await Product.find({ name: { $regex: req.params.query } });
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error searching products", error: error.message });
  }
};

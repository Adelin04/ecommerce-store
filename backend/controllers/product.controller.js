import path from "path";
import Color from "../models/color.model.js";
import Currency from "../models/currency.model.js";
import Product from "../models/product.model.js";
import Size from "../models/size.model.js";
import Brand from "../models/brand.model.js";
import Gender from "../models/gender.model.js";
import { deleteFile } from "../utils/utils.js";
import { cloudinaryHandler } from "../lib/cloudinaryHandler.js";
import ProductImages from "../models/productImages.js";

const __dirname = path.resolve();
const folderCloudinary = "ProductImages";

export const createProduct = async (req, res) => {
  // const image = req.files.map((image) => image.path);


  try {
    const { name, description, price, category, image: imageProduct, color, brand, seller, discount, stock, size, currency, code, gender, } = req.body;

    for (const image of req.files) {
      let url_upload_cloudinary = `${__dirname}\\uploads\\${image.originalname}`;
      console.log('url_upload_cloudinary', url_upload_cloudinary)

      const cloudinaryRes = await cloudinaryHandler(url_upload_cloudinary, folderCloudinary);
      url_upload_cloudinary = null

      if (cloudinaryRes.success) {

        await ProductImages.create({
          image: cloudinaryRes.res.secure_url,
        });

      }

      const newProductCreated = await Product.create({
        name: name,
        description: description,
        price: price,
        category: category,
        image: 'image',
        color: color,
        brand: brand,
        seller: seller,
        discount: discount,
        stock: stock,
        size: size,
        currency: currency,
        code: code,
        gender: gender,
        size: size,
      });
      console.log(newProductCreated);

    }
    res
      .status(201)
      .json({ message: "Product created successfully" });




    // const {
    //   name,
    //   description,
    //   price,
    //   category,
    //   image: imageProduct,
    //   color,
    //   brand,
    //   seller,
    //   discount,
    //   stock,
    //   size,
    //   currency,
    //   code,
    //   gender,
    // } = req.body;


    // const sizeExist = await Size.findOne({ size: size.toUpperCase() });
    // const currencyExist = await Currency.findOne({ currency });
    // const colorExist = await Color.findOne({ color });
    // const brandExist = await Brand.findOne({ brand });
    // const genderExist = await Gender.findOne({ gender });

    // if (sizeExist && currencyExist && colorExist && brandExist && genderExist) {
    //   const newProductCreated = await Product.create({
    //     name,
    //     description,
    //     price,
    //     category,
    //     image: imageProduct,
    //     color: colorExist._id,
    //     brand: brandExist._id,
    //     seller,
    //     discount,
    //     stock,
    //     size: sizeExist._id,
    //     currency: currencyExist._id,
    //     code,
    //     gender: genderExist._id,
    //   });

    // if (sizeExist && currencyExist && colorExist && brandExist && genderExist) {
    //   const newProductCreated = {
    //     name,
    //     description,
    //     price,
    //     category,
    //     images: imageProduct,
    //     color: colorExist._id,
    //     brand: brandExist._id,
    //     seller,
    //     discount,
    //     stock,
    //     size: sizeExist._id,
    //     currency: currencyExist._id,
    //     code,
    //     gender: genderExist._id,
    //   }

    //   if (newProductCreated) {




    //     // Upload product images to Cloudinary and save the URL in the database


    //     if (cloudinaryRes.success) {
    //       const product = await Product.findById(newProductCreated._id);
    //       product.image = cloudinaryRes.res.secure_url;
    //       await product.save();

    //       deleteFile(url_upload_cloudinary);

    //       res
    //         .status(201)
    //         .json({ product, message: "Product created successfully" });
    //     } else {
    //       res
    //         .status(500)
    //         .json({ message: "Error uploading image to Cloudinary" });
    //     }
    //   }
    // } else {
    //   res.status(400).send("Product was not created");
    // }
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

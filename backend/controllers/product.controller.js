import Color from "../models/color.model.js";
import Currency from "../models/currency.model.js";
import Product from "../models/product.model.js";
import Size from "../models/size.model.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      color,
      brand,
      seller,
      discount,
      stock,
      size,
      currency,
      code,
    } = req.body;
    const sizeexisting = await Size.findOne({ size: size.toUpperCase() });
    const currencyExisting = await Currency.findOne({ currency });
    const colorExisting = await Color.findOne({ color });

    if (sizeexisting && currencyExisting) {
      const product = await Product.create({
        name,
        description,
        price,
        category,
        image,
        color: colorExisting._id,
        brand,
        seller,
        discount,
        stock,
        size: sizeexisting._id,
        currency: currencyExisting._id,
        code,
      });

      res
        .status(201)
        .json({ product, message: "Product created successfully" });
    } else {
      res.status(400).send("Size or currency not found");
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating product", error: error.message });
  }
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


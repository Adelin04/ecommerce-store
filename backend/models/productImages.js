import mongoose from "mongoose";

const productImagesSchema = new mongoose.Schema({
    image: { type: String, trim: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      trim: true,
    },
});

const ProductImages = mongoose.model("ProductImages", productImagesSchema);

export default ProductImages;
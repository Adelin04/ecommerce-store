import mongoose from "mongoose";

const sizeStockSchema = new mongoose.Schema({
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
    required: true,
    trim: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    trim: true,
  },
});

const SizeStock = mongoose.model("SizeStock", sizeStockSchema);

export default SizeStock;

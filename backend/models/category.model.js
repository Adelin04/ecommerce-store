import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: { type: String, trim: true },
  image: { type: String, trim: true },
  gender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gender",
    required: true,
    trim: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;

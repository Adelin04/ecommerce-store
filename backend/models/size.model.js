import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  size: { type: String, trim: true },
});

const Size = mongoose.model("Size", sizeSchema);

export default Size;

import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  color: { type: String, trim: true },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;

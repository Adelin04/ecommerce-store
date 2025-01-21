import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    brand: { type: String, trim: true },
    image: { type: String, trim: true },
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
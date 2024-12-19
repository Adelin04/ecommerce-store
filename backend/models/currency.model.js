import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  currency: { type: String, trim: true },
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;

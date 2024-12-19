import Currency from "../models/currency.model.js";

export const createCurrency = async (req, res) => {
  try {
    const currency = await Currency.create(req.body);
    res.status(201).json(currency);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating currency", error: error.message });
  }
};

export const getAllCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.status(200).json(currencies);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting currencies", error: error.message });
  }
};

export const getCurrencyById = async (req, res) => {
  try {
    const currency = await Currency.findById(req.params.id);
    res.status(200).json(currency);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting currency", error: error.message });
  }
};

export const updateCurrencyById = async (req, res) => {
  try {
    const currency = await Currency.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(currency);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating currency", error: error.message });
  }
};

export const deleteCurrencyById = async (req, res) => {
  try {
    const currency = await Currency.findByIdAndDelete(req.params.id);
    res.status(200).json(currency);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting currency", error: error.message });
  }
};

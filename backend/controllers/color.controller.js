import Color from "../models/color.model.js";

export const createColor = async (req, res) => {
  try {
    const { color } = req.body;
    const existingColor = await Color.findOne({ color });
    if (existingColor) {
      return res.status(400).send("Color already exists");
    }
    const newColor = await Color.create({ color });
    res.status(201).json({ newColor, message: "Color created successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateColorById = async (req, res) => {
  try {
    const color = await Color.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteColorById = async (req, res) => {
  try {
    const color = await Color.findByIdAndDelete(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

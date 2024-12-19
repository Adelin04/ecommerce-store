import Size from "../models/size.model.js";

export const createSize = async (req, res) => {
  try {
    const size = await Size.create(req.body);
    res.status(201).json(size);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating size", error: error.message });
  }
};

export const getAllSizes = async (req, res) => {
  try {
    const sizes = await Size.find();
    res.status(200).json(sizes);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting sizes", error: error.message });
  }
};

export const getSizeById = async (req, res) => {
  try {
    const size = await Size.findById(req.params.id);
    res.status(200).json(size);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting size", error: error.message });
  }
};

export const updateSizeById = async (req, res) => {
  try {
    const size = await Size.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(size);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating size", error: error.message });
  }
};

export const deleteSizeById = async (req, res) => {
  try {
    const size = await Size.findByIdAndDelete(req.params.id);
    res.status(200).json(size);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting size", error: error.message });
  }
};

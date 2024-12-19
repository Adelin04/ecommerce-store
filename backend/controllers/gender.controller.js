import Gender from "../models/gender.model.js";

export const createGender = async (req, res) => {
  try {
    const gender = await Gender.create(req.body);
    res.status(201).json(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAllGenders = async (req, res) => {
  try {
    const genders = await Gender.find();
    res.status(200).json(genders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findById(req.params.id);
    res.status(200).json(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByIdAndDelete(req.params.id);
    res.status(200).json(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

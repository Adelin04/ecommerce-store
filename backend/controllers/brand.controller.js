import Brand from "../models/brand.model.js";

export const createBrand = async (req, res) => {
    try {
        const { brand, image } = req.body;
        
        const newBrand = await Brand.create({ brand, image });
        res.status(201).json({ brand, message: "Brand created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBrandById = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBrandById = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id);
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

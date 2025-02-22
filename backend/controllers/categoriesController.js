import Category from "../models/categories.js";

export const createCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create({ ...req.body });

        res.status(201).json({ success: true, data: newCategory });
    } catch (e) {
        next(e);
    }
};

export const getCategory = async (req, res, next) => {
    try {
        const Categorys = await Category.find();

        res.status(200).json({ success: true, data: Categorys });
    } catch (e) {
        next(e);
    }
};

export const updateCategoryById = async (req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({ success: true, data: updatedCategory });
    } catch (e) {
        next(e);
    }
};

export const deleteCategoryById = async (req, res, next) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (e) {
        next(e);
    }
};

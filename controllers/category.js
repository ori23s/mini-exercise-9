const categoryService = require('../services/category');

const createCategory = async (req, res) => {
    res.json(await categoryService.createCategory(req.body.name));
};

const getCategories = async (req, res) => {
    res.json(await categoryService.getCategories());
};

const getCategory = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    if (category) return res.json(category);
    res.status(404).json({ errors: ['Category not found'] });
};

const updateCategory = async (req, res) => {
    const category = await categoryService.updateCategory(req.params.id, req.body.name);
    if (category) return res.json(category);
    res.status(404).json({ errors: ['Category not found'] });
};

const deleteCategory = async (req, res) => {
    const category = await categoryService.deleteCategory(req.params.id);
    if (category) return res.json(category);
    res.status(404).json({ errors: ['Category not found'] });
};

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory };
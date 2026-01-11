const Category = require('../models/category');

const createCategory = async (name) => {
    return await new Category({ name }).save();
};

const getCategories = async () => { return await Category.find({}); };
const getCategoryById = async (id) => { return await Category.findById(id); };

const updateCategory = async (id, name) => {
    const category = await getCategoryById(id);
    if (!category) return null;
    category.name = name;
    return await category.save();
};

const deleteCategory = async (id) => {
    const category = await getCategoryById(id);
    if (!category) return null;
    await category.deleteOne();
    return category;
};

module.exports = { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };
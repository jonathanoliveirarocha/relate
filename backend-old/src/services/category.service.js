const Category = require("../models/Category");

const categoryService = {
  allCategories: async () => {
    const categories = await Category.find({});
    return categories;
  },

  showOneCategoryById: async (id) => {
    const category = await Category.findOne({ _id: id });
    if (category) {
      return category;
    } else {
      return null;
    }
  },

  showOneCategoryByName: async (name) => {
    const category = await Category.findOne({ name: name });
    if (category) {
      return category;
    } else {
      return null;
    }
  },

  createCategory: async (name) => {
    const newCategory = new Category({ name: name });
    await newCategory.save();
  },

  deleteById: async (id) => {
    await Category.findByIdAndDelete(id);
  },
};

module.exports = categoryService;

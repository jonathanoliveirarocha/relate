const Category = require("../models/Category");

const categoryService = {
  showOneCategoryById: async (id) => {
    const category = await Category.findOne({ _id: id });
    if (category) {
      return category;
    } else {
      return null;
    }
  },

  
};

module.exports = categoryService;

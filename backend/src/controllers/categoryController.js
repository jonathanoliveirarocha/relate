const categoryService = require("../services/category.service");
const articleService = require("../services/article.service");

const categoryController = {
  showAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.allCategories();
      return res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { category } = req.body;
      const existing = await categoryService.showOneCategoryByName(category);
      if (existing) {
        return res.status(409).json({ error: "Categoria já cadastrada!" });
      } else {
        await categoryService.createCategory(category);
        res.status(200).json({ status: "Categoria cadastrada com Sucesso!" });
      }
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await articleService.deleteManyByCategory(req.params.id);
      await categoryService.deleteById(req.params.id);
      res
        .status(200)
        .json({ status: "Categoria e artigos referentes foram deletados!" });
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },
};

module.exports = categoryController;

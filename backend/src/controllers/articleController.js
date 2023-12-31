const articleService = require("../services/article.service");
const categoryService = require("../services/category.service");
const { ObjectId } = require("mongodb");

const articleController = {
  showAllArticles: async (req, res) => {
    try {
      const articles = await articleService.showAllArticles();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  createArticle: async (req, res) => {
    try {
      const { title, category, content } = req.body;
      await articleService.createArticle({ title, category, content });
      res.status(200).json({ message: "Criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  showOneArticleById: async (req, res) => {
    try {
      const article = await articleService.showOneArticleById(req.params.id);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  updateOneArticleById: async (req, res) => {
    try {
      const { title, category, content } = req.body;
      await articleService.updateOneArticleById(req.params.id, {
        title,
        category,
        content,
      });
      res.status(200).json({ message: "Atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  deleteOneArticleById: async (req, res) => {
    try {
      await articleService.deleteOneArticleById(req.params.id);
      res.status(200).json({ message: "Excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },

  searchByKeywords: async (req, res) => {
    try {
      const keyword = req.params.keyword;
      const searchByKeyword = async (keyword) => {
        const articles = await articleService.searchByKeyword(keyword);
        res.json(articles);
      };

      if (keyword.length == 24) {
        const category = await categoryService.showOneCategoryById(
          new ObjectId(keyword)
        );
        if (category) {
          const articles = await articleService.findByCategory(keyword);
          res.json(articles);
        } else {
          searchByKeyword(keyword);
        }
      } else {
        searchByKeyword(keyword);
      }
    } catch (error) {
      res.status(500).json({ erro: "Erro interno!" });
    }
  },
};

module.exports = articleController;

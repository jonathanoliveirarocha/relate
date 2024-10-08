const articleService = require("../services/articleService");

const articleController = {
  getAllArticles: async (req, res) => {
    try {
      const articles = await articleService.getAllArticles();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar artigos!" });
    }
  },

  createArticle: async (req, res) => {
    try {
      const { title, category, content } = req.body;
      await articleService.createArticle({ title, category, content });
      res.status(201).json({ message: "Artigo criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar artigo!" });
    }
  },

  getArticleById: async (req, res) => {
    try {
      const articleId = req.params.id;

      const article = await articleService.getArticleById(articleId);

      if (!article) {
        return res.status(404).json({ error: "Artigo não encontrado!" });
      }

      await articleService.incrementViewCount(articleId);

      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar artigo!" });
    }
  },

  updateArticleById: async (req, res) => {
    try {
      const { title, category, content } = req.body;
      const updatedArticle = await articleService.updateArticleById(
        req.params.id,
        {
          title,
          category,
          content,
        }
      );
      if (!updatedArticle) {
        return res.status(404).json({ error: "Artigo não encontrado!" });
      }
      res.status(200).json({ message: "Artigo atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar artigo!" });
    }
  },

  deleteArticleById: async (req, res) => {
    try {
      const deletedArticle = await articleService.deleteArticleById(
        req.params.id
      );
      if (!deletedArticle) {
        return res.status(404).json({ error: "Artigo não encontrado!" });
      }
      res.status(200).json({ message: "Artigo excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir artigo!" });
    }
  },

  searchArticlesByKeyword: async (req, res) => {
    try {
      const keyword = req.params.keyword;

      const articles = await articleService.searchArticlesByKeyword(keyword);
      res.status(200).json(articles);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar artigos por palavra-chave!" });
    }
  },

  searchArticlesByCategory: async (req, res) => {
    try {
      const category = req.params.category;

      const articles = await articleService.getArticlesByCategory(category);
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar artigos por categoria!" });
    }
  },
};

module.exports = articleController;

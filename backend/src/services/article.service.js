const Article = require("../models/Article");

const articleService = {
  createArticle: async (articleData) => {
    try {
      const newArticle = new Article(articleData);
      await newArticle.save();
      return newArticle;
    } catch (error) {
      throw new Error("Erro ao criar o artigo!");
    }
  },

  getAllArticles: async () => {
    try {
      const articles = await Article.find({}).sort({ date: -1 }).limit(30);
      return articles;
    } catch (error) {
      throw new Error("Erro ao buscar os artigos!");
    }
  },

  getArticleById: async (id) => {
    try {
      const article = await Article.findById(id);
      if (!article) throw new Error("Artigo não encontrado!");
      return article;
    } catch (error) {
      throw new Error("Erro ao buscar o artigo!");
    }
  },
  
  incrementViewCount: async (id) => {
    await Article.findByIdAndUpdate(id, { $inc: { views: 1 } });
  },

  updateArticleById: async (id, updatedData) => {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      if (!updatedArticle) throw new Error("Artigo não encontrado!");
      return updatedArticle;
    } catch (error) {
      throw new Error("Erro ao atualizar o artigo!");
    }
  },

  deleteArticleById: async (id) => {
    try {
      const deletedArticle = await Article.findByIdAndDelete(id);
      if (!deletedArticle) throw new Error("Artigo não encontrado!");
      return deletedArticle;
    } catch (error) {
      throw new Error("Erro ao deletar o artigo!");
    }
  },

  searchArticlesByKeyword: async (keyword) => {
    try {
      const articles = await Article.find({
        $or: [
          { content: { $regex: keyword, $options: "i" } },
          { title: { $regex: keyword, $options: "i" } },
        ],
      }).sort({ date: -1 });
      return articles;
    } catch (error) {
      throw new Error("Erro ao buscar artigos por palavra-chave!");
    }
  },

  getArticlesByCategory: async (category) => {
    try {
      const articles = await Article.find({ category }).sort({ date: -1 });
      return articles;
    } catch (error) {
      throw new Error("Erro ao buscar artigos por categoria!");
    }
  },
};

module.exports = articleService;

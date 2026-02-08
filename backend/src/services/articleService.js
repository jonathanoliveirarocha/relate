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

  getAllArticles: async ({ offset, limit, order, category, q }) => {
    try {
      const filter = {};

      if (category) {
        filter.category = category;
      }

      if (q) {
        filter.$or = [
          { title: { $regex: q, $options: "i" } },
          { content: { $regex: q, $options: "i" } },
        ];
      }

      const sortOrder = order === "asc" ? 1 : -1;

      let query = Article.find(filter).sort({ date: sortOrder }).skip(offset);

      if (limit !== null) {
        query = query.limit(limit);
      }

      const [rows, total] = await Promise.all([
        query,
        Article.countDocuments(filter),
      ]);

      return { rows, total };
    } catch (error) {
      throw new Error("Erro ao buscar artigos!");
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
    await Article.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });
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

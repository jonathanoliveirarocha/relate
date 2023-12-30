const Article = require("../models/Article");

const articleService = {
  createArticle: async (article) => {
    const newArticle = new Article(article);
    await newArticle.save();
  },

  showAllArticles: async () => {
    const articles = await Article.find({}).sort({ data: -1 }).limit(30);
    return articles;
  },

  showOneArticleById: async (id) => {
    const article = await Article.findById(id);
    return article;
  },

  updateOneArticleById: async (article) => {
    await Article.findOneAndUpdate({ _id: id }, article, { new: true });
  },

  deleteOneArticleById: async (article) => {
    await Article.findOneAndUpdate({ _id: id }, article, { new: true });
  },

  searchByKeyword: async (keyword) => {
    const articles = await Article.find({
      $or: [
        { content: { $regex: keyword, $options: "i" } },
        { title: { $regex: keyword, $options: "i" } },
      ],
    }).sort({ data: -1 });
    return articles;
  },

  findByCategory: async (category) => {
    const articles = await Article.find({ category: keyword }).sort({
      data: -1,
    });
    return articles;
  },
};

module.exports = articleService;

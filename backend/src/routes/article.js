const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { verifyToken } = require("../utils/verifyToken");

router.get("/articles", articleController.getAllArticles);
router.post("/articles", verifyToken, articleController.createArticle);
router.get("/articles/:id", articleController.getArticleById);
router.put("/articles/:id", verifyToken, articleController.updateArticleById);
router.delete("/articles/:id", verifyToken, articleController.deleteArticleById);
router.get("/articles/search/keyword/:keyword", articleController.searchArticlesByKeyword);
router.get("/articles/search/category/:category", articleController.searchArticlesByCategory);

module.exports = router;

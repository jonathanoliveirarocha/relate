const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/", articleController.getAllArticles);
router.post("/", verifyToken, articleController.createArticle);
router.get("/:id", articleController.getArticleById);
router.put("/:id", verifyToken, articleController.updateArticleById);
router.delete("/:id", verifyToken, articleController.deleteArticleById);
router.get("/search/keyword/:keyword", articleController.searchArticlesByKeyword);
router.get("/search/category/:category", articleController.searchArticlesByCategory);

module.exports = router;

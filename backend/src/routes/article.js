const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { verifyToken } = require("../helpers/verifyToken");

router.get("/showall", articleController.showAllArticles);
router.post("/create", verifyToken, articleController.createArticle);
router.get("/showone/:id", articleController.showOneArticleById);
router.put("/update/:id", verifyToken, articleController.updateOneArticleById);
router.delete("/delete/:id", verifyToken, articleController.deleteOneArticleById);
router.get("/search/keyword/:keyword", articleController.searchByKeywords);

module.exports = router;

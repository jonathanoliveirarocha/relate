const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.get("/show", (req, res) => {
  Article.find({})
    .sort({ data: -1 })
    .limit(30)
    .then((articles) => {
      return res.status(500).json(articles);
    })
    .catch((error) => {
      return res.status(500).json({ error: "Erro ao carregar artigos!" });
    });
});

router.post("/create", (req, res) => {
  const { title, category, content } = req.body;
  const newArticle = new Article({ title, category, content });
  newArticle.save().then(() => {
    return res.status(200).json({ status: "Artigo Salvo com Sucesso!" });
  });
});

module.exports = router;

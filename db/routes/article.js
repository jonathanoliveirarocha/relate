const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/create", (req, res) => {
  const { title, category, content } = req.body;
  const newArticle = new Article({ title, category, content });
  newArticle.save().then(() => {
    return res.status(200).json({ error: "Artigo Salvo com Sucesso!" });
  });
});

module.exports = router;

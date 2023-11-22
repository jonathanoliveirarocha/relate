const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/create", (req, res) => {
  const { title, category, content } = req.body;
  const newArticle = new Article({ title, category, content });
  newArticle.save().then(() => {
    return res.status(200).json({ status: "Artigo Salvo com Sucesso!" });
  });
});

router.get("/showall", (req, res) => {
  Article.find({})
    .sort({ data: -1 })
    .limit(30)
    .then((articles) => {
      return res.status(200).json(articles);
    })
    .catch(() => {
      return res.status(500).json({ error: "Erro ao carregar artigos!" });
    });
});

router.get("/showone/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      return res.status(200).json(article);
    })
    .catch(() => {
      return res.status(500).json({ error: "Erro ao carregar artigo!" });
    });
});

router.put("/update/:id", (req, res) => {
  const { title, category, content } = req.body;
  console.log(category )
  Article.findOneAndUpdate(
    { _id: req.params.id },
    { title, category, content },
    { new: true }
  )
    .then((article) => {
      return res.status(200).json(article);
    })
    .catch(() => {
      return res.status(500).json({ error: "Erro ao atualizar artigo!" });
    });
});

router.delete("/delete/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({ status: "Deletado com sucesso!" });
    })
    .catch(() => {
      return res.status(500).json({ error: "Erro ao deletar artigo!" });
    });
});

module.exports = router;

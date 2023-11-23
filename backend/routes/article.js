const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/create", async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const newArticle = new Article({ title, category, content });
    await newArticle.save();
    res.status(200).json({ message: "Criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno do servidor!" });
  }
});

router.get("/showall", async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ data: -1 }).limit(30);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ erro: "Erro interno do servidor!" });
  }
});

router.get("/showone/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ erro: "Erro interno do servidor!" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { title, category, content } = req.body;
    await Article.findOneAndUpdate(
      { _id: req.params.id },
      { title, category, content },
      { new: true }
    );
    res.status(200).json({ message: "Atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno do servidor!" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno do servidor!" });
  }
});

module.exports = router;

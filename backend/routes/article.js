const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const Category = require("../models/Category");
const { ObjectId } = require("mongodb");
const { verifyToken } = require("../helpers/verifyToken");

router.post("/create", verifyToken, async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const newArticle = new Article({ title, category, content });
    await newArticle.save();
    res.status(200).json({ message: "Criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.get("/showall", async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ data: -1 }).limit(30);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.get("/showone/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const { title, category, content } = req.body;
    await Article.findOneAndUpdate(
      { _id: req.params.id },
      { title, category, content },
      { new: true }
    );
    res.status(200).json({ message: "Atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.get("/search/keyword/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const searchByKeyword = async (keyword) => {
      const articles = await Article.find({
        $or: [
          { content: { $regex: keyword, $options: "i" } },
          { title: { $regex: keyword, $options: "i" } },
        ],
      }).sort({ data: -1 });
      res.json(articles);
    };

    if (keyword.length == 24) {
      const category = await Category.findOne({ _id: new ObjectId(keyword) });
      if (category) {
        const articles = await Article.find({ category: keyword });
        res.json(articles);
      } else {
        searchByKeyword(keyword);
      }
    } else {
      searchByKeyword(keyword);
    }
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

module.exports = router;

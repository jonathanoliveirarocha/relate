const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Article = require("../models/Article");
const { verifyToken } = require("../helpers/verifyToken");

router.get("/showall", async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.post("/create", verifyToken, async (req, res) => {
  try {
    const { category } = req.body;
    const existing = await Category.findOne({ name: category });
    if (existing) {
      return res.status(409).json({ error: "Categoria já cadastrada!" });
    } else {
      const saveNewCategory = new Category({ name: category });
      await saveNewCategory.save();
      res.status(200).json({ status: "Categoria cadastrada com Sucesso!" });
    }
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    await Article.deleteMany({ category: req.params.id });
    await Category.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "Categoria e artigos referentes foram deletados!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno!" });
  }
});

module.exports = router;

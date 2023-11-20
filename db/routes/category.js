const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Article = require("../models/Article");

router.post("/create", (req, res) => {
  const { category } = req.body;
  Category.findOne({ name: category })
    .then((existing) => {
      if (existing) {
        return res.status(400).json({ error: "Categoria já cadastrada!" });
      }
      const saveNewCategory = new Category({ name: category });
      saveNewCategory.save().then(() => {
        return res
          .status(200)
          .json({ status: "Categoria cadastrada com Sucesso!" });
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Article.deleteMany({ category: req.params.id })
    .then(() => {
      Category.findByIdAndDelete(req.params.id)
        .then(() => {
          return res
            .status(200)
            .json({
              status: "Categoria e artigos referentes foram deletados!",
            });
        })
        .catch(() => {});
    })
    .catch(() => {
      return res.status(500).json({ error: "Erro ao deletar categoria!" });
    });
});

module.exports = router;

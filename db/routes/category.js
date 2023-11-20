const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

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

module.exports = router;

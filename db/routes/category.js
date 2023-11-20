const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const mongoose = require("mongoose");

router.post("/create", (req, res) => {
  const newCategory = req.body.name;

  Category.findOne({ name: newCategory })
    .then((category) => {
      if (category) {
        return res.status(400).json({ error: "Categoria já cadastrada!" });
      }
      const saveNewCategory = new Category({ name: newCategory });
      saveNewCategory.save().then(() => {
        return res
          .status(200)
          .json({ error: "Categoria cadastrada com Sucesso!" });
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../helpers/verifyToken");
const categoryController = require("../controllers/categoryController");

router.get("/showall", categoryController.showAllCategories);
router.post("/create", verifyToken, categoryController.createCategory);
router.delete("/delete/:id", verifyToken, categoryController.createCategory);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../helpers/verifyToken");
const authController = require("../controllers/authController");

router.post("/admin", authController.submitForm);
router.post("/validate", verifyToken, authController.validadeUser);

module.exports = router;

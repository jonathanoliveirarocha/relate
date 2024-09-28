const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/verifyToken");
const authController = require("../controllers/authController");

router.post("/auth/admin/login", authController.submitAdminLoginForm); 
router.post("/auth/validate", verifyToken, authController.validateAuthenticatedUser); 

module.exports = router;
const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/admin", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "http://google.com/",
    failureRedirect: "https://github.com/",
  })(req, res, next);
});

module.exports = router;

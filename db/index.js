const express = require("express");
const app = express();
require("./config/connection");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("./config/auth")(passport);
const auth = require("./routes/auth");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_KEY || "<SECRET-KEY>",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

app.listen(PORT, () => {
  console.log(`DB running: http://localhost:${PORT}`);
});

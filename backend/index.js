const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("./config/connection");
require("./config/auth")(passport);
const auth = require("./routes/auth");
const category = require("./routes/category");
const article = require("./routes/article");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

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
app.use("/category", category);
app.use("/article", article);

app.listen(PORT, () => {
  console.log(`DB running: http://localhost:${PORT}`);
});

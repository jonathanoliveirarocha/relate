const express = require("express");
const app = express();
const cors = require("cors");
require("./src/config/db");
const auth = require("./src/routes/auth");
const category = require("./src/routes/category");
const article = require("./src/routes/article");
const PORT = process.env.PORT | 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/auth", auth);
app.use("/category", category);
app.use("/article", article);

app.listen(PORT, () => {
  console.log(`DB running: http://localhost:${PORT}`);
});

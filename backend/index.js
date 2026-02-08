const express = require("express");
const cors = require("cors");
const app = express();
require("./src/config/db");
const authRoutes = require("./src/routes/auth");
const articleRoutes = require("./src/routes/article");

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors(
    process.env.AUTHORIZED_DOMAINS.split(",").map((domain) => domain.trim()),
  ),
);

app.use("/auth", authRoutes);
app.use("/articles", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

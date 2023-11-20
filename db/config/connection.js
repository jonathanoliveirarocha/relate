const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.DB_PASSWORD;

mongoose.connect(uri);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", () => {
  console.log("Connection to MongoDB established!");
});

module.exports = db;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
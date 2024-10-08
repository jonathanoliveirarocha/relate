const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  publishedAt: { 
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  viewCount: { 
    type: Number,
    default: 0,
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

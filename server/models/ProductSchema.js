const mongoose = require("mongoose");

const Product = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Product", Product);

const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: {
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

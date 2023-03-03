const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Brand: {
      type: String,
    },
    Price: {
      type: String,
      required: true,
    },
    Rating: {
      type: String,
    },
    Image: {
      type: String,
      required: true,
    },
    Link: {
      type: String,
      required: true,
    },
    BundleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bundle",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", schema);

module.exports = Product;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  isNew: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

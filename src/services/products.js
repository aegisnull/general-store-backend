const Product = require("../models/product");

exports.getProducts = async () => {
  let products = await Product.find().exec();
  return products;
};

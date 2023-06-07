const Product = require("../models/product");

exports.getProducts = async () => {
  let products = await Product.find().exec();
  return products;
};

exports.createProduct = async (requestBody) => {
  const product = new Product({
    name: requestBody.name,
    image: requestBody.image,
    price: requestBody.price,
    isNew: requestBody.isNew,
    description: requestBody.description,
  });
  return await product.save();
};

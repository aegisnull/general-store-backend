const Product = require("../models/product");

exports.getProducts = async () => {
  let products = await Product.find().lean().exec();
  return products;
};

exports.getProductById = async (id) => {
  let product = await Product.findById(id).lean().exec();
  return product;
};

exports.createProduct = async (requestBody) => {
  const product = new Product({
    name: requestBody.name,
    image: requestBody.image,
    price: requestBody.price,
    description: requestBody.description,
  });
  return await product.save();
};

exports.updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
  })
    .lean()
    .exec();
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id).lean().exec();
};

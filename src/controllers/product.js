const ProductService = require("../services/products");

exports.getProducts = async (req, res) => {
  try {
    let products = await ProductService.getProducts();
    res.json({ products: products });
  } catch (error) {
    console.error("error", error);
    res
      .status(500)
      .json({ message: "Products were not retrieved successfully" });
  }
};

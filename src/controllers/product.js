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

exports.getProductById = async (req, res) => {
  try {
    let product = await ProductService.getProductById(req.params.id);
    res.json({ product: product });
  } catch (error) {
    console.error("error", error);
    res.status(404).json({ message: "Product was not found" });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    let productSaved = await ProductService.createProduct(req.body);
    res
      .status(201)
      .json({ message: "Product created", productSaved: productSaved });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({ message: "Product was not created" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const updatedProduct = await ProductService.updateProduct(id, productData);
    res.status(200).json({ message: "Product updated", updatedProduct });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Product was not updated" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Product was not deleted" });
  }
}
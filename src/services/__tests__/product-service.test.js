const Chance = require("chance");

const ProductService = require("../products");

const Product = require("../../models/product");

const chance = new Chance();

jest.mock("../../models/product");

describe("When calling the ProductService method", () => {
  let id, productData, updatedProduct;

  beforeEach(() => {
    id = chance.guid();
    productData = {
      name: chance.name(),
      price: chance.floating(),
      description: chance.sentence(),
      image: chance.url(),
    };
    updatedProduct = productData;

    Product.findByIdAndUpdate = jest.fn().mockReturnThis();
    Product.lean = jest.fn().mockReturnThis();
    Product.exec = jest.fn().mockResolvedValue(updatedProduct);
  });

  test("updateProduct should call Product.findByIdAndUpdate with the id, product data and return document new property", async () => {
    // Act
    await ProductService.updateProduct(id, productData, { new: true });

    // Assert
    expect(Product.findByIdAndUpdate).toHaveBeenCalledWith(id, productData, {
      new: true,
    });
  });

  test("should call Product.lean", async () => {
    // Act
    await ProductService.updateProduct(id, productData);

    // Assert
    expect(Product.lean).toHaveBeenCalled();
  });

  test("should call Product.exec", async () => {
    // Act
    await ProductService.updateProduct(id, productData);

    // Assert
    expect(Product.exec).toHaveBeenCalled();
  });

  test("should return the updated product", async () => {
    // Act
    const result = await ProductService.updateProduct(id, productData);

    // Assert
    expect(result).toEqual(updatedProduct);
  });
});

describe("When calling the product delete method", () => {
  let id;

  beforeEach(() => {
    id = chance.string();
    Product.findByIdAndDelete = jest.fn().mockReturnThis();
    Product.exec = jest.fn().mockResolvedValue();
  });

  test("should call deleteProduct with an ID property", async () => {
    // Arrange
    await ProductService.deleteProduct(id);

    // Assert
    expect(Product.findByIdAndDelete).toHaveBeenCalledWith(id);
  });
});

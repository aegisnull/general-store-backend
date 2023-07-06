const Chance = require("chance");

// What we want to test
const ProjectController = require("../product");

// Dependencies
const ProductService = require("../../services/products");

const chance = new Chance();

// Mock the dependencies
jest.mock("../../services/products");

describe("When calling update Product Controller", () => {
  let id, productData, updatedProduct, req, res;

  beforeEach(() => {
    id = chance.guid();
    productData = {
      name: chance.name(),
      image: chance.url(),
      price: chance.integer({ min: 1, max: 100 }),
      isNew: chance.bool(),
      description: chance.sentence(),
    };
    updatedProduct = productData;
    req = {
      params: {
        id,
      },
      body: productData,
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    global.console = { log: jest.fn(), error: jest.fn() };

    ProductService.updateProduct = jest.fn().mockResolvedValue(updatedProduct);
  });

  test("Should call ProductService.getProducts and get all products", async () => {
    // Act
    await ProjectController.getProducts(req, res);

    // Assert
    expect(ProductService.getProducts).toHaveBeenCalled();
  });

  test("In case of failure, should call res.status with a 500 status code", async () => {
    // Arrange
    const error = new Error();
    ProductService.getProducts = jest.fn().mockRejectedValue(error);

    // Act
    await ProjectController.getProducts(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
  });

  test("Then it should call ProductService.updateProduct with id and productData", async () => {
    // Act
    await ProjectController.updateProduct(req, res);

    // Assert
    expect(ProductService.updateProduct).toHaveBeenCalledWith(id, productData);
  });

  test("Should call res.status with a 200 status code", async () => {
    // Act
    await ProjectController.updateProduct(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test("Should call res.json with a success message and updated product", async () => {
    // Act
    await ProjectController.updateProduct(req, res);

    // Assert
    expect(res.json).toHaveBeenCalledWith({
      message: "Product updated",
      updatedProduct,
    });
  });

  test("Should call res.status with a 500 status code if ProductService.updateProduct throws an error", async () => {
    // Arrange
    const error = new Error();
    ProductService.updateProduct = jest.fn().mockRejectedValue(error);

    // Act
    await ProjectController.updateProduct(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
  });
});

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
    ProductService.updateProduct = jest.fn().mockResolvedValue(updatedProduct);
  });

  test("Then it should call ProductService.updateProduct with id and productData", async () => {
    // Act
    await ProjectController.updateProduct(req, res);

    // Assert
    expect(ProductService.updateProduct).toHaveBeenCalledWith(id, productData);
  });
});

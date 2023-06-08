const Chance = require("chance");

// What we want to test
const ProjectController = require("../product");

// Dependencies
const ProductService = require("../../services/products");

const chance = new Chance();

// Mock the dependencies
jest.mock("../../services/products");

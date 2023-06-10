const request = require("supertest");
const app = require("../../../app").app;
const Product = require("../../models/product");

const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /products", () => {
  test("Should return all products in database", async () => {
    const initialProducts = [
      {
        name: "Colombian Dark Roast",
        image:
          "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-8.png?v=1675662787&width=720",
        price: 12.99,
        isNew: false,
        description:
          "Rich and flavorful coffee made from the finest Colombian coffee beans. It has a smooth, medium body and a deep, chocolatey flavor. It is perfect for those who enjoy a bold cup of coffee.",
      },
      {
        name: "Ethiopian Yirgacheffe",
        image:
          "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-7.png?v=1675662588&width=720",
        price: 14.99,
        isNew: false,
        description:
          "Single-origin coffee from the Yirgacheffe region of Ethiopia. It is known for its unique, distinctive flavor profile, which includes notes of floral citrus and a clean mouthfeel.",
      },
      {
        name: "Arabica Coffee",
        image:
          "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-4.png?v=1675661896&width=720",
        price: 13.99,
        isNew: false,
        description:
          "Type of coffee that is known for its smooth, sweet flavor. It is the most popular type of coffee in the world, and it is grown in many different countries around the globe.",
      },
      {
        name: "Black Tea",
        image:
          "https://cdn.shopify.com/s/files/1/0566/9965/0230/files/img-4_720x_680bc1c2-2c6d-4b9d-81dd-55808867b5ed.png?v=1640174980",
        price: 12.99,
        isNew: false,
        description:
          "Black tea is a strong, flavorful tea made from fully oxidized leaves of the Camellia sinensis plant. It is often enjoyed with milk and sugar.",
      },
      {
        name: "Craft Beans",
        image:
          "https://dt-cafeley.myshopify.com/cdn/shop/files/specification.png?v=1665815885&width=275",
        price: 14.99,
        isNew: false,
        description:
          "If you are looking for a delicious and unique cup of coffee, I encourage you to try a single-origin coffee. You may be surprised at how much you enjoy it!.",
      },
      {
        name: "Robusta Coffee",
        image:
          "https://cdn.shopify.com/s/files/1/1815/2235/products/5lb_1000x.png?v=1584727129",
        price: 14.99,
        isNew: false,
        description:
          "If you are looking for a strong, bitter cup of coffee, Robusta coffee is a good option. It is also a good choice if you are looking for a coffee that is affordable and easy to find.",
      },
    ];

    await Product.deleteMany(); // Delete all products in database
    await Product.insertMany(initialProducts); // Insert initial products

    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
    const products = response.body.products;
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBe(initialProducts.length);
  });
});

describe("POST /projects", () => {
  test("Should create a new project in DB and return a created status code", async () => {
    const newProduct = {
      name: "Colombian Dark Roast",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-8.png?v=1675662787&width=720",
      price: 12.99,
      isNew: false,
      description:
        "Rich and flavorful coffee made from the finest Colombian coffee beans. It has a smooth, medium body and a deep, chocolatey flavor. It is perfect for those who enjoy a bold cup of coffee.",
    };

    const response = await request(app).post("/products").send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body.productSaved).toMatchObject(newProduct);
    await Product.findByIdAndDelete(response.body.productSaved._id);
  });

  test("Should return a 400 code and an error message when required fields are missing", async () => {
    const testProduct = {
      name: "Colombian Dark Roast",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-8.png?v=1675662787&width=720",
      price: 12.99,
      isNew: false,
      description:
        "Rich and flavorful coffee made from the finest Colombian coffee beans. It has a smooth, medium body and a deep, chocolatey flavor. It is perfect for those who enjoy a bold cup of coffee.",
    };

    const { name, ...incompleteProduct } = testProduct;
    const response = await request(app)
      .post("/products")
      .send(incompleteProduct);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Product was not created");
  });
});

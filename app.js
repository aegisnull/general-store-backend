const express = require("express");
const mongoose = require("mongoose");
const ProductRoutes = require("./src/routes/products");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/products", ProductRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

connectDB();

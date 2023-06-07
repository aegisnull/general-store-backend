const express = require("express");
const mongoose = require("mongoose");
const ProductRoutes = require("./src/routes/products");
const app = express();

app.use(express.json());
app.use("/products", ProductRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://generalstore:generalstore@cluster0.wtowomx.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(3000, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

connectDB();

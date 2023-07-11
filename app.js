const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const ProductRoutes = require("./src/routes/products");
const OrderRoutes = require("./src/routes/orders");
const UserRoutes = require("./src/routes/users");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", ProductRoutes);
app.use("/orders", OrderRoutes);
app.use("/users", UserRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the application on connection error
  }
};

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDB();
});

module.exports = { app, server };

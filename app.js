const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const ProductRoutes = require("./src/routes/products");
const app = express();
require("dotenv").config();
const OrderRoutes = require("./src/routes/orders");
const UserRoutes = require("./src/routes/users");

app.use(cors());
app.use(express.json());
app.use("/products", ProductRoutes);
app.use("/orders", OrderRoutes);
app.use("/users", UserRoutes);

// default message for root path
app.get("/", (req, res) => {
  res.send("Welcome to the General Store API");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
  connectDB();
});

module.exports = { app, server };

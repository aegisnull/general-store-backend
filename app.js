const express = require("express");
const mongoose = require("mongoose");
const ProductRoutes = require("./src/routes/products");
const app = express();

app.use(express.json());

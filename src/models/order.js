const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

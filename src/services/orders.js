const Order = require("../models/order");

exports.createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

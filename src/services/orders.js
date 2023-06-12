const Order = require("../models/order");

exports.createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

exports.getOrders = async () => {
  try {
    const orders = await Order.find().lean().exec();
    return orders;
  } catch (error) {
    throw new Error("Failed to retrieve orders.");
  }
};

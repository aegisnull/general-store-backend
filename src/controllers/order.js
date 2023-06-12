const OrderService = require("../services/orders");

exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const order = await OrderService.createOrder(orderData);
    res.status(201).json({ message: "Order created", order });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({ message: "Order was not created" });
  }
};

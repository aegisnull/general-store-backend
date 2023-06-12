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

exports.getOrders = async (req, res) => {
  try {
    let orders = await OrderService.getOrders();
    res.json({ orders: orders });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "Orders were not retrieved successfully" });
  }
};

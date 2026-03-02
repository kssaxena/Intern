import Order from "../Models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products.productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "products.productId"
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json({ message: "Order updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
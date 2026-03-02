import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  image: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
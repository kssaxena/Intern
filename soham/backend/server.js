import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));
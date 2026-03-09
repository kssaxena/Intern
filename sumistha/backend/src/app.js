import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// connect routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API working");
});

export default app;
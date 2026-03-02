import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/marketplace");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
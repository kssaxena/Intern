import User from "../models/user.models.js";

export const registerUser = async (req, res) => {
  try {

    const { name, email, phone, password } = req.body;

    // check if all fields exist
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, Email and Password are required"
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // create new user
    const user = await User.create({
      name,
      email,
      phone,
      password
    });

    res.status(201).json({
      message: "User registered successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
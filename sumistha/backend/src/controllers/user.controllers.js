import User from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/TokenGenerator.js";
import bcrypt from "bcryptjs";

/* ================= REGISTER USER ================= */

export const registerUser = asyncHandler(async (req, res) => {

  const { name, email, phone, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  res.status(201).json(
    new ApiResponse(201, {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      token: generateToken(user._id),
    })
  );

});


/* ================= LOGIN USER ================= */

export const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  res.json(
    new ApiResponse(200, {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      token: generateToken(user._id),
    })
  );

});


/* ================= UPDATE USER PROFILE ================= */

export const updateUser = asyncHandler(async (req, res) => {

  const { name, phone, location } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.name = name || user.name;
  user.phone = phone || user.phone;
  user.location = location || user.location;

  const updatedUser = await user.save();

  res.json(
    new ApiResponse(200, {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      location: updatedUser.location,
    })
  );

});
import Jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { UploadImages } from "../utils/imageKit.io.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const AccessToken = await user.generateAccessToken();
    const RefreshToken = await user.generateRefreshToken();

    return { AccessToken, RefreshToken };
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens",
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    contact,
    email,
    password,
    // image,
  } = req.body;

  // Validate required fields
  if (!name || !contact || !email || !password) {
    throw new ApiError(400, "Please provide all required fields");
  }
  // Check for existing user
  const existingUser = await User.findOne({
    $or: [{ contact }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, "User with same contact, email already exists");
  }

  const imageFile = req.file;
  if (!imageFile) throw new ApiError(404, "Image file not found!");
  const images = await UploadImages(
    imageFile.filename,
    {
      folderStructure: `all-user/${name.split(" ").join("-")}/logo_`,
    },
    [`${name.split(" ").join("-")}-logo_`],
  );
  console.log(images);

  if (!images)
    throw new ApiError(
      500,
      "Failed to upload image due to internal error! Please try again",
    );

  // Create new user
  const user = await User.create({
    name,
    contact,
    email,
    password,
    image: {
      url: images.url,
      fileId: images.fileId,
      altText: name,
    },
  });

  // Generate tokens
  const { AccessToken, RefreshToken } = await generateAccessAndRefreshTokens(
    user._id,
  );

  // Send response
  res
    .status(201)
    .cookie("RefreshToken", RefreshToken)
    .cookie("AccessToken", AccessToken)
    .json(
      new ApiResponse(
        201,
        {
          user,
          tokens: {
            AccessToken,
            RefreshToken,
          },
        },
        "User registration completed successfully",
      ),
    );
});

const loginUser = asyncHandler(async (req, res) => {
  const { contact, password } = req.body;
  console.log(contact, password);

  if (!contact || !password) {
    throw new ApiError(400, "Please provide all required fields");
  }
  if (contact.length !== 10) {
    throw new ApiError(
      400,
      "Incorrect credentials, contact contact must be 10 digits",
    );
  }
  const user = await User.findOne({ contact });

  if (!user) throw new ApiError(404, "Invalid contact contact");

  const isValid = await user.isPasswordCorrect(password);

  if (!isValid) throw new ApiError(401, "Entered Credential is not correct");

  const { AccessToken, RefreshToken } = await generateAccessAndRefreshTokens(
    user?._id,
  );
  return res
    .status(201)
    .cookie("RefreshToken", RefreshToken)
    .cookie("AccessToken", AccessToken)
    .json(
      new ApiResponse(
        201,
        {
          user,
          tokens: {
            AccessToken,
            RefreshToken,
          },
        },
        "You are Logged In successfully",
      ),
    );
});

const LogOutUser = asyncHandler(async (req, res) => {
  const LoggedOutUser = await User.findOneAndUpdate(req.user._id, {
    $set: {
      refreshToken: "1",
    },
  });

  return res.status(200).clearCookie("AccessToken").clearCookie("RefreshToken");
});

const regenerateRefreshToken = asyncHandler(async (req, res) => {
  const token = req.cookies.RefreshToken || req.body.RefreshToken;

  if (!token) throw new ApiError(401, "Unauthorized request");

  const DecodedToken = Jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

  const user = await User.findById(DecodedToken._id).select(
    "-password -refreshToken",
  );

  if (!user) throw new ApiError(400, "Invalid Token");

  const { RefreshToken, AccessToken } = await generateAccessAndRefreshTokens(
    user._id,
  );

  return res
    .status(201)
    .cookie("RefreshToken", RefreshToken)
    .cookie("AccessToken", AccessToken)
    .json(
      new ApiResponse(
        201,
        {
          user,
          tokens: {
            AccessToken,
            RefreshToken,
          },
        },
        "Refresh token regenerated successfully",
      ),
    );
});

export { registerUser, loginUser, LogOutUser, regenerateRefreshToken };

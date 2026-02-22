import { Router } from "express";
import {
  registerUser,
  loginUser,
  LogOutUser,
  regenerateRefreshToken,
} from "../controllers/user.controllers.js";
import { VerifyUser } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

// login, register, re-login
router.route("/register").post(upload.single("image"), registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-tokens").post(VerifyUser, regenerateRefreshToken);

//secured routes
router.route("/logout").post(VerifyUser, LogOutUser);
// router.route("/user/get-user-details/:userId").get(GetUserDetails);

export default router;

import express  from 'express';
import tryCatch from '../Utils/tryCatch.js';
import {
  GetProfile,
  Login,
  Register,
  verifyOtp,
  resendOtp,
} from "../Controllers/user.controller.js";
import {body} from "express-validator"
import logerAuthenticate from '../Middlewares/isLoggedInUser.js';

const router = express.Router();

router.post("/register",
  [
    body("name")
      .isLength({min: 3})
      .withMessage("Name must above of 3 Charecters"),
    body("email")
      .isEmail(),
    body("password")
      .isLength({min:6})
      .withMessage("Password must above of 6 Charecters")
  ],tryCatch(Register)
);

router.post("/login",
  [
    body("email")
      .isEmail()
  ],
  tryCatch(Login)
);

router.post(
  "/verify-otp",
  [
    body("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("otp must be 6 charecters"),
    body("email")
      .isEmail(),
  ],
  tryCatch(verifyOtp)
);

router.post("/resend-otp", 
  [
    body("email")
      .isEmail()
  ], 
  tryCatch(resendOtp)
);

router.get("/profile", logerAuthenticate, GetProfile);
export default router;
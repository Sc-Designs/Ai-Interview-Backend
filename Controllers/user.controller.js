import RegisterUserService from "../Services/user.service.js";
import cleanUpUser from "../Utils/cleanUpUser.js";
import userFinder from "../Utils/userFinder.js";
import { validationResult } from "express-validator";
import sendEmail from './../Utils/EmailSender.js';
import createOtp from "../Utils/OtpMaker.js";
import crypto  from 'crypto';

const Register = async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    const {name, email, password} = req.body;
    const ExistingUser = await userFinder({ key: "email", query: email });
    if(ExistingUser){
        return res.status(406).json({message: "User already Exist, please Login."})
    }
    const User = await RegisterUserService({
      name,
      email,
      password,
    });
    return res.status(201).json({ message: "User registered successfully", user: User });
}
const Login = async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    const {email, password} = req.body;
    const User = await userFinder({ key: "email", query: email, includePassword: true });
    if(!User) return res.status(404).json({message: "email or password something wrong!"})
      const isMatch = await User.ComparePassword(password);
    if(!isMatch) return res.status(404).json("email or password something wrong!");
    const otp = createOtp(6);
    const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
    User.otp = hashedOtp;
    User.otpExpiry = Date.now() + 60 * 1000;
    await User.save();
    res.status(200).json("Valid");
    await sendEmail({
      email,
      sub:"OTP Recive",
      mess:`Your OTP is ${otp}`
    })
}

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const user = await userFinder({ key: "email", query:email });
  if(!user) return res.status(404).json({ message: "email or password something wrong!" });
  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
  if (
    !user ||
    user.otp !== hashedOtp || 
    user.otpExpiry < Date.now()
  ) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }
  user.otp = null;
  user.otpExpiry = null;
  await user.save();
  const token = user.GenerateToken();
  res.json({
    message: "OTP verified successfully",
    token,
    user: cleanUpUser(user),
  });
};

const resendOtp = async (req, res) => {
  const { email } = req.body;
  const user = await userFinder({ key: "email", query:email });
  if(!user) return res.status(404).json({ message: "Something Wrong! try again." });
  const otp = createOtp(6);
  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");
  user.otp = hashedOtp;
  user.otpExpiry = Date.now() + 60 * 1000;
  await user.save();
  res.status(200).json({message:"OTP Resend, Succesfully!"})
  await sendEmail({
    email,
    sub: "Resend OTP",
    mess: `Your Resend OTP is ${otp}`,
  });
};

const GetProfile = async (req, res) => {
  const user = await userFinder({key:"_id", query: req.user._id, includePopulate: true})
  const userCleaned = cleanUpUser(user);
  return res.status(200).json(userCleaned);
};

export { Register, Login, verifyOtp, GetProfile, resendOtp };
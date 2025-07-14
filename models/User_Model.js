import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["candidate", "admin", "interviewer"],
      default: "candidate",
      index: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    result: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
    otp: { 
      type: String,
      default: null
    },
    otpExpiry: { 
      type: Date,
      default: null
     },
     bio:{
      type: String,
      default: null
     }
  },
  { timestamps: true }
);
UserSchema.methods.GenerateToken = function () {
  return jwt.sign({ email: this.email }, process.env.JWT_KEY, {
    expiresIn: process.env.EXPIRE_DATE,
  });
};

// Password compare
UserSchema.methods.ComparePassword = async function (password) {
  if (!this.password) return false;
  return await bcrypt.compare(password, this.password);
};

// Static method for hashing
UserSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, +process.env.SALT_NUMBER);
};

const User = mongoose.model("User", UserSchema);
export default User;
import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    level: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
    category: { type: String },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Test = mongoose.model("Test", TestSchema);

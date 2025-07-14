import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["text", "mcq", "voice"],
    required: true,
  },
  options: {
    type: [String],
    default: undefined,
    validate: {
      validator: function (v) {
        return this.type === "mcq" ? Array.isArray(v) && v.length > 0 : true;
      },
      message: "Options are required for MCQ type questions",
    },
  },
  correctAnswer: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function (v) {
        if (this.type === "mcq") return typeof v === "string";
        if (this.type === "text" || this.type === "voice")
          return typeof v === "string";
        return true;
      },
      message: "Correct answer format is invalid",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Question = mongoose.model("Question", questionSchema);

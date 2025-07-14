import { GoogleGenerativeAI } from "@google/generative-ai";
import { Question } from "../models/Questions_Model.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const evaluateAnswers = async (userAnswers) => {
  try {
    const questionIds = userAnswers.map((q) => q.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });

    const combined = userAnswers.map((userQ) => {
      const originalQ = questions.find(
        (q) => q._id.toString() === userQ.questionId
      );
      return {
        questionId: userQ.questionId,
        questionText: originalQ.questionText,
        correctAnswer: originalQ.correctAnswer,
        userAnswer: userQ.answer,
        type: originalQ.type,
      };
    });

    const evaluations = await Promise.all(
      combined.map(async (q) => {
        if (q.type === "mcq") {
          const isCorrect = q.userAnswer === q.correctAnswer;
          return {
            questionId: q.questionId,
            questionText: q.questionText,
            userAnswer: q.userAnswer,
            correctAnswer: q.correctAnswer,
            score: isCorrect ? 10 : 0,
            feedback: isCorrect ? "Correct answer." : "Incorrect answer.",
          };
        }

        const prompt = `Evaluate the following answer for correctness on a scale of 0 to 10.\n\nQuestion: ${q.questionText}\nCorrect Answer: ${q.correctAnswer}\nUser Answer: ${q.userAnswer}\n\nRespond in this JSON format:\n{\n  "score": <number>,\n  "feedback": "your feedback here"\n}`;

        try {
          const result = await model.generateContent(prompt);
          const responseText = await result.response.text();

          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          const parsed = jsonMatch
            ? JSON.parse(jsonMatch[0])
            : { score: 0, feedback: "Could not parse evaluation." };

          return {
            questionId: q.questionId,
            questionText: q.questionText,
            userAnswer: q.userAnswer,
            correctAnswer: q.correctAnswer,
            score: parsed.score || 0,
            feedback: parsed.feedback || "No feedback given.",
          };
        } catch (err) {
          console.error("Gemini Evaluation Failed:", err);
          return {
            questionId: q.questionId,
            questionText: q.questionText,
            userAnswer: q.userAnswer,
            correctAnswer: q.correctAnswer,
            score: 0,
            feedback: "Evaluation error occurred.",
          };
        }
      })
    );

    return evaluations;
  } catch (error) {
    console.error("Error in evaluating answers:", error);
    throw error;
  }
};

export default evaluateAnswers;

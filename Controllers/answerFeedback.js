import { Result } from "../models/Results_Model.js";
import evaluateAnswers from "../Services/evaluateAnswer.service.js";
import testNameFinder from "../Utils/TestNameFinder.js";
import userFinder from "../Utils/userFinder.js"
const getAnswer = async(req,res)=>{
  const { answers, id } = req.body;
  const evaluations = await evaluateAnswers(answers);
  const testName = await testNameFinder(id);

  const totalScore = evaluations.reduce((acc, q) => acc + q.score, 0);

  const resultDoc = await Result.create({
    user: req.user._id,
    test: id,
    score: totalScore,
    testName: testName,
    questionResults: evaluations.map((e) => ({
      questionId: e.questionId,
      questionText: e.questionText,
      correctAnswer: e.correctAnswer,
      userAnswer: e.userAnswer,
      score: e.score,
      feedback: e.feedback,
    })),
  });
  const user = await userFinder({key: "_id", query: req.user._id})
  user.result.push(resultDoc._id);
  await user.save();
  res.status(200).json({
    message: "Answer Submitted 🎉",
  });
}

export default getAnswer;

import { Test } from "../models/Test_Model.js";

const questionSend = async (req, res) => {
  try {
    const { id } = req.params;
    const allResult = await Test.findById(id)
    .populate({
      path: "questions",
      model: "Question",
    });
    if (!allResult) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.json(allResult);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export {questionSend};
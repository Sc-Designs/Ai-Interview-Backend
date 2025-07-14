import { Test } from './../models/Test_Model.js';
const sendQuestionWithLimit = async (req,res)=>{
    const start = parseInt(req.query.start) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const total = await Test.countDocuments();
    const questions = await Test.find().skip(start).limit(limit);

    res.json({
      total,
      questions,
      hasMore: start + limit < total,
      nextStart: start + limit,
    });
}

export default sendQuestionWithLimit;
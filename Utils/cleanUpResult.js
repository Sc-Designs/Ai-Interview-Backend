const cleanUpResult = (result)=>{
    const { 
        user,
        test,
        _id,
        __v,
        completedAt, 
        createdAt, 
        updatedAt,
        questionResults, 
        ...safeResult 
    } = result._doc;

    const clearQuestionResult = (questionResults || []).map((q) => ({
      questionText: q.questionText,
      correctAnswer: q.correctAnswer,
      userAnswer: q.userAnswer,
      score: q.score,
      feedback: q.feedback,
    }));
    return {
      ...safeResult,
      questionResults: clearQuestionResult,
    };
}
export default cleanUpResult;
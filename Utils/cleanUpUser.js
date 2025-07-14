const cleanUpUser = (user) => {
  const {
    password,
    isVerified,
    updatedAt,
    __v,
    _id,
    otp,
    otpExpiry,
    result,
    ...safeuser
  } = user._doc;

  const cleanedResults = (result || []).map((r) => ({
    _id: r._id,
    score: r.score,
    testName: r.testName || "Untitled Test",
  }));
  return {
    ...safeuser,
    result: cleanedResults,
  };
};

export default cleanUpUser;

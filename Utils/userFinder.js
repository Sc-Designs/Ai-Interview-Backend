import User from "../models/User_Model.js";
const userFinder = async ({
  key,
  query,
  includePassword = false,
  includePopulate = false,
}) => {
  try {
    let selectFields = includePassword ? "+password" : "-password";

    let userQuery = User.findOne({ [key]: query }).select(selectFields);

    if (includePopulate) {
      userQuery = userQuery.populate({
        path: "result",
        model: "Result",
      });
    }

    const user = await userQuery;
    return user || null;
  } catch (err) {
    throw new NotFoundError();
  }
};
export default userFinder;
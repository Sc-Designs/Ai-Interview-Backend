import { Result } from "../models/Results_Model.js";
import cleanUpResult from "../Utils/cleanUpResult.js";

const sendResult = async (req,res) => {
    const {id} = req.params;
    const result = await Result.findById(id);
    const cleanResult = cleanUpResult(result);
    res.status(200).json(cleanResult);
}
export default sendResult;
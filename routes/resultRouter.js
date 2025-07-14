import express from "express"
import logerAuthenticate from "../Middlewares/isLoggedInUser.js";
import tryCatch from "../Utils/tryCatch.js";
import sendResult from "../Controllers/resultSender.js";
const router = express.Router();

router.get("/:id", logerAuthenticate, tryCatch(sendResult));

export default router;
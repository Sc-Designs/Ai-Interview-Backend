import express from "express"
import tryCatch from './../Utils/tryCatch.js';
import {questionSend} from "../Controllers/question.controller.js";
import getAnswer from "../Controllers/answerFeedback.js";
import logerAuthenticate from "../Middlewares/isLoggedInUser.js";

const router = express.Router();

router.get("/:id", tryCatch(questionSend));
router.post("/answer", logerAuthenticate, tryCatch(getAnswer));

export default router;
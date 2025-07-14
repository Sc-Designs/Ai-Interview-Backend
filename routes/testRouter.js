import express from "express"
import tryCatch from './../Utils/tryCatch.js';
import sendQuestionWithLimit from "../Controllers/test.controller.js";

const router = express.Router();

router.get("/send-test-questions", tryCatch(sendQuestionWithLimit));

export default router;
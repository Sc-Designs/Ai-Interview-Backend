import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors"
import errorHandeler from "./Middlewares/errorHandeler.js";
import userRouter from "./routes/userRouter.js";
import testRouter from "./routes/testRouter.js";
import questionRouter from "./routes/questionRouter.js"
import resultRouter from "./routes/resultRouter.js"
import AiRouter from "./routes/groqAiRouter.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/question", questionRouter)
app.use("/result", resultRouter);
app.use("/ai", AiRouter)

app.use(errorHandeler);

export default app;

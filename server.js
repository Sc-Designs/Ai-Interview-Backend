import "dotenv/config";
import http from "http";
import connectDB from "./config/mogoose-connection.js";
import app from "./app.js";
import seeder from "./Utils/seederCode.js";
connectDB();

const server = http.createServer(app);

// seeder()

server.listen(3000,()=>{
    console.log("It runnig on 3000 Port!")
})

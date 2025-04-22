import express from "express"
import cors from "cors";
import config from "./config/config.js";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import errorHandler from "./middleware/errorHandler.js";
connectDB();

const app = express()

app.use(express.json)
app.use(morgan("combined"));
app.use(cors());



app.use("/api/v1/auth" ,authRouter)




app.use(errorHandler)
app.listen(config.PORT, () => {
    console.log(`Server is Running on port ${config.PORT}`)
})
import config from "./config.js";
import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(config.MONGO_URI)
        console.log(`Mongodb Database Connected Successfully on host ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in mongodb ${error}`)
        
    }
}

export default connectDB;
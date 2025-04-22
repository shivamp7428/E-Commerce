import dotenv from "dotenv"
dotenv.config()
const config = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    NODE_ENV : process.env.NODE_ENV,
    JWT_SECRET : process.env.JWT_SECRET,
    Email_User:process.env.EMAIL_USER,
    Email_Pass:process.env.EMAIL_PASS
}


export default config;
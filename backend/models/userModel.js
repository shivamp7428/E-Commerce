import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,

    },
    password:{
         type:String,

    },
    otp:{
        type:String,

    },
    expiresAt:{
        type:Date,
        required:true

    }

},{timestamps:true})

export default mongoose.model("User",userSchema)
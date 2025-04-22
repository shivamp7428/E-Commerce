import userModel from "../models/userModel.js";
import sendOTP from "../utils/SendOTP.js";
import NodeCache from "node-cache";

// Initialize the cache with a standard TTL of 15 minutes
const otpCache = new NodeCache({ stdTTL: 15 * 60 });

export const registerController = async (req, res,next) => {
    try {
       const {name,email,mobile,password} = req.body;
        if (!name || !email || !mobile || !password) {
            return res.send({ success: false, message: "All fields are required" });
        }

        const oldUser  = await userModel.findOne({ email });
        if (oldUser ) {
            return res.send({ success: false, message: "You already exist, please try logging in" });
        }

        const otp = Math.floor(Math.random() * 999999).toString();

        // Store OTP in cache
        otpCache.set(email, { otp, name, mobile, password });

        // Send OTP to the user's email
        await sendOTP(email, otp);
        return res.send({ success: true, message: "OTP sent to your email for verification" });
    } catch (error) {
       next(error)
    }
};





//verificaiton contorller 
export const verifyOTPController = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.send({ success: false, message: "Email and OTP are required" });
        }

        // Retrieve the OTP from the cache
        const cachedData = otpCache.get(email);
        if (!cachedData) {
            return res.send({ success: false, message: "OTP has expired or does not exist" });
        }

        // Check if the OTP matches
        if (cachedData.otp !== otp) {
            return res.send({ success: false, message: "Invalid OTP" });
        }

        // If OTP is valid, save the user credentials to the database
        const newUser  = await userModel.create({
            name: cachedData.name,
            email: email,
            password: cachedData.password, // Make sure to hash the password before saving
            mobile: cachedData.mobile,
        });

        // Optionally, delete the OTP from the cache after successful verification
        otpCache.del(email);

        return res.send({ success: true, message: "User  registered successfully" });
    } catch (error) {
        console.log(`Verification error: ${error}`);
        return res.status(500).send({ success: false, message: "Server error, please try again" });
    }
};
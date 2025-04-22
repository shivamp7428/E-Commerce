import express  from 'express';
import { registerController, verifyOTPController } from './../controllers/user.controller.js';

const authRouter = express.Router();

authRouter.post("/register",registerController)
authRouter.post("/verify-otp" , verifyOTPController)

export default authRouter;

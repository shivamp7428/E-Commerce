import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:config.Email_User,
        pass:config.Email_Pass,
    },
});


const sendOTP = async(email , otp)=>{
    const MailOption = {
        from:config.Email_User,
        to:email,
        subject:"Email verification from E-Commerce",
        html:`
              <div style="font-family: Arial, sans-serif; color: #333;">
              ${otp} otp valid is next 10 minutes.
              </div>
                `
    }
    await transporter.sendMail(MailOption);
};

export default sendOTP;
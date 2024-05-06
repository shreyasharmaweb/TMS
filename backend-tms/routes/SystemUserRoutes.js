const express=require('express');
const app=express.Router();
const SystemUser=require('../models/SystemUser');
const OrganisationUser = require('../models/OrganisationUser')
const nodemailer =require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "shreyasharma7051@gmail.com",
    pass: "jvcmyavhiwdpvzai",
  },

});

const sendEmail=
   async (email)=>{
    
    const otp = Math.floor(100000 + Math.random() * 900000);
    
    // const user = await OrganisationUser.findOne({ email_id });
    const user = await SystemUser.findOne({ email });
    user.otp = otp;


    // SystemUser.otp = otp;
    await user.save();

    console.log("Inside mail")
    var mailOptions={
      from:"shreyasharma7051@gmail.com",
      to:email,
      text:`Your OTP is ${otp}`,

    }
     
    transporter.sendMail(mailOptions,function(err,info){
       if(err){
        console.log(err);
       }
    })

}

app.post('/signup',async (req,res)=>{
    const {email}=req.body;
    const Sys=new SystemUser({email});
    console.log(Sys);
    await Sys.save();
    await sendEmail(email);
   
    res.status(201).json(Sys);
})

app.post('/otp',async(req,res)=>{
    const{email,otp}=req.body;
    const user = await SystemUser.findOne({ email });

    if (!user) {
      return res.status(404).json({ valid: false, message: 'User not found' });
    }
    
    if (user.otp == otp) {
      return res.status(200).json({ valid: true, message: 'OTP is valid' });
    }
    else return res.status(400).json({ valid: false, message: 'Invalid or expired OTP'});
  
  });
  module.exports=app;
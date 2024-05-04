const express=require('express');
const app=express.Router();
const expressAsyncHandler=require("express-async-handler")
const SystemUser=require('../models/SystemUser');
const OrganisationUser = require('../models/OrganisationUser')
const nodemailer =require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail=expressAsyncHandler(
  async (req,res)=>{
    const {email,otp}=req.body;

    var mailOptions={
      from:process.env.SMTP_MAIL,
      to:email,
      otp:otp,

    }
  
    transporter.sendMail(mailOptions,function(err,info){
       if(err){
        console.log(err);
       }
    })

})

app.post('/signup',async (req,res)=>{
    const {email,otp}=req.body;
    const Sys=new SystemUser({email,otp});
    sendEmail(email, otp);
    await Sys.save();
    res.status(201).json(Sys);
})


  module.exports=app;
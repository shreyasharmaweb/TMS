const express=require('express');
const app=express.Router();
const SystemUser=require('../models/SystemUser');
const OrganisationUser = require('../models/OrganisationUser')
app.post('/signup',async (req,res)=>{
    const {email,otp}=req.body;
    const Sys=new SystemUser({email,otp});
    await Sys.save();
    res.status(201).json(Sys);
})


  module.exports=app;
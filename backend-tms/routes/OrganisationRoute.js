const express=require('express');
const app=express.Router();
const Organisation=require('../models/Organisation');
app.post('/signup',async(req,res)=>{
    const {org_name,name}=req.body;
    const Org=new Organisation({org_name,name});
    await Org.save();
    res.status(201).json(Org);
});
app.get('/Allorg',async(req,res)=>{
     try{
        
        const org=await Organisation.find();
        res.json(org);

     }catch(error){
        console.log('error',error);
        res.status(500).json({error:'internal server error'});
     }
});
module.exports=app;
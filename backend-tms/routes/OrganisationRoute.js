const express=require('express');
const app=express.Router();
const Organisation=require('../models/Organisation');
app.post('/signup',async(req,res)=>{
    const {org_name,name}=req.body;
    const Org=new Organisation({org_name,name});
    await Org.save();
    res.status(201).json(Org);
});
app.post('/orguser',async(req,res)=>{
   const {org_name,name}=req.body;
   const Org=new Organisation({org_name,name,user});
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
app.delete(('/delete/:org_name'),async(req,res)=>{
   const {org_name}=req.params;
   console.log(org_name)
   const deleteorg=await Organisation.findByIdAndDelete(org_name);
   if(deleteorg){
      res.status(200).json({message:'Data deleted'});
   } else {
      res.status(404).json({ error: 'Data not found' });
  }
})
module.exports=app;

const express=require('express');
var app = express.Router();
const TMSTicket=require('../models/TMSTicket');
app.post('/addticket',async(req,res)=>{
    const{type,key,summary,description,assignee,reporter,status,created_date,updated_date,due_date}=req.body;
    let newTMSTicket=new TMSTicket({type,key,summary,description,assignee,reporter,status,created_date,updated_date,due_date});
    await newTMSTicket.save();
    res.status(201).json(newTMSTicket);
})
module.exports=app;
const express = require('express');
const app = express.Router();
const OrganisationUser = require('../models/OrganisationUser');
app.post("/signup", async (req, res) => {
    const {id,email_id,organisation,first_name,last_name,dob,org_join_date} = req.body;
    const newOrgUser=new OrganisationUser({id,email_id,organisation,first_name,last_name,dob,org_join_date});
    await newOrgUser.save();
    res.status(201).json(newOrgUser);
});
app.get("/Allusers",async(req,res)=>{
    // console.log("HEYY")
    try{
        const org=await OrganisationUser.find({});
        console.log(org)
        res.status(200).json(org);
    }catch(err){ 
        console.log('error',err);
        res.status(500).json({error:'internal server error'});
    }
});
module.exports=app;

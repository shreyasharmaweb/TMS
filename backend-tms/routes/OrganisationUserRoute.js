const express = require('express');
const app = express.Router();
const OrganisationUser = require('../models/OrganisationUser');
app.post("/signup", async (req, res) => {
    const {id,email_id,first_name,last_name,dob,org_join_date} = req.body;
    const newOrgUser=new OrganisationUser({id,email_id,first_name,last_name,dob,org_join_date});
    await newOrgUser.save();
    res.status(201).json(newOrgUser);
});
module.exports=app;
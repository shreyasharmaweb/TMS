const mongoose = require('mongoose');
const Organisation = require('./Organisation'); 
const Schema = mongoose.Schema;

const OrgUserSchema = new Schema({
    email_id: { type: String, required: true }, 
    first_name: { type: String, required: true }, 
    last_name: { type: String, required: true }, 
    organisation: { type: String,  required: true }, 
    dob: { type: Date, required: true }, 
    org_join_date: { type: Date, required: true }
});

const OrgUser = mongoose.model('OrgUser', OrgUserSchema);
module.exports = OrgUser;



const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//id,email_id,first_name,last_name,dob,org_join_date
const OrgUserSchema=new Schema({
     email_id:String,
     first_name:String,
     last_name:String,
     dob:Date,
     org_join_date:Date
});
const OrgUser=mongoose.model('OrgUser',OrgUserSchema);
module.exports=OrgUser;
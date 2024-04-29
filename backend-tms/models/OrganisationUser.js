const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const OrgUserSchema=new Schema({
     user_name:String,
     org_name:String,
     ticket:Number
});
const OrgUser=mongoose.model('OrgUser',OrgUserSchema);
module.exports=OrgUser;
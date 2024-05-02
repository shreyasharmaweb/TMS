const mongoose=require('mongoose');
var Schema = mongoose.Schema; 

const SysUserSchema=new Schema({
    email:String,
    otp: String,
});

const SystemUser=mongoose.model('SystemUser',SysUserSchema);
module.exports=SystemUser;

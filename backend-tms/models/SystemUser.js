const mongoose=require('mongoose');
var Schema = mongoose.Schema; 

const SysUserSchema=new Schema({
    emai: String,
    otp: String,
});

const SystemUser=mongoose.model('SystemUser',SysUserSchema);
module.exports=SystemUser;

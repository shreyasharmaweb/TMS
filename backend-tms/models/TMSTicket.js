const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TMSTicketSchema=new Schema({
    type:String,
    key:String,
    summary:String,
    description:String,
    assignee:String,
    reporter:String,
    status:String,
    created_date:Date,
    updated_date:Date,
    due_date:Date,
    
})

const TMSTicket=mongoose.model("TMSTicket",TMSTicketSchema);
module.exports = TMSTicket;
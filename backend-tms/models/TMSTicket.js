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
    created_date:String,
    updated_date:String,
    due_date:String,
    
})

const TMSTicket=mongoose.model("TMSTicket",TMSTicketSchema);
module.exports = TMSTicket;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrgSchema = new Schema({
    org_name: String,
    name: String,
   
});

const Organisation = mongoose.model('Organisation', OrgSchema);
module.exports = Organisation;
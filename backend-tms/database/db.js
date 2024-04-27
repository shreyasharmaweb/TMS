const mongoose = require('mongoose');
const mongoURI="mongodb+srv://shreyasharma7051:Shreya3214@backendclustor.eiyy0wg.mongodb.net/TMS?retryWrites=true&w=majority&appName=BackendClustor";

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;
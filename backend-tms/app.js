const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const connectToMongo = require('./database/db');
connectToMongo();

app.use(express.json());
const orgRoutes = require('./routes/OrganisationRoute');
const sysRoutes = require('./routes/SystemUserRoutes');
const orgUserRoutes=require('./routes/OrganisationUserRoute');
const tmsTicketRoutes=require('./routes/TMSTicketRoute');

app.use('/org', orgRoutes);
app.use('/sys', sysRoutes);
app.use("/orguser",orgUserRoutes);
app.use("/tms",tmsTicketRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

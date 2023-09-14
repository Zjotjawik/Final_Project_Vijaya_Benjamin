const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./utils/connectDB');
const treatmentRoutes = require('./routes/treatmentRoutes');
const existingUserRoutes = require('./routes/existingUserRoutes');
const newUserRoutes = require('./routes/newUserRoutes'); 

const port = process.env.PORT || 3000;
app.use(bodyParser.json());


app.use('/treatments', treatmentRoutes);

app.use('/existingUsers', existingUserRoutes);

app.use('/newUsers', newUserRoutes);


connectDB();

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

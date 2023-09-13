const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config;
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const connectDB = require('./utils/connectDB');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    connectDB;
});

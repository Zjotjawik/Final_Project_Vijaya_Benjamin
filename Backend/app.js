const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./utils/connectDB');
const treatmentRoutes = require('./routes/treatmentRoutes');
const userRoutes = require('./routes/userRoutes'); 
const authRoutes = require('./routes/authRoutes');
          
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

const port = process.env.PORT || 3000;
app.use(bodyParser.json());


app.use('/treatments', treatmentRoutes);

app.use('/users', userRoutes);

app.use('/auth', authRoutes);


connectDB();

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

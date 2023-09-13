const connectDB = async () => {
    const uri = process.env.URI;
    const client = await mongoose.connect(uri);
    console.log('Connected to MongoDB');
}

module.exports = connectDB;
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://storemate:storemate@storemate.uvnnrw6.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;

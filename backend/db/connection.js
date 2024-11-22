const mongoose = require('mongoose');

const uri = `mongodb+srv://blinkit:blinkit@cluster0.hmyqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BlinkIt`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to MonngoDB.`);   
  } catch (error) {
    console.log(`Error connecting to MongoDB : ${error}`);
  }  
};

module.exports = connectDB;
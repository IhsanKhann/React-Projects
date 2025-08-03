import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://mortalihsan:izYorfqBYmSorbRa@clusterone.bcgbax4.mongodb.net/AllProducts", {
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection failure
  }
}
export default connectDB;
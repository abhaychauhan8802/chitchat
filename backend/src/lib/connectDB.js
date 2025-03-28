import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("error in mongodb connection");
  }
};

export default connectDB;

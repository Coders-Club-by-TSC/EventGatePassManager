import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); //colection name added in URI
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;

import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  //function to connect to mongodb
  try {
    await connect(mongoURI);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/ ${DB_NAME}`
    );
    console.log(
      `\n Mongodb connect || DB HOST :${connectionInstance.connection.host}`
    );
  } catch (erro) {
    console.error("error agaay", erro);
    process.exit(1);
  }
};

export default connectDb;

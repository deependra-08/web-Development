import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { DB_NAME } from "../constants.js";

let mongod;

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
          dbName: DB_NAME,
          serverSelectionTimeoutMS: 5000,
        });
        console.log(
          `\nMongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`
        );
        return;
      } catch (error) {
        console.warn(
          "Atlas connection failed, trying local database fallback:",
          error.message
        );
      }
    }

    if (!mongod) {
      mongod = await MongoMemoryServer.create();
    }

    const connectionInstance = await mongoose.connect(mongod.getUri(), {
      dbName: DB_NAME,
    });

    console.log(
      `\nMongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed completely:", error.message);
  }
};

export default connectDB;
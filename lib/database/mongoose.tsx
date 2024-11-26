import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
console.log('MONGODB_URL:', MONGODB_URL); // Verifica que tenga el valor correcto
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Using cached connection:", mongoose.connection.readyState);
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error("Missing MONGODB_URL");
  }

  try {
    console.log("Attempting to connect to MongoDB...");

    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "imaginify",
        bufferCommands: false,
      });

    cached.conn = await cached.promise;
    console.log("Successfully connected to MongoDB:", mongoose.connection.readyState); // 1: connected
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }

  return cached.conn;
};
// /lib/mongo.ts
import mongoose, { Mongoose } from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

const MONGODB_URI: string = uri; // ✅ Explicitly assert that it's a string

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  global.mongooseCache ||
  (global.mongooseCache = { conn: null, promise: null });

export default async function connectMongo(): Promise<Mongoose> {
  if (cached.conn) {
    console.log("🔁 Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🧩 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected successfully!");
  return cached.conn;
}

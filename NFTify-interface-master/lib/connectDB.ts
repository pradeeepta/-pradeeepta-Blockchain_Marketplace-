import mongoose from "mongoose";

const MONGODB_URL: string = process.env.DATABASE_URL || "";

if (!MONGODB_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    // Set up connection options
    const options: mongoose.ConnectOptions = {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
      maxPoolSize: 10,
      minPoolSize: 5,
      retryWrites: true,
      w: 'majority' as const
    };

    // Set up event listeners
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from MongoDB');
    });

    await mongoose.connect(MONGODB_URL, options);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;

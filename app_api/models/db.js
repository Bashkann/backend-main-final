const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  throw new Error("❌ MONGODB_URI environment variable tanımlı değil");
}

// Vercel serverless için cache
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(dbURI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB Cloud bağlantısı kuruldu");
  return cached.conn;
}

connectDB();

require("./venue");

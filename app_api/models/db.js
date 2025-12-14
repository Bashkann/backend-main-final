const mongoose = require("mongoose");

// MongoDB bağlantı adresini ortam değişkeninden alıyoruz
const dbURI = process.env.MONGODB_URI;

// Mongoose ayarları
mongoose.set("strictQuery", true);

// MongoDB bağlantısı
mongoose.connect(dbURI, {
  serverSelectionTimeoutMS: 10000
});

// Bağlantı başarılıysa
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB bağlantısı kuruldu");
});

// Bağlantı hatası
mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB bağlantı hatası:", err);
});

// ⬇️ MODELİ MUTLAKA BAĞLANTIDAN SONRA YÜKLE
require("./venue");

module.exports = mongoose;

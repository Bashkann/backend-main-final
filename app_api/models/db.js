const mongoose = require("mongoose");

// Vercel ortam değişkeninden MongoDB adresini alıyoruz
const dbURI = process.env.MONGODB_URI;

// Gereksiz mongoose uyarılarını kapatır
mongoose.set("strictQuery", true);

// MongoDB bağlantısını kur
mongoose
  .connect(dbURI, {
    // 10 saniyede bağlanamazsa hata versin
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");
  })
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err);
  });

// ⬇️⬇️⬇️ EN KRİTİK SATIR ⬇️⬇️⬇️
// Venue modelini mongoose'a tanıtıyoruz
require("./venue");

module.exports = mongoose;

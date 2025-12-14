// MongoDB bağlantısı için mongoose'u çağırıyoruz
const mongoose = require("mongoose");

// Vercel'den gelen ortam değişkeni (MONGODB_URI)
const dbURI = process.env.MONGODB_URI;

// Mongoose ayarı (uyarıları kapatır)
mongoose.set("strictQuery", true);

// MongoDB'ye bağlan
mongoose
  .connect(dbURI, {
    // Eğer 10 saniyede bağlanamazsa hata versin
    // (Vercel 504 timeout'a düşmesin diye)
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");
  })
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err);
  });

// mongoose'u dışarı açıyoruz
module.exports = mongoose;

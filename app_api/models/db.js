var mongoose = require("mongoose");
require("dotenv").config();

// Eğer .env içinde MONGODB_URI varsa Atlas kullanılır,
// yoksa localhost/mekanbul'a bağlanır
var dbURI = process.env.MONGODB_URI || "mongodb://localhost/mekanbul";

mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
  console.log("Mongoose " + dbURI + " adresindeki veritabanına bağlandı.");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose bağlantı hatası:", err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose bağlantısı kesildi.");
});

process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("Mongoose uygulama sonlandırma nedeniyle bağlantıyı kapattı.");
  process.exit(0);
});

require("./venue");

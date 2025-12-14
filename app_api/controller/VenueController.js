const mongoose = require("mongoose");
const Venue = mongoose.model("venue");

const listVenues = function (req, res) {

  // MongoDB bağlantısı hazır mı kontrol et
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: "Veritabanı bağlantısı henüz hazır değil"
    });
  }

  Venue.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [
            parseFloat(req.query.lng),
            parseFloat(req.query.lat)
          ]
        },
        distanceField: "distance",
        spherical: true
      }
    }
  ])
  .then((results) => {
    res.status(200).json(results);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
};

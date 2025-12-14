const app = require("../app");

// Vercel Node Serverless Function
module.exports = (req, res) => {
  return app(req, res);
};

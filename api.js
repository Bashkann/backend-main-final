const app = require("../app");

// Vercel Serverless Function entry:
module.exports = (req, res) => {
  return app(req, res);
};

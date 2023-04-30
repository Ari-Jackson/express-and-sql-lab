const express = require("express");
const songsRouter = express.Router();

songsRouter.route("/").get((req, res) => {
  res.send("songs");
});

module.exports = songsRouter;

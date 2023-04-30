const express = require("express");
const songsRouter = express.Router();
const { getAllSongs, getOneSong } = require("../queries/songs");

songsRouter.route("/").get(async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(404).json({ Error: allSongs });
  }
});

module.exports = songsRouter;

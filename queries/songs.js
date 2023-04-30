const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const result = await db.any("SELECT * FROM songs");
    return result;
  } catch (error) {
    return error;
  }
};

const getOneSong = async (id) => {
  const result = await db.any(`SELECT * FROM songs WHERE id = ${id}`);
};

module.exports = { getAllSongs, getOneSong };

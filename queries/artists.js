const db = require("../db/dbConfig");

// ALL ARTISTS
const getAllArtist = async () => {
  try {
    const allArtist = await db.any("SELECT * FROM artist");
    return allArtist;
  } catch (error) {
    return error;
  }
};

// ONE ARTIST
const getArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artist WHERE id=$1", id);
    return oneArtist;
  } catch (error) {
    return error;
  }
};

// CREATE ALBUM
const createArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artist (name) VALUES($1) RETURNING *",
      [artist.name]
    );
    return newArtist;
  } catch (error) {
    return error;
  }
};

// DELETE ALBUM
const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artist WHERE id=$1 RETURNING *",
      id
    );
    return deletedArtist;
  } catch (error) {
    return error;
  }
};

// UPDATE REVIEW
const updateArtist = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artist SET name=$1 WHERE id=$2 RETURNING *",
      [artist.name, id]
    );
    return updatedArtist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllArtist,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
};

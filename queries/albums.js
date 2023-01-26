const db = require("../db/dbConfig");

// ALL ALBUM
const getAllAlbum = async () => {
  try {
    const allAlbum = await db.any("SELECT * FROM album");
    return allAlbum;
  } catch (error) {
    return error;
  }
};

// ONE ALBUM
const getAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM album WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

// CREATE ALBUM
const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(
      "INSERT INTO album (title) VALUES($1) RETURNING *",
      [album.title]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

// DELETE ALBUM
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM album WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

// UPDATE REVIEW
const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE album SET title=$1 WHERE id=$2 RETURNING *",
      [album.title, id]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbum,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};

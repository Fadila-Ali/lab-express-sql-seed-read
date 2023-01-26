const db = require("../db/dbConfig");

// ALL PLAYLISTS
const getAllPlaylist = async () => {
  try {
    const allPlaylist = await db.any(
      "SELECT * FROM playlist",
    );
    return allPlaylist;
  } catch (error) {
    return error;
  }
};

// ONE PLAYLIST
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlist WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

// CREATE PLAYLIST
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlist (title) VALUES($1) RETURNING *",
      [playlist.title]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

// DELETE PLAYLIST
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlist WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

// UPDATE PLAYLIST
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlist SET title=$1 WHERE id=$2 RETURNING *",
      [playlist.title, id]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylist,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};

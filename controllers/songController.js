const express = require("express");
const songs = express.Router({ mergeParams: true });
const {
  checkBoolean,
  checkName,
  checkArtist,
} = require("../validations/checkSongs");
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// IMPORTING REVIEW CONTROLLER, PLAYLIST CONTROLLER
const reviewsController = require("./reviewsController");
// const playlistsController = require("./playlistsController");
// const albumsController = require("./albumsController");

songs.use("/:songId/reviews", reviewsController);

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  console.log(getAllSongs());
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW ONE SONG
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.message) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE NEW SONG
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE SONG
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE SONG
songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(404).json({ error: "Song not found" });
  }
});

module.exports = songs;

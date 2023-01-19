const express = require("express");
const songs = express.Router();
const {
  checkBoolean,
  checkName,
  checkArtist,
} = require("../validations/checkSongs");
const { getAllSongs, getSong, createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
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

module.exports = songs;

const express = require("express");
const playlists = express.Router();
const {
  getAllPlaylist,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");

const songController = require("./songController")

// MIDDLEWARE
playlists.use("/:playlistId/songs", songController)

// INDEX
playlists.get("/", async (req, res) => {
  const { playlistId } = req.params;
  try {
    const allPlaylist = await getAllPlaylist(playlistId);
    res.json(allPlaylist);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (!playlist.message) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
playlists.post("/", async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await deletePlaylist(id);
    res.status(200).json(deletedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
playlists.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlaylist = await updatePlaylist(id, req.body);
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "review not found!" });
  }
});

module.exports = playlists;

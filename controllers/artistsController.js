const express = require("express");
const albums = express.Router();
const {
  getAllAlbum,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require("../queries/albums");

const songController = require("./songController");

// MIDDLEWARE
albums.use("/:albums/songs", songController);

// INDEX
albums.get("/", async (req, res) => {
  const { albumId } = req.params;
  try {
    const allAlbum = await getAllAlbum(albumId);
    res.json(allAlbum);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (!album.message) {
    res.status(200).json(album);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
albums.post("/", async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
albums.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlbum = await deleteAlbum(id);
    res.status(200).json(deletedAlbum);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
albums.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAlbum = await updateAlbum(id, req.body);
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(404).json({ error: "review not found!" });
  }
});

module.exports = albums;

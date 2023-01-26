const express = require("express");
const artist = express.Router();
const {
  getAllArtist,
  getArtist,
  createArtist,
  deleteArtist,
  updateArtist,
} = require("../queries/artists");

const songController = require("./songController");

// MIDDLEWARE
artist.use("/:artist/songs", songController);

// INDEX
artist.get("/", async (req, res) => {
  const { artistId } = req.params;
  try {
    const allArtist = await getAllArtist(artistId);
    res.json(allArtist);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
artist.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await getArtist(id);
  if (!artist.message) {
    res.status(200).json(artist);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
artist.post("/", async (req, res) => {
  try {
    const artist = await createArtist(req.body);
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
artist.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArtist = await deleteArtist(id);
    res.status(200).json(deletedArtist);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
artist.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArtist = await updateArtist(id, req.body);
    res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(404).json({ error: "review not found!" });
  }
});

module.exports = artist;

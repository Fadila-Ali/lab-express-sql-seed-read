// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const songController = require("./controllers/songController.js");
const playlistsController = require("./controllers/playlistsController");
const albumsController = require("./controllers/albumsController")
const artistsController = require("./controllers/artistsController")
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// songs ROUTES
app.use("/songs", songController);
app.use("/playlists", playlistsController);
app.use("/albums", albumsController)
app.use("/artists", artistsController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

// 404 ERROR
app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

// EXPORT
module.exports = app;

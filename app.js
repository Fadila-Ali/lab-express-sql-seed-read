// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const pgp = require('pg-promise')();
const songController = require("./controllers/songController.js");
const playlistsController = require("./controllers/playlistsController");
const albumsController = require("./controllers/albumsController")
const artistsController = require("./controllers/artistsController")
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


//! CONFIGURATION
const PORT = process.env.PORT;
const pgHost = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;
const pgDatabase = process.env.PG_DATABASE;
const pgUser = process.env.PG_USER;
const pgPassword = process.env.PG_PASSWORD;

//! DATABASE CONNECTION
const db = pgp(`postgres://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`);


db.connect()
  .then(obj => {
    console.log('Connected to the database');
    obj.done();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

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

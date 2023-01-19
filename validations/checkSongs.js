const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Artist is required" });
  }
};

const checkBoolean = (req, res, next) => {
  if (
    req.body.is_favorite === true ||
    req.body.is_favorite === false ||
    req.body.is_favorite === undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = { checkBoolean, checkArtist, checkName };

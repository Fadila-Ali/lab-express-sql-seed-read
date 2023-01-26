DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

DROP TABLE IF EXISTS playlist;
CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    title TEXT
);

DROP TABLE IF EXISTS album;
CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    title TEXT
);

DROP TABLE IF EXISTS artist;
CREATE TABLE artist (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN,
 playlist_id INTEGER REFERENCES playlist (id) ON DELETE CASCADE,
 album_id INTEGER REFERENCES album (id) ON DELETE CASCADE,
 artist_id INTEGER REFERENCES artist (id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);

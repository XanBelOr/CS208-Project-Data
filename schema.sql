-- Schema for A.B.C. Music streaming service
-- Drop tables in reverse dependency order (children first)

DROP TABLE IF EXISTS song_genres;
DROP TABLE IF EXISTS song;
DROP TABLE IF EXISTS album;
DROP TABLE IF EXISTS artist;
DROP TABLE IF EXISTS genre;

CREATE TABLE artist
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE album
(
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     VARCHAR(100) NOT NULL,
    year      INTEGER NOT NULL,
    artist_id INTEGER,
    FOREIGN KEY (artist_id) REFERENCES artist (id)
);

CREATE TABLE genre
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    genre VARCHAR(20) UNIQUE
);

CREATE TABLE song
(
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     VARCHAR(100) NOT NULL,
    length    INTEGER NOT NULL,
    artist_id INTEGER,
    album_id  INTEGER,
    FOREIGN KEY (artist_id) REFERENCES artist (id),
    FOREIGN KEY (album_id) REFERENCES album (id)
);

CREATE TABLE song_genres
(
    song_id  INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    FOREIGN KEY (song_id) REFERENCES song (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id),
    UNIQUE (song_id, genre_id)
);

-- Schema for A.B.C. Music streaming service
-- Drop tables in reverse dependency order

DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE tracks
(
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     VARCHAR(100) NOT NULL,
    artist_id INTEGER      NOT NULL,
    album     VARCHAR(100),
    genre     VARCHAR(30),
    FOREIGN KEY (artist_id) REFERENCES artists (id)
);

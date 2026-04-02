-- TODO: enable the enforcement of FOREIGN KEY constraints by
--       following the instructions from section 9 in the HW2 description:
--       https://docs.google.com/document/d/1XvnFOI6ssJp8IqlnhYlgu6cy_30OphGaCadxktZrbM8/edit#heading=h.xergorgytnks

-- TODO: execute all SQL statements, in sequential order, from the top of this file
--       to create the tables or to "reset" the database to the expected structure

DROP TABLE IF EXISTS song;
DROP TABLE IF EXISTS genre;
DROP TABLE IF EXISTS registered_genre;

CREATE TABLE song
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    artist      VARCHAR(20) NOT NULL,
    album       VARCHAR(35) NOT NULL,
    songs       VARCHAR(100) NOT NULL
);

CREATE TABLE genre
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    genre       VARCHAR(20) UNIQUE
);

CREATE TABLE registered_genre
(
    song_id   INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    FOREIGN KEY (song_id) REFERENCES song (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id),
    UNIQUE (song_id, genre_id)
);
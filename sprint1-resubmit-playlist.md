# Sprint 1 Resubmission: Playlist Tables

## Task
References user story #1 (Initialize tables)

Extends the initial schema with playlist tables.

## Schema additions (schema.sql)

```sql
CREATE TABLE playlist
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE playlist_songs
(
    playlist_id INTEGER NOT NULL,
    song_id     INTEGER NOT NULL,
    FOREIGN KEY (playlist_id) REFERENCES playlist (id),
    FOREIGN KEY (song_id) REFERENCES song (id),
    UNIQUE (playlist_id, song_id)
);
```

Note: drop both tables at the top of schema.sql in reverse dependency order (playlist_songs before playlist, both before song's drop).

## Seed additions (seeds.sql)

```sql
INSERT INTO playlist (name)
VALUES
    ('Top Hits 2024'),
    ('Country Roads'),
    ('Pop Essentials');

INSERT INTO playlist_songs (playlist_id, song_id)
VALUES
    (1, 1), (1, 3), (1, 7), (1, 13),
    (2, 2), (2, 4), (2, 19), (2, 20),
    (3, 11), (3, 12), (3, 14), (3, 18);
```

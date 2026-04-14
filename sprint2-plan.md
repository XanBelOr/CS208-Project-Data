# Sprint 2 Plan

## User Story
**Title:** Link songs to artists and albums and retrieve individual song details
**Description:** As a user, I want songs to be linked to their artists and albums, and I want to view details of a single song, so that I can see complete information about the music I'm interested in.
**Acceptance Criteria:**
Given the music database, when a song is stored, then it references its artist and album. When a user accesses /songs/:id, then the song's title, length, artist, and album are returned.

## Task 1: Add foreign keys to schema linking song to artist and album, and create song_genres join table
**Description:** References user story #<story_id>
- Add artist_id and album_id foreign key columns to the song table
- Create song_genres join table to link songs to genres
- Update seeds.sql to populate the foreign key relationships

## Task 2: Create GET /songs/:id route to return a single song by ID
**Description:** References user story #<story_id>
- Add getSongById() function in db.js
- Add GET /songs/:id route in routes/songs.js

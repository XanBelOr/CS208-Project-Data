# Sprint 4 Plan

## User Story
**Title:** Build out playlist management API endpoints
**Description:** As a user, I want to view all playlists, see a playlist's songs, create new playlists, and add songs to playlists, so that I can organize music into curated collections.
**Acceptance Criteria:**
- GET /playlists returns all playlists as JSON
- GET /playlists/:id returns the playlist with its list of songs (joined via playlist_songs)
- POST /playlists creates a new playlist and returns it with status 201
- POST /playlists/:id/songs adds a song to the playlist and returns 201

## Task 1: GET /playlists - list all playlists
References user story #<story_id>
- Add `getAllPlaylists()` function in db.js
- Create `routes/playlist.js` with the GET /playlists route
- Register `routes/playlist.js` in app.js
- Export `getAllPlaylists` from db.js

## Task 2: GET /playlists/:id - get a playlist with its songs
References user story #<story_id>
- Add `getPlaylistById(playlistId)` function in db.js that returns the playlist plus an array of its songs (JOIN through playlist_songs)
- Add GET /playlists/:id route in routes/playlist.js
- Return 404 if not found
- Export `getPlaylistById` from db.js

## Task 3: POST /playlists - create a new playlist
References user story #<story_id>
- Add `addNewPlaylist(newPlaylist)` function in db.js (INSERT into playlist)
- Add POST /playlists route in routes/playlist.js
- Validate required field `name`; return 201 + created playlist on success
- Export `addNewPlaylist` from db.js

## Task 4: POST /playlists/:id/songs - add a song to a playlist
References user story #<story_id>
- Add `addSongToPlaylist(playlistId, songId)` function in db.js (INSERT into playlist_songs)
- Add POST /playlists/:id/songs route in routes/playlist.js
- Validate required field `song_id`; return 201 on success, 404 if playlist or song doesn't exist
- Export `addSongToPlaylist` from db.js

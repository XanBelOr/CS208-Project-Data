# Sprint 5 Plan (5 contributions, finishing touches)

## User Story A: Round out playlist management with edit and remove operations
**Title:** Round out playlist management API with edit and remove operations
**Description:** As a user, I want to rename playlists, delete playlists I no longer want, and remove individual songs from a playlist, so that my playlists stay tidy and accurate.
**Acceptance Criteria:**
- Given a valid playlist ID and name, when a user PUTs to /playlists/:id, then the playlist's name is updated; 404 if not found
- Given a valid playlist ID, when a user DELETEs /playlists/:id, then the playlist is removed (along with its playlist_songs entries); 204 success, 404 if not found
- Given a valid playlist ID and song ID, when a user DELETEs /playlists/:id/songs/:song_id, then the song is removed from the playlist; 204 success, 404 if the association does not exist

### Task A1: PUT /playlists/:id - update playlist name
References user story #<storyA>
- Add `updateExistingPlaylistInformation(playlistToUpdate)` in db.js
- Add PUT /playlists/:id route, validate `name`, 404 if playlist missing
- Export from db.js

### Task A2: DELETE /playlists/:id - delete playlist and its song associations
References user story #<storyA>
- Add `deletePlaylistById(playlistId)` in db.js (also clears playlist_songs entries)
- Add DELETE /playlists/:id route, 404 if missing
- Export from db.js

### Task A3: DELETE /playlists/:id/songs/:song_id - remove a song from a playlist
References user story #<storyA>
- Add `removeSongFromPlaylist(playlistId, songId)` in db.js
- Add DELETE /playlists/:id/songs/:song_id route, 404 if association missing
- Export from db.js

## User Story B: Add genre details and creation endpoints
**Title:** Add genre details and creation endpoints
**Description:** As a user, I want to view a single genre with all songs in it, and create new genres, so that the catalog can be browsed and expanded by genre.
**Acceptance Criteria:**
- Given a valid genre ID, when a user GETs /genres/:id, then the genre and its array of songs are returned as JSON; 404 if not found
- Given a valid name, when a user POSTs to /genres, then the new genre is inserted and returned with status 201; 400 if missing name

### Task B1: GET /genres/:id - return genre with its songs
References user story #<storyB>
- Add `getGenreById(genreId)` in db.js (JOINs through song_genres + song)
- Add GET /genres/:id route, 404 if not found
- Export from db.js

### Task B2: POST /genres - create new genre
References user story #<storyB>
- Add `addNewGenre(newGenre)` in db.js
- Add POST /genres route, validate `genre`
- Export from db.js

# Sprint 3 Plan

## User Story
**Title:** Manage songs through full CRUD operations
**Description:** As a user, I want to add new songs, update existing songs, and remove songs through the API, so that the music catalog can be maintained dynamically without manual database edits.
**Acceptance Criteria:**
- Given a valid request body, when a user POSTs to /songs, then a new song is inserted and returned as JSON with status 201
- Given a valid song ID and body, when a user PUTs to /songs/:id, then the song is updated and returned as JSON; 404 if not found
- Given a valid song ID, when a user DELETEs /songs/:id, then the song is removed and 204 is returned; 404 if not found

## Task 1: POST /songs - create new song
References user story #<story_id>
- Add `addNewSong(newSong)` function in db.js
- Add POST /songs route in routes/songs.js
- Validate required fields (title, length); accept optional artist_id, album_id
- Return 201 + created song on success, 400 on missing fields, 422 on db error
- Export addNewSong from db.js

## Task 2: PUT /songs/:id - update existing song
References user story #<story_id>
- Add `updateExistingSongInformation(songToUpdate)` function in db.js
- Add PUT /songs/:id route in routes/songs.js
- Validate required fields; check song exists via getSongById
- Return 200 + updated song; 404 if not found; 400 if missing fields
- Export updateExistingSongInformation from db.js

## Task 3: DELETE /songs/:id - delete song
References user story #<story_id>
- Add `deleteSongById(songId)` function in db.js
- Add DELETE /songs/:id route in routes/songs.js
- Check song exists via getSongById
- Return 204 on success; 404 if not found
- Export deleteSongById from db.js

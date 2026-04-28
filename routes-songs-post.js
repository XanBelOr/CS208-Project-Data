/**
 * POST /songs
 * with the following form parameters:
 *      title
 *      length
 *      artist_id (optional)
 *      album_id  (optional)
 *
 * The parameters passed in the body of the POST request are used to create a new song.
 * The new song is inserted into the song table in the database.
 *
 * @return the created song (which was inserted into the database), as JSON
 */
router.post("/songs", async function (req, res)
{
    try
    {
        const title = req.body.title;
        const length = req.body.length;
        const artist_id = req.body.artist_id || null;
        const album_id = req.body.album_id || null;

        console.log("title     = " + title);
        console.log("length    = " + length);
        console.log("artist_id = " + artist_id);
        console.log("album_id  = " + album_id);

        if (title === undefined)
        {
            res.status(400).json({"error": "bad request: expected parameter 'title' is not defined"});
            return;
        }

        if (length === undefined)
        {
            res.status(400).json({"error": "bad request: expected parameter 'length' is not defined"});
            return;
        }

        let newSong = {
            id: null, // will be initialized by the database, after we insert the record
            title: title,
            length: length,
            artist_id: artist_id,
            album_id: album_id,
        };

        newSong = await db.addNewSong(newSong);

        // return 201 status code (i.e., created)
        res.status(201).json(newSong);
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(422).json({"error": "failed to add new song to the database"});
    }
});

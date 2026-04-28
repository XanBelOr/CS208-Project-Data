/**
 * PUT /songs/{id}
 * with the following form parameters:
 *      title
 *      length
 *      artist_id (optional)
 *      album_id  (optional)
 *
 * The parameters passed in the body of the PUT request are used to
 * update the existing song with id = {id} in the song table in the database.
 *
 * @return the updated song as JSON
 *
 * @throws a 404 status code if the song with id = {id} does not exist
 */
router.put("/songs/:id", async function (req, res)
{
    try
    {
        const id = req.params.id;
        const title = req.body.title;
        const length = req.body.length;
        const artist_id = req.body.artist_id || null;
        const album_id = req.body.album_id || null;

        console.log("id        = " + id);
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

        let songToUpdate = await db.getSongById(id);
        console.log({songToUpdate});

        if (songToUpdate == null)
        {
            console.log("No song with id " + id + " exists.");

            // return 404 status code (i.e., error that the song was not found)
            res.status(404).json({"error": "failed to update the song with id = " + id + " in the database because it does not exist"});
            return;
        }

        // override the values of all the fields from songToUpdate with the values from the parameters
        songToUpdate.title = title;
        songToUpdate.length = length;
        songToUpdate.artist_id = artist_id;
        songToUpdate.album_id = album_id;

        await db.updateExistingSongInformation(songToUpdate);
        res.json(songToUpdate);
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(422).json({"error": "failed to update the song with id = " + req.params.id + " in the database"});
    }
});

/**
 * DELETE /songs/{id}
 *
 * Deletes the song with id = {id} from the song table in the database.
 *
 * @return 204 (No Content) on success
 *
 * @throws a 404 status code if the song with id = {id} does not exist
 */
router.delete("/songs/:id", async function (req, res)
{
    try
    {
        const id = req.params.id;
        console.log("id = " + id);

        const existingSong = await db.getSongById(id);

        if (existingSong == null)
        {
            console.log("No song with id " + id + " exists.");

            res.status(404).json({"error": "failed to delete the song with id = " + id + " in the database because it does not exist"});
            return;
        }

        await db.deleteSongById(id);
        res.status(204).send();
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(422).json({"error": "failed to delete the song with id = " + req.params.id + " in the database"});
    }
});

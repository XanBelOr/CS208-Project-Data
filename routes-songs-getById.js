/**
 * http://localhost:8080/songs/:id
 * GET /songs/:id
 *
 * @return a single song by its ID as JSON
 */
router.get("/songs/:id", async function (req, res)
{
    try
    {
        const songId = req.params.id;
        const song = await db.getSongById(songId);

        if (song)
        {
            console.log("song:", song);
            res.send(song);
        }
        else
        {
            res.status(404).json({ "error": "Song not found" });
        }
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

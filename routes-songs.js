let express = require('express');
let router = express.Router();
const db = require("./../db");


/**
 * http://localhost:8080/songs
 * GET /songs
 *
 * @return a list of songs (extracted from the song table in the database) as JSON
 */
router.get("/songs", async function (req, res)
{
    try
    {
        const listOfSongs = await db.getAllSongs();
        console.log("listOfSongs:", listOfSongs);

        res.send(listOfSongs);
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


module.exports = router;

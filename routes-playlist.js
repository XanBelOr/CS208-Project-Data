let express = require('express');
let router = express.Router();
const db = require("./../db");


/**
 * http://localhost:8080/playlists
 * GET /playlists
 *
 * @return a list of playlists (extracted from the playlist table in the database) as JSON
 */
router.get("/playlists", async function (req, res)
{
    try
    {
        const listOfPlaylists = await db.getAllPlaylists();
        console.log("listOfPlaylists:", listOfPlaylists);

        res.send(listOfPlaylists);
    }
    catch (err)
    {
        console.error("Error:", err.message);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


module.exports = router;

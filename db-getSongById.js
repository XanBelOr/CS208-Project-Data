function getSongById(songId)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `SELECT song.id, song.title, song.length, artist.name AS artist, album.title AS album
                 FROM song
                 LEFT JOIN artist ON song.artist_id = artist.id
                 LEFT JOIN album ON song.album_id = album.id
                 WHERE song.id = ?;`;

            db.get(sql, [songId], function(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                if (row)
                {
                    console.log(util.format("| %d | %s | %d | %s | %s |", row.id, row.title, row.length, row.artist, row.album));
                }

                resolve(row);
            });
        });
    });
}

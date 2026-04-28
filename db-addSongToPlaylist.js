function addSongToPlaylist(playlistId, songId)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `INSERT INTO playlist_songs (playlist_id, song_id)
                 VALUES (?, ?);`;

            function callbackAfterReturnedRowIsProcessed(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                const numberOfRowsAffected = this.changes;
                if (numberOfRowsAffected > 0)
                {
                    console.log("SUCCESSFULLY added song " + songId + " to playlist " + playlistId);
                    resolve({ playlist_id: playlistId, song_id: songId });
                }
                else
                {
                    reject("ERROR: could not add song " + songId + " to playlist " + playlistId);
                }
            }

            db.run(sql, [playlistId, songId], callbackAfterReturnedRowIsProcessed);
        });
    });
}

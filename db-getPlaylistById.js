function getPlaylistById(playlistId)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const playlistSql =
                `SELECT id, name, created_at
                 FROM playlist
                 WHERE id = ?;`;

            db.get(playlistSql, [playlistId], function(err, playlistRow)
            {
                if (err)
                {
                    reject(err);
                    return;
                }

                if (!playlistRow)
                {
                    resolve(null);
                    return;
                }

                const songsSql =
                    `SELECT song.id, song.title, song.length, artist.name AS artist
                     FROM playlist_songs
                     JOIN song ON playlist_songs.song_id = song.id
                     LEFT JOIN artist ON song.artist_id = artist.id
                     WHERE playlist_songs.playlist_id = ?;`;

                db.all(songsSql, [playlistId], function(err, songRows)
                {
                    if (err)
                    {
                        reject(err);
                        return;
                    }

                    const playlist = {
                        id: playlistRow.id,
                        name: playlistRow.name,
                        created_at: playlistRow.created_at,
                        songs: songRows || []
                    };

                    resolve(playlist);
                });
            });
        });
    });
}

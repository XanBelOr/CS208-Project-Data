function addNewSong(newSong)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `INSERT INTO song (title, length, artist_id, album_id)
                 VALUES (?, ?, ?, ?);`;

            function callbackAfterReturnedRowIsProcessed(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                const numberOfRowsAffected = this.changes;
                if (numberOfRowsAffected > 0)
                {
                    const generatedIdForTheNewlyInsertedSong = this.lastID;

                    console.log("SUCCESSFULLY inserted a new song with id = " + generatedIdForTheNewlyInsertedSong);

                    newSong.id = generatedIdForTheNewlyInsertedSong;

                    resolve(newSong);
                }
            }

            // execute the sql prepared statement
            // and return the id of the newly created song
            db.run(sql, [newSong.title, newSong.length, newSong.artist_id, newSong.album_id], callbackAfterReturnedRowIsProcessed);
        });
    });
}

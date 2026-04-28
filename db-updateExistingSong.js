function updateExistingSongInformation(songToUpdate)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `UPDATE song
                 SET title = ?, length = ?, artist_id = ?, album_id = ?
                 WHERE id = ?;`;

            function callbackAfterReturnedRowIsProcessed(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                const numberOfRowsAffected = this.changes;
                if (numberOfRowsAffected > 0)
                {
                    console.log("SUCCESSFULLY updated the song with id = " + songToUpdate.id);

                    resolve(songToUpdate);
                }
                else
                {
                    reject("ERROR: could not update the song with id = " + songToUpdate.id);
                }
            }

            // execute the sql prepared statement
            // and return the number of rows affected
            db.run(sql, [songToUpdate.title, songToUpdate.length, songToUpdate.artist_id, songToUpdate.album_id, songToUpdate.id], callbackAfterReturnedRowIsProcessed);
        });
    });
}

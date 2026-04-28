function deleteSongById(songId)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `DELETE FROM song
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
                    console.log("SUCCESSFULLY deleted the song with id = " + songId);
                    resolve(true);
                }
                else
                {
                    resolve(false);
                }
            }

            // execute the sql prepared statement
            // and return the number of rows affected
            db.run(sql, [songId], callbackAfterReturnedRowIsProcessed);
        });
    });
}

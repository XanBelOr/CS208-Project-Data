function addNewPlaylist(newPlaylist)
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `INSERT INTO playlist (name)
                 VALUES (?);`;

            function callbackAfterReturnedRowIsProcessed(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                const numberOfRowsAffected = this.changes;
                if (numberOfRowsAffected > 0)
                {
                    const generatedIdForTheNewlyInsertedPlaylist = this.lastID;

                    console.log("SUCCESSFULLY inserted a new playlist with id = " + generatedIdForTheNewlyInsertedPlaylist);

                    newPlaylist.id = generatedIdForTheNewlyInsertedPlaylist;

                    resolve(newPlaylist);
                }
            }

            db.run(sql, [newPlaylist.name], callbackAfterReturnedRowIsProcessed);
        });
    });
}

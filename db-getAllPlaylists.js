function getAllPlaylists()
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `SELECT id, name, created_at
                 FROM playlist;`;

            let listOfPlaylists = [];

            printTableHeader(["id", "name", "created_at"]);

            const callbackToProcessEachRow = function(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                console.log(util.format("| %d | %s | %s |", row.id, row.name, row.created_at));

                listOfPlaylists.push({
                    id: row.id,
                    name: row.name,
                    created_at: row.created_at
                });
            };

            const callbackAfterAllRowsAreProcessed = function()
            {
                resolve(listOfPlaylists);
            };

            db.each(sql, callbackToProcessEachRow, callbackAfterAllRowsAreProcessed);
        });
    });
}

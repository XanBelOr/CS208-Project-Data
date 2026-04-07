function getAllSongs()
{
    return new Promise(function(resolve, reject)
    {
        db.serialize(function()
        {
            const sql =
                `SELECT id, title, length
                 FROM song;`;

            let listOfSongs = [];

            printTableHeader(["id", "title", "length"]);

            const callbackToProcessEachRow = function(err, row)
            {
                if (err)
                {
                    reject(err);
                }

                const id = row.id;
                const title = row.title;
                const length = row.length;

                console.log(util.format("| %d | %s | %d |", id, title, length));

                const songForCurrentRow = {
                    id: id,
                    title: title,
                    length: length
                };

                listOfSongs.push(songForCurrentRow);
            };

            const callbackAfterAllRowsAreProcessed = function()
            {
                resolve(listOfSongs);
            };

            db.each(sql, callbackToProcessEachRow, callbackAfterAllRowsAreProcessed);
        });
    });
}

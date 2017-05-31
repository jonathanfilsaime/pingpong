var connection = require('./db_connection')

module.exports = function read(name, wins, callback)
{
    connection.getConnection(function (err, connection)
    {
        connection.query('UPDATE singles SET Wins = ' + '\'' + wins + '\'' + ' WHERE Name = ' + '\"' + name + '\"' ,
            function (error, results)
        {
            if (error) throw error;
            console.log('result: ', results);
            callback(results);
        });
    })
}

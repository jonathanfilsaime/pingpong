var connection = require('./db_connection')

module.exports = function read(callback)
{
    connection.getConnection(function (err, connection)
    {
        connection.query('SELECT * FROM singles', function (error, results)
        {
            if (error) throw error;
            callback(results);
        });
    })
}






var connection = require('./db_connection')

module.exports = function read(callback)
{
    connection.getConnection(function (err, connection)
    {
        connection.query('SELECT * FROM singles ORDER BY Wins DESC', function (error, results)
        {
            if (error) throw error;
            console.log(results);
            callback(results);
        });
    })
}






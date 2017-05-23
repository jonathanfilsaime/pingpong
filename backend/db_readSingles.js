var connection = require('./db_connection')

module.exports = function read()
{
    connection.getConnection(function (err, connection)
    {
        connection.query('SELECT * FROM singles', function (error, results)
        {
            if (error) throw error;
            console.log('result: ', results);
        });
    })
}






/**
 * Created by jonathanfilsaime on 5/23/2017.
 */
var connection = require('./db_connection')

module.exports = function read()
{
    connection.getConnection(function (err, connection)
    {
        connection.query('SELECT * FROM doubles', function (error, results)
        {
            if (error) throw error;
            console.log('result: ', results);
        });
    })
}
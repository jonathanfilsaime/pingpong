/**
 * Created by jonathanfilsaime on 5/23/2017.
 */
var connection = require('./db_connection')

module.exports = function read(callback)
{
    connection.getConnection(function (err, connection)
    {
        console.log(err);
        connection.query('SELECT * FROM doubles ORDER BY Wins DESC', function (error, results)
        {
            if (error) throw error;

            connection.release();

            callback(results);
        });
    })
}
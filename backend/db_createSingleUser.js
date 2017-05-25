/**
 * Created by jonathanfilsaime on 5/24/2017.
 */
var connection = require('./db_connection')

module.exports = function read(callback, name)
{
    connection.getConnection(function (err, connection)
    {
        connection.query('INSERT INTO singles ( Name, Wins ) VALUES (' + '\"' +name + '\"' + ', 0 )', function (error, results)
        {
            if (error) throw error;
            console.log('result: ', results);
            callback(results);
        });
    })
}
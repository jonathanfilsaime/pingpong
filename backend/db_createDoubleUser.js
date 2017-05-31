/**
 * Created by jonathanfilsaime on 5/24/2017.
 */
var connection = require('./db_connection')

module.exports = function read(name, callback) {
    connection.getConnection(function (err, connection)
    {
        connection.query('INSERT INTO doubles ( Name, Wins ) VALUES (' + '\"' +name + '\"' + ', 0 )', function (error, results)
        {
            if (error) throw error;

            connection.release();

            callback(results);
        });
    })
}
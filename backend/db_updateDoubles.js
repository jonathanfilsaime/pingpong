/**
 * Created by jonathanfilsaime on 5/25/2017.
 */
var connection = require('./db_connection')

module.exports = function read(name, wins, callback) {
    connection.getConnection(function (err, connection)
    {
        connection.query('UPDATE doubles SET Wins = ' + '\'' + wins + '\'' + ' WHERE Name = ' + '\"' + name + '\"' ,
            function (error, results)
            {
                if (error) throw error;
                console.log(results);
                connection.release();

                callback(results);
            });
    })
}

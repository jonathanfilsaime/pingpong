/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var mysql = require('mysql');

var connection = mysql.createPool({     // TODO export credentials to one place, and pull from server!!
    host     : 'localhost',
    user     : 'root',
    password : 'j1filsaime01',
    database : 'pingpong'
});



module.exports = connection;
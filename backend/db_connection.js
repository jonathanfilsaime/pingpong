/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var mysql = require('mysql');

var connection = mysql.createPool({     // TODO export credentials to one place, and pull from server!!
    host     : '54.213.230.211',
    user     : 'root',
    password : '',
    database : 'pingpong'
});

module.exports = connection;
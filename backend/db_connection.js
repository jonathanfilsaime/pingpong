/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var mysql = require('mysql');

var connection = mysql.createPool({     // TODO export credentials to one place, and pull from server!!
    host     : 'http://ec2-54-213-230-211.us-west-2.compute.amazonaws.com',
    user     : 'root',
    password : '',
    database : 'pingpong'
});
console.log(connection);
module.exports = connection;
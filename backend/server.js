var express = require('express');
var app = express();
var readAllSingles = require('./db_readAllSingles');
var readAllDoubles = require('./db_readAllDoubles');
var createSingleUser = require('./db_createSingleUser');
var createDoubleUser = require('./db_createDoubleUser');
var updateSingles = require('./db_updateSingles');
var updateDoubles = require('./db_updateDoubles');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createSingleUser', function(req, res)
{
    createSingleUser(req.body.name, function (result){
        res.send(result);
    });
});

app.post('/createDoubleUser', function(req, res) {
    createDoubleUser(req.body.name, function (result){
        res.send(result);
    })
});

app.post('/updateSingles', function (req, res) {
    updateSingles(req.body.name, req.body.wins, function (result){
        res.send(result);
    });
});

app.post('/updateDoubles', function (req, res) {
    updateDoubles(req.body.name, req.body.wins, function (result){
        res.send(result);
    });
});

app.get('/readAllSingles', function(req, res) {
    readAllSingles(function (result){
        res.send(result);
    });
});

app.get('/readAllDoubles', function(req, res) {
    readAllDoubles(function (result){
        res.send(result)
    });
});

app.listen(3000, function(){
    console.log('Listing on port: 3000');
});
/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var express = require('express');
var app = express();
var readAllSingles = require('./db_readAllSingles')
var readAllDoubles = require('./db_readAllDoubles')
var createSingleUser = require('./createSingleUser')
var createDoubleUser = require('./createDoubleUser')

var test = require('./test')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/createSingleUser', function(req, res)
{
    var name = req.body.name;
    console.log(name);
    createSingleUser(function (result){res.send(result)}, name)
})

app.post('/createDoubleUser', function(req, res)
{
    var name = req.body.name;
    console.log(name);
    createDoubleUser(function (result){res.send(result)}, name)
})

app.get('/', function (req, res)
{
    res.send('Hello World')
});

app.get('/readAllSingles', function(req, res)
    {
        readAllSingles(function (result){res.send(result)});
    });

app.get('/readAllDoubles', function(req, res)
    {
        readAllDoubles(function (result){res.send(result)});
    });


app.get('/test/:name', function(req, res)
{
    test(function (callback){res.send(callback)} , req.params.name);
})

app.listen(3000);
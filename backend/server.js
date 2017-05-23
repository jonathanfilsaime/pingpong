/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var express = require('express');
var readSingles = require('./db_readSingles')
var readDoubles = require('./db_readDoubles')
var test = require('./test')
var app = express();

app.get('/', function (req, res)
{
    res.send('Hello World')
});

app.get('/readSingles', function(req, res)
    {
        readSingles(function (result){res.send(result)});
    }
)

app.get('/readDoubles', function(req, res)
    {
        readDoubles(function (result){res.send(result)});
    }
)

app.get('/test/:name', function(req, res)
{
    test(function (callback){res.send(callback)} , req.params.name);
})

app.listen(3000);
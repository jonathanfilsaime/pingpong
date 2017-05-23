/**
 * Created by jonathanfilsaime on 5/22/2017.
 */
var express = require('express');
var readSingles = require('./db_readSingles')
var readSingles = require('./db_readDoubles')
var app = express();

app.get('/', function (req, res)
{
    res.send('Hello World')
});

app.get('/readSingles', function(req, res)
    {
        readSingles();
    }
)

app.get('/readDoubles', function(req, res)
    {
        readSingles();
    }
)

app.listen(3000);
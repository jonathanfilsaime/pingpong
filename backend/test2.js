/**
 * Created by jonathanfilsaime on 5/24/2017.
 */
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/users', function(req, res) {
    var user_Name = req.body.id;

    res.send(user_id + ' ' + token + ' ' + geo);
});
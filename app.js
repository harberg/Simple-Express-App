var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("This would be some HTML");
});

app.listen(3000);
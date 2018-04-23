var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Welcome to Connor\'s API');
})

app.listen(port, function(){
    console.log('Gulp running on PORT: ' + port);
});
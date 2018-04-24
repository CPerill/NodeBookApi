var express = require('express');
var mongoose = require('mongoose');
var Book = require('./models/bookModel');

var db = mongoose.connect('mongodb://localhost/bookAPI');



var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function(req, res) {
        Book.find(function(err, books) {
            if(err) {
                console.log(err);
            } else {
                res.json(books);
            }
        });
    });

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('Welcome to Connor\'s API');
})

app.listen(port, function(){
    console.log('Gulp running on PORT: ' + port);
});
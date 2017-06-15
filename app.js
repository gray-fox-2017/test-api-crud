const express = require('express');
var bodyParser = require('body-parser');


var books = require('./routes/books')
var transactions = require('./routes/transactions')

const app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');



app.use(bodyParser.json({verify:function(req,res,buf){req.rawBody=buf}}))
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

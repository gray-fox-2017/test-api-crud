const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

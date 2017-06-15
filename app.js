const express = require('express');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')
const app = express()

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

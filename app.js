const express = require('express');


var mongoose = require('mongoose');
mongoose.connect('mongodb://books:books@ds149491.mlab.com:49491/mongoosecrud');

var books = require('./routes/books')
var transactions = require('./routes/transactions')
const app = express()

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

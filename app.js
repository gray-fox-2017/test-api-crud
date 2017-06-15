const express = require('express');


var mongoose = require('mongoose');
mongoose.connect('mongodb://books:books@ds149491.mlab.com:49491/mongoosecrud');

var books = require('./routes/books')
var transactions = require('./routes/transactions')
// var user = require('./routes/users')
const app = express()

app.use('/books', books);
app.use('/transactions', transactions);
// app.use('/', user);

app.listen(3000)

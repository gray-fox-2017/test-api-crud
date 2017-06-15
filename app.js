const express = require('express');
const app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')




app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

module.exports = app;

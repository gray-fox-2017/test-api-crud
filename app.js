const express = require('express');
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.raw())
app.use(bodyParser.json())
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

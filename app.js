const express = require('express');
const app = express()
const bodyParser = require('body-parser')
var books = require('./routes/books')
// var transactions = require('./routes/transactions')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', books);
// app.use('/transactions', transactions);

app.listen(3000)

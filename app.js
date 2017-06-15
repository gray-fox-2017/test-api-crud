const express = require('express');
const bodyParser = require('body-parser')
const app = express()


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');
app.set(bodyParser.json())
app.set(bodyParser.urlencoded({extended:false}))

var books = require('./routes/books')
var transactions = require('./routes/transactions')


app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)

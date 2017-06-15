const express = require('express');
const app = express();
// const router = express.Router;

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
module.exports = app;

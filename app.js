const express = require('express');
const bodyParser = require('body-parser')
const app = express();
// const router = express.Router;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose');

var books = require('./routes/books')
var transactions = require('./routes/transactions')

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
module.exports = app;

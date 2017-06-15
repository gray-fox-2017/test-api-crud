var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: Number,
  category: String,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book

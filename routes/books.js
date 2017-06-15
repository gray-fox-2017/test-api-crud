const express = require('express');
const router = express.Router
var booksController = require('../controllers/books');
// var transactionsController = require('../controllers/transactions');

// NOTE: Book
router.get('/books', booksController.all)
// router.post('/', booksController.create)
// router.put('/:id', booksController.update)
// router.delete('/:id', booksController.delete)


// NOTE: Transaction
// router.get('/', transactionsController.all)
// router.post('/', transactionsController.create)
// router.put('/:id', transactionsController.update)
// router.delete('/:id', transactionsController.delete)

module.exports = router
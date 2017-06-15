const express = require('express');
const router = express.Router()
var booksController = require('../controllers/books.js');

router.get('/', booksController.all)
router.post('/', booksController.create)
router.put('/:id', booksController.update)
router.delete('/:id', booksController.delete)

module.exports = router
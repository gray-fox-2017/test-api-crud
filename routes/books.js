var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books');

router.get('/', booksController.all) //v
router.post('/', booksController.create) //v
router.put('/:id', booksController.update) //v
router.delete('/:id', booksController.delete) //v

module.exports = router;
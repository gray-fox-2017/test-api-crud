const express = require('express');
var router = express.Router();
var transactionsController = require('../controllers/transactions');

router.get('/', transactionsController.all)
router.post('/', transactionsController.create)
router.put('/:id', transactionsController.update)
router.delete('/:id', transactionsController.delete)

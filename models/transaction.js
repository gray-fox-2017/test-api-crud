var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction

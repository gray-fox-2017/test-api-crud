const Book = require('../models/book')
module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(books)
    })
  },
  create: function(req, res) {
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(result)
    });
  },
  update: function(req, res) {
    console.log(Object.keys(req.body)[0]);
    let body = JSON.parse(Object.keys(req.body)[0])
    Book.findById(req.params.id, (err, data)=>{
      if(!err){
        console.log(typeof body);
        console.log(body.isbn ,body.title ,body.author ,body.category ,body.stock ,body.price);
        Book.findByIdAndUpdate(req.params.id, {
          // $set: req.body
          $set: {
            isbn: body.isbn || data.isbn,
            title: body.title || data.title,
            author: body.author || data.author,
            category: body.category || data.category,
            stock: body.stock || data.stock,
            price: body.price || data.price
          }
        }, function(err, result) {
          if (err) {
            res.status(500)
            res.send({err: err})
          }
          res.status(200)
          res.send(result)
        });
      }
    })

  },
  delete: function(req, res) {
    Book.remove({ _id: req.id }, function (err, result) {
      if (err) {
        res.status(500)
        res.send({err: err})
      }
      res.status(200)
      res.send(result)
    });
  }
}

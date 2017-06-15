const User = require ('../models/user')

function login (req,res){
  User.findOne({
    username: req.body.username,
    password: req.body.password
  },function(err,result){
    res.send(result)
  })
}

function signup (req,res){
  User.create({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone
  })
}

module.exports = {
  login,signup
}
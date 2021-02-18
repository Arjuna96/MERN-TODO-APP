const express = require('express');
const router = express.Router();

let Account = require('../models/user');

// register details
router.post('/register', function (req, res) {
  console.log(req.body);
  // save account details
  Account({
    username: req.body.username,
    password: req.body.password,
  }).save(function (err, doc) {
    if (err) {
      res.send({ message: 'Username already exists..' });
    } else {
      res.send({ message: 'Success' });
    }
  });
});

// login
router.post('/login', function (req, res) {
  req.body.username = req.body.username.toLowerCase();
  req.body.password = req.body.password.toLowerCase();

  // look up username/ps  in database
  Account.find({ username: req.body.username, password: req.body.password }, function (err, doc) {
    if (err) throw err;

    if (!doc.length) {
      res.send({ message: 'Username or password is incorrect.' });
    } else {
      res.send({ message: 'Success' });
    }
  });
});

module.exports = router;

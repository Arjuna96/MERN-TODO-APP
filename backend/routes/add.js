const express = require('express');
const router = express.Router();

let Todo = require('../models/todo');

// add new todo
router.post('/todo', function (req, res) {
  Todo({
    todo: req.body.title,
    description: req.body.description,
    isDone: req.body.isDone,
    username: req.body.user,
  }).save(function (err, doc) {
    if (err) throw err;
    console.log('new todo saved!');
    res.send(doc);
  });
});

module.exports = router;

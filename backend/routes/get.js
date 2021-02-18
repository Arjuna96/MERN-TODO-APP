const express = require('express');
const router = express.Router();

let Todo = require('../models/todo');

// get all todos
router.get('/todo', function (req, res) {
  Todo.find({ username: req.query.username }, function (err, result) {
    if (err) throw err;

    res.send({ todos: result, username: req.query.username });
  });
});

// get only active todos
router.get('/todo-active', function (req, res) {
  //   console.log(req.query.username);
  Todo.find({ username: req.query.username, isDone: false }, function (err, result) {
    if (err) throw err;

    res.send({ todos: result, username: req.query.username });
  });
});

module.exports = router;

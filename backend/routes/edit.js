const express = require('express');
const router = express.Router();

let Todo = require('../models/todo');

// save todo edit
router.put('/todo', function (req, res) {
  Todo.updateOne({ _id: req.body.id }, { todo: req.body.todo, description: req.body.description }, function (err, doc) {
    if (err) throw err;
    console.log('todo edited!');
    res.send(doc);
  });
});

// update the document when todo complete
router.put('/complete/', function (req, res) {
  Todo.updateOne({ _id: req.body.id }, { isDone: req.body.isDone }, function (err, doc) {
    if (err) throw err;
    console.log('todo completed!');
    res.send(doc);
  });
});
module.exports = router;

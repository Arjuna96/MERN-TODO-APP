const express = require('express');
const router = express.Router();

let Todo = require('../models/todo');

// remove the document that matches the id.
router.delete('/todo/:id', function (req, res) {
  // console.log(req.params.id);
  Todo.deleteOne({ _id: req.params.id }, function (err, doc) {
    if (err) throw err;

    res.send(doc);
  });
});

module.exports = router;

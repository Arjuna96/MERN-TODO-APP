const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: String,
  description: String,
  isDone: Boolean,
  username: String,
});

module.exports = mongoose.model('Todo', todoSchema);

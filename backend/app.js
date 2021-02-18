// importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./configs/db');
const cors = require('cors');
const app = express();

// making the connection to mongo database
mongoose.connect(db.config.uri, db.config.options);

// middlewares for express routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

// express routes that exist
app.use('/add', require('./routes/add'));
app.use('/remove', require('./routes/remove'));
app.use('/edit', require('./routes/edit'));
app.use('/get', require('./routes/get'));
app.use('/', require('./routes/auth'));

app.listen(process.env.PORT || 5000, function () {
  console.log('listening on port 5000!');
});

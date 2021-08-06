const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 5000;

// read env
dotenv.config();

// db connection
const db = require('./db');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main routes
app.use('/', require('./api'));

app.listen(port, () => console.log(`listening on port ${port}`));
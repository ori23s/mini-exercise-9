const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');

require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING);

var app = express();
const categories = require('./routes/category');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use('/articles', articles); 
app.use('/categories', categories);
app.listen(process.env.PORT); 
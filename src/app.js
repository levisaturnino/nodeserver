'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/',indexRoute);
app.use('/product',productRoute);


module.exports = app;
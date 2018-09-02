'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// conexao com banco de dados na url mongo lab
mongoose.connect('mongodb://iwater:iwater01@ds141812.mlab.com:41812/iwater');

const Product = require('../models/product.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/',indexRoute);
app.use('/products',productRoute);


module.exports = app;
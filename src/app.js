'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
// conexao com banco de dados na url mongo lab
mongoose.connect(config.connectionString);

// Carregar os Models
const Product = require('../models/product.js');
const Customer = require('../models/customer')
const Order = require('../models/order')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use('/',indexRoute);
app.use('/products',productRoute);
app.use('/customers',customerRoute);
app.use('/orders',orderRoute);

module.exports = app;
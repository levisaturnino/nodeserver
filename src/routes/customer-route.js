'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/customer-controller.js');

router.post('/',controller.post);
router.get('/',controller.get);

router.get('/admin/:id',controller.getById);


router.put('/:id',controller.put);
router.put('/',controller.putById);

router.delete('/',controller.delete);

module.exports = router;
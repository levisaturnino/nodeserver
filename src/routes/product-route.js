'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/product-controller.js');

router.post('/',controller.post);
router.get('/',controller.get);
router.get('/:slug',controller.getBySlug);
router.get('/admin/:id',controller.getById);
router.get('/tags/:tags',controller.getByTags);

router.put('/:id',controller.put);
router.delete('/',controller.delete);

module.exports = router;

const express = require('express');
const productController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', productController.getAllProducts);

module.exports = router;

const express = require('express');
const serviceController = require('../controllers/ServiceController');

const router = express.Router();

router.get('/', serviceController.getAllServices);

module.exports = router;
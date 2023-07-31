const express = require('express');
const cartController = require('../controllers/CardController');

const router = express.Router();

router.post('/add', cartController.addToCart);
router.post('/remove', cartController.removeFromCart);
router.post('/clear', cartController.clearCart);
router.get('/total', cartController.viewCartTotal);
router.post('/confirm', cartController.confirmOrder);

module.exports = router;

const CartItem = require('../models/CardItem');

const Product = require('../models/Products');

const Service = require('../models/Service');
const { calculateTax } = require('../utils/taxCalculator');


const addToCart = async (req, res, next) => {
  try {
    const { userId, itemType, itemId, quantity } = req.body;
    let item;
    if (itemType === 'product') {
      item = await Product.findById(itemId);
    } else if (itemType === 'service') {
      item = await Service.findById(itemId);
    } else {
      throw new Error('Invalid item type.');
    }

    if (!item) {
      throw new Error('Item not found.');
    }

    const tax = calculateTax(item.price, itemType);

    const cartItem = new CartItem({
      userId,
      itemType,
      itemId,
      quantity,
      tax,
    });

    await cartItem.save();
    res.status(201).json({ message: 'Item added to the cart successfully.' });
  } catch (err) {
    next(err);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const { userId, itemType, itemId } = req.body;
    // Check if the item exists in the cart
    const cartItem = await CartItem.findOneAndDelete({ userId, itemType, itemId });
   
    if (!cartItem) {
      throw new Error('Item not found in the cart.');
    }

    res.json({ message: 'Item removed from the cart successfully.' });
  } catch (err) {
    next(err);
  }
};

const clearCart = async (req, res, next) => {
  try {
    const { userId } = req.body;
    // Clear the cart
    await CartItem.deleteMany({ userId });
    res.json({ message: 'Cart cleared successfully.' });
  } catch (err) {
    next(err);
  }
};

const viewCartTotal = async (req, res, next) => {
  try {
    const { userId } = req.body;
    // Calculate the total bill with taxes
    const cartItems = await CartItem.find({ userId }).populate('itemId');
    let total = 0;
    cartItems.forEach((item) => {
      total += item.itemId.price * item.quantity + item.tax;
    });
    res.json({ total, cartItems });
  } catch (err) {
    next(err);
  }
};

const confirmOrder = async (req, res, next) => {
  try {
    const { userId } = req.body;
    await CartItem.deleteMany({ userId });
    res.json({ message: 'Order confirmed successfully.' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  clearCart,
  viewCartTotal,
  confirmOrder,
};
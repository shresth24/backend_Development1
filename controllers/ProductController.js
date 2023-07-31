
// controllers/productController.js

const Product = require('../models/Products');
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
};

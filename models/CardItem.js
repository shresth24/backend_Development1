const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemType: { type: String, required: true }, 
  itemId: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('CartItem', cartItemSchema);
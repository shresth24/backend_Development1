const User = require('../models/User');


const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  registerUser,
};















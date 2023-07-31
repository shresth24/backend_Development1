const Service = require('../models/Service');


const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllServices,
};
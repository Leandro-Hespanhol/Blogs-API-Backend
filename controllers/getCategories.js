const services = require('../services/categories');

module.exports = async (_req, res) => {
  const allCategories = await services.getAllCategories();

  return res.status(200).json(allCategories);
};
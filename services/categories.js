const { Categories } = require('../models');

const createCategory = async (name) => Categories.create(name);

module.exports = {
  createCategory,
};
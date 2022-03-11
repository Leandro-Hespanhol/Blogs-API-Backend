const { Categories } = require('../models');

const createCategory = async (name) => Categories.create(name);

const getAllCategories = async () => Categories.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};
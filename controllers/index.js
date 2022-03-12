const createUser = require('./createUser');
const login = require('./login');
const getUsers = require('./getUsers');
const getUsersById = require('./getUsersById');
const createCategory = require('./createCategory');
const getCategories = require('./getCategories');
const createBlogPost = require('./createBlogPost');

module.exports = {
  createUser: createUser.userCreation,
  login,
  getUsers,
  getUsersById,
  createCategory,
  getCategories,
  createBlogPost,
};
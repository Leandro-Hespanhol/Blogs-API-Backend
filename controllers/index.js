const createUser = require('./createUser');
const login = require('./login');
const getUsers = require('./getUsers');
const getUsersById = require('./getUsersById');
const createCategory = require('./createCategory');

module.exports = {
  createUser: createUser.userCreation,
  login,
  getUsers,
  getUsersById,
  createCategory,
};
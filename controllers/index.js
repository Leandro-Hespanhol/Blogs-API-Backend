const createUser = require('./createUser');
const login = require('./login');
const getUsers = require('./getUsers');
const getUsersById = require('./getUsersById');

module.exports = {
  createUser: createUser.userCreation,
  login,
  getUsers,
  getUsersById,
};
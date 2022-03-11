const createUser = require('./createUser');
const login = require('./login');
const getUsers = require('./getUsers');

module.exports = {
  createUser: createUser.userCreation,
  login,
  getUsers,
};
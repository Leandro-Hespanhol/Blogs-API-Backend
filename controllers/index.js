const createUser = require('./createUser');
const login = require('./login');

module.exports = {
  createUser: createUser.userCreation,
  login,
};
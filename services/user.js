const Users = require('../models/Users');

const create = async (user) => {
  const checkExistance = user.findOne();
  console.log('linha5 services', user);
  console.log('linha6 services', checkExistance);
  if (checkExistance) return null;
  return Users.create(user);
};

module.exports = {
  create,
};
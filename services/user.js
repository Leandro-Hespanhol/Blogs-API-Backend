const { Users } = require('../models');

const userFound = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  console.log('linha6 services', await user.email);
  if (!checkExistance) return null;
  
  return user;
};

const create = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  // console.log('linha6 services', checkExistance.dataValues);
  if (checkExistance) return null;
  return Users.create(user);
};

module.exports = {
  userFound,
  create,
};
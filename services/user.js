const { Users } = require('../models');

const create = async (user) => {
  // console.log('linha4 services', await user.email);
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  // console.log('linha6 services', checkExistance.dataValues);
  if (checkExistance) return null;
  return Users.create(user);
};

module.exports = {
  create,
};
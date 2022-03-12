const { Users } = require('../models');

const userFound = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  if (!checkExistance) return null;
  return user;
};

const create = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  // console.log('linha6 services', checkExistance.dataValues);
  if (checkExistance) return null;
  return Users.create(user);
};

const findUserById = async (id) => {
  const user = await Users.findOne({ where: { id } });

  return user;
};

const listUsers = async () => Users.findAll();

module.exports = {
  userFound,
  create,
  listUsers,
  findUserById,
};
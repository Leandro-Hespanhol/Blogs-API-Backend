const { Users } = require('../models');

const userFound = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  if (!checkExistance) return null;
  return user;
};

const create = async (user) => {
  const checkExistance = await Users.findOne({ where: { email: user.email } });
  if (checkExistance) return null;
  return Users.create(user);
};

const findUserById = async (id) => {
  const user = await Users.findOne({ where: { id } });

  return user;
};

const listUsers = async () => Users.findAll();

const deleteUser = async (id) => {
  const checkUser = await Users.findOne({ where: { id } });
  
  if (checkUser) {
    const user = await checkUser.dataValues.id;
    if (user !== id) return 'unauthorized';
  }

  const userToDelete = await Users.destroy({ where: { id } });

  return userToDelete;
};

module.exports = {
  userFound,
  create,
  listUsers,
  findUserById,
  deleteUser,
};
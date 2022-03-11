const services = require('../services/user');

module.exports = async (_req, res) => {
  try {
    const users = await services.listUsers();

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({ message: 'Erro inesperado' });
  }
};
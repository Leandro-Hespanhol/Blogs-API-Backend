const services = require('../services/user');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await services.findUserById(id);

    if (!users) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({ message: 'Erro inesperado' });
  }
};
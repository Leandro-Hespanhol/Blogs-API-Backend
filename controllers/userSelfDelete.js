const services = require('../services/user');

module.exports = async (req, res) => {
  const { id } = req.user;

  const user = await services.deleteUser(id);

  if (user === 'unauthorized') return res.status(401).json({ message: 'Unauthorized user' });

  return res.status(204).end();
};
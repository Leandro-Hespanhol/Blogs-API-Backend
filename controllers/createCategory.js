const services = require('../services/categories');

module.exports = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryCreated = await services.createCategory({ name });

    return res.status(201).json(categoryCreated.dataValues);
  } catch (e) {
    res.status(500).json({ message: 'Erro inesperado' });
  }
};
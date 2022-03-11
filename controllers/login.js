const jwt = require('jsonwebtoken');
const { userFound } = require('../services/user');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (await userFound({ email, password }) === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ user: { email, password } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: 'erro geral' });
  }
};
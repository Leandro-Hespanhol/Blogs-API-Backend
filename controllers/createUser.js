const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const secret = process.env.JWT_SECRET;

const userCreation = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    if (!userService.create) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const jwtConfig = {
      // expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ user: { displayName, email, password, image } }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  userCreation,
};
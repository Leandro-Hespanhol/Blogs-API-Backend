const jwt = require('jsonwebtoken');
require('dotenv').config();
const userService = require('../services/user');

const secret = process.env.JWT_SECRET;

const userCreation = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const userCreated = await userService.create({ displayName, email, password, image });
    if (await userCreated === null) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ userCreated }, secret, jwtConfig);
    console.log(token);

    res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  userCreation,
};
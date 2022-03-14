const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decode = jwt.verify(token, secret);
  
    const user = await Users.findOne({ where: { email: decode.user.email } });
    console.log('liha 18 AUTH AUTH ', user);

    req.user = user.dataValues;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log('TOKEN LINHA 9 AUTH', !token); 
  console.log('TOKEN LINHA 10 AUTH', await Users); 
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Users = require('../models/Users');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await Users.findOne({ where: { displayName: decoded.user.displayName } });

    if (!user) {
      return res.status(401).json({ message: 'user not found' });
    }

    req.user = user;

    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};
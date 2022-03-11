const userService = require('../services/user');

const userCreation = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    if (!userService.create) {
      return res.status(409).json({ message: 'User already registered' });
    }
    res.status(201).json({ displayName, email, password, image });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  userCreation,
};
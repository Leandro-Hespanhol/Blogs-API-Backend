const validadeDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (typeof displayName !== 'string' || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validadeEmailSyntax = (req, res, next) => {
  const { email } = req.body;

  if (!email && email !== '') {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  const emailRegex = /\S+@\S+.\S\.+com/;
  if (!emailRegex.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validadePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password && password !== '') {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (password.length !== 6) {
    return res.status(400)
      .json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validadeDisplayName,
  validadeEmailSyntax,
  validadePassword,
};
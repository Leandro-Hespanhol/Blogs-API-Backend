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

const categoryName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const blogPostTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const blogPostContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const blogCategoryId = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  next();
};

module.exports = {
  validadeDisplayName,
  validadeEmailSyntax,
  validadePassword,
  categoryName,
  blogPostTitle,
  blogPostContent,
  blogCategoryId,
};
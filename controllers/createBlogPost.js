const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { id: userId } = req.user;

  const post = await services.createBlogPost({ userId, title, content, categoryIds });
  
  if (!post) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(post);
};
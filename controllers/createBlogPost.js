const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  console.log('CONTROLLER LINHA 5', req.user);

  if (!services.createBlogPost) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const post = await services.createBlogPost({ title, content, categoryIds });
  console.log('POST CONTROLLER', post);

  return res.status(201).json(post);
};
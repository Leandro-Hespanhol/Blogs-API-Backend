const services = require('../services/blogPosts');

module.exports = async (_req, res) => {
  const post = await services.getAllBlogPosts();

  return res.status(200).json(post);
};
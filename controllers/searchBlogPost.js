const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { q } = req.query;
  const posts = await services.findByTitleOrContent(q);

  return res.status(200).json(posts);
};
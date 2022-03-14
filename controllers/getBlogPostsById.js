const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { id } = req.params;
  const [post] = await services.getBlogPostById(id);
  // console.log('ṔOST CONTROOLLER', post);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};
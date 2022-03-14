const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const post = await services.deleteBlogPost(id, userId);
  console.log('CONTROLLER 8', post);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post === 'unauthorized') return res.status(401).json({ message: 'Unauthorized user' });

  return res.status(204).end();
};
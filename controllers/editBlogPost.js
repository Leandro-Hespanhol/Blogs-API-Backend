const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;

  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  // if (!title) return res.status(400).json({ message: '"title" is required' });
  // if (!content) return res.status(400).json({ message: '"content" is required' });

  const [post] = await services.editBlogPost(id, title, content, userId);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post === 'unauthorized') return res.status(401).json({ message: 'Unauthorized user' });

  return res.status(200).json(post);
};
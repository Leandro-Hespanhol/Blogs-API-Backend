const services = require('../services/blogPosts');

module.exports = async (_req, res) => {
  const post = await services.getAllBlogPosts();
  // console.log('ṔOST CONTROOLLER', post);

  return res.status(200).json(post);
};
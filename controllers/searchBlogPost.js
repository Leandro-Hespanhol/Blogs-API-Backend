const services = require('../services/blogPosts');

module.exports = async (req, res) => {
  // const { title, content } = req.query;
  const { q } = req.query;
  console.log('REQ.QUERY', req.query);
  // let term;

  // if (title) term = { title };
  // if (content) term = { content };

  const posts = await services.findByTitleOrContent(q);
  // console.log('CPMTRPÇÇER', posts);

  return res.status(200).json(posts);
};
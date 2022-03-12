const { BlogPosts, Categories } = require('../models');

const createBlogPost = async (newPost) => {
  console.log('LINHA4 SERVICES', newPost);
  const checkCategoryId = await Categories.findOne({ where: { id: newPost.categoryIds[0] } });

  console.log('LINHA8 SERVICES', checkCategoryId.dataValues);
  if (!checkCategoryId) return null;
  const blogPost = await BlogPosts.create(newPost);

  return blogPost;
};

module.exports = {
  createBlogPost,
};
const { BlogPosts, Categories } = require('../models');

const createBlogPost = async (newPost) => {
  const checkCategoryId = await Categories.findOne({ where: { id: newPost.categoryIds[0] } });

  if (!checkCategoryId) return null;
  const blogPost = await BlogPosts.create(newPost);

  return blogPost;
};

module.exports = {
  createBlogPost,
};
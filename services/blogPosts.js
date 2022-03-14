const { BlogPosts, Categories, Users } = require('../models');

const createBlogPost = async (newPost) => {
  const checkCategoryId = await Categories.findOne({ where: { id: newPost.categoryIds[0] } });

  if (!checkCategoryId) return null;
  const blogPost = await BlogPosts.create(newPost);

  return blogPost;
};

const getAllBlogPosts = async () => {
  const allBlogPosts = await BlogPosts
    .findAll({ include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }] });
  // const allBlogPosts = await BlogPosts.findAll();
  // console.log('linha16 blogposts', allBlogPosts[0]);
  
  return allBlogPosts;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
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
  
  return allBlogPosts;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPosts.findAll({ 
    where: { id }, 
    include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }] });
    // console.log('LINHA30', blogPost);

    return blogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
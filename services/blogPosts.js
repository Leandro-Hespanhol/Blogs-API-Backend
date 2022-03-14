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

    return blogPost;
};

const editBlogPost = async (id, title, content, userId) => {
  const blogPost = await BlogPosts
    .update({ title, content }, { where: { id }, userId: { userId } });
  
  // console.log('id title content', id, title, content);
  // console.log('SERVICE LINHA 30', blogPost);
  const updated = await BlogPosts.findAll({ 
    where: { id }, 
    include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }] });
  // console.log('LINHA34 SERVICES', updated[0].dataValues.user.dataValues);
  if (updated[0].dataValues.user.dataValues.id !== userId) return ['unauthorized'];
  if (blogPost.length) return updated;

  return blogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  editBlogPost,
};
const createUser = require('./createUser');
const login = require('./login');
const getUsers = require('./getUsers');
const getUsersById = require('./getUsersById');
const createCategory = require('./createCategory');
const getCategories = require('./getCategories');
const createBlogPost = require('./createBlogPost');
const getBlogPosts = require('./getBlogPosts');
const getBlogPostsById = require('./getBlogPostsById');
const editBlogPost = require('./editBlogPost');
const deleteBlogPost = require('./deleteBlogPost');
const userSelfDelete = require('./userSelfDelete');

module.exports = {
  createUser: createUser.userCreation,
  login,
  getUsers,
  getUsersById,
  createCategory,
  getCategories,
  createBlogPost,
  getBlogPosts,
  getBlogPostsById,
  editBlogPost,
  deleteBlogPost,
  userSelfDelete,
};
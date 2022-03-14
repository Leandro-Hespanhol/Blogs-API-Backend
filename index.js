const express = require('express');
// const bodyParser = require('body-parser');
const Validations = require('./middlewares/Validations');
const controllers = require('./controllers');
const auth = require('./services/jwtAuth');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', Validations.validadeDisplayName, Validations.validadeEmailSyntax,
Validations.validadePassword, controllers.createUser);

app.post('/login', Validations.validadeEmailSyntax, Validations.validadePassword,
controllers.login);

app.get('/user', auth, controllers.getUsers);

app.get('/user/:id', auth, controllers.getUsersById);

app.post('/categories', auth, Validations.categoryName, controllers.createCategory);

app.get('/categories', auth, controllers.getCategories);

app.post('/post', auth, Validations.blogPostTitle, Validations.blogPostContent, 
Validations.blogCategoryId, controllers.createBlogPost);

app.get('/post', auth, controllers.getBlogPosts);
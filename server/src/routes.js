const routes = require('express').Router();
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const TagController = require('./controllers/TagController');

routes.post('/user/login', UserController.login);
routes.get('/user', UserController.show);
routes.get('/user/:name', UserController.index);
routes.post('/user/create', UserController.create);
routes.delete('/user/delete', UserController.delete);

routes.get('/post', PostController.show);
routes.get('/post/:id', PostController.index);
routes.post('/post/create', PostController.create);
routes.delete('/post/delete', PostController.delete);
routes.put('/post/update', PostController.update);

routes.get('/tag', TagController.show);
routes.get('/tag/:tag', TagController.index);

module.exports = routes;

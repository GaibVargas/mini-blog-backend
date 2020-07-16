const routes = require('express').Router();
const PostController = require('../controllers/PostController');

routes.get('/', PostController.show);
routes.get('/:id', PostController.index);
routes.post('/create', PostController.create);
routes.delete('/delete', PostController.delete);

module.exports = routes;

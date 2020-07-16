const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.post('/login', UserController.login);
routes.get('/', UserController.show);
routes.get('/:name', UserController.index);
routes.post('/create', UserController.create);
routes.delete('/delete', UserController.delete);

module.exports = routes;

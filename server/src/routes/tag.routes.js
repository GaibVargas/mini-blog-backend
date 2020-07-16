const routes = require('express').Router();
const TagController = require('../controllers/TagController');

routes.get('/', TagController.show);
routes.get('/:tag', TagController.index);

module.exports = routes;
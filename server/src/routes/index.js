const routes = require('express').Router();

const user = require('./user.routes');
const post = require('./post.routes');
const tag = require('./tag.routes');

routes.use('/user', user);
routes.use('/post', post);
routes.use('/tag', tag);

module.exports = routes;

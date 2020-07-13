const routes = require('express').Router();

routes.get('/', (req, res) => {
  return res.json({
    message: 'Working!'
  });
});

module.exports = routes;

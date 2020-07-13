const routes = require('express').Router();

routes.get('/', async(req, res) => {
  return res.json({
    message: "Working!"
  });
});

module.exports = routes;

const { show, index } = require("./UserController");

const { Tag } = require('../database/models');

module.exports = {
  async show(req, res) {
    const tags = await Tag.findAll();

    return res.json(tags);
  },

  async index(req ,res) {
    const {tag} = req.params;

    const postsWithTag = await Tag.findOne({
      where: { description: tag },
      include: [{
        association: 'posts',
        through: { attributes: [] },
        include: [{
          association: 'author',
          attributes: ['name']
        }]
      }]
    });

    return res.json(postsWithTag);
  },
}
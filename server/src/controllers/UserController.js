const { User } = require('../database/models');

module.exports = {
  async create(req, res) {
    const { name, password } = req.body;
    
    const user = await User.create({ name, password });

    return res.json(user);
  },

  async show(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async login(req, res) {
    const { name, password } = req.body;

    const user = await User.findOne({
      where: { name, password }
    });

    if(!user) return res.json({ message: "Name or password invalid." });

    return res.json(user);
  },

  async index(req, res) {
    const { name } = req.params;

    const user = await User.findOne({
      where: { name },
      include: [{
        association: 'posts',
        include: [{
          association: 'tags',
          attributes: ['description'],
          through: { attributes: [] },
        }]
      }]
    });

    if(!user) return res.json({ message: "User not found!" });

    return res.json(user);
  },

  async delete(req, res) {
    const { name, password } = req.body;

    const user = await User.destroy({
      where: { name, password }
    });

    return res.json({ message: "User deleted!" });
  },
}